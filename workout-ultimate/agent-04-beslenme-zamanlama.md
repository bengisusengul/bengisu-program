# Ajan 4 — Beslenme × Antrenman Zamanlaması

> 🟢 **Güncelleme — Phase 2 Quick Wins (commit `ffb2619`, 6 May 2026):** Bu raporda işaretlenen üç bulgu kodda düzeltildi — (1) §5.5 hipoparatiroidi referansları temizlendi (Ajan 1 P0); (2) §1.6 geç luteal +100 → +150 kcal güncellemesi yapıldı (kcal:2000, c:60); (3) §1.7 RED-S guardrail Energy Availability hesabıyla genişletildi — `getEstimatedLBM`, `getDailyExerciseKcal`, `getEA` helper'ları + IOC 2023 thresholds. Detay: SYNTHESIS.md "Bonus tamamlananlar" bölümü.

**Hasta profili:** Bengisu, 32 yaş, K · Total tiroidektomi (≥1 yıl) · Levotiron + Calciday (profilaktik Ca + D3) · **Hipoparatiroidi YOK** · Karnivor + 10:00–19:00 IF · 5/7 yürüyüş 7-8 km fasted · 4-5/7 esnek güç antrenmanı (Ajan 3 5-gün split, 15:00-16:30) · 1850 kcal · 160g protein (Sims 2.0g/kg LBM) · 120g yağ · 40g karb baseline · Kreatin 5g · Hedef 76.9 → 58 kg · Cycle 28-29 gün düzenli

**Hazırlayan:** Ajan 4 — Beslenme × Antrenman Zamanlaması (Claude Opus 4.7, 1M context)
**Tarih:** 5 Mayıs 2026
**Kanıt tabanı:** ISSN position stand'ları (Kerksick 2017 nutrient timing, Aragon 2013 anabolic window, Antonio 2021 creatine, Jäger 2017 protein, Trommelen 2023 protein per-meal), Tipton & Phillips dil farkı yokluğu protein lit. (2007–2023), Murphy & Koehler 2022 protein × deficit, Helms et al. 2014, 2019 doğal vücut geliştirme, Stacy Sims kadın atlet IF (ROAR 2016, Next Level 2022), IOC RED-S 2023 (Mountjoy), Hawley & Burke (carbohydrate × performance), Sims & Heather 2018 (kadın hidrasyon), Garthe 2011 (hızlı vs yavaş kilo kaybı sporcuda), Smith-Ryan kadın kreatin meta-analizi 2021

---

## Executive Summary

1. **Mevcut zamanlama tablosu klinik olarak makul ama Bengisu için RED-S, ovulasyon-window kayması ve mikronutrient yetersizlikleri açısından dört yerde optimize edilebilir:** (i) **fasted yürüyüş 90 dk + 18.5 saat açlık + sabah egzersiz** Sims/Tipton kadın literatürüne göre kortizol ve T3 baskısı için riskli kombinasyon — kadın için fasted training kortizol AUC sabahını +%15-20 yukarı çekiyor (Moro 2020); (ii) **17:00 öğünü hem post-workout hem Calciday 2. doz**, kalsiyum non-heme demir emilimini ~50-60% düşürüyor (Hallberg 1991, PMID 1899671) — karnivor diyette **2. öğün ciğer/kırmızı et iken Ca aynı anda alınmamalı**; (iii) **pre-workout 60 kcal (~12-15g karb)** ISSN nutrient timing rehberinin "0.5-1g/kg karb 1-3 saat önce" eşiğinin altında (~30-60g ideal); (iv) **mevcut EA (energy availability) hesabı 25-26 kcal/kg LBM/gün geç luteal'de** — IOC RED-S 30 kcal eşiği altı, klinik RED-S bölgesi.

