# BENGİSU — DİYET SEKMESİ UX/PRODUCT DESIGN RAPORU

**Hazırlayan:** Orchestrator (subagent timeout sonrası inline yazım)
**Tarih:** 9 Mayıs 2026
**Dosya numarası:** Diet-Ultimate / Agent-04
**Hedef:** Diyet sekmesi için "max effort" iyileştirme tasarımı, Akşam Bahçesi paleti korunarak.

---

## 1. EXECUTIVE SUMMARY — 5 ANA İYİLEŞTİRME

1. **Sabah Hero Card** — Saat-bazlı dinamik öncelik (07:00 Levotiron+ViDrate, 10:00 Macro+1.öğün, 14:00 Pre-WO, 17:00 2.öğün, 21:00 Akşam)
2. **"Kalan" odaklı reframe** — 4 SVG ring "tüketim" yerine "kalan" gösterir (büyük yazı + cycle-aware renk)
3. **Pazar Brunch Festival Mode** — Coral burst arka plan + makro tracking gizli + festival ton (Akşam Bahçesi paletinde)
4. **Supplement Timeline UI** — Saat slider + "now" indicator + tap-to-mark + Levotiron timing uyarısı
5. **Lipid Takip Modülü** — Yeni kart, FH şüphesi konteksinde özel ton + doktor randevu hatırlatıcı

---

## 2. SABAH HERO CARD (Hero Moment Yeniden Tasarımı)

### 2.1 Mevcut Durum
Diyet sekmesi açıldığında şu an: cycle-aware macro card → 4 SVG ring → meal slots. **Hero "moment" yok** — kullanıcı saat 09:30'da ne görmek istediğini bilmiyor.

### 2.2 Önerilen Hero Card (mockup-style)

**Saat-bazlı dinamik içerik (4 zaman dilimi):**

```
┌─────────────────────────────────────┐
│  🌅 Sabah Modu (06:00-10:00)         │
│  ─────────────────────────────────  │
│  Bu Sabah                             │
│  06:30 ✓ Levotiron alındı            │
│  07:00 ✓ ViDrate                     │
│  07:30 → EVOO + Limon Shot (sıradaki)│
│  09:00 → Calcitriol 1. doz           │
│  10:00 → 1. öğün hazırlık             │
│                                      │
│  Şu an: 09:32 · Bugün regl Day 14    │
│  Akşam Bahçesi tonu (sage accent)    │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│  ☀️ Öğle Modu (10:00-15:00)          │
│  ─────────────────────────────────  │
│  Şu Anki Durumu                      │
│  Kalan: 1240 kcal | 75g P | 65g Y    │
│  ─────────────────────────────────  │
│  ✓ 1. öğün tamam (550 kcal)          │
│  □ Pre-WO 14:00 (~30g karb hazırla)  │
│  □ 2. öğün 17:00                     │
│                                      │
│  💡 Bana öner butonları (Sonraki)    │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│  🏋️ Antrenman Modu (14:00-17:00)     │
│  ─────────────────────────────────  │
│  Pre-WO Şartı                        │
│  14:00 → 30g karb (1 yk bal + kivi)  │
│  14:00 → 15-25g protein              │
│  14:15 → Opsiyonel kafein            │
│  ─────────────────────────────────  │
│  Antrenman: Pzt Alt-Squat split      │
│  17:00 → 2. öğün (post-WO) hazırla   │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│  🌙 Akşam Modu (19:00-23:00)         │
│  ─────────────────────────────────  │
│  Bugünü Kapatma                      │
│  ✓ 1. öğün · ✓ Pre-WO · ✓ 2. öğün   │
│  Toplam: 1750 kcal | 90g P | 75g Y   │
│                                      │
│  21:00 → Calcitriol 2. doz           │
│  22:00 → Çinko + Bakır               │
│  23:00 → Magnezyum + Kolajen         │
│                                      │
│  📊 Bugün dengeli  ·  Yarın hazır    │
└─────────────────────────────────────┘
```

### 2.3 Implementation Notu

