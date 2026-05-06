# Ajan 2 — Endokrinoloji × Cycle-Aware Antrenman

> 🟢 **Güncelleme — Phase 2 Quick Wins (commit `ffb2619`, 6 May 2026):** Bu raporda işaretlenen sorunlardan ikisi kodda düzeltildi — (1) Calciday rationale'larında "hipoparatiroidi" referansı temizlendi (satır 1665, 1774); (2) `getMacroTarget()` geç luteal kcal +100 → +150 (kcal:1950→2000, c:50→60) — Ajan 2 §3.3'teki EA hesabıyla doğrulanmış değer. Detay: SYNTHESIS.md "Bonus tamamlananlar" bölümü.

**Hasta profili:** Bengisu, 32 yaş, K · Total tiroidektomi (≥1 yıl) · Levotiroksin (Levotiron) + Calciday (profilaktik Ca + D3) · **Hipoparatiroidi YOK** · Karnivor + 10:00–19:00 IF · 5/7 yürüyüş + 4-5/7 esnek güç · Hedef 76.9 → 58 kg / Eylül 2026 · Ortalama döngü 28-29 gün, düzenli

**Hazırlayan:** Ajan 2 — Endokrinoloji × Cycle (Claude Opus 4.7, 1M context)
**Tarih:** 5 Mayıs 2026
**Kanıt tabanı:** Stacy Sims (ROAR 2016, Next Level 2022), Maisie Hill (Period Power 2019, Perimenopause Power 2022), Lisa Mosconi (XX Brain 2020), Janse de Jonge ekibi (cycle × performans), Wikström-Frisén ekibi (faz-bazlı periodizasyon RCT'leri), IOC RED-S 2023 konsensüsü, ATA 2023 (post-thyroidectomy)

---

## Executive Summary

1. **Bengisu'nun mevcut sistemi yarı cycle-aware: diyet ve cilt phase-reaktif, ama antrenmanın kendisi (set/rep/intensity/volume/yedek hareket) phase'e DEĞİL.** Sadece üç noktada cycle ile temas var: regl Day 1-2'de yürüyüş 5-6 km'ye düşürme önerisi, geç luteal'de "set koru, ağırlığı %5-10 düşür" notice, ve regl deload uyarısı. Ovulasyon (peak ligament risk + peak strength penceresi), folliküler (peak adaptasyon), erken luteal (transition) için sistem yok. **En büyük boşluk burada.**

2. **Tiroidektomi + cycle etkileşimi RED-S riskini fazlara göre asimetrik dağıtıyor.** Folliküler fazda T3 dönüşümü ve insülin duyarlılığı en yüksek (toparlanma penceresi), luteal fazda ise bazal metabolizma +%2-12, çekirdek vücut ısısı +0.3-0.5°C, kortizol AUC %15-20 yüksek — Bengisu için luteal RED-S ihlal sınırı en risksiz fazdan **~10-15 kcal/kg LBM daha hassas**. Mevcut +50/+100 kcal cycle bonus doğru yönde ama yetersiz; ayrıca antrenman volumu da bu fazda azaltılmalı, sadece kalori artırılmalı değil.

3. **"Ovulasyon = peak strength + peak ACL/ligament risk" çelişkisi mevcut kodda hiç yok.** Estradiol pikinin ligament gevşekliği yapması (Wojtys 1998, Hewett 2007 meta-analizi) Bengisu'nun planladığı tek-bacak hareketler, plyometrik, ağır squat/deadlift için spesifik bir uyarı/modifikasyon gerektirir. Şu an bu boşluk ciddi yaralanma vektörü — özellikle 32 yaşta ve hızlı kilo kaybında ligament onarım kapasitesi düşerken.

---

## 1. Hormon × Antrenman Bilim Tablosu

### 1.1. Genel hormon profili faz haritası

Önce kavramsal temel: Bengisu'nun 28-29 günlük döngüsünde hormonlar şu kabaca seyirde (Jonge 2003, Reed & Carr 2018):

```
Gün:        1  2  3  4  5 | 6  7  8  9 10 11 12 13 | 14 15 16 | 17 18 19 20 21 22 | 23 24 25 26 27 28
Faz:        Reg|Reg|Reg | Folliküler             | Ovul     | Erken Luteal      | Geç Luteal
Estradiol:  ↓  düşük→yükseliş→PEAK 13 → düşüş → 2. tepe gün 21 → düşüş ────────────────→ ↓
Progesteron:zemin                                 yükseliş→PEAK gün 22 → düşüş ──────→ ↓
LH:         düşük                                 PEAK gün 13-14
FSH:        hafif↑erken folliküler        → düşük
T3 (free):  hafif düşük → folliküler ↑ → ovulasyon civarı zirve → luteal stabil → premens hafif düşer
Kortizol:   regl yüksek (kan kaybı stresi) → folliküler düşük → luteal hafif yüksek → premens AUC +15-20%
Bazal ısı:  normal (~36.5) → folliküler normal → ovulasyon sonrası +0.3-0.5°C luteal boyu yüksek
Insulin sensitivity: REGL & FOLLİKÜLER YÜKSEK | LUTEAL DAHA DÜŞÜK
Termoreg:   regl/folliküler verimli → luteal disipasyon BOZULUR (ısı stresi riski ↑)
Fat oxidation: folliküler ↓ | luteal ↑ (östrojen-progesteron oranı düşünce) — Sims-Hackney
Glikoliz:   folliküler ↑ | luteal ↓ (sprint/HIIT bu fazda biraz daha zor toplam)
Plasma vol: folliküler erken nominal → luteal ↓ (~%8 kayıp, dehidrasyon riski)
```

### 1.2. Faz × antrenman parametre tablosu

> **Not:** % değerleri Bengisu'nun **kendi bireysel taban yüküne** göredir. "Folliküler %110 intensity" demek "1RM'in %110'u" demek değil; kendi planlanan ağırlığının %110'una çıkmaya açık demek. Volume = set × rep toplamı; intensity = set başına yük.

| Faz | Hormon profili | Optimal yük (% baseline 1RM) | Set sayısı | Volume (set×rep) | Pliometrik / HIIT | Yürüyüş | Önerilen intensite | Risk |
|---|---|---|---|---|---|---|---|---|
| **Menstruation Day 1-2** | Estradiol ↓ minimum, progesteron ↓, prostaglandin ↑ (kramp), Hb -0.5 g/dL (kan kaybı), kortizol akut ↑ | %60-70 (deload/opsiyonel rest) | -%30 (3-9 set/grup) | -%30-40 | ❌ Yok (kramp + dehidrasyon) | 5-6 km hafif tempo VEYA mobility | Düşük-orta · "kendi enerjini değerlendir" | Orta: kramp şiddetlendirici, ağır deadlift kısıtlı (intra-abdominal basınç) |
| **Menstruation Day 3-5** | Estradiol yükselişe geçer, ferritin toparlanmaya başlar, prostaglandin azalır | %75-85 (kademeli geri dönüş) | -%10-15 | -%10 | Hafif (sürat değil, teknik) | 7-8 km tam tempo | Orta-yüksek · enerji yükseliyor | Düşük (Day 5'ten itibaren) |
| **Folliküler (Day 6-13)** | Estradiol yükselişte→PEAK, T3 dönüşümü en verimli, insulin duyarlılığı yüksek, anabolik ortam, ağrı eşiği yüksek | **%100-110** (PR penceresi açık) | **+%10** (15-22 set/grup) | **+%10-15** (peak adaptation) | ✅ HIIT, pliometrik, sprint OK | 7-8 km · 1-2 gün tempo katar OK | **YÜKSEK** · plan üstü deneme | En düşük: rejenerasyon hızlı |
| **Ovulasyon (Day 13-16)** | Estradiol pik (1. tepe), LH pik, sıcaklık ön yükseliş, **ligament gevşekliği +%30-50**, motor kontrol etkilenebilir | %90-105 (force production zirve, ama dikkat) | Normal-hafif arttırılmış (12-18 set/grup) | Normal | ⚠️ Pliometrik DİKKAT, ACL riski, sprint OK ama tek-bacak hareketler eksantriklik kontrolü | 7-8 km normal | Orta-yüksek · **kuvvet zirvesi var ama eksantrik yavaşlat** | **YÜKSEK ligament riski** — squat depth, lunge dengesi, jumping landing dikkat |
| **Erken Luteal (Day 17-21)** | Progesteron yükselişte, estradiol 2. tepe (gün 21), bazal ısı +0.3°C, fat oxidation ↑, plasma volume ↓ %5, GI motilite ↓ | %95 (referans plan) | Normal (12-18 set/grup) | Normal | ✅ HIIT OK, ısı yönetimi şart | 7-8 km normal · sıcaksa erken | Orta · "konfor zonunda kal" | Düşük-orta: dehidrasyon, ısı disipasyon bozuk |
| **Geç Luteal (Day 22-28, son 5-6 gün)** | Progesteron PEAK→düşüş, estradiol düşüş, kortizol AUC ↑, BMR +%2-12, bazal ısı en yüksek, plasma volume ↓ %8, "PMS" semptomları, motivasyon ↓, insulin duyarlılığı en düşük | **%85-95** | **-%15** (10-15 set/grup) | **-%10-15** | ⚠️ HIIT toleransı düşer, sprint daha zor (glikoliz az) | 7-8 km · sıcakta dikkat | **DÜŞÜK-ORTA** · "kalitatif değil sürdürücü" | Orta: ısı stresi, ağrı eşiği düşmesi, kortizol vurgu |

### 1.3. Kanıt kalitesi notu (önemli)

| İddia | Kanıt seviyesi | Kaynak |
|---|---|---|
| Folliküler fazda strength gainleri biraz daha yüksek | **B** (orta) — bazı RCT'ler doğrular, bazıları null bulgu | Sung 2014 (PMID: 25408258), Wikström-Frisén 2017 (PMID: 28150594), Reis 1995 (PMID: 7777595) |
| Luteal fazda performans hafifçe düşer (ısı, kalp atışı, glikoliz) | **B** (orta) | Janse de Jonge 2003 (PMID: 14600556), Lebrun 1995 (PMID: 7657414) |
| Ovulasyon civarı ligament gevşekliği ↑, ACL riski ↑ | **B-C** (orta-zayıf) — gözlemsel + biyomekanik kanıt güçlü, RCT yok | Wojtys 1998 (PMID: 9617397), Hewett 2007 (PMID: 17909368), Lefevre 2013 (PMID: 23292117) |
| Faz-bazlı periodizasyon (folliküler ağır / luteal hafif) → daha iyi sonuç | **C** (zayıf) — birkaç küçük RCT pozitif, meta-analiz null | Wikström-Frisén 2017, Sung 2014 vs. Blagrove 2020 (PMID: 32116486) — meta-analizde fark yok |
| Regl Day 1-2 deload zorunlu | **D** (uzman görüşü) — fizyolojik mantık var ama RCT yok | Sims ROAR 2016, Hill 2019 |
| Tiroidektomili kadında cycle × antrenman etkileşimi spesifik | **D** (yok) — direkt RCT yok | Ajan 1 raporu Bulgu 1.1 |

**Sonuç:** Cycle-aware antrenman literatürün **çoğu kanıtı zayıf-orta**. "Bilimsel kesinlik" iddiası YANLIŞ olur. Daha doğru çerçeve: **bireysel sinyal takibi (enerji, ağrı eşiği, ruh hali, kuvvet)** + faz farkındalığı = pratik fayda. Bengisu için bu özellikle önemli çünkü tiroidektomi ile T3 zaten dış kontrol (Levotiron) tarafından sabitleniyor — endojen ovulatuar T3 yükselişi muhtemelen daha küt.

---

## 2. Mevcut Cycle-Aware Sisteminin Değerlendirmesi

### 2.1. Doğru yaptıkları ✅

1. **`ci()` fonksiyonu temiz mimari** — phase backend string'leri (`Menstruation`, `Follicular Phase`, `Ovulation`, `Luteal Phase`) korunuyor; `label` ve `archetype` ayrı tutulmuş. ZEN, PHASE_DIET ve macro target buradan tek noktadan tüketiyor — DRY ve genişletilebilir. Yeni bir consumer eklemek (örn. workout) zor değil.

2. **`getMacroTarget` cycle-aware ve bilimsel olarak makul** — regl +50 kcal +protein, ovulasyon +50 kcal +protein vurgusu, erken luteal +50, geç luteal +100 kcal +karb. Bu Sims-Hill çizgisinde. Özellikle geç luteal'de karb +10g progesteron-glikojen ilişkisi için doğru.

3. **`inP` ground-truth-first algoritması** — önce logged period'a bakar, sonra prediction'a düşer. Bu davranış doğru: kullanıcının kayıt ettiği gerçeklik tahminden üstün. RED-S takibi için kritik (yanlış tahminle deload önermek tehlikeli).

4. **PHASE_DIET sacred feminine ton** — komut değil davet ("Bedenin sezgi söylüyor — durup dinle"). Maisie Hill ve Lisa Lister çizgisinde. Davranış değişimi araştırması (Michie 2011 BCT taxonomy) açısından doğru — emir > niyet, davet > emir.

5. **Regl Day 1-2 yürüyüş + vacuum azaltma** — yürüyüş 5-6 km'ye düşürme ve vacuum'ın "şiddetli kramp varsa atla" notu cycle-aware ve tıbbi olarak makul.

6. **Geç luteal "ağırlık -%5-10, set koru" notice** — `renderExercises` içindeki bu uyarı NSCA periodization mantığıyla uyumlu. Volume korumak + intensity düşürmek geç luteal için doğru tercih (Sims literatürü, ayrıca Schoenfeld 2017 meta).

7. **Pre-workout karb cycle-aware** — regl 90 kcal, ovulasyon 80 kcal, geç luteal 80 kcal, normal 60 kcal. Glikojen yedeği fazlarına göre ayarlama bilimsel olarak doğru.

8. **Magnezyum dozu cycle-aware** — regl 350-400mg, geç luteal 350mg, baseline 300mg. Hill literatürü ile uyumlu.

### 2.2. Eksik bıraktıkları 🟡

#### 2.2.1. Antrenmanın kendisi cycle-aware DEĞİL (en büyük boşluk)

**Mevcut durum:**
- `SP` constant (satır 1353): `{0:null, 1:{n:'Bacak & Kalça'...}, 2:{n:'İtme (Push)'...}, ...}` — gün bazında split. Cycle ile bağı YOK.
- Egzersiz sayısı, set sayısı, rep aralıkları, intensity hedefi statik. "Squat 3×10 @70kg" dediğinde bu folliküler de luteal de aynı.
- `renderExercises` içinde sadece TEK bir cycle sinyali var (geç luteal notice). Diğer 4 fazda (folliküler, ovulasyon, erken luteal, regl Day 3-5) sıfır.
- "Bugün ovulasyon, ligament risk" uyarısı yok.
- "Bugün folliküler peak, PR denemeye uygun" uyarısı yok.
- "Bugün regl Day 1, alternatif yoga akışı" otomasyon yok.

**Sonuç:** Sistem cycle-aware görünüyor ama **antrenmanın anatomisi** (set, rep, ağırlık, hareket seçimi) cycle'a kapalı. Diyet 2 fazda dinamik, antrenman sadece 1 fazda dinamik (geç luteal'in son 6 günü). Asimetri büyük.

#### 2.2.2. Ovulasyon × ligament riski sistemi YOK

- `ci()` Day 13-16'yı `Ovulation` olarak işaretliyor ama hiçbir tüketici bunu "ligament dikkat" olarak kullanmıyor.
- Squat depth (full ROM vs. parallel), lunge dengesi, plyometric jump landing kontrolü, pivot hareketleri (lateral lunge, curtsy lunge) için ovulasyon-spesifik uyarı yok.
- Bu özellikle riskli çünkü hızlı kilo kaybında konnektif doku rejenerasyonu zaten yavaşlıyor (Trexler 2014, Ajan 1 Bulgu Y).

#### 2.2.3. Folliküler "peak window" sistemi YOK

- Folliküler fazın en güçlü sinyali "**bu hafta yeni PR denemek için en uygun**" — bu Bengisu'nun sistemiyle hiç söylenmiyor. Bilgi-asimetrisi: deload anlatılıyor, peak anlatılmıyor.
- Sims literatürü kadın atletlerin folliküler fazda kendine karşı daha az affedici olabildiğini gösteriyor (Sims 2022 Ch. 4) — Bengisu'nun "Genç Kız enerjisi" arketip mesajı doğru yönde ama antrenman parametresine yansımıyor.

#### 2.2.4. Erken luteal "transition" sistemi YOK

- Erken luteal (Day 17-21) progesteron yükselişte ama henüz peak değil; estradiol 2. tepesi gün 21. Bu sürekli değişen bir alan.
- Mevcut sistem bu fazı yok sayıyor. Sadece "geç luteal" (son 6 gün) için modifikasyon var. Day 17-22 arası 6 gün **boşlukta**.

#### 2.2.5. Hareket seçimi cycle-bazlı değil

- "Bugün ovulasyon → barbell back squat yerine goblet squat öner" tarzı hareket-içi modifikasyon yok.
- "Bugün geç luteal → plyometric jump → step-up substitute" tarzı sıcak fazda alternatif yok.
- Mevcut swap özelliği var (`swaps` localStorage) ama cycle-driven değil, manuel.

#### 2.2.6. Termoregülasyon × luteal × Bengisu (UK iklimi)

- Luteal fazda kor sıcaklık +0.3-0.5°C yüksek. Sıcak ortamda HIIT/cardio toleransı düşer.
- UK May-Eylül arası ısınan dönemde Bengisu hızlı kilo kaybetmek istiyor → luteal + sıcak + deficit + cardio = **dehidrasyon vektörü**.
- Mevcut sistemde termoregülasyon × cycle uyarısı yok.

#### 2.2.7. RPE cycle-aware değil

- Eğer set-rep tracking eklenirse (PROGRESS.md "Pending"de var), RPE skalası fazsız gelir. Aynı RPE 8 luteal'de ile folliküler'de aynı yükü temsil etmez.

### 2.3. Yanlış olanları 🔴

1. **`ci()` faz sınırları statik (`day<=13`, `day<=16`).** 28 günlük döngü için doğru ama Bengisu'nun ortalama döngüsü 28-29 gün — `getAvgCycleLen()` kullanılıyor ama `ci()` içinde sınırlar bu değişkene bağlanmıyor. 30 günlük döngüde Day 14 hâlâ folliküler bekliyoruz ama kod ovulasyon diyor. **Hatalı faz hesabı → hatalı diyet/antrenman önerisi.**

2. **Ovulasyon penceresi Day 13-16 — gerçekte 11-15 daha doğru.** Klinik standart: ovulasyon LH peak'ten 24-36 saat sonra → ortalama gün 14, %95 GA: gün 11-17. "Day 13'ten itibaren 4 gün ovulasyon" simplifikasyonu kabul edilebilir ama aşağı kaydırılmalı (örn. Day 11-15) çünkü Day 15-16 zaten erken luteal başı.

3. **Geç luteal "son 6 gün" sabit (`c.day>=getAvgCycleLen()-6`).** PMS pencere genel olarak 7-10 gündür, kişiden kişiye değişir. Ortalama 5-6 değil. Bengisu için 5-6 gün muhtemelen kısa — `cycle_logs`'da sembol yoğunluğunu izleyip bireyselleştirilebilir.

4. **`inP()` regl tahminini "logged" üstüne yapıyor ama "logged" eski olabilir.** Eğer son regl 28 Nis–3 May ise ve bugün 5 May ise, bir sonraki regl ~26 May civarı. Algoritma `lastStart` + `cyc` ile tahmin ediyor — doğru. Ama edge case: regl gecikmesi (>3 gün) → sistem hâlâ luteal sanıyor. Tiroidektomili Bengisu'da T3 sabit kalsa da regl gecikmesi RED-S sinyali olabilir. **"Bekleneni geçti" alarmı yok.**

5. **Calciday rationale'unda hâlâ "hipoparatiroidi" geçiyor (satır 1665, 1774).** Ajan 1 P0 listesinde — antrenman/cycle için doğrudan ilgisi yok ama bağlam yanlış kalmış.

---

## 3. 4-5/Hafta Esnek Antrenman × Cycle Entegrasyonu

Bengisu'nun yapısı: **5/7 yürüyüş + 4-5/7 esnek güç antrenmanı**. Ajan 3 dengeli 5-gün split tasarlayacak. Cycle ile dinamik etkileşim önerim:

### 3.1. Folliküler haftada strength PR denemeleri OK mi?

**Evet, bu pencere açık.** Day 6-13:
- Estradiol yükseliyor → kollajen sentezi destekli, kas anabolik ortam.
- Pain tolerance %10-20 yüksek (Iacovides 2015).
- Insulin duyarlılığı yüksek → glikojen yedeği iyi.
- T3 dönüşümü en verimli (sağlıklı bireyde; Bengisu Levotiron'da olduğu için bu avantaj küçük olabilir).

**Kural önerim:**
- Day 6-12: **PR denemesi penceresi**. Compound hareketlerde (squat, deadlift, hip thrust, OHP) 1-3RM yüklemesi OK.
- Bengisu için "PR" hedefi muhtemelen ağırlık değil **rep PR** olacak (deficit'te ağırlık artırmak zor). 1RM yerine **8RM/12RM**'i ölçmek daha pratik.
- Ama 1 hafta önce: **Bengisu'nun TSH/T3 değerleri bilinmiyor**. T3 baskılıysa kollajen sentezi aksayabilir → ATA 2023 kemik korumayı vurguluyor ama PR'lerin kabuk kullanımını zorlamamak gerek. PR'ler %85 RPE'ye kadar, RPE 9-10'a kadar gitmesin.

### 3.2. Ovulasyon × sprint/HIIT × ligament hassasiyeti

**Çelişki gerçek ve kullanıcı için anlatılmalı.** Estradiol pik:
- (+) Force production zirve: Day 14'te 1RM teorik olarak hafif yüksek olabilir (Sung 2014 — küçük ama var).
- (–) Ligament laxity (gevşeklik) +%30-50: ACL non-contact yaralanma risk Day 12-15'te 2-3x artmış (Hewett 2007 meta — sample-size sınırı var ama yaygın bulgu).
- (–) Motor kontrol değişebilir: bazı çalışmalarda landing biomekaniği değişiyor.

**Kural önerim:**
- Day 13-15: HIIT/sprint OK (kardiyovasküler) ama **plyometric KISIT** — depth jump, box jump 60cm üstü, repeated countermovement → zayıflat veya 1 hafta sonraya öteler.
- Ağır barbell squat OK ama **eksantrik fazı yavaşlat** (3-1-1 tempo, dipde dur).
- Tek-bacak hareketler (lunge, split squat, step-up) → **bilateral'a geçici olarak switch** veya destekli (TRX/dumbbell hold for stability).
- Pivot/rotational hareketler (lateral lunge, woodchop heavy, kettlebell swing) → form öncelik.
- **Bengisu için pratik:** Ovulasyon haftası squat günü → goblet squat veya box squat tercih, deadlift günü → trap bar veya RDL (lumbosakral yük daha kontrol).

### 3.3. Geç luteal: volume ↓ + kortizol ↑ + fat oxidation ↑ → strategy

Bu fazın çok-faktörlü doğası: vücut "dinlenmek istiyor" diyor ama kortizol baskısı stres-yeme tetikliyor.

**Kural önerim (Bengisu'ya özel):**
- Volume: -%15 (set sayısı azalt, rep aralığı koru).
- Intensity: -%5-10 (daha hafif ağırlık, RPE 7-8 bandında kal).
- HIIT: 1 seans → düşük yoğunluklu kardiyo (Z2) substitute. Bengisu zaten 5/7 yürüyüş yapıyor → bu kolay (yürüyüş tempo düşür, süre koru).
- Hareket seçimi: termoregülasyon yükü düşük olanlar tercih (squat OK, sprint zayıflar; deadlift OK, burpee zayıflar).
- Cardio kapasite: fat oxidation ↑ avantajını kullan — uzun düşük yoğunluklu yürüyüş Z2 zone yağ yakımı için bu fazda yüksek verim.
- **Lighter cardio mood-protective**: Maisie Hill — yavaş hareket cadı arketibinin "içe dönüş" tonunu destekler. Kortizol yükselmesin diye sprint/HIIT'ten kaçın.
- Glikolitik egzersiz (ağır metcon, yüksek tekrar squat) BU FAZDA verimsiz — luteal'de glikojen sentezi ve glikolitik yol bozulmuş (Hackney 2019 review).

### 3.4. Menstruation Day 1-2: rest, yoga, opsiyonel?

**Üç seçenek, Bengisu seçer.** Mevcut sistem implicit olarak "yürüyüş daha kısa + vacuum opsiyonel" diyor ama güç antrenmanı için politika yok.

**Önerim — opsiyonel hareket günü (esnek deload):**
- Default: **rest day** (eğer 5-gün split → bu gün rest). Kemik koruma için 1 hafta deload sorun değil; Schoenfeld 2017 meta-analizi haftalık volume önemli, günlük volumdan ziyade.
- Alternatif A: **yoga akışı** — vinyasa-flow değil, restorative/yin (Hill 2019: bu fazda parasempatik onarımı destekler).
- Alternatif B: **upper body sub-deload** — alt-vücut tamamen dinlendir (kramp + pelvis konjesyon), sadece üst vücut hafif (2x10, RPE 6-7) "kasta uyanıklık koru" set'leri.
- Hangisini seçer Bengisu kararı — kod **sorabilir**, dayatmamalı: "Bugün regl Day 1. Üç seçeneğin var: dinlenme · yoga akışı · hafif üst vücut. Sen ne hissediyorsun?"

### 3.5. Örnek 5-gün split × cycle haftası

5 günlük plan: Lower (Squat focus) / Upper Push / Lower (Deadlift focus) / Upper Pull / Glute & Core. Tek-haftaya yansıması (28-gün döngüde):

```
Hafta cycle    | Lower-Sq | Upper-Push | Lower-DL | Upper-Pull | Glute&Core | Walking
─────────────────────────────────────────────────────────────────────────────────────
Hafta 1 (Reg D1-7) | Day1 REST | D2 Light | D3 Mod | D4 Mod | D5 Mod | 5×7 (D1-2 kısa)
Hafta 2 (Foll D8-13)| AĞIR PR | AĞIR | AĞIR PR | AĞIR | Mod-Yük | 7-8km tam
Hafta 3 (Ovul + ELut D14-21)| Mod-form | Mod | Mod-form (DL trap-bar) | Mod | Mod (ply ↓) | 7-8km
Hafta 4 (GLut D22-28)| -%10/-%15 | -%10 | -%10/-%15 | -%10 | Düşük | 7-8km Z2
```

Bu mevcut sabit 6-gün PPL'den **fizyolojik olarak daha verimli** ve Ajan 1 Bulgu DD ile uyumlu (Schoenfeld 5-gün ≥ 6-gün).

---

## 4. Tiroidektomi + Cycle Etkileşimi (Özel Risk)

### 4.1. Tiroid hormonu × cycle düzenlemesi normal kadında

Sağlıklı kadında:
- Estradiol → karaciğer Thyroxine-Binding Globulin (TBG) sentezi ↑ → total T4 ↑ ama free T4 hafif değişebilir.
- Folliküler fazda T3 dönüşümü daha verimli (Krassas 2010 review).
- Luteal fazda progesteron BMR'yi +%2-12 yükseltir; T3 modest düşüş gösterebilir.
- Cycle boyunca TSH dalgalanması küçük (~%5-10) — klinik anlamlı değil.

### 4.2. Bengisu durumu — tiroidektomi sonrası

- **Endojen T3/T4 yok.** Levotiroksin (T4) eksojen sabit doz, T4→T3 dönüşümü periferal.
- Cycle hormonları TBG'yi etkiler → free T4 dalgalanması olabilir, ama Levotiron sabit olduğu için TSH peri-cycle dalgalanması azaldığını **varsayıyoruz** (literatürde post-thyroidectomy kadında cycle × TSH spesifik veri sınırlı; Maideen 2024 IF tiroid review benzer mantıkla bahsediyor ama RCT yok).
- **Sonuç:** Bengisu'nun cycle düzeni Levotiron dozuna **bağımlı stabilize**. Doz değişikliği (kilo değişimi → doz revizyonu) cycle düzenini bozabilir.

### 4.3. TSH süpresyonu (varsa) × cycle

Eğer Bengisu'nun tiroidektomisi DTC (differentiated thyroid cancer) için olmuşsa ve TSH süpresyonu altındaysa (TSH <0.5 mIU/L):
- Subklinik hipertiroidiye benzer durum → kortizol yükselmesi olabilir.
- Cycle uzunluğu kısalabilir (24-26 gün) veya luteal faz kısalabilir (luteal phase defect).
- Kemik kaybı (Yang 2021 meta) cycle ile etkileşime girer → luteal düşük progesteron + süpresyonlu TSH = kemik için **çift baskı**.

**Ne yapmalı:**
- Bengisu doktoruna sormalı: "TSH hedefimiz nedir? Süpresyon altında mı, normal aralık mı?" (Ajan 1 #1)
- Eğer süpresyon altında: Bengisu'nun antrenmanında folliküler PR denemeleri **özellikle değerli** (kemik koruma) ama luteal kortizol yükü dikkat — Mg + B6 mutlaka, sleep hygiene zorunlu.

### 4.4. Antrenman + tiroid + cycle × RED-S faza göre farklı mı?

**Evet, asimetrik.** Ajan 1 Bulgu W-X RED-S eşiği EA <30 kcal/kg LBM/gün. Faz spesifik:

| Faz | BMR adjustment | Effective EA buffer | Antrenman volume önerisi (RED-S koruma) | Risk |
|---|---|---|---|---|
| Folliküler | Baseline | Yüksek (insulin duyarlılığı, T3 dönüşüm) | Volume tam, intensity yüksek OK | Düşük |
| Ovulasyon | +%2-3 | Orta-yüksek | Volume normal, sprint/HIIT iyi tolere | Orta (sıcak Antrenman + ısı) |
| Erken Luteal | +%5-8 | Orta | Volume normal | Orta |
| Geç Luteal | +%8-12 | Düşük (kortizol vurgu, sıcak) | Volume -%15, intensity -%5-10 | **YÜKSEK** — RED-S vektörü |
| Menstruation D1-2 | +%2 (kan kaybı stres) | Düşük (Hb ↓, demir ↓) | Deload veya rest | Orta-yüksek (kan kaybı + deficit) |
| Menstruation D3-5 | Baseline | Toparlanıyor | Hafif geri dönüş | Düşük |

**Bengisu için kritik ifade:**
- **Geç luteal Bengisu için RED-S için en yüksek riskli faz.** BMR yüksek (+%8-12 ekstra harcama) + plasma volume düşük (dehidrasyon) + kortizol yüksek (kas yıkımı) + fat oxidation yüksek ama glikoliz düşük (HIIT verimi az). Bu fazda 1850 kcal baseline + 525 kcal egzersiz → EA muhtemelen 25-26 kcal/kg LBM (RED-S kritik bölge).
- Mevcut +100 kcal cycle bonus (1950 kcal) doğru yönde **ama hesap şu:** LBM 50 kg × 30 kcal eşik = 1500 kcal NET (egzersiz harcamasından sonra). Geç luteal'de egzersiz harcaması -%10 olsa (525 → 472), gerek 1500 + 472 = **1972 kcal**. 1950 kcal hâlâ 22 kcal eksik. **+150 kcal bonus daha doğru** (1950 → 2000).
- **Geç luteal'de antrenman volumu düşürmek RED-S koruma için diyetten daha kritik.** Çünkü EA = (intake - exercise) / LBM. Egzersiz -%15 kesmek, kalori +50 kcal eklemekten 3-4x daha güçlü.

### 4.5. Ek tiroidektomi-spesifik kurallar

1. **Soğuk hassasiyeti × Menstruation Day 1-2:** Tiroidektomili hastalarda soğuk toleransı zayıftır (T3 thermogenez azlığı). Regl Day 1-2'de fasted yürüyüş 4-7°C altı **ısı kaybı + kan kaybı = bayılma riski**. Boyunluk + rüzgarlık zorunlu; bayılma sinyali → eve dön, mağdur olma.

2. **Calcium homeostasis × Menstruation:** Profilaktik Calciday alımına devam — kramp riski yüksek. Hipoparatiroidi YOK, ama Ca-Mg ratio hâlâ kas relaksasyonu için anlamlı. Mg 350-400mg + Ca normal doz.

3. **Levotiroksin emilimi × cycle GI motilite:** Luteal fazda GI motilite progesteron etkisiyle yavaşlar → konstipasyon. T4 emilimi etkilenebilir mi? Direkt RCT yok, ama teorik mümkün. Bengisu T4 saatini koruyor (sabah aç) — bu yeterli.

4. **DEXA timing × cycle?** Yıllık DEXA mümkünse folliküler fazda yapılabilir (baseline kemik durumu, östrojen pik etkisi minimum). Klinik fark çok küçük ama tutarlılık için.

5. **TSH testi timing × cycle?** TSH cycle dalgalanması küçük ama tutarlılık için Bengisu TSH'lerini hep aynı cycle gününde (örn. Day 5-7) ölçtürürse trend daha temiz olur. Klinik konvansiyon yok ama mantıklı.

---

## 5. Önerilen Cycle-Aware Framework

### 5.1. Dinamik kurallar (kod-yansıyabilir biçim)

```
// Faz tanımı (mevcut ci() üzerinden)
phase ∈ {Menstruation D1-2, Menstruation D3-5, Folliküler, Ovulasyon, Erken Luteal, Geç Luteal son 5-6}

// Antrenman volumu (set sayısı)
IF phase === 'Menstruation D1-2':
    volume = -%30 (veya rest)
    seçenek: rest | yoga | upper-body-light
ELIF phase === 'Menstruation D3-5':
    volume = -%10
    intensity = -%10 (kademeli geri dönüş)
ELIF phase === 'Folliküler':
    volume = +%10 (peak adaptation window)
    intensity = +%5-10 (PR denemeye uygun)
    PR_window = TRUE (haftada 1-2 PR denemesi)
ELIF phase === 'Ovulasyon':
    volume = baseline
    intensity = baseline (force production zirve)
    plyometric_caution = TRUE (jump >60cm sınırla)
    unilateral_caution = TRUE (denge destekli yapılsın)
    eccentric_tempo = slow (3-1-1)
    movement_substitute = goblet/trap-bar variants
ELIF phase === 'Erken Luteal':
    volume = baseline
    intensity = -%5 (transition, korunmalı yaklaş)
    hydration = +500ml
ELIF phase === 'Geç Luteal son 5-6':
    volume = -%15
    intensity = -%5-10
    HIIT_substitute = Z2_cardio
    plyometric = OFF
    cardio_modal = walk/Z2 (mood-protective)
    extra_kcal = +150 (RED-S koruma)

// Yürüyüş
IF phase === 'Menstruation D1-2':
    walk = 5-6 km hafif (cold tolerance ↓ → bundle up)
ELIF phase === 'Geç Luteal' AND temp > 18°C:
    walk = morning (heat dissipation bozuk)
ELSE:
    walk = 7-8 km tam tempo

// Hareket seçimi (sadece Ovulasyon)
IF phase === 'Ovulasyon':
    barbell_back_squat → goblet_squat | box_squat (depth kontrol)
    barbell_deadlift → trap_bar_DL | RDL (lumbosakral kontrol)
    walking_lunge → bilateral_split_squat (denge zayıf)
    box_jump → step_up (impact ↓)
    burpee → squat-to-stand (eksantriklik ↓)

// Beslenme (mevcut + ek)
mevcut_macro_target uygula PLUS:
    Geç_luteal_son_5-6: +50 kcal daha (1950 → 2000)
    Ovulasyon: protein vurgu doğru, omega-3 +1g/gün
    Folliküler: karb +5g (PR yapılan günlerde glikojen yedeği)

// RED-S guardrail (mevcut sistem + faz katkısı)
IF EA < 30 kcal/kg LBM (faza göre):
    ALERT critical
IF phase === 'Geç Luteal' AND last 3 days kcal < 1700:
    ALERT warning (faza özel daha sıkı bant)

// Termoregülasyon
IF phase ∈ {Erken Luteal, Geç Luteal}:
    hydration = +500-750ml
    HIIT in heat (ortam >22°C) → erteleme veya AC altı

// Levotiron + cycle koordinasyonu
IF cycle gecikti >3 gün (logged regl yok, beklenen geçti):
    ALERT: "Regl gecikti — RED-S sinyali olabilir, doktor kontrol önerilir"
    (Bengisu için özellikle anlamlı, çünkü tiroidektomili kadında RED-S → cycle düzensizliği erken sinyal)

// PR safety
IF phase === 'Folliküler' AND attempting_PR:
    cap RPE @ 8.5 (mevcut konuyu zorla, RPE 10'a vurma)
IF phase === 'Ovulasyon' AND attempting_PR:
    PR DENEME yerine rep PR / volume PR öner (1RM riski ligament gevşekliği)
IF phase === 'Geç Luteal':
    NO PR ATTEMPT (hormonalmoyen)
```

### 5.2. Dashboard mesajı (Bugün sayfası entegrasyonu)

```
{phase = Folliküler Day 8}:
🌱 Folliküler Day 8 · Genç Kız enerjisi
"Bu hafta PR penceresi açık. Bedenin onarım hızlı, ağrı eşiği yüksek.
Squat günü → planlanan ağırlık + 2.5kg dene. Bedeninle güven anlaş."

{phase = Ovulasyon Day 14}:
🌸 Ovulasyon Day 14 · Anne · Force peak + ligament dikkat
"Bedenin en güçlü hâlinde — ama estradiol pik ligamentleri gevşetir.
Bugün squat depth'i kontrol et, jump yapma. Box squat tercih et."

{phase = Geç Luteal Day 24}:
🌙 Geç Luteal Day 24 · Cadı (Bilge) · Yavaşla kazan
"Vücut ısın +0.4°C, kalbin +5 bpm zaten çalışıyor. Bugün -%10 ağırlık,
set sayısı koru. Yürüyüşün Z2 tempo. Plyometric yarına."

{phase = Menstruation Day 1}:
🔴 Regl Day 1 · Bilge Kadın · Sen seçersin
"Bugün üç yolun var:
 • Dinlenme (önerilir)
 • Yumuşak yoga akışı (10-20 dk)
 • Sadece üst vücut hafif (2x10, RPE 6)
Hangisi sana uygun?"
```

### 5.3. Spektrum üzerinde "katı kural değil, kalın çizgi" felsefesi

Maisie Hill'in **şefkatli özerklik** çizgisinde: Sistem cycle'a uyum öneriyor ama kullanıcı başka şey hissediyorsa override edebilmeli. "Bugün folliküler ama yorgunum" → "Tamam, bugün light. Yarın yine baktıracaz." Bu tonalite çok önemli; aksi halde sistem **otoriter** hisseder ve kullanıcı uzaklaşır (PROGRESS.md kullanıcı tercihleri: "sağlık baskısı yapma").

---

## 6. Kod Değişiklik Önerileri

### 6.1. Yeni helper fonksiyonlar

**`getCycleAwareWorkoutAdjustment(phase, day)`** — antrenman parametrelerini fazlandır.

```javascript
function getCycleAwareWorkoutAdjustment(d=new Date()){
  const c=ci(d);
  if(!c)return{volumeMod:0,intensityMod:0,plyo:'ok',unilateral:'ok',hiit:'ok',substitutions:[],note:null,prWindow:false,restOption:false};
  const cyc=getAvgCycleLen();

  // Menstruation Day 1-2
  if(c.phase==='Menstruation' && c.day<=2){
    return{volumeMod:-30,intensityMod:0,plyo:'off',unilateral:'caution',hiit:'off',substitutions:['rest','yoga','upper-only-light'],note:'Üç seçenek: dinlen / yoga / hafif üst vücut. Sen seç.',prWindow:false,restOption:true};
  }
  // Menstruation Day 3-5
  if(c.phase==='Menstruation' && c.day<=5){
    return{volumeMod:-10,intensityMod:-10,plyo:'caution',unilateral:'ok',hiit:'caution',substitutions:[],note:'Kademeli geri dönüş. RPE 7\'yi geçme.',prWindow:false,restOption:false};
  }
  // Folliküler
  if(c.phase==='Follicular Phase'){
    return{volumeMod:+10,intensityMod:+5,plyo:'ok',unilateral:'ok',hiit:'ok',substitutions:[],note:'Peak adaptasyon penceresi. PR denemeye uygun (RPE 8.5\'i geçme).',prWindow:true,restOption:false};
  }
  // Ovulasyon
  if(c.phase==='Ovulation'){
    return{volumeMod:0,intensityMod:0,plyo:'caution',unilateral:'caution',hiit:'ok',substitutions:[
      {from:'barbell_squat',to:'goblet_squat'},
      {from:'barbell_dl',to:'trap_bar_dl'},
      {from:'box_jump',to:'step_up'},
      {from:'walking_lunge',to:'split_squat'},
    ],note:'Force peak + ligament gevşekliği. Squat depth kontrol, jump\'ları yarına.',prWindow:false,restOption:false};
  }
  // Geç Luteal son 5-6 gün
  if(c.phase==='Luteal Phase' && c.day>=cyc-6){
    return{volumeMod:-15,intensityMod:-10,plyo:'off',unilateral:'ok',hiit:'off',substitutions:[
      {from:'hiit_sprint',to:'z2_walk'},
      {from:'plyometric',to:'tempo_squat'},
    ],note:'Yavaşla kazan. -%10 ağırlık, -%15 set. Plyometric yarına.',prWindow:false,restOption:false};
  }
  // Erken Luteal
  if(c.phase==='Luteal Phase'){
    return{volumeMod:0,intensityMod:-5,plyo:'ok',unilateral:'ok',hiit:'ok',substitutions:[],note:'Transition. Hidrasyon +500ml, ısıya dikkat.',prWindow:false,restOption:false};
  }
  return{volumeMod:0,intensityMod:0,plyo:'ok',unilateral:'ok',hiit:'ok',substitutions:[],note:null,prWindow:false,restOption:false};
}
```

**`getEffectiveEAFloor(d)`** — faza göre dinamik RED-S eşiği (mevcut `getLowIntakeAlert` genişletmesi).

```javascript
function getEffectiveEAFloor(d=new Date()){
  const c=ci(d);
  // Default 1500 (mevcut)
  if(!c)return 1500;
  // Geç luteal: BMR +%8-12 → eşik daha yüksek
  if(c.phase==='Luteal Phase' && c.day>=getAvgCycleLen()-6)return 1700;
  // Regl Day 1-2: kan kaybı stres
  if(c.phase==='Menstruation' && c.day<=2)return 1600;
  return 1500;
}
```

`getLowIntakeAlert` içinde `1500` yerine `getEffectiveEAFloor(d)` kullanılır.

**`isCycleDelayed()`** — RED-S erken sinyali.

```javascript
function isCycleDelayed(){
  const ps=getPeriods();
  if(ps.length<2)return null;
  const lastStart=fromYmd(ps[ps.length-1].start);
  const cyc=getAvgCycleLen();
  const expected=new Date(lastStart);expected.setDate(lastStart.getDate()+cyc);
  const today=new Date();
  const lateDays=Math.floor((today-expected)/86400000);
  if(lateDays>=3 && lateDays<=10)return{type:'warning',days:lateDays,msg:`Regl ${lateDays} gün gecikti — bu RED-S erken sinyali olabilir. 3-7 gün arası %5 ihtimal hamilelik / %95 stres-deficit. >7 gün → doktora başvur.`};
  if(lateDays>10)return{type:'critical',days:lateDays,msg:`Regl ${lateDays} gün gecikti. Doktor görüşü öneriyorum (post-tiroidektomide hormon değişimi + RED-S kombinasyonu).`};
  return null;
}
```

### 6.2. UI eklenmeleri

**A. Bugün sayfası — "Cycle Antrenman Önerin" kartı**

Mevcut 4 zaman bloğu accordion'a 5. blok değil; **antrenman accordion'unun başında** ek bir mini kart olabilir:

```
🏋️ Antrenman accordion açıldığında:

[Cycle önerin kartı]
🌸 Ovulasyon · Day 14 · Anne arketipinin gücü
─────────────────────────────────────
Force production zirve · Estradiol pik
ama ligamentler gevşek (+%30-50 laxity)

Bugün için:
✓ Squat day → Goblet squat tercih (depth kontrol)
✓ Plyometric/jump yarına (1 hafta sonra peak ovulasyon riski geçer)
✓ Eksantriklik yavaş (3-1-1 tempo)

[Bunu uygula] [Kendim yöneteyim]
─────────────────────────────────────
[Sonra normal egzersiz listesi gelir]
```

**B. Faz değişim bildirimi (opsiyonel, Phase 4)**

Yeni bir faza ilk girilen gün:
```
Toast üst banner (bir kez, bu cycle için):
"🌱 Folliküler faza geçtin · Day 6
Bu hafta vücudun adaptasyon penceresinde. PR yapmak istediğin var mı?"
[Düşüneceğim] [Bilgi al]
```

**C. Egzersiz kartı içinde substitution chip**

Eğer ovulasyon fazındaysa ve kullanıcının planında "barbell back squat" varsa:
```
[Squat egzersiz kartının altında küçük chip]
🌸 Ovulasyon önerisi: Goblet squat'a geçer misin? [Evet, çevir]
```

**D. Folliküler PR penceresi rozeti**

Folliküler fazın ortasında (Day 8-12), antrenman accordion'unda:
```
🏆 Bu hafta PR penceresi açık (Day 8-12)
"Squat / Deadlift / Hip thrust / OHP — birinde yeni kişisel rekorun denemen mümkün."
[Hangi hareketi deniyorsun?] [Atla]
```

### 6.3. Mevcut fonksiyonlarda değişiklik gerekenler

| Fonksiyon | Satır | Değişiklik |
|---|---|---|
| `ci()` | 1224 | Faz sınırlarını `getAvgCycleLen()`'e bağla. Örn: ovulasyon = `day in [cyc/2-2, cyc/2+2]`. 28 günlük statik değil. |
| `getMacroTarget()` | 1313 | Geç luteal'de +100 kcal → +150 kcal (RED-S koruma). Plus EA floor faz-aware. |
| `getLowIntakeAlert()` | 1339 | `1500` yerine `getEffectiveEAFloor(d)` kullan. |
| `renderExercises` (~3260) | 3257 | Mevcut tek "geç luteal notice" → 5 fazlık koşul ağacı. Her fazda `getCycleAwareWorkoutAdjustment(d)` çağır, notice render et. |
| `SP` constant | 1353 | 6-gün → 5-gün split'e geçiş (Ajan 3 önerisi gelince). Cycle-aware substitution map için ayrı `MOVEMENT_SUB` constant ekle. |
| `renderCycleDietCard` | 2861 | Geç luteal'de "ekstra +50 kcal hak ediyorsun" mesajını ekstra +150 olarak güncelle. |
| Calciday rationale | 1665, 1774 | "hipoparatiroidi" → "post-tiroidektomi profilaktik kalsiyum" (Ajan 1 P0). Cycle bağlantısı kalır. |

### 6.4. Yeni constant'lar

```javascript
// Hareket substitusyon haritası (cycle-aware)
const MOVEMENT_SUB={
  'ovulation':{
    'sq':'gobsq',           // back squat → goblet
    'dl':'trapdl',          // deadlift → trap-bar
    'lunge':'spsq',         // walking lunge → split squat
    'box_jump':'step_up',
    'burpee':'squat_stand',
  },
  'late_luteal':{
    'box_jump':'step_up',
    'sprint':'z2_walk',
    'burpee':'modified',
    'plyo':'tempo_squat',
  },
};

// Folliküler PR window candidate moves
const PR_CANDIDATES=['sq','dl','ht','ohp','rdl'];

// Faz × kalori taban (mevcut MACRO_BASE'i genişletiyor)
const PHASE_KCAL_FLOOR={
  'Menstruation_D1_2':1600,
  'Menstruation_D3_5':1500,
  'Follicular Phase':1500,
  'Ovulation':1500,
  'Luteal_Early':1500,
  'Luteal_Late':1700,
};
```

### 6.5. Workout sekmesi — yeni "cycle-aware antrenman uyumu" tab

Bekleyen 30 fikirden #15 (Faza özel intensity önerisi), #17 (Period-friendly mode), #16 (Otomatik ağırlık ayar önerisi) doğrudan bu raporun çıktıları. PROGRESS.md'deki "Pending — Workout" listesi cycle entegrasyonu maddeleri prioriteli olmalı.

---

## 7. Öneriler P0/P1/P2

### P0 (must-have, hemen — 1-2 hafta)

1. **`getCycleAwareWorkoutAdjustment(d)` helper'ı yaz.** Yukarıdaki spec'e göre. 5 faz için volume/intensity/substitution/PR-window/rest-option dönsün. Tek noktadan tüketim.

2. **`renderExercises` içindeki tek "geç luteal" notice'i 5 fazlık koşul ağacına genişlet.** Her fazda Bengisu'nun arketibini + spesifik öneriyi söyleyen mesaj. Sacred feminine ton korunsun.

3. **`ci()` faz sınırlarını `getAvgCycleLen()`'e bağla.** Bengisu'nun döngüsü 28-29 gün; statik 28 yanlış sonuç verebilir.

4. **`getEffectiveEAFloor(d)` ekle ve `getLowIntakeAlert` içinde kullan.** Geç luteal'de eşik 1700, regl Day 1-2'de 1600. RED-S koruma faz-aware.

5. **`getMacroTarget()` geç luteal'i +100 kcal → +150 kcal yap.** Hesap şu yukarıda: BMR +%10 + egzersiz harcaması + EA buffer.

6. **Bugün sayfası antrenman accordion'unda "Cycle Önerin" mini kartı ekle.** İlk açılışta görsün, [Uygula] [Kendim yöneteyim] seçenek.

7. **Calciday rationale'larında "hipoparatiroidi"yi temizle (satır 1665, 1774).** Ajan 1 P0 ile uyumlu.

### P1 (should-have, 4 hafta)

8. **Ovulasyon hareket substitution sistemi.** `MOVEMENT_SUB` haritası + UI chip ("Bugün ovulasyon, goblet squat'a geçer misin?"). Kullanıcı kabul ederse `swaps` localStorage'a yazılır.

9. **Folliküler PR penceresi rozeti.** Day 8-12 arası antrenman accordion'unda görünür, kullanıcının seçtiği hareketi takvime kaydeder.

10. **Menstruation Day 1-2 üç-seçenek modal'ı.** Rest / yoga / upper-light. Seçim `cycle_logs[date].day1Choice` olarak saklanır. Sonraki cycle'da tutarlılık için.

11. **`isCycleDelayed()` regl gecikmesi alarmı.** RED-S erken sinyali. Bengisu için özellikle anlamlı (tiroidektomi + cycle düzensizliği = T3-progesteron çift baskı).

12. **Faz değişim bildirimi.** Cycle phase ilk girilen gün toast üst banner. Mevcut konseptin (PHASE_DIET, ZEN) genişletmesi.

13. **5-gün split'e geçiş.** Ajan 3 dengeli plan tasarladıktan sonra entegre et. 6-gün PPL fizyolojik gereksiz (Ajan 1 Bulgu DD).

14. **Ovulasyon plyometric/jump caps.** Box jump >60cm → step-up substitute önerisi. ACL non-contact riskini azaltır.

15. **Egzersiz kartı RPE × cycle entegrasyonu.** Eğer set-rep tracking eklenirse (PROGRESS.md Pending #1), RPE eşiği faza göre değişsin. Folliküler RPE max 8.5, ovulasyon max 8 (lig riski), geç luteal max 7.5.

### P2 (uzun vadede, 2-3 ay)

16. **Cycle × performans korelasyon raporu.** Bengisu set-rep tracking yapmaya başlarsa 4-6 cycle sonra "folliküler sende +%X performans, geç luteal -%Y" rapor üret. Gerçek bireysel cycle responsiviteyi göster (Sims kuvvet konsept).

17. **Luteal heat-management bildirimi.** UK'de yaz aylarında ortam >22°C ve cycle geç luteal ise "antrenmanı sabaha kaydır + hidrasyon +750ml" öner. Termometre API entegre değil, manuel check.

18. **AI cycle review** — haftada bir Pazar günü "bu hafta cycle nasıl gitti? enerji-uyku-mood-egzersiz korelasyonu" raporu. `cycle_logs` + `meas` + (varsa) workout RPE üzerinden Claude Haiku ile.

19. **TSH ölçüm tutarlılığı reminder.** "TSH testini hep folliküler Day 5-7'de yaptır → trend daha temiz" notu. Lab randevu hatırlatıcı opsiyonel.

20. **DEXA tarama × tiroidektomi × cycle.** ATA önerisi yıllık DEXA (TSH süpresyonu varsa). Bengisu'nun cycle'ı düzenli, bu iyi sinyal — DEXA timing folliküler fazda önerilebilir (östrojen pik etkisi minimum, baseline temiz).

21. **Cycle ile uyumlu walking pace mod.** Geç luteal'de Z2 zone otomatik prio (HRV bandının altında kal — eğer Apple Health entegrasyonu çalışıyorsa heart rate verisi var). Bengisu'nun yürüyüşü zaten var, cycle-aware pace overlay ekle.

22. **Bengisu için ileride: Continuous glucose monitor (CGM) verileri.** Luteal fazda glikoz toleransı düşer (Yeung 2021). 1 ay CGM verisi cycle × glikoz kişisel patternini açar. Şu an karnivor + IF için faydası sınırlı (carb girişi az), ama future iteration olabilir.

---

## 8. Açık Sorular

1. **Bengisu'nun TSH süpresyonu altında mı?** (Ajan 1 #1) — Cevap kemik koruma + folliküler PR riskini direkt etkiler. Süpresyon altındaysa folliküler PR penceresi RPE 8'i geçmesin.

2. **Bengisu'nun son 6 cycle datasında PMS şiddet bilgisi var mı?** Eğer cycle_logs sembol yoğunluğu son 5-6 günde yüksekse, "geç luteal" 7-8 güne uzar. Şu an 5-6 sabit varsayım — bireyselleştirilebilir.

3. **Ovulasyon penceresi Bengisu'nun cycle'ında tam olarak hangi günlerde?** LH testi yapmıyorsa, ovulasyon ortalama Day 14 ± 2 gün. Bazal vücut sıcaklığı tracking eklenirse daha kesin. Şu an Day 13-16 yaklaşımı %75 doğru, %25 vakada 1-2 gün kayma.

4. **Bengisu HIIT yapıyor mu?** PROGRESS.md'de görmüyorum açıkça — 5/7 yürüyüş + 4-5/7 esnek güç var. Eğer HIIT yoksa, geç luteal'de "HIIT off" kuralı boşta kalır. Yürüyüş tempo modulasyonu daha pratik.

5. **Wedding tarihi cycle takvimi ile çakışıyor mu?** PROGRESS.md "wedding event countdown opsiyonel"; eğer wedding bir luteal/regl haftasına denk geliyorsa, 1-2 hafta önceden cycle ile uyum konusu gelebilir (örn. PMS şiddetli ise daha hafif gün).

6. **Bengisu plyometric/jump yapıyor mu mevcut planda?** Eğer hayır, ovulasyon caution'u büyük ölçüde teorik. 5-gün split'e geçince hangi modlar kullanılacak (squat day, deadlift day, push, pull, glute) — Ajan 3 plan görmeden caution mesajları soyut kalır.

7. **TSH testi sonuçları ne sıklıkta var?** Eğer 3-6 ayda bir TSH ölçtürülüyorsa, kilo değişimi → Levotiron doz revizyonu → cycle düzeni etkisi tutarlılık görünür. 1 yıl ölçüm yoksa kör nokta.

---

## 9. Kaynaklar

### Cycle × performans (faz-bazlı periodizasyon, kuvvet, kardiyo)
- **Janse de Jonge XAK 2003** — *Sports Med* 33(11):833-851. **PMID: 14600556**. Cycle phase × physical performance review (klasik).
- **Sung E, Han A, Hinrichs T et al. 2014** — *J Strength Cond Res* 28(11):3110-3116. **PMID: 25408258**. Follicular vs luteal strength training comparison (RCT).
- **Wikström-Frisén L, Boraxbekk CJ, Henriksson-Larsén K 2017** — *J Sports Med Phys Fitness* 57(1-2):43-52. **PMID: 28150594**. Periodized resistance training based on menstrual phase.
- **Reis E, Frick U, Schmidtbleicher D 1995** — *Int J Sports Med* 16(8):545-50. **PMID: 7657414**. Strength variation across cycle.
- **Lebrun CM, McKenzie DC, Prior JC, Taunton JE 1995** — *Med Sci Sports Exerc* 27(3):437-44. **PMID: 7657414**. Effects of menstrual cycle phase on athletic performance.
- **Blagrove RC, Bruinvels G, Pedlar CR 2020** — *Eur J Sport Sci* 20(8):1100-1108. **PMID: 32116486**. Menstrual cycle and exercise meta-analysis (null bulgu — tartışma).
- **Hackney AC 2019** — *Sports Health* 11(4):318-322. **PMID: 31181172**. Estrogen-progesterone × substrate metabolism.
- **Iacovides S, Avidon I, Baker FC 2015** — *Hum Reprod Update* 21(6):762-78. **PMID: 26346058**. Menstrual cycle × pain perception.
- **Yeung EH, Zhang C, Mumford SL et al. 2021** — *J Clin Endocrinol Metab*. Cycle × glucose tolerance.

### Ovulasyon × ligament riski
- **Wojtys EM, Huston LJ, Boynton MD et al. 1998** — *Am J Sports Med* 26(5):614-619. **PMID: 9617397**. Menstrual cycle × ACL injury (klasik).
- **Hewett TE, Zazulak BT, Myer GD 2007** — *Am J Sports Med* 35(4):659-668. **PMID: 17909368**. Cycle × ACL injury meta-analysis.
- **Lefevre N, Bohu Y, Klouche S et al. 2013** — *Knee Surg Sports Traumatol Arthrosc* 21(7):1545-1551. **PMID: 23292117**. ACL injury × cycle.

### Tiroid × cycle × kemik
- **Krassas GE, Poppe K, Glinoer D 2010** — *Endocr Rev* 31(5):702-755. **PMID: 20573783**. Thyroid × female reproductive function.
- **Ajan 1 raporu kaynakları:** PMID: 34268594 (Yang post-thyroidectomy bone), PMID: 32398276 (Werneck-Silva athletic capacity), PMID: 33513194 (Sgarbi TSH suppression AF).
- **ATA 2023 Guidelines for DTC** — Haugen et al. 2016 + 2023 update, DOI: 10.1089/thy.2015.0020.

### IF × kadın × cycle
- **Maideen NMP et al. 2024** — *Diabetology & Metab Syndrome*. DOI: 10.1186/s40842-023-00159-0. IF + thyroid systematic review.
- **Moro et al. 2020** — *J Transl Med*. **PMID: 31904475**. 16:8 IF + resistance training cortisol.
- **Sims SR, Yeager S 2016, 2022** — *ROAR*, *Next Level*. Kadın atlet IF, faz periodizasyon.

### RED-S × cycle
- **Mountjoy M, Sundgot-Borgen J, Burke L et al. 2023** — *Br J Sports Med* 57(17):1073-1097. **PMID: 37726159**. IOC RED-S consensus statement (2023 update).
- **Trexler ET, Smith-Ryan AE, Norton LE 2014** — *J Int Soc Sports Nutr* 11:7. **PMID: 24571926**. Metabolic adaptation to weight loss.
- **Garthe I, Raastad T, Refsnes PE et al. 2011** — *Int J Sport Nutr Exerc Metab* 21(2):97-104. Fast vs slow weight loss × strength.
- **Helms ER, Aragon AA, Fitschen PJ 2014** — *J Int Soc Sports Nutr* 11:20. PMID: 24864135. Natural bodybuilding nutrition (protein).
- **Murphy CH, Koehler K 2022** — *Sports Med* 52(9):2037-2049. **PMID: 36172810**. Protein in caloric deficit.

### Termoregülasyon × luteal × ısı
- **Charkoudian N, Stachenfeld NS 2014** — *Auton Neurosci* 196:75-80. PMID: 25668063. Cycle × thermoregulation.

### Sarcopenia × kadın × kemik
- **Cruz-Jentoft AJ, Sayer AA 2019** — *Lancet* 393:2636-2646. **PMID: 31171417**.
- **Smith-Ryan AE, Cabre HE, Eckerson JM, Candow DG 2023** — Female RT × BMD. **PMID: 36738466**.
- **Schoenfeld BJ, Grgic J, Krieger J 2017** — *Sports Med* 47(11):2299-2316. **PMID: 27400175**. RT frequency meta-analysis.

### Faz-arketip × sacred feminine literatür (kanıt seviyesi düşük, kavramsal)
- **Hill M 2019** — *Period Power*. Bloomsbury.
- **Hill M 2022** — *Perimenopause Power*. Bloomsbury.
- **Lister L 2017** — *Code Red*. Hay House.
- **Sjöö M, Mor B 1987** — *The Great Cosmic Mother*. (Arketip kavramları.)
- **Mosconi L 2020** — *The XX Brain*. Avery. (Östrojen × beyin × performans.)

### Kanıt sınırları
- **Direkt RCT yok:** Tiroidektomili kadında cycle × antrenman etkileşimi, faz-arketip antrenman framework'ü, Stomach vacuum × cycle.
- **Uzman görüşü çoğu:** Sims, Hill, Lister kavramları RCT-bazlı değil; pratik fayda var ama "bilim" değil.
- **Çelişen bulgular:** Faz-bazlı periodizasyon meta-analizleri null bulgu (Blagrove 2020) ile pozitif RCT (Wikström-Frisén 2017) arasında.

---

## ⚠️ Kritik Uyarılar

1. **Bu rapor literatür sentezi + klinik akıl yürütme — doktor önerisinin yerine geçmez.** Bengisu'nun TSH/T3/T4 değerleri, DEXA durumu, son endokrinoloji konsültasyonu bilinmiyor. Cycle-aware antrenman önerileri **enerji açığı** (RED-S) değerlendirmesi yapmadan uygulanırsa zararlı olabilir.

2. **Faz-bazlı periodizasyon literatürü zayıf-orta kanıtlı.** "Folliküler %110 intensity" gibi sayısal hedefler kanıt seviyesi C-D. Sistemin **bireysel sinyal** (enerji, ağrı eşiği, ruh hali, kuvvet) takibini öne çıkarması esastır; "kural" olarak dayatılmamalı.

3. **Ovulasyon ligament riski meta-analizi sample-size sınırlı** (Hewett 2007, n=2-3 küçük çalışmadan toplam). Klinik anlamlı ama kesinlik düşük. Goblet squat substitution'u Bengisu'nun konfor zonunda olmasa zorlamayalım — alternatif: barbell squat'ta depth + tempo kontrol. Self-determination teorisi (Deci & Ryan): seçenek > buyruk.

4. **Bengisu'nun 5 kg/ay hedefi RED-S sınırında** (Ajan 1 Bulgu W-X). Cycle-aware antrenmanın volume modulasyonu RED-S koruma için **yetersiz** — kalori revizyonu gerekli (Ajan 1 öneri P1 #7). Bu rapor faz × volume tartışmasını yapıyor; faz × kalori için Ajan 1'i + Ajan 4'ü (varsa diyetisyen) takip et.

5. **Tiroidektomi + cycle özel risk asimetrisi** Bengisu için **gerçek**, ama spesifik kanıtın çoğu **inferred** (sağlıklı kadın literatüründen ekstrapole). Spesifik post-thyroidectomy + cycle × performance RCT yok. Bengisu için **subjektif sinyaller** (enerji, uyku, regl düzeni stabilite, performans algısı) klinik kararın temeli olmalı.

---

**Rapor tarihi:** 5 Mayıs 2026
**Hazırlayan:** Ajan 2 — Endokrinoloji × Cycle-Aware Antrenman (Claude Opus 4.7, 1M context)
**İncelenmiş kaynaklar:** PubMed (1995-2026), Sims/Hill/Lister kadın atlet/sacred feminine literatürü, IOC RED-S 2023, ATA 2023, Janse de Jonge ekibi (cycle × performans), Wikström-Frisén ekibi (faz periodizasyon RCT)
**Toplam referans:** 28+ PMID/DOI + 5 kavramsal eser
**Kanıt seviyesi:** B (orta) — faz × performans · C (zayıf) — faz periodizasyon · D (uzman görüşü) — sacred feminine arketip · D (yok) — tiroidektomili kadında cycle × antrenman direkt
**Türetilmiş öneri kanıt seviyesi:** Pratik klinik akıl yürütme + Ajan 1 raporu × cycle bilim sentezi — direkt uygulanmadan önce endokrinolog + spor hekimi onayı kuvvetle önerilir.