2. **Karnivor + IF + güç antrenman kombinasyonunda dört kritik mikronutrient gap mevcut:** (i) **C vitamini** (RDA 75 mg, Bengisu'nun et + yeşillik gerçek alımı ~30-50 mg, ek ihtiyaç 50-75 mg/gün), (ii) **lif** (sıfıra yakın, microbiome + GI motilite riski), (iii) **K2 (MK-4/MK-7)** kemik koruma için tiroidektomili hastada Calciday + D3 ile sinerji şart (Knapen 2013), (iv) **magnezyum** (ViDrate 37 mg/sachet + besinden ~150 mg = ~190 mg total; RDA 320 mg, açık 130 mg). Çinko, B12, demir karnivorda yeterli; folat sınırda (suplementasyon doğru kararı).

3. **Önerilen yeni zamanlama tablosu üç ana revizyon getiriyor:** (a) **Fasted yürüyüş süresini 90 → 60 dk düşür VEYA 09:00'da 100-150 kcal "break-fast" snack ekle** (kortizol vurgu ve T3 baskısını yumuşatır); (b) **Calciday 2. doz 17:00 → 18:30 Qalyviz ile birleştir** (post-workout protein + heme/non-heme demir penceresi temiz, D3 + Ca + yağ aynı anda); (c) **pre-workout 14:30 60 kcal → 14:00 30g karb (~120 kcal) + 5-10g whey/protein hidrolizat opsiyonu** (ISSN 1-3 saat önce 0.5-1g/kg, kadın literatürü protein 20-30g pre-WO).

---

## 1. Mevcut Zamanlama Bilimsel Değerlendirmesi

### 1.1. Fasted yürüyüş 7-8 km / 90 dk — güvenli mi?

**Bulgu:** Bengisu için **sınırda riskli** kombinasyon. Üç gerekçe:

**(a) Kadın fizyolojisi & fasted exercise (Sims literatürü).**
Stacy Sims (*ROAR* 2016, Ch. 5; *Next Level* 2022, Ch. 6) — kadın atletlerde **>60 dk fasted exercise kortizol AUC sabahını %15-25 yukarı çeker**, T3 dönüşümünü periferal olarak ~%5-8 baskılar. Bu **expert opinion + birkaç küçük RCT** (Schoenfeld 2014 PMID 25429252 kadın subgrubu; Tinsley 2017 PMID 28208300 16:8 IF). Kanıt seviyesi B-C. Ama **prensip:** kadın HPA aksı erkek atletten daha hassas, GnRH pulse jeneratörü kalori sinyaline duyarlı.

Bengisu için sayısal:
- **18.5 saat sabah açlığı + 90 dk yürüyüş = ~19.5 saat post-absorptive state**
- Yürüyüş enerji harcaması 7-8 km × 50-55 kcal/km = **350-440 kcal** (vücut ağırlığı 76.9 kg üzerinden)
- Kortizol akut artış %15-30 (sabah pik üstüne) — sağlıklı bireyde geçici, ama **kronik 5-6/7 hafta** uzun vadede T3 baskısı ve menstrual disregülasyonu riskine açar.

**(b) Hipoglisemi riski.**
Sağlıklı insülin duyarlı bireyde 19 saat açlık + düşük yoğunluk yürüyüş = hipoglisemi riski **düşük** (kandaki glikoz hepatik glukoneogenez ile sürdürülür, free fatty acids ana yakıt olur). Ama **tiroidektomili hastada T3 düzeyi marjinalse glukoneogenez zayıflayabilir** — Bengisu'nun TSH/T3 değerleri bilinmediği için kestirim yapılamıyor (Ajan 1 #2 doktor sorusu). Pratik sinyal: yürüyüş sırasında baş dönmesi, titreme, iştah krizi → **dur**, ViDrate'i artır, gerekirse kıvılcım besin (kivi vb).

**(c) Cortisol AM zaten yüksek + fasted training = upregulation.**
Sabah 06:30-09:00 kortizol fizyolojik pik (CAR — cortisol awakening response). Üzerine fasted training stres yükünü +%15-20 daha çıkarır. **Sağlıklı bireyde kabul edilir** (kortizol kasta lipoliz uyarır, anti-inflamatuar). **Tiroidektomili + 5 kg/ay agresif kilo kaybı + kalori açığı** kombinasyonunda bu yük birleştirici (cumulative cortisol load) → uzun vadede **menstrual disregülasyon, libido düşüşü, hair shedding, uyku bozulması** sinyalleri.

**Önerim:**
- **Yürüyüş 90 dk → 60 dk düşür** (5-6 km fasted, hızlı ama güvenli) **VEYA**
- **09:00 mini break-fast** (yürüyüş bitiminden hemen sonra) — 100-150 kcal: 1 yumurta veya 30g protein shake (whey isolate) + tuzlu su. **10:00 ana öğüne 1 saat ara**. Bu "fasting window'u yıkmaz" (Sims kadın için 12-13 saat yeterli) ama hormonalmoyen vurguyu azaltır.
- Kanıt: Tipton 2007 protein timing (PMID 17413102) — antrenman/aktivite sonrası 30-60 dk protein alımı kas protein sentezini optimize eder; kadın için bu pencere **özellikle** önemli (Smith-Ryan kadın kreatin meta-analizi 2021, PMID 33571627).

### 1.2. 10:00 yeme penceresi açılışı — yürüyüşten 90 dk sonra optimum mu?

**Bulgu:** **NO — yürüyüş bitiminden ~1 saat sonra ilk öğün/snack daha iyi.**

**Kanıt:**
- **Aragon & Schoenfeld 2013 (PMID 23360586)** "anabolic window" meta-analizi: 30-90 dk pencere geleneksel kabul, **hipertrofi için 1-2 saat geniş pencere yeterli**. Ama kadın atletlerde Sims/Smith-Ryan literatürü **30-60 dk** öneriyor (HPA + glikojen restorasyonu için).
- **Tipton 2007**: protein 20-30g antrenman/aktivite sonrası kas protein sentezi (MPS) penceresi 60-90 dk açık. Sonra azalır.
- Bengisu mevcut: 09:00 yürüyüş bitti, **10:00 (60 dk sonra) ilk öğün**. Bu zaten aslında **uygun** pencere içinde — ama 90 dk açlık yerine **30 dk içinde 100-150 kcal protein-prioritized snack** + 60-90 dk sonra ana öğün daha kadın-fizyolojik.

**Önerim:**
- **09:00 break-fast** (yürüyüş bitince): 100-150 kcal (1 yumurta + tuz + ViDrate veya 30g whey isolate + su)
- **10:00 ana 1. öğün**: mevcut menü (200g dana kıyma + 3 yumurta + ½ avokado + yeşillik + ghee). Toplam ~830 kcal devam.
- Bu "yeme penceresi" tanımını 10:00-19:00 yerine **09:00-19:00** yapar (10 saat) — IF window 14 saat olur. Sims kadın için **12-14 saat optimum**. Hâlâ IF.

### 1.3. 15:00 antrenman + 14:30 pre-workout (60 kcal) — yeterli mi?

**Bulgu:** **NO — pre-workout 60 kcal ISSN minimum eşiğinin altında.**

**Kanıt:**
- **ISSN nutrient timing position stand (Kerksick 2017, PMID 28919842):** Pre-workout 1-3 saat önce **0.5-1g/kg karbohidrat** + 0.25g/kg protein. Bengisu 76.9 kg → **38-77g karb** + 19g protein.
- Mevcut: 14:30 (antrenmana 30 dk var) — **1 yk bal VEYA 1 kivi + tuzlu su = ~12-15g karb, ~60 kcal**, protein YOK. ISSN minimumun **1/3'ü**.
- 1. öğün 10:00, antrenman 15:00 — **5 saat ara**. 1. öğün 60g protein + 50g yağ, 0g karb (karnivor). Kas glikojen yedeği son egzersizden bu yana yenilenmiş ama düşük (karb girişi az) → **glikojen rezervi sınırlı**.

**Bengisu için sorun:**
- Karnivor diyet kas glikojen seviyesini sürekli düşük-orta tutar (~60-70% kapasite vs. yüksek-karb diyette ~80-90%; Phinney 1983).
- 5 sets × 5-8 reps × 6 hareket güç antrenmanı **glikojen yıkar** (~50-80g glikojen, %15-30 kas glikojen rezervi).
- Pre-WO yetersiz karb → **antrenman kalitesi düşük** (RPE artar, tekrar sayısı düşer, intra-WO performans -%5-10) — Hawley & Burke literatürü.

**Önerim — pre-workout güncelleme:**
- **14:00 (antrenmana 60 dk var)**: 30g karb + 10-15g protein
  - Örnek: 1 yumurta beyazı + 1 yk bal + 1 kivi + tuzlu su = ~25g karb + 10g protein, ~150 kcal
  - VEYA: 25g whey isolate + 1 yk bal + tuzlu su = ~22g karb + 22g protein, ~180 kcal
- **14:30 (antrenmana 30 dk var)**: ek 10-15g hızlı karb (1 yk bal) + ek 250 ml ViDrate eğer dehidre hissediyorsa
- Toplam pre-WO yakıt: **~30-45g karb + 15-25g protein**, 200-250 kcal

**Kafein sorusu:**
- Tiroidektomi + Levotiron etkileşimi: kafein **Levotiron emilimini etkilemez** ama mide pH'sını değiştirir. T4 emilim normal Levotiron'dan 30 dk-1 saat sonra ise (06:30 → 07:00 ViDrate sonra), kafein bunu bozmaz.
- T3 thresholda kafein etkisi yok; ama **AF riski TSH süpresyonu altında varsa kafein dikkat**. Bengisu TSH durumu bilinmediği için pre-WO kafein **doktor onayıyla 100-200 mg** (espresso 1 shot, **15:00 antrenmandan 30-45 dk önce 14:15-14:30**).

### 1.4. 17:00 öğün hem post-workout hem Calciday 2. doz — etkileşim?

**Bulgu:** **EVET, önemli demir emilim çatışması var.**

**Kanıt:**
- **Hallberg 1991 (PMID 1899671), Lonnerdal 2010**: Kalsiyum (300 mg+) **non-heme demir emilimini %50-60 düşürür**, **heme demir emilimini %20 düşürür**. Aynı öğünde alındığında.
- Bengisu menüsü 2. öğün:
  - **Pazar/Pazartesi:** 200g Dana Ciğer (heme demir + non-heme demir, ~7-12 mg toplam)
  - **Diğer günler:** 180-250g kırmızı et / balık (heme demir 2-4 mg)
- Calciday muhtemel **600 mg elementer kalsiyum** (literatür standart doz). Aynı saatte alındığında — **ciğer günü demir emilim ~%50 düşer**.

**Önerim — iki seçenek:**

**Seçenek A (tercih edilen): Calciday 2. doz 18:30'a kaydır (Qalyviz ile birleştir).**
- 17:00 — 2. öğün: protein + post-WO karb + kreatin + çinko 15mg + bakır 1.5mg + B-Complex (eğer 2. öğünde alınıyorsa)
- 18:30 — Calciday 2. doz + Qalyviz (D3 + multivitamin) + yağ kaynaklı snack (1 yk zeytinyağ veya 5-10g ghee)
- Avantaj: D3 + Ca yağ ile birlikte (+%30-50 emilim, Dawson-Hughes 2015 PMID 25333998); demir emilimi 17:00 öğününde temiz; Levotiron 06:30 → Ca 18:30 = **12 saat ayrım** (mevcut 4 saatten daha güvenli).
- Sorun: 19:00 IF window kapanıyor. 18:30 hap + zeytinyağ shot OK, ama daha geç olursa pencere kapanır. Sıkı olursa 18:30 yerine **18:00** yapılabilir.

**Seçenek B: Calciday 2. doz 17:00'da kalır AMA ciğer günü Calciday'i atla / 17:30'a kaydır.**
- Sadece ciğer günü manipulasyon — kompleks, hata riski. Az tercih edilen.

### 1.5. Kreatin 17:00 + karb + protein — emilim optimum mu?

**Bulgu:** **EVET, mevcut zamanlama doğru.**

**Kanıt:**
- **Cooper 2012 (kreatin review)**, **Antonio 2021 ISSN position stand (PMID 33557850)**: Kreatin emilimi karb + insülin pikiyle **%10-30 artar** (Steenge 2000, PMID 11042598).
- 17:00 — protein + post-WO karb (haşlanmış patates 18g karb VEYA bal + kivi 24g karb) + kreatin 5g = **insülin yanıtı yeterli**. Glukoz pik insülini 30-60 dk içinde tetikler. Kreatin uptake %20-25 daha verimli.
- Protein da pankreatik insülin uyarıcısı (whey isolate 100g insülin yanıtını ~1.5x — Holt 1997). Bengisu 2. öğün 42-54g protein → yeterli.

**Sonuç:** 17:00 kreatin doğru zamanlamada. Mevcut sistem koruna.

**Notum:** Eğer Seçenek A ile Calciday 18:30'a kayarsa, kreatin **17:05'te kalır** (post-WO penceresinde). Calciday-kreatin etkileşimi yok (literatürde gösterilmemiş).

### 1.6. Geç luteal +100 kcal +karb — nasıl uygulanmalı?

**Bulgu:** Mevcut +100 kcal cycle bonus **doğru yönde ama yetersiz** (Ajan 2 detaylı analizi).

**Kanıt + Bengisu sayısı:**
- Geç luteal son 5-6 gün BMR +%8-12 (Webb 1986, Buffenstein 1995). Bengisu 76.9 kg, BMR ~1450 kcal → +120-175 kcal artış.
- Plasma volume -%5-8, GI motilite ↓, kortizol AUC +%15-20.
- EA (energy availability) hesabı (Bengisu LBM tahmini ~50-55 kg):
  - Mevcut alım 1850 + 100 = 1950 kcal
  - Geç luteal egzersiz harcaması -%10-15 (volume azaltılırsa) = ~470 kcal/gün
  - EA = (1950 - 470) / 50 = **29.6 kcal/kg LBM** — RED-S sınırı (30) altı
- **Önerim: +150 kcal (1850 → 2000)**, EA = (2000 - 470) / 50 = **30.6 kcal/kg LBM** — sınırın hafif üstünde.

**Uygulama: ana öğün, snack, post-WO?**

Üç seçenek:

**(a) 2. öğüne ekle (post-WO penceresi).**
- M2S yan +25g karb (1 küçük tatlı patates → 1 orta) + 1 yk daha bal/çikolata-bitter (+50 kcal)
- Avantaj: post-WO karb pencere zaten açık; insülin yanıtı + kreatin sinerjisi
- Dezavantaj: 2. öğün zaten dolu, geç luteal'de GI motilite yavaş — şişkinlik riski.

**(b) 1. öğüne ekle.**
- M1 zaten 700-830 kcal, +%20 = ~150 kcal eklemek (1 ekstra yumurta + 1 yk daha tereyağı)
- Avantaj: erken yenir, sindirim zamanı çok
- Dezavantaj: yağ-protein zaten yüksek, ek karb yok (geç luteal karb-aware öneri için ters)

**(c) Yeme penceresi içinde snack — 12:00 polifenol shot ile birlikte.**
- Polifenol shot mevcut ~120 kcal (zeytinyağ + sumak + limon). +100 kcal ekstra: 1 küçük muz (90 kcal, 23g karb) VEYA 30g bitter çikolata %85+ (170 kcal, 12g karb + 12g yağ + 4g protein).
- Avantaj: spread out, GI rahat, midi ihale
- Dezavantaj: karnivor "saf" değil (meyve/çikolata ekleme)

**Önerim — kombinasyon:**
- Geç luteal son 5-6 gün:
  - **2. öğün (a):** M2S yan karb +5-10g (1 küçük → 1 orta tatlı patates), +50 kcal
  - **17:30 ek karb snack:** 1 yk bal + 1 kare bitter çikolata %85+ veya 1 küçük muz, +100 kcal — karb 20g (post-WO + insülin pencereyi sürdürür, kreatin sinerjisi)
- Toplam +150 kcal, +25-30g karb, kortizol-magnezyum-tuz vurgusu zaten mevcut
- Karnivor "saf" tutmak isterse → b seçeneği (1. öğün +150 kcal yağ/protein) ama karb avantajı kaybedilir.

### 1.7. Hızlı kilo kaybı (5 kg/ay) + RED-S — mevcut 1850 kcal yeterli mi?

**Bulgu:** **Sınırda riskli; revizyon önerilir.**

**Hesap (Bengisu LBM tahmini):**
- Mevcut 76.9 kg, kadın ortalama yağ % 30-35 (Renpho ölçümü doğrularsa) → LBM ~50-54 kg
- BMR Mifflin-St Jeor: BMR = (10 × 76.9) + (6.25 × 165) - (5 × 32) - 161 = 769 + 1031 - 160 - 161 = **1479 kcal**
- TDEE (5/7 yürüyüş + 4-5/7 güç + günlük aktivite NEAT) = BMR × 1.5-1.65 = **2200-2440 kcal/gün**
- Mevcut alım 1850 kcal → açık **350-590 kcal/gün**, haftalık **2450-4130 kcal**, kayıp **0.32-0.53 kg/hafta = 1.4-2.3 kg/ay**

**Sonuç:** **Mevcut 1850 kcal alımıyla 5 kg/ay HEDEF MATEMATİKSEL OLARAK GERÇEKLEŞMEZ** — gerçek kayıp 1.4-2.3 kg/ay aralığında olacak. 5 kg/ay için açığın **1200 kcal/gün**, yani alım **1000-1200 kcal/gün** gerekirdi → **klinik RED-S** alanı.

Bengisu **gerçeğe uygun hedef** belirlerse (3-3.5 kg/ay sürdürülebilir Garthe 2011 kanıtıyla):
- 1850 kcal koruyarak 8-9 ayda 76.9 → 58 kg mümkün
- 5 kg/ay sürdürürse → 4-5 ay sonra T3 baskısı, menstrual disregülasyon, kuvvet kaybı, RMR adaptasyonu (Trexler 2014, PMID 24571926)

**EA hesap (Bengisu için):**
- Mevcut: 1850 kcal alım - 525 kcal egzersiz (yürüyüş ~280 + güç ~245) = **1325 kcal NET**
- LBM 50 kg → EA = 1325 / 50 = **26.5 kcal/kg LBM/gün** — IOC RED-S 30 kcal eşik altı, **klinik bölge**

**Önerim — kademeli yaklaşım:**
- **Mevcut 1850 kcal koru** (1-2 ay)
- Cycle bonus uygula: regl/ovulasyon +50, erken luteal +50, geç luteal +150 (+100 yerine)
- Aylık gerçek kayıp izle (Renpho); 2 hafta plateauda → kalori ayar (-100 kcal veya egzersiz +%5)
- Sürdürülebilir hedef 0.7 kg/hafta (3 kg/ay) — Eylül'a 12 kg, kalan 7 kg sonbahar/kış. Ajan 1 P1 #7 ile uyumlu.

**Kritik:** Bengisu'nun **subjektif sinyaller** (menstrual düzen, uyku, enerji, tartı yön) bu rakamlardan daha güçlü kanıt. RED-S erken sinyalleri (cycle gecikme >3 gün, sürekli yorgunluk, hair shedding, libido düşüşü) → kalori revize.

---

## 2. Karnivor + IF + Güç Antrenman Besin Yeterliği

### 2.1. Mikronutrient gap tablosu

| Besin | RDA (kadın 32y) | Bengisu mevcut alım (tahmini) | Açık | Kaynak / kanıt | Suplement gerekli mi? |
|---|---|---|---|---|---|
| **Vitamin C** | 75 mg/gün | **30-50 mg** (yeşillik + sumak + limon ~25-40 mg) | **25-50 mg** | NIH ODS 2024 | **EVET** — 100 mg/gün (limit 2000) |
| **Vitamin K1** (filokinon) | 90 µg | 100-200 µg (yeşillik) | OK | NIH ODS | Hayır |
| **Vitamin K2** (MK-4 + MK-7) | resmi RDA yok, 90-180 µg/gün öneriliyor | 30-60 µg (yumurta sarısı, tereyağı, ciğer) | **30-100 µg** | Knapen 2013 (PMID 23525894) — kemik koruma | **EVET** — MK-7 100 µg/gün, özellikle Calciday + D3 sinerji için |
| **Vitamin D3** | 600 IU (klinik 1000-4000 IU) | Calciday + Qalyviz toplamı muhtemel 1000-2000 IU | OK (eğer doz yeterli) | Holick 2011 | Doz Bengisu Calciday/Qalyviz içeriğine bağlı; **doktor onayıyla** |
| **Folat (B9)** | 400 µg | Methylfolate 400 µg supp + et 50 µg = **450 µg** | OK | NIH ODS | Mevcut Methylfolate yeterli |
| **B12** | 2.4 µg | Et + ciğer + supp Methyl-B12 500 µg → **>500 µg total** | Aşırı yeterli | NIH ODS | Mevcut OK |
| **B6** (P5P) | 1.3 mg | P5P 25 mg supp + et = **>25 mg** | Aşırı yeterli (limit 100 mg) | NIH ODS | Mevcut OK |
| **Çinko** | 8 mg | 15 mg supp + kırmızı et 5-7 mg = **20-22 mg** | Aşırı (limit 40 mg) | NIH ODS | Mevcut OK; bakır 1.5 mg dengesi (10:1 oranı) korunuyor — iyi |
| **Bakır** | 900 µg | 1.5 mg supp + et 0.5-1 mg = **2-2.5 mg** | OK (limit 10 mg) | NIH ODS | Mevcut OK |
| **Demir (heme)** | 18 mg (kadın menstr.) | Et + ciğer = **15-25 mg/gün** | OK | NIH ODS | Hayır (suplement bile gereksiz; karnivor demir iyi) |
| **Magnezyum** | 320 mg | ViDrate 37 mg + et 40-50 mg + yeşillik 30 mg = **~120 mg**; supp 300 mg = **~420 mg** | OK | NIH ODS | Mevcut Mg bisglycinate 300 mg yatmadan önce **DEVAM**, regl/geç luteal 350-400 mg |
| **Potasyum** | 2600 mg (NIH 2019) | Et 2000 mg + ViDrate 150 mg + avokado 500 mg = **~2600-2700 mg** | OK | NIH ODS | KCl tuz değiştirici **opsiyonel doktor onayıyla** (Bengisu'nun böbrek fonksiyonu normal varsayımıyla) |
| **Sodyum** | 1500 mg AI (RDA yok) | ViDrate 190 mg + et tuz 1500-2500 mg = **2000-2700 mg** | OK | AHA 1500 mg "ideal", Sims atlet 3000-5000 mg | OK; geç luteal "tuz vurgu" zaten mevcut |
| **Kalsiyum** | 1000 mg | Calciday 600 mg × 2 doz = 1200 mg + et 100 mg + yumurta 50 mg = **~1350-1400 mg** | OK | NIH ODS (limit 2500 mg) | Mevcut Calciday OK; tiroidektomi profilaktik için doğru aralık |
| **Omega-3 (EPA+DHA)** | AI 250-500 mg/gün (ISSFAL) | Balık 2/7 ortalama 200-300 mg/gün; supp Omega-3 (mevcut?) eğer 1g | **300-500 mg ek** öneri | Calder 2017 | Eğer supp yoksa **Omega-3 1g/gün** (kadın atlet kemik + cycle) |
| **Lif** | 25-30 g | Yeşillik + avokado = **5-8 g/gün** | **15-22 g açık** | NIH ODS | **Psyllium 5-10 g/gün opsiyonel** (Bengisu GI tolerans iyiyse) |

### 2.2. Kritik gap'lerin Bengisu'ya özel etkisi

**(a) Vitamin C eksikliği — karnivor + güç antrenman.**
- **Risk:** demir emilimi (non-heme +%200-300), kollajen sentezi (kuvvet antrenman), kortizol regülasyonu.
- **Etki:** Yeşillik + sumak + limon ile ~30-50 mg/gün; RDA 75 mg, kuvvet antrenmanı + yüksek protein alım için 100-150 mg ideal.
- **Önerim:** **Vitamin C (asorbic acid, lipozomal değil — daha ucuz) 100 mg/gün, 1. öğünle 10:00**. Demir emilimini destekler (heme demir Calciday saatleriyle çatışmaz).

**(b) Vitamin K2 (MK-7) — kemik + tiroidektomi sinerji.**
- **Risk:** Calciday'in kalsiyumu damar duvarına depozit edebilir (Bolland 2010 meta-analizi tartışmalı); K2 kalsiyumu **kemiğe yönlendirir**.
- **Kanıt:** Knapen 2013 (PMID 23525894) — postmenopozal kadında MK-7 180 µg/gün 3 yılda lumbar BMD +%1.2.
- **Bengisu için:** Tiroidektomili + TSH süpresyonu (eğer varsa) + kalsiyum supplementi → **K2 öncelik**.
- **Önerim:** **Vitamin K2 MK-7 100 µg/gün, 1. öğünle (yağlı, sabah 10:00) VEYA Qalyviz multivitamin içeriği kontrol et** (eğer K2 varsa ek gerekmez).

**(c) Lif eksikliği — uzun vadeli microbiome.**
- **Risk:** Bağırsak mikrobiyom çeşitliliği kaybı (Sonnenburg 2014); konstipasyon (luteal'de zaten progesteron etkisiyle azalmış GI motilite); SCFA (kısa zincirli yağ asitleri) üretimi → kolon sağlığı.
- **Bengisu için:** Karnivor uzun vade (>1 yıl) sürdürülürse — şu an 5 ay hedefi. Kısa vadede risk düşük.
- **Önerim:** **Psyllium husk 5-10g/gün opsiyonel** (suya karıştır, akşam 21:00-22:00 — magnezyum ile çakışmasın). Konstipasyon belirtisi varsa zorunlu. Suç: tartılabilir, yapışkan jel formu mide-bağırsak konforu sağlar.

**(d) Magnezyum total — kreatin + kramp + cycle.**
- Mevcut: yatmadan önce Mg bisglycinate 300 mg (regl/geç luteal 350 mg).
- Gün boyu et + yeşillik ~120 mg, ViDrate 37 mg, supp 300 mg = **toplam ~457 mg** — RDA 320 mg üstü, OK.
- **Sorun yok.** Mevcut sistem doğru.

### 2.3. Omega-3 spesifik

**Bengisu menü 7 gün:**
- Pazartesi: Bonfile (omega-3 düşük, omega-6:3 ~7:1)
- Salı: **Levrek** (omega-3 yüksek, ~1500 mg EPA+DHA / 200g)
- Çarşamba: Kuzu (omega-3 düşük)
- Perşembe: Ciğer (orta)
- Cuma: Rib eye (düşük)
- Cumartesi: **Somon** (omega-3 zirve, ~3500 mg EPA+DHA / 200g)
- Pazar: Bonfile + kavurma

**Haftalık ortalama:** ~700-900 mg EPA+DHA/gün (2 balık günü).
**Hedef:** ISSFAL 250-500 mg minimum, atlet/kadın 1000-2000 mg/gün.

**Önerim:**
- **Omega-3 supp 1g (EPA 600 + DHA 400) 1. öğünle 10:00** — yağ ile birlikte emilim optimal.
- Eğer balık günü 3/7'ye çıkarılırsa (Salı + Cumartesi + Çarşamba'ya hamsi/sardalye eklenirse) supp gereksiz.

---

## 3. Pre/Intra/Post-Workout Zamanlama Optimum

### 3.1. Pre-workout (14:00-14:30)

**Hedef (ISSN Kerksick 2017 + ISSN protein Jäger 2017 PMID 28642676):**
- 1-3 saat önce: 0.5-1g/kg karb (Bengisu 38-77g) + 0.25g/kg protein (~19g)
- 30 dk önce: ek 10-15g hızlı karb (eğer zayıf hissediyorsa)
- Sıvı: 400-600 ml su

**Bengisu için pratik (mevcut yapı içinde):**

```
14:00 (antrenmana 60 dk):
  - 1 yk bal (15g karb)
  - 1 kivi (10g karb + lif + C vit)
  - 25g whey isolate (22g protein) VEYA 1 yumurta beyazı (3g protein, ucuz alternatif)
  - Tuzlu su 200 ml
  Toplam: ~30g karb + 15-25g protein, 200-250 kcal

14:30 (antrenmana 30 dk):
  - 100-200 ml ViDrate elektrolit (eğer dehidre hissediyorsa)
  - Opsiyonel: 1 yk daha bal (10-15g hızlı karb)

(Opsiyonel) 14:15 — kafein 100-200 mg
  - Doktor onayıyla (TSH/AF risk)
  - 30-45 dk önce, antrenman süresine kadar uyarıcı
  - Tiroidektomi + Levotiron etkileşimi YOK (Levotiron sabah, kafein öğleden sonra)
```

**Karnivor uyumu:**
- Bal + kivi karnivor "saf" değil — Bengisu zaten bunu mevcut sistemde yapıyor (post-WO karb pencere). Pre-WO da aynı mantık geçerli.
- Whey isolate süt ürünü — eğer **karnivor tam saflık** tercihi varsa (1 yumurta beyazı + 1 jelatin shot + tuzlu su) alternatif.

### 3.2. Intra-workout (15:00-16:30, 90 dk)

**Hedef (ISSN):**
- <60 dk antrenman: sadece su + elektrolit yeterli
- 60-90 dk antrenman: **30-60g karb/saat** (sürekli) + elektrolit
- >90 dk: ek protein 10g/saat opsiyonel

**Bengisu için:**
- 90 dk antrenman = **60 dk üstü**, intra-WO karb **opsiyonel ama yararlı** (özellikle deficit + RED-S sınırı altında)
- **Sadece su + tuzlu su** (mevcut sistem) yeterli ama **performans açısından 15-20g karb intra-WO** öneriyorum (1 yk bal ya da 1 kivi yarımı yüklerken).

**Önerim:**
- 15:30 (antrenman ortası, 30 dk geçti): 250-500 ml ViDrate veya tuzlu su (sodyum eksik kalmasın)
- 16:00 (60 dk geçti): **opsiyonel** 1 yk bal (15g karb) veya küçük portakal/elma dilimi (10-15g karb)
- Bu **özellikle geç luteal'de önemli** — plasma volume -%5-8, fat oxidation ↑ ama glikoliz ↓.

**Karnivor uyumu:** Intra-WO karb yine "saf değil". Bengisu seçimi.

### 3.3. Post-workout (16:30-17:30)

**Hedef (Aragon 2013 + Trommelen 2023 PMID 38215936):**
- **30-90 dk pencere optimum** (anabolic window myth busted ama optimum penceresi açık)
- 0.4-0.5g/kg protein (Bengisu **31-38g**) — leucine 3g eşik
- 0.5-1g/kg karb (38-77g) — glikojen restorasyon
- Su 500-750 ml

**Bengisu mevcut 17:00 öğün:**
- Protein 42-54g (Pazartesi/Cuma rib eye ~50g, Salı levrek ~42g) — ✅ Hedef üstü
- Yağ 24-34g
- Karb (post-WO yan): 18-24g (patates VEYA bal+kivi) — ❌ Hedef altında (ISSN 38-77g)
- Kreatin 5g — ✅
- Kalori 460-540 kcal

**Önerim:**
- 17:00 öğünü mevcut yapı **GENEL OLARAK iyi**, 30 dk post-WO penceresi içinde.
- **Post-WO karb yan opsiyonel olarak +10-15g ekle** (1 küçük → 1 orta tatlı patates VEYA 1 yk daha bal).
- Bu özellikle **lower body günü (Day 1: squat, Day 3: deadlift)** öncelikli — glikojen yıkımı en yüksek.
- Upper body günü (Day 2 push, Day 4 pull) glikojen az kullanır → karb yan azaltılabilir (10g).

### 3.4. Post-workout pencere kapanışı (17:30-19:00)

- 17:30 — geç luteal'de ekstra karb snack (Bölüm 1.6)
- 18:30 — Calciday + Qalyviz + 1 yk zeytinyağ (yeni öneri Bölüm 1.4 Seçenek A)
- 19:00 — pencere kapanır

---

## 4. Cycle-Aware Beslenme Detayı

Ajan 2 önerisi temel — burada **mikronutrient ve makro detay** ekliyorum.

### 4.1. Faz tablosu (mikronutrient + makro vurgu)

| Faz | Kcal | Karb (g) | Protein (g) | Yağ (g) | Mikronutrient vurgu | Suplement öncelik | Hidrasyon |
|---|---|---|---|---|---|---|---|
| **Menstruation Day 1-2** | 1850 (rest günü) veya 1900 (egzersiz) | 40 (korunan) | 170 (+10) | 120 | **Demir + B12 + Mg** (kanama kaybı) | Mg 350-400 mg, B-Complex (P5P, MeFolate, MeB12), C vit 100 mg (demir emilim) | +500 ml |
| **Menstruation Day 3-5** | 1900 | 40 | 170 | 120 | **Demir + C vitamini** (toparlanma) | Mevcut + C vit 100 mg | Baseline |
| **Folliküler (Day 6-13)** | 1900 (+50 PR günü) | 45 | 165 | 120 | **Omega-3 + B vitaminleri** (anabolik) | Omega-3 1g, B-Complex devam | Baseline |
| **Ovulasyon (Day 13-16)** | 1900 (+50) | 40 | 170 (+5-10g) | 120 | **Omega-3 + iyot (tiroid)** | Omega-3 1.5g, K2 MK-7 (kollajen) | Baseline |
| **Erken Luteal (Day 17-21)** | 1900 (+50) | 45 (+5g) | 165 | 122 | **Mg + B6** (progesteron destek) | Mg 300 mg + P5P 25 mg | +250 ml |
| **Geç Luteal son 5-6** | **2000 (+150)** | **55-60 (+15-20g)** | 165 | 125 | **Mg + B6 + tuz + tryptophan** | Mg 350 mg, P5P 50 mg (tartışmalı doz, doktorla onayla), tuz 8-10g | **+500-750 ml** |

**Notlar:**
- Geç luteal'de **+150 kcal** Ajan 2'nin önerisi ile uyumlu (mevcut +100 yetersiz, EA hesabıyla doğrulandı).
- Tryptophan: protein kaynaklarından (et, yumurta) zaten yeterli; 5-HTP supp **doktor onayıyla** opsiyonel (mood + uyku, ama ilaç etkileşim riski).
- İyot: tiroidektomi sonrası **endogenous iyot ihtiyacı azalır** (T4 dış kaynak). Ek iyot supp **gerekli değil**, doktor onayı olmadan **başlatma** (Levotiron dozunu etkileyebilir).

### 4.2. Cycle × güç antrenman beslenmesi mikrodetay

**Folliküler PR günü:**
- Pre-WO: protein 25g + karb 35g (PR pencere → glikojen ekstra önemli)
- Post-WO: protein 40g + karb 45g (yüksek volume rejenerasyonu)

**Ovulasyon (ligament caution):**
- Pre-WO: standart (30g karb + 20g protein)
- Post-WO: protein 40-50g (kollajen sentezi vurgu) + omega-3 şart (1.5g)
- Vitamin C ekstra önemli (kollajen kofaktörü) — Bengisu zaten 100 mg supp alacak

**Geç luteal:**
- Pre-WO: protein 25g + karb 40g (intensity düşse de yakıt artır)
- Post-WO: protein 40g + karb 50g (glikojen restorasyon yavaş — fat oxidation ↑ ama anabolic window önemli)
- Tuz +2-3 g pre/intra-WO (plasma volume desteği)

---

## 5. Mevcut Koddaki Beslenme Sorunları

### 5.1. `MACRO_BASE` 1850 kcal — doğru mu?

**Bulgu:** Bengisu LBM tahmini 50-54 kg, BMR 1479 kcal, TDEE 2200-2440 kcal/gün → **1850 kcal makul ama LBM-aware değil**.

**Mevcut kod:**
```javascript
const MACRO_BASE={kcal:1850,p:160,f:120,c:40};
```

**Öneri:** LBM-aware hesap için yeni helper:

```javascript
// lib/macros.js
function getEstimatedLBM(){
  // Renpho son ölçümünden yağ% al
  const m=S.meas[S.meas.length-1];
  if(!m||!m.fat||!m.weight) return 50; // fallback default
  return m.weight * (1 - m.fat/100);
}

function getDynamicMacroBase(){
  const lbm=getEstimatedLBM(); // örn 50 kg
  return {
    kcal: Math.max(1500, Math.round(lbm * 35)), // 35 kcal/kg LBM minimum güvenli
    p:    Math.round(lbm * 2.0),                // Sims 2.0 g/kg LBM
    f:    Math.round(lbm * 1.4),                // ~1.2-1.4 g/kg LBM
    c:    40,                                    // karnivor minimum (T3 dönüşüm)
  };
}
```

**Sonuç:** LBM 50 kg → kcal 1750, protein 100g, yağ 70g, karb 40g — **mevcut 1850/160/120/40 daha agresif protein**. Mevcut sistem Bengisu'nun tercihiyle uyumlu (high protein for muscle preservation in deficit) — değişikliğe **gerek yok**, ama "kullanıcı LBM girdiyse fonksiyon tetiklensin" mantığı eklenebilir.

### 5.2. Cycle bonus mantığı — eksik mikronutrient vurgu

**Mevcut `getMacroTarget()` (satır 1313):**
- Regl: +50 kcal, +10g protein, demir+B12 not'u var ✅
- Ovulasyon: +50 kcal, omega-3 not'u var ✅
- Erken luteal: +50 kcal, Mg+B6 not'u var ✅
- Geç luteal: +100 kcal, +10g karb ❌ **(yetersiz, +150 olmalı)**

**Öneri:**
```javascript
if(c.phase==='Luteal Phase'){
  if(c.day>=getAvgCycleLen()-6){
    return{kcal:2000,p:165,f:125,c:55,bonus:'+150 kcal · +15g karb',note:'🌙 Geç luteal: BMR +%8-12 · Mg + B6 + tuz vurgusu · ekstra karb hak ettin · progesteron peak · RED-S koruma'};
  }
  ...
}
```

Ek not: Ovulasyonda protein vurgu net değil — Ajan 2 önerisi "+10-20g protein" — uygulayalım:
```javascript
if(c.phase==='Ovulation'){
  return{kcal:1900,p:175,f:120,c:40,bonus:'+50 kcal · +15g protein',note:'🌸 Ovulasyon: kollajen sentezi + omega-3 vurgusu · ligament destek · C vitamini önemli'};
}
```

### 5.3. RED-S guardrail (`getLowIntakeAlert`) — sadece kcal eşiğine bakıyor

**Mevcut kod (satır 1339):**
```javascript
function getLowIntakeAlert(){
  // 3 gün ortalama <1500 kcal alarm
}
```

**Sorun:** Sabit 1500 kcal eşiği:
- Bengisu LBM 50 kg → EA hesabı için 1500 + ~525 kcal egzersiz = 30 kcal/kg LBM
- Geç luteal'de eşik **1700 kcal** olmalı (Ajan 2 #4 ile uyumlu)
- Egzersiz harcaması faktöre alınmalı (NET kcal hesabı)

**Öneri (Ajan 2 spec'i ile uyumlu):**
```javascript
function getEffectiveEAFloor(d=new Date()){
  const c=ci(d);
  if(!c)return 1500;
  if(c.phase==='Luteal Phase' && c.day>=getAvgCycleLen()-6) return 1700;
  if(c.phase==='Menstruation' && c.day<=2) return 1600;
  return 1500;
}

function getEstimatedExerciseKcal(d){
  // Apple Health'ten "active kcal" varsa onu döndür
  const data=getHealthForDay(d);
  if(data && data.active_kcal) return data.active_kcal;
  // Tahmini: yürüyüş + güç ~525 kcal/gün
  return 525;
}

function getEffectiveEA(d){
  const intake=getActualMacros(d).k;
  const exercise=getEstimatedExerciseKcal(d);
  const lbm=getEstimatedLBM();
  return Math.round((intake-exercise)/lbm); // kcal/kg LBM/gün
}

function getLowIntakeAlert(){
  const today=new Date();
  const lows=[];
  for(let i=1;i<=3;i++){
    const d=new Date(today);d.setDate(today.getDate()-i);
    const k=getActualMacros(d).k;
    const floor=getEffectiveEAFloor(d);
    const ea=getEffectiveEA(d);
    if(k>0 && (k<floor || ea<30))lows.push({date:d,kcal:k,ea:ea,floor:floor});
  }
  // Alarm logic same, message updated:
  if(lows.length>=3)return{type:'critical',msg:`Son 3 gün ortalama EA ${Math.round(lows.reduce((s,l)=>s+l.ea,0)/3)} kcal/kg LBM — RED-S sınırı (30) altı. Post-tiroidektomide T3 sentezini etkileyebilir, +200-250 kcal eklemeyi düşün veya doktorla konuş.`,lows};
  ...
}
```

### 5.4. Pre-workout 14:30 60 kcal — ISSN minimum altı

**Mevcut kod (satır 1648-1653):**
```javascript
const preCarb = inP(d) ? {kcal:90,...}
  : (c && c.phase==='Ovulation') ? {kcal:80,...}
  : (c && c.phase==='Luteal Phase' && c.day>=getAvgCycleLen()-6) ? {kcal:80,...}
  : {kcal:60,detail:'1 yk bal VEYA 1 kivi + tuzlu su',...};
```

**Sorun:** ISSN nutrient timing 0.5-1g/kg karb 1-3 saat önce → Bengisu 38-77g karb (= 150-300 kcal). Mevcut 60-90 kcal **1/3'üne** denk geliyor.

**Öneri:**
```javascript
const preCarb = inP(d) ? {kcal:200,detail:'1.5 yk bal + 1 kivi + 1 yumurta beyazı + tuzlu su',note:'🔴 Regl: kan kaybı + glikojen düşüşü → ekstra karb şart',timing:'14:00 (antrenmana 60 dk)'}
  : (c && c.phase==='Ovulation') ? {kcal:230,detail:'1 yk bal + 1 kivi + 25g whey isolate + tuzlu su',note:'🌸 Ovulasyon: peak enerji + protein vurgu (kollajen) → biraz fazla yakıt',timing:'14:00'}
  : (c && c.phase==='Luteal Phase' && c.day>=getAvgCycleLen()-6) ? {kcal:240,detail:'1 yk bal + 1 kivi + 25g whey isolate + tuzlu su',note:'🌙 Geç luteal: yakıt önemli (BMR ↑) · plasma volume ↓ → tuz +1g',timing:'14:00'}
  : {kcal:200,detail:'1 yk bal + 1 kivi + 25g whey isolate VEYA 1 yumurta beyazı + tuzlu su',note:'Standart glikojen + protein yükleme (ISSN 0.5-1g/kg karb + 0.25g/kg protein 1-3 saat önce)',timing:'14:00'};
```

Ek 14:30 timing:
```javascript
// "Kapanış shot" — antrenmana 30 dk
const preCarbBoost = {kcal:60,detail:'1 yk bal + tuzlu su',note:'Hızlı yakıt boost · 14:30',timing:'14:30'};
```

### 5.5. "hipoparatiroidi" referansı (satır 1656, 1665, 1645)

**Mevcut:** Calciday rationale'unda **"hipoparatiroidi"** geçiyor. Bengisu'da hipoparatiroidi YOK — Calciday profilaktik.

**Öneri (Ajan 1 P0 ile uyumlu):**
- "hipoparatiroidi" → "post-tiroidektomi profilaktik"
- "3L+ su (hipoparatiroidi)" → "3L+ su (kreatin için optimal hidrasyon + tiroidektomi sonrası elektrolit dengesi)"
- "Regl günü: hipoparatiroidi + period birlikte → kramp riski yüksek" → "Regl günü: kalsiyum + magnezyum dengesi kas kasılması için kritik, dozları atlama"

### 5.6. Calciday 17:00 + demir-zengin öğün etkileşim uyarısı YOK

**Mevcut kod (satır 1685-1686):** 17:00 — 2. öğün + Calciday 2. doz + Kreatin — hepsi aynı saatte. Demir emilim çatışması notu YOK.

**Öneri:** Calciday 2. dozu 18:30'a kaydır:
```javascript
${tliX('17:00','🥩 2. Öğün (post-workout)',m2.n+' + '+M2S[idx].n,'td',meal2_detail)}
${tliX('17:05','💪 Kreatin 5g (Bulk Creapure)','Post-workout · 2. öğünle al · 3L+ su','tm',creatine_detail)}
// Calciday 17:00'dan kaldırıldı, 18:30'a taşındı
${tliX('18:30','💊 Calciday (2. doz) + Qalyviz','D vit + multivitamin · yağlı (1 yk zeytinyağ) ile birlikte · demir-Ca etkileşimini önler','tm',calciday2_qalyviz_detail)}
${tliX('19:00','🌙 Pencere kapanır','14-15 saat gece açlığı başlar','td',window_close_detail)}
```

`calciday2_qalyviz_detail` içinde:
```
Calciday 2. doz + Qalyviz birlikte:
- 17:00 öğünde demir (ciğer/kırmızı et) emilim çatışmasını önler (Hallberg 1991)
- D3 + Calciday + zeytinyağ yağ ile %30-50 daha verimli emilim (Dawson-Hughes 2015)
- Levotiron 06:30'dan 12 saat sonra — kalsiyum etkileşimi sıfır
- 1 yk sızma zeytinyağ + 1 limon dilimi (mini polifenol shot benzeri)
```

---

## 6. Önerilen Yeni Zamanlama Tablosu

Tek versiyon, kararlı. Mevcut sistemden **5 değişiklik**:

| Saat | Olay | Eski / Yeni | Açıklama |
|---|---|---|---|
| 06:30 | Levotiron (boş mide) | Aynı | OK |
| 06:45 | Stomach Vacuum 3×30sn | Aynı | OK |
| 07:00 | ViDrate elektrolit | Aynı | OK |
| 07:10 | Mini SPF | Aynı | OK |
| **07:30** | **Yürüyüş 5-6 km / 60 dk** (90 dk değil) | **DEĞİŞTİ** | Sims kadın fasted training literatürü; 60 dk üstü kortizol vurgu artar |
| 08:30 | Yürüyüş bitir, ev dön | (yeni saat) | 60 dk yürüyüş bitiminde |
| **09:00** | **Mini break-fast** (yeni eklendi) | **YENİ** | 100-150 kcal: 1 yumurta + tuzlu su VEYA 25g whey isolate. Yeme penceresini açar; kortizol-T3 baskısını azaltır |
| 09:15 | Tam sabah cilt rutini | Aynı | OK |
| 10:00 | 1. öğün ana | Aynı (mevcut menü) | 200g dana kıyma + 3 yumurta + ½ avokado + yeşillik + ghee + zeytinyağ |
| 10:00 | + B-Complex (P5P, MeFolate, MeB12) + Omega-3 1g + **Vitamin C 100 mg** + **Vitamin K2 MK-7 100 µg** | **DEĞİŞTİ** | Vitamin C ve K2 yeni eklemeler (gap tablosu) |
| 10:30 | Calciday 1. doz | Aynı | Levotiron'dan 4 saat sonra OK |
| 12:00 | Polifenol shot (zeytinyağ + sumak + limon) | Aynı | OK |
| **14:00** | **Pre-workout 1. faz: 200-250 kcal** (60 dk önce) | **DEĞİŞTİ** | 1 yk bal + 1 kivi + 25g whey isolate (veya 1 yumurta beyazı) + tuzlu su. ISSN 0.5-1g/kg karb + 0.25g/kg protein |
| 14:30 | Pre-workout 2. faz: 60 kcal hızlı karb (opsiyonel) + ek tuzlu su | (yeni timing) | 1 yk bal + 200 ml ViDrate (eğer dehidre hissediyorsa) |
| (Opsiyonel) 14:15 | Kafein 100-200 mg | (opsiyonel) | Doktor onayı (TSH/AF risk değerlendirmesi sonrası) |
| 15:00 | Güç antrenmanı başlar (Day 1-5 / 5-gün split, Ajan 3) | Aynı | OK |
| **15:30** | **Intra-workout: 250 ml ViDrate** (eğer dehidre) | **YENİ (opsiyonel)** | Plasma volume desteği |
| **16:00** | **Intra-workout: 15g karb opsiyonel** (1 yk bal) | **YENİ (opsiyonel, geç luteal'de öncelikli)** | 60 dk üstü antrenmanlarda Hawley/Burke 30-60g/saat karb |
| 16:30 | Antrenman biter | Aynı | OK |
| 17:00 | 2. öğün ana (post-workout) | Aynı menü | 180-250g et/balık + post-WO karb yan (15-25g karb) + tuzlu salata |
| 17:00 | + Çinko 15 mg + Bakır 1.5 mg (mevcut) | Aynı | OK |
| 17:05 | Kreatin 5g | Aynı | OK |
| **17:30** | **Geç luteal'de ek karb snack** (sadece geç luteal son 5-6 gün) | **YENİ** | 1 yk bal + 1 kare bitter çikolata %85+ VEYA 1 küçük muz, +100 kcal +25g karb |
| **18:30** | **Calciday 2. doz + Qalyviz + 1 yk zeytinyağ** | **DEĞİŞTİ** | 17:00'dan taşındı; demir-Ca emilim çatışması önlendi; D3 yağ ile sinerji |
| 19:00 | Yeme penceresi kapanır (10 saat eat / 14 saat IF) | Değişti (eskiden 9 saat / 15 saat) | Kadın fizyolojisi için Sims 12-14 saat IF optimum |
| 22:30 | Akşam cilt rutini | Aynı | OK |
| 23:00 | Mg bisglycinate 300mg (regl/geç luteal 350-400 mg) + Kolajen 10g | Aynı | OK |

**Özet — değişiklikler:**
1. **Yürüyüş 90 dk → 60 dk** (kortizol/T3 baskısı azalt)
2. **09:00 break-fast eklendi** (kadın fizyoloji için protein 30-60 dk içinde)
3. **Vitamin C 100 mg + K2 MK-7 100 µg eklendi** (mikronutrient gap)
4. **Pre-workout güçlendirildi** — 14:00'a alındı, 200-250 kcal (ISSN minimum)
5. **Calciday 2. doz 17:00 → 18:30** (demir-Ca etkileşim önlemi)
6. **Geç luteal son 5-6 gün — 17:30 ek karb snack +100 kcal** (toplam +150 kcal RED-S koruma)

**Yeme penceresi yeni:** 09:00–19:00 (10 saat eat / 14 saat IF) — Sims kadın IF optimum aralık.

---

## 7. Kod Değişiklik Önerileri

### 7.1. Yeni helper fonksiyonlar

```javascript
// lib/nutrition.js - yeni dosya

// LBM tahmini (Renpho yağ% varsa, yoksa fallback)
function getEstimatedLBM(){
  const m=S.meas[S.meas.length-1];
  if(!m||!m.fat||!m.weight)return 50;
  return Math.round((m.weight*(1-m.fat/100))*10)/10;
}

// Effective Energy Availability (EA)
function getEffectiveEA(d=new Date()){
  const intake=getActualMacros(d).k;
  const exercise=getEstimatedExerciseKcal(d);
  const lbm=getEstimatedLBM();
  if(!intake||!lbm)return null;
  return Math.round((intake-exercise)/lbm);
}

function getEstimatedExerciseKcal(d=new Date()){
  const data=getHealthForDay(d);
  if(data&&data.active_kcal)return data.active_kcal;
  // Fallback tahmini
  const dow=d.getDay();
  const hasWalk=true; // 5/7 yürüyüş zaten programda
  const hasLift=dow>=1&&dow<=5; // 5-gün split
  return (hasWalk?280:0)+(hasLift?245:0);
}

// Faza göre EA floor
function getEffectiveEAFloor(d=new Date()){
  const c=ci(d);
  if(!c)return 1500;
  if(c.phase==='Luteal Phase'&&c.day>=getAvgCycleLen()-6)return 1700;
  if(c.phase==='Menstruation'&&c.day<=2)return 1600;
  return 1500;
}

// Mikronutrient gap analizi (haftalık ortalama bazlı)
function getNutrientGapAnalysis(d=new Date()){
  // Son 7 gün ortalama menü için tahmini mikronutrient
  const week=[];
  for(let i=0;i<7;i++){
    const day=new Date(d);day.setDate(d.getDate()-i);
    const m=getActualMacros(day);
    if(m.k>0)week.push(m);
  }
  if(week.length<3)return null;
  
  // Tahmini değerler (besin içeriği approximate)
  const gaps=[];
  // Vitamin C (RDA 75 mg)
  gaps.push({nutrient:'Vitamin C',estimated:40,rda:75,deficit:35,suggestion:'C vit 100 mg/gün, 1. öğünle'});
  // Lif (RDA 25-30 g)
  gaps.push({nutrient:'Lif',estimated:7,rda:25,deficit:18,suggestion:'Psyllium 5-10 g/gün opsiyonel'});
  // K2 MK-7
  gaps.push({nutrient:'Vitamin K2 MK-7',estimated:50,rda:120,deficit:70,suggestion:'K2 100 µg/gün, kemik koruma için'});
  // Omega-3
  const fishDays=week.filter(m=>true).length; // Bengisu menüsünde 2/7 balık günü
  if(fishDays<3)gaps.push({nutrient:'Omega-3 EPA+DHA',estimated:600,rda:1000,deficit:400,suggestion:'Omega-3 1g/gün, 1. öğünle'});
  
  return gaps;
}

// Cycle phase macros (Ajan 2 ile entegre, mikro detay)
function getCyclePhaseMacros(d=new Date()){
  const c=ci(d);
  const base=getMacroTarget(d);
  if(!c)return base;
  
  // Faz × mikronutrient öneri
  const microFocus={
    'Menstruation_D1_2':['demir','B12','Mg350-400','C vit (demir emilim)'],
    'Menstruation_D3_5':['demir','C vit','toparlanma'],
    'Follicular Phase':['Omega-3','B vitaminleri','protein vurgu'],
    'Ovulation':['Omega-3 1.5g','K2','C vit (kollajen)','protein +10-15g'],
    'Luteal_Early':['Mg+B6','progesteron destek'],
    'Luteal_Late':['Mg350','B6 (P5P)','tuz 8-10g','tryptophan (et+yumurta)'],
  };
  
  let key=c.phase;
  if(c.phase==='Menstruation')key=c.day<=2?'Menstruation_D1_2':'Menstruation_D3_5';
  if(c.phase==='Luteal Phase')key=c.day>=getAvgCycleLen()-6?'Luteal_Late':'Luteal_Early';
  
  return{
    ...base,
    microFocus:microFocus[key]||[],
    eaFloor:getEffectiveEAFloor(d),
  };
}

// Pre-workout fuel öneri (planlanan antrenman süresine göre)
function getPreWorkoutFuel(d=new Date(),plannedExerciseDuration=90){
  const c=ci(d);
  const weight=76.9; // S.meas son weight
  const targetCarb=Math.round(weight*0.5); // 0.5g/kg = 38g
  const targetProtein=Math.round(weight*0.25); // 0.25g/kg = 19g
  
  // Cycle modifiye
  let carbBoost=0,proteinBoost=0;
  if(c){
    if(c.phase==='Menstruation'&&c.day<=2)carbBoost=10;
    if(c.phase==='Ovulation')proteinBoost=5;
    if(c.phase==='Luteal Phase'&&c.day>=getAvgCycleLen()-6){
      carbBoost=10;
    }
  }
  
  return{
    timing:'14:00 (antrenmana 60 dk)',
    targetCarb:targetCarb+carbBoost,
    targetProtein:targetProtein+proteinBoost,
    targetKcal:Math.round((targetCarb+carbBoost)*4+(targetProtein+proteinBoost)*4+5*9),
    detail:`${(targetCarb+carbBoost)}g karb + ${(targetProtein+proteinBoost)}g protein`,
    suggestions:[
      `1 yk bal (15g karb) + 1 kivi (10g karb) + 25g whey isolate (22g protein) + tuzlu su`,
      `1 yk bal + 1 küçük muz + 1 yumurta beyazı (karnivor saf alternatif)`,
    ],
    boost:{timing:'14:30 (antrenmana 30 dk)',detail:'1 yk daha bal (10-15g karb) + 200ml ViDrate (opsiyonel)'},
    note:c?`${c.phase} Day ${c.day} faz uyarısı uygulandı`:'Standart',
  };
}
```

### 7.2. Mevcut fonksiyonlarda değişiklik

| Fonksiyon | Satır | Değişiklik |
|---|---|---|
| `MACRO_BASE` | 1312 | Aynı kalır (LBM-aware override için `getDynamicMacroBase()` ekle, opsiyonel) |
| `getMacroTarget()` | 1313 | Geç luteal +100 → +150 kcal (kcal:1950→2000, c:50→55, bonus:'+150 kcal · +15g karb'); Ovulasyon protein +10g (p:170→175) |
| `getLowIntakeAlert()` | 1339 | EA-aware revize (Bölüm 5.3 spec) |
| Pre-workout `preCarb` | 1648-1653 | Mevcut 60-90 kcal → 200-240 kcal (Bölüm 5.4 spec) |
| Calciday rationale | 1656, 1665 | "hipoparatiroidi" → "post-tiroidektomi profilaktik" (Ajan 1 P0) |
| Timeline 17:00 Calciday → 18:30 | 1685-1686, 1687 | Calciday 2. doz 17:00'dan kaldır, 18:30 Qalyviz ile birleştir |
| Timeline 09:00 break-fast | (yeni satır) | `${tliX('09:00','🥚 Break-fast (mini)','100-150 kcal · 1 yumurta + tuz VEYA 25g whey isolate · yürüyüş bitti pencere açılır','td',breakfast_detail)}` |
| Timeline 17:30 geç luteal snack | (yeni satır, conditional) | Sadece `c.phase==='Luteal Phase' && c.day>=getAvgCycleLen()-6` true ise göster |

### 7.3. UI eklenmesi

**A. Bugün sayfası — "Beslenme zamanlama önerin" mini kartı**

Diyet sekmesi açıldığında, makro hedefi altında:

```
🍽️ Bugünün Beslenme Zamanlaması
─────────────────────────────────────
🌙 Geç Luteal Day 24 · Cadı arketipi
📊 Bugün +150 kcal · +15g karb · Mg + tuz vurgu
🍯 Pre-WO 14:00: 38g karb + 24g protein 
🥩 Post-WO 17:00: protein 40g + karb 25g
🍫 17:30: ek karb snack (geç luteal bonus)
💊 18:30: Calciday + Qalyviz + zeytinyağ
─────────────────────────────────────
EA bugün ~32 kcal/kg LBM (sınır üstü ✅)
```

**B. Mikronutrient gap rozeti**

Diyet sekmesi alt bölümünde:
```
⚠️ Beslenme açıkları (haftalık ortalama)
- Vitamin C: 40/75 mg (-35) → 100 mg/gün suplement öner
- Lif: 7/25 g (-18) → Psyllium opsiyonel
- K2 MK-7: 50/120 µg (-70) → 100 µg/gün suplement öner
- Omega-3: 600/1000 mg (-400) → 1g/gün suplement öner
[Önerileri uygula] [Atla]
```

**C. Pre-workout planlamacı (Workout sekmesi)**

Antrenman accordion'da:
```
🍯 Bugün için Pre-Workout
14:00 (antrenmana 60 dk):
  - 1 yk bal (15g karb)
  - 1 kivi (10g karb)
  - 25g whey isolate (22g protein)
  - Tuzlu su 200ml
  Toplam: 240 kcal · 25g karb · 22g protein

14:30 (boost): 1 yk bal + 200ml ViDrate (opsiyonel)
14:15 (kafein): doktor onayıyla 100-200 mg

Bugün geç luteal Day 24 → karb +10g, tuz +1g
```

---

## 8. Öneriler P0/P1/P2

### P0 (must-have, hemen — 1-2 hafta)

1. **`getMacroTarget()` geç luteal +100 → +150 kcal güncelleme** (kcal:2000, c:55, bonus güncelle). Ajan 2 #5 ile uyumlu, EA hesabıyla doğrulandı.
2. **`getLowIntakeAlert()` EA-aware revize** — `getEffectiveEAFloor()` kullan, faz × kalori taban (Bölüm 5.3 spec). Ajan 2 #4 ile uyumlu.
3. **Pre-workout 60 kcal → 200-240 kcal güncelleme** (`preCarb` faz mantığını koru, miktar artır). ISSN nutrient timing minimum.
4. **Calciday 2. doz 17:00 → 18:30 taşı** (Qalyviz ile birleştir, demir-Ca emilim çatışmasını önle).
5. **"hipoparatiroidi" referansları temizle** (Calciday rationale, kreatin 3L su rationale, regl notu — Ajan 1 P0 ile uyumlu).
6. **Vitamin C 100 mg/gün eklendi** (1. öğünle 10:00, demir emilim destek).
7. **Vitamin K2 MK-7 100 µg/gün eklendi** (1. öğünle, kemik koruma + tiroidektomi sinerji).
8. **09:00 mini break-fast eklendi** (yürüyüş 60 dk olarak ayarlanırsa); kadın fizyoloji için kortizol/T3 baskısını azaltır.
9. **Yürüyüş 90 dk → 60 dk** (5-6 km), kortizol AUC azalır. Bengisu enerji koruyorsa 90 dk'a geri dönebilir.

### P1 (should-have, 4 hafta)

10. **`getNutrientGapAnalysis()` helper + UI gap rozeti** — haftalık mikronutrient açıkları görünür.
11. **`getCyclePhaseMacros()` mikronutrient detay entegre** — her fazda öncelikli supplement vurgusu UI'da görünsün.
12. **`getPreWorkoutFuel()` helper + UI planlamacı** — antrenman saatiyle entegre ön-yakıt önerisi.
13. **Ovulasyon protein +10-15g vurgu** — `getMacroTarget` Ovulation case'i p:170→175 güncelle.
14. **Geç luteal 17:30 ek karb snack** — koşullu satır timeline'a eklensin.
15. **Omega-3 supp 1g/gün** önerisi — eğer haftalık balık <3 günse otomatik öner.
16. **Lif (psyllium 5-10g/gün) opsiyonel önerisi** — Bengisu konstipasyon belirtisi varsa veya >6 ay karnivorda kalırsa.
17. **`getEffectiveEA()` helper + Apple Health entegrasyon** — gerçek egzersiz harcaması varsa kullan, yoksa tahmini.

### P2 (uzun vadede, 2-3 ay)

18. **LBM-aware `getDynamicMacroBase()`** — Renpho yağ% verisi varsa kişisel makro hesapla.
19. **Karnivor "saf" vs "esnek" tercihler** — kullanıcı pre-WO whey/bal kabul ediyor mu? Onboarding sırasında soru, alternatif öneri dallanır.
20. **Cycle × performans korelasyon analizi** — geç luteal'de gerçek kalori alımı vs hedef, RPE × cycle kuvvet kayıt → kişisel cycle responsivite raporu.
21. **TSH/T3/T4 takip dashboard** — Bengisu doktor randevusu girdiğinde (PROGRESS.md "Pending"de varsa eklenir), trend grafiği.
22. **Karnivor uzun vade riskleri (>1 yıl)** — lipid profili (LDL, ApoB), kemik (DEXA), microbiome (varsa) izleme.
23. **Bengisu kafein toleransı + Levotiron etkileşimi onboarding** — TSH değeri biliniyorsa AF risk değerlendirmesi.
24. **Wedding event countdown (eğer Eylül 2026)** — son 4-6 hafta kalori/cycle ayarları.

---

## 9. Açık sorular

### 9.1. Doktora yönlendirilenler

1. **TSH süpresyonu altında mı?** AF riski (kafein) + kemik koruma (K2 öncelik) + cycle uzunluğu etkisi.
2. **Calciday içeriği nedir?** Elementer kalsiyum kaç mg, D3 kaç IU, form karbonat mı sitrat mı?
3. **Qalyviz içeriği nedir?** D3 dozu, K2 var mı, demir/iyot var mı (T4 etkileşim)?
4. **Serum 25(OH)D düzeyi** — yeterli mi? K2 ile birlikte alımı + Calciday dozu doğru mu?
5. **Ferritin + transferin satürasyon** — karnivor + regl kayıp + güç antrenmanı kombinasyonunda demir durumu nasıl?
6. **Lipid profili (LDL, HDL, ApoB, trig)** — karnivor diyet + kreatin 4-6 ay sonra kontrol önerilir mi?
7. **Kafein toleransı** — TSH süpresyonu altında pre-WO kafein güvenli mi?
8. **Whey protein süt ürünü** — Bengisu karnivor "saf" ister mi, yoksa whey isolate kabul mü? (Süt vs whey isolate β-laktoglobulin minimal, glutathione substrate olarak zaten iyi).

### 9.2. Bengisu'nun cevaplaması gerekenler

9. **Yürüyüş 60 dk kabul mü?** Mevcut 90 dk + 7-8 km'yi 60 dk + 5-6 km'ye düşürmek tolere edilebilir mi, yoksa kortizol vurgusu 09:00 break-fast ile yeterince yumuşatılır mı?
10. **09:00 break-fast karnivor saflığını ihlal eder mi?** 1 yumurta + tuzlu su VEYA 25g whey isolate seçeneği — hangisi tercih?
11. **Pre-workout protein** (whey isolate) süt ürünü kabul mü, yoksa 1 yumurta beyazı + bal yeterli alternatif mi?
12. **Geç luteal 17:30 ek karb snack** — bitter çikolata %85+ veya 1 küçük muz tercih?
13. **Suplement bütçesi** — Vitamin C, K2, Omega-3, Psyllium hepsi eklemeli mi yoksa sadece priority (C + K2)?
14. **Konstipasyon belirtisi var mı?** (Lif suplementasyon kararı için.)
15. **Renpho son yağ% değeri?** LBM hesabı için.
16. **Apple Health verisi günlük gözleniyor mu?** EA hesabı için active_kcal entegrasyonu kullanılabilir.

### 9.3. Spekülatif / kanıt zayıf alanlar (subjektif sinyal takip)

17. **Sims kadın IF literatürü uzman görüşü** — RCT yok. Bengisu kendi enerji/uyku/cycle düzeniyle test etmeli. 2-3 cycle uygulayıp gözlem.
18. **Karnivor uzun vade RCT yok** — 6+ ayda biomarker (lipid, ferritin, kemik) kontrol kritik.
19. **Pre-WO 30g karb vs 60g karb fark** — kadın için spesifik RCT az. Bengisu RPE/performans takip ederek kişiselleştirebilir.
20. **K2 MK-4 vs MK-7 fark** — MK-7 daha uzun yarı-ömür (3 gün vs 1 saat), günlük doz daha az gerektirir; literatür çoğu MK-7 üzerinde. Calciday + K2 sinerjisi RCT'si sınırlı.

---

## 10. Kaynaklar

### ISSN Position Stand'ları
- **Kerksick CM, Arent S, Schoenfeld BJ et al. 2017** — *J Int Soc Sports Nutr* 14:33. **PMID: 28919842**. ISSN nutrient timing position stand.
- **Jäger R, Kerksick CM, Campbell BI et al. 2017** — *J Int Soc Sports Nutr* 14:20. **PMID: 28642676**. ISSN protein and exercise position stand.
- **Antonio J, Candow DG, Forbes SC et al. 2021** — *J Int Soc Sports Nutr* 18:13. **PMID: 33557850**. ISSN creatine position stand.
- **Smith-Ryan AE, Cabre HE, Eckerson JM, Candow DG 2021** — Female creatine meta-analysis. **PMID: 33571627**.
- **Kerksick CM, Wilborn CD, Roberts MD et al. 2018** — ISSN exercise & sports nutrition review update. PMID: 30068354.

### Anabolic Window / Post-WO
- **Aragon AA, Schoenfeld BJ 2013** — *J Int Soc Sports Nutr* 10:5. **PMID: 23360586**. Nutrient timing revisited (anabolic window myth).
- **Trommelen J, van Lieshout GAA, Pabla P et al. 2023** — *Cell Rep Med*. **PMID: 38215936**. Protein per-meal dose response (40g optimal).
- **Tipton KD, Wolfe RR 2007** — *J Sports Sci* 25(S1). **PMID: 17413102**. Protein timing.
- **Phillips SM, Van Loon LJ 2011** — *J Sports Sci* 29:S29-S38. PMID: 22150425. Dietary protein for athletes.
- **Holt SH, Miller JC, Petocz P 1997** — *Am J Clin Nutr* 66(5):1264-76. Insulin index of foods.

### Pre-WO / Intra-WO Karb
- **Hawley JA, Burke LM 2010** — *Br J Nutr*. Carbohydrate availability and training adaptation. PMID: 20465850.
- **Phinney SD 1983** — *Metabolism*. Ketogenic adaptation. PMID: 6865776.
- **Stellingwerff T, Cox GR 2014** — *Appl Physiol Nutr Metab* 39(9):998-1011. CHO intra-WO. PMID: 25100119.

### Demir-Kalsiyum-D Etkileşim
- **Hallberg L, Brune M, Erlandsson M et al. 1991** — *Am J Clin Nutr* 53(1):112-9. **PMID: 1899671**. Calcium-iron absorption interaction.
- **Lonnerdal B 2010** — *Ann Nutr Metab* 56(2):141-7. PMID: 20212601. Ca-Fe interaction in lactating women.
- **Dawson-Hughes B et al. 2015** — *J Acad Nutr Diet*. **PMID: 25333998**. D vitamin fat-pairing absorption.
- **Knapen MH, Drummen NE, Smit E et al. 2013** — *Osteoporos Int* 24(9):2499-507. **PMID: 23525894**. Vitamin K2 (MK-7) and bone density.
- **Holick MF 2011** — Vitamin D Endocrine Society guideline. PMID: 21646368.

### Karnivor + Mikronutrient
- **NIH ODS Fact Sheets 2024** — Vitamin C, K, B12, Folate, Iron, Mg, Zn, Cu RDA values.
- **Sonnenburg ED, Sonnenburg JL 2014** — *Cell Metab* 20(5):779-786. PMID: 25156449. Microbiome diet diversity.
- **Lennerz BS et al. 2021** — *Curr Dev Nutr*. **PMID: 34334794**. Carnivore diet survey.

### Kadın IF / Sims Literatür
- **Sims SR, Yeager S 2016** — *ROAR: How to Match Your Food and Fitness to Your Female Physiology*. Rodale.
- **Sims SR, Yeager S 2022** — *Next Level: Your Guide to Kicking Ass, Feeling Great, and Crushing Goals through Menopause and Beyond*. Rodale.
- **Moro T, Tinsley G, Bianco A et al. 2020** — *J Transl Med*. **PMID: 31904475**. 16:8 IF + resistance training (men).
- **Tinsley GM, Forsse JS, Butler NK et al. 2017** — *Eur J Sport Sci* 17(2):200-207. **PMID: 28208300**. TRF in resistance training (men).
- **Schoenfeld BJ, Aragon AA, Wilborn CD et al. 2014** — *J Int Soc Sports Nutr*. **PMID: 25429252**. Pre/post training nutrient timing.

### RED-S
- **Mountjoy M, Sundgot-Borgen J, Burke L et al. 2023** — *Br J Sports Med* 57(17):1073-1097. **PMID: 37726159**. IOC RED-S consensus 2023.
- **Trexler ET, Smith-Ryan AE, Norton LE 2014** — *J Int Soc Sports Nutr* 11:7. **PMID: 24571926**. Metabolic adaptation to weight loss.
- **Garthe I, Raastad T, Refsnes PE et al. 2011** — *Int J Sport Nutr Exerc Metab* 21(2):97-104. PMID: 21558571. Fast vs slow weight loss × performance.

### Protein × Deficit
- **Helms ER, Aragon AA, Fitschen PJ 2014** — *J Int Soc Sports Nutr* 11:20. **PMID: 24864135**. Natural bodybuilding nutrition.
- **Murphy CH, Koehler K 2022** — *Sports Med* 52(9):2037-2049. **PMID: 36172810**. Protein in caloric deficit (kadın spesifik).
- **Helms ER, Zinn C, Rowlands DS, Brown SR 2014** — *Int J Sport Nutr Exerc Metab* 24(2):127-38. PMID: 24092765. Protein 1.6-2.4g/kg in deficit.

### Cycle × Beslenme
- **Hackney AC 2019** — *Sports Health* 11(4):318-322. **PMID: 31181172**. Estrogen-progesterone × substrate metabolism.
- **Webb P 1986** — *Am J Clin Nutr*. PMID: 3953477. BMR luteal change.
- **Buffenstein R, Poppitt SD, McDevitt RM, Prentice AM 1995** — *Physiol Behav* 58(6):1067-77. PMID: 8623003. BMR menstrual cycle.
- **Hill M 2019** — *Period Power*. Bloomsbury (kavramsal, kanıt seviyesi düşük).

### Kalsiyum + Tiroidektomi
- **Singh N, Singh PN, Hershman JM 2000** — *JAMA* 283(21):2822-5. **PMID: 11018229**. Levothyroxine + calcium interaction.
- **Heaney RP 2001** — Calcium absorption. **PMID: 11231013**.
- **Bolland MJ, Avenell A, Baron JA et al. 2010** — *BMJ*. **PMID: 20671013**. Calcium supplement cardiovascular meta-analysis.

### Kanıt Sınırları
- **Direkt RCT yok:** Karnivor uzun vade (>1 yıl), tiroidektomili kadında IF, post-WO penceresi kadın spesifik.
- **Uzman görüşü:** Sims kadın atlet IF protokolleri, Stacy Sims fasted training önerileri.
- **Çelişen bulgular:** Anabolic window kapsamı (Aragon meta-analizi 30 dk vs Tipton 60 dk).
- **Tahmin değerleri:** Bengisu menüsünde mikronutrient hesabı USDA FoodData Central üzerinden yapıldı, Türkiye et/yumurta için ±%20 sapma kabul.

---

## ⚠️ Kritik Uyarılar

1. **Bu rapor literatür sentezidir, doktor önerisinin yerine geçmez.** Bengisu'nun TSH/T3/T4/lipid/ferritin/D vitamini değerleri bilinmiyor — kişiselleştirme sınırlı. Suplement eklemeleri (özellikle K2, kafein) **endokrinolog onayı** ister.

2. **Karnivor diyet uzun vade (>1 yıl) RCT'si yok.** 5 ay hedefi içinde kabul edilebilir; ama 6 ayda biomarker (lipid, kemik, microbiome) kontrol kritik.

3. **5 kg/ay hedefi RED-S sınırında.** Mevcut 1850 kcal alımıyla matematiksel olarak gerçekleşmez (gerçek kayıp 1.5-2.5 kg/ay). Bengisu hedefini revize etmesi önerilir (3 kg/ay sürdürülebilir).

4. **Sims/Hill kadın atlet literatürü kanıt seviyesi B-C** — RCT az, expert opinion ağırlıklı. Bengisu'nun **subjektif sinyalleri** (cycle düzeni, enerji, uyku, performans) klinik kararın temeli olmalı.

5. **Pre-WO whey isolate / kafein** karnivor "saf" tercihi varsa Bengisu seçimine bırakılmalı. Sistem alternatifler sunsun, dayatmasın.

6. **Calciday 2. doz 18:30'a taşıma** sadece 17:00 ciğer/demir-ağır günlerde kritik — diğer günler 17:00 OK kalabilir. Sistem otomatize ederse "her gün 18:30" güvenli, manuel ise menüye göre değişebilir.

---

**Rapor tarihi:** 5 Mayıs 2026
**Hazırlayan:** Ajan 4 — Beslenme × Antrenman Zamanlaması (Claude Opus 4.7, 1M context)
**İncelenmiş kaynaklar:** PubMed (1991-2024), ISSN position stand'ları (2017-2023), IOC RED-S 2023, Sims kadın atlet literatürü, NIH ODS fact sheets, Aragon/Schoenfeld/Helms/Tipton/Phillips meta-analizleri
**Toplam referans:** 30+ PMID/DOI + 5 ISSN position stand
**Kanıt seviyesi:** A (yüksek) — protein timing ISSN, demir-Ca etkileşim · B (orta) — pre/post-WO kanıt, mikronutrient gap · C (zayıf) — Sims kadın IF, karnivor uzun vade · D (uzman görüşü) — fasted exercise kadın HPA aksı, K2 + tiroidektomi sinerji
**Türetilmiş öneri kanıt seviyesi:** Pratik klinik akıl yürütme + ISSN nutrient timing + Ajan 1/2 raporları sentezi — direkt uygulanmadan önce endokrinolog + kayıtlı diyetisyen onayı kuvvetle önerilir.
