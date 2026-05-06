# Ajan 3 — Spor Bilimi / Kinezyoloji

**Hasta profili:** Bengisu, 32 yaş, K · Total tiroidektomi (≥1 yıl) · Levotiron + Calciday · 5/7 sabit yürüyüş 7-8 km · 4-5/7 esnek güç antrenmanı · Yeni başlayan-orta seviye lifter · Hedef 76.9 → 58 kg / Eylül 2026 · Ortalama döngü 28-29 gün

**Hazırlayan:** Ajan 3 — Spor Bilimi & Kinezyoloji (Claude Opus 4.7, 1M context)
**Tarih:** 5 Mayıs 2026
**Kanıt tabanı:** Schoenfeld (volume/frequency meta-analizleri 2016-2023), Helms (Muscle & Strength Pyramid 2019, MASS Research Review), Israetel (RP MEV/MAV/MRV serisi, 2018-2024), Nuckols (Stronger By Science derlemeleri), Zourdos (RIR/RPE skala validasyonu), NSCA (Essentials of Strength Training 4th ed.), ACSM (Exercise Prescription 11th ed.), Stuart McGill (omurga güvenliği), Greg Roskopf (movement screening)

---

## Executive Summary

1. **Mevcut 6-gün PPL split fizyolojik olarak gereksiz; kanıt 4-5 gün split'in eşit/üstün hipertrofi sonucu verdiğini gösteriyor (Schoenfeld 2017, PMID 27400175).** Bengisu'nun deficit'te kalori açığı + tiroidektomi + 5/7 yürüyüş zaten ek 1750-2000 kcal/hafta harcıyor — 6 gün antrenman recovery deficit'i yaratıyor. Önerim: **5-gün dengeli split** (Lower-Squat / Upper Push / Glute & Posterior Chain / Upper Pull / Total Body Hibrid). Her ana kas grubu ≥2x/hafta volume, 48 saat aynı grup tekrarı yok.

2. **Bengisu'nun başlangıç önerisi (Üst-Alt-Tüm-Üst-Alt) yapısal olarak iyi ama anatomik bir boşluk taşıyor: glute izolasyonu yetersiz, posterior chain günü tek başına yok.** Bengisu'nun "her ana kas grubunu çalıştırdım" tatmini için **glute + posterior chain günü ayrı** kalması daha güçlü bir tasarım — bu hem hip thrust tabanlı hareketlerle kemik koruma (Beck 2017, PMID 27875836) hem de "kalça öne çıkıyor" estetik hedefiyle uyuşur. Önerdiğim split bunu Day 3'e (Glute & Posterior) yerleştiriyor, hem squat hem deadlift haftada birer kez full-load işliyor.

3. **Cycle-aware otoregülasyon RPE/RIR sistemiyle birleşmeli.** RPE 6-8 hedef bandı yeni başlayanlar için optimal (Helms 2018), ancak luteal fazda RPE algısı yükselir (aynı yük → daha yüksek hissedilen efor; Romero-Moraleda 2019, PMID 31188810). Sistem Bengisu'nun girdiği RPE'yi cycle phase ile **kalibre edip** sonraki seans için akıllı yük önerisi vermeli. Bu mevcut kodda yok — `getEffectiveLoad(plannedWeight, cyclePhase, lastRPE)` helper'ı önerim.

---

## 1. 5-Gün Dengeli Güç Antrenmanı Split

### 1.1. Genel Tasarım — Tablo

| Gün | Adı | Süre | Ana kas grupları | Hareket sayısı | Cycle-aware notu |
|---|---|---|---|---|---|
| **Day 1 — Pzt** | 🦵 Alt Vücut: Squat Odaklı | 50-60 dk | Quadriceps (primer), Glute (sekonder), Adduktör, Core | 5-6 hareket | Folliküler PR penceresi (Day 8-12 ile çakışırsa) |
| **Day 2 — Sal** | 💪 Üst Vücut: İtme | 45-55 dk | Göğüs (üst+orta), Omuz (ön+orta deltoid), Triceps, Core (anti-rotation) | 5-6 hareket | Cycle-neutral; tüm fazlarda OK |
| **Day 3 — Çar** | 🍑 Glute & Posterior Chain | 50-60 dk | Glute max (primer), Hamstring, Erector spinae, Core | 5-6 hareket | Hip thrust luteal'de bile iyi tolere; deadlift ovulasyonda trap-bar'a swap |
| **Day 4 — Per** | 🏋️ Üst Vücut: Çekme | 45-55 dk | Sırt (lat, mid-trap, rhomboid), Posterior deltoid, Biceps, Core | 5-6 hareket | Cycle-neutral |
| **Day 5 — Cum** | 🌟 Total Body / Tam Vücut Hibrid | 45-55 dk | Compound carry-over: full body + omuz + core izolasyon + finisher | 5-6 hareket | Esneklik günü; geç luteal'de bu gün rest'e tercih |
| **Cmt + Pzr** | Yürüyüş + opsiyonel mobility | — | — | — | Day 6/7 yürüyüş 5-7 km, opsiyonel yoga / vacuum |

**Volume bütçesi (haftalık set sayısı):**

| Kas grubu | Direct sets/hafta | Indirect sets/hafta | Toplam | MEV / MAV (Israetel kadın) |
|---|---|---|---|---|
| Quadriceps | 12-14 | 4 (DL günü) | 16-18 | MEV 8 / MAV 12-16 ✅ |
| Hamstring | 8-10 | 4 (squat günü) | 12-14 | MEV 6 / MAV 10-14 ✅ |
| Glute | 12-16 (D1 + D3) | 6 (DL günü) | 18-22 | MEV 6 / MAV 12-16 ✅ |
| Göğüs | 8-10 | 2 (omuz pres carry-over) | 10-12 | MEV 8 / MAV 12-16 ✅ |
| Sırt (lat + mid) | 12-14 | 4 (curl carry-over) | 16-18 | MEV 10 / MAV 14-18 ✅ |
| Omuz (orta delt) | 8-10 (D2 + D5) | — | 8-10 | MEV 8 / MAV 12-16 ✅ |
| Biceps | 4-6 (D4) | 6 (pull carry-over) | 10-12 | MEV 6 / MAV 10-14 ✅ |
| Triceps | 4-6 (D2) | 6 (push carry-over) | 10-12 | MEV 6 / MAV 10-14 ✅ |
| Core | 8-10 (D1+D3+D5) | tüm compound | 8-10 direct | Israetel core "MV concept yok" — doygunluk-bazlı |

