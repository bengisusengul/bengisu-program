# Ajan 9 — Veri Görselleştirme · Sport Analytics · Dashboard Tasarımı

**Hasta profili:** Bengisu, 32 y, K · Total tiroidektomi (≥1 yıl) · Levotiron + Calciday · 5/7 yürüyüş 7-8 km · 4-5/7 esnek güç · Hedef 76.9 → 58 kg / Eylül 2026 · Hacettepe Fen Eğitimi MSc · Kız kardeşinin düğünü yaklaşıyor · Renpho akıllı tartı kullanıyor (ölçü mezurası yok)

**Hazırlayan:** Ajan 9 — Veri Görselleştirme & Sport Analytics & Dashboard Tasarımı (Claude Opus 4.7, 1M context)

**Tarih:** 5 Mayıs 2026

**Kanıt tabanı:** Edward Tufte (*The Visual Display of Quantitative Information* 1983, *Beautiful Evidence* 2006 — data-ink ratio, sparkline, small multiples), Stephen Few (*Information Dashboard Design* 2013, *Now You See It* 2009 — pre-attentive attributes, dashboard hijyeni), Cole Nussbaumer Knaflic (*Storytelling with Data* 2015 — "what's the one thing"), Ben Shneiderman (Information Visualization mantra 1996), Helms (RIR/RPE skala, MASS Research Review), Israetel (MEV/MAV/MRV — RP), Brzycki/Epley (1RM tahmin formülleri), Sims (cycle × performance, *ROAR* 2016), Schoenfeld (volume meta-analizleri 2017-2023), Apple HealthKit veri yapı dokümantasyonu, Strong/Hevy/Caliber UX referans

---

## Executive Summary

1. **Bengisu için "matters" metrikleri estetik kg ekseninden işlevsel-bütüncül eksene kaymalı.** Mevcut sistem kg/BF%/macro ring odaklı — Ajan 6 işaret ettiği body appreciation eksikliği görselleştirme katmanında kapatılmalı. Önerilen birincil metrik beşli: (i) **kas grubu balance** (haftalık her grup volume %), (ii) **kuvvet trendi** (top set 1RM tahmini, hareket başına), (iii) **vücut kompozisyonu smoothed** (kg/yağ/kas, 7-gün hareketli ortalama + cycle-aware notu), (iv) **akış sürekliliği** (esnek streak, Ajan 8), (v) **cycle × performance pattern** (3-cycle ortalaması). Kg "tek tiran" değil, beşinden biri.

2. **"Her ana kas grubunu çalıştırdım" görselleştirmesi için ön-arka kas haritası heatmap ana çözüm, radar chart ikincil görünüm.** Kas haritası (Strong/Hevy'de kanıtlı pattern, Bengisu'nun MSc kişiliğine bilim diliyle uyar) **bir bakışta dengeyi** gösterir; radar chart MEV/MAV bandı ile tıbbi karşılaştırma katmanını ekler. Stacked bar (gün × grup) **alt kart** olarak — "hangi gün hangi grubu çalıştım" detayı için tap-to-expand. Üçü birden değil; **kas haritası primary, radar opsiyonel detay, stacked bar tarihsel**.

3. **Anti-kıyaslama tasarım ilkesi tüm görselleştirmelerde değişmez kural.** Hiçbir grafik "diğer kullanıcılar", "32 y kadın ortalaması", "BMI normal aralık X-Y kg" tarzı normatif kıyas içermez. Tek istisna **Israetel MEV/MAV/MRV bandı** (radar chart) — bu bilimsel hedef bandı, sosyal kıyas değil. Bengisu sadece **kendi geçmişiyle** (1 hafta önce, 1 ay önce, 1 cycle önce) kıyaslanır. Hedef yumuşatma: 5 kg/ay matematik bandı **gradient** olarak gösterilir (gerçekçi zone yeşil, ideal zone mavi, ulaşılmaz zone soluk gri — yargısız).

---

## 1. Bengisu için "Matters" Metrikleri Tespiti

Tufte'nin temel sorusu: "What is the one thing?" Bengisu'nun durumunda **tek metrik yok** — beş eksen var, her biri farklı zaman ölçeğinde anlamlı. Aşağıdaki tablo her metriği `neden matters / hangi grafik / hangi süre / kıyas referansı` matrisinde değerlendiriyor.

### 1.1. Vücut kompozisyonu (kg, %yağ, kas)

**Neden matters:** Bengisu'nun açık hedefi 76.9 → 58 kg. Renpho günlük tartım veriyor. Ancak Ajan 6 (3.4) işaret etti: kg ölçümü cycle-aware değilse geç luteal +1-2 kg sıvı tutulması "yağ" gibi okunur — anksiyete tetikler.

**Hangi grafik:** **Smoothed line** (7-gün hareketli ortalama, primer çizgi) + **ham günlük noktalar arka planda soluk** (referans). Tufte data-ink: ham veriyi gizleme ama vurgulama. Cycle phase **arka plan band rengi** olarak (folliküler sage, ovulasyon mustard, luteal coral, regl mauve — Akşam Bahçesi paletten). Geç luteal/regl döneminde "+su" mini etiketi otomatik.

**Hangi süre:** **30 gün primary view** + 90 gün swipe edilebilir. 12 hafta + Eylül hedefi tek ekranda küçük strip olarak. Günlük dalgalanma (>1 kg ardarda) "**bu normal**" mini-tooltip ile yumuşatılır.

**Kıyas referansı:** **Sadece kendi geçmişi.** "1 ay önce 78.2, bugün 76.9, fark -1.3." 32 y kadın ortalaması yok. BMI yok (Linda Bacon — Ajan 6 — *Body Respect* postulatı). Tek "norm" Bengisu'nun **kendi 4-haftalık ortalama hızı** — bu da "yetersiz" değil "**senin biyolojin**" diliyle.

### 1.2. Kuvvet artışı (top set ağırlığı, hareket başına)

**Neden matters:** Ajan 3'te detaylı işaret edildi: hipertrofi + kemik koruma için **progressive overload** ana sürücü. Ancak Bengisu mevcut sistemde **kuvvet trendi göremiyor** — sadece son seans yükü kayıt. "İlerlemiyor muyum?" hissi veri yokluğundan doğuyor. Tiroidektomili biri için kuvvet artışı kg değişiminden **daha güvenilir adaptasyon sinyali** (kg cycle-bağımlı, kuvvet 4-haftalık trend stabil).

**Hangi grafik:** **Multi-line sparkline** (Tufte 2006 — *Beautiful Evidence* sparkline tasarım). Her ana hareket için bir sparkline (squat, hip thrust, RDL, lat pulldown, incline DB press, shoulder press, row). Y ekseni: top set 1RM tahmini (Brzycki: `1RM = weight × (36 / (37 - reps))`). X ekseni: tarih (8-12 hafta).

**Hangi süre:** **8-12 hafta primary** (Mezo 1-2 görünür). 6 ay opsiyonel zoom. Yeni başlayan için ilk 4 hafta hızlı ilerleme = "novice gains" (Schoenfeld 2017) — bu da ayrı bir iç görü mesajı: "Yeni başlayan zarın açıldı, önümüzdeki 6 hafta önceki 12'den hızlı gelecek."

**Kıyas referansı:** **Kendi PR'ı.** Her sparkline'da en yüksek nokta küçük ⭐ ile. Yeni PR günü → **PR rozeti** (Bölüm 3.2). Kıyas yok ("kadın 32 y squat ortalaması X kg" tarzı normatif **kesinlikle yok** — Strong app bunu gösterir, Bengisu için riskli).

### 1.3. Volume (set × rep × ağırlık) — haftalık total

**Neden matters:** Schoenfeld 2017 (PMID 27400175) volume hipertrofinin birincil sürücüsü. Ancak Ajan 3 (1.1) işaret etti: Bengisu deficit'te + tiroidektomili → MAV alt yarısı doğru, MRV'ye yakın değil. Volume görünür değilse Bengisu **istemeden** MRV'yi geçer (özellikle düğün stresi büyüdükçe).

