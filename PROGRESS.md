# 📋 Bengisu Program — Progress & Status

**Son güncelleme:** 7 Mayıs 2026 (Phase 2 KOMPLE + Phase 3.A Sade Dil Katmanı · L1 default · Bengisu kullanıcı feedback'iyle başladı, 7 commit ile tüm 6 sekme sadeleşti)
**Site:** https://bengisusengul.github.io/bengisu-program/
**Repo:** https://github.com/bengisusengul/bengisu-program

> Bu dosya projenin nerede kaldığını, hangi kararların verildiğini, neyin bekleyişte olduğunu hatırlatır. Yeni bir sohbette başlarken önce bu dosyayı oku.

---

## 🎯 Proje Genel Bakış

Bengisu'nun **kişisel sağlık takip uygulaması**. Tek dosyalı (HTML+CSS+JS) bir PWA, GitHub Pages'de yayında. Backend yok — tüm veri **localStorage**'da. AI özellikleri için kullanıcının kendi Anthropic API key'i kullanılıyor (browser'dan direkt çağrı).

**6 ana sekme** (alt menüde · 5 Mayıs sonrası Türkçeleştirildi):
1. 🏠 **Bugün** (Dashboard) — saat-bazlı selam + ZEN + 4 zaman bloğu accordion (sabah/öğle/antrenman/akşam) + quick stats + Aylık Takvim mini accordion
2. 🌸 **Döngü** — period log + günlük semptom + somatik/rüya alanları + arketip katmanı (Bilge Kadın/Genç Kız/Anne/Cadı)
3. 🥩 **Diyet** — 10:00–19:00 IF + Karnivor + post-workout karb pencere + AI macro tracker + RED-S guardrail
4. 💪 **Egzersiz** — 6 günlük PPL split, cycle-aware deload, GIF/YouTube
5. ✨ **Cilt** — 7-gün rotasyon (retinol/AHA cycle-aware) + retinol-after 4-adım + UK shop linkleri
6. 📊 **Ölçüm** — kilo/yağ/kas takibi, Renpho fotoğraf AI analizi (Türkçe + cycle context), milestone celebrations

---

## 🛠 Teknik Mimari

| Bileşen | Detay |
|---|---|
| **Dosya** | Tek `index.html` (~4300 satır, ~206k karakter) |
| **CSS** | Inline `<style>`, ~320 rule. Renk paleti **Akşam Bahçesi** (5 May): petrol/coral/mustard/sage/mauve/cream. Glass morphism cards + per-page tab renkleri (Tema B) + arka plan görseli (`bg.jpg`) sadece Bugün sayfasında. |
| **JS** | Inline `<script>`, vanilla, ES modül yok, framework yok |
| **Veri** | `localStorage` (anahtarlar aşağıda) |
| **AI** | Anthropic API direct from browser (`anthropic-dangerous-direct-browser-access: true`), kullanıcı kendi key'i girer |
| **Hosting** | GitHub Pages, otomatik deploy on push to `main` |
| **Cache** | Browser cache. Hard refresh (Cmd+Shift+R) yeni sürüm için gerekli. |

### localStorage anahtarları

| Anahtar | İçerik | Yer |
|---|---|---|
| `done` | Egzersiz tamamlanma `{dateKey_idx: bool}` | Workout |
| `swaps` | Egzersiz swap'ları `{dateKey: {idx: alt}}` | Workout |
| `meas` | Renpho ölçüm geçmişi `[{date,weight,fat,…}]` | Metrics |
| `sel_meals` | Yemek seçimi override `{dateKey_slot: meal}` | Diet |
| `periods` | Regl olayları `[{id,start,end,flow}]` | Cycle (auto-seed PDF) |
| `cycle_logs` | Günlük semptom `{YYYY-MM-DD: {flow,symptoms,mood,energy,sleep,note}}` | Cycle |
| `cycle_settings` | `{defaultCycleLength,defaultPeriodDuration,onboarded}` | Cycle |
| `meals_done` | Diet "yedim" `{dateKey_slot: bool}` | Diet |
| `custom_meals` | AI/manuel custom yemek `{YYYY-MM-DD: [{n,p,f,c,k,ai}]}` | Diet |
| `water_log` | Bardak sayısı `{YYYY-MM-DD: 0-8}` | Diet |
| `last_complete_flash` | Confetti tetik durumu `'YYYY-MM-DD'` | Diet |
| `recipes_cache` | AI tarif cache `{recipeKey: {ingredients,steps,time_min}}` | Diet |
| `anthropic_key` | Kullanıcının Anthropic API key'i | AI çağrıları (custom food, suggest, recipe) |
| `fasting_hidden` | `'1'` ise IF countdown gizli | Diet |
| `protected_days` | Streak korumalı günler `{dateKey: '🤒 Hasta'/'✈️ Seyahat'/'🩸 Yoğun regl'}` | Streak system (5 May) |
| `onboarded_seen` | First-run onboarding wizard gösterildi mi (`'1'`) | Onboarding (4 May) |
| `fix_period_20260504` | Tek seferlik regl düzeltme migration flag (`'1'`) | Cycle data fix (4 May) |

---

## 🌸 Cycle Sistemi

- **Auto-seed:** İlk açılışta `PDF_PERIODS` constant'tan **149 regl** otomatik yüklenir (2014-2026, Takvimim PDF rapor + manuel parse). Kullanıcı hiçbir buton tıklamaz.
- **Hamilelik gap:** 28 Ara 2024 - 13 Mar 2025 atlandı.
- **Engine:** `ci(d)` cycle phase + day, `inP(d)` regl içinde mi (önce logged'a bakar, sonra tahmin), `preP(d)` luteal son 4 gün.
- **Faz adları:** Menstruation · Follicular Phase · Ovulation · Luteal Phase
- **Median:** Son 6 cycle'dan ortalama döngü uzunluğu hesaplanır.
- **Tüketici noktalar:** Calendar (cell highlight), Diet (macro bonus), Skin (retinol skip), AI prompt'ları (her birinde context).

---

## 🥩 Diet Sistemi (BÜYÜK YENİLEME — 27 Nisan 2026)

15 atomik commit'le baştan yenilendi. Ana özellikler:

### Görsel + bilgi
- **Cycle-aware diet kartı** (faza göre dinamik mesaj + bonus)
- **Macro Targets dinamik** — luteal son 6 gün +100 kcal, regl +150 kcal (`getMacroTarget(d)`)
- **4 svg progress ring** (kcal/P/F/C) — renk: mavi=düşük, sage=hedef, gold=hafif aşım, pembe=aşıldı
- **Daily Macro Summary** — gerçek tüketim + "Kalan" satırı (renk kodlu)
- **Yemek kartı sol border** — protein-yeşil, yağ-sarı, karb-turuncu (macro dominanlık)

### Tracking
- **Yemek "yedim" checkbox** her slot için (5 ana + polifenol shot)
- **Su takibi** — 8 bardak tap-to-fill bar
- **Açlık penceresi countdown** — 13:00 / 18:00 sınırları, ✕ ile gizlenebilir
- **Streak rozet** — yemekler+su tamamsa "🔥 N gün"
- **6 Achievement** — Yumurta-vor, Yeşillik Kraliçesi, Hidrasyon, Streak, Cycle Dostu, Akıllı Yiyici
- **28-gün heatmap** — yeşil tonlar + regl pembe çerçeve
- **7-gün haftalık grid** — bu hafta menüsü tek bakışta

### AI
- **Custom Food Entry** ⭐ — "öğlen 250g köfte yedim" → Claude → makro tahmini + fit verdict (good/tight/over) + before/after kalan
- **Bana öner** — slot bazlı öneri, **kalan makro + diğer öğün durumu** context'iyle, kabul edersen sel_meals'e işler
- **Recipe modal** — 📖 → AI tarif → localStorage cache

### Diet Kuralları (kullanıcı tercihi)
- **1. Öğün (13:00):** yumurta + lor (max 80g) / hellim (max 100g) + ½ avokado + bol yeşillik. **ET/TAVUK/BALIK YOK.**
- **2. Öğün (17:30):** et / tavuk / balık + **MUHAKKAK salata** (yeşillik). Pişirme ghee/tereyağı, üst sızma zeytinyağ.
- **YASAK:** süt, yoğurt, peynir (lor + hellim hariç), tahıl, meyve, kuruyemiş, tatlandırıcı.
- **Macro hedef (taban):** 1350 kcal · 140g P · 90g Y · 15g K
- **IF window:** 13:00–18:00 (5 saat yeme penceresi)

### Confetti
- Günde 1 kez tüm hedefler (5 yemek + 8 bardak) tamamlanınca CSS keyframes ile 50 partikül yağar.

---

## 💪 Workout Sistemi (mevcut, henüz yenilenmedi)

- **6 günlük split** (Pzt: Legs&Glute, Sal: Push, Çar: Legs&Hamstring, Per: Pull, Cum: Glute&Core, Cmt: Shoulders&Arms, Pzr: Rest)
- Her gün 5-6 egzersiz · GIF (YouTube thumbnail) + YouTube link
- Swap özelliği (alternatif egzersiz seçme)
- Done checkbox per egzersiz
- Cooldown rutini her güne özel
- Bu Hafta özet kartı

**Bekliyor:** [Aşağıda "Pending — Workout" bölümüne bak](#workout-iyileştirmesi)

---

## ✨ Skin Sistemi

- 7-günlük rutin, retinol Day 1/3/5, AHA/BHA Day 4, mask Day 7
- **Cycle-aware:** Regl/PMS'de retinol → "Period Protocol / Medicube" rest moduna geçer
- Sabah 6 adım (cleanser → booster → ampoule → vit C → moisturizer → SPF)
- Akşam 2 adım + faz-spesifik active

---

## 📊 Metrics Sistemi

- Kilo hedefi: **76.9 kg (26 Nis 2026 başlangıç) → 58 kg (Eylül 2026)**, ~5 kg/ay
- Aylık ara hedefler kartı (May 71.9 → Haz 66.9 → Tem 63.0 → Ağu 60.0 → Eyl 58.0)
- Renpho ekran görüntüsü → Anthropic API → AI analizi (cycle context dahil)
- Manuel ölçüm formu (kilo, yağ%, kas, bel, kalça, bacak)

---

## 📅 Bu Sohbette Yapılanlar (Kronolojik)

| Tarih | Commit | Ne yaptı |
|---|---|---|
| 2026-04-27 15:01 | `2da90d0` | Macro hedefleri + Eylül kilo hedefi + günlük akış kartları |
| 2026-04-27 15:17 | `1301037` | Yağ macro 95g→90g |
| 2026-04-27 15:27 | `34d66b3` | **Period Log Sistemi** — `PER` sabit kaldırıldı, gerçek data engine |
| 2026-04-27 20:18 | `fdf110b` | PDF'ten 149 cycle auto-seed (Takvimim raporu) |
| 2026-04-27 20:43 | `e50a6a0` | Öğün yapısı yeniden — 1.öğün yumurta-bazlı, 2.öğün et+salata |
| 2026-04-27 20:48 | `b21365c` | "Geri al" butonu daha belirgin yapıldı |
| 2026-04-27 20:59 | `2ea75e7` | confirm() dialogları kaldırıldı (mobile freeze sorunu) |
| 2026-04-27 21:02 | `44ea64e` | Calendar selected day fill→outline (regl rengiyle karışmasın) |
| 2026-04-27 21:04 | `3ffbe01` | "Period/pre-period" mesajı ikiye ayrıldı (mor PMS / kırmızı regl) |
| 2026-04-27 21:30 | `cf8388a` | **Diet Step 1**: cycle-aware macro engine |
| 2026-04-27 21:34 | `18f047a` | **Step 2**: yemek yedim checkbox + actual macro |
| 2026-04-27 21:37 | `ac56e4b` | **Step 3**: su takibi 8 bardak |
| 2026-04-27 21:43 | `ccf6f4f` | **Step 4**: ⭐ AI Custom Food Entry |
| 2026-04-27 21:48 | `0535c33` | **Step 5**: açlık countdown (gizlenebilir) |
| 2026-04-27 21:54 | `d7d9e32` | **Step 6**: cycle-aware diet kartı |
| 2026-04-27 21:58 | `4e13bf3` | **Step 7**: macro progress rings (svg) |
| 2026-04-27 22:03 | `a7a1553` | **Step 8**: streak rozet |
| 2026-04-27 22:06 | `32f8ca1` | **Step 9**: confetti animasyonu |
| 2026-04-27 22:09 | `12a6519` | **Step 10**: AI öneri butonu (Bana öner) |
| 2026-04-27 22:12 | `53be262` | **Step 11**: recipe modal (AI cache'li) |
| 2026-04-27 22:15 | `1e1f280` | **Step 12**: 6 achievement rozeti |
| 2026-04-27 22:18 | `1b68d0c` | **Step 13**: 28-gün heatmap |
| 2026-04-27 22:20 | `90c1772` | **Step 14**: 7-gün haftalık menü grid |
| 2026-04-27 22:22 | `7ced90c` | **Step 15**: yemek kartı renk kodu + animasyonlar |
| 2026-04-27 22:35 | `3a9a50e` | Tüm modallar dismissible (backdrop click + ESC) |
| 2026-04-27 22:42 | `9cb6a10` | AI analizler kalan makro context'iyle çalışıyor |
| 2026-04-27 23:xx | `be9a516` | **PROGRESS.md** oluşturuldu |
| 2026-04-27 23:55 | `47841e9` | PROGRESS.md kapanış güncellemesi |
| 2026-04-28 — Apple Health turu (yeni sohbet) | | |
| 2026-04-28 15:xx | `e5d12ca` | **Step 1**: HEALTH_SHORTCUT.md — iOS Shortcut kurulum rehberi |
| 2026-04-28 15:xx | `9580b1c` | **Step 2**: Health paste butonu + card CSS |
| 2026-04-28 15:xx | `7354a5b` | **Step 3**: clipboard parser + health_log storage |
| 2026-04-28 15:xx | `b988dcc` | **Step 4**: Calendar günlük detayda 🍏 Apple Health kartı |
| 2026-04-28 15:xx | `f4ae389` | **Step 5**: Cycle sleep auto-fill (sleepMinToScale) |
| 2026-04-28 15:xx | `6856b5a` | **Step 6**: Workout topbar'da Apple Health aktivitesi |
| 2026-04-28 17:xx | `979daca` | HEALTH_SHORTCUT.md modern iOS UI açıklama düzeltmesi |
| 2026-04-28 21:xx | `8901ed3` | **Plan D**: manuel Health input modal eklendi |
| 2026-04-28 21:30 | `21d2cca` | Plan D revert (kullanıcı manuel istemedi) |
| 2026-05-01 — Apple Health Photo + AI yolu (yeni sohbet) | | |
| 2026-05-01 | (commit edilecek) | **Photo + AI input path:** 📷 Health buton → galeri picker → Claude Haiku 4.5 vision → preview/edit modal → save. iOS 17+ engelini bypass eder (screenshot system-level, Health API'ye dokunulmaz). HEALTH_SHORTCUT.md photo rehberine yenilendi. |
| 2026-05-04/05 — BÜYÜK SOHBET (Diet/cilt overhaul + 9-lens audit + Akşam Bahçesi tema + Dashboard) | | |
| 2026-05-04 | (commit edilecek) | **Diyet sistemi yenilendi:** 13:00–18:00 IF → **10:00–19:00**, hellim/lor çıktı, **karnivor + post-workout karb pencere** modeli, baseline 1.350 → 1.750 kcal. Yeni supplementler: ViDrate elektrolit (07:00) + Bulk Creapure 5g kreatin (17:00). |
| 2026-05-04 | (commit edilecek) | **Cilt sıralaması düzeltildi:** Eski 07:15 tam rutin (yürüyüş öncesi) yanlıştı (ürünler duşta yıkanıyordu). Yeni: 07:10 mini SPF (3 dk) → 07:30 yürüyüş → ~09:00 duş → 09:15 tam 6 adım rutin. Retinol gecesi sonrası 4 adıma düşer. |
| 2026-05-04 | (commit edilecek) | **16-noktalık cycle-awareness genişletmesi:** Tüm render fonksiyonları `inP/preP/ci()` üzerinden phase'e reaktif. Magnezyum dozu (regl 350-400mg), pre-workout karb (regl 90 kcal), su hedefi (regl 10 bardak), PPL deload uyarısı (regl Day 1-2 -20%), getMacroTarget'a Ovulation + Erken Luteal branch eklendi. |
| 2026-05-04 | (commit edilecek) | **Period log fix migration:** Sistemde 2 Mayıs tarihli yanlış kayıt vardı, `fixPeriodData20260504()` ile [20 Nis–5 May] aralığı temizlendi, doğru kayıt yerleştirildi (28 Nis → 3 May, 6 gün). |
| 2026-05-04 | (commit edilecek) | **9-lens design audit (paralel agents):** A=Aesthetic+Color, B=ED Safety, C=Endocrinology, D=Personalization, E=UX+a11y, F=Sacred Feminine, G=Anti-Fragility, H=Türkçe Tone, I=Sports Science. ~115 finding → P0/P1/P2 sentez. |
| 2026-05-04 | (commit edilecek) | **Audit P0 implementasyonu:** RED-S guardrail (3 gün <1500 kcal alert), Calciday 09:30 → 10:30 (Levotiron'dan 4 saat), macro ring tolerans bandı + terracotta, WCAG kontrast düzeltmesi (np/ng/nm), focus state'ler + reduced-motion, **streak grace period (3 gün) + comeback + burnout detection + protected days** (🤒 Hasta / ✈️ Seyahat / 🩸 Yoğun regl), "Bugünü kaybetme!" → "seri büyüyor". |
| 2026-05-04 | (commit edilecek) | **P1 cluster'lar:** Tam Türkçeleştirme (nav buttons, form fields, page headers, phase isimleri + mevsim metaforu + arketip "Bilge Kadın/Genç Kız/Anne/Cadı"), touch target ≥44px, hero "Bugünün 3 minimum eylemi" card, AI custom food **reverse flow** (önce sen tahmin et), heatmap+consistency %, sacred feminine PHASE_DIET ton, Onboarding wizard, transparent period seed, Renpho AI prompt bilingual, **medikal:** Bakır 1.5mg, B6/B9/B12 form belirt (P5P + Methylfolate + Methyl-B12), Qalyviz form not, daily core 6→4 gün, regl deload esnek. |
| 2026-05-04 | (commit edilecek) | **P2 batch:** UK shop linkleri (Boots/Superdrug/Amazon UK · ~£X) skincare ürünlerinde, milestone celebrations (-5/-10/-15 kg), Renpho carnivor uyarı (±%5-8 hata payı), period log chip Türkçeleştirildi (Damlayan/Akan/Bol Akan), daily log somatik+rüya textarea, ZEN array Maisie Hill referanslarıyla zenginleştirildi, ritüel transition moments (sabah ViDrate niyet + akşam Mg 4-7-8 nefes), Iron+C vit pairing, wedding event countdown opsiyonel (Cycle Settings → Önemli Tarih). |
| 2026-05-05 | (commit edilecek) | **Akşam Bahçesi görsel tema:** App adı "Bengisu ✨" → **"Bengisu ☀️"**. `bg.jpg` (surrealist akşam bahçesi resmi) sadece Bugün sayfasında görünür. Diğer 5 sayfa **solid net renkler** (Tema B): Bugün=görsel · Döngü=mauve · Diyet=hardal · Egzersiz=sage · Cilt=krem peach · Ölçüm=su mavisi. **Glass morphism cards** (rgba 15,30,38,0.55 + blur 28px + border 0.18). Her sekme kendi accent'i ile (slbl, h1 em, navbar active, ch h3). |
| 2026-05-05 | (commit edilecek) | **🏠 Dashboard / Bugün sayfası:** Takvim sekmesi refactor edilerek dashboard yapıldı. İçerik: saat-bazlı selam (Günaydın/İyi öğleden/akşam) + ZEN quote + cycle phase + arketip + sıradaki regl gün sayısı + 3 quick stats (su/kcal/streak) + 3 minimum eylem checklist + **4 collapsible accordion blok** (🌅 Sabah / ☀️ Öğle / 🏋️ Antrenman / 🌙 Akşam) + Apple Health card + 📆 Aylık Takvim mini accordion. Bottom nav "📅 Takvim" → **"🏠 Bugün"**. |
| 2026-05-06 | `5afbb91` | **Bugün sekmesi minimale strip:** bg.jpg arka plan resmini öne çıkarmak için 6 dashboard bölümünden 5'i kaldırıldı (quick stats, 3 eylem, 4 accordion, Apple Health card, mini takvim, pill butonlar). Sadece selam kartı (greeting + cycle phase + ZEN) kaldı. 📷 Health butonu Bugün topbar'dan **Ölçüm** sekmesine taşındı (Renpho ile aynı UX pattern). 142 net satır eksildi. |
| 2026-05-06 | `d530b64` | **Türkçeleştirme:** "İyi öğleden" → "Tünaydın" (12-17), modal butonları (Cancel/Close/Loading/Pick/Swap/Prev/Next), bölüm başlıkları, MN+DN sabitleri, SP/CD split+cooldown isimleri, **33 egzersizin h: talimatları** İngilizce → Türkçe. Cable Crunch'taki bozuk metin + Ab Wheel "Tue/Thu" → "Salı/Perşembe" düzeltildi. |
| 2026-05-06 | (repo dışı) | **🧬 Egzersiz "Ultimate" — 12-ajan sıralı analiz:** workout-ultimate/ klasörü (~580KB markdown). 11 uzman ajan + ben sentezci, sıralı çalıştı (her biri öncekinin raporunu okudu). Tıp Literatürü → Cycle-Aware → Spor Bilimi → Beslenme → Yaralanma → Kadın Psikolojisi → Bilim Pedagojisi → Davranış Tasarımı → Veri Görselleştirme → Mobil UX → Pazar Araştırması → BEN sentezci. Çıktı: `SYNTHESIS.md` master roadmap (P0/P1/P2 + 5 orijinal fikir: Hacettepe Lab / Body Conversation / Cycle Pattern Emergence / Levotiron Diary / Wedding Mirror). |
| 2026-05-06 | `ffb2619` | **Phase 2 Quick Wins (medikal düzeltme + RED-S EA guardrail):** (1) Hipoparatiroidi referansları 7 yerde temizlendi (Bengisu'da hipopara YOK, Calciday profilaktik) — walk_detail x2, creatine, qalyviz, calciday x2, AI prompt (Renpho), onboarding. (2) Kreatin kan testi öncesi 5 → **14 gün** kesim (PMID 30986825). (3) Qalyviz doktor sorusu güncellendi (Calcitriol referansı kaldırıldı, D3+K2+25(OH)D kontrolü). (4) Geç luteal cycle bonus +100 → **+150 kcal**, karb 50→60g (BMR +%8-12, RED-S koruma). (5) `getLowIntakeAlert()` Energy Availability hesabıyla genişletildi: `getEstimatedLBM()` + `getDailyExerciseKcal(d)` + `getEA(d)` helper'ları, IOC RED-S 2023 thresholds (<30 klinik, 30-45 subklinik, ≥45 hedef). 68 satır eklendi, 18 silindi. |
| 2026-05-06 | `4cdab88` | **workout-ultimate/ klasörü repo'ya eklendi** (12 markdown dosyası, 9335 satır). 5 ajan raporuna Phase 2 Quick Wins banner/inline güncelleme. SYNTHESIS.md P0 #1 + #10 ✅ TAMAMLANDI işareti + "Bonus tamamlananlar" bölümü. |
| 2026-05-06 | `8a890e3` | `.gitignore` eklendi — macOS `.DS_Store` + editor + env cruft. |
| 2026-05-06 | `72c3bd6` | **Phase 2 Hafta 2 plan dosyası** (`workout-ultimate/PHASE-2-HAFTA-2-PLAN.md`) + Bengisu kararları (kg / RPE şart / Wake Lock / pre-fill / auto-timer / 5 orijinal fikir hepsi). |
| 2026-05-06 | `6caa368` | **Phase 2 Hafta 2A — Set log altyapısı:** `workout_log` data structure + 14 helper fonksiyon (calc1RM Brzycki+Epley+RPE, parseSetScheme, getRestDuration, getOrCreateLogEntry, getLastSessionSet, suggestNextWeight, isNewPR, logSetField, confirmSet, modifySet, skipSet, openSetSheet, applySheetReason, syncLegacyDone, showToast). UI: per-set kg+rep+RPE input + ✓ confirm, pre-fill placeholder, ⚡/🛌 bottom sheet. Migration: eski S.done boolean → workout_log entry. 425 satır net ekleme. |
| 2026-05-06 | `f3694c4` | **Phase 2 Hafta 2B — Wake Lock + auto rest timer:** `acquireWakeLock`, `releaseWakeLock`, visibilitychange listener, `startSetTimer`, `stopSetTimer`, `adjustTimer`, `timerComplete`, `renderRestTimer`. Set ✓ sonrası otomatik timer (compound 150s, izolasyon 75s, core 45s). Vibration [180,80,180,80,260] (Android), iOS visual flash fallback. 159 satır ekleme. PROGRESS güncellendi: Selenyum 200mcg + Çinko ⚠ doz doğrulama bekleyen supplement entegrasyonu. |
| 2026-05-06 | `cee41ca` | **Phase 2 Hafta 2C — PR celebration + antrenman özeti + sparkline:** `celebratePR`, `getPRZenQuote` (cycle-aware ZEN havuzları: Folliküler/Ovulasyon/Luteal/Regl), `findExerciseName`, `renderPRCelebration`, `closePR`. Trophy 🏆 entrance animasyon, "Önceki → Yeni" karşılaştırma, +delta, arketip rozeti. `renderSessionSummary` (üstte "✨ Antrenman Tamam" / "📊 Şu ana kadar" — kg·rep volume, ort RPE, PR count, atlanan, değişen). `renderExSparkline` her hareket için son 4 seans 1RM SVG inline trendi. 190 satır ekleme. **Hafta 2 (set log altyapısı) TAMAMLANDI.** |
| 2026-05-06 | `588b6ef` | **Phase 2 Hafta 3 — 5-gün split + cycle-aware antrenman matrisi:** SP yenilendi (Pzt Alt-Squat / Sal Üst-Push / Çar Glute-Posterior / Per Üst-Pull / Cum Total-Hibrid / Cmt-Paz dinlenme). EX güncellendi: 27 eski + 10 yeni hareket (bss, gobl, step, ccf, bsht, cpt, db, apu, kbs, fc). CD soğumaları yeni split'e hizalandı. `getCycleAwareWorkoutAdjustment(d)` 7 faz × öneri tablosu (intensity/volume çarpanları + bilim notu + substitusyon flag). `OVULATION_SUB` tablosu + `applyOvulationSub()` (Day 11-15 cycle-safe alternatif chip per egzersiz: Smith→Goblet, Bulgarian→Step-Up, RDL→Cable Pull-Through, HT→Glute Bridge, B-Stance HT→Glute Bridge, Russian Twist→Pallof). Banner zenginleştirildi (yoğunluk×N · hacim×M rozet + faz tip italik). 238 satır ekleme. |
| 2026-05-06 | `a87fb8a` | PROGRESS.md gün sonu sync (14 commit'lik büyük gün özeti). |
| 2026-05-07 | `65dbb22` | **Supplement entegrasyonu:** Selenyum 200 mcg eklendi (10:00 1. öğünle, T4→T3 dönüşüm + selenoprotein sentezi). Çinko 15 mg + Bakır 1.5 mg (Zn:Cu 10:1) 17:00'dan **22:00'a** taşındı (Ca/Zn antagonizmi önlendi, Mg'dan 1 saat ayrı). `selenium_detail` + `zinc_detail` expandable kartlar (doktor soruları dahil). Renpho AI prompt context güncellendi (supplement listesi + 5-gün split). |
| 2026-05-07 | `3d564b6` | **Phase 2 Hafta 4A — Body neutrality + 5-metrik Eylül hedefi:** Topbar "Vücut Takibi" → "Vücudumla Uyum". Eylül kartı "5 metrik · vücudunla uyum" + 4 ek metrik mini pano (📏 Bel · 💪 Squat 1RM · 🚶 Adım 7-gün ort · 💚 Ruh hali). Aylık ara hedefler **aralık** formatına çevrildi (May 73-75 / Eyl 56-60). pnote dil revizyonu, "Hız bedenine ait" yumuşak ton. `getMultiMetricProgress` helper. |
| 2026-05-07 | `b1f8e40` | **Phase 2 Hafta 4B — Akşam check-in + anti-kompulsif tasarım:** Bugün sayfasında 19:00-23:59 görünür akşam check-in kartı (5 mood: ✨💪🌊🌫️🌙, hiçbiri "başarısız"). Cycle context-aware proaktif önek. Pazar gece (≥20:00) haftalık compulsive screening modal (3 yargısız soru, 1-5 skala, avg ≥3.5 → kibar 3-gün esnek hafta önerisi). 15 yeni helper, 226 satır ekleme. |
| 2026-05-07 | `e1a29a9` | **Phase 2 Hafta 4C — Plan vs gerçek haftalık özet kartı:** Bugün sayfasında pazar ≥20:00 otomatik görünür. 6 conic-gradient ring (yürüyüş 5/7, antrenman 5/5, 1. öğün 7/7, su hedef 7/7, dinlenme 2/2, cycle log 7/7) + total volume + ort RPE + PR sayısı + skip/modify listesi (sebepleriyle) + cycle-aware faz notu + yumuşak kapanış ("Bu hafta yarım değil — STRATEJİK"). `getWeeklyDigest()` helper agregatör. 166 satır. |
| 2026-05-07 | `ee93689` | **Phase 2 Hafta 4D — ⓘ Bilim Modu inline expand:** EXERCISE_EDU data structure (5 hareket: sq/rdl/ht/lat/pall) — Ajan 7 pedagoji metinleri tam (anatomi/biyomekanik/metabolik/yaygın yanlış kavram + L3 ileri). Bilim Modu seviye sistemi (L2 default, L3 toggle ile mTOR/EMG/PMID görünür). ⓘ Bilim sage-green chip her egzersiz kartında (edu varsa). Tap → inline accordion 4 kategori. **SYNTHESIS P0 10/10 TAMAMLANDI** 🎉. 99 satır. |
| 2026-05-07 — Phase 2 P1 ROADMAP başlangıcı (16 commit, hepsi tek gün) | | |
| 2026-05-07 | `2e51f0f` | **Phase 2 Hafta 5A — EXERCISE_EDU 5→29 harekete genişledi:** 24 yeni hareket × 6 alan (short/anatomy/biomech/metabolic/misconception/advanced). Tüm SP split ana hareketleri Ajan 7 pedagoji ile. Bilim ref: Schoenfeld, Contreras, McGill, Israetel, Beck, Hornberger, Hansen, Boren, Lehman, Wakahara, Brookbush, Sims. 215 satır. **P1 Epic 1A.** |
| 2026-05-07 | `6eba68d` | **Phase 2 Hafta 5B — Glossary 68 terim modal:** 7 kategori (antrenman/kas/hormon/beslenme/tip/cycle/pattern). `linkifyGlossary(html)` regex helper — her render'da glossary terimlerini `<u class="gloss-term">` ile sar. Modal pattern + 7 kategori renk pill. EXERCISE_EDU advanced field linkified. 205 satır. **P1 Epic 1B.** |
| 2026-05-07 | `255ad16` | **Phase 2 Hafta 5C — Pazartesi 'Bu Hafta Odak' pedagojik kartı:** 6 cycle alt-fazı × 10 alan (tag/title/subtitle/intro/hormone/physiology/training/nutrition/risk/closing). Pzt 06:00-12:00 otomatik görünür. Maisie Hill + Sims + Wojtys 1998 PMID 9568310 ref. 148 satır. **P1 Epic 1C — Epic 1 (Pedagojik) tamamlandı.** |
| 2026-05-07 | `2b48447` | **Phase 2 Hafta 6A — Güç Trendi 1RM grid:** Egzersiz sekmesinde 6 lift (sq/ht/rdl/lat/dbp/dsp) sparkline 2×3 grid. Brzycki+Epley+RPE (calc1RM existing). Cycle phase border tint, 🏆 PR rozeti, delta kg, 8 seans inline SVG sparkline. 132 satır. **P1 Epic 2A.** |
| 2026-05-07 | `ae6823b` | **Phase 2 Hafta 6B — Kas Heatmap SVG body diagram:** 9 kas grubu × MEV/MAV/MRV (Israetel 2018). Ön + arka silüet, EXERCISE_MUSCLE_MAP 28 hareket × kas weight (toplam 1.0). 5-renk gradient (mauve/sage/mustard/coral). Tap-to-expand detail. 246 satır. **P1 Epic 2B.** |
| 2026-05-07 | `d9bea8b` | **Phase 2 Hafta 6C — Volume Trendi 12 hafta stacked bar:** 9 kas grubu chip seçici, default glute. Inline SVG bar chart + 3 yatay ref çizgi (MEV sage, MAV mustard, MRV coral). Auto-deload tespiti (geç luteal phase çoğunluğu VEYA -%35 düşüş). 3 stat (ort/peak/deload). 168 satır. **P1 Epic 2C.** |
| 2026-05-07 | `95cb92f` | **Phase 2 Hafta 6D — PR Timeline + ZEN havuzu genişletme:** PR_ZEN 4 faz × 3 → 4 × 6 quote (toplam 12→24, Maisie Hill + Ajan 6 ton). Yeni PR Timeline kartı — son 12 ay kronolojik PR listesi, cycle phase tint, 4 stat (toplam/hareket/son 30g/en güçlü pencere). 148 satır. **P1 Epic 2D — Epic 2 (Görselleştirme) tamamlandı.** |
| 2026-05-07 | `28960bb` | **Phase 2 Hafta 7A — Mikronutrient Gap kartı:** 4 mikro (C vit/K2 MK-7/Omega-3/Lif) × karnivor diyet kaynakları + status + supplement aksiyon. 3-status renk (sage/mustard/coral), doktor sorusu paketi (mavi info accent). 105 satır. **P1 Epic 3A.** |
| 2026-05-07 | `85dc102` | **Phase 2 Hafta 7B — Pre/Post-WO timing optimizasyonu:** Pre-WO 14:30 → 14:00 (60 dk WO öncesi). 30g karb + 15-25g protein (yumurta beyazı / kıyma+yumurta). Opsiyonel 14:15 kafein 100-200mg. Calciday 2. doz 17:00 → 18:30 (Hallberg 1991, Lonnerdal 2010 demir absorpsiyon). Hipoparatiroidi cleanup tamamlandı. 6/7 satır. **P1 Epic 3B — Epic 3 (Beslenme) tamamlandı.** |
| 2026-05-07 | `d45b8df` | **Phase 2 Hafta 8A — Body Conversation:** P1 Epic 4'ün ilk orijinal sentez fikri. Bugün dashboard'da 3 kart: sabah niyet (06:00-12:00, 5 chip 💪🌊🧘🌱🤍), akşam karşılık (21:30+, 1-5 skala), 7 gün pattern özeti. localStorage 'body_conv'. Mauve/mustard accent, anti-kompulsif tasarım. Maisie Hill + Ajan 6 ref. 194 satır. |
| 2026-05-07 | `dccb8f0` | **Phase 2 Hafta 8B — Levotiron Diary:** Bugün sabah tap (06:00-09:30, "✓ Aldım" tek tap → HH:MM otomatik kayıt). Diet sekmesinde haftalık özet (taken/missed/avg saat/std varyasyon dakika) + 30 gün mood korelasyon (cycle_logs.mood × erken/geç timing). PDF export ileride. 185 satır. |
| 2026-05-07 | `5a1ada8` | **Phase 2 Hafta 8C — Hacettepe Lab:** Bilim Modu L3 ON ise Egzersiz sekmesinde 4 sub-tab. Veri Atölyesi (linearSlope 6 lift), Hipotez Defteri (open/confirmed/rejected workflow), PMID Kütüphanesi (16 ref × 4 kat: Antrenman/Cycle/Tiroid/Beslenme), Pedagojik Notlar (Mayer/Sweller/Vygotsky çerçeve). 214 satır. |
| 2026-05-07 | `a7f2f21` | **Phase 2 Hafta 8D — Wedding Mirror:** Cycle Settings'teki event date'e bağlı, ≤60 gün kala Bugün countdown card görünür. 60 gün kala 1 kez modal otomatik açılır (3 mod: Status Quo / Hafifletme -%15 vol / Resilience). <14 gün kala kg suspended notice. Mauve gradient. 150 satır. |
| 2026-05-07 | `3f983fb` | **Phase 2 Hafta 8E — Cycle × Performance Pattern Emergence:** P1 Epic 4'ün son orijinal fikri. 4 fazlı render: çok az veri (gizli) → 2-3 cycle (locked + progress bar) → 3 cycle ✓ ama eşik yetmedi (locked) → emerged (4 phase grid + insight + literatür kıyas). hasEmergedPattern() eşiği: 3 cycle + ≥4 PR + log ≥%30. Bengisu için ≈Ağustos 2026'da otomatik aktive olacak. Sims 2016 + McNulty 2020 PMID 30067632 ref. 183 satır. **P1 Epic 4 (5 Orijinal Sentez Fikri) tamamlandı — P1 ROADMAP TAMAMI ✅** |
| 2026-05-07 — Phase 2 P2 ROADMAP başlangıcı + bitişi (8 commit, hepsi tek gün) | | |
| 2026-05-07 | `bb59653` | **Phase 2 P2.1 — Set arası bilim mikro-balon:** SCIENCE_MICRO_TIPS 30 havuz × 93 tip. Rest timer 90sn banner'a 1-2 cümle mekanizma ipucu (Sweller cognitive load uygun). startSetTimer içinde S.activeTimer.microTip atanır, timer süresince sabit. 175 satır. |
| 2026-05-07 | `2b055c3` | **Phase 2 P2.2 — Wedding countdown opt-out + somatic reframing:** Mood ≤2 (irritable/sad/anxious) VEYA geç luteal/regl'de countdown auto soft-hide → "anı modu" öne çıkar. 3 textarea: paylaşmak istediğin an + bedeniyle his + bedenine cümle. Manuel toggle Sayı/Anı modu. 99 satır. **⭐⭐⭐⭐ en yüksek etki** |
| 2026-05-07 | `0e6b4cd` | **Phase 2 P2.3 — Plate Calculator:** Hevy pattern, kg cinsinden barbell + plakalar görsel. 3 mod (20kg Bar / 15kg Bar W / Dumbbell), greedy plate breakdown (20+15+10+5+2.5+1.25). Set log'da kg yanı 🥪 ikon. Olympic plate renkleri. 146 satır. |
| 2026-05-07 | `76c3ee3` | **Phase 2 P2.4 — Etkileşimli Kas Anatomi modal:** Heatmap detail card'ında "📚 Anatomi öğren" butonu. 9 kas grubu × 7 alan (TR + Latince + ana fonksiyon chip + L2 mekanizma + key exercises + cycle bağlantısı). linkifyGlossary entegrasyonu. 139 satır. |
| 2026-05-07 | `e95467d` | **Phase 2 P2.5 — Tiroidektomi Destek Modülü "Bedenim ve Tiroidim":** Diet sekmesinde 3 sub-tab kart: Kan Tahlili (12 test, 5 öncelikli), Doktor Soruları (5 kat × 18 soru), T4→T3 Fizyoloji (Wiersinga 2014 + deiodinaz tipleri + ko-faktörler). 150 satır. |
| 2026-05-07 | `ca6af34` | **Phase 2 P2.6 — Push Notification iOS PWA:** Cycle Settings altında "🔔 Hatırlatmalar" kartı. 5 reminder (06:30 Levotiron default ON / 09:00 Body / 14:00 Pre-WO / 18:30 Calciday2 / 21:30 Akşam). In-page Notification API + setInterval 30sn check + günlük dupe önleme. iOS 16.4+ PWA. 162 satır. |
| 2026-05-07 | `00473ba` | **Phase 2 P2.7 — Voice Logging Türkçe:** Custom Food + Hipotez Defteri textarea'larında 🎙️ button. Web Speech API tr-TR + Türkçe sayı parser ("iki yüz elli" → "250"). 30+ TR sayı kelimesi compound destek. Coral pulse recording animation. 131 satır. |
| 2026-05-07 | `ff23cd2` | **Phase 2 P2.8 — Wearable Predictive HRV → Adaptive Yük:** Whoop pattern. Health Photo modal'ına HRV input + AI prompt. Egzersiz sekmesinde Adaptive Load kartı (3-status readiness: yeşil/sarı/kırmızı). HRV(50%)+RHR(25%)+uyku(25%) ağırlıklı skor. Kuralsal öneri + opsiyonel Claude API derin öneri (cycle phase + HRV + uyku + 4-6 cümle anti-kompulsif Türkçe). 225 satır. **P2 ROADMAP TAMAMI ✅** |

**Toplam:** 77 commit + workout-ultimate/ raporları (repo'da, 12 dosya).

**Ek (repo dışı):** Memory rutini yazıldı — `~/.claude/projects/.../memory/feedback_progress_routine.md` + `MEMORY.md`. Yeni sohbet başında PROGRESS.md otomatik okunacak.

---

## 👤 Kullanıcı Tercihleri (önemli — gelecek sohbette dikkat et)

- **Mobile-first:** İphone'da kullanıyor, çoğu özelliği mobilde test ediyor. Hard refresh = tab kapat-aç.
- **Sağlık baskısı yapma:** Sayaç/sayı görsel olarak baskı yaratıyorsa **gizleme opsiyonu** ister (ör. fasting countdown).
- **Otomatik > manuel:** "Yapılması gereken bir buton varsa, sistem otomatik yapmasın mı?" (ör. PDF auto-seed, kalan macro context).
- **confirm() dialog'lardan kaçın:** mobil tarayıcıda bazen sessizce yutuluyor. Net niyetli butonlarda direkt sil.
- **Türkçe yazıyor**, mix Tr-Eng tolere ediyor ama yeni eklemelerde Türkçe tercih.
- **Karbonhidrat değil yağ-protein odaklı diyet:** klasik kalori takibi değil, lor/hellim/avokado mantığı.
- **AI'ı seviyor:** "Sistem akıllı olabilir mi?" gibi sorular soruyor. AI agentic özellik isteklerini olumlu karşılıyor.
- **Kalan makro:** Hedefe değil **kalan**'a göre düşünüyor. AI bunu görmeli.
- **Cycle ile her şey bağlı:** Diet, skin, workout — hepsi cycle phase ile değişiyor istiyor. Period log doğru olmazsa her şey kayıyor diyor.

---

## ⏳ Pending — Karar Beklemekte

### 1. Workout sekmesi iyileştirmesi {#workout-iyileştirmesi}

**30 fikir sundum** (kullanıcı henüz seçim yapmadı). Tema bazlı:

#### 🎯 Pratiklik / Tracking (8 fikir)
1. Set-rep-ağırlık takibi (her sette gerçek değer)
2. Rest timer (set arası 90sn)
3. Önceki hafta ağırlıkları otomatik gelsin
4. PR (Personal Record) takibi + 🏆 rozet
5. Workout süre takibi (start-stop)
6. "Yapamadım/atladım" buton
7. Form notu per egzersiz (textarea)
8. Quick add — program dışı egzersiz

#### 📈 İlerleme / Veri (6 fikir)
9. Egzersiz performans grafiği (8 hafta SVG line chart)
10. Haftalık volume trendi
11. PR listesi (tüm zamanların maksları)
12. Compliance % (planlananın % kaçı)
13. Streak (kaç hafta üst üste)
14. Workout heatmap (12 hafta)

#### 🩺 Cycle ↔ Workout entegrasyonu (5 fikir) — **kullanıcı için en değerli**
15. Faza özel intensity önerisi (folliküler PR / luteal -%10)
16. Otomatik ağırlık ayar önerisi
17. **Period-friendly mode** — regl 1-2 günü tüm program → yoga akışı
18. Cycle-Performance korelasyon raporu
19. Soreness 1-5 (kas bazlı)

#### 🎉 Eğlenceli (5 fikir)
20. PR hit confetti
21. Achievement rozetleri
22. Pre-workout zen cümlesi
23. Post-workout mood emoji
24. RPE skala 1-10

#### 🤖 AI (4 fikir)
25. **"Bugün hafif öner"** butonu — yorgun gün için
26. "Bu egzersizi yapamıyorum, alternatif öner"
27. Form yorumu (post-workout)
28. Haftalık AI rapor

#### 🎨 Tasarım (2 fikir)
29. Kas grubu vücut diyagramı (SVG figür)
30. Egzersiz kartı renk kodu (push/pull/leg/core)

**Önerim:** Pratiklik (1, 4, 5, 7) + Cycle entegrasyonu (15, 17, 19) + Motivasyon (20, 21, 14) — Diet'e benzer atomik 10-12 commit.

---

### 2. Apple Health Entegrasyonu — ✅ ÇÖZÜLDÜ (1 Mayıs 2026)

**Sorun (28 Nisan):** GitHub Pages statik site → Apple HealthKit'e direkt erişim yok. iOS Shortcut + Clipboard yolu denendi → iOS 17+ "Health Samples external paylaşımı" güvenlik kuralıyla bloklandı.

**Çözüm:** **Photo + AI** yolu — kullanıcı Health app'in screenshot'ını alır, site'de 📷 Health butonuna basar, galeriden seçer, Claude Haiku 4.5 vision sayıları okur, preview/edit modal'da düzeltilebilir, kaydet → bitti. Apple iOS 17+ engelini bypass eder çünkü screenshot iOS sistem eylemi (Health API'ye dokunulmaz).

**Avantajlar:**
- iOS 17+ engelini bypass eder
- Manuel sayı yazımı yok (kullanıcı tercihi)
- Renpho akışıyla aynı UX pattern (kullanıcı zaten biliyor)
- ~$0.001/foto maliyet (Haiku 4.5 vision)
- 30+ dakikalık Shortcut kurulumu yok

**Hedef veriler:** Adım, aktif kalori, egzersiz dakikası, uyku (dakika), kalp atış (ortalama + dinlenme), hareketli saat.

**Cycle log'la entegrasyon:** Apple Watch uyku verisi → Cycle "uyku skalası 1-5" otomatik dolar (mevcut `sleepMinToScale` fonksiyonu kullanılıyor).

---

## 💡 Öğrenilen / Notlar

### Teknik
- **Anthropic API browser'dan direkt:** `anthropic-dangerous-direct-browser-access: true` header'ı + `x-api-key` ile çalışır. Production app değil, kişisel use case için OK. Key localStorage'da.
- **Modal pattern:** `.mo` overlay + `.modal` içerik. Tüm modallar generic `addEventListener('click')` ile dismissible.
- **Confetti:** Pure CSS keyframes, kütüphane gerekmez.
- **Macro rings:** SVG circle + `stroke-dasharray` + `stroke-dashoffset`.
- **Auto-seed pattern:** `if (!localStorage.getItem('periods'))` → seed et. Kullanıcı hiç görmesin.
- **AI prompt'ta "fit" verdict:** good/tight/over → renkli badge UI'da.

### Mimari
- **Tek dosya** stratejisi sürdürülebilir mi? ~3000 satır oldu, hâlâ hızlı yükleniyor. ~5000 satıra kadar tek dosya mantıklı.
- **localStorage limit:** ~5-10 MB tarayıcıda. Şu an ~50 KB. Bol var.
- **PDF parse:** Browser'da yapılmıyor — ben Read tool ile PDF'i okuyup datayı koda gömüyorum (PDF_PERIODS pattern).

### UX
- **Gerçek vs hedef** ikilisi her yerde önemli. Hedef tek başına yetmiyor, gerçek tüketim olmadan.
- **Kalan** > kalori budget. Kullanıcı "ne kadar kaldı" diye düşünüyor, "ne kadar yedim" diye değil.
- **Cycle context** her AI prompt'unda olmalı — yoksa tahminler genel.
- **Onboarding görselleri olmamalı** — mevcut kullanıcı tek (Bengisu), bahaneler için zaman değil. Auto-seed > "Hoş geldin ekranı".

---

## 🚀 Site Detayları

### Bottom navigation (6 tab · 5 May Türkçeleştirildi)
```
🏠 Bugün  🌸 Döngü  🥩 Diyet  💪 Egzersiz  ✨ Cilt  📊 Ölçüm
```
6 buton iPhone SE'de (375px) sığar — `min-width:48px`, `padding:8px 10px`. Daha dar ekranlar (<360px) için media query var. Aktif tab kendi rengiyle parlar (Tema B per-page).

### Renk paleti — Akşam Bahçesi (5 May)
```css
/* Görsel: bg.jpg surrealist akşam bahçesi resmi (sadece Bugün sayfasında tam görünür) */
--bg-deep: #0F4147       /* gökyüzü petrol */
--cream: #E8DDC4         /* patika/ay tonu, ana metin */
--cream-soft: #F0E6D0    /* ay ışığı vurgu */
--coral: #D9591E         /* turuncu ağaç tepesi · regl/CTA */
--mustard: #E8B23F       /* sarı ağaç · ovulasyon/güneş */
--sage-leaf: #5A7A4F     /* açık yeşillik · folliküler */
--sage-deep: #3E5A3A     /* servi koyu · ölçüm */
--mauve-evening: #B47990 /* alacakaranlık · luteal */
--glass-bg: rgba(15,30,38,0.55)        /* universal cam kart bg */
--glass-border: rgba(255,255,255,0.18) /* glass kart kenar */
```

### Tema B — Per-page sekme renkleri (5 May)
```
Bugün     → bg.jpg görseli (image only here)
Döngü     → mauve gradient (#B47990 → #4A2837)
Diyet     → hardal gradient (#8C6520 → #E8B23F → #3C2A0A)
Egzersiz  → sage gradient (#5A7A4F → #1E3220)
Cilt      → krem peach gradient (#6B3E2F → #D4A48D → #3C1F14)
Ölçüm     → su mavisi gradient (#7BA8B0 → #0F4147)
```

### Yemek slot anahtarları
```
'morning'  — polifenol shot (12:00 zeytinyağ + sumak + limon)
'm1_main'  — 1. öğün ana (yumurta+lor/hellim)
'm1_side'  — 1. öğün yan (avokado + yeşillik)
'm2_main'  — 2. öğün ana (et/tavuk/balık)
'm2_side'  — 2. öğün yan (salata)
```

### Cycle log alanları
```
flow:    spotting | light | medium | heavy | null
symptoms: ['cramps','headache','bloating','acne','breast_tender','fatigue']  (multi)
mood:    happy | calm | irritable | sad | anxious | null
energy:  1..5 | null
sleep:   1..5 | null
note:    string
```

---

## 🔑 Anahtar Komutlar (geliştirici için)

```bash
# Repo
cd /Users/bengisusengul/Desktop/bengisu-program

# JS parse smoke test (her commit öncesi)
node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const m=html.match(/<script>[\\s\\S]*<\\/script>/);new Function(m[0].replace(/<\\/?script>/g,''));console.log('JS OK')"

# Git status
git log --oneline -10

# Push (deploy)
git push origin main
```

GitHub Pages 30-60 saniyede deploy eder. Hard refresh = tab kapat-aç (mobil) / Cmd+Shift+R (masaüstü).

---

## 📍 Şu Anki Durum (7 Mayıs 2026 — Phase 3.A test ediliyor)

### 🪞 Phase 3.A — Sade Dil Katmanı (L1 Bilim Modu) — 7 commit ✅

**Bengisu feedback'i:** "Çok fazla teknik kelime ve terim var. Anlaşılır olmamış pek egzersiz sekmesi. Birkaç anlamadım yerin ekran fotosunu atıyorum sana. Altlarına aşırı basit ve yalın bir dille ne anlama geldiklerini her section için yazamaz mıyız?"

**Çözüm:** 3 katmanlı Bilim Modu (önceki 2 katmanlıydı: L2/L3):
- **L1 (yeni default · sade)** → Yalın Türkçe paragraflar her zaman görünür, teknik subtitle gizli
- **L2 (orta)** → Sade + teknik subtitle (Brzycki/MEV/MAV/RPE)
- **L3 (ileri)** → + advanced (mTOR/EMG/PMID) + 🧪 Hacettepe Lab açılır

| | Madde | Commit |
|---|---|---|
| ✅ | Bilim Modu altyapı (L1 default + 3-step cycle) + .card-plain CSS | `6c757c7` |
| ✅ | Egzersiz sekmesi 7 kart sade paragraf | `6c757c7` |
| ✅ | Bugün + Döngü sekmeleri 8 kart sade paragraf | `97fc40d` |
| ✅ | Diyet sekmesi 3 kart sade paragraf | `22af70d` |
| ✅ | Cilt + Ölçüm sekmeleri 3 kart sade paragraf | `82cb56c` |
| ✅ | Bilim Modu global seçici (Döngü Settings altı, 3 buton) | `ea9b4bb` |
| ✅ | Hacettepe Lab her zaman görünür kilitli tease (L1/L2'de) | `25685af` |

**Yeni "🪞 Bu kart" pattern:** Her teknik kartın altında italik sage-green border'lı paragraf (~20 kart). Format: bold ile ana fikir, mustard accent ile vurgu.

**Bilim Modu global seçici:** Döngü sekmesi → Cycle Settings altı → "🔬 Bilim Modu Seviyesi" 3-buton kartı. L3 tip: "🧪 Hacettepe Lab açıldı."

**Hacettepe Lab tease:** L1/L2'deyken kilitli görünür ("🔒 🧪 Hacettepe Lab"), butona basınca otomatik L3 + smooth scroll.

### 🎯 Phase 2 P2 — 8/8 madde tamamı ✅

| | Madde | Commit | Etki |
|---|---|---|---|
| ✅ | P2.1 Set arası bilim mikro-balon (90sn rest timer banner) | `bb59653` | ⭐⭐⭐ |
| ✅ | P2.2 **Wedding countdown opt-out + somatic reframing** | `2b055c3` | ⭐⭐⭐⭐ |
| ✅ | P2.3 Plate calculator (kg cinsinden barbell + plakalar) | `0e6b4cd` | ⭐⭐ |
| ✅ | P2.4 Etkileşimli Kas Anatomi modal (TR + Latince + L2) | `76c3ee3` | ⭐⭐⭐ |
| ✅ | P2.5 Tiroidektomi Destek Modülü (kan tahlili + doktor sorusu) | `e95467d` | ⭐⭐⭐ |
| ✅ | P2.6 Push Notification iOS PWA (5 reminder) | `ca6af34` | ⭐⭐ |
| ✅ | P2.7 Voice Logging Türkçe (Web Speech API + sayı parser) | `00473ba` | ⭐⭐ |
| ✅ | P2.8 Wearable Predictive HRV → Adaptive Yük + Claude API | `ff23cd2` | ⭐⭐⭐ |

### 🎉🎉 Phase 2 P1 — 4 EPIC × 16 COMMIT TAMAMI ✅

**Tek günde push'landı, GitHub Pages canlıda:** https://bengisusengul.github.io/bengisu-program/

| | Epic | Madde | Commit | Satır |
|---|---|---|---|---|
| ✅ | **1 · Pedagojik temel** | 1A EXERCISE_EDU 5→29 hareket | `2e51f0f` | 215 |
| ✅ | | 1B Glossary 68 terim modal + altı çizili linkify | `6eba68d` | 205 |
| ✅ | | 1C Pazartesi 'Bu Hafta Odak' (6 alt-faz × 10 alan) | `255ad16` | 148 |
| ✅ | **2 · Görselleştirme** | 2A Güç Trendi 1RM grid (6 lift × 8 seans) | `2b48447` | 132 |
| ✅ | | 2B Kas Heatmap SVG body diagram (9 grup) | `ae6823b` | 246 |
| ✅ | | 2C Volume Trendi 12 hafta × MEV/MAV/MRV | `d9bea8b` | 168 |
| ✅ | | 2D PR Timeline + ZEN havuzu 4×6 | `95cb92f` | 148 |
| ✅ | **3 · Beslenme** | 3A Mikronutrient Gap (4 mikro × karnivor) | `28960bb` | 105 |
| ✅ | | 3B Pre/Post-WO timing + Calciday 18:30 (Hallberg) | `85dc102` | 6 |
| ✅ | **4 · 5 Orijinal Sentez** | 4A Body Conversation (sabah niyet → akşam diyalog) | `d45b8df` | 194 |
| ✅ | | 4B Levotiron Diary (sabah tap + 30 gün mood corr) | `dccb8f0` | 185 |
| ✅ | | 4C Hacettepe Lab (Bilim L3 · 4 sub-tab + 16 PMID) | `5a1ada8` | 214 |
| ✅ | | 4D Wedding Mirror (60 gün · 3 mod · kg suspend) | `a7f2f21` | 150 |
| ✅ | | 4E Cycle Pattern Emergence (3 cycle atlas trigger) | `3f983fb` | 183 |

**Ek:** PROGRESS.md güncellemesi (bu commit).

### 🎉 Phase 2 SYNTHESIS P0 roadmap — 10/10 TAMAMLANDI

| | Madde | Commit |
|---|---|---|
| ✅ | #1 Hipoparatiroidi temizliği | `ffb2619` |
| ✅ | #2 Set/rep/RPE girişi sistemi | `6caa368`+`f3694c4`+`cee41ca` |
| ✅ | #3 5-gün dengeli split | `588b6ef` |
| ✅ | #4 Cycle-aware antrenman matrisi | `588b6ef` |
| ✅ | #5 Quick state ✓/⚡/🛌 + akşam check-in | `6caa368`+`b1f8e40` |
| ✅ | #6 ⓘ Bilim Modu inline expand | `ee93689` |
| ✅ | #7 Plan vs gerçek haftalık özet | `e1a29a9` |
| ✅ | #8 Body neutrality + 5 satır Eylül | `3d564b6` |
| ✅ | #9 Anti-kompulsif tasarım | `b1f8e40` |
| ✅ | #10 Renpho AI + onboarding tıbbi etiket | `ffb2619` |

### 7 Mayıs (bugün) — 5 commit, Phase 2 Hafta 4 tamamlandı

✅ **Supplement entegrasyonu (`65dbb22`):** Selenyum 200 mcg (10:00) + Çinko 15 mg / Bakır 1.5 mg yeniden zamanlandı (22:00, Ca/Zn antagonizm önlendi). `selenium_detail` + `zinc_detail` doktor sorularıyla.

✅ **4A — Body neutrality + 5-metrik Eylül hedefi (`3d564b6`):** Ölçüm sekmesi tek-kg-tiranlığı yerine 5 metrikli (kg + bel + squat 1RM + adım + ruh hali). Aylık aralıklar (May 73-75 → Eyl 56-60), "Hız bedenine ait" yumuşak ton.

✅ **4B — Akşam check-in + anti-kompulsif (`b1f8e40`):** 19:00-23:59 5-mood check-in (✨💪🌊🌫️🌙, hiçbiri "başarısız"). Pazar 20:00+ haftalık compulsive screening (3 yargısız soru, avg ≥3.5 → kibar esnek hafta önerisi).

✅ **4C — Plan vs gerçek haftalık özet (`e1a29a9`):** Pazar 20:00+ Bugün'de otomatik 6-ring conic-gradient pano (yürüyüş/antrenman/öğün/su/dinlenme/cycle log) + total volume + skip/modify + faz notu + "stratejik hafta, yarım değil" kapanış.

✅ **4D — ⓘ Bilim Modu inline expand (`ee93689`):** 5 ana hareket için Ajan 7 pedagoji metni (anatomi/biyomekanik/metabolik/yaygın yanlış kavram + L3 ileri toggle). EXERCISE_EDU data + sage-green ⓘ chip.

### Önceki günün (6 Mayıs) ✅ özetler



✅ **Bugün sekmesi bare-image + greeting'e indirgendi (6 May).** Bg.jpg artık ana hero, sade selam kartı (cycle phase + ZEN) hariç hiçbir şey yok. 📷 Health Ölçüm sekmesinde.

✅ **Türkçeleştirme bittirildi (6 May).** "İyi öğleden" → "Tünaydın", 33 egzersiz talimatı tam Türkçe, modal butonları, takvim sabitleri, split/cooldown isimleri.

✅ **🧬 Egzersiz "Ultimate" 12-ajan sentez analizi tamamlandı (6 May).** workout-ultimate/ klasörü repo'da, 11 uzman + ben sentezci, sıralı çalışma. SYNTHESIS.md master roadmap: 30 madde (P0:10 / P1:12 / P2:8) + 5 orijinal fikir + 4 haftalık Phase 2 implementation roadmap.

✅ **Phase 2 Quick Wins (6 May).** Hipoparatiroidi temizliği (7 yer), kreatin 5→14 gün, geç luteal +100→+150 kcal, RED-S guardrail Energy Availability hesabıyla genişletildi.

✅ **Phase 2 Hafta 2 — Set log altyapısı TAMAMLANDI (6 May).** Üç alt-hafta tek günde tamamlandı:
   - **2A (`6caa368`):** WorkoutLogEntry data model + 14 helper + UI (per-set kg/rep/RPE input + ✓ confirm + pre-fill + bottom sheet ⚡/🛌). Migration eski done boolean → workout_log.
   - **2B (`f3694c4`):** Wake Lock API (antrenmanda ekran açık), auto rest timer (compound 150s, izolasyon 75s, core 45s), vibration + visual flash, manuel −10/skip/+10 kontrolleri.
   - **2C (`cee41ca`):** PR celebration modal (cycle-aware ZEN, Trophy animasyon, "önceki → yeni" + delta), antrenman özeti üstte (✨ Tamam / 📊 Şu ana kadar — volume, ort RPE, PR, atlanan), her hareket için son 4 seans 1RM sparkline.

✅ **Phase 2 Hafta 3 — 5-gün split + cycle-aware matrisi TAMAMLANDI (6 May, `588b6ef`).** Pzt Alt-Squat / Sal Üst-Push / Çar Glute-Posterior / Per Üst-Pull / Cum Total-Hibrid / Cmt-Paz dinlenme. 10 yeni hareket (Bulgarian Split, Goblet, Step-Up, Cable Chest Fly, B-Stance HT, Cable Pull-Through, Dead Bug, Assisted Pull-Up, KB Swing, Farmer's Carry). `getCycleAwareWorkoutAdjustment` 7 faz × intensity/volume çarpanı + bilim notu + substitusyon flag. Ovulasyon Day 11-15'te her riskli hareket kartında "🌸 [Alternatif]'a geç" CTA chip — tek tap S.swaps üzerinden cycle-safe geçiş.

### 6 Mayıs ne oldu (BÜYÜK GÜN — 14 commit)
1. Bugün strip · 2. Türkçeleştirme · 3-14. workout-ultimate (1 plan + 12 ajan + sentez + 4 quick win) → Hafta 2A/B/C → Hafta 3
2. **Phase 2 Hafta 1 (Quick Wins) ✅ + Hafta 2 (Set log) ✅ + Hafta 3 (Split + cycle-aware) ✅**
3. SYNTHESIS roadmap'te P0 listesinin **6/10'u tamam** (P0 #6 ⓘ bilim modu, #7 haftalık özet, #8 body neutrality dil, #9 anti-kompulsif kaldı — Hafta 4)



✅ **Diyet sistemi karnivor + post-workout karb pencere modeline yenilendi.** 10:00–19:00 IF, baseline 1.750 kcal, ViDrate + Bulk Creatine eklendi.

✅ **Cilt sıralaması düzeltildi.** Yürüyüş öncesi mini SPF, duş sonrası tam rutin. Retinol-after 4-adım otomatik düşer.

✅ **9-lens design audit yapıldı + tüm P0/P1/P2 implement edildi.** ED safety, endocrinology, personalization, UX+a11y, sacred feminine, anti-fragility, sports science — 9 paralel agent + sentez + ~95/115 finding uygulandı.

✅ **Cycle-awareness 16 noktada genişletildi.** Magnezyum dozu, pre-workout karb, su hedefi, PPL deload, macro target (Ovulation + Erken/Geç Luteal) — hepsi phase'e reaktif.

✅ **Streak revamp:** Grace period (3 gün), comeback narrative, burnout detection, protected days (🤒/✈️/🩸), 28-gün consistency % metric.

✅ **Türkçeleştirme tamamlandı.** Nav, form, headers, phase isimleri (mevsim + arketip), error messages, AI prompts.

✅ **Onboarding wizard eklendi.** İlk açılışta 3 kart karşılama (regl seed + ölçüm + medikal context).

✅ **Akşam Bahçesi görsel tema (5 May).** App adı "Bengisu ☀️", `bg.jpg` Bugün sayfasında, diğer 5 sayfa Tema B solid renkler (mauve/hardal/sage/krem peach/su mavisi). Glass morphism cards (blur 28px + cream border).

✅ **🏠 Dashboard / Bugün sayfası eklendi (5 May).** Saat-bazlı selam + ZEN + 4 zaman bloğu accordion (sabah/öğle/antrenman/akşam) + quick stats + Aylık Takvim mini accordion.

✅ **Apple Health entegrasyonu çözüldü (Photo + AI yolu, 1 May).** iOS 17+ engelini bypass eder.

✅ **PROGRESS.md + Memory rutini kuruldu.** Yeni sohbette Claude bu dosyayı otomatik okuyup bağlama girecek.

### 6 Mayıs ne oldu (BÜYÜK SOHBET — Bugün strip + Türkçe + 12-ajan Egzersiz analizi + Phase 2 Quick Wins)
- **Bugün sekmesi minimale strip** (commit `5afbb91`): bg.jpg arka plan resmini öne çıkarmak için 5 dashboard bölümü kaldırıldı, sadece selam kartı + topbar kaldı. 📷 Health Ölçüm sekmesine taşındı.
- **Türkçeleştirme** (commit `d530b64`): "İyi öğleden" → "Tünaydın", 33 egzersiz İngilizce talimatları Türkçeleştirildi, modal butonları + takvim sabitleri + split/cooldown isimleri çevrildi.
- **🧬 Egzersiz Ultimate 12-ajan sıralı sentez** (workout-ultimate/ klasörü, repo dışı): kullanıcı "10+ uzman ajan getir" istedi, beraber kadro brainstorm'u yapıldı, kadro = 11 uzman + ben sentezci. Sıralı çalıştı (her biri öncekinin çıktısını okuyarak). Üretilen: 12 markdown rapor (~580KB total). Master sentez `SYNTHESIS.md`: 30 madde (P0/P1/P2) + 5 orijinal sentezci fikri (Hacettepe Lab / Body Conversation / Cycle Pattern Emergence / Levotiron Diary / Wedding Mirror) + 4-haftalık Phase 2 implementation roadmap.
- **Phase 2 Quick Wins** (commit `ffb2619`): SYNTHESIS.md P0 listesinden ilk 4 madde — medikal/data correctness odaklı. Hipoparatiroidi yanlışlığı temizlendi (Bengisu'nun TANISI YOK, Calciday profilaktik), kreatin kan testi kesim 5→14 gün (PMID 30986825), geç luteal +100→+150 kcal (BMR +%8-12, EA hesabıyla doğrulandı), `getLowIntakeAlert()` IOC RED-S 2023 thresholds ile EA-based guardrail'a genişletildi.

### 4-5 Mayıs ne oldu (BÜYÜK SOHBET — Diyet/Cilt overhaul + Audit + Akşam Bahçesi + Dashboard)
- Plan A (Diyet/Cilt): IF 10–19, karnivor + post-workout karb pencere, mini SPF + tam rutin ayrımı, ViDrate + kreatin
- Period log otomatik düzeltme migration (yanlış 2 Mayıs kaydı → doğru 28 Nis–3 May)
- 16-noktalık cycle-awareness expansion (her render fonksiyonu phase-reaktif)
- 9-lens design audit (paralel Explore agentlar) → ~115 finding → P0/P1/P2 sentez
- P0+P1+P2 implementasyonu: RED-S guardrail, Calciday 4 saat, macro tolerans bandı, WCAG kontrast, focus state, streak grace + comeback + burnout, Türkçeleştirme, sacred feminine ton, Bakır + B vitaminleri detay, milestone celebrations, UK shop linkleri, ZEN Maisie Hill, ritüel transition, wedding countdown
- Akşam Bahçesi görsel tema: App "Bengisu ☀️", `bg.jpg` arka plan, glass cards, Tema B per-page renkler
- 🏠 Dashboard / Bugün sayfası: greeting + 4 accordion blok + mini takvim

### 1 Mayıs ne oldu (Apple Health Photo + AI)
- Eski input path (clipboard) iOS 17+ engelinden kullanılamıyordu, kullanıcı yeni bir kolay yol istedi
- **Photo + AI yaklaşımı seçildi:** screenshot al → galerinden seç → Claude Haiku 4.5 vision sayıları okur → preview modal'da düzelt → kaydet
- Yapılan değişiklikler (`index.html`):
  - Calendar topbar butonu `📋 Health` (clipboard) → `📷 Health` (photo picker)
  - Hidden `<input type="file" accept="image/*">` eklendi
  - Yeni preview/edit modal (`#health-photo-modal`) — 7 alan editable + tarih datepicker + Türkçe etiketler
  - Yeni fonksiyonlar: `openHealthPhotoPicker()`, `handleHealthPhoto()`, `analyzeHealthPhoto()`, `fillHealthPhotoModal()`, `saveHealthPhotoData()`
  - `pasteHealthData()` silindi (53 satır), Calendar daily-detail "Güncelle" butonu da yeni fonksiyona bağlandı
- `getHealthLog`, `saveHealthDay`, `sleepMinToScale`, `renderHealthCardForSelDay`, Cycle sleep auto-fill, Workout topbar mini-info — **hepsi aynen kaldı**, sadece input path değişti
- `HEALTH_SHORTCUT.md` photo rehberine baştan yazıldı (eski Shortcut adımları silindi)
- JS smoke test (`new Function`) PASS — 3335 satır, 194k karakter

### Şu anki teknik durum
- Photo + AI input path **kurulu ve test edilmeyi bekliyor** (iPhone'da gerçek screenshot ile)
- localStorage anahtarı `health_log` artık dolu data alabilir
- Anthropic key zaten var (Diet/Recipe/Renpho için kullanıldı) — ek setup yok
- Maliyet: ~$0.001/screenshot (Haiku 4.5 vision)

⏳ **Test bekliyor:**
- iPhone'da Health app screenshot al → site'de 📷 Health → modal preview → save → Calendar/Cycle/Workout kartlarında veriyi gör
- AI'ın okuduğu sayıların doğruluğu (Türkçe binlik ayraç vb.)
- Modal düzenlenebilir alanlarda input UX

✅ **Phase 2 P0 fazı 10/10 TAMAMLANDI (7 May).** Egzersiz Ultimate roadmap'te tüm zorunlu maddeler kodda. Kullanıcı testi sonrası P1'e geçilebilir.

🎯 **Sıradaki ufuk — P1 (4-8 hafta süreceği tahmin):**

**Pedagojik genişleme:**
- ⓘ Bilim Modu — 5 hareket → 25+ hareket için edu metni (Ajan 7 ile tek tek)
- Glossary 50-80 terim (RPE, RIR, MEV/MAV/MRV, mTOR, glikoliz...) L1/L2/L3 toggle altı çizim
- "Bu hafta odak" haftalık kart (Pazartesi sabah, cycle fazına göre faz açıklaması — 200-400 kelime, ders planı kalitesinde)

**Görselleştirme:**
- Kas grubu balance heatmap (SVG body diagram, ön+arka, 9 ana kas grubu × MAV oranı)
- Volume × MEV/MAV/MRV stacked bar (12 hafta × kas grubu)
- Cycle × performance pattern emergence (3 cycle sonra Bengisu'nun PR atlası)

**Beslenme:**
- Mikronutrient gap kapatma (C vit ≥75 mg, K2 100 µg, lif 5-10g, omega-3)
- Pre/post-WO zamanlama optimizasyonu (Calciday 2. doz 17:00→18:30, pre-WO 14:00 30g karb)

**5 orijinal sentez fikri (sen "hepsi içeride" dedin):**
- 🧪 Hacettepe Lab — bilim modu özel sekme (PMID kütüphanesi, hipotez defteri, pedagojik notlar)
- 💬 Body Conversation — sabah niyet → akşam karşılaştırma somatic diyalog
- 📊 Cycle Pattern Emergence — 3 cycle sonra "Bengisu'nun Cycle Atlası" + literatür kıyas
- 💊 Levotiron Diary — ilaç × performance × mood pattern, doktor PDF export
- 💍 Wedding Mirror — düğüne 60 gün kala özel mod, 14 gün önce kg suspension

⏳ **Bengisu'nun cevaplaması gereken açık sorular** (SYNTHESIS.md Bölüm 7):

**Cevaplananlar (6 May):**
- ✅ kg/lbs tercih? → **kg**
- ✅ RPE girişi şart mı yoksa opsiyonel mi? → **şart** (her sette zorunlu, otoregülasyon + cycle × performance pattern için)
- ✅ 5 orijinal fikirden hangileri Phase 2'ye girsin? → **HEPSİ** (Hacettepe Lab + Body Conversation + Cycle Pattern Emergence + Levotiron Diary + Wedding Mirror). Bu Phase 2'yi ~8-12 haftaya uzatır, sıralama Hafta 2 sonrası netleşir.

**Hafta 2 design kararları (6 May):**
- ✅ Wake Lock: **antrenmanda hep açık** (Egzersiz sekmesi açıkken Wake Lock API aktif)
- ✅ Pre-fill: **otomatik gelsin** — Strong/Hevy pattern, önceki seans ağırlık + rep + RPE placeholder olarak
- ✅ Timer auto: **set bitince otomatik başlasın** — compound 150s, izolasyon 75s, core 45s

**Açık (Hafta 2 implementasyonu sırasında veya sonra cevaplanır):**
- Push notification izni vermek ister mi (akşam check-in için)?
- "Süreklilik" mi "Akış" mı kelime tercihi?
- Hangi rakip app denedi? Beğendiği özellik var mı?

### 💊 Bekleyen supplement entegrasyonu (6 May)

Bengisu diyetine ekledi, koda entegrasyon ileride yapılacak (ayrı seans):
- **Selenyum 200 mcg/gün** — tiroidektomi sonrası tiroid sağlığı (T4→T3 dönüşüm desteği, Sims literatürü). Daha önce uygulamadan çıkarılmıştı (4 May), şimdi geri ekleniyor. UL 400 mcg, makul doz.
- ✅ **Çinko 15 mg/gün** — Bengisu doğruladı (7 May, "15 mg çinko"). Kadın RDA 8 mg, supplement tipik 15-30 mg, UL 40 mg. Levotiron'dan ≥4 saat ayrı, Calciday'den ayrı (Ca/Zn antagonizmi), tercihen yatmadan önce.

**Entegrasyon yapılacaklar:**
- Diyet sekmesi supplement zamanlama tablosuna (`supp-tl` veya `creatine_detail` benzeri) eklenecek
- Selenyum 1×/gün herhangi bir zaman (genelde sabah)
- Çinko (15 mg ise) akşam yatmadan 1-2 saat önce, yağlı öğünden uzak (tercihen aç karnına ama bulantı yapabilir, deneme)
- Levotiron'dan ≥4 saat ayrı (kalsiyum / demir / çinko / magnezyum hepsinin Levotiron emilimini bozar)
- Ajan 1 + Ajan 4 referansları + doktor sorusu eklenecek

🎯 **Sonraki adımlar:**
- **iPhone'da gerçek kullanım testi** — Bengisu Phase 2 P0'ın hepsini canlı dener. Set log akışı, Wake Lock, auto-timer, cycle-aware banner, ovulasyon substitusyon, akşam check-in (19:00+), pazar haftalık özet (haftaya pazar 20:00), ⓘ Bilim Modu (5 hareket), 5-metrik Eylül hedefi.
- **Test feedback** sonrası rötuş seansı (UI ayarları, kopya iyileştirmeleri).
- **P1 öncelik karar** — pedagojik genişleme (Glossary, "Bu hafta odak" kartı) vs. görselleştirme (kas haritası heatmap) vs. 5 orijinal fikirden başlama. Kullanıcının duyguları ve enerjisine göre.
- Photo + AI flow iPhone test (hâlâ bekliyor).

---

**Yeni sohbete başlıyorsan:** Önce bu dosyayı oku → mevcut özellikleri ve kullanıcı tercihlerini anla → bekleyen kararlara odaklan. Memory rutini sayesinde bu otomatik olmalı. Site'yi tarayıcıda aç, gerçek davranışı kontrol et.

**Önemli kullanıcı feedback'i:**
- (28 Nisan) Manuel data girişi sevmiyor — sağlık baskısı yapıyor.
- (28 Nisan) iOS Shortcut çok iş ve iOS 17+'da kırık, vakit kaybı.
- (1 Mayıs) Photo + AI yolu hem kolay hem mevcut Renpho UX pattern'i ile aynı — kabul edildi.
- (4 Mayıs) "Tüm sekmeler petrol mavisi görünüyor" → her sekme **gerçekten farklı renk** olsun istendi. Tema A (hardal/coral/sage/mavi/mauve/servi) → Tema B (sıcak ağırlıklı: coral/mauve/hardal/sage/krem/su mavisi).
- (4-5 Mayıs) "Renkler boz görünüyor" → image+scrim mix yerine **solid net renkler**. Image sadece Bugün sayfasında, diğer 5 sayfa solid color gradients.
- (5 Mayıs) "App ilk açılınca dashboard açılsın" → Takvim sekmesi Bugün dashboard olarak refactor edildi. Step-by-step yapılacaklar **collapsible accordion** olmalı (4 zaman bloğu).
- **Doktor kontrolü:** Selenyum supplementasyonu önerisi (Agent C audit) doktor kontrolünde değişecek — uygulamadan **çıkarıldı** (kullanıcı kararı, 4 May). Diğer P0 supplementler (Bakır, B6/B9/B12) eklendi.
