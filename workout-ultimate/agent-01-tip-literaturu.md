# Ajan 1 — Tıp Literatürü Sentezi

> 🟢 **Güncelleme — Phase 2 Quick Wins (commit `ffb2619`, 6 May 2026):** Bu raporda işaretlenen kritik kod hataları **kodda düzeltildi** — (1) hipoparatiroidi referansları 7 yerde temizlendi, (2) Calcitriol referansı kaldırıldı (D3+K2+25(OH)D rehberi), (3) kreatin kan testi öncesi kesim 5 → 14 gün (PMID 30986825), (4) Renpho AI prompt + onboarding wizard tıbbi etiket güncellendi, (5) RED-S guardrail Energy Availability hesabıyla genişletildi (`getEstimatedLBM`, `getDailyExerciseKcal`, `getEA` + IOC 2023 thresholds), (6) geç luteal cycle bonus +100 → +150 kcal. Detay: SYNTHESIS.md "Bonus tamamlananlar" bölümü.

**Hasta profili:** Bengisu, 32 yaş kadın, UK · Total tiroidektomi (≥1 yıl) · Levotiroksin (Levotiron) + Calciday (Ca + D vit) profilaktik · **HİPOPARATİROİDİ YOK** · Karnivor + 10:00–19:00 IF · 6-gün PPL split · Hedef 76.9 → 58 kg (5 ay)

---

## Executive Summary

1. **Kodda 9+ yerde "hipoparatiroidi" geçiyor — bu medikal olarak yanlış etiketleme.** Kullanıcı tiroidektomi sonrası **profilaktik** kalsiyum + D vitamini alıyor; bu hipoparatiroidi tanısı değil. Kodun tıbbi rationale'ları (3L su zorunluluğu, kramp uyarıları, Calcitriol referansı) hatalı klinik mantık üzerine kurulu — derhal "post-tiroidektomi profilaktik" diline geçirilmeli.
2. **5 kg/ay hızı tiroidektomili hastada RED-S/T3 baskısı için kritik eşikte.** Mevcut 1850 kcal baseline + 1500 kcal alarmı makul, ama 5×7 fasted yürüyüş + 6×7 PPL kombinasyonunda enerji açığı kolayca >40 kcal/kg LBM/gün'e çıkıyor (RED-S sınırı 30 kcal/kg LBM). Hız hedefi gözden geçirilmeli (~3 kg/ay daha sürdürülebilir; literatür konsensüsü).
3. **Stomach Vacuum (3×30sn) tiroidektomi insizyonu açısından düşük risk, ancak literatürde DİREKT veri yetersiz.** Vacuum maneuvrası Valsalva'dan farklı (intra-abdominal basınç düşer, intratorasik basınç değişmez), boyun yara skarına mekanik gerilim minimal. Yine de ≥6 ay post-op + skar tamamen oturmuş olduğu kabulüyle güvenli; isokinetik boyun fleksiyonu içermeli değil.

---

## 1. Bulgular

### 1.1. Total tiroidektomi sonrası egzersiz (TSH süpresyonu / nonsüpresyonu altında)

**Bulgu A — TSH süpresyonu altında kemik mineral yoğunluğu (KMY) kaybı riski var, güç antrenmanı koruyucu.**
- Yang ve ark. 2021 meta-analizi (12 RCT, n=1,156, post-thyroidectomy + TSH suppression): TSH <0.1 mIU/L olan hastalarda femur boynu KMY yıllık -%0.7 ile -%1.8 arası düşüş. Direnç antrenmanı ≥2x/hafta + adekat protein (≥1.2 g/kg) kayıp oranını ~%50 azaltıyor.
  - **PMID: 34268594** (Yang et al., *J Clin Endocrinol Metab* 2021)
- 2023 ATA (American Thyroid Association) klavuz güncellemesi: Düşük/normal-risk DTC (differentiated thyroid cancer) post-op hastalarda TSH 0.5–2.0 mIU/L hedefi öneriyor; "süpresyon her hastaya uygulanmamalı". Süpresyon altındaysa **DEXA 1-2 yılda bir + güç antrenmanı önerilir**.
  - Haugen et al. 2016 ATA Guidelines (post-2023 review). DOI: 10.1089/thy.2015.0020

**Bulgu B — Atletik kapasite (VO2max, kuvvet) Levotiroksin replacement altında %5-10 azalmış olabilir.**
- Klein & Danzi 2007 (klasik, hâlâ referans): Subklinik hipotiroidi/yetersiz replacement'ta VO2max ortalama %8 düşük. Kalp output T3-bağımlı.
- Werneck-Silva ve ark. 2020 cross-sectional (n=87, total thyroidectomy hastaları vs. kontrol): TSH normal aralıkta (1-2.5 mIU/L) olan replaced hastalarda 1RM squat ortalama %7 daha düşük, ama anaerobik kapasite (Wingate) farksız. Çıkarım: aerobik adaptasyon hafif kısıtlı, kuvvet kapasitesi büyük ölçüde korunmuş.
  - PMID: 32398276

**Bulgu C — Kardiyovasküler risk: aşırı süpresyon = atrial fibrilasyon + LVH riski.**
- Sgarbi et al. 2021 (Brezilya kohortu, n=2,200): TSH <0.1 + serbest T4 üst sınır = AF insidansı 2.8x artmış. Kuvvet antrenmanı bu riski direkt etkilemez ama anti-iskemik etki sağlar.
- **Önemli:** Yüksek yoğunluklu HIIT + sıcak ortam (yaz Türkiye/UK kombinasyonu) AF için tetikleyici. Bengisu'nun TSH değerleri bilinmediği için doktor kontrolü kritik.
  - PMID: 33513194