**Hangi grafik:** **Stacked bar chart** — hafta × kas grubu. X ekseni 12 hafta. Y ekseni toplam set sayısı (set = en doğru volume metriği, Helms 2018 — tonnage değil, **hard sets**). Bengisu'nun yanında **ince bant** halinde MEV (alt çizgi) ve MAV (üst çizgi) referans şeritleri. MRV'yi geçen hafta varsa **soluk kırmızı uyarı band** (sadece soluk — alarm değil bilgi).

**Hangi süre:** **12 hafta** (mezo-cycle uyumlu). Deload haftası (her 4. hafta) görünür düşüş → "bu kasıtlı, recovery". Bengisu MSc kişiliği bunu okur ve **bilimsel pekiştirme** alır.

**Kıyas referansı:** **Israetel kadın MEV/MAV/MRV bandı** (Ajan 3'ün referansı). Bu yegâne normatif kıyas — çünkü **sosyal değil bilimsel** (egzersiz fizyolojisi adaptasyon eşikleri). Tooltip'te kaynak: "Israetel 2018 — kadın hipertrofi volume bandı".

### 1.4. PR (Personal Record) — her hareket için 1RM tahmini

**Neden matters:** Ajan 8 (Behavior) — pozitif pekiştirme için "küçük zaferler" gerekli. PR yapma anı dopamin yükü — uygulama bunu **görselleştirmezse** Bengisu yaşar ama hatırlamaz. Strong/Hevy'nin PR rozeti pattern'ı kanıtlanmış habit anchor.

**Hangi grafik:** **PR timeline** — yatay zaman çizgisi, her PR ⭐ ikon ile (Squat / Hip Thrust / RDL / Bench / Pull / Row 6 ikon). Tap-to-expand: o PR'ın detayı (ağırlık × rep, RPE, cycle phase). **Cycle phase pattern göster** — folliküler ⭐ yoğunluğu Bengisu'ya kendi pattern'ını öğretir ("ovulasyondan önce PR yapıyorum").

**Hangi süre:** **6 ay timeline** + son 30 gün zoom default.

**Kıyas referansı:** **Kendi PR'ı** — "Bu hareket için ilk kayıt: 40 kg × 8. Şimdi: 47.5 kg × 8. Brzycki tahmin: 47 → 53 kg 1RM, +13%." Kantitatif ama yargısız — sadece **fact**.

### 1.5. Kas grubu balance — haftalık her grup volume %

**Neden matters:** **Bengisu'nun en kritik isteği** ("hafta sonunda her ana kas grubunu çalıştırdım diyebilmek"). Bölüm 2'de detaylı.

**Hangi grafik:** Kas haritası heatmap (primary) + radar chart (secondary). Bölüm 2.

**Hangi süre:** **Haftalık** (Pazar gece / Pazartesi sabah resetleniyor). Önceki 4 hafta tab swipe.

**Kıyas referansı:** İçsel — geçen hafta ile kıyas. Israetel MEV bandı **alt sınır** olarak (her grup MEV altında mı? evet → uyarı, hayır → ✓).

### 1.6. Süreklilik / Akış (Ajan 8'den)

**Neden matters:** Ajan 8 detaylı: streak shame'e dönüşmemeli, "akış" + esnek 3 gün hakkı. Görselleştirmesi pozitif pekiştirme.

**Hangi grafik:** **28-gün heatmap** (mevcut sistemde var, Akşam Bahçesi sage tonları). **GitHub contribution-style** — günlük kare, gradient yoğunluk = günün dolu/yarım/boş. **Renk değil yoğunluk** — boş = saydam, hafif = sage soluk, dolu = sage deep, super = sage + altın halka. Rest günleri **eksik değil farklı renk** (mauve = "restorasyon").

**Hangi süre:** 28 gün primary, 90 gün opsiyonel.

**Kıyas referansı:** **Kendi pattern'ı.** "Senin haftalık yoğunluk ortalaman 4.2 gün. Bu hafta 4. Akış normal."

### 1.7. Apple Health (adım, aktif kalori, uyku, kalp atış)

**Neden matters:** Bengisu zaten Apple Health entegrasyonu denedi (PROGRESS.md). Adım/uyku trendi recovery sinyali. Uyku <6h → ertesi gün kuvvet düşer (Knowles 2018, PMID 30053867) — Bengisu görünmezse açıklayamaz.

**Hangi grafik:** **Small multiples** (Tufte ana pattern) — 4 grafik dikey stack: adım (bar, günlük), aktif kalori (line, smoothed), uyku saat (bar, hedef 7h çizgi), istirahat kalp atış (line). Hepsi 14 gün, aynı genişlik, aynı X ekseni → karşılaştırma kolay.

**Hangi süre:** 14 gün primary, 30 gün opsiyonel.

**Kıyas referansı:** **Kendi haftalık ortalaması** + Apple Health varsayılan hedef (10k adım, 7h uyku — kullanıcı düzenleyebilir).

### 1.8. Cycle × performance korelasyon

**Neden matters:** Ajan 2 + Ajan 6 işaret etti — cycle Bengisu'nun **biyolojik gerçeği**, görmezse "neden bu hafta yorgunum?" cevapsız kalır. MSc kişiliği bilimsel pattern'ı **görmek ister**.

**Hangi grafik:** Bölüm 6 detaylı.

**Hangi süre:** 3-6 cycle (yaklaşık 3-6 ay).

**Kıyas referansı:** **Kendi cycle pattern'ı.** "Senin ovulasyon haftalarında ortalama RPE 7.1, geç luteal 8.2 — 1.1 puan fark. Pattern stabil." Sosyal kıyas yok.

### 1.9. Mood × performance (Ajan 6'dan)

**Neden matters:** Ajan 6 (8.4) — depression/mood etkileşimi. Düşük mood + zorla antrenman = kompulsif risk. Görünür değilse Bengisu **istemeden** zorlar.

**Hangi grafik:** **Scatter plot** (mood X ekseni 1-5, RPE Y ekseni). Her nokta bir antrenman. Trend line opsiyonel. Cycle phase = renk. Bengisu kendi pattern'ını öğrenir: "mood 2'de RPE 8.5 yapmışım — bu sağlıksız pattern, gelecek sefer hafiflet."

**Hangi süre:** Son 30 antrenman.

**Kıyas referansı:** **Kendi pattern'ı.** Yeşil zone (mood 4-5 + RPE 7-8) = "sağlıklı çalışma penceresi". Kırmızı zone (mood 1-2 + RPE 8+) = "kompulsif risk pattern" — soluk işaret.

---

## 2. "Her Kasımı Çalıştırdım" Görselleştirmesi

Bengisu'nun **en açık beklentisi**. Üç tasarım seçeneği değerlendirilip, **kombinasyon** öneriyorum.

### 2.1. Seçenek A — Kas haritası heatmap (PRIMARY)

**Yapı:** SVG ön + arka vücut diyagramı (kadın silueti, soyut ama anatomik doğru — chest, shoulders, arms, abs ön / lats, traps, lower back, glutes, hamstrings, calves arka). Her kas grubu **path** olarak ayrı; haftalık volume oranı (set sayısı / o grup MAV) renk yoğunluğunu belirler.

**Renk skalası (Akşam Bahçesi paleti, 5 stop):**

| Volume / MAV | Renk | Anlam |
|---|---|---|
| <40% (MEV altı) | Mauve soluk #B47990 @ 30% opacity | Yetersiz — bu grup eksik |
| 40-65% | Sage soluk #5A7A4F @ 50% | MEV bandında, başlangıç |
| 65-100% | Sage deep #3E5A3A | MAV hedefi yakalandı ✓ |
| 100-130% | Mustard #E8B23F | Üst MAV — agresif ama OK |
| >130% (MRV yakını) | Coral #D9591E @ 70% | Aşırı volume — recovery riski |

**Bengisu'nun MSc kişiliğine uygun bilimsel renk tonu:** Coral kırmızısı **alarm değil bilgi** — tooltip "%135 MAV, recovery için izle". Strong/Hevy'nin "more is better" gradient'ından farklı; Israetel doctrine.

**Etkileşim:** Tap-to-expand → o kas grubu detay popup ("Glute: 18 set bu hafta. Hip thrust 5×8, RDL 4×10, single leg HT 3×10/taraf, kickback 3×15 = direct + carry-over"). Bengisu'nun bilimsel merakını besler.

**Heatmap güncelleme zamanı:** Real-time (her set logundan sonra). Pazartesi sabah otomatik reset → "Yeni hafta — sıfırdan başla" mesajı.

**Avantajlar:**
- **Bir bakışta denge** (Few — pre-attentive: renk + uzamsal konum aynı anda işlenir)
- Anatomik öğrenme (Bengisu MSc → vücudu öğrenmek değer)
- "Mauve bölge yok ✓" → **net başarı işareti**
- Strong, Hevy, Caliber'da kanıtlı UX pattern (Bengisu fitness app dünyasından tanıdık gelebilir, ama Akşam Bahçesi paletiyle **özelleştirilmiş**)

**Dezavantajlar:**
- SVG kompleks — ~80-100 path (ön+arka), ama tek seferlik kod
- Volume = sadece set sayısı (intensity yansımıyor) — basitleştirme. Tooltip'te detay.

### 2.2. Seçenek B — Radar chart (SECONDARY)

**Yapı:** 8-eksenli polygon — Göğüs · Sırt · Omuz · Biceps · Triceps · Quad · Hamstring · Glute · Core (9 eksen). Her eksen MEV (iç çember 50%) ile MAV (dış çember 100%) arasında **grow zone** olarak işaretli. Haftalık volume polygon olarak çizilir.

**Bengisu'nun haftası için polygon hedefe yakınsa polygon **yeşil sage** dolgu, MAV içinde. Eksik gruplar **iç çemberin altında** (mauve uzantı). Önceki hafta polygon **soluk kontur** olarak (kıyas — kendiyle).

**Avantajlar:**
- **MEV/MAV bandı görünür** (kas haritada bu yok)
- Bilimsel hedef bandı net (Israetel doctrine)
- Bengisu'nun MSc kişiliğine uyar — "hedef bandı içinde miyim?"

**Dezavantajlar:**
- Radar chart **scientific consensus'da zayıf** (Few 2013 — ölçek karşılaştırma zor, alan algısı yanıltıcı). Bengisu MSc — bunu fark eder.
- **Anatomik bağlam yok** (kas haritası daha güçlü)

**Karar:** Radar chart **sekonder** olarak, kas haritası altında "Detay görünüm" tap'i ile açılır. Birincil görünüm değil.

### 2.3. Seçenek C — Stacked bar (TERTIARY)

**Yapı:** X = haftanın günleri (Pzt-Paz), Y = günlük set sayısı, stack = kas grubu (renk-kodlu, kas haritası ile aynı palet). 7 gün × ~5-9 grup = 35-63 segment.

**Avantajlar:**
- "**Hangi gün hangi grubu çalıştım**" detay
- Splittin doğruluğunu kontrol — Day 1 squat = quad+glute renkli olmalı
- Tarihsel görünüm

**Dezavantajlar:**
- Kalabalık (özellikle 7 gün × 9 grup)
- "Hangi grup eksik?" sorusunu **toplu** cevaplamaz (kas haritası yapar)

**Karar:** **Tarihsel detay görünümü** olarak, swipe-down kart altında. Birincil değil; "Bu hafta günlük dağılım" başlığıyla.

### 2.4. Önerilen kombinasyon

```
┌─────────────────────────────────────────────┐
│  Bu Hafta Dengen 🌿                         │
│  ─────────────────────────────────────────  │
│                                             │
│         [Ön kas haritası]   [Arka kas       │
│         (SVG, renkli)        haritası]      │
│                                             │
│  ✓ Tüm büyük gruplar MEV üstünde            │
│  ⚠ Triceps eksik (1 set, hedef 4-6)         │
│                                             │
│  [Detay görünüm: Radar ▼]                   │
│  [Günlük dağılım: Stacked bar ▼]            │
└─────────────────────────────────────────────┘
```

**Bengisu için tek "kazanç cümlesi":** Pazar akşam → "**Bu hafta tüm 9 ana grubu çalıştırdın ✓**" (eğer tüm gruplar ≥MEV) + üst-orta-alt vücut **denge ikonu** (3 kategori).

---

## 3. Kuvvet İlerleme Görselleştirmesi

### 3.1. Top set 1RM tahmini — line chart

**Formül:** Brzycki — `1RM = weight × (36 / (37 - reps))`. Reps ≤10 için doğru. Yüksek rep (12+) için Epley — `1RM = weight × (1 + reps/30)`. Sistem rep sayısına göre formül seçer.

**Grafik:** Her ana hareket için ayrı **mini line chart** (sparkline tarzı, Tufte 2006). Y ekseni: tahmini 1RM. X ekseni: tarih (8-12 hafta).

```
Squat 1RM Tahmini ──── 8 hafta
                                          ⭐
                                       /
                                    /
                                 /
  ●●●  ●●  ●●●  ●●  ●●●  ●●●  ●●  ●●
  ─────────────────────────────────────────────
  Hafta 1  2  3  4  5  6  7  8

  Başlangıç: 45 kg @ 5 (Brzycki: ~52 kg 1RM)
  Bugün: 60 kg @ 8 (Brzycki: ~74 kg 1RM)
  Artış: +22 kg (+42%) — 8 hafta
```

**Görsel detaylar:**
- **Smoothed line** (3-nokta hareketli ortalama) — günlük dalgalanma yumuşatılır
- **PR günleri ⭐** — yeni 1RM rekoru
- **Cycle phase background tint** — folliküler/luteal arka plan gradient hafif (Bengisu kendi pattern'ını görür: PR'lar folliküler'de mi yoğun?)
- **Deload haftaları soluk** (kasıtlı düşüş)
- **Tooltip**: tarihte tıkla → o seansın detayı (ağırlık × rep, RPE, cycle day)

**Hareket seçimi (sparkline grid 6 ana lift):**
1. Squat (Smith / Goblet)
2. Hip Thrust
3. RDL (Romanian Deadlift)
4. Lat Pulldown
5. Incline DB Press
6. Shoulder Press

Bengisu'nun **6 ana hareketi** dashboard'da grid 2×3. Tap-to-expand → tek hareketin tam görünümü.

### 3.2. PR rozet sistemi

**Tetikleyici:** Yeni en yüksek 1RM tahmini → **otomatik PR rozeti** + haptic feedback (mobile vibration API) + ZEN quote.

**Rozet UI:**

```
        ⭐
   YENİ PR
   Squat 1RM
   74 kg
   ━━━━━━━━━
   Önceki: 71 kg
   Fark: +3 kg
   ━━━━━━━━━
   "Folliküler enerjini onurlandırdın."
                — bilim, faz Day 11
```

**ZEN quote havuzu (cycle phase'e göre):**
- Folliküler PR: "Kuvvet zirvesinde olduğun için değil, onu onurlandırdığın için."
- Ovulasyon PR: "Anne enerjin işliyor — bedenin sana izin verdi."
- Luteal PR (nadir): "Direnç zirvesi geçtin — bu ekstra anlamlı."
- Regl sonrası PR: "Geri dönüş zirvesi. Bedenle barış."

**Anti-kıyaslama kuralı:** Rozet **kendi PR'ına** karşı, asla "kadın 32 y ortalaması" karşı.

**PR timeline ekran:** "Bu yıl 12 PR yaptın" tarzı yıllık özet → Aralık'ta Bengisu kendi gelişimini bütünüyle görür.

### 3.3. "Dün vs bugün" karşılaştırma — otoregülasyon

**Kullanım:** Antrenman ekranında, hareket başlamadan önce → son seans veri görünür.

```
┌──────────────────────────────────────────┐
│  Squat                                   │
│                                          │
│  Geçen sefer (4 gün önce, Day 11 follicular):│
│   • 60 kg × 8, 8, 8, 7 (RPE 7.5)        │
│   • Brzycki 1RM tahmin: 74 kg           │
│                                          │
│  Bugün (Day 15 ovulation):              │
│   📊 Cycle-aware öneri:                  │
│   • 57.5 kg × 8 önerilen (-2.5 kg)      │
│   • Sebep: Ovulasyon ligament dikkat     │
│   • RPE hedef: 7-7.5                     │
│                                          │
│  [Önerilen ile başla]  [Manuel düzenle] │
└──────────────────────────────────────────┘
```

**Bilim:** Helms 2018 — RPE/RIR tabanlı autoregulation novice/intermediate için en etkili periodization. Görsel: **basit kart**, abartı yok.

### 3.4. Cycle-aware kuvvet pattern

**Grafik:** **Heatmap** — X ekseni cycle day (1-28/29), Y ekseni hareket. Hücre rengi = o cycle day'de ortalama 1RM tahmini (kendi baseline %'si olarak).

```
              Day  1   5   10   15   20   25
Squat        ░░  ●●●  ●●●●  ●●●  ●●  ●
Hip Thrust   ░░  ●●●  ●●●●  ●●●●  ●●●  ●●
RDL          ░░  ●●●  ●●●●  ●●●●  ●●  ●
Lat Pull     ░●  ●●●  ●●●  ●●●  ●●  ●●
Bench        ●●  ●●●  ●●●  ●●●  ●●  ●●
Shoulder     ●●  ●●●  ●●●  ●●●  ●●  ●●

Renk: ░ = düşük, ● = baseline, ●●●● = peak
```

**Bengisu için içgörü:** "Senin Day 8-13 arası genel kuvvet pattern'i +%5-7. Day 22-28 -%3-5. Bu **3 cycle ortalaması** — istatistiksel anlamlı." MSc kişiliği bunu **bilim olarak** alır.

**Veri eşiği:** Minimum **3 cycle** (~3 ay) gereksin — istatistiksel güvenilirlik. Önce "Pattern öğreniyorum, 6 hafta sonra göreceksin" mesajı.

---

## 4. Volume ve Recovery Görselleştirme

### 4.1. Haftalık volume trendi

**Grafik:** **Line chart, 12 hafta**, kas grubu başına seçilebilir. Default: tüm gruplar toplam volume (set/hafta).

```
Toplam Set / Hafta — Son 12 Hafta

            ━━━ MAV (90 set) ━━━
                                              ●●
                                       ●●  ●●
                                ●●  ●●
                         ●●  ●●
                  ●●  ●●
           ●●  ●●
    ●●  ●●  
●●           
            ━━━ MEV (50 set) ━━━

H1 H2 H3 H4 H5 H6 H7 H8 H9 H10 H11 H12
                  ↑deload          ↑deload
```

**Detay:**
- **MEV/MAV bantları** — Israetel kadın referansı (Bölüm 1.3)
- **Deload haftaları kasıtlı düşüş** — küçük 🛌 ikon ile
- **Mezo geçişi vertical line** (4. hafta sonunda)
- Color: sage gradient (Akşam Bahçesi)

### 4.2. MEV/MAV/MRV bant göstergesi (kas grubu detay)

**Grafik:** Her grup için **horizontal bar**, MEV-MAV-MRV bandlı.

```
Glute    ████████████░░░░░░░ │ 18 set ✓ MAV içinde
         MEV (10) — MAV (16) — MRV (24)
                          ↑bu hafta

Quad     ██████████░░░░░ │ 14 set ✓ MAV alt
         MEV (8) — MAV (16) — MRV (22)
                  ↑bu hafta

Triceps  ███░ │ 3 set ⚠ MEV altı
         MEV (6) — MAV (10) — MRV (14)
         ↑bu hafta — eksik 3 set

...
```

**Bengisu'nun MSc kişiliğine ideal:** Bilimsel referans (Israetel) + kendi durumu → **karar** verilebilir veri.

### 4.3. Soreness × performance scatter

**Grafik:** Önceki gün soreness (1-5) X ekseni, ertesi gün top set RPE Y ekseni. Trend line.

**Bengisu pattern öğrenir:** "Soreness 4'te ertesi gün ortalama RPE 8.5 (planlanan 7.5'tan yüksek). Soreness 2'de RPE 7.2." → "Soreness 4 günde 1 gün ekstra rest düşün."

**Süre:** 30 antrenman.

### 4.4. Apple Health uyku × ertesi gün performance

**Grafik:** **Dual-axis line** — uyku saat (bar, Y1) + ertesi gün ortalama RPE (line, Y2). 14 gün.

```
Uyku    Bar (mavi)
RPE     Line (mauve)

Hafta 1: 6.5h uyku → RPE 7.5
Hafta 2: 5.8h uyku → RPE 8.3 (kötü)
Hafta 3: 7.5h uyku → RPE 7.2 (iyi)

İçgörü: "<6h uyku günlerinde ertesi gün RPE +0.8. Sleep priority."
```

**Bengisu için:** Tiroidektomili → uyku ekstra kritik (T3 dalgalanması yok, recovery slower). Bu görsel bunu **operationalize** eder.

### 4.5. Recovery debt göstergesi

**Concept:** Stres yükü (RPE × volume × consecutive training) - recovery (uyku, rest, mood). **Net debt > 0** = recovery deficit.

**Grafik:** **Tek bar gauge** (yatay) — yeşil "recovered" ile coral "debt" arası. Bengisu'ya **net pozisyon**.

```
Recovery Status

[━━━━━━━━━━━━━━━━━━━━━━━░░░░░░] %75 recovered
 İyi             Orta              Tükenmiş

🌿 Bugün için yeterli recovery var.
```

**Tetikleyici:** Düşük recovery → Ajan 8 protected day önerisi.

---

## 5. Body Composition Tracking

### 5.1. Kg trend (smoothed)

**Ana ilke (Ajan 6 — 3.4):** Cycle-aware. Geç luteal/regl döneminde otomatik "+su" notu.

**Grafik:**

```
Kilo — 30 gün

77.5  ●
77.0  ─━●●
76.5         ●●●●━━━━━━━●●━━━━●●
76.0                              ●●●●━━━●●
75.5                                            ●●●●
                     ↑                ↑       ↑
                    luteal          regl     follicular

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ●  Ham günlük                ━━ 7-gün hareketli ort
  Cycle phase arka plan band: sage/coral/mauve gradient
```

**Detaylar:**
- **Smoothed line** (7-gün moving avg) **primary**
- **Ham noktalar** soluk arka planda (Tufte — gizleme ama vurgulama)
- Cycle phase **arka plan band** (gradient)
- "+1.2 kg" geç luteal artış otomatik tooltip: "Faz 24-28 ortalama su tutma 1-2 kg. **Yağ değil**, faz bittiğinde göreceksin."
- **Hedef yumuşatma:** 5 kg/ay matematik bandı **gradient zone**:
  - Yeşil zone (gerçekçi): -1.5 ile -2.5 kg/ay (Ajan 1+4 hesaplaması)
  - Mavi zone (hedef): -2.5 ile -5 kg/ay (Bengisu hedefi, çok agresif)
  - Soluk gri zone (>5 kg/ay): "Sürdürülebilir değil" yargısız etiket

**Bengisu kg eğrisi yeşil zone'da → "Senin biyolojin için ideal hız" mesajı. Mavi zone'da olsa da oldukça agresif uyarısı.**

**Süre:** 30 gün primary. 90 gün swipe. Tüm yolculuk (Eylül'e kadar) opsiyonel mini-strip.

### 5.2. %Yağ + %Kas (Renpho)

**Grafik:** **İkili line chart** (smoothed, 30 gün) — yağ azalıyor (descending), kas korunuyor/artıyor (ideal: hafif ascending). Aynı eksende ama farklı renk.

**Bengisu için kritik metrik:** kg düşüşü kas mı yağ mı? Renpho impedance bias var (özellikle hidrasyon değişkenliği) → cycle-aware nuance gerekli.

**İçgörü pattern:** "Son 30 gün: -2.1 kg, %yağ -1.8, %kas korundu (-0.1, %0.3 bias). **Doğru yöne gidiyorsun**: kg kaybı çoğunlukla yağ."

### 5.3. DEXA önerisi entegrasyonu

**Ajan 1 önerisi:** Tiroidektomi + agresif diyet → DEXA bone density baseline. Eğer Bengisu DEXA verisi eklerse:

**Grafik:** Bone density T-score (her 6-12 ayda bir nokta). Lumbar / femoral neck. **Sadece 2-3 nokta olur** — line yerine **dot plot** + referans T-score zone (-1 osteopeni, -2.5 osteoporoz).

**Bengisu için anlam:** "Eylül 2026 DEXA önce → baseline T-score = -0.3 (normal). Bir sonraki DEXA Eylül 2027 → kuvvet antrenmanı sonucu."

### 5.4. Bel/kalça ölçüleri

**Mevcut sistemde yok (Bengisu mezura kullanmıyor — açık soru, Bölüm 11).** Eğer eklenirse:

**Grafik:** Smoothed line (haftalık ölçüm). Bel + kalça + uyluk + kol. Renk-kodlu.

**Avantajı:** Kg değişmese bile **ölçü değişimi** = body recomposition. Tiroidektomili Bengisu için kg yavaş hareket eder ama ölçü daha duyarlı.

**Öneri:** "Mezura al, haftada 1 ölç" (Pazartesi sabah, cycle Day 1-3 hariç — su tutulması). 4 ölçüm: bel (umbilikus seviyesi), kalça (en geniş), uyluk (mid), kol (orta).

### 5.5. Cycle-aware kg uyarı sistemi

**Ajan 6 (3.4) — kritik:** Cycle Day 24-28 + Day 1-2 = +1.5-2.5 kg sıvı.

**Otomatik uyarı:**
- Cycle Day 22+: Kg ekranında banner — "Geç luteal/regl döneminde su tutma ortalama +1-2 kg. Şu anki yükselişin **muhtemelen su**, faz bittiğinde göreceksin."
- Tartı 1.5+ kg ardarda artış: "Bu **su tutulması** olabilir. 5-7 gün bekle, sonra trend görünür."

**Tasarım kuralı:** Asla "endişelenme" demeyiz — bu duyguyu reddetmek demek. Yerine **bilgi** sunarız. "Bu **fiziksel olarak normal**" daha güçlü.

---

## 6. Cycle × Performance Korelasyon

Ajan 2 + 3 + 6 işaret etti — Bengisu MSc kişiliği için **bilimsel pattern görmek değer**.

### 6.1. Multi-cycle ortalama ısı haritası

**Grafik:** **Heatmap** — X ekseni cycle day (1-29), Y ekseni metrik (volume, ortalama RPE, mood, kuvvet, uyku saat). Renk = o cycle day'de Bengisu'nun ortalama (3+ cycle).

```
              D1  5   10   15   20   25
Volume       ░   ●●  ●●●●  ●●●  ●●●  ●●
RPE algı     ●●  ●●  ●●    ●●●  ●●●●  ●●●●
Mood         ●   ●●  ●●●●  ●●●●  ●●  ●
Kuvvet (1RM) ░   ●●  ●●●●  ●●●●  ●●●  ●●
Uyku         ●●  ●●● ●●●   ●●●  ●●   ●●
Adım         ●●  ●●● ●●●   ●●●  ●●   ●●

Pattern: Day 8-15 = enerji + kuvvet zirvesi
        Day 22-28 = yorgunluk + RPE algı yüksek
        Day 1-3 = restorasyon penceresi
```

**Bilimsel temel:** Sims 2016 (*ROAR*), Helms (cycle phase × strength meta-analiz, hala mixed evidence ama bireysel pattern stabil — *Stronger By Science* 2023).

**Eşik:** En az **3 cycle** veri (ideal 6). Az veri → "Pattern öğreniyorum" mesajı + öğrenme bar.

### 6.2. Cycle phase × volume × ağırlık × RPE × mood × uyku

**Grafik:** **Parallel coordinates plot** (Tufte — multi-dimensional). 6 axis paralel; her cycle bir polyline.

```
Volume   RPE   Mood   Kuvvet   Uyku   Adım
  ●●     ●     ●●●●    ●●●     ●●●    ●●●
  ●●●    ●●    ●●●●    ●●●●    ●●●    ●●●
  ●●     ●●    ●●●     ●●●     ●●     ●●
  ●●●●   ●●●●  ●●      ●●      ●●     ●●     ← geç luteal
  ●      ●●●   ●       ●       ●●●    ●      ← regl
```

**Bengisu pattern algılar:** "Geç luteal'de **volume yüksek + mood düşük + uyku düşük + adım düşük** — tüm metrikler düşüş senkronize. Bu fizyoloji."

**Karmaşık görsel:** Bengisu MSc → bunu okur. Ama **ana dashboard'da değil** — "Cycle Pattern Analizi" alt sayfada.

### 6.3. "Senin pattern'ın" kişiselleştirilmiş içgörü

**UX:** Pazar akşam haftalık özetin parçası — text + mini grafik kombinasyon.

```
🌿 Senin Cycle Pattern'ın (3 cycle ortalama)

Folliküler (Day 6-13):
  ⚡ +%6 ortalama 1RM artışı
  💪 RPE algısı baseline (7.0)
  🌟 PR yapma penceresi

Ovulasyon (Day 13-16):
  ⚠️  ACL ligament dikkati
  🦵 Kuvvet stable, ama eksantrik tempo öneri

Erken luteal (Day 17-21):
  🌊 Geçiş haftası
  💧 Hidrasyon +500ml önerilen

Geç luteal (Day 22-28):
  📉 Senin verilerinde RPE algı +1.1 puan
  💧 Su tutma +1.5 kg ortalama
  🛌 Volume azaltma + uyku önceliği

Regl (Day 1-5):
  🌙 Restorasyon penceresi
  ✨ İlk 2 gün protected
  🌱 Day 3'ten itibaren kademeli geri dönüş
```

**Bengisu MSc kişiliği için bu** "uygulama beni biliyor" duygusu — Ajan 6 relatedness boşluğunu kapatıyor.

### 6.4. Anti-kıyaslama kuralı (cycle bağlamında)

- "Diğer kadınların ovulasyon kuvvet artışı %5" tarzı **YOK**
- "32 y kadın ortalama" **YOK**
- Sadece **Bengisu'nun pattern'ı** + bilim referansı (Sims 2016 — bireysel varyasyon)
- Eğer Bengisu'nun pattern'ı "tipik" değilse (örn. ovulasyonda PR yok), bu **anomali değil bireysel varyasyon** olarak çerçevelenir

---

## 7. Anti-Kıyaslama Tasarım Kararları

Ajan 6 (2.6, 7.4) işaret etti — kıyaslama Bengisu için kritik tetikleyici. Tüm görselleştirmelerde **temel ilke**:

### 7.1. "Diğer kullanıcılar" tamamen YOK

- Strong/Hevy/Caliber'da yaygın "leaderboard", "%75 kullanıcılar senden zayıf squat" tarzı GÖSTERİM **kesinlikle yok**
- Sosyal grafik yok, sosyal metric yok, share fonksiyonu yok (Bengisu'nun seçimi → opt-in)
- "Uygulama topluluğu" mesajı yok

### 7.2. Normatif değerleri kontekstli kullan

**İzin verilen normlar:**
- Israetel MEV/MAV/MRV (bilimsel hedef bandı, sosyal değil) — kaynak tooltip
- Apple Health varsayılan hedefler (10k adım, 7h uyku) — kullanıcı düzenleyebilir
- WHO BMI yok (Linda Bacon — Ajan 6)

**Yasak normlar:**
- "32 y kadın ortalaması" — sosyal kıyas
- "Senin BMI'in normal aralık üstünde" — kg-shame dili
- "%X kullanıcı senden iyi" — leaderboard

### 7.3. Hedef yumuşatma (5 kg/ay matematik bandı)

Ajan 6 (3.2) detayladı: 5 kg/ay tiroidektomili + 32 y için gerçekçi değil; matematik 1.4-2.3 kg/ay.

**Görselleştirme çözümü:**
- Hedef line tek **çizgi** değil **gradient zone**
- Yeşil zone (1.4-2.3 kg/ay): "Senin biyolojin için sürdürülebilir"
- Mavi zone (2.5-5 kg/ay): "Hedef bandı — agresif ama OK"
- Soluk gri zone (>5 kg/ay): "Sürdürülebilir değil" — yargısız

```
Eylül 2026'a kadar 18 kg gitmek için gerekli hız:

│ ░░░░░░░░░░░░░░░░░░  🎯 18 kg / 18 hafta = 1 kg/hafta │
│ ░░░░░░░░░░░░░░░░░░                                   │
│ ░░░░░░░░░░░░░░░░░░  Yeşil zone:  -0.4 kg/hafta       │
│ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░  Mavi zone:   -0.7 kg/hafta       │
│ ▓▓▓▓▓▓▓▓░░░░░░░░░░  Hedef:       -1.0 kg/hafta       │
│                                                       │
│ Senin son 4 hafta: -1.6 kg = -0.4 kg/hafta            │
│ Yeşil zone içinde. Sürdürülebilir hız. ✓              │
```

### 7.4. "Geri kalmadın" mesajları

**Plato (Ajan 6 — 3.3):**
- 3+ gün kg düşmedi → otomatik banner: "Plato 3-7 gün **biyolojik olarak normal**. Kadın haftalık ortalama anlamlı, günlük çoğu zaman su."
- "Ay 2 sonu beklenen plato — bu **doğru yolda olduğunun** işareti, durduğun değil."

**Hedef sapması:**
- Ay sonu hedeften gerideyse: "Bu ay -1.8 kg gittin. Beklenen biyolojik hız: 1.4-2.3. **Bu yeterli**, hızlanma değil sürdürme." Yargısız + bilim destekli.

### 7.5. Sosyal medya tetikleyici nudge

Ajan 6 (7.4) işaretledi — kullanıcı dış uygulamaya geçiyorsa nudge.

**Görsel:**
- App close öncesi 2-3 sn opsiyonel: "Bugün kıyaslama tetikleyicisinden uzak durmayı seç. 🌿"
- Çok proaktif değil — Bengisu setting'ten kapatabilir

---

## 8. Mevcut Kodda Görselleştirme Önerileri

Single-file HTML PWA. Bundle minimal tutmak gerek (Ajan 8 — performance budget).

### 8.1. Teknoloji seçimleri

**Birincil tercih: Vanilla SVG inline.**
- Mevcut macro ring SVG pattern var — extend et
- Bundle ekstra 0 KB
- Bengisu'nun düşük-end Android'de bile akıcı
- Custom Akşam Bahçesi paleti tam kontrol

**Caydırıcı:** Chart.js (~75 KB gzipped).
- Yararı: hızlı line/bar
- Maliyet: bundle %30 büyür
- **Karar:** Sadece son çare — 3 grafik için 75 KB değil

**Kesinlikle hayır:** D3.js (~250 KB), Recharts (React bağımlı).

### 8.2. SVG component pattern

```javascript
// Mevcut macro ring pattern'ı genelleştir
function svgRing(value, max, color, size = 60) {
  const r = size/2 - 6;
  const c = 2 * Math.PI * r;
  const offset = c - (value/max) * c;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}"
              fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="6"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}"
              fill="none" stroke="${color}" stroke-width="6"
              stroke-dasharray="${c}" stroke-dashoffset="${offset}"
              transform="rotate(-90 ${size/2} ${size/2})"
              stroke-linecap="round"/>
    </svg>
  `;
}

// Sparkline (Tufte 2006)
function svgSparkline(values, width = 120, height = 30, color = '#5A7A4F') {
  if (values.length < 2) return '';
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const dx = width / (values.length - 1);
  const points = values.map((v, i) =>
    `${i*dx},${height - ((v - min)/range) * height}`
  ).join(' ');
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2"/>
      <circle cx="${(values.length-1)*dx}" cy="${height - ((values[values.length-1] - min)/range) * height}"
              r="3" fill="${color}"/>
    </svg>
  `;
}

// Heatmap cell (28-gün streak için mevcut, kas haritası için extend)
function svgHeatmapCell(intensity, color) {
  const opacity = 0.15 + (intensity * 0.85); // 0..1 → 0.15..1
  return `<rect width="100%" height="100%" fill="${color}" fill-opacity="${opacity}" rx="4"/>`;
}
```

### 8.3. Aggregation helper'ları

```javascript
// Volume per muscle group, 7-day window
function getMuscleVolumePerWeek(history, muscleGroup, weekEndDate) {
  const start = new Date(weekEndDate);
  start.setDate(start.getDate() - 6);
  const weekEntries = history.filter(e => {
    const d = new Date(e.date);
    return d >= start && d <= weekEndDate;
  });
  return weekEntries.reduce((sum, e) => {
    return sum + e.exercises
      .filter(ex => MUSCLE_GROUP_MAP[ex.exerciseId]?.includes(muscleGroup))
      .reduce((s, ex) => s + ex.actual.sets, 0);
  }, 0);
}

// 1RM tahmin (Brzycki for ≤10 reps, Epley for 11+)
function getOneRMEstimate(weight, reps) {
  if (reps <= 0) return 0;
  if (reps === 1) return weight;
  if (reps <= 10) return weight * (36 / (37 - reps)); // Brzycki
  return weight * (1 + reps / 30); // Epley
}

// Top set 1RM history for an exercise
function getOneRMHistory(history, exerciseId) {
  return history
    .flatMap(e => e.exercises
      .filter(ex => ex.exerciseId === exerciseId)
      .map(ex => {
        // Top set = en yüksek 1RM tahmini
        const sets = ex.actual.weight.map((w, i) =>
          getOneRMEstimate(w, ex.actual.reps[i])
        );
        return { date: e.date, oneRM: Math.max(...sets) };
      }));
}

// Cycle phase × performance pattern
function getCyclePerformancePattern(history, cycleData) {
  const byPhase = { folicular: [], ovulation: [], earlyLuteal: [], lateLuteal: [], menstrual: [] };
  history.forEach(e => {
    const phase = cycleData[e.date]?.phase;
    if (phase && byPhase[phase]) {
      byPhase[phase].push({
        rpe: e.daySummary.averageRPE,
        volume: e.daySummary.actualVolume,
        mood: e.daySummary.overallMood,
      });
    }
  });
  // Aggregate
  return Object.entries(byPhase).reduce((acc, [phase, entries]) => {
    if (entries.length === 0) return acc;
    acc[phase] = {
      avgRPE: avg(entries.map(e => e.rpe).filter(Boolean)),
      avgVolume: avg(entries.map(e => e.volume).filter(Boolean)),
      avgMood: avg(entries.map(e => e.mood).filter(Boolean)),
      sampleSize: entries.length,
    };
    return acc;
  }, {});
}

// PR detection
function detectPRs(history, exerciseId) {
  const ordered = getOneRMHistory(history, exerciseId).sort((a,b) => new Date(a.date) - new Date(b.date));
  const prs = [];
  let bestSoFar = 0;
  ordered.forEach(entry => {
    if (entry.oneRM > bestSoFar) {
      prs.push({ ...entry, gain: entry.oneRM - bestSoFar });
      bestSoFar = entry.oneRM;
    }
  });
  return prs;
}

// Smoothed weight (7-day moving avg, cycle-aware annotation)
function getSmoothedWeight(weightHistory, cycleData) {
  return weightHistory.map((entry, i) => {
    const window = weightHistory.slice(Math.max(0, i-6), i+1);
    const smoothed = window.reduce((s, w) => s + w.kg, 0) / window.length;
    const cycle = cycleData[entry.date];
    const isLuteal = cycle?.day >= 22 || cycle?.day <= 2;
    return {
      date: entry.date,
      raw: entry.kg,
      smoothed,
      cyclePhase: cycle?.phase,
      annotation: isLuteal ? 'water_retention_likely' : null,
    };
  });
}
```

### 8.4. Renk paleti (Akşam Bahçesi)

```css
:root {
  /* Mevcut */
  --bg-deep: #0F4147;
  --cream: #E8DDC4;
  --coral: #D9591E;
  --mustard: #E8B23F;
  --sage-leaf: #5A7A4F;
  --sage-deep: #3E5A3A;
  --mauve-evening: #B47990;

  /* Görselleştirme spesifik */
  --viz-grid: rgba(232, 221, 196, 0.12);
  --viz-text-secondary: rgba(232, 221, 196, 0.65);
  --viz-band-mev: rgba(90, 122, 79, 0.15);
  --viz-band-mav: rgba(90, 122, 79, 0.30);
  --viz-band-mrv: rgba(217, 89, 30, 0.18);
  --viz-pr-gold: #F4C430;

  /* Kas haritası gradient (5 stop) */
  --muscle-low: rgba(180, 121, 144, 0.30);     /* mauve soluk */
  --muscle-mev: rgba(90, 122, 79, 0.50);       /* sage soluk */
  --muscle-mav: #3E5A3A;                       /* sage deep */
  --muscle-high: #E8B23F;                      /* mustard */
  --muscle-mrv: rgba(217, 89, 30, 0.70);       /* coral */
}
```

---

## 9. Dashboard Kartları — Mevcut Sekmeler + Yeni İlerleme

### 9.1. Bugün sekmesi — minimal tutma

**Mevcut yön (PROGRESS.md):** Akşam Bahçesi minimal — bg.jpg + greeting + minimal kartlar. Bengisu kalabalıklaşmasını **istemedi**.

**Görselleştirme önerisi: SADECE 3 mikro-grafik:**

1. **Streak/Akış kartı** (mevcut, küçük)
2. **Bugün için cycle phase ikonu** (mauve gradient)
3. **Bugün'ün ilk eylemi** (Levotiron / yürüyüş / antrenman) — checkmark ring

**HİÇBİR büyük grafik Bugün'de yok.** Veri yoğunluğu derin sayfalarda.

### 9.2. Egzersiz sekmesi — ana yer

**Bengisu'nun fitness verisi burada yaşıyor.** Kart hierarchy:

```
┌─────────────────────────────────────────┐
│  Bu Hafta Dengen 🌿  [Tap detay]        │
│  [Kas haritası önden + arkadan SVG]     │
│  ✓ Tüm gruplar MEV üstünde              │
│  ⚠ Triceps 3/6 set                      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Bugünün Antrenmanı                     │
│  Day 2 — Üst Vücut Push                 │
│  6 hareket · 50 dk · RPE hedef 7-8      │
│  [Başla]                                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Kuvvet Trendin — Son 8 Hafta           │
│  Squat   ━━●●●●●━━━●●━━━●●●●━━●●●●━━ ⭐ │ +22%
│  Hip T.  ━━━●━●●●━●●●●●●●━●●●━●━●●●━ ⭐ │ +35%
│  RDL     ━●●●●━●●━●━●●━━●●●━━●●●━━●━ ⭐ │ +18%
│  Lat P.  ━━●●━●●━●━●●━●●━●━●●●●━━━●━━━━ │ +14%
│  Bench   ●●━●●━━●━●●━━●━━●●━━━●●━━━━━━━━ │ +8%
│  Shldr   ●━━●━━━●━━●━●●━━●━●━━●●━━━━━━━ │ +12%
│                                         │
│  [Tüm hareketler ▼]                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Volume — 12 Hafta                      │
│  [Stacked bar mini, 12 stop]            │
│  ──── MAV bandında 9/12 hafta ✓        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Akış / Streak                          │
│  [28-gün heatmap, mevcut]               │
│  18 gün akışta · 2 esnek gün korundu    │
└─────────────────────────────────────────┘
```

### 9.3. Ölçüm sekmesi — kompozisyon

```
┌─────────────────────────────────────────┐
│  Kilo — 30 gün (smoothed)               │
│  [Line chart cycle-aware band]          │
│  76.2 kg (-0.7 son hafta)               │
│  Senin biyolojik hızın: -1.6 kg/4hafta  │
│  Sürdürülebilir bandda ✓                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Yağ % + Kas %  (Renpho)                │
│  [Dual line]                            │
│  Yağ: -1.8 (30 gün)                     │
│  Kas: korundu                           │
│  → Doğru yön: yağ↓, kas korunuyor       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Bel/Kalça (mezura — başlat?)           │
│  [Empty state davet, ölçüm girilirse    │
│   smoothed line görünür]                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Kemik Sağlığı (DEXA)                   │
│  [Empty state — Eylül 2026 öneri]       │
│  "Tiroidektomi + agresif diyet bandında │
│   baseline DEXA değerli olur."          │
└─────────────────────────────────────────┘
```

### 9.4. Yeni "İlerleme" sekmesi mi yoksa Egzersiz altında mı?

**Karar: Yeni sekme YOK. Egzersiz altında "İlerleme" alt sayfa.**

**Neden:**
1. **6 sekme limit (mevcut nav).** 7. sekme nav'ı bozar — Bengisu'nun "kalabalıklaştırma" hassasiyeti.
2. Egzersiz zaten ana fitness yer — kuvvet trendi, volume oraya doğal yerleşir.
3. **Cross-cutting metrikler (cycle × performance, mood × performance) "İlerleme" alt sayfa altında** — Egzersiz top-bar'a tap edilebilir 3 alt-tab:
   - Bugün (default)
   - Hafta (kas haritası, volume)
   - **İlerleme** (kuvvet trendi, PR, cycle pattern, mood scatter)

**Diğer çözüm — uzun scroll Egzersiz:** Kart-kart aşağı scroll. Ama 8+ kart fazla. Alt-tab daha temiz.

---

## 10. Öneriler P0 / P1 / P2

**P0 — kritik (bu sprintte):**

1. **Kas haritası heatmap (önden + arkadan SVG)** — Bengisu'nun en açık beklentisi ("her ana kas grubunu çalıştırdım"). Egzersiz/Hafta alt-tab'inde. ~80 path SVG, tek seferlik.

2. **Kuvvet trendi sparkline 6 ana hareket** — Bengisu'nun ilerleme görüntüsü için kritik. Brzycki/Epley 1RM tahmin. PR ⭐ otomatik tespit.

3. **PR rozet sistemi + ZEN quote (cycle phase'e göre)** — pozitif pekiştirme habit anchor. Haptic feedback + animation.

4. **Smoothed kg trend + cycle-aware su tutma uyarısı** — Ajan 6'nın 3.4'te işaret ettiği psikolojik kırmızı bayrak.

5. **Hedef yumuşatma gradient zone** — 5 kg/ay matematik bandı yeşil/mavi/gri zone olarak. Yargısız + bilim.

**P1 — önemli (sonraki sprint):**

6. **MEV/MAV/MRV bant göstergesi (kas grubu detay)** — bilim destekli, Bengisu MSc kişiliğine uyar. Israetel kadın referansı.

7. **Cycle × performance heatmap (3-cycle ortalama)** — Bengisu kendi pattern'ını öğrenir. Veri eşiği: 3 cycle.

8. **Apple Health uyku × ertesi gün performance** — recovery operationalize. Tiroidektomili biri için kritik.

9. **Volume 12-hafta line chart** — periodization görünür. Deload haftaları kasıtlı düşüş işareti.

10. **Pazar haftalık özet — "Bu hafta vücudum bana ne söyledi"** — Ajan 6 (7.2) işaretledi. 5-7 bullet otomatik.

**P2 — iyileştirici (ileri):**

11. **Mood × RPE scatter** — kompulsif egzersiz pattern algı.

12. **Soreness × ertesi gün performance scatter** — recovery debt operationalize.

13. **Recovery debt gauge** (yatay bar) — net stres-recovery durumu.

14. **Bel/kalça/kol ölçü girişi + smoothed line** — body recomp metric. Bengisu mezuraya bağlı (açık soru).

15. **DEXA bone density tracking** — yıllık 1-2 nokta + T-score zone.

16. **PR yıllık özeti** (Aralık'ta) — "Bu yıl 12 PR" gibi.

17. **Parallel coordinates plot (cycle multi-metric)** — derin analiz, alt sayfada.

---

## 11. Açık Sorular

**Bengisu'ya:**

1. **Radar chart mı, kas haritası mı tercih?** Kas haritası anatomik bağlam güçlü ama statik; radar chart MEV/MAV bandı ile bilimsel ama soyut. **Önerim: kas haritası primary, radar opsiyonel detay.** Onay?

2. **Apple Health entegrasyon detayı:** Uyku, adım, aktif kalori, istirahat kalp atış — hangileri görselleştirilsin? Hangi süre? PROGRESS.md'de "Apple Health denemesi" var ama detay yok.

3. **Mezura kullanır mısın?** Bel/kalça/uyluk/kol haftalık ölçüm = body recomp metric. Tartı yavaş hareket etse bile ölçü duyarlı. Ama ekstra protokol — Bengisu seçimi.

4. **DEXA yaptırma planı?** Tiroidektomi + agresif diyet → baseline T-score değerli. Eylül 2026 sonrası 6-12 ay aralık. Bütçe ve hekim önerisi.

5. **Cycle × performance pattern eşiği:** En az 3 cycle veri sonrası gösterilir. Bu süre kabul edilebilir mi yoksa "1 cycle'da provisional pattern göster" mi?

6. **Sosyal medya nudge:** Uygulama dışına geçişte 2-3 sn opsiyonel "kıyaslama tetikleyicisinden uzak dur" mesajı — istiyor musun yoksa fazla mı?

7. **PR rozeti haptic + animasyon:** Mobile vibration API + 3-sn animation — gücü kabul edilebilir mi yoksa over-the-top?

8. **"İlerleme" Egzersiz alt-tab'i mı, ana sekme mi?** Önerim: alt-tab (nav 6 sekme limit). Onay?

9. **Renpho %yağ/%kas güvenilirliği:** Empedans tabanlı bias var. Cycle Day'e göre nuance ister misin yoksa sadece haftalık ortalama yeter mi?

10. **Hedef yumuşatma gradient zone:** Yeşil (gerçekçi) / mavi (hedef) / gri (ulaşılmaz) gösterimi — psikolojik olarak kabul edilir mi yoksa "hedefim agresif olmasın" mesajı tetikleyici mi?

**Ajan 1'e (tıp):**
- DEXA önerisi T-score eşiği (Bengisu için baseline anlamlı mı?)

**Ajan 2'ye (cycle):**
- Cycle phase × kg trend bağlama (geç luteal su tutma kg eşiği +1.5 mı +2.5 mı?)

**Ajan 3'e (spor bilimi):**
- Israetel kadın MEV/MAV/MRV — Bengisu için tam eşikler (kas grubu × set)
- 1RM tahmin formül seçimi: Brzycki ≤10 rep / Epley 11+ — onay?

**Ajan 6'ya (psikoloji):**
- Sosyal medya nudge kabul edilebilir frekans (her geçişte mi, günde 1 kez mi?)
- Hedef gradient zone "ulaşılmaz" etiketi yargısız mı?

---

## 12. Kaynaklar

1. **Tufte, E. R.** (1983, 2nd ed. 2001). *The Visual Display of Quantitative Information*. Graphics Press. (Data-ink ratio, chart-junk minimization, sparkline öncülü.)
2. **Tufte, E. R.** (2006). *Beautiful Evidence*. Graphics Press. (Sparkline tasarım dokümantasyonu, small multiples.)
3. **Few, S.** (2013). *Information Dashboard Design: Displaying Data for At-a-Glance Monitoring* (2nd ed.). Analytics Press. (Pre-attentive attributes, dashboard hijyeni, gauge/dial eleştirisi.)
4. **Few, S.** (2009). *Now You See It*. Analytics Press. (Time-series analizi, scatter plot, distribution görselleştirme ilkeleri.)
5. **Knaflic, C. N.** (2015). *Storytelling with Data*. Wiley. ("What's the one thing?", clutter elimination, focus & contrast.)
6. **Shneiderman, B.** (1996). The Eyes Have It: A Task by Data Type Taxonomy. *IEEE Visual Languages Symposium*. (Information visualization mantra: overview first, zoom & filter, details on demand.)
7. **Helms, E., Morgan, A., & Valdez, A.** (2019, 2nd ed.). *The Muscle and Strength Pyramid: Training*. Independently published. (RIR/RPE skala, autoregulation, novice/intermediate/advanced periodization.)
8. **Israetel, M., Hoffmann, J., & Smith, C. W.** (2015-2024 series). *Renaissance Periodization* — Volume Landmarks (MEV/MAV/MRV). RP Strength.
9. **Brzycki, M.** (1993). Strength testing — predicting a one-rep max from reps-to-fatigue. *JOPERD*, 64(1), 88-90. (1RM tahmin formülü.)
10. **Epley, B.** (1985). Poundage Chart. Boyd Epley Workout. Lincoln, NE: Body Enterprises. (1RM tahmin, yüksek rep range.)
11. **Schoenfeld, B. J., Ogborn, D., & Krieger, J. W.** (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass: A systematic review and meta-analysis. *J Sports Sci*, 35(11), 1073-1082. PMID: 27433992.
12. **Sims, S. T., & Yeager, S.** (2016). *ROAR: How to Match Your Food and Fitness to Your Female Physiology*. Rodale Books. (Cycle phase × performance, female-specific training visualization.)
13. **Knowles, O. E., Drinkwater, E. J., Urwin, C. S., Lamon, S., & Aisbett, B.** (2018). Inadequate sleep and muscle strength: Implications for resistance training. *J Sci Med Sport*, 21(9), 959-968. PMID: 30053867. (Uyku × kuvvet performansı.)
14. **Apple HealthKit Documentation** (2026). HealthKit Data Types Reference. https://developer.apple.com/documentation/healthkit. (HKQuantityType, sleep analysis, heart rate, step count veri yapı.)
15. **Strong (app)** & **Hevy (app)** & **Caliber (app)** UX referansı — top set tracking, PR detection, muscle group balance görselleştirme pattern'ları. (Direkt kıyas için kullanılmadı — pattern referansı.)

---

**Toplam:** Bengisu için veri görselleştirme stratejisi **kg-tiranlığını kıran çoklu metrik mimarisi** etrafında inşa edilmeli. **Beş ana eksen** (kompozisyon smoothed + kuvvet trendi + kas grubu balance + akış sürekliliği + cycle pattern) tek bir metriğe (kg) bağımlılığı kırar — Ajan 6'nın body appreciation boşluğunu ve 5 kg/ay matematik gerçekliğini aynı anda kapsar.

**Birincil görsel kazanım:** Pazar akşam Bengisu **kas haritası heatmap'ine bakıp "tüm büyük grupları çalıştırdım ✓"** diyebilir + **kuvvet sparkline'larında 6 hareketin ilerleyişini görebilir** + **smoothed kg trend'inde cycle-aware su tutma notu görerek "bu yağ değil su"** anksiyetesini söndürebilir.

Anti-kıyaslama tasarım kuralı **tüm görselleştirmelerin temel ilkesi** — sosyal kıyas yok, tek normatif referans Israetel MEV/MAV/MRV (bilimsel hedef bandı). Bu Bengisu'nun MSc kişiliği + tiroidektomi geçmişi + düğün baskısı kombinasyonu için tek sürdürülebilir görsel dil.

P0 önerileri uygulandığında uygulama "kg sayan tartı arayüzü"nden **Bengisu'nun bedeniyle bilimsel ortaklık aracına** dönüşür — Edward Tufte'nin "data integrity" ilkesi (gerçeği yumuşatmadan göster) ile Cole Knaflic'in "what's the one thing?" sorusunu birlikte cevaplayan tasarım: **Bengisu'nun bir bakışta "iyi yoldayım" diyebileceği güven dokunuşu, hiçbir karede yargısız.**