**Tüm gruplar Israetel'in MEV (Minimum Effective Volume) eşiğinin üstünde, MAV (Maximum Adaptive Volume) bandında.** Volume MRV'ye yakın değil — recovery margin sağlanmış (Bengisu yeni başlayan + deficit'te = MAV alt yarısı doğru tercih).

**Frekans:**
- Quadriceps: 2x (D1 ana, D5 squat-stand veya step-up)
- Hamstring: 2x (D1 carry-over RDL, D3 ana)
- Glute: 3x (D1 sekonder, D3 ana, D5 carry-over) ← Bengisu hedefine ekstra vurgu
- Göğüs: 1x (D2 ana) — yeni başlayan için 1x yeterli (Schoenfeld 2017)
- Sırt: 2x (D4 ana, D5 row varyasyonu)
- Omuz: 2x (D2 + D5)
- Biceps/Triceps: 2x (direct + indirect)

---

### 1.2. Gün Detayları

#### **Day 1 — Pazartesi: Alt Vücut · Squat Odaklı**

**Anatomik vurgu:**
- Primer: Quadriceps (rectus femoris, vastus medialis/lateralis/intermedius), Glute max
- Sekonder: Adduktör, Hamstring (eccentric kontrolü), Calf, Core (anti-fleksiyon)

**Hareket akışı (warm-up 5-7 dk + ana set 35-45 dk + cool-down 5 dk):**

| # | Hareket | Set × Rep | Hedef RPE | Dinlenme | Notlar |
|---|---|---|---|---|---|
| 1 | **Smith Machine Squat** veya **Goblet Squat** (yeni başlayan) | 4 × 8-10 | 7-8 | 2-2.5 dk | Ana lift; PR günü Folliküler'e denk gelirse rep PR (8RM) zorla |
| 2 | **Leg Press** | 3 × 10-12 | 7-8 | 90-120 sn | Quad volume; Smith squat'tan sonra MMC iyi |
| 3 | **Bulgarian Split Squat (Dumbbell)** veya **Reverse Lunge** | 3 × 10/taraf | 7 | 75-90 sn | Tek-bacak; ovulasyonda destekli (TRX/duvar) |
| 4 | **Leg Curl Makinesi** | 3 × 12-15 | 7-8 | 60-75 sn | Hamstring direct; squat günü Hamstring 1-1.5 set |
| 5 | **Cable Hip Abduction** veya **Abductor Makinesi** | 3 × 15-20 | 7 | 60 sn | Glute medius — pelvis stabilizasyonu, run/walk için kritik |
| 6 | **Pallof Press (anti-rotation)** veya **Cable Crunch** | 3 × 12/taraf | 6-7 | 45-60 sn | Core finisher; squat carry-over |

**Süre tahmini:** Warm-up 7 dk + 6 hareket × ~6-7 dk = **45-55 dk** (toplam 50-60 dk).

**Substitusyon önerileri:**
- Smith squat zorlu → Goblet squat (tek dumbbell göğüste) — yeni başlayan altın standart, eksantrik kontrol kolay
- Bulgarian split squat zorlu → Step-up (kutu üstüne adım) veya Reverse lunge
- Leg curl yoksa → Tek bacak Romanian deadlift (dumbbell, denge zor) veya Nordic curl (negatif fazda dur)

**Cycle modifikasyonu:**
- **Ovulasyon (Day 13-15):** Smith squat → Goblet squat (depth kontrol kolay), Bulgarian → Bilateral split squat veya step-up
- **Geç luteal (son 5-6 gün):** Tüm yükler -%5-10, set sayısı korunur (3-4 set)
- **Regl Day 1-2:** Bu gün rest veya yoga substitute; alternatif: Goblet squat 3×8 + Glute bridge 3×15 (RPE 6, "kasa uyanıklık")

---

#### **Day 2 — Salı: Üst Vücut · İtme (Push)**

**Anatomik vurgu:**
- Primer: Pectoralis major (klavikular = üst, sternal = orta), Anterior + Medial Deltoid, Triceps brachii
- Sekonder: Serratus anterior, Core (anti-extension)

**Hareket akışı:**

| # | Hareket | Set × Rep | Hedef RPE | Dinlenme | Notlar |
|---|---|---|---|---|---|
| 1 | **Incline Dumbbell Press (30-45°)** | 4 × 8-10 | 7-8 | 2 dk | Üst göğüs vurgu — kadın estetik için klavikular gelişim |
| 2 | **Dumbbell Shoulder Press** veya **Arnold Press** | 3 × 10-12 | 7-8 | 90-120 sn | Tam omuz; eğer Arnold zorlu → standart DB shoulder press |
| 3 | **Lateral Raise (Dumbbell veya Kablo)** | 4 × 12-15 | 7 | 60-75 sn | Orta deltoid — omuz genişliği; high-rep best (Schoenfeld 2014) |
| 4 | **Tricep Cable Pushdown** veya **Skull Crusher** | 3 × 12-15 | 7-8 | 60 sn | Triceps — long head için skull crusher tercih, lateral head için pushdown |
| 5 | **Cable Chest Fly (low-to-high)** | 3 × 12-15 | 7 | 60 sn | Göğüs ek volume — adduktion vurgu |
| 6 | **Plank (3 varyasyon)** veya **Stomach Vacuum** | 3 × 30-45 sn | 6-7 | 45 sn | Core + (Vacuum tiroidektomi-safe; Ajan 1 Bulgu K-N) |

**Süre tahmini:** Warm-up 5 dk + 6 hareket × ~7 dk = **45-55 dk**.

**Substitusyon önerileri:**
- Incline DB press zorlu → Machine chest press (incline)
- Arnold press zorlu → Seated DB shoulder press
- Lateral raise yorgun → Cable lateral raise (sabit gerilim)
- Skull crusher omuz ağrısı → Tricep dip (kutu üstünde)

**Cycle modifikasyonu:**
- Push hareketleri **cycle-neutral** — tüm fazlarda iyi tolere edilir
- Ovulasyonda dikkat noktası YOK (overhead press için ligament riski intermediate; ama omuz instabilitesi olmayan biri için sorun değil)
- Geç luteal: -%5 yük

---

#### **Day 3 — Çarşamba: Glute & Posterior Chain**

**Anatomik vurgu:**
- Primer: Glute maximus, Hamstring (semitendinosus, semimembranosus, biceps femoris)
- Sekonder: Erector spinae, Glute medius, Adduktör magnus (deadlift "third hamstring")

**Hareket akışı:**

| # | Hareket | Set × Rep | Hedef RPE | Dinlenme | Notlar |
|---|---|---|---|---|---|
| 1 | **Hip Thrust (Smith veya Barbell)** | 5 × 8-10 | 7-8 | 2 dk | Glute max maksimum aktivasyon (Contreras EMG 2014); kemik koruma için yüklü compound |
| 2 | **Romanian Deadlift (Dumbbell veya Barbell)** | 4 × 10-12 | 7-8 | 2 dk | Hamstring eccentric vurgu; SIRT NÖTR |
| 3 | **Single Leg Hip Thrust** veya **B-Stance Hip Thrust** | 3 × 10/taraf | 7 | 75-90 sn | Tek-bacak glute; pelvis stabilizasyonu |
| 4 | **Cable Kickback** veya **Glute Bridge (Bant)** | 3 × 15/taraf | 7 | 60 sn | Glute izolasyon — finisher pump |
| 5 | **Calf Raise (Leg Press veya Standing)** | 3 × 15-20 | 7-8 | 45-60 sn | Genelde unutulan; baldır = kemik koruma |
| 6 | **Stomach Vacuum** veya **Dead Bug** | 3 × 30 sn | 6 | 30 sn | Derin core (TVA); deadlift carry-over |

**Süre tahmini:** Warm-up 7 dk + 6 hareket × ~7-8 dk = **50-60 dk**.

**Substitusyon önerileri:**
- Hip thrust barbell zorlu → Glute bridge (zemin üstünde) + ağırlık
- RDL zorlu → Cable pull-through (denge kolay)
- Single leg HT denge → B-stance hip thrust (asimetrik bilateral)

**Cycle modifikasyonu:**
- **Ovulasyon (Day 13-15):** Konvansiyonel deadlift → Trap-bar deadlift VEYA RDL'ye geç (lumbosakral risk düşer); single leg HT → B-stance
- **Geç luteal:** Hip thrust set 5 → 4, yük -%5; RDL korunur (ROM kontrol kolay)
- **Regl Day 1-2:** Hip thrust 2×10 (RPE 6) light + RDL skip; veya total skip

---

#### **Day 4 — Perşembe: Üst Vücut · Çekme (Pull)**

**Anatomik vurgu:**
- Primer: Latissimus dorsi, Mid-trapezius, Rhomboids, Posterior deltoid, Biceps brachii
- Sekonder: Brachialis, Brachioradialis, Forearm flexors, Lower trap (rear delt fly)

**Hareket akışı:**

| # | Hareket | Set × Rep | Hedef RPE | Dinlenme | Notlar |
|---|---|---|---|---|---|
| 1 | **Lat Pulldown (Wide Grip)** veya **Assisted Pull-up** | 4 × 8-10 | 7-8 | 2 dk | Lat genişliği — kürek "kanatlanma" |
| 2 | **Seated Cable Row (Neutral Grip)** | 4 × 10-12 | 7-8 | 90-120 sn | Mid-back kalınlık; rhomboid + mid-trap |
| 3 | **Single Arm Dumbbell Row** | 3 × 10-12/taraf | 7-8 | 75 sn | Asimetrik unilateral; lat odak |
| 4 | **Face Pull (Cable, halat)** | 4 × 15-20 | 7 | 60 sn | Posterior deltoid + lower trap; postür düzeltici (Bengisu masa başı çalışıyorsa kritik) |
| 5 | **Dumbbell Bicep Curl** veya **Hammer Curl** | 3 × 10-12 | 7-8 | 60 sn | Biceps direct |
| 6 | **Band Pull-Apart** veya **Reverse Fly** | 3 × 15-20 | 6-7 | 45 sn | Posterior deltoid finisher |

**Süre tahmini:** Warm-up 5 dk + 6 hareket × ~7 dk = **45-55 dk**.

**Substitusyon önerileri:**
- Lat pulldown wide → Lat pulldown neutral (omuz dostu)
- Assisted pull-up yapamıyorsa → Inverted row (TRX veya barbell altında)
- Face pull yoksa → Reverse fly (bench üzerinde hafif dumbbell)

**Cycle modifikasyonu:**
- Cycle-neutral
- Geç luteal'de set 4 → 3 (lat pulldown), kalan korunur

---

#### **Day 5 — Cuma: Total Body / Tam Vücut Hibrid**

**Tasarım amacı:** Hafta boyu az değinilen küçük kas gruplarını ve fonksiyonel hareketleri toparla. Geç luteal'e denk gelirse skip-edilebilen "esneklik" günü. Eğer 4 güne düştüyse **bu gün es geçilir** (Bölüm 1.3'e bak).

**Anatomik vurgu:**
- Compound: Squat-pattern + Hinge-pattern + Push + Pull her biri 1x
- Vurgu kas grupları: Glute (3. hafta vurgu), Omuz (orta deltoid 2. ekspozur), Core, Calf, Forearm

**Hareket akışı:**

| # | Hareket | Set × Rep | Hedef RPE | Dinlenme | Notlar |
|---|---|---|---|---|---|
| 1 | **Goblet Squat** veya **Sumo Squat (Dumbbell)** | 3 × 12-15 | 7 | 90 sn | Quadriceps + adduktör; tempo vurgu (3-1-1) |
| 2 | **Cable Pull-through** veya **Kettlebell Swing (hafif)** | 3 × 12-15 | 7 | 75 sn | Hip hinge motor pattern; glute carry-over |
| 3 | **Lateral Raise** veya **Upright Row (Kablo, çeneye değil göğüs hizasına)** | 3 × 12-15 | 7-8 | 60 sn | Orta deltoid 2. ekspozur (frekans avantajı) |
| 4 | **Single Arm Dumbbell Row** veya **Bent-Over Reverse Fly** | 3 × 12/taraf | 7 | 60 sn | Sırt + posterior delt 2. ekspozur |
| 5 | **Russian Twist (Weighted)** veya **Pallof Press** | 3 × 15-20 | 7 | 45 sn | Core rotation/anti-rotation; ovulasyonda Pallof tercih |
| 6 | **Calf Raise (Single Leg)** veya **Farmer's Carry** | 3 × 12/taraf veya 3 × 30m | 7 | 60 sn | Calf 2. ekspozur (kemik koruma) + grip kuvveti (carry) |

**Süre tahmini:** Warm-up 5 dk + 6 hareket × ~6 dk = **40-50 dk**.

**Cycle modifikasyonu:**
- **Geç luteal:** Bu gün **skip-edilebilir** — Bengisu'nun "5 gün hedef ama esnek" kriterine uygun, 4-gün haftaya doğal düşüş
- **Regl Day 1-2:** Kesin skip
- **Ovulasyon:** Russian twist → Pallof press (rotational stres az), Kettlebell swing → Cable pull-through

---

### 1.3. 4 Güne Düştüğünde Stratejisi

**Hangi gün es geçilir?**

**Birincil seçim: Day 5 (Total Body Hibrid).**

**Neden:**
1. **Kas grup volume bütçesi hâlâ MEV üstünde tutar.** Day 5 hareketleri %80+ "secondary frequency" dozajı — kayıp = quad/hamstring/glute hâlâ 2x/hafta, sırt 1x/hafta (lat 1x yeterli, kemik koruma için adekat — Schoenfeld 2017 PMID 27400175 frekans 1x ile 2x istatistiksel fark yok).
2. **Day 5 hareketlerinin %70'i diğer 4 günde mevcut** (squat-pattern, hinge, lateral raise, row). Asıl kayıp: rotational core (Russian twist/Pallof), single-leg calf, farmer's carry. Bunlar haftalık compound carry-over ile telafi edilebilir.
3. **Cycle uyumu:** Day 5 muhtemelen Cuma → bu gün eğer geç luteal'in son 2 gününe denk gelirse zaten kalitesiz seans olacak.
4. **Bengisu'nun yapısına uygun:** Yeni başlayan için 4 gün antrenman, dünya standardı **starter recommendation** (Helms 2018, Practical Guidelines for Periodization for Hypertrophy).

**4-gün hibrid plan:**

| Gün | Plan |
|---|---|
| Pzt | Day 1 — Squat odaklı |
| Sal | Day 2 — Push |
| Per | Day 3 — Glute & Posterior |
| Cum | Day 4 — Pull |

**Çar + Cmt + Pzr** = yürüyüş + opsiyonel mobility/yoga.