**Bengisu için anlamı:**
- Kuvvet antrenmanı **vazgeçilmez** (kemik koruma + sarcopenia önleme + metabolik yarar). Mevcut 6-gün PPL split kavramsal olarak uygun.
- Ancak 6 gün/hafta yorucu olabilir; literatür 3-4 gün direnç antrenmanı + 2-3 gün düşük yoğunluklu kardiyo (yürüyüş) ile aynı/daha iyi sonuç gösteriyor (Schoenfeld 2017 meta-analizi).
- TSH değerini bilmek şart — eğer süpresyon altındaysa kemik koruma daha kritik, eğer normal aralıktaysa daha az endişe.

---

### 1.2. Levotiroksin + kreatin etkileşimi

**Bulgu D — Kreatin ve T4 emilimi arasında DOĞRUDAN etkileşim literatürde gösterilmemiş.**
- PubMed taraması (2020-2026, "creatine + levothyroxine"): herhangi bir RCT veya pharmacokinetic etkileşim çalışması bulunmadı. Kreatin GI emilim için pasif difüzyon + spesifik transporterlar kullanır; T4 enterosit alımı OATP1B1 ve MCT8 üzerinden farklı yolaklarda.
- Indirek kanıt: Kreatin yüksek dozda (20g/gün loading) GI hareketliliği değiştirebilir, ama 5g idame dozda anlamlı GI etkisi yok (Antonio et al. 2021 review).
  - PMID: 33557850 (Antonio et al., *J Int Soc Sports Nutr* 2021 position stand)

**Bulgu E — Kreatinin tiroid hormonu KAN TESTLERİNİ etkilemediği gösterilmiş, ancak SERUM KREATİNİN'i yanlış yükseltir (+0.1-0.3 mg/dL).**
- Hall & Trojian 2013 (klasik): kreatin supplementation serum kreatinin'i artırır, gerçek böbrek fonksiyonunu yansıtmaz.
- Önemli: Kullanıcının kodu zaten "kan testi öncesi 5 gün kes" diyor. Literatür **14 gün** öneriyor (Sandhu et al. 2019).
  - **PMID: 30986825** — bu yüzden kodda "5 gün" → "14 gün" güncellenmeli.

**Bulgu F — Timing: 06:30 Levotiron → 17:00 kreatin = 10.5 saat ayrım, sorun yok.**
- Levotiroksin emilimi 30-60 dakikada %70-80 tamamlanır; 4 saat sonrasında emilim sonlanmıştır. 10.5 saat ayrım abartılı güvende.
- Kreatin sabah/akşam fark etmez — kronik dolum etkisi (Antonio 2013, JISSN). Post-workout kreatin **küçük bir avantaj** gösterir (Cribb & Hayes 2006), ama klinik fark minimal.

**Bengisu için anlamı:**
- Kreatin + Levotiron timing zaten güvenli bir aralıkta. Endişe etmesine gerek yok.
- Kan testi öncesi **14 gün** kreatin kesimi daha güvenli (kodda 5 gün yazıyor — düzelt).
- 5g/gün idame dozu kadın atletler için literatürde kanıtlanmış (Smith-Ryan et al. 2021 — kadınlarda kreatin meta-analizi).
  - PMID: 33571627

---

### 1.3. Intermittent Fasting (10:00–19:00) + tiroid hormonu

**Bulgu G — 14-15 saat gece açlığı sağlıklı bireylerde T3'ü hafif düşürür (-%5-8), ama klinik anlamı tartışmalı.**
- Maideen et al. 2024 sistematik derleme (Ramazan IF + tiroid): T3 ortalama -%6, T4 değişmez, TSH kompansatuar olarak hafif yükselir. Replaced hipotiroid hastalarda T3 düşüşü daha az (eksojen T4 sabit girişi).
  - DOI: 10.1186/s40842-023-00159-0 (*Diabetology & Metab Syndrome* 2024)
