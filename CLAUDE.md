# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Önce oku: PROGRESS.md

**Yeni sohbete başlarken `PROGRESS.md` dosyasını mutlaka oku.** Proje durum dosyasıdır: hangi fazda olduğumuz, son commitler, tüm `localStorage` anahtarları, kullanıcı tercihleri, beklemekteki kararlar burada. Ayrıca bekleyen iş listesi (`Pending` bölümü) ve her commit'in özeti var. Mimariyi `PROGRESS.md` § "Teknik Mimari" tablosundan ve `localStorage` anahtarları tablosundan al — bu CLAUDE.md sadece yüksek seviyeli yön sağlar.

## Proje Genel Bakış

Bengisu için tek kullanıcılı kişisel sağlık takip PWA'sı. Türkçe UI, 6 sekme: **Bugün** (Dashboard) · **Döngü** (menstrual cycle) · **Diyet** (karnivor + IF) · **Egzersiz** (5-gün split, cycle-aware) · **Cilt** · **Ölçüm**. GitHub Pages'de yayında: https://bengisusengul.github.io/bengisu-program/

## Mimari — Tek Dosyada PWA

```
index.html         ~9700 satır, ~670KB · TÜM uygulama: inline <style> + inline <script>, vanilla JS, framework YOK, modül YOK
sw.js              Service Worker (install/activate/fetch/push/notificationclick)
manifest.json      PWA manifest (Türkçe, "Bengisu ☀️")
cloudflare-worker.js  Opsiyonel Anthropic API proxy (Cloudflare Worker)
bg.jpeg            Arka plan görseli (Bugün sayfasında görünür)
```

**Backend yok.** Tüm veri tarayıcının `localStorage`'ında. ~30+ anahtar — listesinin tamamı `PROGRESS.md` § "localStorage anahtarları" tablosunda. Yedekleme: Cycle Settings → Backup/Export → JSON download/upload (BACKUP_KEYS whitelist; API key güvenlik için dışlanır).

**AI çağrıları:** Anthropic API. İki yol:
1. **Direct** — Kullanıcının kendi key'i (`localStorage.anthropic_key`), browser → `api.anthropic.com`.
2. **Proxy** — Cloudflare Worker (`cloudflare-worker.js`), key sunucuda. Aktive edilirse `window.fetch` monkey-patch'i mevcut 9 çağrıyı (`Renpho/Custom Food/Recipe/Suggest/Adaptive/CFM/Health Photo/Pre-WO/Wedding`) otomatik proxy'ye yönlendirir — kod değişikliği yok.

Modeller (whitelist `cloudflare-worker.js:12`): `claude-haiku-4-5-20251001`, `claude-sonnet-4-6`, `claude-opus-4-7`.

## Cycle Engine — Tüm Sekmelerin Temeli