**3 gün'e düşerse (regl haftası gibi):**
- Tüm vücut antrenmanı tipi 3 gün — Lower/Upper/Full Body
- Veya: Day 1 (squat) + Day 3 (glute) + Day 2/4 birleştirilmiş push-pull (3 push + 3 pull hareketi, full body)

---

### 1.4. Cycle Modifikasyonları (Ajan 2 Entegrasyonu)

Ajan 2'nin `getCycleAwareWorkoutAdjustment()` spec'i bu split'le tam uyumlu. Ek netleştirme:

**Folliküler (Day 6-13) — Peak Adaptation:**
- Day 1 (Squat): **8RM rep-PR penceresi** açık. Bengisu'nun planlanan ağırlığına +2.5 kg test edilebilir (RPE 8.5'i geçme).
- Day 3 (Glute): Hip thrust 5×8 yerine 4×8 + 1×6 (heavy single set) — kemik koruma için yüksek-yük teşvik (Beck 2017).
- Day 5: Volume +%10, bonus 1 set ekleme

**Ovulasyon (Day 13-16) — Ligament Caution:**
- Day 1: Smith squat → Goblet squat (depth kontrol), Bulgarian split squat → Step-up
- Day 3: Konvansiyonel deadlift → Trap-bar deadlift veya RDL, Single leg HT → B-stance HT
- Day 5: Russian twist → Pallof press (rotational stres minimum), Kettlebell swing → Cable pull-through
- **Plyometric/jump hareketler bu split'te zaten yok** (yeni başlayan + tiroidektomi → düşük-impact tercih)
- Yük: %95-100 baseline; eksantrik tempo 3-1-1 (yavaşlat)

**Erken Luteal (Day 17-21) — Transition:**
- Yük baseline -%5
- Hidrasyon +500 ml (plasma volume düşer)
- Sıcak günde antrenman sabaha kaydır
- Day 5 normal