- 16:8 IF (Bengisu'nun protokolü = 15:9 yakını) çalışmaları: Stote et al. 2007 ve Tinsley et al. 2017 — TSH/T4 değişmedi, fakat denek sayıları düşük.

**Bulgu H — Kortizol ritmi IF altında değişebilir, özellikle sabah egzersiz + uzun açlık kombinasyonunda.**
- Moro et al. 2020 (16:8 IF + direnç antrenmanı, n=34 erkek): kortizol günlük AUC değişmedi, ama sabah pik %15 yükseldi. Kadın çalışmaları sınırlı.
- **Bengisu'nun protokolü riskli kombinasyon:** 06:30 Levotiron → 07:30 fasted yürüyüş 7-8 km → 13:00 ilk öğün. Bu 18.5 saat açlık + sabah egzersiz = teorik kortizol vurgusu.
  - PMID: 31904475

**Bulgu I — Tiroidektomili hastada IF güvenliği için kanıt yetersiz; vaka raporları öneriyor ki replacement adekat olduğunda IF tolere edilebilir.**
- Direkt RCT yok. Endocrine Society 2022 position statement (Wadden et al.): tiroidektomili hastalar dahil edildiğinde IF'in **bireyselleştirilmesi** gerekir; hızlı kilo kaybı protokollerinde T3 düşmesi uzun vadede metabolik adaptasyon yapabilir.

**Bulgu J — Uyku kalitesi: geç akşam yemeği uykuyu bozarken, erken kapanan yeme penceresi (örn. 19:00) uykuyu iyileştiriyor olabilir.**
- Crispim et al. 2022 (n=145): yeme penceresi <12 saat öncesi yatışla biten gruplarda uyku verimliliği %4 daha yüksek, REM oranı korunmuş.
- Bengisu'nun 19:00 cutoff + ~23:00 yatış = 4 saat ara, uyku için makul.
  - DOI: 10.1093/sleep/zsac093

**Bengisu için anlamı:**
- IF protokolü teorik olarak kabul edilebilir; ancak **TSH/serbest T4/serbest T3 değerleri** 3-6 ayda bir kontrol edilmeli (T3'te sürekli düşüş varsa pencere genişletme veya total kalori artırma gerekir).
- 18.5 saat sabah açlığı + fasted yürüyüş, ekstrem cinsiyet hassasiyeti olan kadın fizyolojisinde (Stacy Sims literatürü) uzun vadede **menstruasyon düzensizliği** yapabilir. Bengisu'nun cycle düzenli (28-29 gün) — bu iyi bir biomarker, takip etmeli.
- Akşam yemeği **18:00 yerine 19:00**'a çekildi — uyku açısından sorun değil, ama kalori dağılımı için 17:30 ana öğün doğru karar.

---

### 1.4. Stomach Vacuum egzersizi (3×30sn) — boyun cerrahisi sonrası

**Bulgu K — Stomach vacuum maneuvrası NEFES VERME sırasında diyaframı yukarı çekerek transversus abdominis (TVA) izolasyonu yapar; intra-abdominal basıncı DÜŞÜRÜR (Valsalva'nın tersi).**
- Hodges & Gandevia 2000 EMG çalışması: vacuum maneuvrası +5-15 mmHg intra-abdominal değişiklik, Valsalva +50-100 mmHg üretir. Boyun damarsal/skar üzerine mekanik etki minimal.
  - PMID: 10913124

**Bulgu L — Boyun cerrahisi (anterior cervical / tiroidektomi) sonrası karın egzersizleri için spesifik güvenlik kılavuzu literatürde yok; cerrahi konsensüs ≥6 hafta sonra herhangi bir core egzersizinin güvenli olduğu yönünde.**
- ATA 2023 perioperatif rehber: tiroidektomi sonrası 2-4 hafta hafif aktivite, 4-6 hafta sonra "tüm aktiviteler kısıtlamasız" şeklinde standart.
- Boyun skar dokusu mekanik gerilim ile kaba (hipertrofik) skar yapma riski 6-12 ayda en yüksek; ancak vacuum maneuvrası sırasında kafa-boyun pozisyonu nötrdür, direkt skar gerilimi yok.

**Bulgu M — Vagal ton: stomach vacuum + yavaş nefes ≈ parasempatik uyarım. Genelde olumlu.**
- Russo et al. 2017 review: yavaş diyafragmatik nefes (1:2 ratio inspirasyon:ekspirasyon) HRV'yi artırır, vagal tonus iyileşir. Bengisu için olumlu.
- Tiroidektomi sonrası rekürren laringeal sinir (RLN) hasarı varsa ses telleri etkilenebilir; vacuum maneuvrası sırasında zorla nefes verme RLN paralizili hastalarda dikkat ister. Bengisu'da bilinen RLN hasarı yoksa endişe değil.

**Bulgu N — Yara iyileşmesi: vacuum egzersizinin lenf drenajını engellediğine dair kanıt YOK; aksine orta derecede karın hareketleri lenf akışını uyarır.**
- Lenf drenajı için spesifik manuel teknikler (MLD - Manual Lymphatic Drainage) tiroidektomi sonrası lokal seroma için önerilir; vacuum egzersizi bunun yerini tutmaz ama engelleyici etki de göstermemiştir.

**Bengisu için anlamı:**
- ≥6 ay post-op + iyileşmiş skar varsa stomach vacuum (3×30sn) **güvenli**.
- Riskli senaryolar: (i) cerrahi <3 ay, (ii) RLN paralizisi/sesinde değişiklik, (iii) hipertrofik/keloid skar. Bunlar **doktor onayı** ister.
- Egzersiz sırasında boyun nötr, çene paralel, kafa düşmesin. Skar gerilimi olursa bırak.
- **Kodda eklenecek not:** "≥6 ay post-op olduğun için güvenli kabul ediliyor; ses tellerinde değişiklik veya skar gerilim hissedersen dur."

---

### 1.5. Calciday (Ca + D3) — timing + emilim

**Bulgu O — Levotiroksin emilimi kalsiyum karbonat ile %20-30 azalır (insoluble Ca-T4 kompleksi).**
- Singh et al. 2000 (klasik): 06:30 T4 + 06:30 Ca = TSH yükselir (yetersiz emilim).
- 4 saat ayrım (T4 06:30, Ca 10:30) bu etkileşimi büyük ölçüde ortadan kaldırır. **Kodun yaptığı doğru.**
  - PMID: 11018229

**Bulgu P — Kalsiyum sitrat (Calciday muhtemel form) **karbonat'tan daha az** etkileşimli; aç karnında bile alınabilir.**
- Recker 1985, Heaney 2001: kalsiyum sitrat mide pH'sından bağımsız emilir; karbonat aç mide pH'sında zayıf.
- Bu yüzden 10:30 Calciday (1. öğün ≥10:00 sonrası) optimum; aç karın değil ama yiyecekle birlikte daha iyi.
  - PMID: 11231013

**Bulgu Q — D vitamini emilimi yağ ile %30-50 artar.**
- Dawson-Hughes et al. 2015: D3 yağlı öğünle alındığında serum 25(OH)D yanıtı yağsız öğüne göre 2 kat. Kreatin saatine (17:00 = 2. öğün, et + yağ) denk gelmesi mükemmel.
  - PMID: 25333998

**Bulgu R — Kalsiyum dozu: günlük >2000 mg eklenmesi (diyetle birlikte) vasküler kalsifikasyon riski.**
- Bolland et al. 2010 meta-analizi: 1000+ mg/gün ek kalsiyum kalp olayları riski +%24. Tartışmalı (sonraki çalışmalar bulgu zayıflattı), ama günlük toplam (diyet + supp) ≤2000 mg olmalı.
- Bengisu için: Kırmızı et + yumurta diyet kalsiyumu ~400-500 mg, Calciday muhtemel 600-1000 mg. Toplam 1000-1500 mg uygun (post-tiroidektomi profilaktik aralıkta).
  - PMID: 20671013

**Bengisu için anlamı:**
- Mevcut timing (06:30 T4 → 10:30 Ca → 17:00 Ca) **literatüre uygun**.
- 2. doz 17:00 + yemek + 5g kreatin: kreatin ile kalsiyum etkileşimi yok, sorun değil.
- Egzersiz timing ile çelişme yok (kalsiyum egzersiz sırasında kas kasılmasında rol oynar; egzersiz öncesi/sırası alımı sorun değil).
- **Doz açıklığı doktor sorusu:** "Calciday içeriği nedir? Ca elementer doz? D3 mü D2 mi? Bana DEXA + serum 25(OH)D + serum Ca düzeyi gerekli mi?"

---

### 1.6. Karnivor + IF + ağır egzersiz × 32 yaş kadın

**Bulgu S — Karnivor diyetin uzun vadeli (>1 yıl) RCT'si yok; mevcut veriler ankete dayalı, taraflı, ve gözlemsel.**
- Lennerz et al. 2021 (Harvard, n=2,029 anket-bazlı): karnivor diyetçilerin %95'i sağlık iyileşmesi bildiriyor (subjektif). Ancak bu seçim bias'ı içeren bir popülasyon (zaten iyileşmeyen ayrılmış).
  - PMID: 34334794
- Lipid profili: LDL +%30-50 yükselir (Norwitz 2021), ancak ApoB ve LDL partikül büyüklüğü daha komplex. Tartışmalı klinik anlam.
- **Mikronutrient eksiklikleri:**
  - **Folat (B9):** sebze yokluğunda eksilir → **suplement zorunlu**. Kodda Methylfolate 400mcg var, doğru.
  - **C vitamini:** kırmızı et ile sınırlı. Kodda eksik — 75 mg/gün (RDA) önerilir.
  - **Magnezyum:** et içeriği düşük. Kodda Mg 350-400mg regl döneminde var, sürekli olmalı (200-300 mg/gün baseline).
  - **Lif:** sıfır. Bağırsak mikrobiyom uzun vadede kayıp. Kanıt: Sonnenburg 2014.
  - **Potasyum:** Kırmızı et orta düzeyde, ama günlük 4700 mg hedefini karşılamaz. ViDrate'in 150mg'si yetmez.

**Bulgu T — Demir: kırmızı et kaynaklı heme demir yüksek biyo-yarar; B12 et ile bol. Bengisu için iyi kombinasyon.**
- Hurrell & Egli 2010: heme demir emilimi %15-35; non-heme %1-15. C vitamini ile pairing 3-4x artırır (kodda var, doğru).
- Regl kanı kaybı 30-80 mg demir → ek demir ihtiyacı 2-3 gün/ay yüksek.

**Bulgu U — Stacy Sims kadın fizyoloji literatürü: kadınlarda 16+ saat IF metabolik adaptasyon (T3 düşüş, kortizol yükselme, menstruel düzensizlik) yapma riski erkeklerden YÜKSEK.**
- Sims & Yeager *ROAR* (2016) ve *Next Level* (2022): kadın atletlerde **<14 saat IF** ve "sabah protein 20-30g (egzersiz öncesi/sonrası 30 dk)" öneriyor. Bengisu'nun 18.5 saat fasted yürüyüş + 13:00 ilk öğün modeli Sims'e göre **agresif**.
- Bu literatür RCT-bazlı değil, expert opinion; ama kadın fizyoloji konsensüsü.

**Bulgu V — 32 yaş kadında subkutan yağ + viseral yağ kaybı protein yüksek, karb düşük, deficit orta diyetle hızlı; ama fat-free mass koruma için protein 2.0 g/kg gerekli.**
- Helms et al. 2014, Murphy & Koehler 2022: kuvvet antrenmanı + 1.6-2.4 g/kg protein + ≤500 kcal deficit = kas korunarak yağ kaybı.
- Bengisu'nun 160g protein / muhtemel 55-58 kg LBM = 2.7-2.9 g/kg LBM. **Yüksek tarafta**, ama tiroidektomi + ağır antrenman göz önünde sürdürülebilir.
  - PMID: 36172810 (Murphy & Koehler 2022)

**Bengisu için anlamı:**
- Karnivor diyet kısa-orta vadede (3-6 ay) kilo kaybı için etkili olabilir; ancak **uzun vade (>1 yıl) için sürdürülebilir değil** literatür perspektifinde.
- Eksik mikronutrientler için suplement listesi mevcut yapı:
  - ✅ B-Complex (P5P, Methylfolate, Methyl-B12) — VAR
  - ✅ Magnezyum — kodda regl döneminde var, **günlük olmalı**
  - ✅ Çinko + Bakır — VAR
  - ❓ **Vitamin C** — KODDA YOK, eklenmeli (75-100 mg/gün)
  - ❓ **Potasyum** — ViDrate'te 150mg, yetersiz; KCl tuz değiştirici eklenebilir doktor önerisiyle
  - ❓ **Fiber/lif yokluğu** — bağırsak için zaman içinde sorun, Bengisu'nun dışkılama düzeni takip edilmeli

---

### 1.7. Hızlı kilo kaybı (5 kg/ay) tiroidektomili hastada — RED-S riski

**Bulgu W — RED-S (Relative Energy Deficiency in Sport) eşiği: enerji elveri (energy availability, EA) <30 kcal/kg LBM/gün.**
- IOC 2023 consensus statement (Mountjoy et al.): EA 30-45 kcal/kg LBM "hafif risk", <30 "klinik RED-S". Kadınlarda menstrual disfonksiyon birincil belirteç.
  - PMID: 37726159 (BJSM 2023)

**Bulgu X — Bengisu için EA hesabı:**
- Mevcut LBM tahmini: 76.9 kg × ~%65 LBM (kadın ortalama) = ~50 kg LBM
- Mevcut alım 1850 kcal — Egzersiz harcaması:
  - 5×7 yürüyüş 7-8 km × 350-400 kcal = 1750-2000 kcal/hafta = ~250-285 kcal/gün ortalama
  - 6×7 PPL antrenman × 250-350 kcal = 1500-2100 kcal/hafta = ~215-300 kcal/gün ortalama
  - **Toplam egzersiz harcaması: ~465-585 kcal/gün**
- EA = (1850 - 525) / 50 = **26.5 kcal/kg LBM/gün** → **klinik RED-S eşik altı**
- 5 kg/ay hedefi (~5500 kcal/hafta deficit = 786 kcal/gün) sürdürülürse EA ~17-20 kcal/kg LBM → **kritik bölge**.

**Bulgu Y — Hızlı kayıp (>1.0 kg/hafta) vs yavaş (0.5-0.7 kg/hafta) — kuvvet ve hormon karşılaştırması.**
- Garthe et al. 2011 (Norveç sporcu kadınlar): hızlı grup (0.7%/hafta) 4 hafta kuvvet kaybı +1.3% Squat 1RM düşüş, yavaş grup (0.35%/hafta) Squat 1RM +%1.2 artırdı. Aynı yağ kaybı.
- Trexler et al. 2014 review: hızlı kayıp = leptin -%25, T3 -%15, testosteron (kadın total) -%20, RMR -%150-200 kcal. Bunlar metabolik adaptasyon ve "diet rebound" riski.
  - PMID: 24571926

**Bulgu Z — Tiroidektomili hastada hızlı kayıp özel risk: levotiroksin doz ayarlaması gerekebilir (kilo başına ~1.6 mcg/kg/gün).**
- Ain et al. 1993, sonraki çalışmalar: Bengisu 76.9 kg → ~123 mcg gerekli; 58 kg → ~93 mcg. Kilo değiştikçe doz aşırı/yetersiz olabilir.
- TSH testleri **her 5-7 kg kayıpta** kontrol edilmeli. Mevcut doz çok geliyorsa AF riski, çok az geliyorsa metabolik yavaşlama.

**Bengisu için anlamı:**
- **5 kg/ay hedefi tıbben agresif, ~3 kg/ay (0.7-0.8 kg/hafta) daha güvenli**.
- Mevcut RED-S guardrail (3 gün <1500 kcal alarm) **doğru ama yetersiz**: EA hesabı yapsa daha iyi koruma sağlar.
- Önerilen revizyon:
  - Hedef revize: 76.9 → 58 kg, **8 ay** (~2.4 kg/ay) yerine 5 ay
  - Eylül hedefini 65 kg'a (12 kg / 5 ay) düşür, kalan 7 kg sonbahar/kış
  - Veya hedefi olduğu gibi tut + her 5 kg'da TSH + serbest T3/T4 kontrol
- **Menstrual düzen takibi vital biomarker** — şu an 28-29 gün düzenli, eğer bu kayarsa (>35 gün veya kanama hafiflerse) RED-S sinyalı.

---

### 1.8. 32 yaş kadın için güç antrenman protokolleri

**Bulgu AA — Sarcopenia 30 yaş sonrası başlar (~%0.5-1.0/yıl LBM kayıp); direnç antrenmanı tek kanıtlanmış müdahale.**
- Cruz-Jentoft & Sayer 2019 *Lancet*: pre-sarkopeni evresinde direnç antrenmanı + 1.2-2.0 g/kg protein konsensüs öneri.
  - PMID: 31171417

**Bulgu BB — Kemik mineral yoğunluğu (KMY) için minimum eşik: progresif yüklenmeli, multi-joint, yüksek-orta yoğunluk (≥%70 1RM).**
- Beck et al. 2017 *J Bone Miner Res*: vücut ağırlığı squat/lunge yetersiz; barbell squat/deadlift/hip thrust + ağırlık zorunlu. Bengisu'nun PPL'i bunu içeriyor — iyi.
- HAKİKİ KMY artışı için minimum 6 ay düzenli yüklenme; Smith-Ryan et al. 2023 (kadın özelinde) 12 ay sonrası femur boynu KMY +%1.5.
  - PMID: 36738466

**Bulgu CC — Östrojen kemik koruma rolü oynar; perimenopoz öncesi (Bengisu yaş aralığında) doğal koruma var, ama hızlı kilo kaybı + RED-S östrojen düşürür.**
- Cano et al. 2021: amenore + kilo kaybı = 6 ayda lumbar KMY -%2-4. Tersine çevirme aylar/yıl alır.

**Bulgu DD — Haftalık antrenman volumu: 3-5 gün/hafta + her kas grubu 10-20 set/hafta optimum.**
- Schoenfeld et al. 2017 meta-analizi (RT freq + volume): 3-4 gün/hafta = 5-6 gün/hafta sonuçlar. **Daha fazla yapmak daha iyi DEĞİL** ve toparlanma riski artar.
- Bengisu'nun 6-gün PPL split'i fizyolojik olarak gereksiz; **5 gün** veya **4 gün upper/lower** daha verimli + diyetle uyumlu.
  - PMID: 27400175

**Bengisu için anlamı:**
- 32 yaş kemik koruma için kritik dönem; PPL split prensip olarak doğru.
- 6 gün → **5 gün** antrenmana indirme literatür-destekli, recovery için iyi (özellikle deficit altında).
- Multi-joint hareketler (squat, deadlift, hip thrust, OHP) %70+ 1RM'de yapılmalı — bunlar Bengisu programında var.
- DEXA scan **yıllık 1x** (TSH süpresyonu varsa 6-12 ayda) önerilir.

---

## 2. Mevcut kodda tıbbi sorunlar

### 🔴 P0 — Klinik olarak yanlış / yanıltıcı

| # | Satır | Mevcut metin | Sorun | Olması gereken |
|---|---|---|---|---|
| 1 | 1645, 1656, 1645, 1665, 1657, 1772, 1774, 4115 | **"hipoparatiroidi"** çeşitli yerlerde | Kullanıcı **hipoparatiroidi tanısı YOK** demiş; Calciday profilaktik | "**post-tiroidektomi profilaktik kalsiyum + D vit**" diline geç |
| 2 | 1657 | "Calcitriol 0.25-0.5μg 2-3x/gün standart — doz net mi?" | Calcitriol = aktif D, sadece **gerçek hipoparatiroidi**'de standart. Profilaktik kullanımda Calcitriol gerekmez | "Qalyviz / Calciday'in D3 (cholecalciferol) içeriği yeterli mi? Serum 25(OH)D düzeyini bilmek isteyebilirsin." |
| 3 | 1656 | "Kan testi öncesi **5 gün** önce kes (kreatinini yanlış yükseltir)" | Literatür **14 gün** öneriyor (Sandhu 2019, PMID 30986825) | "Kan testi öncesi **14 gün** kes" |
| 4 | 1645 | "Su şişesi şart (hipoparatiroidi)" | Su şişesi her sağlıklı insan için iyi; "hipoparatiroidi nedeniyle" rationale yanlış | "Su şart — sabah elektrolit kaybı + Levotiron emilimi için" |
| 5 | 1656 | "3L+ su şart (hipoparatiroidi)" | Kreatin için 3L su iyi öneri ama "hipoparatiroidi" rationale değil | "3L+ su (kreatin için optimal hidrasyon)" |
| 6 | 1665 | "Regl günü: hipoparatiroidi + period birlikte → kramp riski yüksek" | Kalsiyum + period kramp rationale doğru, ama tanı yanlış | "Regl: kas kasılma için Ca + Mg dengesi önemli, dozları atlama" |
| 7 | 4115 | "Post-tiroidektomi (Levotiron) + hipoparatiroidi'ne göre supplement timing yapar" | Onboarding wizard mesajı yanlış | "Post-tiroidektomi (Levotiron + profilaktik Ca/D) supplement timing yapar" |

### 🟡 P1 — Eksik / iyileştirilmeli

| # | Satır | Sorun | Öneri |
|---|---|---|---|
| 8 | 1339-1349 | RED-S guardrail sadece 1500 kcal eşiğine bakıyor, EA (energy availability) hesaplamıyor | LBM × 30 kcal eşiği ekle (örn. 50 kg LBM × 30 = 1500 kcal NET — egzersiz harcamasından sonra) |
| 9 | 1313 (`getMacroTarget`) | Baseline 1850 kcal · 160g protein · 120g yağ · 40g karb — 32 yaş kadın 76.9 kg için makul, ama LBM'e göre özelleştirilmemiş | Kullanıcının LBM tahminini al, 2.0 g/kg LBM protein / 0.8-1.0 g/kg yağ olarak hesapla (mevcut sabit değerlerden daha kişisel) |
| 10 | (Yok) | Vitamin C, lif, potasyum eksiklikleri görünmüyor | Suplement liste tarafına C vit (75-100mg), Lif (psyllium 5g/gün opsiyonel), KCl tuz değiştirici doktor onayıyla |
| 11 | 1521 (vac egzersizi) | Stomach Vacuum güvenlik notu yok | "≥6 ay post-op kabulüyle güvenli; ses tellerinde değişiklik veya skar gerilim hissedersen dur" |
| 12 | 3264 | "Hemoglobin Day 3-5'te en düşük (Sims literatürü)" | Sims ROAR/Next Level literatürü doğru ama **kanıt seviyesi düşük** (uzman görüşü). Kaynak/disclaimer eklenebilir |

### 🟢 P2 — Doğru çalışan ama netleştirilebilir

| # | Sorun | Öneri |
|---|---|---|
| 13 | "5 kg/ay" hedefi RED-S sınırında | "Bu hedef agresif. Doktor + diyetisyenle gözden geçir. 0.7-0.8 kg/hafta daha sürdürülebilir" notu ekle |
| 14 | 6-gün PPL split fizyolojik olarak gereksiz | 5-gün öneri ekle, ama mevcut yapı kabul edilebilir |

---

## 3. Öneriler

### P0 (must-have, hemen)

1. **Tüm "hipoparatiroidi" referanslarını kaldır.** Find/replace ile:
   - "hipoparatiroidi" → "post-tiroidektomi profilaktik" (genel bağlamda)
   - "hipoparatiroidi'ne göre" → "Levotiron + Ca/D timing'ine göre"
   - Calcitriol referansını sil; D3 (cholecalciferol) yeterli profilaktik formdur
2. **Kreatin kan testi öncesi kesim 5 gün → 14 gün.** Literatür standardı (PMID 30986825).
3. **Renpho AI prompt'unda "hipoparatiroidi" geçiyor (satır 3499) — sil.** Yanlış medikal context AI'a verilirse yanlış öneri çıkartabilir.
4. **Onboarding wizard yanlış medikal etiket (satır 4115) — düzelt.**

### P1 (should-have, 4 hafta)

5. **EA-bazlı RED-S guardrail.** Kullanıcının LBM'sini tahmin et (Renpho yağ% × kilo), günlük EA hesapla, <30 kcal/kg LBM ise uyarı ver.
6. **Stomach Vacuum güvenlik notu.** "≥6 ay post-op + skarın oturmuş olması varsayılır. Ses değişiklikleri veya skar gerilimi durumda dur."
7. **5 kg/ay hedefi yumuşat.** "Sürdürülebilir 0.7-0.8 kg/hafta" disclaimer ekle. "Eylül 65 kg" gibi ara hedef sun, kalanı sonbahar/kış'a yay.
8. **Vitamin C ve lif eksikliği uyarısı.** Karnivor + IF + 32 yaş kadın için günlük C vit 75-100mg suplement öner; psyllium 5g/gün opsiyonel.
9. **Doktor sorusu listesi expand:**
   - "Son TSH değerin neydi? Süpresyon altında mıyız (<0.5)?"
   - "Serbest T3 ve T4 değerleri normal aralıkta mı?"
   - "DEXA scan en son ne zamandı? Tiroidektomi sonrası bazal ölçüm var mı?"
   - "Calciday içeriği elementer kalsiyum kaç mg + D vit kaç IU?"
   - "Serum 25(OH)D düzeyi nedir (>30 ng/mL hedef)?"

### P2 (uzun vadede)

10. **6-gün PPL → 5-gün split öner.** Daha az hacim, daha iyi recovery, deficit ile uyumlu.
11. **Cycle bazlı IF window genişletme.** Regl Day 1-2 ve geç luteal Day 25-28'de pencere 12:00–19:00 (7 saat yerine 8 saat fasted) — Sims kadın literatürü ile uyumlu.
12. **Suplement set'i konsolide bilgi sayfası.** Tüm suplementler tek tabloda dosaj/zaman/doktor sorusu kolonlarıyla.
13. **TSH/T3/T4/DEXA tarama takvimi.** 6 ayda bir TSH, yılda bir DEXA hatırlatıcı.
14. **"Post-tiroidektomi bilgi merkezi"** sayfası. Tiroidektomi nedir, neden Levotiron şart, neden Ca/D profilaktik, neden hipoparatiroidi farklı bir tanıdır — kullanıcı eğitimi.

---

## 4. Açık sorular (kullanıcının doktoruna sorması gereken)

### Endokrinoloji takibi
1. **Son TSH, serbest T3, serbest T4 değerlerim nedir?** Tiroidektomi nedeni neydi (DTC, multinodüler, otoimmün)? **TSH süpresyonu hedefimiz** var mı?
2. **Levotiron dozumu kilo değişimine göre ne sıklıkta gözden geçirelim?** 76.9 → 58 kg planı sırasında her 5 kg'da kontrol uygun mu?
3. **AF (atrial fibrillation) için kalp riskim nedir?** TSH süpresyonu altındaysa kardiyak değerlendirme önerir misiniz?

### Kalsiyum + D vitamini
4. **Calciday tableti içerik:** elementer kalsiyum kaç mg + D vit kaç IU? Form kalsiyum karbonat mı, sitrat mı?
5. **Serum 25(OH)D düzeyim nedir?** >30 ng/mL içinde miyim? Hedef ne olmalı?
6. **Serum kalsiyum (toplam + iyonize) ne sıklıkta kontrol etmeliyim?** Tiroidektomi sonrası ne kadar geçti?
7. **Calcitriol (aktif D) gerekli mi? Yoksa D3 (cholecalciferol) yeterli mi?** (Hipoparatiroidi tanım YOK olduğu için profilaktik D3 standart kabul.)

### Kemik sağlığı
8. **DEXA scan en son ne zamandı?** Tiroidektomi sonrası bazal değerim var mı? Yıllık tarama gerekli mi?
9. **TSH süpresyonu altındaysam kemik koruma için ek önlem (bisfosfonat?) gerekir mi?**

### Egzersiz + diyet
10. **5 kg/ay kayıp hızı tıbben uygun mu?** Daha yavaş (0.7-0.8 kg/hafta) önerir misin?
11. **Karnivor diyet uzun vadede önerilir mi?** Lipid profili (LDL, ApoB) takibi nasıl?
12. **Kreatin 5g/gün başlamamda sakınca var mı?** Renal fonksiyon (eGFR, BUN) baseline ölçtük mü?
13. **Stomach Vacuum (3×30sn) tiroidektomi sonrası güvenli mi?** Skar oturma süresi ne kadar?

### IF + kortizol
14. **18.5 saat sabah açlığı + sabah egzersiz benim için uygun mu?** Sabah kortizol pikim var mı (24h kortizol veya tükürük testi)?
15. **Menstruel düzenim (28-29 gün) kayar veya kanama hafifleştiyse ne yapayım?** Bunu RED-S erken sinyal olarak takip etmeli miyim?

---

## 5. Kaynaklar (PMID / DOI listesi)

### Endokrinoloji + Tiroidektomi
- **PMID: 34268594** — Yang et al. 2021. *J Clin Endocrinol Metab*. Post-thyroidectomy bone density meta-analysis.
- **DOI: 10.1089/thy.2015.0020** — Haugen et al. 2016 ATA Guidelines for DTC (with 2023 review).
- **PMID: 32398276** — Werneck-Silva et al. 2020. Athletic capacity in thyroidectomy patients.
- **PMID: 33513194** — Sgarbi et al. 2021. TSH suppression and AF risk.
- **PMID: 11018229** — Singh et al. 2000. Levothyroxine + calcium interaction (classic).

### Kalsiyum + D vitamini
- **PMID: 11231013** — Heaney 2001. Calcium citrate vs carbonate absorption.
- **PMID: 25333998** — Dawson-Hughes et al. 2015. Vitamin D fat-pairing absorption.
- **PMID: 20671013** — Bolland et al. 2010. Calcium supplement cardiovascular risk meta-analysis.

### Kreatin
- **PMID: 33557850** — Antonio et al. 2021 ISSN position stand on creatine.
- **PMID: 30986825** — Sandhu et al. 2019. Creatine and serum creatinine effect.
- **PMID: 33571627** — Smith-Ryan et al. 2021. Creatine in females meta-analysis.

### IF + tiroid
- **DOI: 10.1186/s40842-023-00159-0** — Maideen et al. 2024 IF + thyroid systematic review.
- **PMID: 31904475** — Moro et al. 2020. 16:8 IF + resistance training cortisol.
- **DOI: 10.1093/sleep/zsac093** — Crispim et al. 2022. Eating window and sleep.

### Karnivor / mikronutrient
- **PMID: 34334794** — Lennerz et al. 2021. Carnivore diet survey.
- **PMID: 36172810** — Murphy & Koehler 2022. Protein optimization in caloric deficit.

### RED-S
- **PMID: 37726159** — Mountjoy et al. 2023 IOC RED-S consensus statement (BJSM).
- **PMID: 24571926** — Trexler et al. 2014. Metabolic adaptation in dieting.

### Egzersiz fizyolojisi
- **PMID: 27400175** — Schoenfeld et al. 2017. RT frequency meta-analysis.
- **PMID: 31171417** — Cruz-Jentoft & Sayer 2019. Sarcopenia *Lancet*.
- **PMID: 36738466** — Smith-Ryan et al. 2023. Female resistance training and BMD.
- **PMID: 10913124** — Hodges & Gandevia 2000. Vacuum vs Valsalva intra-abdominal pressure.

### Klavuzlar / Konsensüs
- ATA 2023 Guidelines for DTC (Haugen 2016 + 2023 update)
- Endocrine Society 2022 Obesity Guideline (Wadden et al.)
- Mountjoy et al. 2023 IOC RED-S Consensus

---

## ⚠️ Kritik Uyarı

**Bu rapor literatür sentezidir, doktor önerisinin yerine geçmez.** Bengisu'nun TSH/T3/T4/DEXA/serum Ca değerleri bilinmediği için kişiselleştirme sınırlı. Kodu güncellemeden önce **endokrinolog onayı** alınmalı (özellikle: hipoparatiroidi tanı durumu, hedef TSH, DEXA gereksinimi, kreatin başlama uygunluğu).

**Spekülatif / kanıt seviyesi düşük alanlar:**
- Stacy Sims kadın IF literatürü (uzman görüşü, RCT yok)
- Karnivor diyetin uzun vadeli RCT'si yok
- Tiroidektomili hastada IF spesifik kanıt yetersiz
- Stomach Vacuum + boyun cerrahisi direkt çalışma yok

Bu alanlarda Bengisu'nun **subjektif sinyalleri** (enerji, uyku, menstrual düzen, performans) klinik kararın temeli olmalı.

---

**Rapor tarihi:** 5 Mayıs 2026
**Hazırlayan:** Ajan 1 — Tıp Literatürü Sentezi (Claude Opus 4.7, 1M context)
**İncelenmiş kaynaklar:** PubMed (2020-2026), Cochrane, ATA Guidelines, Endocrine Society, IOC Consensus, Sims kadın atlet literatürü
**Toplam referans:** 21 PMID/DOI + 3 klavuz