- **Effort:** Orta (M) — `getCurrentTimeMode(d)` helper + 4 mode rendering
- **Lokalizasyon:** Akşam Bahçesi paleti (sage/coral/mustard/mauve cycle phase'e göre)
- **Glass card pattern:** Mevcut `.card` class korunur, içerik dinamik

---

## 3. KALAN vs TÜKETİM REFRAME (Information Hierarchy)

### 3.1 Mevcut: 4 SVG Ring "Tüketim"

```
[●●○] kcal: 850/1750
[●●●] P:    65/90
[●●●] Y:    45/75
[●○○] C:    8/30
```

### 3.2 Önerilen: "Kalan" Vurgusu

```
┌─────────────────────────────────┐
│  Kalan Bugün                     │
│  ─────────────────────────────  │
│  900 kcal                        │
│  25g protein                     │
│  30g yağ                         │
│  22g karb (post-WO için)         │
│                                  │
│  4 ring: ters animasyon          │
│  (tükendikçe boşalır, klasik     │
│   "kalan dolar" değil)           │
└─────────────────────────────────┘
```

**Tasarım kararı:** 
- Büyük rakam "Kalan kcal" (Cormorant Garamond 38px)
- Altında 3 satır kalan macro (P/Y/C)
- 4 ring küçük (collapsed default), tıkla expand → tüketim detay
- **"Bana öner" butonu kalan macro'ya göre AI öneri**

### 3.3 Cycle-Aware Renk

| Faz | Macro Hedefi | Ring Rengi | Ton |
|---|---|---|---|
| Folliküler | 1750 kcal taban | Sage (#5A7A4F) | "Bugün performans modu" |
| Ovulasyon | 1850 kcal | Mustard (#E8B23F) | "Vücut doğurgan zirvede" |
| Erken Luteal | 1900 kcal | Mauve (#B47990) | "Progesteron yükseliyor, Mg+B6 başlat" |
| Geç Luteal | 2000 kcal | Coral-Mauve | "BMR+%8-12, ekstra karb hak ettin" |
| Regl | 1900+50 kcal | Coral (#D9591E) | "🔴 Demir+B12 günü, +500ml su" |

---

## 4. PAZAR BRUNCH — FESTIVAL MODE

### 4.1 Tasarım Kararı

Bengisu cevabı: **"proje genelindeki renk ve görsele sadık kalalım"** → radikal görsel değişiklik YOK. Akşam Bahçesi paleti korunur.

### 4.2 Pazar Brunch Kartı (mockup-style)

```
┌──────────────────────────────────────┐
│  🎉 Pazar Brunch'ı                    │
│  ─────────────────────────────────  │
│  İyi eğlenceler! Hak ettin.          │
│                                      │
│  Bugün için sistem:                  │
│  ✦ Kalori takibi gizli                │
│  ✦ IF window 10:00-12:00 brunch     │
│  ✦ Yargı: 0                          │
│  ✦ Pazartesi reset normal             │
│                                      │
│  ─────────────────────────────────  │
│  Bu hafta seçimin:                    │
│  🇹🇷 Türk Klasik                      │
│  🇮🇹 Akdeniz                          │
│  🥩 Steakhouse                       │
│  🐟 Balık                            │
│  ✏️ Kendim yazayım                    │
└──────────────────────────────────────┘
```

### 4.3 Görsel Detay (Akşam Bahçesi içi)

- **Arka plan:** Coral-mustard gradient subtle (#D9591E → #E8B23F, %15 opacity, animasyonsuz)
- **Tag:** "🎉 PAZAR" pill chip, mustard background
- **Glass card:** Standart .card pattern, ekstra coral border (1px solid coral 0.3 opacity)
- **Animasyon:** Card açılışta 1× sıcak parıltı (drop-shadow coral pulse 1.5s, sonra sabit)

### 4.4 Pazar Sonrası "Pazartesi Reset"

```
┌──────────────────────────────────────┐
│  💚 Pazartesi · Yumuşak başlangıç    │
│  ─────────────────────────────────  │
│  Pazar brunch'ın bir araç,           │
│  bir ihlal değil.                    │
│                                      │
│  Bugün normal:                        │
│  • 1. öğün 10:00 (yumurta + lor)    │
│  • Pre-WO 14:00                       │
│  • 2. öğün 17:00                     │
│  • Antrenman: Pzt Alt-Squat          │
│                                      │
│  Telafi YOK.                          │
└──────────────────────────────────────┘
```

### 4.5 Implementation

- **Effort:** Küçük-Orta (S-M)
- **Yeni helper:** `isSundayBrunch(d)` + `renderSundayBrunchCard()`
- **localStorage anahtarı:** `sunday_brunch_choice` (Türk/Akdeniz/Steakhouse/Balık/Custom + tarih)
- **Pazartesi reset modal:** otomatik gösterim, dismiss edilebilir

---

## 5. SUPPLEMENT TIMELINE UI YENİDEN TASARIM

### 5.1 Mevcut: Liste Şeklinde

```
06:30 💊 Levotiron
07:00 ⚡ ViDrate
10:05 🌿 Selenyum
10:30 💊 Calciday (1. doz)
14:00 Pre-WO
17:00 (2. öğün)
17:05 💪 Kreatin
18:30 💊 Calciday (2. doz) + Qalyviz
22:00 💊 Çinko + Bakır
23:00 💊 Magnezyum + Kolajen
```

**Sorun:** 10+ madde liste, hızlı tarama zor. "Şimdi ne almalıyım?" sorusu cevap kolay değil.

### 5.2 Önerilen: Saat Slider + Now Indicator

```
┌──────────────────────────────────────────────────┐
│  💊 Bugünkü İlaç Hattın                           │
│  ─────────────────────────────────────────────  │
│                                                  │
│  06  08  10  12  14  16  18  20  22  24         │
│  │   │   │   │   │   │   │   │   │   │          │
│  ●───●───●───●───●───●───●───●───●───●          │
│  ↑   ↑   ↑       ↑       ↑       ↑   ↑          │
│  Lev VD  Sel/Ca  PreWO   Cal2/Q  Zn  Mg          │
│                  ↑ ŞİMDİ                          │
│                                                  │
│  ── Yatay scroll, ŞİMDİ saati ortada ──           │
└──────────────────────────────────────────────────┘
```

**Tıkla expand:**
```
┌──────────────────────────────────────┐
│  17:00 💊 Calciday (2. doz)           │
│  ─────────────────────────────────  │
│  Doz: 2 tablet                       │
│  Ne ile: 2. öğünle                   │
│  Etkileşim: Hallberg etkisi          │
│  (1.5h gap demir absorpsiyon korur)  │
│                                      │
│  [✓ Aldım]  [Hatırlatma 30 dk sonra] │
└──────────────────────────────────────┘
```

### 5.3 Yeni Özellikler

1. **"Şimdi" indicator** — 30 dakikalık slot içinde olan ilaç **vibe pulse** (coral)
2. **Tap-to-mark "Aldım"** — Levotiron Diary pattern, tüm supplements'a genişle
3. **Etkileşim uyarısı** — Levotiron 06:30 alındıktan sonra, 4 saat içinde Ca/Mg/Fe alınmaya çalışırsa **kibar uyarı** ("Levo'dan 4 saat önce, bekleyebilir misin?")
4. **Cycle-aware doz** — Mg sabit 300mg sembolik gösterim, regl Day 1-2 → 350-400mg ek otomatik
5. **Eksik supplement tracking** — Methylated B-Complex Bengisu almıyor, sistem "Eksik" badge gösterir

### 5.4 Levotiron-Yemek Etkileşim Görselleştirme

```
06:30 ⏰─────────────●───────●─────────●
       ↓ aç karın   ↑       ↑         ↑
       Lev          ViDrate  Kahve     Calciday
       (boş)        (kalsiyumsuz)      (4 saat sonra ✓)
                                       
       30dk         30dk    1.5-2sa    4sa+
       gap          gap     ÖNERİLEN   ZORUNLU
```

### 5.5 Implementation

- **Effort:** Büyük (L) — 2 hafta
- **Yeni dosya değil:** `index.html` `supp-tl` div revize
- **localStorage:** `supplement_taken_${date}_${id}` pattern
- **Helper:** `renderSupplementSlider()`, `getCurrentSupplement()`, `markSupplementTaken()`

---

## 6. YASAKLI LİSTE AKIŞI (Onboarding Update)

### 6.1 Eski Sistem (Strict Karnivor)

```
YASAK:
✗ Süt
✗ Yoğurt
✗ Peynir (lor + hellim hariç)
✗ Tahıl
✗ Meyve
✗ Kuruyemiş
✗ Tatlandırıcı
```

### 6.2 Yeni Sistem (Modifiye Akdeniz-Karnivor)

```
ESNEKLİKLER (8 May 2026 Bengisu kararı):
✓ Süt (inek) ≤1 bardak/gün — 12:00 sonrası (Levo emilim)
✓ Peynir geniş — feta + kaşar + parmesan + lor
   ⚠️ Hellim azalt (LDL nedeniyle)
✓ Zeytinyağ — sabah shot + 2 tk salata
✓ Sade yağ → 0 (8 May Bengisu kararı, LDL)
✓ Roka + semizotu düzenli
⚠️ Ispanak nadir + pişmiş (oksalat × hipopara)
✗ Karalahana (Bengisu sevmiyor, alternatif: pak choi)
✓ Avokado yarım/gün

ESNEK ALANLAR (kontekste göre):
🎉 Pazar brunch — serbest (yapısal kurallarla)
🤒 Hasta gün — yumuşak food + elektrolit
✈️ Seyahat — taşınabilir snack listesi
💐 Düğün haftası — fleksibilite ×3
```

### 6.3 Onboarding Wizard Update

**Yeni 3 kartlı wizard (ilk kullanım veya esneklik güncellemesi):**

```
KART 1: "Profilin Hangi Yaklaşıma Yakın?"
[Strict Karnivor] [Modifiye] [Animal-Based] [Diğer]

KART 2: "Esneklikler" (multi-select)
☑ Süt ≤1 bardak/gün
☑ Peynir (feta + kaşar + parmesan + lor)
☑ Zeytinyağ (sabah shot + salata)
☐ Sade yağ pişirme
☑ Roka + semizotu
☐ Ispanak (uyarı: hipopara'da oksalat dikkat)
☑ Avokado

KART 3: "Pazar Brunch?"
[Tek büyük brunch (her hafta)] [Değişken] [Yapmıyorum]
```

### 6.4 Implementation

- **Effort:** Orta (M)
- **localStorage:** `diet_flexibility` JSON object (yeni)
- **Sistem kuralları reaktif** — yasak yerine "esnek kategoriler"

---

## 7. AI CUSTOM FOOD ENTRY OPTİMİZASYONU

### 7.1 Mevcut Akış

```
Textarea: "öğlen 250g köfte yedim"
↓
Claude → makro tahmin
↓
Fit verdict: good/tight/over
↓
Kaydet
```

### 7.2 Önerilen Geliştirmeler

**1. Sesli kayıt entegrasyonu (mevcut voice logging, P2.7):**
```
[🎙️] "öğlen 250 gram köfte yedim ve yarım avokado"
↓ Web Speech API tr-TR
↓ Türkçe sayı parser
↓ Otomatik textarea fill
```

**2. Geçmiş arama / Quick Reuse:**
```
🔍 [arama]
Geçen 7 günde:
- 200g dana antrikot (6 kez, ort 480 kcal)
- 3 yumurta omlet (5 kez, ort 220 kcal)
- 50g feta (4 kez, ort 130 kcal)
↓
[Tek tap → öğüne ekle]
```

**3. Pattern Recognition:**
```
"200g dana antrikot" yazdığında:
↓
"Geçen 7 günde 6 kez yedın, ortalama 480 kcal.
 Aynı miktarda mı?"
[Evet — kaydet]  [Düzenle]  [Yeni hesap]
```

Bu **Claude API çağrısını azaltır** + **maliyeti düşürür** (~$0.001/öneri yerine cache'den okur).

**4. Foto + AI tahmin (Apple Health pattern):**
```
[📷 Yemek Fotosu]
↓ Claude Haiku 4.5 vision
↓ Yemek tanıma + makro tahmin
↓ Modal preview/edit
```

Bengisu tabakta yiyeceği görüp tahmini kabul edebilir.

### 7.3 Cycle-Aware AI Prompt

Mevcut sistem cycle context yolluyor. **Genişletme:**
- Cycle phase + Day
- Bu haftanın ortalama macro'su (pattern algılama)
- Önceki yemek (sabah ne yedi → öğlen önerisi)
- LDL 8.1 + FH şüphesi → doymuş yağ uyarı
- Lipid odaklı: omega-3 öncelik öneri

### 7.4 Implementation

- **Effort:** Orta-Büyük (M-L) — voice + foto + cache
- **Yeni helper:** `searchRecentFoods(query)`, `getFoodFingerprint(food, amount)`
- **Cache:** localStorage `food_cache` Map<hash, {kcal, p, f, c, count, lastSeen}>

---

## 8. BANA ÖNER OPTİMİZASYONU

### 8.1 Mevcut

Slot bazlı AI öneri (m1_main, m2_main, vb.) — kalan macro context'iyle.

### 8.2 Önerilen Geliştirmeler

**1. Saat-aware öneri:**
- 09:30 → "1. öğün için ne öneririm?"
- 16:30 → "2. öğün için ne öneririm?"
- 13:30 → "Pre-WO için 30g karb + protein"

**2. Cycle-aware öneri:**
- Folliküler: "performans food — biftek + sebze"
- Geç luteal: "mood food — yumurta + tryptophan + Mg"
- Regl: "demir + B12 — ciğer + limon + maydanoz"

**3. Bütçe-aware (UK fiyatları):**
```
3 alternatif öneri:
  Premium: Wild Salmon 200g + Avokado (£12)
  Orta:    Tesco Beef Mince 5% + Roka (£6)
  Budget:  3 yumurta + lor 80g (£2)
```

**4. AI'dan kıyas:**
```
"3 öneri arasından hangi en iyi?"
→ Claude şunu der:
"Salmon: omega-3 boost ✓ ama £12 pahalı
 Beef mince: pratik + lipid friendly (5% fat)
 Yumurta: budget + kolayProtein
 ➝ Bugün lipid odaklı ise: 'Beef mince + roka' önerim"
```

### 8.3 Implementation

- **Effort:** Küçük (S) — mevcut çağrı genişlet
- **Cycle-aware prompt:** zaten kısmen var, güçlendir

---

## 9. LİPİD TAKİP MODÜLÜ (YENİ KART)

### 9.1 Tasarım

```
┌──────────────────────────────────────┐
│  💗 Lipid Trendi                      │
│  ─────────────────────────────────  │
│  Aralık 2025 → Nisan 2026            │
│                                      │
│  Total: 7.1 → 9.6 mmol/L (+%35) ⚠️   │
│  LDL:   5.4 → 8.1 mmol/L (+%50) ⚠️   │
│  HDL:   1.2 → 1.0 mmol/L (-%17)      │
│                                      │
│  ─────────────────────────────────  │
│  ⚠️ Aile öyküsü (FH şüphesi):         │
│  • Dayı 18 yaşında ani kalp ölümü    │
│  • Anne yüksek kolesterol            │
│                                      │
│  Sıradaki: Lab tekrar 4-6 hafta      │
│  Hedef: LDL <5 mmol/L (FH bağlamı)   │
│                                      │
│  📅 Doktor randevu hatırlatıcı       │
│  [Randevu ekle]                       │
└──────────────────────────────────────┘
```

### 9.2 Trend Görselleştirme

- Mini line chart: total/LDL/HDL son 12 ay (SVG, sage/coral renkleri)
- Hedef bantı (LDL <3 sage zone, 3-5 mustard zone, >5 coral zone)
- "Bu hafta omega-3 hedefi 3+ porsiyon balık" reminder

### 9.3 Karnivor Topluluk Dogması Notu

**L2/L3 Bilim Modu paragrafı:**
```
🪞 Bu kart

Karnivor topluluğunda "LDL yükselişi normal, panik etmeyin" görüşü
yaygın. Bu görüş "Lean Mass Hyper-Responder" (Norwitz 2022) fenotipinde
geçerli olabilir, ama senin durumun farklı:

✗ BMI 27.6 (LMHR <25)
✗ HDL 1.0 (LMHR ≥2.0)
✗ FH şüphesi (anne+dayı genetik)
✗ sT3 ölçülmemiş (T3 yetersizliği LDL'i artırır)

Senin LDL 8.1 yorumun: tek faktörlü değil, çoklu sebep + genetik bileşen.
Statin "başarısızlık" değil, klinik bir araç.
```

### 9.4 Implementation

- **Effort:** Orta (M) — Yeni kart + chart + lab giriş formu
- **localStorage:** `lipid_log` `[{date, total, ldl, hdl, tg, apoB, lpa}]`
- **Renpho AI prompt'a entegre:** lipid trend context

---

## 10. ACHIEVEMENT GENİŞLEMESİ

### 10.1 Mevcut 6 Achievement

Yumurta-vor / Yeşillik Kraliçesi / Hidrasyon / Streak / Cycle Dostu / Akıllı Yiyici

### 10.2 Yeni Eklemeler (Bengisu Spesifik)

| Achievement | Kriter | Özellik |
|---|---|---|
| **🎉 Pazar Hak Ettin** | İlk 4 Pazar brunch tamam | Anti-kompulsif kabul |
| **🌿 T3 Dostu** | Selenium 30 gün streak | Otomimun farkındalık |
| **💗 Lipid Düşürücü** | 21 gün omega-3 + zeytinyağ shot | LDL odaklı |
| **🪞 Esneklik Kabulü** | Yasaklı liste 14 gün → esnek tarz | Anti-restraint |
| **🦴 Calciday Şampiyonu** | Hipopara 4 doz/gün 30 gün | Hipopara aktif takip |
| **🔬 Lab Takipçisi** | 3 ay arayla 2 lab teslim | Veriye dayalı yaşam |
| **🎯 5 Metrik Dengeli** | Kilo + Bel + Squat + Adım + Mood %80 hit, 4 hafta | Bütünsel ilerleme |

### 10.3 Anti-Kompulsif Dengesi

**Kritik:** Achievement **kompulsif tetikleyici** olabilir. Bengisu'nun emotional eating yok diye söyledi (B4) — risk düşük, ama yine de:
- "Streak" yerine "Akış" kelimesi (Bengisu seçimi)
- Eksik gün → "kayıp" değil "molanın bir parçası"
- Pazartesi reset = telafi YOK (sistem bilir)

---

## 11. CYCLE-AWARE DİYET TONU GENİŞLEME

### 11.1 Faz × Besin Önerisi Görsel Kart

```
┌──────────────────────────────────────┐
│  Bugün: Folliküler · Day 14          │
│  ─────────────────────────────────  │
│  🌱 Genç Kız enerjisi                 │
│                                      │
│  Bu Faz İçin:                         │
│  ✦ Kalori: 1750 (taban)              │
│  ✦ Protein: 90g                       │
│  ✦ Karb: 30g (post-WO)               │
│                                      │
│  Önerilen Yemekler:                   │
│  • Biftek + roka (performans)         │
│  • Somon + sebze (omega-3)            │
│  • Yumurta + lor + avokado            │
│                                      │
│  💡 Bilim Notu (L2):                  │
│  Folliküler östrojen yükselişi        │
│  protein sentezi destekler.           │
│  Ovulasyon yaklaşırken kollajen +     │
│  C vit ligament desteği önemli.       │
└──────────────────────────────────────┘
```

### 11.2 Maisie Hill / Stacy Sims Arketip Referansları

- **Folliküler "Genç Kız":** Performans, deneme, yenilik
- **Ovulasyon "Anne":** Doğurgan, paylaşma, sosyal
- **Luteal "Bilge Kadın":** Geri çekilme, yargılama, planlama
- **Regl "Cadı":** Gerçeği gör, kabul et, dinlen

Bu arketip dil mevcut sistemde kısmen var — diyet sekmesinde **özel kart** olarak genişlet.

### 11.3 Implementation

- **Effort:** Küçük-Orta (S-M) — Mevcut faz mesajları + arketip + öneri
- **Bilgi kaynağı:** Maisie Hill "Period Power", Stacy Sims "ROAR"

---

## 12. BİLİM MODU LAYERED INFORMATION

### 12.1 Mevcut

L1 (sade default) → L2 (orta) → L3 (ileri) toggle. Diyet sekmesinde 3 kart "Bu kart" L1 paragrafları.

### 12.2 Önerilen Genişleme

**Macro ring tıklandığında:**

L1 (default):
```
🪞 Bu Macro Hedefi

Bugün 1750 kalori hedefin (kilo verme açığı sürdürülebilir).
Cycle fazına göre +50/+100/+150 kcal değişir.
Hedef üst sınır değil — alt sınır gibi düşün.
```

L2:
```
Brzycki tabanlı kalori hesabı:
TDEE 2200 kcal × %20 deficit = 1760 kcal taban.
Cycle bonusu BMR varyasyonu için (+%5-12 luteal).
Macro: 1.8g/kg LBM protein, 0.8g/kg yağ, geri kalan karb.
```

L3:
```
Mountjoy 2023 RED-S thresholds:
EA = (intake - exercise EE) / FFM
Hedef ≥45 kcal/kg FFM (sağlıklı).
Tiroidektomi konteksti: hedef ≥40 kcal/kg.
Mevcut EA tahmin: 26.4 kcal/kg (KLINIK ALTI).
Çözüm: egzersiz 30% azalt + kalori 1900 (EA 31).
```

**Pazar brunch tıklandığında:**

L2/L3:
```
Refeed bilim (Trexler 2014, Helms 2014):
- Haftalık 1 öğün +600-800 kcal → leptin akut yükselir
- Adaptive thermogenesis (Müller 2016) hafifletir
- T3 koruma RCT zayıf, leptin RCT güçlü
- MATADOR (Byrne 2018): kesintili > sürekli kalori açık
```

**Lipid kartında:**

L3:
```
Karnivor LMHR vs FH ayrımı:
- Norwitz 2022 LMHR: BMI<25, HDL≥80, TG≤70
- FH: anne+dayı genetik, LDL>4.9
- Bengisu profili FH şüphesi (LMHR değil)
- Aksiyon: LDLR/APOB/PCSK9 testi, Lipidolog
```

### 12.3 Implementation

- **Effort:** Küçük (S) — mevcut Bilim Modu altyapı genişlet
- **Yeni içerik:** macro/refeed/lipid L2/L3 metinleri

---

## 13. EMPTY/ERROR STATE + ONBOARDING

### 13.1 Empty States

**Henüz hiç custom food girilmemiş:**
```
🌱 Henüz yemek kaydı yok

Custom Food Entry ile başla:
"öğlen 200g köfte yedim, yarım avokado"
↓ Claude AI tahmin
↓ Onayla, kaydet

[Voice] [Foto] [Yazılı]
```

**AI key eksik:**
```
🔑 AI öneri için Anthropic key gerekli

Tek seferlik kurulum (5 dakika):
1. console.anthropic.com → Get API Key
2. Buraya yapıştır: [_____]
3. Kaydet

[Detaylı rehber]
```

**Cycle log yok:**
```
🌸 Cycle log eksik

Diyet önerileri cycle phase'e göre değişir.
Hızlı kurulum:
[Son periyod tarihini gir]
```

### 13.2 Onboarding Update (yeni esneklikler)

3-kartlı wizard (Bölüm 6.3'te detayı):
1. Profil (Strict/Modifiye/Animal-Based)
2. Esneklikler (multi-select)
3. Pazar Brunch tercihi

---

## 14. MOCKUP-STYLE SAYFA AKIŞI (üstten alta)

### 14.1 Sabah (07:00-10:00)

```
┌──────────────────────────────────┐
│ 🌅 Hero Card: Sabah Modu        │
│ • Levotiron ✓ ViDrate ✓ EVOO →  │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Cycle Strip: Folliküler Day 14  │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Macro Ring: KALAN ODAKLI         │
│ 1240 kcal · 75g P · 65g Y       │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ 1. Öğün Hazırla (10:00)         │
│ Yumurta + lor + avokado + roka  │
│ [Bana öner]                     │
└──────────────────────────────────┘
[scroll ↓]
┌──────────────────────────────────┐
│ Supplement Timeline Slider       │
│ ŞİMDİ → Calcitriol 09:30        │
└──────────────────────────────────┘
```

### 14.2 Öğle (10:00-15:00)

```
┌──────────────────────────────────┐
│ ☀️ Hero: Öğle Modu              │
│ ✓ 1. öğün · □ Pre-WO · □ 2. öğün│
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Macro Ring: 800 kalan kcal       │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Pre-WO 14:00 Önerisi            │
│ 30g karb (1 yk bal + kivi) +    │
│ 15-25g protein                   │
└──────────────────────────────────┘
```

### 14.3 Akşam (19:00-23:00)

```
┌──────────────────────────────────┐
│ 🌙 Hero: Akşam Modu             │
│ Bugünü Kapatma                   │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Bugünün Özeti                    │
│ ✓ ✓ ✓ Toplam 1750 kcal · 90g P│
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Achievement Bugün                 │
│ 🌿 T3 Dostu (Selenium 5/30)     │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Sıradaki Supplements             │
│ 21:00 Calcitriol · 22:00 Zn     │
│ 23:00 Mg + Kolajen              │
└──────────────────────────────────┘
```

### 14.4 Pazar Brunch

```
┌──────────────────────────────────┐
│ 🎉 Pazar Brunch'ı                │
│ İyi eğlenceler! Hak ettin.       │
│ Coral burst arka plan            │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Bu hafta seçimin:                │
│ 🇹🇷 Türk · 🇮🇹 Akdeniz ·         │
│ 🥩 Steakhouse · 🐟 Balık         │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│ Makro takibi gizli                │
│ Pazartesi reset normal           │
└──────────────────────────────────┘
```

---

## 15. KESİNLİKLE ÇIKARILACAK ŞEYLER (Cruft)

1. **"YASAK" kelimesi tüm UI'da** — "tercih değil", "şu an seçim", "esnek alan" reframe
2. **"İhlal" / "Telafi" / "Disiplin kaybı"** dili — pasif/yumuşak ton
3. **Sade yağ önerileri** — sistemde geri kalan referanslar (8 May Bengisu kararı)
4. **Strict 1. öğün ET YOK kuralı** — 8 May esneklik ile değişti
5. **Sistem prompt'larında "Kreatin alıyor" + "B-Complex alıyor"** — Bengisu **almıyor**! Tüm AI prompt'larda düzeltme şart
6. **"Hipopara YOK, Calciday profilaktik" varsayımı** — kod 3 yerde yanlış (PROGRESS.md güncel doğru)
7. **Eski "Yemek Yedim" çift onay** — tap-to-confirm tek tap yeterli (UX cumber)

---

## 16. BENGİSU'NUN DÜŞÜNMEDİĞİ 2 UX NÜANSI

### 16.1 Nüans 1: Diyet Sekmesi "Karar Yorgunluğu"

**Gözlem:** Bengisu yazılım geliştirici (sürekli karar yorgunluğu işten). Diyet sekmesi açıldığında, **karar SAYISI artarsa kullanım azalır**.

**Aksiyon:**
- "Bana Öner" butonları **default + cycle-aware**, fazla seçenek değil
- Pazar brunch 4 hazır şablon (yazmaya zorlama)
- Supplement "Aldım" tek tap (zaman + doz checkbox değil)
- Lipid takip pasif (lab girince otomatik chart)

### 16.2 Nüans 2: "Sosyal Diyet Görselleştirme"

**Gözlem:** Bengisu UK'de eş+arkadaşlarla restoran haftada 1-2. Bu sistemde **görünmez** — diyet sadece kişisel görünüyor.

**Yeni Mod (P1):**
```
🍽️ Sosyal Yemek Modu
- Eş ile akşam yemeği toggle
- Restoran 4 senaryo template (steakhouse/Türk/pub/vegan)
- "Kalori taban koru, macro esnek ±%15"
- "Pazartesi reset normal, telafi YOK"
- Türkçe + İngilizce sipariş template
```

Bu daha sosyal-aware bir sistem yapar — Bengisu'nun yaşam tarzına uyum.

---

## 17. PHASE 3.C IMPLEMENTATION EFFORT TAHMİNİ

| Özellik | Effort | Etki | Risk | Priority |
|---|---|---|---|---|
| Sabah Hero Card | Orta (3-4 gün) | ⭐⭐⭐⭐⭐ | Düşük | **P0** |
| Kalan vs Tüketim Reframe | Küçük (1-2 gün) | ⭐⭐⭐⭐ | Düşük | **P0** |
| Pazar Brunch Festival Card | Küçük (2 gün) | ⭐⭐⭐⭐ | Düşük | **P0** |
| Supplement Slider UI | Büyük (1-2 hafta) | ⭐⭐⭐⭐ | Orta | **P1** |
| Yasaklı Liste + Onboarding | Orta (3-4 gün) | ⭐⭐⭐ | Düşük | **P0** |
| Lipid Takip Modülü | Orta (4-5 gün) | ⭐⭐⭐⭐⭐ | Düşük | **P0** |
| AI Custom Food Voice + Foto | Büyük (1-2 hafta) | ⭐⭐⭐ | Orta | **P1** |
| Bana Öner Cycle-Aware | Küçük (1-2 gün) | ⭐⭐⭐ | Düşük | **P1** |
| Achievement Yeni 7 Rozet | Küçük (1-2 gün) | ⭐⭐ | Düşük | **P2** |
| Bilim Modu L2/L3 İçerik | Orta (3-4 gün) | ⭐⭐⭐ | Düşük | **P1** |
| Empty/Error State + Onboarding | Orta (3-4 gün) | ⭐⭐⭐ | Düşük | **P1** |
| Sosyal Yemek Modu | Büyük (1-2 hafta) | ⭐⭐⭐⭐ | Orta | **P1** |
| **TOPLAM P0 efforti** | **2 hafta** | | | |
| **TOPLAM P0+P1** | **5-6 hafta** | | | |

---

> **DİSCLAIMER:** Bu UX raporu mevcut Akşam Bahçesi tasarım sistemini koruyarak yazılmıştır. Implementation öncesi Bengisu'nun final onayı gerekir. Mockup'lar metinsel açıklamadır, kesin pixel-perfect değildir.