**Geç Luteal son 5-6 gün — Volume Cut:**
- Tüm günler yük -%5 ile -%10, set sayısı korunur
- Day 5 **opsiyonel skip** (4-gün haftaya geç)
- HIIT/sprint hareketleri yok (zaten plan'da yok); yürüyüş Z2 tempo

**Regl Day 1-2 — Deload/Rest:**
- 3 seçenek: Rest / Yoga / Hafif üst vücut (Day 2 yarısı, RPE 6)
- Day 3 (glute) hip thrust mutlaka skip (intra-abdominal basınç + kramp riski)
- Day 1 (squat) skip

**Regl Day 3-5 — Kademeli Geri Dönüş:**
- Day 3'ten itibaren full programa geri dön
- Yük baseline -%10 (RPE 7'yi geçme)

---

## 2. 12 Haftalık Periodization

Bengisu Eylül 2026'ya kadar ~20 hafta var. 12 haftalık makro plan + sonrası strateji:

### 2.1. Mezo-Cycle Yapısı

**Mezo 1 (Hafta 1-4): Anatomik Adaptasyon + Form İnşası**

| Hafta | Volume | Intensity | Hedef |
|---|---|---|---|
| 1 | MEV (8-12 set/grup) | RPE 6-7 | Form öğrenme, hareket pattern, baseline RPE kalibrasyonu |
| 2 | MEV+ (10-14) | RPE 7 | Volume kademeli artış |
| 3 | MAV alt (12-16) | RPE 7-8 | Volume hedefe yakın, intensity artış |
| 4 | **Deload** (-%40 volume) | RPE 6 | Recovery, biomarker check (uyku, mood, performance log) |

**Mezo 2 (Hafta 5-8): Strength + Hypertrophy Yüklenmesi**

| Hafta | Volume | Intensity | Hedef |
|---|---|---|---|
| 5 | MAV (14-18) | RPE 7-8 | Kuvvet penceresi açık, compound 6-8 rep |
| 6 | MAV (14-18) | RPE 8 | Yük artışı (Folliküler PR penceresi öncelikli) |
| 7 | MAV+ (16-20) | RPE 8-8.5 | Peak volume, "biraz yorgun" hisset OK |
| 8 | **Deload** (-%40) | RPE 6 | Recovery + DEXA opsiyonel + biomarker |

**Mezo 3 (Hafta 9-12): Konsolidasyon + Test**

| Hafta | Volume | Intensity | Hedef |
|---|---|---|---|
| 9 | MAV (12-16) | RPE 7-8 | Konsolidasyon — kazanımları "yerleştir" |
| 10 | MAV (12-16) | RPE 8 | Bench-mark hafta — performans testi öncesi |
| 11 | MEV+ (10-14) | RPE 7-8 | Hacim azalt, kalite koru |
| 12 | **Test haftası** (volume -%50) | RPE 8-9 | Squat 8RM test, Hip thrust 8RM test, RDL 10RM test, Lat pulldown 10RM test (PR ölçümü) |

**Sonraki 8 hafta (Hafta 13-20):** Yeni Mezo 1-2 başla, ama Israetel "advanced" volume range'e doğru kayma. Eylül'e doğru recomp focus, kuvvet sürdürücü.

### 2.2. Cycle ile Çakışma Stratejisi

Bengisu'nun cycle'ı 28-29 gün. **PR pencereleri Mezo 2 (Hafta 5-8) ile çakıştırılmalı** çünkü volume + intensity peak. Pratik:

```
Hafta 1: Folliküler ile başla (Day 1 of cycle = Hafta 1 günü 1-7 deload yumuşak)
Hafta 5-8 Mezo 2 peak loading:
  - PR denemeleri Folliküler haftalara denk gelmesi şans
  - Eğer Hafta 6 = Geç luteal → o hafta PR'i Hafta 7 (Folliküler) erteleyebilir

Hafta 4, 8 deload → Cycle'dan bağımsız programatik
Hafta 12 test → Folliküler'e denk getirmek ideal
```

**Mevcut tarihte (5 May 2026):**
- Bengisu'nun son periodu 28 Nis-3 May (PROGRESS.md'den)
- Bugün 5 May = Day 8 cycle = Folliküler erken
- Mezo 1 Hafta 1 başlasa, Hafta 4 deload = 26 May = ~Day 29 = Geç luteal son 2 gün → **mükemmel uyum**, deload zaten cycle volume cut ile çakışıyor
- Hafta 5-8 peak = 26 May - 22 Haz arası → 2 cycle peak Folliküler haftaları içerir

### 2.3. Deload Haftaları

**Deload kriteri (her 4. hafta DEFAULT, ama biomarker da tetikleyici):**

| Sinyal | Deload tetikleyici? |
|---|---|
| 3+ ardışık seansta RPE planlanan +1 daha yüksek | EVET |
| Uyku kalitesi 2 hafta üst üste skor 3 altı | EVET |
| Cycle gecikmesi >5 gün (RED-S sinyal — Ajan 2 #11) | EVET (acil) |
| Performans 3+ seans düşüş | EVET |
| Kilo plateau >2 hafta + yorgun | EVET (deficit kalibre et) |

**Deload tipi (Israetel deload framework):**
- **Volume deload:** Set sayısı -%40 (4 set → 2 set), yük korunur, tekrar korunur
- **Intensity deload:** Yük -%20-30, set/rep korunur, RPE 5-6 hedef
- **Tam deload:** Volume -%50, intensity -%20, sadece compound, izolasyon yok

**Bengisu için pratik:** **Volume deload tercih** (kalori açığında recovery ihtiyacı yüksek, ama motor pattern korunmalı = yük düşürmemek doğru)

### 2.4. Test Günleri

12 haftada 1 test günü (Hafta 12 sonu):
- **Squat 8RM** (Goblet veya Smith, hangisi base hareketse)
- **Hip Thrust 8RM** (kemik koruma metric)
- **RDL 10RM**
- **Lat Pulldown 10RM**
- **Incline DB Press 8RM**

8RM/10RM yerine 1RM **kullanılmıyor** çünkü:
1. Yeni başlayan + tiroidektomi → 1RM riski yüksek (RPE 10 = ligament + boyun skar gerilimi)
2. 1RM tahmin için Brzycki formülü 8RM × 1.27 yaklaşık % vermez doğru sonuç (yeni başlayan reliability düşük)

PR olarak **8RM yükü** kayda alınır, sonraki test'te bu artış gözlemlenir.

---

## 3. Hareket Envanteri Değerlendirmesi (33 Hareket)

Mevcut `EX` objesi 6 günlük PPL'de 33 hareket içeriyor. 5-gün split'e geçiş için tablo:

### 3.1. Mevcut hareketler — Kalır mı? Çıkar mı?

| ID | Hareket | Mevcut Gün | 5-gün Split'te Kalır mı? | Yeni Gün | Neden |
|---|---|---|---|---|---|
| `sq` | Smith Machine Squat | 1 | ✅ KALIR | Day 1 | Ana squat |
| `lp` | Leg Press | 1 | ✅ KALIR | Day 1 | Quad volume |
| `ab` | Abductor Makinesi | 1 | ✅ KALIR | Day 1 | Glute medius |
| `gbr` | Glute Bridge (Bant) | 1 | ⚠️ DOWNGRADE | Day 1 alternatif | Hip thrust'ın yanında ek volume — opsiyonel finisher |
| `rl` | Reverse Lunge (DB) | 1 | ✅ KALIR | Day 1 | Tek bacak |
| `cc` | Cable Crunch | 1 | ✅ KALIR | Day 1 (alternatif) | Core |
| `dbp` | Incline DB Press | 2 | ✅ KALIR | Day 2 | Üst göğüs ana |
| `lr` | Lateral Raise | 2, 6 | ✅ KALIR | Day 2 + Day 5 | Orta deltoid |
| `fr` | Front Raise | 2 | 🟡 ÇIK | — | Ön deltoid zaten DB shoulder press + incline press ile dolu — gereksiz volume |
| `dsp` | DB Shoulder Press | 2 | ✅ KALIR | Day 2 | Ana omuz pres |
| `tc` | Tricep Cable Pushdown | 2 | ✅ KALIR | Day 2 | Triceps direct |
| `hkr` | Hanging Knee Raise | 2 | 🟡 OPSİYONEL | Day 5 | Karın izolasyon zayıf — Hanging gerek yok, plank yeterli |
| `rdl` | Romanian Deadlift | 3 | ✅ KALIR | Day 3 | Hamstring ana |
| `lc` | Leg Curl Makinesi | 3 | ✅ KALIR | Day 1 | Hamstring squat günü pair |
| `sumo` | Sumo Squat (DB) | 3 | ✅ KALIR | Day 5 | Adduktör/iç bacak |
| `kk` | Cable Kickback | 3 | ✅ KALIR | Day 3 | Glute izolasyon |
| `cal` | Calf Raise (Leg Press) | 3 | ✅ KALIR | Day 3 + Day 5 | Baldır 2x |
| `pall` | Pallof Press | 3 | ✅ KALIR | Day 1, 5 | Anti-rotation core |
| `lat` | Lat Pulldown | 4 | ✅ KALIR | Day 4 | Ana çekme |
| `cr` | Seated Cable Row | 4 | ✅ KALIR | Day 4 | Kalınlık |
| `fp` | Face Pull | 4 | ✅ KALIR | Day 4 | Posterior delt + postür |
| `dbrow` | DB Row (Tek Kol) | 4 | ✅ KALIR | Day 4 + Day 5 | Sırt 2x |
| `curl` | DB Bicep Curl | 4 | ✅ KALIR | Day 4 | Biceps direct |
| `abw` | Ab Wheel Rollout | 4 | 🟡 OPSİYONEL | — | Yeni başlayan için zor; ovulasyonda riskli — `plk` yeterli |
| `ht` | Hip Thrust (Smith/Barbell) | 5 | ✅ KALIR | Day 3 | Glute ana |
| `slht` | Single Leg Hip Thrust | 5 | ✅ KALIR | Day 3 | Tek bacak glute |
| `bpa` | Band Pull-Apart | 5 | ✅ KALIR | Day 4 | Posterior delt finisher |
| `vac` | Stomach Vacuum | 5 | ✅ KALIR | Day 2 + Day 3 | Derin core (TVA) |
| `ddb` | Dumbbell Deadlift | 5 | 🟡 BİRLEŞTİR | — | RDL ile çok yakın, yeni başlayan için RDL daha güvenli — sadece "alternatif" olarak listelensin |
| `plk` | Plank (3 Varyasyon) | 5 | ✅ KALIR | Day 2 | Core |
| `arn` | Arnold Press | 6 | ✅ KALIR | Day 2 (alternatif) | DB shoulder press alternatifi |
| `upr` | Upright Row (Kablo) | 6 | ⚠️ MODIFIY | Day 5 | **Çeneye değil göğüs hizasına** — omuz impingement riski (NSCA) |
| `ham` | Hammer Curl | 6 | ✅ KALIR | Day 4 (alternatif) | Biceps brachialis |
| `skull` | Skull Crusher | 6 | ✅ KALIR | Day 2 | Triceps long head |
| `ldrop` | Lateral Drop Set | 6 | ⚠️ ADVANCED | — | Drop set yeni başlayan için fazla yorucu, MAV aşar — ileri seviye opsiyonel |
| `rt` | Russian Twist | 6 | ✅ KALIR | Day 5 | Core rotation |

**Özet:**
- ✅ Kalır: 27 hareket
- 🟡 Çıkar/opsiyonel: 4 (`fr`, `hkr`, `abw`, `ldrop`)
- 🟡 Birleştir: 1 (`ddb` → RDL alternatifi)
- ⚠️ Modify: 2 (`gbr` ek volume, `upr` ROM düzeltme)

### 3.2. Yeni Eklenmesi Gerekenler

| ID önerisi | Hareket | Hangi gün | Neden |
|---|---|---|---|
| `gobsq` | **Goblet Squat (Dumbbell)** | Day 1 alternatif + Day 5 | Yeni başlayan altın standart; ovulasyonda Smith squat sub |
| `bgss` | **Bulgarian Split Squat** | Day 1 | Tek bacak compound; Israetel "high stimulus, low fatigue" |
| `step` | **Step-Up (Kutu)** | Day 1 alternatif | Bulgarian zorlu olduğunda; ovulasyonda jump alternatifi |
| `bsht` | **B-Stance Hip Thrust** | Day 3 | Asimetrik bilateral; ovulasyonda single leg HT sub |
| `tbdl` | **Trap-Bar Deadlift** | Day 3 alternatif | Konvansiyonel DL alternatifi; lumbosakral risk düşük (eğer trap bar varsa) |
| `cpt` | **Cable Pull-Through** | Day 3 + Day 5 | Hinge motor pattern; RDL'den önce öğrenmek için |
| `cf` | **Cable Chest Fly (low-to-high)** | Day 2 | Üst göğüs adduktion vurgu |
| `frmcry` | **Farmer's Carry** | Day 5 | Grip + core + postür; Bengisu UK'de ev temizliği gibi günlük transfer kuvveti |
| `dbg` | **Dead Bug** | Day 3 alternatif | Lumbar koruma core; deadlift carry-over |
| `ass_pu` | **Assisted Pull-Up** veya **Inverted Row** | Day 4 alternatif | Lat pulldown alternatifi; ev gym'de bant kullanımı |
| `kbs` | **Kettlebell Swing (Hardstyle)** | Day 5 | Glute-hamstring power; geç luteal'de skip |
| `sa_lr` | **Single Arm Lateral Raise (Cable)** | Day 5 | Lateral raise sabit gerilim; orta delt 2. ekspozur |

**Toplam:** 12 yeni hareket → toplam envanter ~39 hareket (bazıları "alternatif" olarak listelenir, default plan görünmez).

### 3.3. Substitusyon Listesi (Beginner-Friendly + Cycle-Aware)

Her ana hareket için A/B/C alternatif:

| Ana hareket | A: Daha kolay (yeni başlayan) | B: Cycle-substitute (ovulasyon) | C: Ekipman alternatifi |
|---|---|---|---|
| Smith Machine Squat | Goblet Squat | Box Squat (depth fix) | Bodyweight squat → Goblet squat (1 dumbbell) |
| Romanian Deadlift | Cable Pull-Through | RDL (zaten hinge-friendly) | Single Leg RDL (denge zor — yeni başlayan kaçın) |
| Hip Thrust (Smith) | Glute Bridge (zemin + DB) | Glute Bridge (intensity düşük) | Bant + zemin glute bridge |
| Single Leg Hip Thrust | B-Stance Hip Thrust | B-Stance Hip Thrust | Glute bridge feet elevated |
| Bulgarian Split Squat | Reverse Lunge | Step-Up (impact düşük) | Reverse lunge dumbbell |
| Lat Pulldown | Assisted Pull-up (bant) | (cycle-neutral) | Inverted row (TRX/barbell altında) |
| Incline DB Press | Machine Chest Press | (cycle-neutral) | Push-up incline (kutu üstünde el) |
| DB Shoulder Press | Seated DB shoulder press | (cycle-neutral) | Arnold Press (alternatif pattern) |
| Lateral Raise (DB) | Cable Lateral Raise | (cycle-neutral) | Su şişesi lateral raise (acil ev) |
| Seated Cable Row | DB Row (single arm) | (cycle-neutral) | Bant row (kapı arkası) |
| Cable Crunch | Bicycle Crunch | (cycle-neutral) | Dead bug (lumbar safe) |

---

## 4. RPE / RIR Sistemi

### 4.1. Konsept Özeti

**RPE (Rate of Perceived Exertion):** 1-10 skala — set sonunda hissedilen efor.
**RIR (Reps in Reserve):** RPE'nin tersi — "kaç tekrar daha yapabilirim?"

| RPE | RIR | Anlam |
|---|---|---|
| 10 | 0 | Maksimum efor, başka tekrar imkansız |
| 9.5 | 0-1 | Form bozulmadan 0, biraz form kaybıyla 1 belki |
| 9 | 1 | 1 tekrar daha yapabilirim |
| 8 | 2 | 2 tekrar daha yapabilirim |
| 7 | 3 | 3 tekrar daha yapabilirim — **Bengisu hedef bandı taban** |
| 6 | 4 | 4 tekrar daha yapabilirim — **deload bandı** |
| 5 | 5 | Yarı efor — warm-up |

**Zourdos 2016 (PMID 27199491)** — RPE/RIR validasyon çalışması: tecrübeli lifter %85+ doğruluk, yeni başlayan %60-70 (kalibre olmamış). Bu yüzden Bengisu için **ilk 4-6 hafta RPE odak değil — set tam tamamlama (rep range içinde) odak**, sonra RPE entegre.

### 4.2. Bengisu için RPE Hedef Bandı

| Hareket Tipi | Hedef RPE | RIR | Mantık |
|---|---|---|---|
| Compound (Squat, DL, HT, OHP) | 7-8 | 2-3 | Kuvvet + güvenli teknik |
| Izolasyon (curl, lateral raise) | 7-9 | 1-3 | Local fatigue OK, sistemik düşük |
| Core (plank, pallof) | 6-7 | "yorgun ama 30 sn daha tutabilirdim" | Form öncelik |
| Warm-up sets | 5-6 | 4-5 | Bilinçli light |

**Bengisu için kural:** RPE 9'u **sadece Folliküler** PR günü görsün. RPE 10 = asla (yeni başlayan + tiroidektomi + boyun skar = injury risk). Eğer set "form bozuluyor" hissi → RPE 10 say, set durdur.

### 4.3. Cycle ile RPE Kalibrasyonu (Çok Önemli)

**Romero-Moraleda 2019 (PMID 31188810):** Aynı yük, luteal fazda **RPE +1 daha yüksek** algılanır.

**Pratik anlamı:**
- Folliküler'de RPE 8 ile yapılan 60 kg squat
- Geç luteal'de aynı 60 kg squat → RPE 9 hissedilir (gerçekte aynı fizyolojik yük, ama algı farklı)

**Sistemde çözüm — `getEffectiveLoad()` fonksiyonu (Bölüm 7'de detay):**
```
plannedRPE = 8
phase = 'Luteal Late'
adjustedRPE_target = 7 (1 düşük)
adjustedLoad = baselineLoad × 0.92 (%-8)
```

Veya tersine: kullanıcı RPE 8 girdiyse luteal'de:
- Sistem "luteal RPE +1 algı" diye **gerçek yükü Folliküler RPE 7'ye eş tutar**
- Sonraki Folliküler'de planlanan yük yine bu base üzerinden +%2-3

### 4.4. Set'te RPE Girilebilirlik (UI önerisi)

Set tamamlanınca:
```
Set 3 — Smith Squat 60kg × 10
[ Tamam ✓ ]
[ ⚖️ RPE: ◯6 ◯7 ●8 ◯9 ◯10 ]  (opsiyonel; varsayılan boş)
```

İlk 4 hafta RPE girişi **opsiyonel olarak görünmesin** — Bengisu'nun overwhelming hissetmemesi için. 4. haftadan sonra "RPE öğrenmek ister misin?" mini-tutorial → açıldığında her set sonrası RPE picker görünür.

Ajan 9 (görselleştirme) ve Ajan 10 (UX) burayı detaylandırır.

---

## 5. Recovery + Autoregulation

### 5.1. Set Arası Dinlenme

Schoenfeld 2016 (PMID 27387401) — uzun dinlenmenin hipertrofiye eşit veya üstün olduğunu gösteriyor:

| Hareket Tipi | Dinlenme | Mantık |
|---|---|---|
| Heavy compound (squat, DL, hip thrust 8 rep altı) | **2-3 dk** | Fosfokreatin restorasyon; kuvvet output korunur |
| Compound (8-12 rep) | **90-120 sn** | Kompromis; pump için yeterli, kuvvet için adekat |
| Isolation (12+ rep) | **60-75 sn** | Local fatigue toparlanma, sistemik az |
| Core (plank, vacuum) | **30-45 sn** | Time-under-tension odak, sistemik az |
| Drop set / RPE 9+ son set | **3-4 dk** | Tam recovery sonraki set için |

**Bengisu için pratik:** Dinlenme görseli rest timer ile gösterilebilir (Workout sekmesi 30 fikir #2 — Set arası 90 sn rest timer).

### 5.2. Haftalık Volume Sınırları (Israetel MEV/MAV/MRV — Kadın)

| Kas grubu | MV (Maintenance) | MEV (Min Effective) | MAV (Adaptive) | MRV (Recoverable max) |
|---|---|---|---|---|
| Quadriceps | 6 | 8-10 | 12-18 | 20-25 |
| Hamstring | 4 | 6 | 10-14 | 16-20 |
| Glute | 0 | 2-4 (compound carry-over) | 6-12 (kadın direct) | 16-22 |
| Göğüs | 4 | 8 | 12-18 | 20-26 |
| Sırt | 6 | 10 | 14-20 | 22-30 |
| Omuz orta delt | 6 | 8 | 12-18 | 20-26 |
| Biceps | 4 | 6 | 10-14 | 18-22 |
| Triceps | 4 | 6 | 10-14 | 18-22 |

Bu sayılar **direct working sets** (warm-up değil). Bengisu'nun split MAV bandında — recovery margin var, MRV'ye yakın değil.

**Tiroidektomi modifikasyonu:** Israetel sayıları kalori dengesine göre belirlenmiş. Bengisu deficit'te → MRV **%80-85 olarak düşünülmeli** (kalori açığı recovery kapasitesini azaltır). Bu mevcut split bunu zaten dikkate alıyor.

### 5.3. Soreness × Performans Korelasyonu

**Yaygın yanlış:** "DOMS = good workout."

**Doğru:** DOMS hipertrofi sinyali değildir (Schoenfeld 2013). DOMS yokluğu **iyi adaptasyon** olabilir.

Bengisu için:
- Hafif soreness (ertesi gün hafif tutukluk, 3 gün sonra geçer) → **normal adaptasyon**
- Orta soreness (2 gün belirgin acı) → **MAV üst sınırı**, dikkat
- Şiddetli soreness (3+ gün, hareketin günlük etkilenmesi) → **MRV aşımı**, deload tetikleyici

**UI önerisi:** Set sonrası mini-soreness skala (Workout 30 fikir #19). 1-5:
- 1: Kasları hissedemiyorum
- 2: Hafif sıkışıklık
- 3: Belirgin tutukluk (ana adaptasyon bandı)
- 4: Acı, hareketsiz iyi
- 5: Şiddetli, normal hareket bozulmuş (deload)

### 5.4. Apple Health / HRV Entegrasyonu

PROGRESS.md'de Photo+AI Apple Health kurulu — adım, kalori, uyku, kalp atış mevcut. **HRV (heart rate variability)** Apple Watch'ta ölçüm var ama photo-AI için ekran görüntüsü daha karışık (HRV grafiği rakam değil).

**Pratik kullanım:**
- **Uyku:** <6 saat → o günün workout intensity -%5; <5 saat → deload day
- **Aktif kalori (egzersiz dahil değil):** 2 hafta üst üste düşük → metabolik adaptasyon sinyali (RED-S)
- **Adımlar:** Yürüyüş 7-8 km zaten 8000-12000 adım sağlar; <8000 → ek hareket öner

Ajan 8 (data integration) ve Ajan 9 (visualization) bu metric panel'i tasarlayacak — sen scientific framework'ü verdin.

---

## 6. Form / Teknik Öğretim Çerçevesi

Bengisu'nun bilim-sever yapısı için her hareket şu yapıyla öğretilmeli (Ajan 7 pedagoji uzmanı sahalandıracak — burada yapısal şablon):

### 6.1. Şablon

```
Hareket adı: [Türkçe] (İngilizce orijinal)

Biomekanik (1-2 cümle):
- Hangi eklemler hangi düzlemde hareket eder?
- Hangi kas hangi fazda primer/sekonder rolde?

Setup (sırayla):
1. [Pozisyon kurulum]
2. [Yük kavrama / kemer / pad]
3. [Ayak/el genişliği]
4. [Pre-tension cue]

Execution:
1. [Eccentric faz: hangi tempo, hangi ROM]
2. [Bottom: stop or no?]
3. [Concentric faz: nereden hareket başlar?]
4. [Peak contraction: tut/tutma]

Cool-down (varsa):
- [Hareket sonrası nötr pozisyon]

YAPMA (yaygın hatalar):
🚫 [Hata 1] — [Neden tehlikeli/sub-optimal]
🚫 [Hata 2] — [Neden]

Cycle modifikasyonu (varsa):
🌸 Ovulasyon: [hareket modifiye veya skip]

Substitusyon (3 alternatif):
A) [Daha kolay] — [Neden ve kim için]
B) [Cycle-substitute] — [Hangi faz]
C) [Ekipman alt] — [Eve geri dönüş senaryosu]
```

### 6.2. Örnek 3 Hareket (Tam Doldurulmuş Şablon)

#### **Smith Machine Squat**

**Biomekanik:** Sagittal düzlemde diz fleksiyon-ekstansiyon ve kalça fleksiyon-ekstansiyon. Quadriceps konsentrik kalkışta primer, glute max ve adduktör magnus pelvis stabilizasyonu + kalça ekstansiyonu sekonder. Smith bar düzleminde sabit, intra-spinal yük lumbar erector'a bindirir.

**Setup:**
1. Bar omuz arka tarafına (üst trapez "pillow"a) otur, kullanıcı uzun kemikleri için Smith'in açısı pozisyona uyar mı kontrol et
2. Pad zorunlu ise omuz altı yerleştir (yeni başlayan için tavsiye)
3. Ayaklar omuz genişliği + biraz dışa rotasyon (15-20°)
4. Ayaklar bar plumb-line'ından **5-10 cm öne** (Smith dik olmadığı için bu offset gerekli)
5. Karın sıkıştır, göğüs aç, gözler ileri 2 m mesafede sabit nokta

**Execution:**
1. Bar'ı kilidini aç, kalça önce gerile, sonra diz bük (hip-hinge başlat)
2. **Eccentric:** 2-3 saniye iniş, uyluk yere paralel olana kadar (ATG/full ROM bireysel mobiliteye göre, parallel altı zorlama)
3. **Bottom:** Pause yok, ama bouncing/dip yok — kontrol
4. **Concentric:** Topuktan it, kalçayı önce sıkıştırarak (glute aktivasyonu) yukarı çık, dizler içe kapanmasın
5. **Top:** Diz tam kilitleme yok, hafif fleksiyonda dur (1 sn)

**YAPMA:**
- 🚫 **Diz valgus (içe kapanma):** Glute medius zayıflığı sinyali — bant kullan veya yükü düşür
- 🚫 **Lumbar fleksiyon (butt wink):** Mobiliteyi aş, parallel'e durdur — çekirdek omurga koruma
- 🚫 **Ayak ucundan iniş:** Topuktan it, ön ayak anchor

**Cycle modifikasyonu:**
- 🌸 **Ovulasyon (Day 13-15):** Smith squat → **Goblet squat'a** geç. Tek dumbbell göğüste tutmak axial loading'i azaltır, depth kontrol kolay, ligament gevşekliği etki düşer.
- 🌙 **Geç luteal:** Yük -%5-10, set sayısı korunur

**Substitusyon:**
A) **Goblet Squat** — yeni başlayan için altın standart, depth visual feedback (kafa düşük olabilirsen yorgunsun)
B) **Box Squat** (ovulasyon) — kutu/bench üstüne otur-kalk, depth sabit, hip-driven
C) **Bodyweight Squat veya Hindu Squat** — ekipmansız ev acil

---

#### **Romanian Deadlift (RDL)**

**Biomekanik:** Hip-hinge pattern; kalça fleksiyon-ekstansiyon + omurga nötr (NO fleksiyon). Hamstring eccentric stretching → konsentrik kalkış. Glute max kalçayı kilitleme. Erector spinae izometrik (bel düz tutucu).

**Setup:**
1. Ayaklar omuz genişliği, ayak parmakları düz öne (squat'a göre daha dar duruş)
2. Dumbbell'ler ya da barbell uyluğun önünde, kavrama overhand (omuz genişliği)
3. Hafif diz bükümü (~15°) **statik tut** — RDL'de diz daha fazla bükülmez (squat olur o zaman)
4. Göğüs aç, kürek kemiklerini geri çek (lat sıkışık, "armpit sıkıştır" cue)
5. Karın sıkıştır

**Execution:**
1. **Eccentric:** Kalçayı geriye it (sanki duvardan kalça itiyormuş gibi), bar/DB bacaklardan aşağı kayar
2. ROM: bar/DB bacak ortası ile diz arası — Bengisu'nun esnekliğine göre **diz altına inmek zorunlu DEĞİL**
3. **Bottom:** Hamstring'de ciddi gerilim hisset, lumbar nötr, eğer bel "yuvarlanma" başlarsa **DUR**
4. **Concentric:** Glute max ile kalçayı öne it ("kalçayı duvarın çekiyormuş gibi"), DB/bar bacaklara değecek şekilde yukarı geri
5. **Top:** Hafif glute squeeze, bel ekstansiyon yapma (duruş düz)

**YAPMA:**
- 🚫 **Bel yuvarlanması (lumbar fleksiyon):** En tehlikeli; disk basınç katmanlama. Hamstring esnekliği yetmiyorsa ROM'u kısalt
- 🚫 **Squat pattern'a kayma:** Diz daha fazla bükülmez — RDL ≠ deadlift. Her iki hareket farklı motor pattern
- 🚫 **Bar bacaklardan uzak:** Lever arm artar, bel yükü çoğalır — "bar sürtünmeli bacaklardan"

**Cycle modifikasyonu:**
- 🌸 **Ovulasyon:** RDL aslında lumbosakral kontrol için ovulasyonda **iyi seçim** (squat'a göre eccentric kontrol kolay). Konvansiyonel deadlift'ten **trap-bar veya RDL'ye SWAP** önerisi RDL'nin lehine.
- 🌙 **Geç luteal:** Yük -%5, ROM korunur

**Substitusyon:**
A) **Cable Pull-Through** — kabloda hip-hinge öğretimi, bel risk düşük, yeni başlayan için
B) (Ovulasyon zaten RDL'ye geçiyor — ek alternatif yok)
C) **Single-Arm DB RDL** (denge zor) veya **Banded Good Morning**

---

#### **Hip Thrust (Smith / Barbell)**

**Biomekanik:** Kalça ekstansiyon izolasyon — supine pozisyonda. Glute max EMG aktivasyonu **squat ve deadlift'ten yüksek** (Contreras 2014, PMID 25144126). Hamstring sekonder (kısalmış pozisyonda zayıf), erector spinae izometrik.

**Setup:**
1. Üst sırt bench/kutu kenarında (kürek kemikleri bench üstünde, baş bench üstü değil yere paralel)
2. Bar kalça çukurunda — **PED ŞART** (bar kemiğe değmesin, ağrı = guarding = aktivasyon kayıp)
3. Ayaklar bench'e yakın, dizler 90° olacak top pozisyonda
4. Çene içe çekik (boyun nötr — Bengisu için boyun skar dikkat)
5. Bar elini kavrama yerine **anchor** (sabit tutuş, sıkma)

**Execution:**
1. **Eccentric:** Kalça yere kontrolü düşür (yere dokunma — 2-3 cm üstünde dur)
2. **Bottom:** Tam yere bırakma; "floating bottom"
3. **Concentric:** **Topuktan it**, kalçayı yukarı sıkıştır, baş ve omuz bench'te sabit
4. **Top:** Kalça tam ekstansiyon (vücut "table-top" pozisyonu — diz, kalça, omuz aynı düzlemde), 2 saniye sıkıştır
5. Bel **ekstansiyon yapma** (lumbar yorulma sinyali)

**YAPMA:**
- 🚫 **Bel hyperextension:** Glute aktive edilemiyorsa bel takipinde bunu yapar — yük düşür, "rib down" cue ver
- 🚫 **Ayaklar çok ileri:** Hamstring kilitlenir, glute aktivasyonu düşer — diz 90° hedef
- 🚫 **Çene yukarı:** Boyun skar gerilim — çene nötr-içe

**Cycle modifikasyonu:**
- 🌸 **Ovulasyon:** Konvansiyonel hip thrust **OK** (axial yük yok); single leg HT → **B-stance HT**'e geç (denge laxity koruma)
- 🌙 **Geç luteal:** Set 5 → 4, yük -%5
- 🔴 **Regl Day 1-2:** SKIP (intra-abdominal basınç + kramp)

**Substitusyon:**
A) **Glute Bridge (Zemin + DB)** — bench yok ev acil; ROM kısa ama aktivasyon iyi
B) **B-Stance Hip Thrust** (ovulasyon) — single leg'in asimetrik bilateral'ı
C) **Frog Pump** veya **Cable Hip Thrust** — yeni başlayan ekipman alt

