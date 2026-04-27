# 📋 Bengisu Program — Progress & Status

**Son güncelleme:** 27-28 Nisan 2026 (gece kapanış)
**Site:** https://bengisusengul.github.io/bengisu-program/
**Repo:** https://github.com/bengisusengul/bengisu-program

> Bu dosya projenin nerede kaldığını, hangi kararların verildiğini, neyin bekleyişte olduğunu hatırlatır. Yeni bir sohbette başlarken önce bu dosyayı oku.

---

## 🎯 Proje Genel Bakış

Bengisu'nun **kişisel sağlık takip uygulaması**. Tek dosyalı (HTML+CSS+JS) bir PWA, GitHub Pages'de yayında. Backend yok — tüm veri **localStorage**'da. AI özellikleri için kullanıcının kendi Anthropic API key'i kullanılıyor (browser'dan direkt çağrı).

**6 ana sekme** (alt menüde):
1. 📅 **Calendar** — aylık takvim, günlük detay, cycle çakıştırması
2. 🌸 **Cycle** — period log + günlük semptom takibi (Mart 2026'dan beri)
3. 🥩 **Diet** — IF + Carnivore-yumurta bazlı + AI macro tracker
4. 💪 **Workout** — 6 günlük split, GIF/YouTube'lu egzersizler, swap
5. ✨ **Skincare** — 7-gün rotasyonu (retinol/AHA cycle-aware)
6. 📊 **Metrics** — kilo/yağ/kas takibi, Renpho fotoğraf AI analizi

---

## 🛠 Teknik Mimari

| Bileşen | Detay |
|---|---|
| **Dosya** | Tek `index.html` (~3000 satır, ~175k karakter) |
| **CSS** | Inline `<style>`, ~260 rule. Renk paleti `--pink/mauve/sage/gold` warm wedding theme |
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
| 2026-04-27 23:xx | `be9a516` | **PROGRESS.md** oluşturuldu (bu dosya) |

**Toplam:** 27 commit bu sohbette.

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

### 2. Apple Health Entegrasyonu

**Sorun:** GitHub Pages statik site → Apple HealthKit'e direkt erişim yok.

**4 yol önerildi** (kullanıcı henüz seçim yapmadı):

| Yol | Sürtünme | Maliyet | Otomatiklik |
|---|---|---|---|
| 🟢 **iOS Shortcut + Clipboard** (önerilen) | Günde 1 sn ritüel | Ücretsiz | Yarı-otomatik |
| 🟡 **Health Auto Export + Dropbox** | Sıfır | $5 (one-time) | Tam otomatik |
| 🟠 **Backend (Vercel + Supabase)** | Sıfır | Ücretsiz | Tam otomatik |
| 🔴 **Manuel sayı girişi** | Yüksek | Ücretsiz | Sıfır |

**Hedef veriler:** Adım, aktif kalori, egzersiz dakikası, uyku, kalp atış, hareketli dakika.

**Cycle log'la entegrasyon:** Apple Watch uyku verisi → Cycle "Enerji + uyku skalası" otomatik dolar.

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

### Bottom navigation (6 tab)
```
📅 Calendar  🌸 Cycle  🥩 Diet  💪 Workout  ✨ Skin  📊 Metrics
```
6 buton iPhone SE'de (375px) sığar — `min-width:48px`, `padding:8px 10px`. Daha dar ekranlar (<360px) için media query var.

### Renk paleti
```css
--pink: #E8A598      /* primary */
--pink-deep: #C97B6E /* accent / regl rengi */
--mauve: #C4A5B8     /* luteal */
--sage: #A8BBA5      /* hedef ok */
--gold: #C9A96E      /* hafif aşım / kcal vurgu */
--text: #3D2E2A      /* warm dark brown */
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

## 📍 Şu Anki Durum (27-28 Nisan 2026, gece kapanış)

✅ **Diet sekmesi 100% yenilendi.** AI custom food + AI öneri + recipe + ringler + heatmap + achievement + streak + cycle-aware = tam paket.

✅ **PROGRESS.md + Memory rutini kuruldu.** Yeni sohbette Claude bu dosyayı otomatik okuyup bağlama girecek.

⏳ **Bekliyor (kullanıcının seçim yapması lazım):**
1. **Workout sekmesi** iyileştirmesi — 30 fikir sundum, tema bazlı; en güçlü 3'ü Pratiklik (set-rep tracking + PR + süre) / Cycle entegrasyonu (faza özel intensity + period-friendly mode) / Motivasyon (streak + achievement + heatmap)
2. **Apple Health entegrasyonu** — 4 yol sundum (🟢 iOS Shortcut + clipboard önerildi · 🟡 Health Auto Export $5 · 🟠 Backend Vercel+Supabase · 🔴 manuel)

🎯 **Sıradaki muhtemel adımlar:**
- Kullanıcı workout için tema seçer → Diet'e benzer atomik commit'ler (10-15 commit)
- Apple Health için yöntem seçer → Shortcut + UI ekleme (en pratik) veya backend kurma
- Cycle log günlük kullanım (semptom/mood/energy giriş) test edilirse UX feedback gelebilir
- Hook ekleme isteği gelirse `/update-config` ile PROGRESS.md auto-read tam otomatikleştirilebilir

---

**Yeni sohbete başlıyorsan:** Önce bu dosyayı oku → mevcut özellikleri ve kullanıcı tercihlerini anla → bekleyen kararlara odaklan. Memory rutini sayesinde bu otomatik olmalı. Site'yi tarayıcıda aç, gerçek davranışı kontrol et.