Üç helper her render'ı besler:
- `ci(d)` — cycle phase + cycle day (Menstruation / Follicular / Ovulation / Luteal)
- `inP(d)` — verilen tarih regl içinde mi (önce logged data'ya, yoksa tahmine bakar)
- `preP(d)` — luteal'in son 4 günü mü (PMS pencere)

Diyet macro hedefleri (`getMacroTarget(d)`), cilt aktif rotasyonu (regl/PMS'de retinol skip), egzersiz cycle adjust (`getCycleAwareWorkoutAdjustment(d)`), ovulasyon substitusyon (`OVULATION_SUB`/`applyOvulationSub`), Renpho/Custom Food/Recipe AI prompt'ları — hepsi bu üçünden context alır.

Veri kaynağı: `periods` (149 cycle 2014-2026, ilk açılışta `PDF_PERIODS` constant'tan auto-seed) + `cycle_logs` (günlük semptom). Hamilelik gap: 28 Ara 2024 - 13 Mar 2025.

## Profil Sistemi — Swap-Based

Tek dosyalı PWA'da çoklu kullanıcı: aktif profil `localStorage`'da düz, pasif profillerin verisi `_archive_${id}_${key}` olarak yan yana saklanır. Profil değiştirilince `BACKUP_KEYS` swap edilir. API key + proxy ayarları paylaşılır (BACKUP_KEYS dışında). Kod: `archiveCurrentProfile`, `loadProfileFromArchive`, `switchToProfile` (~Phase 3.B-E).

## Geliştirme Komutları

Test framework, build step, lint config, `package.json` yok — bu tek dosyalı static bir PWA.

```bash
# Yerel sunucu (PWA + service worker için HTTP gerekli, file:// çalışmaz)
python3 -m http.server 8000
# Tarayıcı: http://localhost:8000

# Deploy: GitHub Pages otomatik on push to main
git push origin main

# Cloudflare Worker (opsiyonel API proxy) deploy — ayrıntı DEPLOY-API-PROXY.md
cd api-proxy && wrangler deploy
```

**Test "yöntemi":** El ile tarayıcıda — özellikle iPhone Safari'de (kullanıcı mobile-first).

## Service Worker Cache Versiyonu

`sw.js:4` → `CACHE_NAME = 'bengisu-v1-YYYY-MM-DD'`. **Yeni release'de tarihi/versiyonu güncelle**, yoksa kullanıcı eski versiyonu cache'den alır. Kullanıcı yeni sürüm görmüyorsa: hard refresh (`Cmd+Shift+R`) veya iOS'ta tab kapat-aç.

Strateji: index.html ve diğer same-origin asset'ler **network-first** (yeni deploy yakalanır), `bg.jpeg` ve `manifest.json` **cache-first** (büyük/değişmez), `api.anthropic.com` ve diğer external'ler **network-only** (cache yok).

## Konvansiyonlar (Bilinmesi Gereken)

- **Tüm değişiklikler `index.html`'de.** Yeni dosya açma — inline CSS'e style ekle, inline `<script>`'e fonksiyon ekle. Phase 3.B'den itibaren `sw.js`, `manifest.json`, `cloudflare-worker.js` istisna.
- **`confirm()`/`alert()` dialog kullanma.** Mobil tarayıcıda bazen sessizce yutuluyor. Niyetli butonlarla onay al, modal'lar dismissible olsun (backdrop click + ESC).
- **Türkçe UI** — yeni metinler Türkçe (kullanıcı tercih, mix Tr-Eng tolere edilir ama yeni eklemelerde TR). `tr-TR` `lang` + Cormorant Garamond + Jost fontları.
- **Mobile-first.** Touch target ≥44px, viewport `maximum-scale=1.0`, env safe-area, 360px breakpoint mevcut.
- **Kullanıcı "kalan"a göre düşünür** — hedef değil, hedef - tüketim. AI prompt'ları kalan macro context'i mutlaka gönderir.
- **Cycle context her AI prompt'unda** — Renpho, Custom Food, Suggest, Recipe, Adaptive Yük, Health Photo: hepsi `ci(d)` + `inP(d)` ve makro durumu prompt'a koyar.
- **localStorage anahtarı eklerken** `BACKUP_KEYS` listesine ekle (yedekleme JSON'una dahil edilsin), API key benzeri sırlar **dışında** tut.
- **Sayaç/baskı** kullanıcıyı yorabilirse **gizleme opsiyonu** ekle (örn. fasting countdown ✕ butonu, `fasting_hidden` pattern).

## Dosya Referansları

- `PROGRESS.md` — Proje durum + 91+ commit chronoloji + tüm localStorage anahtarları + kullanıcı tercihleri + bekleyen kararlar (her sohbete başlarken oku).
- `HEALTH_SHORTCUT.md` — Apple Health entegrasyonu (Photo + AI vision yolu, JSON auto-sync).
- `DEPLOY-API-PROXY.md` — Cloudflare Worker proxy kurulumu (Wrangler 15 dk · ücretsiz).
- `diet-ultimate/SYNTHESIS.md` — Diyet sekmesi master roadmap (8 bilim lensi × P0/P1/P2 + 5 orijinal fikir).
- `workout-ultimate/` — Egzersiz sekmesi: 11 ajan raporu + `SYNTHESIS.md` + `PHASE-2-HAFTA-2-PLAN.md`.

## Phase Numaralandırma

Commit'lerde geçen `Phase 2 P1 Epic 4`, `Phase 3.B-D`, `P0/P1/P2` etiketleri `workout-ultimate/SYNTHESIS.md` ve `diet-ultimate/SYNTHESIS.md` roadmap'inden gelir. Yeni iş bu yapıyı takip etmeli — `PROGRESS.md` § "Pending" bölümünde sıradaki epic'ler listelenir.