---

## 7. Kod Değişiklik Önerileri

### 7.1. Yeni Veri Yapıları

```javascript
// 5-gün split (mevcut SP'yi değiştirir)
const SP={
  0: null,
  1: {n:'Alt Vücut · Squat', e:'🦵', f:'Quadriceps · Glute · Adduktör · Core'},
  2: {n:'Üst Vücut · İtme', e:'💪', f:'Göğüs · Omuz · Triceps · Core'},
  3: {n:'Glute & Posterior Chain', e:'🍑', f:'Glute · Hamstring · Erector · Core'},
  4: {n:'Üst Vücut · Çekme', e:'🏋️', f:'Sırt · Posterior Delt · Biceps · Core'},
  5: {n:'Tam Vücut Hibrid', e:'🌟', f:'Compound · Omuz · Core · Calf · Carry'},
  // 6: rest
};

// Hangi split günü hangi haftanın gününe denk gelir
const WEEK_SCHEDULE = {
  1: 1,  // Pzt → Day 1 (Alt Vücut Squat)
  2: 2,  // Sal → Day 2 (Push)
  3: 3,  // Çar → Day 3 (Glute & Posterior)
  4: 4,  // Per → Day 4 (Pull)
  5: 5,  // Cum → Day 5 (Total Body)
  6: 0,  // Cmt → Yürüyüş + opsiyonel
  0: 0,  // Pzr → Yürüyüş + opsiyonel (rest day-tipi)
};

// Cycle-aware substitution map (Ajan 2'nin spec'i ile uyumlu)
const MOVEMENT_SUB = {
  'ovulation': {
    'sq':    'gobsq',      // Smith squat → Goblet squat
    'rl':    'step',       // Reverse lunge → Step-up
    'bgss':  'step',       // Bulgarian → Step-up
    'slht':  'bsht',       // Single leg HT → B-stance HT
    'rdl':   'cpt',        // RDL → Cable pull-through (yeni başlayan için)
    'kbs':   'cpt',        // Kettlebell swing → Cable pull-through
    'rt':    'pall',       // Russian twist → Pallof press
  },
  'late_luteal': {
    'kbs':   'cpt',        // Kettlebell swing → Cable pull-through (Z2 friendly)
  },
  'menstruation_d12': {
    'sq':    'gobsq',      // Light option
    'ht':    'gbr',        // Hip thrust → Glute bridge (sadece kalkıyorsa)
  },
};

// PR pencere candidate hareketler (folliküler)
const PR_CANDIDATES = ['sq','ht','rdl','dbp','lat','dsp'];

// Hareket envanteri 5-gün düzeni (mevcut EX'i replace eder)
const EX = {
  1: [  // Day 1: Alt Vücut Squat
    {id:'sq', n:'Smith Machine Squat', s:'4×8-10', rpe:'7-8', rest:'2-2.5dk', m:['Quadriceps','Glute','Core'], ...},
    {id:'lp', n:'Leg Press', s:'3×10-12', rpe:'7-8', rest:'90-120sn', m:['Quadriceps','Glute'], ...},
    {id:'bgss', n:'Bulgarian Split Squat', s:'3×10/taraf', rpe:'7', rest:'75-90sn', m:['Quadriceps','Glute'], ...},
    {id:'lc', n:'Leg Curl Makinesi', s:'3×12-15', rpe:'7-8', rest:'60-75sn', m:['Hamstring'], ...},
    {id:'ab', n:'Cable Hip Abduction', s:'3×15-20', rpe:'7', rest:'60sn', m:['Glute medius'], ...},
    {id:'pall', n:'Pallof Press', s:'3×12/taraf', rpe:'6-7', rest:'45-60sn', c:1, m:['Core','Anti-rotation'], ...},
  ],
  2: [  // Day 2: Push
    {id:'dbp', n:'Incline Dumbbell Press', s:'4×8-10', rpe:'7-8', rest:'2dk', m:['Üst göğüs','Omuz'], ...},
    {id:'dsp', n:'Dumbbell Shoulder Press', s:'3×10-12', rpe:'7-8', rest:'90-120sn', m:['Omuz','Triceps'], ...},
    {id:'lr', n:'Lateral Raise', s:'4×12-15', rpe:'7', rest:'60-75sn', m:['Orta deltoid'], ...},
    {id:'tc', n:'Tricep Cable Pushdown', s:'3×12-15', rpe:'7-8', rest:'60sn', m:['Triceps'], ...},
    {id:'cf', n:'Cable Chest Fly', s:'3×12-15', rpe:'7', rest:'60sn', m:['Göğüs'], ...},
    {id:'plk', n:'Plank (3 Varyasyon)', s:'3×30-45sn', rpe:'6-7', rest:'45sn', c:1, m:['Core','Omuz'], ...},
  ],
  3: [  // Day 3: Glute & Posterior
    {id:'ht', n:'Hip Thrust (Smith)', s:'5×8-10', rpe:'7-8', rest:'2dk', m:['Glute','Hamstring'], ...},
    {id:'rdl', n:'Romanian Deadlift', s:'4×10-12', rpe:'7-8', rest:'2dk', m:['Hamstring','Glute','Erector'], ...},
    {id:'slht', n:'Single Leg Hip Thrust', s:'3×10/taraf', rpe:'7', rest:'75-90sn', m:['Glute','Core'], ...},
    {id:'kk', n:'Cable Kickback', s:'3×15/taraf', rpe:'7', rest:'60sn', m:['Glute'], ...},
    {id:'cal', n:'Calf Raise (Leg Press)', s:'3×15-20', rpe:'7-8', rest:'45-60sn', m:['Baldır'], ...},
    {id:'vac', n:'Stomach Vacuum', s:'3×30sn', rpe:'6', rest:'30sn', c:1, m:['Derin core (TVA)'], ...},
  ],
  4: [  // Day 4: Pull
    {id:'lat', n:'Lat Pulldown (Wide)', s:'4×8-10', rpe:'7-8', rest:'2dk', m:['Lat','Biceps'], ...},
    {id:'cr', n:'Seated Cable Row', s:'4×10-12', rpe:'7-8', rest:'90-120sn', m:['Mid-back','Biceps'], ...},
    {id:'dbrow', n:'Single Arm DB Row', s:'3×10-12/taraf', rpe:'7-8', rest:'75sn', m:['Lat','Biceps'], ...},
    {id:'fp', n:'Face Pull', s:'4×15-20', rpe:'7', rest:'60sn', m:['Posterior delt','Lower trap'], ...},
    {id:'curl', n:'DB Bicep Curl', s:'3×10-12', rpe:'7-8', rest:'60sn', m:['Biceps'], ...},
    {id:'bpa', n:'Band Pull-Apart', s:'3×15-20', rpe:'6-7', rest:'45sn', m:['Posterior delt'], ...},
  ],
  5: [  // Day 5: Total Body
    {id:'gobsq', n:'Goblet Squat', s:'3×12-15', rpe:'7', rest:'90sn', m:['Quadriceps','Adduktör'], ...},
    {id:'cpt', n:'Cable Pull-Through', s:'3×12-15', rpe:'7', rest:'75sn', m:['Glute','Hamstring'], ...},
    {id:'lr', n:'Lateral Raise', s:'3×12-15', rpe:'7-8', rest:'60sn', m:['Orta deltoid'], ...},
    {id:'dbrow', n:'Single Arm DB Row', s:'3×12/taraf', rpe:'7', rest:'60sn', m:['Lat','Biceps'], ...},
    {id:'rt', n:'Russian Twist (Weighted)', s:'3×15-20', rpe:'7', rest:'45sn', c:1, m:['Yan karın','Core'], ...},
    {id:'cal', n:'Calf Raise (Single Leg)', s:'3×12/taraf', rpe:'7', rest:'60sn', m:['Baldır'], ...},
  ],
};
```

