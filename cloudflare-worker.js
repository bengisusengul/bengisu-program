// Bengisu Program · Anthropic API Proxy Worker (Phase 3.B-D)
// Deploy: Cloudflare Workers (free tier yeterli)
// Görev: API key sunucu tarafında saklı, client'tan çağrı geldiğinde Anthropic'e forward eder
// Plus: rate-limit, origin restriction, simple auth token

// ── Cloudflare Worker secrets (wrangler secret put):
//   ANTHROPIC_API_KEY  — gerçek Anthropic API key (sk-ant-...)
//   ALLOWED_ORIGINS    — comma-separated origin list (örn. "https://bengisusengul.github.io,http://localhost:8000")
//   AUTH_TOKEN         — opsiyonel basit token (kullanıcıdan beklenen, query/header)

const RATE_LIMIT_PER_MIN = 30; // user başına dakikada max istek
const ALLOWED_MODELS = [
  'claude-haiku-4-5-20251001',
  'claude-sonnet-4-6',
  'claude-opus-4-7'
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request, env)
      });
    }

    // POST /v1/messages → Anthropic'e forward
    if (url.pathname !== '/v1/messages' || request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
      });
    }

    // Origin kontrolü
    const origin = request.headers.get('origin') || '';
    const allowedOrigins = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    if (allowedOrigins.length && !allowedOrigins.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
        status: 403,
        headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
      });
    }

    // Auth token (opsiyonel)
    if (env.AUTH_TOKEN) {
      const token = request.headers.get('x-bengisu-token') || '';
      if (token !== env.AUTH_TOKEN) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
        });
      }
    }

    // Rate limit (cf-connecting-ip + 60sn window) · KV gerek
    if (env.RATE_KV) {
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      const key = `rate:${ip}:${Math.floor(Date.now() / 60000)}`;
      const count = parseInt(await env.RATE_KV.get(key) || '0');
      if (count >= RATE_LIMIT_PER_MIN) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded · 30/min' }), {
          status: 429,
          headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
        });
      }
      ctx.waitUntil(env.RATE_KV.put(key, String(count + 1), { expirationTtl: 120 }));
    }

    // Body parse + model whitelist
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
      });
    }
    if (!body.model || !ALLOWED_MODELS.includes(body.model)) {
      return new Response(JSON.stringify({ error: 'Model not allowed', allowed: ALLOWED_MODELS }), {
        status: 400,
        headers: { 'content-type': 'application/json', ...corsHeaders(request, env) }
      });
    }

    // Forward to Anthropic
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const respBody = await upstream.text();
    return new Response(respBody, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') || 'application/json',
        ...corsHeaders(request, env)
      }
    });
  }
};

function corsHeaders(request, env) {
  const origin = request.headers.get('origin') || '';
  const allowedOrigins = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const allowOrigin = allowedOrigins.includes(origin) ? origin : '*';
  return {
    'access-control-allow-origin': allowOrigin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type, x-bengisu-token',
    'access-control-max-age': '86400'
  };
}
