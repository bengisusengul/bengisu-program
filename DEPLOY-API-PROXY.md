# 🛡️ Anthropic API Proxy · Cloudflare Worker Deploy

API key'i client'ta tutmak yerine **sunucu tarafında** saklamak için. Tek seferlik kurulum, ücretsiz.

## Neden gerekli?

Şu anda Anthropic API key `localStorage.anthropic_key` içinde. Riskler:
- Tarayıcı çerezleri silinince key kaybolur (Backup/Export ile bile yedeklenmez — güvenlik)
- Aynı cihazı başka biri kullanırsa (eş, kız kardeş) key görünür
- API key sızarsa (paylaşılan ekran, screenshot) kötüye kullanılabilir

Cloudflare Worker proxy:
- Key sadece Cloudflare environment variable'da (sunucuda)
- Client'tan key gelmez — sadece **proxy URL** ve isteğe bağlı **basit token**
- Origin kısıtlama (sadece bengisusengul.github.io'dan kabul)
- Rate limit 30/dk
- Model whitelist (Haiku/Sonnet/Opus 4.x)

## Kurulum (15 dk · tek seferlik)

### 1. Cloudflare hesabı

1. [https://cloudflare.com/](https://cloudflare.com/) → Sign Up (ücretsiz)
2. Email doğrula

### 2. Wrangler CLI kur (Mac/Linux)

```bash
brew install cloudflare-wrangler
# veya: npm install -g wrangler

wrangler login
# Tarayıcıda Cloudflare'a yönlendirir → Authorize
```

### 3. Worker projesi oluştur

```bash
cd ~/Desktop/bengisu-program
mkdir api-proxy && cd api-proxy

# wrangler.toml
cat > wrangler.toml << 'EOF'
name = "bengisu-api-proxy"
main = "worker.js"
compatibility_date = "2024-01-01"
EOF

# Worker dosyasını ana repo'dan kopyala
cp ../cloudflare-worker.js worker.js
```

### 4. Secrets ekle

```bash
# Anthropic API key (Anthropic console'dan al: console.anthropic.com)
wrangler secret put ANTHROPIC_API_KEY
# Prompt'ta sk-ant-... key'i yapıştır

# Allowed origins (virgülle ayrılmış)
wrangler secret put ALLOWED_ORIGINS
# Yapıştır: https://bengisusengul.github.io,http://localhost:8000

# Opsiyonel: ekstra koruma için bir token (Bengisu sadece kendi cihazından çağırsın)
wrangler secret put AUTH_TOKEN
# Rastgele bir string: bengisu-2026-may-secret-xxxxx
```

### 5. (Opsiyonel) Rate limit için KV namespace

```bash
wrangler kv:namespace create "RATE_KV"
# Çıktıda id görünür → wrangler.toml'a ekle:

# wrangler.toml içine ekle:
# [[kv_namespaces]]
# binding = "RATE_KV"
# id = "abc123..."
```

### 6. Deploy

```bash
wrangler deploy
# Çıktı: "Published to https://bengisu-api-proxy.YOUR-USERNAME.workers.dev"
```

URL'i kaydet — birazdan siteye gireceksin.

### 7. Bengisu Program'da proxy ayarı

1. Site → **Döngü** sekmesi → en alta in
2. **🛡️ API Proxy** kartı → **Proxy URL** alanı
3. Yapıştır: `https://bengisu-api-proxy.YOUR-USERNAME.workers.dev`
4. AUTH_TOKEN kullandıysan: **Auth Token** alanı → token'ı yapıştır
5. **Kaydet** → tüm AI çağrıları (Renpho/Custom Food/Adaptive Yük) artık proxy üzerinden gider

API key alanını boş bırakabilirsin (proxy varsa key client'ta gerek yok).

## Test

1. Diyet sekmesi → Custom Food → "öğlen 250g köfte yedim" → 🤖 Claude tahmin
2. Network tab'ında istek `bengisu-api-proxy.workers.dev/v1/messages`'e gitmeli, `api.anthropic.com`'a değil
3. Response geliyorsa proxy çalışıyor

## Maliyet

- Cloudflare Worker free tier: **100K istek/gün**
- Bengisu kullanımı: ~5-20 istek/gün → free tier'da ölmez
- Anthropic API: kullanım bazlı (Haiku ~$0.001/istek)

## Geri alma

Proxy kullanmayı bırakmak istersen:
1. Site → Döngü → API Proxy → Proxy URL'i sil
2. Anthropic API key'i tekrar ana ayara yaz
3. Worker silmek istersen: `wrangler delete bengisu-api-proxy`