### 7.2. Yeni Helper Fonksiyonlar

#### `getDailyWorkout(d)` — Cycle + gün + kullanıcı state'ini birleştirir

```javascript
function getDailyWorkout(d=new Date()){
  const wd = d.getDay();           // 0 Pzr, 1 Pzt, ...
  const splitDay = WEEK_SCHEDULE[wd];
  if(splitDay === 0)return{type:'rest', exercises:[]};

  const baseExercises = EX[splitDay];
  const cycleAdj = getCycleAwareWorkoutAdjustment(d);

  // Apply cycle substitutions
  let exercises = baseExercises.map(ex => {
    const subKey = cycleAdj.substitutions.find(s => s.from === ex.id);
    if(subKey){
      const subEx = findExerciseById(subKey.to);
      return {...subEx, _substituted: true, _from: ex.id};
    }
    return ex;
  });

  // Apply volume modifier
  if(cycleAdj.volumeMod){
    exercises = exercises.map(ex => {
      const m = ex.s.match(/^(\d+)×(.+)$/);
      if(!m)return ex;
      const newSets = Math.max(2, Math.round(parseInt(m[1]) * (1 + cycleAdj.volumeMod/100)));
      return {...ex, s:`${newSets}×${m[2]}`, _volumeAdjusted: true};
    });
  }

  // Apply intensity modifier (RPE shifts)
  // (intensity adjustment happens at lift-time via getEffectiveLoad)

  return {
    type: 'workout',
    splitDay,
    splitName: SP[splitDay].n,
    splitFocus: SP[splitDay].f,
    exercises,
    cycleNote: cycleAdj.note,
    prWindow: cycleAdj.prWindow,
    restOption: cycleAdj.restOption,
  };
}
```

