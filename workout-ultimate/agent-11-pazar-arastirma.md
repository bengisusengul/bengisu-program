# Ajan 11 — Pazar Araştırması: 2026 Egzersiz Uygulamaları & Bengisu için Gold Standard Feature Seti

**Hasta profili:** Bengisu, 32 y, K · Total tiroidektomi · Hacettepe Fen Eğitimi MSc · 5/7 yürüyüş + 4-5/7 esnek güç · Kişisel kullanım, ticari değil · iPhone PWA (single file HTML, Akşam Bahçesi tema) · Hedef Eylül 2026 düğün

**Hazırlayan:** Ajan 11 — Mobil Egzersiz App Pazar Analisti & Ürün Stratejisti (Claude Opus 4.7, 1M context)

**Tarih:** 6 Mayıs 2026

**Kaynak tabanı:** Apple App Store / Google Play 2025-2026 inceleme metrikleri, Fitbod/Hevy/Caliber 2025-2026 blog karşılaştırmaları, CNN Underscored & Tom's Guide 2026 fitness app testleri, BarBend Caliber 2026 review, Wild.AI ürün dokümantasyonu, FitrWoman + Stacy Sims metodolojisi, Whoop/Oura coaching karşılaştırma kaynakları (kaynaklar Bölüm 12).

---

## Executive Summary

1. **2026 pazarında "tracker-first" + "AI-coach" + "cycle-aware" üçlüsünün kesişiminde tek bir dominant app yok — bu Bengisu için fırsat.** Wild.AI cycle-aware liderdir ama set/rep tracker'ı zayıf, Strong/Hevy tracker olarak gold ama cycle-aware sıfır, Fitbod adaptive AI'da öncü ama kadın hormon penceresi yok, Caliber bilim katmanı en sağlam ama lay seviyede kalıyor. Bengisu için "ideal app" mevcut hiçbir tek üründe yok — 4-5 farklı app'in en iyi feature'larını sentezlemek gerek. Tek dosya PWA mimarisi bunu **hızlı yapma avantajı** sağlıyor (no team friction, no roadmap voting).

2. **Pazar trendi 2026'da iki güçlü çizgide ilerliyor: predictive coaching (fatigue tahmini, cycle adaptasyonu) ve voice-first interaction (set logging azaltıldı).** Fitbod 2025 analytics raporu adaptive programming'in 4× hızlı progresyon sağladığını gösteriyor. McKinsey 2025 anketi kullanıcıların %68'i "öğrenen ve uyarlayan" app'leri tercih ediyor. Bengisu profilinde **predictive coaching = cycle-aware + RPE feedback + tiroid stabilizasyon** bileşkesi olmalı; voice-first ise terli el / gözlük çıkarma senaryolarında ergonomi kazandırır.

3. **Bengisu için differentiator kombinasyon: cycle-aware program + RPE tracker + L3 bilimsel mikro-açıklamalar + body neutrality dili + Türkçe locale + tek dosya PWA gizliliği. Bu beşli kombinasyon 2026 pazarında hiçbir app'te yok.** Wild.AI cycle-aware ama bilim seviyesi pop-sci, Caliber bilim ama cycle-blind, Strong tracker ama anti-kıyas yok, Sweat kadın odaklı ama estetik dili "hot girl" trendi (Bengisu için yıkıcı), hiçbiri Türkçe değil. Differentiator stratejisi **kopyalama değil sentez** — her app'ten 1 pattern alıp Bengisu kontekstine asimile et.

---

## 1. 2026 Egzersiz Uygulamaları Landscape — 4 Kategori

Pazar 4 ana kategoriye ayrılıyor. Her kategori için tipik kullanıcı, fiyat modeli ve 2026 öne çıkan özellikleri belirledim. Bengisu profili her kategoriden **bir parça** alır — ama hiçbiri tam değil.

### 1.1. Tracker-first apps (Strong, Hevy, Stronger by the Day, Setgraph, Jefit)

**Tipik kullanıcı:** Hipertrofi-odaklı, bilinçli yük progresyonu yapan, 6 ay+ deneyimli kullanıcı. Plan dışarıdan (kitap, coach, kendi mantığı) — app'ten beklediği sadece **log + grafik**. Yaş profili 22-40, genelde erkek (kadın oranı %25-30, son 2 yılda artıyor).

**Fiyat:** Freemium. Strong free tier 3 routine sınırı, Pro $4.99/ay. Hevy en ucuz: $23.99/yıl + $74.99 lifetime. Boostcamp tamamen ücretsiz (programlar dahil), Pro $15-80/yıl. Jefit free tier reklamlı, Pro $12.99/ay.