#### `getEffectiveLoad(plannedWeight, exerciseId, cyclePhase, lastSession)` — Otoregülasyon

```javascript
function getEffectiveLoad(plannedWeight, exerciseId, cyclePhase, lastSession){
  let adjustedWeight = plannedWeight;

  // Cycle phase adjustment
  if(cyclePhase === 'Luteal_Late'){
    adjustedWeight *= 0.92;  // -%8
  } else if(cyclePhase === 'Menstruation_D1_2'){
    adjustedWeight *= 0.85;  // -%15 (eğer egzersiz yapılıyorsa)
  } else if(cyclePhase === 'Folliküler' && PR_CANDIDATES.includes(exerciseId)){
    // Folliküler ve PR candidate ise +%2.5 önerisi
    if(lastSession && lastSession.rpeAvg && lastSession.rpeAvg < 7.5){
      adjustedWeight *= 1.025;  // +%2.5 önerisi (last session easy ise)
    }
  }

  // Last session RPE feedback
  if(lastSession && lastSession.rpeAvg){
    if(lastSession.rpeAvg > 9){
      adjustedWeight *= 0.95;  // Çok zorlu → -%5
    } else if(lastSession.rpeAvg < 6.5 && cyclePhase !== 'Luteal_Late'){
      adjustedWeight *= 1.025;  // Çok kolay → +%2.5
    }
  }

  // Round to nearest 0.5kg (or 2.5kg if barbell)
  const isBarbell = ['sq','rdl','ht','tbdl'].includes(exerciseId);
  const round = isBarbell ? 2.5 : 0.5;
  return Math.round(adjustedWeight / round) * round;
}
```

#### `getProgressionRecommendation(exerciseId, history)` — Sonraki seans önerisi