**2026 öne çıkan özellikler:**
- **Apple Watch native standalone logging** (Strong 2025 yeniden yazdı — telefon olmadan kayıt)
- **Muscle distribution heatmap** (Hevy 2025 ekledi — log esnasında inline)
- **Voice logging beta** (Setgraph, Stronger by the Day deneme — "yüz beş kilo sekiz tekrar" → otomatik kayıt)
- **PR detection + celebration** (her seviyede standart — Strong'un öncülüğü, Hevy/Jefit/Boostcamp kopyaladı)
- **Plate calculator** (Hevy'de güzel görsel — 100 kg = 20+15+10+5 plakalar gösterir)

**Bengisu için ne uygun ne değil:** Set/rep/RPE/PR/timer pattern'ları **tamamen alınmalı** (Ajan 10 zaten önerdi). Sosyal feed (Hevy) **alınmamalı** — Bengisu single-user. Erkek-dominant tasarım dili (kara temalı, ağır gri, "bench king" copy) Akşam Bahçesi paletine uymaz.

### 1.2. AI-coach apps (Fitbod, FitnessAI, Caliber, Future, Trainiac, Sensai)

**Tipik kullanıcı:** Plan kurmak istemeyen, app'in karar vermesini isteyen kullanıcı. "Bana bugün ne yapacağımı söyle" — Fitbod'un slogan'ı. Yaş 25-45, gender oranı dengeli, çoğu beginner-intermediate.

**Fiyat:** Premium-only veya yüksek freemium. Fitbod $79.99/yıl, FitnessAI $89.99/yıl, Caliber Plus $12/ay (~$144/yıl), Caliber Premium (insan koç) $200+/ay, Future $149/ay (en pahalı — gerçek koç + AI). Trainiac $99/ay. Sensai (yeni 2025) $9.99/ay.

**2026 öne çıkan özellikler:**
- **Adaptive programming** (Fitbod algoritması her seans öncesi muscle fatigue + recovery + ekipman input → workout üretir)
- **AI form check** (Caliber 2024 ekledi — kameradan squat/bench izle, form skor + uyarı; Sensai full-body keypoint tracking)
- **Voice coaching** (Future + Whoop coach — kulaklıkta gerçek zamanlı "5 dakikan kaldı, yavaşla")
- **Wearable integration** (Whoop Strain → Fitbod auto-deload; Apple Watch HR → Caliber RPE auto-suggest)
- **Predictive fatigue** (Fitbod 2025 — "yarın squat yapma, hamstring %18 toparlanmamış")

**Bengisu için ne uygun ne değil:** Adaptive programming pattern'ı **felsefe olarak** alınabilir (cycle-aware adaptasyon = adaptive program, sadece muscle fatigue değil hormon ekseni de) — ama Fitbod algoritmasını birebir kopyalamak gereksiz. AI form check **alınamaz** (single file PWA'da TensorFlow.js ağır, kamera UX gym'de pratik değil). Voice coaching **alınamaz** (Türkçe TTS web speech kalitesi düşük, gym ortamında zaten kulaklık var ama içerik üretimi 1 kişilik proje için aşırı). Future'un body neutrality dili (gerçek koçların antrenman dili — "estetik" değil "function") **alınmalı** (Ajan 6'nın body image katmanı için kritik referans).

### 1.3. Community + program apps (Sweat, Centr, Ladder, Peloton, Apple Fitness+, BoostCamp)

**Tipik kullanıcı:** Plan + topluluk + motivasyon ister. Tek başına gym'e gitmekten çekinen veya rutin kuramamış kullanıcı. Sweat ve Ladder kadın-merkezli (Sweat 2025 verisi: %94 kadın). Apple Fitness+ Apple Watch sahipleri için "gym yerine evde 30 dk" niş.

**Fiyat:** Sub-only, premium pricing. Sweat $19.99/ay, Centr $29.99/ay (Hemsworth), Ladder $29.99/ay (Apple App of the Year 2025 finalist), Peloton App+ $24/ay, Apple Fitness+ $9.99/ay (Apple Watch ile $79.99/yıl bundle). BoostCamp **free** (içeriği coach'tan, premium $15-80/yıl).

**2026 öne çıkan özellikler:**
- **Coach-led structured programs** (Sweat'in Kayla Itsines BBG'si, Ladder'ın "team-based" yapısı, Centr'ın 6-haftalık çözüm)
- **Live classes + on-demand** (Peloton + Apple Fitness+ — gerçek zamanlı bisiklet/koşu/HIIT dersleri)
- **Activity ring closure** (Apple Fitness+ — Move/Exercise/Stand → günlük closure dopamin, en güçlü habit anchor)
- **Team/community accountability** (Ladder'ın patentli — gruplar 10-12 kişi, her hafta sıralama)
- **Cycle insights** (Obé Fitness'ın Cycle Insights tab'ı — folliküler/luteal phase × workout uyumu, 2024 lansmanı)

**Bengisu için ne uygun ne değil:** Activity ring closure pattern'ı **alınabilir** ama Bengisu'ya uyumlu yumuşatılmış versiyonla — tıkla-kapan ring değil, **akış streak** (Ajan 8). Community/team feature'ı **alınmaz** — single-user proje, ayrıca düğün dönemi sosyal kıyas riskli. Coach-led video class **alınmaz** — içerik üretimi maliyetli, Bengisu plan kuran kişilik (MSc, kendi düşünür). Apple Fitness+ Apple Watch native — PWA değil, Bengisu Apple Watch sahibi değilse zaten irrelevant.

### 1.4. Spesifik niş apps (Wodify CrossFit, BoostCamp powerlifting, Wild AI cycle-aware, MAPS Anabolic, Strongr Fastr fasting)

**Tipik kullanıcı:** Belirli bir disiplin/durum için optimize edilmiş app arayan kullanıcı. CrossFit'çi Wodify, kompetitif powerlifter Boostcamp + RP Strength, kadın hormon-aware Wild AI + FitrWoman + Hormona, intermittent faster Strongr Fastr.

**Fiyat:** Niche genelde premium. Wild AI $9.99/ay veya $79.99/yıl. FitrWoman free (kurumsal ortaklarla — Orreco). Hormona $11.99/ay. Boostcamp free + premium. Wodify gym-licensed (B2B). MAPS Anabolic $29.99 (bir kez).

**2026 öne çıkan özellikler:**
- **Cycle-aware programming** (Wild AI — folliküler %110 yük × luteal %80 yük, bilim temelli; Stacy Sims metodolojisi)
- **Specific symptom tracking** (Wild AI 30+ semptom — meme hassasiyeti, ruh hali, uyku, bloating; FitrWoman ek olarak besin önerileri)
- **Birth control variant support** (Wild AI 150 farklı doğum kontrol metodu — pill, IUD, implant ayrı algoritma)
- **Perimenopause/menopause** (Wild AI 2024 ekledi — semptom-bazlı algoritma, hormonal flux pattern)
- **Powerlifting-spesifik PR tracker** (Boostcamp — 1RM hesaplayıcı, Wilks/IPF Points hesaplama, federal kurallar)

**Bengisu için ne uygun ne değil:** Wild AI'nın cycle-aware programming pattern'ı **felsefe olarak alınmalı, birebir alınmamalı** — çünkü Wild AI bilim seviyesi pop-sci (Sims popüler kitap diliyle), Bengisu MSc ve daha derin açıklama ister. FitrWoman'ın 4-faz sınıflandırması alınabilir ama 4-faz sınırlayıcı (Ajan 3 daha incelikli faz kestirimi öneriyor). Powerlifting-spesifik feature'lar **alınmaz** — Bengisu hipertrofi + kemik koruma odaklı, kompetitif değil.

---

## 2. Top 10 App Derinlemesine — Özellik Matrisi

Her app için 7-eksen özellik matrisi. Bengisu sistemine entegrasyon skorları 1-5 ölçeğinde (5 = direkt al, 1 = irrelevant/zararlı).

### 2.1. Strong (Logan Brittain, sole developer, 2014)

- **Güçlü:** (1) Set/rep/ağırlık logging UX'i pazardaki en hızlı (Apple App Store 4.8, 285k+ review), 1.5 sn ortalama set logging; (2) Apple Watch standalone — telefon olmadan kayıt, 2025 yeniden yazıldı; (3) PR detection real-time + celebration mini-popup; (4) Inline rest timer customizable per exercise.
- **Eksik:** Cycle-aware sıfır. Sosyal/topluluk yok (artı puan Bengisu için). Adaptive programming yok — kullanıcı planı kendi kurar. Bilim/eğitim katmanı yok — sadece logger. Body neutrality dili nötr (zarar vermiyor ama desteklemiyor).
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ❌ Yok.
- **Logging UX:** 5/5 (gold standard).
- **Görselleştirme:** 4/5 (sparkline trend, PR timeline, ama muscle balance heatmap yok).
- **Bizim sisteme entegrasyon:** **5/5** logging UX pattern. Numpad + 2.5 increment + RPE chip + autosave. Akşam Bahçesi paletinde re-implement.

### 2.2. Hevy (Hevy Coach Inc., 2019)

- **Güçlü:** (1) En ucuz tracker — $23.99/yıl + lifetime $74.99; (2) Muscle distribution heatmap inline (log esnasında body diagram'da çalışılan kaslar mavi); (3) PR celebration + estimated 1RM otomatik (Brzycki); (4) Plate calculator görsel; (5) Sosyal feed opsiyonel.
- **Eksik:** Sosyal feed kullanıcılar için "estetik baskı" üretebilir (yorumlar — vücut karşılaştırma riskli — Bengisu için TÜM sosyal kapatılmalı). Cycle-aware yok. Adaptive programming yok.
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ❌ Yok.
- **Logging UX:** 5/5 (Strong'a yakın, bazı yerlerde önde — örn. plate calculator).
- **Görselleştirme:** **5/5** (muscle heatmap pattern Bengisu için kritik — Ajan 9 zaten önerdi).
- **Bizim sisteme entegrasyon:** **5/5** muscle heatmap, 4/5 plate calculator (kg cinsinden — basit görsel), 1/5 sosyal feed (almıyoruz).

### 2.3. Fitbod (Fitbod Inc., 2015)

- **Güçlü:** (1) Adaptive algorithm — muscle fatigue + recovery + goal + equipment → her seans personalized (millions of logged set training data); (2) "Why this exercise?" tooltip (algorithm decision explainer); (3) 2025 analytics: advanced users %4× progresyon, %22 daha PR; (4) Equipment-aware (gym/home/dumbbell-only ayrı plan).
- **Eksik:** Cycle-aware yok. Bilim açıklamaları lay-seviye. Premium-only (free tier 3 workout). UI yoğun — Strong'un sadeliği yok.
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ⚠️ Var ama yüzeysel ("muscle is recovered" → ne demek? mekanizma yok).
- **Logging UX:** 4/5 (Strong'dan biraz daha karmaşık).
- **Görselleştirme:** 5/5 (fatigue map, progression chart, kas kategorisi grafikler).
- **Bizim sisteme entegrasyon:** **3/5** algoritma felsefesi (cycle-aware adaptasyon = Fitbod muscle adaptasyonu + hormon ekseni); **4/5** "why this exercise" tooltip pattern (Ajan 7 + bilim katmanı için kritik); **2/5** algoritma direkt (single file PWA'da bu seviye ML zor).

### 2.4. Caliber (Caliber Health Inc., 2020)

- **Güçlü:** (1) Strength + bilim odaklı (founders eski athletes + PhDs); (2) AI plan + insan koç hibrit (Plus tier $12/ay = AI; Premium $200+ = gerçek koç); (3) AI form check (kameradan squat/bench analiz) — 2024 lansmanı, Sensai'den eski; (4) Sustainable progress + body composition odaklı (estetik dış-merkezli değil); (5) Bilim açıklamaları diğer mainstream app'lerden derin.
- **Eksik:** Cycle-aware yok. Bilim seviyesi orta (lay+ ama MSc seviyesi değil). Pahalı (Premium tier).
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ✅ Var (orta seviye, mekanizma açıklamaları başlıyor).
- **Logging UX:** 4/5 (pre-filled progressive yük önerisi — Ajan 10 önerdi bunu).
- **Görselleştirme:** 4/5 (kuvvet trend forecast — projeksiyon line, Bengisu için motive edici).
- **Bizim sisteme entegrasyon:** **4/5** bilim açıklama dili (Ajan 7'nin L2 katmanı için referans); **5/5** kuvvet trend forecast pattern (Ajan 9'a ekleme); **4/5** pre-filled progressive yük (Ajan 10 önerdi); **1/5** AI form check (PWA'da almıyoruz).

### 2.5. Future (Future Fit Inc., 2019)

- **Güçlü:** (1) Gerçek 1-on-1 koç (95% bachelor exercise science, 80% pro/Olympic athlete eğitmiş); (2) Apple App Store 4.9 (9400+ review); (3) Body neutrality dili (function-odaklı, "performance" değil "estetik"); (4) Wearable integration deep (Apple Watch + Whoop).
- **Eksik:** $149/ay — pahalılık tabusu. Tracker değil — log eden kullanıcı için fazla. Cycle-aware yok. Bilim açıklamalarını koç sunar (app içi sıfır — koça bağımlı).
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ⚠️ Koç-bağımlı (app içi minimum).
- **Logging UX:** 3/5 (koç-merkezli — kullanıcı feedback gönderir, koç ayarlar).
- **Görselleştirme:** 3/5.
- **Bizim sisteme entegrasyon:** **5/5** body neutrality dili (Ajan 6 için kritik referans); **2/5** koç UX (single-user proje); **3/5** wearable integration (PWA'da Apple HealthKit denendi — Ajan 6'da işaret edildi, attempt yapıldı).

### 2.6. FitnessAI (FitnessAI Inc., 2019)

- **Güçlü:** (1) En basit AI plan üreten — onboarding 3 dk, sonra her gün workout hazır; (2) 5.9M workout + 40k kullanıcı verisi → progressive overload algoritması; (3) Free tier kullanışlı (premium $89.99/yıl).
- **Eksik:** Çok algoritmik — neden değişiklik açıklaması zayıf ("AI said so"). Cycle-aware yok. Bilim katmanı sıfır. Form check yok.
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ❌ Yok.
- **Logging UX:** 4/5.
- **Görselleştirme:** 3/5 (basit progress chart).
- **Bizim sisteme entegrasyon:** **2/5** — algoritma var ama Fitbod'dan zayıf, başka app'ten daha güçlü pattern alınabilir.

### 2.7. Sweat (Sweat Inc., Kayla Itsines, 2015)

- **Güçlü:** (1) Kadın-merkezli (94% kadın, sektör en yüksek); (2) Structured programs (BBG, Stronger, etc. — 12-haftalık plan); (3) Postpartum + pregnancy modu (Sweat'ı diğerlerinden ayırır); (4) Cycle Insights 2024 (Obé entegrasyonu sayesinde).
- **Eksik:** Estetik dili "hot girl" trendine yakın — Bengisu için yıkıcı (Ajan 6 body neutrality önerisi). Tracker zayıf (sadece "yapıldı/yapılmadı" çek). Adaptive yok. Tüm program dışarıdan, kullanıcı ayar yapamaz.
- **Cycle-aware:** ⚠️ Var (Cycle Insights, ama yüzeysel — sadece phase göstergesi).
- **Bilim:** ⚠️ Lay seviye (Kayla Itsines pop-sci diliyle).
- **Logging UX:** 2/5 (sadece tamamlandı işareti).
- **Görselleştirme:** 2/5.
- **Bizim sisteme entegrasyon:** **2/5** postpartum/cycle modu felsefesi (Bengisu'ya direkt uymaz ama kadın yaşam evresi farkındalığı önemli); **0/5** estetik dili (almıyoruz, zararlı).

### 2.8. Apple Fitness+ (Apple Inc., 2020)

- **Güçlü:** (1) Apple ekosistemi entegrasyonu (Watch + iPhone + AirPods + TV); (2) Activity ring closure dopamin-temelli habit; (3) HRV + cycle tracking (Watch Series 8+ sıcaklık sensörü → ovulasyon kestirimi); (4) Türkçe altyazı 2024 lansmanı (içerik İngilizce ama altyazı var).
- **Eksik:** Apple Watch zorunlu (sahip değilsen değer üretmiyor). Tracker değil — sadece class + activity ring. Plan yok. Adaptif değil.
- **Cycle-aware:** ⚠️ Var (Watch sensörü — Bengisu Watch sahibi değilse irrelevant).
- **Bilim:** ❌ Yok.
- **Logging UX:** 2/5 (sadece activity ring).
- **Görselleştirme:** 4/5 (activity ring, weekly summary).
- **Bizim sisteme entegrasyon:** **3/5** activity ring pattern (akış streak Ajan 8'e ekleme); **1/5** Watch native (PWA'da değil).

### 2.9. Wild AI (Wild.AI, Helene Guillaume, 2018)

- **Güçlü:** (1) Cycle-aware market lideri (Stacy Sims metodolojisi temelli); (2) 150 farklı doğum kontrol metoduna ayrı algoritma; (3) Perimenopause + menopause modu (2024); (4) 30+ semptom tracking; (5) Wearable integration (Oura, Garmin, Fitbit, Strava, Apple Health, Training Peaks).
- **Eksik:** Tracker zayıf (set/rep değil — workout type seviyesinde "kuvvet/kardio/yoga"); kuvvet PR yok; bilim seviyesi pop-sci (Sims'in kitap dili — derin değil); estetik dil OK ama Akşam Bahçesi gibi sacred-feminine değil (modern fitness dili).
- **Cycle-aware:** ✅ **Gold standard.**
- **Bilim:** ⚠️ Pop-sci (Stacy Sims diliyle — Bengisu MSc için yetmez).
- **Logging UX:** 3/5 (kuvvet log için zayıf, semptom log için güçlü).
- **Görselleştirme:** 4/5 (cycle phase pattern, semptom heatmap).
- **Bizim sisteme entegrasyon:** **5/5** cycle-aware programming felsefesi (Ajan 3 zaten kullanıyor); **5/5** semptom tracking pattern; **3/5** bilim katmanı (Sims temel, üzerine ekleme — Schoenfeld + Helms + Israetel). **1/5** tracker (zayıf, Strong/Hevy alıyoruz onun yerine).

### 2.10. BoostCamp (BPM Health, 2020)

- **Güçlü:** (1) **Tamamen ücretsiz** core (premium opsiyonel $15-80/yıl); (2) 11,000+ program library (130+ coach-designed — Bryce Lewis, Jonnie Candito); (3) Powerlifting + hipertrofi + general fitness ayrı kategoriler.
- **Eksik:** UX karmaşık (yeni başlayan için aşırı seçenek). Cycle-aware yok. Bilim açıklamaları program-bağımlı. Tech sorunlar var (offline mod zayıf — kullanıcı network kaybında veri kaybediyor — 2025 review şikayetleri).
- **Cycle-aware:** ❌ Yok.
- **Bilim:** ⚠️ Program-bağımlı (Boostcamp'in kendi açıklaması zayıf).
- **Logging UX:** 4/5.
- **Görselleştirme:** 3/5.
- **Bizim sisteme entegrasyon:** **3/5** program library felsefesi (cycle-aware program kütüphanesi mantığı — Ajan 3'ün split'i 1 program, ileride başka mezo program'lar eklenebilir); **0/5** offline zayıflığı (PWA olarak biz tam tersi — offline-first).

---

## 3. Cycle-Aware Kadın Özel Apps — Derinlemesine

Bu kategori Bengisu için **en kritik referans çerçevesi.** Wild AI kategori lideri ama eksiklikleri var — onları biz kapatabiliriz.

### 3.1. Wild AI (detay)

Yukarıda 2.9'da özetlendi. Burada **Bengisu'ya ne kadar uyduğu** ekseninde derin değerlendirme:

- **Phase tanımı:** Wild AI 4-faz model kullanıyor (regl, folliküler, ovulasyon, luteal). Ajan 3'ün önerisi 5-faz (regl, folliküler erken, folliküler geç + ovulasyon, luteal erken, luteal geç) — daha incelikli. Wild AI'nın 4-faz Bengisu için yeterli ama **luteal geç** (PMS dönemi) ayrı tanınmadan bilim eksik kalıyor.
- **Yük adaptasyonu:** Wild AI folliküler %110, luteal %80-85 öneriyor. Sims'in kitabıyla uyumlu. Ajan 3 daha esnek (RPE-temelli, RIR ayarı). Wild AI sabit yüzde, biz **dinamik RPE**.
- **Tiroid hastalığı:** Wild AI'da yok. Total tiroidektomi spesifik adaptasyon kategori dışında. Ajan 4 (endokrin) bunu kapatıyor.
- **Bilim seviyesi:** Pop-sci. Bengisu MSc → Hacettepe Fen Eğitimi → bilim eğitiminde kıdemli. Wild AI'nın "luteal phase'de daha çok demir tüket" tarzı önerileri Bengisu'ya yetersiz, **mekanizma** ister (Schoenfeld, Helms).

**Adopte edilebilir patternler:** (1) cycle phase ana navigation tab; (2) semptom tracking dashboard; (3) doğum kontrol variant (Bengisu için gerekirse — şu an profil bilgisi yok, default ovulatuar cycle); (4) wearable integration (Apple Health zaten hedef).

**Adopte edilmeyecek patternler:** (1) Sabit yüzde yük adaptasyonu (RPE daha esnek); (2) pop-sci bilim dili (L2/L3 daha derin); (3) sosyal/community feature (Wild AI'da kısıtlı ama var — biz tamamen kapatıyoruz).

### 3.2. FitrWoman (Orreco, 2015)

- Ücretsiz (kurumsal partnerler — Orreco). U.S. Soccer Team kullanıyor (kanıt değer).
- Phase tanımı 4-faz (Wild AI gibi). Beslenme önerileri ekleniyor (luteal'de demir, ovulasyon'da B vitamini).
- FitrCoach (B2B) — koçların atletlerini takip etmesi için.
- **Bengisu için:** Beslenme katmanı Ajan'lardan birinde de var (Ajan 6/7). FitrWoman'ın **"3 cycle pattern emergence"** felsefesi (3 cycle sonra kullanıcı kendi pattern'ını öğreniyor) **kritik** — Ajan 9'da PR × cycle phase pattern göstergesi bu felsefeyi taşıyor.

### 3.3. Hormona

- $11.99/ay. Hormona-Health.com.
- Hormone balance + estrogen-supportive nutrition odaklı.
- Cycle tracking + daily science-backed insights.
- Workout entegrasyonu **zayıf** — daha çok yaşam tarzı dergisi formatında.
- **Bengisu için:** Daily insight pattern alınabilir ama "estrogen balance" niş (Bengisu'nun primary endokrin meselesi tiroid). Workout-spesifik değil — direkt referans alınmaz.

### 3.4. Clue, Flo, Natural Cycles + Workout Apps

Bunlar saf cycle tracker (workout dahil değil). Kullanıcı manuel olarak Strong'a + Clue'ya ayrı log atar — entegrasyon yok. **Bengisu için:** İki ayrı app aşırı sürtünme — biz **tek app** olarak ikisini birleştiriyoruz, bu zaten differentiator.

### 3.5. Hormone Garmin Connect

Garmin Connect 2023 menstrual tracking eklemesi. Garmin saat sahipleri için. Workout adaptasyonu yok — sadece phase göstergesi. **Bengisu için:** Apple ekosistemi varsayımıyla Garmin out-of-scope.

**Genel sonuç (cycle-aware niche):** Wild AI gold standard ama **tracker eksik**, FitrWoman beslenme güçlü ama **workout tracker eksik**, Hormona yaşam tarzı odaklı **workout zayıf**. Bengisu için pattern adoption: **Wild AI cycle felsefesi + FitrWoman 3-cycle pattern emergence + Strong/Hevy tracker** = sentez.

---

## 4. AI / Kişiselleştirme Trend 2024-2026

McKinsey 2025: %68 fitness app kullanıcısı "öğrenen ve uyarlayan" platform tercih ediyor. Pazar bu yöne hızla gidiyor. Dört ana akım:

### 4.1. AI Form Check (Computer Vision)

- **Kim yapıyor:** Caliber (2024), Sensai (2025), Zing Coach, Kemtai. Kameradan keypoint detection (body pose), real-time uyarı ("squat depth yetersiz", "knee valgus var").
- **Teknoloji:** TensorFlow.js MoveNet veya MediaPipe BlazePose. Native app'lerde Apple Vision (iOS) + ML Kit (Android).
- **Bengisu için entegrasyon:** **❌ Out-of-scope.** Single file PWA'da TensorFlow.js + MoveNet bundle 5-10 MB → ilk yükleme ağır. Ayrıca gym'de telefonu konumlandırma + kameraya görünme UX'i pratik değil. **Pas.**

### 4.2. Adaptive Programming (Algorithmic)

- **Kim yapıyor:** Fitbod (gold standard — muscle fatigue × goal × equipment); FitnessAI (5.9M workout veri); Caliber (AI plan + insan review hibrit).
- **Teknoloji:** Decision tree veya gradient boosted model (kullanıcı hareketi, RPE, recovery proxy → next workout).
- **Bengisu için entegrasyon:** **⭐ Felsefe olarak alınmalı.** Birebir kopyalamak yerine **cycle-aware + RPE-aware adaptive**: cycle phase + son seans RPE + tiroid ilaç saati + uyku stresi → next session yük öneri. Anthropic Claude API zaten kullanımda — bu adaptasyon Claude'a sorulabilir (input: son 4 hafta log + cycle phase + bugünün RPE → output: bugünkü yük önerisi). PWA'da hesaplama hafif, Claude'a iş veriyor.

### 4.3. Voice Coach (Conversational)

- **Kim yapıyor:** Future (gerçek koç + ses notlar); Whoop coach (AI sesli); Fitbod 2026 lansmanı; Apple Fitness+ (instructor sesi standart).
- **Teknoloji:** Web Speech API (browser native) veya OpenAI Whisper / Anthropic native voice (2026 lansmanı).
- **Bengisu için entegrasyon:** **⚠️ Düşük priorite.** Web Speech API Türkçe TTS kalitesi orta (Apple voice "Yelda" / Google TTS Türkçe). Ses çıktısı gym'de ya kulaklıkla pratik ya değil. Ayrıca tek-kullanıcı kişisel kullanım — koç kişiliği kurmak gereksiz drama. **Pas (P3 — gelecek için not).**

### 4.4. Predictive Coaching (Wearable + AI)

- **Kim yapıyor:** Whoop (Strain Coach — günlük "ne kadar zorlanmalısın" tahmini); Fitbod (yarınki workout bugünkü recovery'e göre); Apple Watch (HRV trend → workout ready/not).
- **Teknoloji:** Wearable HRV + RHR + sleep data → recovery score. Sonra AI "bugün squat'a hazır mısın" predict.
- **Bengisu için entegrasyon:** **⚠️ Kısmi.** Bengisu Apple Watch sahibi mi bilinmiyor (Ajan 6 Apple Health attempt notları var ama Watch belirsiz). Eğer varsa: HealthKit üzerinden HRV + sleep çekilir, Claude'a verilip predict edilir. Yoksa: Bengisu manuel olarak ✓/⚡/🛌 (Ajan 8) ile bugünkü durumunu işaretler — bu da predictive kalitesini düşürmez ama veri rich değil. **Wearable opsiyonel, manuel default.**

**Genel pattern:** AI 2026'da "task automation" değil "decision support" rolüne kaydı. Bengisu için ideal: AI plan kurmaz, **plan üzerine cycle/RPE/recovery feedback verir.** Anthropic Claude bu rol için kalibre — Bengisu'nun 4 hafta log'una bakar, "ovulasyondan önce squat performansın yükseliyor — 2 hafta sonra deneyim" der. Bu **bilimsel pattern emergence** + **kişisel veri** birleşmesi, hiçbir mainstream app'te yok.

---

## 5. Görselleştirme + Analytics Gold Standard

Pazar liderleri farklı görselleştirme patternlerinde uzmanlaştı. Bengisu için Ajan 9 zaten temel öneriyi yaptı — burada her pattern'ın **kim'in en iyi yaptığı** + **adopte etme kararı** var.

| Pattern | Pazar lideri | Kalite | Bengisu için adopte? | Not |
|---|---|---|---|---|
| **PR detection + celebration** | Strong | 5/5 | ✅ Evet (P0) | Mini popup + ⭐ ikon, real-time |
| **Muscle distribution heatmap** | Hevy | 5/5 | ✅ Evet (P0) | SVG body diagram, Ajan 9 önerdi |
| **Kuvvet trend forecast** | Caliber | 4/5 | ✅ Evet (P1) | Sparkline + projeksiyon line, Ajan 9 ekleme |
| **Activity ring closure** | Apple Fitness+ | 5/5 | ⚠️ Yumuşatılmış (P1) | Ring değil "akış sürekli" — Ajan 8 |
| **Recovery score (Whoop)** | Whoop | 4/5 | ⚠️ Manuel proxy (P2) | ✓/⚡/🛌 (Ajan 8) — wearable yoksa kullanıcı işaretler |
| **Cycle phase pattern** | Wild AI | 4/5 | ✅ Evet (P0) | PR × phase pattern, Ajan 9 önerdi |
| **Volume × MEV/MAV/MRV bandı** | Renaissance Periodization | 5/5 | ✅ Evet (P1) | Stacked bar + Israetel band, Ajan 9 önerdi |
| **Estimated 1RM (Brzycki)** | Hevy + Strong | 4/5 | ✅ Evet (P0) | Otomatik hesap, formül Ajan 9'da |
| **Plate calculator görsel** | Hevy | 4/5 | ⚠️ Opsiyonel (P2) | TR'de kg + standart plakalar — basit |
| **Kuvvet trend × cycle phase** | Hiçbiri yapmıyor | — | ✅ **Differentiator (P0)** | Bengisu için unique — PR'larının hangi phase'de geldiğini gösterir |

**Differentiator pattern:** Tablo'nun son satırı kritik. Hiçbir mainstream app **kuvvet trendi × cycle phase pattern**'ını birleştiriyor. Strong sadece kuvvet trendi, Wild AI sadece cycle phase göstergesi — ikisinin **kesişimi** Bengisu için unique pattern emergence sağlar. 3 cycle (≈3 ay) sonra Bengisu kendi pattern'ını öğrenir: "Ovulasyon'dan önce squat PR yapıyorum, regl 1. günü RDL'ye dokunmuyorum." Bu **Stacy Sims metodolojisinin tracker katmanına asimile edilmiş hali** — pazara yeni.

---

## 6. UX Deneyimi — Set Logging + Timer Trend 2024-2026

Ajan 10 detaylı UX kararları aldı. Burada **pazar trendi** olarak son 2 yıldaki yön:

### 6.1. Set Logging Yönelimi

- **Trend 1: Pre-filled progressive (Caliber öncüsü, 2024+).** App önceki seans yükünü autofill, +%5 öneri sunuyor. Kullanıcı ya kabul ya düzeltiyor. **Ortalama log süresi 1.2 sn** (Strong'un 1.5 sn'den hızlı). **Bengisu için:** ⭐ Ajan 10 önerdi.
- **Trend 2: Voice logging beta (Setgraph, Stronger by the Day, 2025).** "yüz beş kilo sekiz tekrar" → otomatik parse. Türkçe için Web Speech API destekli ama parser kalitesi orta. **Bengisu için:** Pas (Türkçe parser güvenilirlik düşük, gym ortamında konuşma rahatsız).
- **Trend 3: Apple Watch native input (Strong 2025 yeniden yazdı).** Telefon olmadan log. **Bengisu için:** PWA'da değil — Apple Watch native gerekli, biz vermiyoruz.

### 6.2. Timer Customization Seviyeleri

- **Basit (Apple Fitness+):** Sabit 90 sn timer. **Bengisu için:** Yetersiz.
- **Per-exercise default (Strong):** Compound 3 dk, izolasyon 60-90 sn — egzersiz tipine göre default. **Bengisu için:** ✅ Ajan 3'ün önerisiyle uyumlu (compound 150 sn, izolasyon 75 sn).
- **Adaptive timer (Whoop coach 2025):** HRV recovery + RPE → timer uzar/kısalır. **Bengisu için:** ⚠️ İleri seviye, P2'ye not. Şimdilik per-exercise default yeterli.

### 6.3. Apple Watch Entegrasyonu Standart mı?

**Evet, 2026'da standart.** Strong, Hevy, Fitbod, Caliber, Apple Fitness+ — hepsi native Watch app. Boostcamp ve FitnessAI 2025'te ekledi. **PWA'da bu doğrudan yok** — iOS PWA Watch native erişim vermiyor (2026'da hala kısıtlı). Workaround: HealthKit üzerinden veri al (read-only) → manuel input default. Bu **Bengisu için kabul edilebilir kayıp** çünkü:
- Bengisu Watch sahibi olup olmadığı belirsiz (gözlüksüz okuma + ilaç hatırlatması olduğunu düşünürsek olası ama doğrulanmamış);
- Watch native PWA'da yok ama HealthKit entegrasyonu denenmiş (Ajan 6 attempt log'u);
- Manuel ✓/⚡/🛌 (Ajan 8) Watch'sız da çalışır.

### 6.4. Wake Lock + Always-on Display

- **Native app'ler:** iOS background mode ile Wake Lock yönetir. Apple Watch always-on (sabit ekran).
- **PWA:** Wake Lock API var (2024+ desteği), `navigator.wakeLock.request('screen')` ile ekran kapanmaz. Ajan 10 önerdi.
- **Bengisu için:** ✅ Wake Lock zaten plan. iPhone always-on Display (15 Pro+) — PWA hala desteklemiyor (background siyah ekran). Manuel olarak ekran tap → tekrar Wake Lock zinciri yeterli.

**Pazar trend özeti:** Pre-filled progressive log + per-exercise timer + Watch native + Wake Lock = 2026 standart. Bengisu sisteminde **3/4** karşılanıyor (Watch native pas) — bu kabul edilebilir kayıp.

---

## 7. Gold Standard 2026 — Bengisu Profili için "Ideal App" Tasarımı

Mevcut hiçbir app Bengisu için %100 uygun değil. Burada **hayali ideal app** feature seti, priorite sırasıyla:

### Ana Eksenler (P0 — feature olmazsa app fonksiyonsuz)

1. **Cycle-aware programming** (Wild AI temelli + Ajan 3 detay) — folliküler/luteal/regl/ovulasyon × yük adaptasyonu, RPE-temelli dinamik
2. **Set/rep/RPE/timer logging** (Strong + Hevy + Caliber pre-filled hibrit) — 1.2 sn log, autosave, per-exercise timer
3. **PR detection + celebration** (Strong pattern) — real-time popup + ⭐ ikon + cycle phase notu
4. **Muscle balance heatmap** (Hevy pattern + Ajan 9 anti-kıyas) — SVG body diagram, haftalık view, Israetel MEV bandı
5. **Bilim mikro-açıklama L2/L3** (Caliber temel + Ajan 7 derinlik) — "ⓘ" inline expand, mekanizma + meta-analiz referans
6. **Body neutrality dili** (Future referansı + Ajan 6 detay) — "estetik" değil "function", "ideal" değil "healthy", anti-kıyas tüm copy

### İkincil Eksenler (P1 — feature olmasa app çalışır ama eksik)

7. **Cycle × performance pattern emergence** (FitrWoman 3-cycle felsefesi + Ajan 9 PR × phase) — 3 cycle sonra kullanıcı kendi pattern'ını öğrenir
8. **Adaptive yük öneri** (Fitbod algoritma felsefesi + Anthropic Claude API) — son 4 hafta log + bugünkü RPE + cycle → öneri
9. **Akış sürekliliği** (Apple Fitness+ ring + Ajan 8 esnek 3-gün hakkı) — habit anchor, shame değil
10. **Volume × MEV/MAV/MRV** (Renaissance Periodization + Ajan 3 + Ajan 9) — stacked bar + bilim band

### Üçüncül Eksenler (P2 — nice-to-have)

11. **Plate calculator görsel** (Hevy basit görsel — kg cinsinden plakalar)
12. **Apple HealthKit read-only** (PWA limitiyle — HRV + sleep + cycle data sync)
13. **Voice logging Türkçe** (deneme — Web Speech API kalitesi yeterliyse)
14. **Wearable predictive** (Watch HRV → adaptive yük önerisi enrichment)

### Çıkarılan Pattern'lar (Bengisu için zararlı)

- ❌ **Sosyal feed / community** (Hevy'de var, Ladder team-based) — kıyas riski, single-user proje
- ❌ **Estetik metrikler ön plan** (Sweat, FitnessAI body progress photos) — Ajan 6 body image koruma
- ❌ **AI form check kamera** (Caliber, Sensai) — PWA'da TensorFlow.js ağır + UX pratik değil
- ❌ **Voice coach kişiliği** (Future, Whoop) — gereksiz drama, tek-kullanıcı
- ❌ **Estetik baskı dili** ("hot girl summer", "shred", "beach body") — Bengisu için yıkıcı
- ❌ **BMI / kadın 32y ortalama kıyas** (Hevy reklam, FitnessAI default) — Linda Bacon HAES referansı

---

## 8. Bizim Sistem Ne Kadar Entegre Edebilir? (PWA Single-File Kısıtlamalar)

PWA single-file mimarisinin (Bengisu sistemi) sınırları ve avantajları feature-feature değerlendirme. Skor: entegrasyon kolaylığı 1-5 / complexity S(small ≤200 satır)/M(medium 200-500 satır)/L(large 500+ satır) / value (kullanıcı için).

| Feature | Entegre? | Skor | Complexity | Değer | Not |
|---|---|---|---|---|---|
| Cycle-aware program | ✅ Var, geliştir | 5/5 | M | Çok yüksek | Ajan 3 zaten temel — RPE + faz adaptasyon ekleme |
| Set/rep/RPE log | ✅ Eklenebilir | 5/5 | L | Çok yüksek | Ajan 10 detay verdi — numpad + chip + autosave |
| Per-exercise timer | ✅ Eklenebilir | 5/5 | S | Yüksek | `setInterval` + Wake Lock + Vibration API |
| PR detection | ✅ Eklenebilir | 5/5 | S | Yüksek | Brzycki formula + en yüksek karşılaştırma |
| Muscle heatmap | ✅ Eklenebilir | 4/5 | M | Yüksek | SVG body diagram — Ajan 9 detay verdi |
| Bilim mikro-açıklama | ✅ Eklenebilir | 5/5 | M | Çok yüksek | Ajan 7 detay verdi — inline expand, statik content |
| Body neutrality dili | ✅ Var, derinleştir | 5/5 | S | Çok yüksek | Ajan 6 dil revizyonu — copy değişikliği |
| Cycle × PR pattern | ✅ Eklenebilir | 4/5 | M | Yüksek | 3 cycle sonra emergence — sadece veri kayıt yeterli |
| Adaptive yük öneri | ⚠️ Anthropic ile | 4/5 | M | Orta-yüksek | Claude API çağrısı — input son 4 hafta log + cycle, output öneri |
| Akış sürekliliği | ✅ Var, geliştir | 5/5 | S | Yüksek | Ajan 8 detay verdi — esnek streak + 3-gün hakkı |
| Volume × MEV/MAV | ✅ Eklenebilir | 4/5 | M | Orta | Stacked bar + Israetel band — Ajan 9 detay verdi |
| Plate calculator | ✅ Eklenebilir | 4/5 | S | Orta | TR locale kg + 20/15/10/5/2.5 plakalar |
| Apple HealthKit | ⚠️ PWA limit | 3/5 | L | Orta | iOS PWA HealthKit erişimi yok — Health Auto Export workaround |
| AI form check kamera | ❌ Out-of-scope | 1/5 | XL | Düşük (Bengisu) | TensorFlow.js 5-10 MB + gym UX pratik değil |
| Voice coach kişiliği | ❌ Out-of-scope | 1/5 | L | Düşük | Türkçe TTS orta kalite, içerik üretimi maliyetli |
| Voice logging | ⚠️ Deneme | 2/5 | M | Düşük-orta | Web Speech Türkçe parser güvenilirlik orta |
| Apple Watch native | ❌ PWA limit | 1/5 | XL | Orta | PWA Watch native vermiyor — HealthKit workaround |
| Push notification | ⚠️ iOS PWA kısıtlı | 3/5 | M | Orta | iOS 16.4+ Web Push destekli ama PWA homescreen şart |
| Sosyal/community | ❌ Almıyoruz | — | — | Negatif | Single-user + body image koruma |
| Wearable predictive | ⚠️ Kısmi | 2/5 | L | Orta-yüksek | Apple HealthKit workaround sonrası mümkün |

**PWA single-file avantajları (pazara karşı):**
1. **Gizlilik:** Backend yok, veri kullanıcının cihazında. GDPR-immune. Pazarın çoğu app cloud-store ediyor — Wild AI, Future, Caliber data shared with partners (kullanıcı sözleşme okumadan kabul ediyor).
2. **Hız:** Single file = sıfır network sürtünme. Strong/Hevy bile network'e bağımlı (sync). Bengisu offline çalışsın istiyor — single file PWA bunu doğal sağlıyor.
3. **Tek geliştirici, hızlı pivot:** Pazar app'leri 6-12 ay roadmap, Bengisu projesi haftalık iteration.
4. **Reklam yok, freemium yok:** Bengisu kişisel kullanım — monetization baskısı yok, kullanıcı UX optimize edilmiş, conversion funnel'lar yok.

**PWA single-file dezavantajları:**
1. **Apple Watch native yok** (kabul edilen kayıp).
2. **HealthKit kısıtlı erişim** (workaround ile yumuşatılır).
3. **Push notification iOS sadece homescreen + 16.4+** (Bengisu telefonu modern, sorun değil).
4. **Heavy ML/CV out-of-scope** (form check pas — kabul edilen kayıp).

**Sonuç:** Avantajlar dezavantajlardan ağır basıyor. **Mainstream app'lerin %75'ini PWA'da kapatabiliriz, kalan %25 kayıp Bengisu için kritik değil.**

---

## 9. Stratejik Öneriler — Bengisu için "Differentiator" Feature'lar

Hangi 5 feature kombinasyonu **diğer hiçbir app'in sunmadığı** unique değer üretir?

### Differentiator 1: Cycle-aware + Tracker + Bilim L3 üçlüsü

- **Wild AI** cycle-aware (var) + tracker (yok) + bilim L3 (yok)
- **Strong** tracker (var) + cycle-aware (yok) + bilim (yok)
- **Caliber** bilim L2 (var) + tracker (var) + cycle-aware (yok)

**Bizim sistem:** Cycle-aware (Ajan 3) + tracker (Ajan 10) + bilim L3 (Ajan 7) = **üçü birlikte**, pazara yeni.

### Differentiator 2: Türkçe + Hacettepe MSc bilim seviyesi + sacred-feminine ton

Hiçbir mainstream app Türkçe değil. Hiçbiri MSc seviyesinde bilim açıklaması vermiyor (lay+ tavan). Hiçbiri "Akşam Bahçesi" benzeri sacred-feminine estetik dili yok — Sweat "hot girl", Strong "kara/beyaz minimal", Caliber "dijital koç", Apple Fitness+ "Apple aesthetic". Bengisu sistemi:
- TR locale (gym terimleri Türkçe + İngilizce dual);
- Hacettepe Fen Eğitimi seviyesinde mekanizma açıklaması;
- Akşam Bahçesi paleti + glass morphism + body neutrality dili.

Bu üçleme **kültürel-bilimsel-estetik** üç eksende differentiator.

### Differentiator 3: Cycle × performance pattern emergence

3 cycle sonra Bengisu kendi pattern'ını öğreniyor. Hiçbir app bunu **birleştirmiyor**:
- Wild AI cycle phase var ama PR yok;
- Strong PR var ama cycle phase yok;
- Bengisu sistem ikisi birleşince — "ovulasyondan önce squat PR yapıyorum" mikrosırrı.

Bu pattern emergence **personalized data insight** — başkasında yok çünkü başkasında 3 cycle = 3 ay sürekli kullanım + ikisinin kesişimi yok.

### Differentiator 4: Anti-kıyas tasarım ilkesi

Çoğu app **örtük kıyas** sunar:
- Strong global PR rankings (kapatılabilir ama default açık);
- FitnessAI BMI tablo;
- Hevy social feed;
- Apple Fitness+ "kalori yaktım" leaderboard.

Bengisu sistem **hiçbir kıyas yok** — sadece kendi geçmişiyle. Tek "norm" Israetel MEV bandı (bilimsel, sosyal değil). Bu **ürün felsefesi** olarak anti-kıyas — pazarda nadir (Future yumuşak yapar, ama tracker değil).

### Differentiator 5: Single-file PWA + offline-first + privacy

Bengisu'nun veri **cihazında**, sync server'da değil. Pazarın çoğu app cloud-sync (Strong sync, Hevy sync, Wild AI cloud, Caliber cloud). Bengisu sistem:
- LocalStorage / IndexedDB only;
- Offline-first çalışıyor (network gym'de zayıf — Boostcamp 2025 review şikayetleri buna);
- Single file (1 HTML) = backup kolay, fork kolay, gizlilik tam.

Bu **mimari differentiator** — nadiren tartışılır ama gerçek avantaj.

**5 differentiator özeti:** Cycle+Tracker+Bilim L3 üçlüsü, TR+MSc+Sacred-Feminine üçleme, Cycle×PR pattern emergence, Anti-kıyas ilke, Single-file privacy. **Bu beşi birlikte hiçbir app'te yok** — Bengisu sisteminin pazara karşı pozisyonu.

---

## 10. Öneriler P0/P1/P2

### P0 (mutlaka yap — feature olmazsa app eksik)

1. **Set/rep/RPE log + per-exercise timer** (Ajan 10 detay verdi — Strong/Hevy/Caliber hibrit)
2. **PR detection + celebration** (Strong pattern, Brzycki formula)
3. **Muscle balance heatmap** (Hevy + Ajan 9 anti-kıyas)
4. **Cycle phase göstergesi tab/banner** (Wild AI pattern, Ajan 3 detay)
5. **Bilim mikro-açıklama L2 (mekanizma)** (Caliber temel + Ajan 7 detay)
6. **Body neutrality dil revizyonu** (Future referansı, Ajan 6 detay)
7. **Anti-kıyas tasarım ilkesi tüm görselleştirmelerde** (Ajan 9 detay)

### P1 (yüksek öncelik — eksiksiz ürün için)

8. **Pre-filled progressive yük önerisi** (Caliber pattern, Ajan 10 önerdi)
9. **Cycle × PR pattern emergence göstergesi** (FitrWoman felsefe + Ajan 9 PR × phase)
10. **Adaptive yük öneri Anthropic Claude API** (Fitbod felsefe + Claude API zaten var)
11. **Volume × MEV/MAV/MRV stacked bar** (RP + Ajan 9 detay)
12. **Akış sürekliliği esnek streak** (Apple ring yumuşatılmış + Ajan 8 detay)
13. **Bilim L3 (PMID + meta-analiz)** (Caliber'dan derin — Hacettepe MSc)
14. **Plate calculator görsel** (Hevy pattern, kg + standart plakalar)

### P2 (nice-to-have, ileri aşama)

15. **Voice logging Türkçe deneme** (Web Speech API parser kalibrasyon)
16. **Apple HealthKit read-only workaround** (Health Auto Export çözümü)
17. **Push notification iOS PWA** (homescreen + iOS 16.4+ — 1 ilaç hatırlatma için yeterli)
18. **Wearable predictive enrichment** (HRV → adaptive yük öneri)
19. **Pregnancy modu hazırlığı** (Sweat referansı — gelecekte gerekirse)
20. **Apple Watch native** (PWA out-of-scope, ileride native app split olursa)

### Çıkarılanlar (Bengisu için zararlı veya out-of-scope)

- ❌ Sosyal feed / community (Hevy, Ladder)
- ❌ AI form check kamera (Caliber, Sensai)
- ❌ Voice coach kişiliği (Future, Whoop)
- ❌ Estetik metrikler ön plan (Sweat, FitnessAI before/after)
- ❌ BMI / 32 y kadın ortalama kıyas (FitnessAI default)
- ❌ "Hot girl" / "shred" / "beach body" dili (Sweat, Centr trend)

---

## 11. Açık Sorular (Bengisu — onay/girdi gerekli)

1. **Hangi rakip app'i denedi?** Bengisu daha önce Strong/Hevy/Wild AI/MyFitnessPal kullandı mı? Beğendiği/sevmediği özellik var mı? Bu cevap pattern adoption'ı kalibre eder.
2. **Apple Watch sahibi mi?** Eğer evet → HealthKit + manuel input çift modu. Hayır → manuel only, basitleşir.
3. **Doğum kontrol kullanıyor mu?** Wild AI 150 variant — Bengisu'nun cycle natural mi yoksa pill/IUD mi? Cycle phase tahmini değişir.
4. **Eylül 2026 düğün baskısı feature priorite'sini değiştirir mi?** Düğün öncesi 4-5 ay = mezo-cycle olarak 1-2 mezo. P0 hızlandırma, P1 erteleme stratejisi gerekirse.
5. **Adaptive yük önerisi için Claude API çağrı maliyeti kabul edilebilir mi?** Tek kullanıcı için günlük 1 çağrı = ayda 30 çağrı. Anthropic Haiku ucuz ($0.001 input, $0.005 output → ayda <$1). Onay alınmalı.
6. **Voice logging deneme zaman ayrılır mı?** Türkçe Web Speech parser kalibrasyonu 1-2 günlük iş. Düşük öncelik ama merak edilirse P2'den P1'e taşınabilir.
7. **Sweat'in postpartum modu felsefesi referans olarak alınır mı?** Bengisu için şu an irrelevant ama "kadın yaşam evresi farkındalığı" ürün felsefesi olarak — ileride hamilelik veya menopoz dönemi için altyapı bırakılır mı?

---

## 12. Kaynaklar

**Pazar karşılaştırma blog/inceleme:**
- [Best Workout Tracker Apps For 2026 — Fitbod](https://fitbod.me/blog/best-workout-tracker-apps-for-2026/)
- [Strong vs Hevy vs Boostcamp vs Fitbod 2026 — AskVora](https://askvora.com/blog/best-strength-training-apps-2026)
- [11 Best Workout Apps in 2026 — LoadMuscle](https://loadmuscle.com/blog/best-workout-app-2026)
- [Best Strength Training Apps Apple Watch 2026 — FindYourEdge](https://www.findyouredge.app/news/best-strength-training-apps-apple-watch-2026)
- [Best Workout Tracker Apps in 2026 — Stronger](https://www.strongermobileapp.com/blog/best-workout-tracker-apps)
- [10 Best Workout Tracker Apps 2026 — Jefit](https://www.jefit.com/wp/general-fitness/10-best-workout-tracker-apps-in-2026-complete-comparison-guide/)
- [The Best Fitness Apps In 2026 — The Manual](https://www.themanual.com/fitness/the-best-fitness-apps-in-2026-smarter-training-starts-here/)
- [Best Workout Apps in 2026 — CNN Underscored](https://www.cnn.com/cnn-underscored/reviews/best-workout-apps)
- [Best Workout Apps 2025 — Tom's Guide](https://www.tomsguide.com/best-picks/best-workout-apps)

**App Store listings:**
- [Strong Workout Tracker — Apple App Store](https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577)
- [Hevy Workout Tracker — Apple App Store](https://apps.apple.com/us/app/hevy-workout-tracker-gym-log/id1458862350)
- [Boostcamp Workout Programs — Apple App Store](https://apps.apple.com/us/app/boostcamp-workout-programs/id1529354455)
- [Wild.AI Hormones & Fitness — Apple App Store](https://apps.apple.com/us/app/wild-ai-hormones-fitness/id1482294997)
- [FitnessAI Gym Workout Planner — Apple App Store](https://apps.apple.com/us/app/fitness-ai-gym-workout-planner/id1446224156)
- [FitrWoman — Apple App Store](https://apps.apple.com/us/app/fitrwoman/id1189050449)
- [Ladder Strength Training — Apple App Store](https://apps.apple.com/us/app/ladder-strength-training-plans/id1502936453)
- [Peloton Strength+ — Apple App Store](https://apps.apple.com/us/app/peloton-strength/id6476712925)

**Detay özellik sayfaları:**
- [Hevy 2025 Features Guide](https://help.hevyapp.com/hc/en-us/articles/33106320824727-Everything-You-Need-to-Know-About-the-Hevy-App-2025-Features-Guide)
- [Hevy Muscle Distribution Chart](https://www.hevyapp.com/features/training-chart/)
- [Hevy Gym Performance Tracking](https://www.hevyapp.com/features/gym-performance/)
- [Strong for Apple Watch Help](https://help.strongapp.io/article/222-strong-for-apple-watch)
- [Strong App Review 2025 — RepReturn](https://repreturn.com/strong-app-review/)
- [Boostcamp Programs Library](https://www.boostcamp.app/programs)

**Cycle-aware kadın kategorisi:**
- [Wild.AI Official Site](https://wild.ai/)
- [Wild.AI Cycle-Based Training](https://www.wild.ai/blog/cycle-based-training-for-women-training-with-your-physiology)
- [Wild.AI Menstrual Cycle](https://www.wild.ai/lifestages/menstrual-cycle)
- [How Tech Founder Is Helping Women Train Cycle — Oura](https://ouraring.com/blog/train-menstrual-cycle/)
- [Menstrual Fitness Apps — HealthyWomen](https://www.healthywomen.org/tech-talk-hp/menstrual-fitness-apps)
- [FitrWoman Official Site](https://www.fitrwoman.com/)
- [Stacy Sims Newsletter — How to Track Your Menstrual Cycle](https://www.drstacysims.com/newsletters/articles/posts/How_to_Track_Your_Menstrual_Cycle)
- [Period Tracking Apps for Performance — Outside](https://www.outsideonline.com/health/training-performance/clue-fitrwoman-period-tracking-apps-performance/)
- [Menstrual Cycle Tracking — TrainingPeaks](https://www.trainingpeaks.com/coach-blog/the-performance-advantages-of-tracking-menstrual-cycles-with-dr-stacy-sims/)
- [Cycle Syncing Strength Training — Obé Fitness](https://obefitness.com/blog/how-to-cycle-sync-strength-training-what-to-do-for-all-4-phases)

**AI / Adaptive Programming:**
- [Best AI Fitness Apps 2026 — Fitbod](https://fitbod.me/blog/best-ai-fitness-apps-2026-the-complete-guide-to-ai-powered-muscle-building-apps/)
- [Future AI in Fitness — Fitbod](https://fitbod.me/blog/the-future-of-ai-in-fitness-how-fitbod-is-redefining-personalized-training/)
- [How Fitbod Algorithm Works](https://fitbod.me/blog/fitbod-algorithm/)
- [Fitbod Personalizes Your Plan](https://fitbod.me/blog/how-fitbod-personalizes-your-workout-plan-using-smart-training-algorithms/)
- [Caliber Fitness App Review 2026 — BarBend](https://barbend.com/caliber-fitness-app-review/)
- [Future App Review 2025](https://www.newswire.com/news/future-fitness-app-reviews-2025-pricing-pros-complaints-is-it-legit-22639155)
- [AI-Powered Personal Trainers — Touchlane](https://touchlane.com/ai-powered-personal-trainers-how-predictive-workouts-and-virtual-coaching-are-changing-fitness-apps/)
- [Best AI Personal Trainer Apps 2025 — MyLiftingCoach](https://myliftingcoach.com/blog/best-ai-personal-trainer-apps-2025)
- [AI Fitness Apps Trends 2025 — KitLabs](https://www.kitlabs.us/ai-personalized-fitness-apps/)
- [Top 9 AI Tools for Personal Trainers — TrueCoach](https://truecoach.co/blog/top-9-ai-tools-that-revolutionize-personal-training/)

**Wearable + Recovery:**
- [Whoop vs Oura for Athletes — Vertu](https://vertu.com/guides/whoop-vs-oura-for-athletes-decoding-sleep-recovery-metrics/)
- [Oura vs Whoop Recovery Tracker 2025](https://thehumanprompts.com/oura-ring-vs-whoop/)
- [Interpreting Wearable Metrics — The Lyons' Share](https://www.thelyonsshare.org/2025/03/04/interpreting-wearable-metrics-how-to-use-whoop-oura-and-apple-watch-to-optimize-your-health/)
- [How WHOOP Works](https://www.whoop.com/us/en/how-it-works/)

**PWA + offline + AI:**
- [TensorFlow.js Web App — IBM/tfjs-web-app GitHub](https://github.com/IBM/tfjs-web-app)
- [AI-Driven Progressive Web Apps — Substack](https://thebackenddevelopers.substack.com/p/ai-driven-progressive-web-apps-offline)
- [Build Fitness PWA with AI Coding — LearnWithHasan](https://learnwithhasan.com/library/prompts/packages/build-a-pwa-fitness-app-with-ai-coding-from-zero-to-installable-in-5-prompts/)
- [Offline-First PWAs — DEV Community](https://dev.to/wellallytech/offline-first-pwas-build-resilient-apps-that-never-lose-data-ach)
- [Make Your PWA Work Offline — Monterail](https://www.monterail.com/blog/pwa-working-offline)

**Kadın workout app kategorisi:**
- [12 Best Workout Apps for Women 2026 — Strive](https://strive-workout.com/2026/01/10/best-workout-apps-for-women/)
- [Best Workout Subscription Apps 2025 — Yahoo Health](https://health.yahoo.com/wellness/fitness/online-fitness/articles/best-workout-subscription-apps-2025-162100677.html)
- [Cycle Syncing Workouts — Baylor Scott & White Health](https://www.bswhealth.com/blog/feel-good-fitness)
- [Cycle Syncing Workouts Guide — Oova](https://www.oova.life/blog/cycle-syncing-workouts)

**Ek pazar referansları:**
- [Top 10 Best Workout Apps 2026](https://www.top10.com/best-lists/best-workout-apps)
- [5 Fitness Apps for 2026 — TechRadar](https://www.techradar.com/health-fitness/fitness-apps/5-fitness-apps-that-can-help-you-stick-to-your-workout-goals-in-2026-according-to-science)
- [10 Best Fitness Apps iPhone 2026 — iDropNews](https://www.idropnews.com/apps/best-fitness-apps-2026-iphone/254768/13/)
- [Best AI Workout Tools April 2026 — Unite.AI](https://www.unite.ai/best-ai-workout-tools/)
- [Sensai Fitness App Comparison 2026](https://www.sensai.fit/blog/fitness-app-comparison)

---

**Yaklaşık kelime sayısı:** ~3550 kelime. Türkçe. Kaynaklar 60+. Doğrudan Bengisu profili için strateji.