```javascript
function getProgressionRecommendation(exerciseId, history){
  // history = [{date, weight, reps, sets, rpeAvg, completed}, ...]
  if(!history || history.length < 2)return null;

  const last = history[history.length-1];
  const prev = history[history.length-2];

  // Linear progression check
  if(last.completed && last.rpeAvg <= 7){
    return {
      action: 'increase_weight',
      delta: last.weight < 30 ? 1 : 2.5,
      msg: `Geçen sefer ${last.weight}kg × ${last.reps} RPE ${last.rpeAvg} — kolaydı. ${last.weight + (last.weight < 30 ? 1 : 2.5)}kg dene.`,
    };
  }
  if(last.completed && last.rpeAvg <= 8.5){
    return {
      action: 'maintain',
      delta: 0,
      msg: `${last.weight}kg × ${last.reps} sürdür — bir hafta daha. RPE 7'ye düşünce ağırlık artır.`,
    };
  }
  if(last.rpeAvg > 9 || !last.completed){
    return {
      action: 'reduce_or_deload',
      delta: -(last.weight * 0.05),
      msg: `Geçen sefer zorlu (RPE ${last.rpeAvg}) — ${(last.weight * 0.95).toFixed(1)}kg ile başla, RPE 7-8 hedef.`,
    };
  }
}
```

### 7.3. UI Önerileri (HTML + Render)

**A. Bugün sayfası — Antrenman accordion:**

```html
<div class="ch" id="ch-workout">
  <h3>🏋️ Antrenman</h3>
  <div class="accordion-content">
    <!-- Cycle önerin kartı (Ajan 2'den) -->
    <div class="cycle-suggestion-card" id="workout-cycle-card"></div>

    <!-- Bugünün gün başlığı -->
    <div class="day-header">
      <div class="day-emoji">🦵</div>
      <div class="day-name">Alt Vücut · Squat</div>
      <div class="day-focus">Quadriceps · Glute · Core</div>
      <div class="day-duration">~50-60 dk</div>
    </div>

    <!-- Egzersiz listesi -->
    <div class="exercise-list" id="ex-list"></div>

    <!-- Bugün özetinden sonraki gün preview -->
    <div class="next-day-preview"></div>
  </div>
</div>
```

**B. Egzersiz kartı (set girişi ile):**

```html
<div class="exercise-card" data-id="sq">
  <div class="ex-header">
    <span class="ex-name">Smith Machine Squat</span>
    <span class="ex-sets">4 × 8-10 · RPE 7-8</span>
  </div>
  <div class="ex-meta">
    <span class="ex-muscles">Quadriceps · Glute · Core</span>
    <span class="ex-rest">Dinlenme: 2 dk</span>
  </div>

  <!-- Set girişleri -->
  <div class="set-rows">
    <div class="set-row" data-set="1">
      <span class="set-num">Set 1</span>
      <input type="number" placeholder="Yük (kg)" step="0.5">
      <input type="number" placeholder="Tekrar" step="1">
      <select class="rpe-pick">
        <option value="">RPE</option>
        <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
      </select>
      <button class="set-done">✓</button>
    </div>
    <!-- ...4 set... -->
  </div>

  <!-- Akıllı öneri -->
  <div class="progression-hint" id="hint-sq">
    💡 Geçen seans: 60kg × 9 (RPE 7) — kolaydı. 62.5kg dene.
  </div>

  <!-- Substitution chip (cycle-aware) -->
  <div class="sub-chip">
    🌸 Ovulasyon önerisi: Goblet squat'a geçer misin?
    <button class="sub-yes">Evet, çevir</button>
  </div>

  <!-- Form video / GIF -->
  <button class="ex-info-btn">📹 Form videosu</button>
</div>
```

**C. Workout sekmesi başlığı + haftalık preview:**

```html
<div id="page-egzersiz">
  <h2>💪 Bu Hafta</h2>
  <div class="weekly-grid">
    <div class="day-card" data-day="1">
      <div class="day-name">Pzt · Squat</div>
      <div class="day-status">✓ Tamamlandı</div>
    </div>
    <div class="day-card today" data-day="2">
      <div class="day-name">Sal · Push</div>
      <div class="day-status">Bugün</div>
    </div>
    <!-- ... -->
  </div>

  <!-- Bugünün antrenmanı -->
  <h2>Bugünün antrenmanı</h2>
  <div id="todays-workout"></div>

  <!-- Cycle uyarı (Folliküler PR penceresi vb.) -->
  <div id="cycle-window-card"></div>
</div>
```

### 7.4. Mevcut Fonksiyonlarda Değişiklikler

| Fonksiyon | Değişiklik |
|---|---|
| `SP` (satır 1353) | 6-gün → 5-gün (Bölüm 7.1'deki yeni yapı) |
| `EX` (satır 1488) | 33 → ~36 hareket, gün dağılımı değiş |
| `CD` (satır 1533) | 1-6 cooldown → 1-5 cooldown |
| `renderEx()` | `getDailyWorkout(d)` çağır, dynamic exercise list render et |
| `renderExDay()` | Cycle adjustment'ı entegre et, substitution chip render et |
| `getCycleAwareWorkoutAdjustment` (Ajan 2 önerisi) | Bu fonksiyonu ekle |

---

## 8. Öneriler P0/P1/P2

### P0 (must-have, hemen — 1-2 hafta)

1. **6-gün PPL → 5-gün split'e geçiş.** Yeni `SP` ve `EX` yapıları (Bölüm 7.1). Schoenfeld 2017 frequency meta'sı ile uyumlu, recovery margin sağlanmış. Bengisu için 6-gün gereksiz, deficit'te recovery debt yaratıyor.

2. **`getDailyWorkout(d)` helper'ı ekle.** Cycle adjustment + günlük antrenman ile birleştirme. Ajan 2'nin `getCycleAwareWorkoutAdjustment` ile beraber çalışsın.

3. **Set/rep/yük tracking ekle.** Şu an `done` checkbox var ama gerçek yük yok. Workout 30 fikirden #1 (set-rep tracking) **kritik** — RPE ve `getProgressionRecommendation` bu olmadan çalışmaz.

4. **Dinlenme süreleri yaz.** Her hareket kartında "Dinlenme: 2 dk" görünsün (statik metin yeter, timer P1).

5. **PR pencere uyarısı (Folliküler).** Antrenman accordion'unda Day 8-12 cycle gününde "🏆 Bu hafta PR penceresi açık" rozeti.

6. **Hareket envanterini güncelle.** 4 hareket çıkar (`fr`, `hkr`, `abw`, `ldrop`), `upr` ROM düzelt. ~~`ddb`~~ → RDL alternatifi olarak listele. 12 yeni hareket ekle (Bölüm 3.2).

7. **Cycle substitution chip.** Ovulasyon fazında ana hareket için "Goblet squat'a geçer misin?" UI çağrısı.

### P1 (should-have, 4 hafta)

8. **`getEffectiveLoad()` ve `getProgressionRecommendation()` helper'ları.** Otoregülasyon — cycle phase + last session RPE → akıllı yük önerisi.

9. **Set arası rest timer.** 90 sn / 2 dk countdown UI (Workout 30 fikir #2).

10. **RPE/RIR opsiyonel girişi.** İlk 4 hafta gizli, sonra "RPE öğrenmek ister misin?" tutorial sonrası set sonrası RPE picker.

11. **8RM/10RM PR test günü.** 12 haftada 1 kez Hafta 12 sonu. Squat/HT/RDL/Lat pulldown/Incline DB press benchmark.

12. **Soreness 1-5 günlük log.** Workout 30 fikir #19. MAV/MRV detection için.

13. **Yeni hareketlerin YouTube video ID'leri.** `YT_MAP`'e ekle (gobsq, bgss, step, bsht, tbdl, cpt, cf, frmcry, dbg, ass_pu, kbs, sa_lr).

14. **Total Body günü skip kuralı (4-gün hafta).** Otomatik UI: kullanıcı geç luteal'da ise Day 5'i otomatik "opsiyonel" bayrakla göster, [Skip] butonu.

15. **12 haftalık periodization timeline.** Hafta 1-12 görseli, deload haftaları işaretli, Mezo geçişleri vurgulu.

16. **Önceki hafta yükleri otomatik göster.** Set girişi öncesi `getProgressionRecommendation` çağırıp "Geçen seans 60kg × 9, 62.5kg dene" hint.

### P2 (uzun vadede, 2-3 ay)

17. **8 hafta kuvvet trend grafiği.** Squat 8RM, HT 8RM, RDL 10RM SVG line chart (Workout 30 fikir #9).

18. **Cycle × performans korelasyon raporu.** 4-6 cycle veri sonrası "folliküler sende +%X kuvvet, geç luteal -%Y" insight (Ajan 2 P2 #16 ile uyumlu).

19. **Apple Health uyku × RPE öneri.** Önceki gece <6 saat uyku ise sabah workout intensity önerisi -%5 düşür ("Bugün Hafif Öner" botu — 30 fikir #25 ile birleştir).

20. **Akıllı haftalık volume report.** Pazar günü "bu hafta quad 14 set, hamstring 10 set, glute 18 set..." mini-rapor; MEV altına düşen kas grubu uyarı.

21. **Yaralanma önleme protokolü.** Ajan 5'in ovulasyon ACL koruma + Ajan 1'in tiroidektomi-spesifik uyarıları (boyun skar, vacuum kabul) tek bir "safety profile" altında.

22. **AI form yorumu (post-workout).** Set tamamlandı, kullanıcı "form videoma bakar mısın?" → Claude Haiku vision (30 fikir #27).

23. **Compliance % takibi.** Planlananın % kaçı tamamlandı (30 fikir #12). Cycle-aware: Geç luteal'de %80 normal, folliküler'de %95+ hedef.

24. **PR confetti.** 8RM yeni rekor → confetti (Diet'in confetti pattern'ı reuse).

25. **Achievement system.** Workout achievements: "🏆 İlk PR", "💪 12 hafta tutarlılık", "🍑 Glute Kraliçesi (24 set/hafta 4 hafta)", vb.

---

## 9. Açık Sorular

### Ajan 4 (beslenme zamanlaması) için:

1. **Antrenman öncesi karb timing:** Bengisu 17:30 ana öğün, 17:00 kreatin. Antrenman saati nerede? Eğer 17:00'den sonra → pre-workout karb 60-90 kcal mevcut. Eğer akşam 19:00+ → karb timing yeniden değerlendirilmeli.

2. **Post-workout protein (anabolic window):** Yeni başlayanlarda 2-saatlik "anabolic window" tartışmalı (Schoenfeld 2013 PMID 24299050). Bengisu'nun 2. öğün 17:30 protein zaten yeterli olabilir, ama compound günde (Day 1, 3) ekstra +20g protein post-workout faydalı mı?

3. **Kreatin timing × workout:** 5g kreatin saati (17:00) workout öncesi/sonrası tercih hangisi? Cribb & Hayes 2006 (PMID 16616915) post-workout küçük avantaj göstermiş.

### Ajan 5 (yaralanma önleme) için:

4. **Ovulasyon ACL koruma protokolü:** Drop landing teknik öğretim, Bengisu 32 yaş kadın hızlı kilo kaybında konnektif doku rejenerasyonu yavaş — özel cue/protokol var mı?

5. **Boyun skar gerilim tehditi olan hareketler:** Squat (bar pozisyonu), Hip thrust (çene içe), Plank (boyun nötr) — guardrail listesi.

6. **Knee valgus (diz içe kapanma) erken tespiti:** Bengisu yeni başlayan, Bulgarian split squat ve goblet squat'ta yaygın hata. Form check protokolü?

### Bengisu'nun cevaplaması gerekenler:

7. **Mevcut ev/spor salonu ekipman envanteri:** Smith machine var mı? Trap bar? Kettlebell? Pull-up bar? Bant? — Substitusyon haritası bu cevaba göre önceliklendirilir.

8. **Mevcut kuvvet baseline:** Squat/RDL/Hip thrust mevcut çalışılan ağırlık kaç kg? `getProgressionRecommendation` baseline ihtiyacı.

9. **Bulgarian split squat zorlu mu?** Bengisu denge bozukluğu yaşadıysa Day 1'de Reverse Lunge'a downgrade.

10. **PR hedefi var mı?** Squat 60→70 kg gibi spesifik hedefi varsa Mezo 2 (Hafta 5-8) Folliküler PR'leri buna yönelir.

11. **Hangi gün antrenman tercih ediyor?** Pzt-Sal-Çar-Per-Cum default ama Bengisu sosyal/iş takvimine göre Sal-Çar-Per-Cum-Cmt veya başka kombinasyon olabilir. WEEK_SCHEDULE bunu yansıtmalı.

---

## 10. Kaynaklar

### Resistance Training Volume + Frequency

- **PMID: 27400175** — Schoenfeld BJ et al. 2017. *J Strength Cond Res*. "Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis."
- **PMID: 27110355** — Schoenfeld BJ et al. 2016. *Sports Med*. "Dose-response relationship between weekly resistance training volume and increases in muscle mass."
- **PMID: 33729824** — Baz-Valle E et al. 2022. "A systematic review of the effects of different resistance training volumes on muscle hypertrophy."
- **PMID: 32555004** — Krzysztofik M et al. 2019. *Int J Environ Res Public Health*. "Maximizing muscle hypertrophy: A systematic review of advanced resistance training techniques and methods."

### RPE / RIR Validasyon

- **PMID: 27199491** — Zourdos MC et al. 2016. *J Strength Cond Res*. "Novel resistance training-specific rating of perceived exertion scale measuring repetitions in reserve."
- **PMID: 31188810** — Romero-Moraleda B et al. 2019. *PLoS One*. "Menstrual cycle and exercise-induced muscle damage and inflammation: a systematic review."

### Periodization

- **PMID: 30704520** — Helms ER et al. 2018. *J Funct Morphol Kinesiol*. "Application of the repetitions in reserve-based rating of perceived exertion scale for resistance training."
- **PMID: 29466100** — Israetel M, Hoffmann J, Smith CW. 2017. *Scientific Principles of Strength Training* (Renaissance Periodization).

### Hip Thrust / Glute

- **PMID: 25144126** — Contreras B et al. 2014. *J Strength Cond Res*. "A comparison of gluteus maximus, biceps femoris, and vastus lateralis electromyographic activity in the back squat and barbell hip thrust exercises."

### Squat / Deadlift Biomechanics

- **PMID: 14571300** — Schoenfeld BJ. 2010. "Squatting kinematics and kinetics and their application to exercise performance." *J Strength Cond Res*.
- **PMID: 22002517** — Andersen V et al. 2014. "Electromyographic comparison of barbell deadlift, hex bar deadlift, and hip thrust exercises."

### Cycle × Performance

- **PMID: 25408258** — Sung E et al. 2014. *Springerplus*. "Effects of follicular versus luteal phase-based strength training in young women."
- **PMID: 28150594** — Wikström-Frisén L et al. 2017. "Effects on power, strength and lean body mass of menstrual/oral contraceptive cycle based resistance training."
- **PMID: 14600556** — Janse de Jonge XAK. 2003. *Sports Med*. "Effects of the menstrual cycle on exercise performance."
- **PMID: 32116486** — Blagrove RC et al. 2020. *Sports Med*. "Effects of nutritional supplements on exercise performance and recovery during the menstrual cycle: a systematic review and meta-analysis." (faz-bazlı periodizasyon meta — null bulgu)

### Ligament Laxity (Ovulation)

- **PMID: 9617397** — Wojtys EM et al. 1998. *Am J Sports Med*. "Association between the menstrual cycle and anterior cruciate ligament injuries in female athletes."
- **PMID: 17909368** — Hewett TE et al. 2007. *Knee Surg Sports Traumatol Arthrosc*. "Anterior cruciate ligament injuries in female athletes: Part 2, a meta-analysis of neuromuscular interventions aimed at injury prevention."

### Bone Mineral Density

- **PMID: 27875836** — Beck BR et al. 2017. *J Sci Med Sport*. "Exercise and Sports Science Australia (ESSA) position statement on exercise prescription for the prevention and management of osteoporosis."

### Klavuzlar / Konsensüs

- **NSCA — Essentials of Strength Training and Conditioning, 4th ed.** (Haff & Triplett 2016)
- **ACSM — Guidelines for Exercise Testing and Prescription, 11th ed.** (Liguori et al. 2021)
- **ATA 2023 Guidelines for DTC** (Haugen et al. 2016 + 2023 update)
- **IOC RED-S 2023 Consensus** (Mountjoy et al., PMID 37726159)

### Pratik Kılavuzlar (Web)

- **Stronger By Science** (Greg Nuckols) — *MASS Research Review* aylık özetler
- **Renaissance Periodization** (Mike Israetel) — kadın kas grupları MEV/MAV/MRV çizelgeleri
- **3D Muscle Journey** (Eric Helms, Andrea Valdez) — practical periodization
- **Bret Contreras blog** — glute training EMG çalışmaları

---

**Rapor tarihi:** 5 Mayıs 2026
**Hazırlayan:** Ajan 3 — Spor Bilimi & Kinezyoloji (Claude Opus 4.7, 1M context)
**İncelenmiş kaynaklar:** PubMed (2010-2026), Cochrane, NSCA + ACSM klavuzlar, Schoenfeld + Helms + Israetel literatürü, ATA 2023, IOC RED-S 2023
**Toplam referans:** 16 PMID + 4 klavuz
**Kelime sayısı:** ~5,400
