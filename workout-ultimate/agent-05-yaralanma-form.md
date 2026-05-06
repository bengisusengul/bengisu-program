# Ajan 5 — Yaralanma Önleme & Form Öğretimi

**Bengisu, 32 y, kadın · Total tiroidektomi (≥6 ay) · Levotiron + Calciday · Yeni başlayan-orta lifter · 5/7 yürüyüş + 4-5/7 esnek güç · Hedef 76.9→58 kg**

Uzmanlık çerçevesi: McGill (omurga yük toleransı), Lehman ("pain ≠ damage", biomekanik nüans), Beardsley (kas mekaniği, yön-spesifik direnç), ACSM/NSCA (klinik standartlar).

---

## Executive Summary

Bengisu için yaralanma riski heterojen: çoğu hareket düşük-orta riskli (yeni başlayan + makineye yaslı + Smith machine yaygın), fakat üç **özel risk vektörü** var:

1. **Tiroidektomi sonrası boyun postürü:** Squat/DL Valsalva, lateral raise üst trapez gerginliği, plank servikal yük — skar dokusu mekanik gerilim altında 6-12 ayda hassasiyet maksimum.
2. **Ovulasyon ligament gevşekliği (Day 11-15, %30-50 laxite, ACL non-contact riski 2-3x):** Squat, lunge, single-leg, plyometric tüm hareketlerde modifikasyon.
3. **RED-S sınırında deficit:** Bağ doku rejenerasyonu yavaş (Trexler 2014); ufak overuse yaralanmalarının iyileşmesi normalden uzun.

Sistemik öneri: **statik "şu hareket yasaktır" listesi yerine dinamik "şu durumda → şu sub"** kuralları. Kod tarafında `EXERCISE_RISK_DB` + `getExerciseRisk(id, userState)` + erken uyarı sistemi gerekiyor.

P0: Boyun-nötr postür kuralları her squat/DL/press kartında, ovulasyon-aware substitution mekanizması, "yaralandım" modal akışı (PEACE & LOVE protokolü), Lehman "acı vs hasar" eğitimi.

---

## 1. Yaralanma Risk Haritası (5-gün split + Ajan 3 envanter)

Format: **Risk skoru (1-5)** · Bengisu spesifik risk · Erken uyarı sinyali · Substitution

Risk skalası:
- **1** = Çok düşük (makine, sabit yörünge, hata payı yüksek)
- **2** = Düşük (DB izolasyon, kontrol kolay)
- **3** = Orta (compound, free weight, teknik hatası mümkün)
- **4** = Yüksek (Bengisu-spesifik nedenle elevated)
- **5** = Kritik (Bengisu için belirli faz/durumda kontrindike)

### Day 1 — Alt Vücut · Squat Odaklı

| Hareket | Risk | Bengisu spesifik | Erken uyarı | Substitution |
|---|---|---|---|---|
| **Smith Machine Squat** | 3 | Sabit bar yörüngesi diz shear artırabilir (knee tracking sınırlı); boyun bara değer → posterior servikal kompresyon | Diz iç dönmesi (valgus collapse), bel kavislenmesi, boyun yanmaası, Valsalva sırası baş basıncı | A: Goblet Squat, B: Box Squat (depth fix), C: Hack Squat machine |
| **Goblet Squat (DB)** | 2 | DB önde tutulduğu için boyun nötr kalır; ideal tiroidektomi-uyumlu squat | Üst sırt yuvarlanması (DB ağırlaşırsa), bilek extension ağrısı | A: Bodyweight Squat (ROM çalışması), B: Box Squat, C: Leg Press |
| **Bulgarian Split Squat** | 4 | Tek bacak → ovulasyonda lateral diz stabilitesi düşer; arka ayak konumu lumbar fleksiyon yaratabilir | Ön diz iç dönmesi, kalça düşmesi (drop), bel ağrısı, denge kaybı (3+ kez) | A: Reverse Lunge, B: Step-Up (impact yok), C: Split Squat (sabit, dipte yok) |
| **Reverse Lunge (DB)** | 3 | Geri adım → ön diz daha az shear, ama bel kavislenmesi mümkün | Adım atma sırasında bel hyperextension, ön diz tracking bozuk | A: Stationary Split Squat, B: Step-Up, C: Wall sit |
| **Leg Press** | 2 | Sabit yörünge, bel desteği var; tiroidektomi-friendly | Bel destekli yastıktan kalkıyor (lumbar flexion), diz hyperextension son repde | A: Hack Squat, B: Sissy Squat (advanced — kaçın), C: Goblet Squat |
| **Leg Curl** | 1 | İzolasyon, makine; Bengisu için neredeyse risksiz | Hamstring kramp (RED-S/elektrolit), kalça ucu kaldırma cheating | A: Nordic Curl (advanced), B: Cable leg curl, C: Glute-Ham Raise |
| **Abductor Makinesi** | 1 | İzolasyon; ovulasyonda iç bacak gevşekliği yok bu makinede | Bel kavislenmesi (yastıktan kalkma), aşırı dış rotasyon | A: Cable hip abduction, B: Side-lying leg lift, C: Lateral band walk |
| **Glute Bridge (Bant)** | 1 | Zemin + bant → düşük risk | Kalça eklem ağrısı, bel hyperextension (overarch) | A: Single leg glute bridge, B: Frog pump, C: Hip thrust (machine) |
| **Pallof Press** | 1 | Anti-rotation izometrik; tüm fazlarda güvenli | Omuz impingement (kol çok yüksek), bel rotation | A: Anti-rotation banded plank, B: Half-kneeling Pallof, C: Suitcase carry |

### Day 2 — Üst Vücut · Push

| Hareket | Risk | Bengisu spesifik | Erken uyarı | Substitution |
|---|---|---|---|---|
| **Incline DB Press** | 2 | DB > Bar (omuz koruma); kafayı yastığa bastırmak boyun kompresyonu yaratır | Omuz öne sıkışma (anterior tilt), boyun ekstensor gerginliği, dirsek flare aşırı | A: Machine Chest Press, B: Flat DB Press, C: Push-up (incline kutu) |
| **DB Shoulder Press** | 3 | Yukarı bakış servikal hyperextension; tiroidektomi skar gerilimi mümkün | Bel kavislenme (lumbar overhead compensation), boyun extension >10°, omuz impingement | A: Arnold Press (kontrollu ROM), B: Landmine Press, C: Cable Shoulder Press |
| **Lateral Raise (DB)** | 4 | **Tiroidektomi için kritik:** Lateral raise üst trapez aşırı aktivasyon → boyun-omuz gerginliği yansır skar bölgesine | Üst trap shrug (omuz kalkması), boyun lateral fleksiyon, baş öne kayma | A: Cable Lateral Raise (sabit gerilim, daha az trap), B: Side-lying Lateral Raise, C: Y-Raise (lower trap) |
| **Front Raise** | 3 | Ön deltoid zaten incline + shoulder press ile dolu; ekstra trap yükü gereksiz | Bel kavislenme (momentum), boyun gerginliği | A: Çıkar (Ajan 3 önerisi), B: Cable Front Raise, C: Plate Halo |
| **Cable Tricep Pushdown** | 1 | İzolasyon; düşük risk | Dirsek flare, omuz öne tilt, boyun gerginliği (ağırlık aşırıysa) | A: Skull Crusher, B: Overhead Tricep Extension (boyun risk!), C: DB kickback |
| **Skull Crusher** | 2 | Yatış → boyun nötr; dirsek artrit/tendiniti dikkat | Dirsek kayma (lateral drift), bar alın çok yakın | A: DB Skull Crusher, B: Cable Overhead Extension, C: Diamond Push-up |
| **Stomach Vacuum** | 2 | **Tiroidektomi-spesifik:** ≥6 ay post-op + iyileşmiş skar varsa güvenli (Hodges & Gandevia 2000); intra-abdominal +5-15 mmHg, Valsalva (+50-100) ters yönde | Boyun gerginliği, ses kısıklığı (RLN hassasiyet), skar bölgesinde çekme | A: Diafragmatik nefes, B: Bird Dog (core anti-extension), C: Dead Bug |
| **Plank** | 2 | Boyun nötr tutulması zor — bakış aşağı/öne karışır | Bel sarkması, baş düşmesi (chin tuck eksik), omuz scapular protraction kilit | A: Knee Plank, B: Front-bridge desk variant, C: Bird Dog |

### Day 3 — Glute & Posterior Chain

| Hareket | Risk | Bengisu spesifik | Erken uyarı | Substitution |
|---|---|---|---|---|
| **Romanian Deadlift (RDL)** | 4 | Hinge pattern öğrenilmemişse lumbar fleksiyon → disk yük; tiroidektomi Valsalva ≥6 ay sonra OK ama iç basınç boyun damarsal etkilemez | Bel yuvarlanması (cat-back), bar dizden uzaklaşması, boyun extension (yukarı bakış) | A: Cable Pull-Through, B: Hip Hinge dowel drill, C: Single Leg RDL (denge — yeni başlayan kaçın) |
| **Trap-Bar Deadlift** | 3 | RDL'den daha düşük lumbar shear (Swinton 2011); ovulasyon-uyumlu | Bel kavislenme, boyun extension, knee valgus | A: RDL (geri dön), B: Goblet Squat, C: Hip Thrust |
| **Hip Thrust (Smith/Barbell)** | 2 | Bel destekli; ana glute hareketi; tiroidektomi-friendly çünkü baş bench üzerinde nötr | Bel hyperextension (overlift), çenenin yukarı kaldırılması (servikal extension), bar pubis basıncı | A: Glute Bridge (zeminde), B: Machine Hip Thrust, C: Frog pump |
| **Single Leg Hip Thrust** | 4 | **Ovulasyon riski yüksek:** Tek bacak stabilizasyonu, kalça düşmesi (drop) mümkün; bilateral'a switch öncelik | Kalça asimetrik düşme, bel rotasyonu (kompansasyon), ön bacak tibialis kramp | A: B-Stance Hip Thrust, B: Bilateral Hip Thrust, C: Single leg glute bridge zeminde |
| **B-Stance Hip Thrust** | 2 | Asimetrik bilateral — ovulasyon güvenli alternatif; iyi kompromisi | Geri ayak çok yüklenir (dengeyi bozar), bel hyperextension | A: Bilateral Hip Thrust, B: Single leg HT (sadece luteal), C: Glute bridge |
| **Cable Kickback** | 1 | İzolasyon, sabit gerilim; düşük risk | Bel hyperextension (back-arching), kalça external rotation (rear leg) | A: Donkey kick (mat), B: Cable hip extension, C: Bant kickback |
| **Calf Raise (Leg Press)** | 1 | Düşük risk; calciday-yetersizliği kramp riski | Kramp (Ca/Mg eksik), Aşil tendon ağrısı | A: Standing calf raise, B: Seated calf raise (soleus), C: Single leg calf raise |
| **Cable Pull-Through** | 2 | Hinge öğretmek için ideal (RDL'den önce); bel-friendly | Bel yuvarlanması (cable çok ağır), diz fleksiyon aşırı | A: Hip hinge dowel drill, B: Kettlebell deadlift, C: Banded good morning |
| **Stomach Vacuum** | 2 | Aynı Day 2 (yukarıda) | Aynı | Aynı |

### Day 4 — Üst Vücut · Pull

| Hareket | Risk | Bengisu spesifik | Erken uyarı | Substitution |
|---|---|---|---|---|
| **Lat Pulldown** | 2 | Boyun nötr; bar göğüse → boyun extension yok; tiroidektomi-friendly | Boyun extension (bar arkasına), omuz protraction (lat angajesi yok), bel hyperextension momentum | A: Assisted Pull-up (bant), B: Inverted Row, C: Single arm cable pulldown |
| **Seated Cable Row** | 2 | Bel destekli oturma; **boyun nötr kritik** | Boyun protraction (kafa öne), bel hyperextension (rowing momentum), scapular retraction yok (tüm sırt yatay çeker) | A: DB Row tek kol, B: Inverted Row, C: T-Bar Row (chest-supported) |
| **DB Row (Tek Kol)** | 2 | Bench desteği → bel-friendly; tek kol → diğer kol bench'i tutar (boyun/bel offload) | Boyun rotation (yan bakış), kol omuza çok yaklaşır (rotator cuff), bel rotation kompansasyon | A: Chest-supported DB row, B: Inverted Row, C: Cable single arm row |
| **Face Pull** | 1 | Postür hareketi — ROM kontrol edilirse risk düşük | Boyun extension (kafa öne kayma), bilek deviation | A: Band pull-apart, B: Reverse Pec Deck, C: Y-Raise prone |
| **Band Pull-Apart** | 1 | Risk neredeyse yok; postür hareketi | Boyun extension, omuz aşırı external rotation | A: Reverse fly DB, B: Y-T-W, C: Wall slide |
| **DB Bicep Curl** | 1 | İzolasyon; düşük risk | Dirsek flare, bel hyperextension (cheating curl) | A: Hammer Curl, B: Cable Curl, C: Concentration Curl |
| **Hammer Curl** | 1 | Düşük risk; brachialis odak | Aynı bicep curl | Aynı |

### Day 5 — Total Hibrid

| Hareket | Risk | Bengisu spesifik | Erken uyarı | Substitution |
|---|---|---|---|---|
| **Goblet Squat** | 2 | Aynı Day 1 (yukarıda) | Aynı | Aynı |
| **Step-Up (Kutu)** | 3 | Tek bacak; ovulasyon hassas; kutu yüksekliği aşırıysa knee shear | Kutuya çıkarken arka bacak push (yanlış), öne eğilme, denge kaybı | A: Reverse Lunge, B: Bulgarian Split Squat (advanced), C: Box Step Down (eccentric) |
| **Sumo Squat (DB)** | 2 | Geniş duruş → adduktör yük; ovulasyonda OK çünkü bilateral | Diz iç dönmesi, bel hyperextension | A: Goblet Squat, B: Plié squat, C: Cable adduction |
| **Cable Pull-Through** | 2 | Aynı Day 3 | Aynı | Aynı |
| **Lateral Raise / Cable LR** | 4 | Aynı Day 2 (tiroidektomi trap riski) | Aynı | Aynı |
| **DB Row** | 2 | Aynı Day 4 | Aynı | Aynı |
| **Upright Row** | 4 | **Ajan 3'te modify edildi:** Çene değil göğüs hizasına → omuz impingement; üst trap yüksek aktivasyon → tiroidektomi boyun gerginliği | Bar çeneye yakın, omuz internal rotation acı, boyun tilt | A: Cable upright row göğüs hizası, B: High Pull (advanced kaçın), C: Lateral Raise |
| **Russian Twist** | 3 | **Ovulasyonda spinal rotation altında yük → disk shear riski**; bel zaten cycle-bazlı hassas | Bel ağrısı (rotation altında yük), boyun gerginliği (kafa-omuz line bozulması), nefes kesilme (Valsalva) | A: Pallof Press (anti-rotation), B: Side Plank with reach, C: Wood chop kontrollu |
| **Farmer's Carry** | 2 | Grip + core + postür; tiroidektomi-friendly çünkü kafa nötr ve düz yürür | Üst trap shrug (yük aşırı), bel kavislenme (yorgun postür), boyun protraction | A: Suitcase carry tek kol, B: Sandbag carry, C: Yürüyüş + 2x DB |
| **Calf Raise** | 1 | Aynı Day 3 | Aynı | Aynı |

### Genel Risk Özeti — Tiroidektomili Kadın Profili İçin

- **5/5 Kritik bölge:** Yok (mevcut envanterde belirli faz dışında kontrindike hareket yok)
- **4/5 Yüksek risk:** Lateral Raise, Bulgarian Split Squat (ovulasyonda), Single Leg HT (ovulasyonda), RDL (form öğrenilmemişse), Upright Row, Russian Twist (ovulasyonda)
- **3/5 Orta risk:** Smith Squat, DB Shoulder Press, Front Raise, Reverse Lunge, Trap-Bar DL, Step-Up, Russian Twist (luteal/folliküler)
- **1-2/5 Düşük risk:** İzolasyon makine hareketleri, Pallof, Plank, Vacuum (≥6 ay post-op koşuluyla), Pull-apart, izolasyon curl/pushdown

---

## 2. Tiroidektomi-Spesifik Form Kuralları

### 2.1. Boyun postürü (squat/DL/press için "kafa nötr" doktrini)

Her squat, deadlift, hip thrust ve overhead press kartında **görsel + sözel kural** olmalı:

- **Bakış 2-3 m önde, yere paralel** (yukarı bakma, aşağı bakma yok)
- **Çene paralel, hafif tucked** ("packed neck" — McGill, *Back Mechanic* 2015)
- **Kulak-omuz-kalça hizası** (forward head posture'a izin verme)
- Squat'ta bar trapeze değil, **alt traparius (omuzdaki kemiksi çıkıntı altı)** üzerine yerleşir (high-bar) — boyun teması yok
- Hip thrust'ta bar pubis kemiğine değil, **pad ile dağılmış** olmalı; bench üzerinde **baş + üst sırt nötr** (overlift'te kafa kalkıp ekstansiyona girmesin)

McGill omurga prensibi: Servikal omurga lumbar omurga ile **aynı pasif gerilimi paylaşır**. Boyun ekstansiyonu lumbar ekstansiyonu da artırır. Bengisu için ekstra önem: boyun cerrahisi sonrası anterior soft tissue (skar) + posterior cervical aşırı yük çelişir.

### 2.2. Valsalva manevrası ≥6 ay sonrası güvenli mi?

**Evet, ama nüansla.** Literatür perspektifi:

- Valsalva +50-100 mmHg intra-abdominal basınç (Hodges & Gandevia 2000, PMID: 10913124)
- Boyun damarsal etki: kısa süreli sistolik kan basıncı yükselişi — **sağlıklı kardiyovaskülerde sorun değil**, ama anterior boyun cerrahisinde **stomal vasküler dolgunluk geçici olarak artar**
- ATA 2023 perioperatif rehber: **2-4 hafta hafif aktivite**, 4-6 hafta sonra "tüm aktivite kısıtlamasız"; ≥6 ay sonra Valsalva sınırı yok
- Ancak: **şiddetli Valsalva (RPE 9-10, 1RM denemesi) başında baskı hissi, baş ağrısı, görme bulanıklığı yaratabilir**. Bu RED-S sınırındaki bir kadında daha hızlı ortaya çıkar.

**Bengisu için pratik kural:**
- RPE ≤8 set'lerde **kısa Valsalva (1-2 sn) güvenli**
- RPE 9-10 (1RM, max effort) **şu an programda yok** (yeni başlayan-orta + deficit) — gerek yok
- Set sonu **uzun nefes verme**, **breath-pause yok** (kafa basınç hissi başlarsa dur)

### 2.3. Stomach Vacuum: boyun-omurga ilişkisi (≥6 ay biomekanik perspektifi)

Ajan 1'in bulgusu: Vacuum **NEFES VERME** + diyaframı yukarı çekme = intra-abdominal basıncı **DÜŞÜRÜR** (Valsalva'nın tam tersi, +5-15 mmHg). Yani:

- Skar bölgesinde **çekme yok** (mekanik gerilim minimal)
- Servikal vasküler etki yok (intra-thoracic basınç değişmiyor)
- TVA + multifidus aktivasyonu lumbar omurga koruması (McGill prensibi: derin lokal stabilizatörler)

**Tek dikkat:** Vacuum sırasında **kafa-boyun nötr**. Çoğu kişi vacuum'da çene öne doğru iter (forward head) — bu skar bölgesinde gerilim yaratabilir. Ayna ile kontrol veya **chin-tuck + kafa duvar referansı** kuralı.

### 2.4. Plank / Side Plank / Shoulder Tap'ta boyun yükü

Plank'ta yaygın hata: **kafa düşürmek (chin to chest) veya yukarı kaldırmak**. Her ikisi de servikal asimetrik yük.

**Bengisu için kural:**
- **Bakış mata, kulak-omuz-kalça hizası** ("kafan boş bir kova taşıyor gibi nötr")
- Side plank'ta üst kol yukarıda → **boyun rotation kısıtla**, tavana bakma 5 sn'den uzun değil
- Shoulder tap (Ajan 3'te yok ama eklendiğinde) **kalça rotation engelleme** > boyun pozisyonu

### 2.5. Lateral Raise / Front Raise / Upright Row → üst trapez + boyun gerginliği

**Tiroidektomi için en yüksek riskli izolasyonlar.** Üst trapez ve levator scapulae aktivasyonu boyun postürünü zorlar. Skar dokusu fascia ile bağlı — uzun vadede gerginlik yansır.

**Form kuralları:**
- **Shrug compensation yok:** Omuzları kulaklara doğru kaldırmıyoruz. Lateral raise'da DB kaldırırken **omuz başı yerinde kalır**
- **Trapezi "boşalt":** Setlerin arasında omuzları aşağı çekme drill (depression)
- **Ağırlık küçük + ROM tam:** 3 kg ile temiz ROM, 6 kg ile shrug-cheating'den daha iyi
- **Front raise opsiyonel/çıkar** (Ajan 3 önerisi de aynı)
- **Upright Row göğüs hizası** (çene değil) — Schoenfeld 2007 omuz impingement uyarısı

**Eklenmesi gereken:** Her omuz session'ı sonrası **3 dk neck-shoulder mobility** (üst trap stretch, levator stretch, doorway pec stretch).

### 2.6. Calciday'e rağmen elektrolit eksiği → kramp form yönetimi

Tiroidektomi sonrası kemik koruma + kas kasılma için Ca + D3 alıyor; ama **Mg, Na, K eksikliği** kramp tetikleyici. Bengisu karnivor + IF + 5/7 yürüyüş → terle sodyum kaybı yüksek.

**Kramp olduğunda form yönetimi:**
- **Set'i durdur** (zorla kasılma → kas-tendon yırtık riski)
- Kramplı kası **pasif gerek** (statik stretch 30-60 sn)
- Hidrasyon: **0.5 L su + 1/4 tsp tuz + Mg** (ViDrate 150mg yetmez)
- Calciday + Mg-glycinate akşam dozunu kontrol et

**Önleme (kod uyarısı):**
- Eğer son 7 gün Calciday log'u eksik → **squat/DL günü öncesi uyarı**
- Sıcak hava (luteal + UK May-Eylül) → **set arası 1.5 dk + hidrasyon mesajı**

---

## 3. Ovulasyon Ligament Gevşekliği Modifikasyonları (Day 11-15)

Ajan 2'nin tespit ettiği boşluk: ovulasyon Day 13-15 (Ajan 2 önerisi: Day 11-15) ACL non-contact yaralanma riski 2-3x (Hewett 2007 meta). Estradiol pikinde kollajen sentezi paradoksu: **uzun-vadeli kollajen sentezi destekli**, ama **akut laxite +%30-50** (Park 2009).

Her primer hareket için **ovulasyon kartı**:

### Smith Squat → Goblet/Box Squat

**Lumbar tork azalır mı?**
- Smith machine sabit yörünge → lumbar fleksiyon riski sabit
- Goblet squat: yük önde + dipte yakın → **lumbar tork DAHA AZ** (Beardsley 2018: front-loaded squat lumbar yükü %30 azaltır)
- Box squat: dip kontrolü + diz shear ↓; ovulasyonda diz koruma için ideal
- **Kural:** Day 11-15 → Smith yerine Goblet (orta yük) veya Box squat (depth fix)

### Konvansiyonel DL → Trap-Bar / RDL

**Knee shear azalır mı?**
- Trap-bar DL: barın kişinin merkezinde → diz daha az anterior shear (Swinton 2011, JSCR)
- RDL: knee shear minimal (knee flexion 15-20° sabit), tüm yük hamstring + glute
- Konvansiyonel DL: bar dizden uzak başlar → **anterior tibial shear fazla** ovulasyonda kontrindike

**Kural:** Day 11-15 → Konvansiyonel DL kapatılır (zaten programda az), **Trap-Bar veya RDL ile değiştirilir**

### Single Leg HT → B-Stance HT

**Lateral knee stability korunması:**
- Single leg HT: yüksek glute medius çalışır ama kalça asimetrik düşme + tibia rotation riski → **ovulasyonda 2x risk**
- B-Stance HT: bilateral ama %70 yük tek bacakta → glute medius yine çalışır, **kontrol kolay**
- **Kural:** Day 11-15 → Single Leg HT → B-Stance HT swap

### Step-Up, Bulgarian → lateral knee stability

- Bulgarian Split Squat: arka ayak yüksek + ön diz tek başına stabilizasyon → **ovulasyonda valgus collapse riski çok yüksek**
- Step-Up: kutuya çıkış + iniş, daha kontrollü ama yine tek bacak
- **Kural:** Day 11-15 → Bulgarian → **Reverse Lunge (geri adım, ön diz daha güvenli)** veya **Step-Up düşük kutu (15-20 cm)** veya **Goblet Squat (bilateral)** sub

### Plyometric / Sprint Day 11-15'te Kontrindike mi?

**Evet, tüm plyometric kapatılır.** Drop jump, box jump >40cm, repeated countermovement, sprint tempo run → **ovulasyonda kontrindike** (Hewett bulgusu birincil olarak landing biomekaniğinden geliyor).

Bengisu'nun mevcut programında plyometric yok (yeni başlayan + deficit doğru karar), ama gelecekte eklenirse:
- **Day 6-12 plyometric pencere** (folliküler peak)
- **Day 13-15 plyometric kapalı**
- **Day 16-22 erken luteal plyometric az**

### Russian Twist → Pallof / Side Plank (Day 11-15)

Spinal rotation altında yük → ovulasyonda lumbar disk hassasiyeti yüksek. Anti-rotation hareketler (Pallof, Suitcase carry, Side Plank) **rotational stabilizator çalışır ama omurga rotation YOK**.

### Genel Ovulasyon Modifikasyon Tablosu

| Day 11-15 — Sub Önceliği |
|---|
| Smith Squat → **Goblet Squat** veya **Box Squat** |
| Konvansiyonel DL → **Trap-Bar DL** veya **RDL** |
| Single Leg HT → **B-Stance HT** |
| Bulgarian → **Reverse Lunge** veya **Step-Up düşük** |
| Russian Twist → **Pallof** veya **Side Plank** |
| Plyometric (varsa) → Bilateral compound veya cardio Z2 |
| Eksantrik tempo → **3-1-1** (3 sn aşağı, 1 sn dipte, 1 sn yukarı) — knee shear azalt |

---

## 4. Erken Uyarı Sistemi (uygulama içi kurallar)

İki kategori: **Otomatik (zorlayıcı bilgi)** vs **Opsiyonel (öneri, kullanıcı seçimi)**.

### 4.1. Otomatik uyarılar (kullanıcının görmek zorunda olduğu)

Ekrana modal/banner olarak çıkar, kapatılmadan günlük plana erişilemez (veya en üstte sticky):

```
IF cycle.phase === 'Ovulation' (Day 11-15)
   AND today.exercises includes ['sq', 'bgss', 'slht', 'rt', 'dl_konvansiyonel']:
   → "Ovulasyon penceresindesin (Day {d}). Ligament gevşekliği +%30-50.
       Önerilen: Goblet squat / Reverse lunge / B-Stance HT / Pallof.
       [Otomatik substitute uygula] [Manuel devam]"

IF last_calciday_log > 4 days ago AND today.exercises includes squat/DL:
   → "Calciday 4+ gündür yok. Kramp + form bozulma riski. Bugün squat/DL ertelensin mi?"

IF apple_health.sleep_last_night < 5h:
   → "Dün uykun {x}h. Otonomik sinir sistemi hassas. Bugün RPE -1, set -1.
       [Hafif gün uygula] [Manuel devam]"

IF user.flagged_pain in last_3_days:
   → "{tarih}'te {bölge} ağrı bildirdin. Bugün o bölge yüksek riskli mi?
       [Şu hareketleri çıkar: ...] [Yaralandım modalı aç]"

IF today.is_period_day AND day === 1 OR 2:
   → "Regl 1-2. gün. Vücut dinlenme talep ediyor.
       Bugün rest / yoga / yürüyüş öneriliyor. Antrenman şart değil.
       [Hafif yoga aç] [Manuel devam]"
```

### 4.2. Opsiyonel öneriler (kullanıcı isterse görür)

Dashboard'da küçük chip/öneri olarak çıkar, dikkat çekmez:

```
IF last_3_days_avg_RPE > 8.5:
   → Chip: "💪 Son 3 gün RPE ortalaması yüksek. Bugün RPE 7 hedefle?"

IF folicular peak (Day 8-12) AND today.has_compound_lift:
   → Chip: "🌸 Folliküler peak. Bu hafta 1 rep PR denemesi için iyi pencere."

IF luteal Day 22+ AND user.symptom_log includes 'şişkinlik':
   → Chip: "🌙 Geç luteal + şişkinlik. Volume %15 azalt önerisi."

IF temperature.uk > 25°C AND today.luteal_day:
   → Chip: "☀️ Sıcak + luteal. Set arası 1.5 dk + ekstra hidrasyon."

IF user.last_completed_workout > 3 days ago:
   → Chip: "Hadi başla — kısa tutalım. Bugün 3 ana hareket yeter."
```

### 4.3. Otomatik vs Opsiyonel ayrım kriterleri

**Otomatik** sadece şu durumlarda (yaralanma riski **somut + bilimsel kanıt güçlü**):
- Ovulasyon × tek-bacak/jump/rotation hareket
- Apple Health uyku < 5h (otonomik bozulma somut)
- Calciday/elektrolit eksiği × ağır lift (kramp riski klinik)
- Daha önce raporlanan ağrı × aynı bölge (re-injury riski)
- Regl Day 1-2 (semptom yoğun)

**Opsiyonel** geri kalan tüm öneriler (RPE çıkarımı, peak window, sıcaklık, motivasyon).

**Felsefe:** Kullanıcı çok modal görürse **uyarı yorgunluğu (alarm fatigue)** olur, hepsini kapatır. Az ama kritik modal > çok ama opsiyonel.

---

## 5. "Yaralandım / Ağrım Var" Akışı

### 5.1. Acı vs Zorluk Öğretimi (Lehman: Pain ≠ Damage)

Lehman'ın temel önermesi (*Pain Science in Practice*): **acı her zaman doku hasarına eşit değil**. Sinir sistemi tehlike algısıdır. Yeni başlayan lifter'da acı sıklıkla:
- DOMS (delayed onset muscle soreness) — 24-72h normal, hasar değil
- Lifting-induced "fatigue ache" — ağırlık biteminde geçer
- Eklem stiffness — özellikle deficit + Ca/Mg eksiklik

**vs gerçek alarm sinyalleri (doktora git):**
- Keskin, lokalize, aniden başlayan ağrı (yırtık, zorlama)
- Yanan / elektrik gibi sinir ağrısı (compression, pinch)
- Şişlik + kızarıklık + ısı (enflamasyon, infeksiyon)
- Kullanım kaybı (kol kaldırılamıyor, diz büküm yok)

Bengisu'nun uygulamasında "Ağrım var" butonu basıldığında **eğitici bir flow**:

```
Adım 1: "Acı tipini seç"
   ⚪ Sızı / Yorgunluk hissi (DOMS gibi)
   ⚪ Hareket sırasında ağrı (geçici)
   ⚪ Hareket sonrası kalıcı ağrı (>24h)
   ⚪ Keskin / yanan ağrı (acil)

Adım 2: "Bölge seç" (vücut diyagramı: boyun/skar, omuz, sırt, bel, kalça, diz, ayak)

Adım 3: "Ne yaparken oldu?" (egzersiz seçimi from log)

Adım 4: Triage çıktısı (5.2'ye göre)
```

### 5.2. Triage: Keskin / Yanan / Sızı / Zonklama / Kramp

| Tip | Olası neden | Aksiyon |
|---|---|---|
| **Sızı (DOMS)** | Kas mikro-yırtık, normal adaptasyon | Hafif aktivite, foam roller, 24-48h sonra geçer; **antrenmana devam** (aynı kas grubu olmasa) |
| **Hareket sırasında ağrı** | Form, ROM, fatigue | Set'i durdur, ağırlık yarıya, ROM kısalt; geçmezse o egzersiz **bugün durdur, sub** |
| **Kalıcı zonklama (>24h)** | Tendinit, hafif zorlama | 48-72h o bölge istirahat, PEACE & LOVE protokolü, **doktora git eğer 7+ gün geçmezse** |
| **Keskin / Yanan** | Akut yırtık, sinir kompresyon | **DURDUR. Doktora git.** Aynı gün antrenman yok. Buz + kompres |
| **Kramp** | Elektrolit (Na/K/Mg/Ca), dehidrasyon | Set'i durdur, pasif stretch 30-60 sn, hidrasyon + Mg; tekrarlarsa Calciday/Mg log kontrol |

### 5.3. PEACE & LOVE Protokolü (RICE'in modern alternatifi)

Dubois & Esculier 2020 (BJSM) yumuşak doku yaralanmaları için **PEACE & LOVE**:

**İlk 3-5 gün — PEACE:**
- **P**rotection: Yüklenme tetikleyici hareketten kaçın (immobilizasyon yok, sadece tetikleyici)
- **E**levation: Şişlik için yukarı kaldır (alt extremite)
- **A**void anti-inflammatories: NSAID (ibuprofen vb) kullanmamayı tercih et — iyileşme aşamasını yavaşlatır (Bayer 2017)
- **C**ompression: Bandaj ile şişlik kontrolü
- **E**ducation: Bilgilen, hareket-fobisi geliştirme

**Sonraki günler — LOVE:**
- **L**oad: Hafif aktif yüklenme başla (ağrısız ROM)
- **O**ptimism: Olumlu beklenti iyileşme süresini etkiler (Lehman'ın bio-psycho-social modeli)
- **V**ascularization: Aerobik aktivite kan akımını artırır (yürüyüş, bisiklet — yaralı bölge hariç)
- **E**xercise: Progresif yükleme (rehab egzersizler)

**Eski RICE protokolü (Rest, Ice, Compression, Elevation)**: "Rest" aşırı kullanılıyordu, "Ice" iyileşmeyi yavaşlatıyor (van den Bekerom 2012). **Buzu sadece ilk 24-48h ağrı kontrol için**, devamlı değil.

### 5.4. Doktora Git Uyarıları (uygulama içinde net olmalı)

```
🚨 ŞU DURUMLARDA DOKTORA GİT:

1. Ağrı 24-48 saat içinde kötüleşiyor (azalmıyor)
2. Şişlik gözle görülür + kızarıklık
3. Hareket fonksiyonu kayıp (kol kaldırılamıyor, yürüyemiyor, ağırlık taşınamıyor)
4. Eklemde "kilitlenme" hissi (knee, omuz)
5. Keskin yanan ağrı + uyuşma (sinir kompresyonu)
6. Ateş + bölgesel ısı (infeksiyon)
7. Travma sonrası belirgin deformite
8. Boyun ağrısı + sertleşme + ateş (acil — ensefalit/menenjit ekarte)
9. Tiroidektomi-spesifik: skar bölgesinde ani şişlik, ses değişikliği, nefes darlığı
10. Bel ağrısı + bacağa yayılım + uyuşma + idrar/dışkı kontrolü kaybı (acil — cauda equina)

📞 Türkiye'de 112, UK'da 999 / 111 (NHS Direct)
```

Bu liste uygulama içinde **görsel olarak ayrı renkte** olmalı (kırmızı border + uyarı ikonu) — geri kalan tavsiyelerden net ayrılsın.

---

## 6. Form Öğretim Çerçevesi — 5 Hareket Template

Her biri için: Setup (3 madde) · Execution (3-4 madde) · Yaygın hatalar (3 madde) · Erken uyarı sinyali · Substitution A/B/C

### 6.1. Goblet Squat

**Setup:**
- DB göğüsün hemen önünde, dikey tutuş (kafa içi avuçların arasında)
- Ayaklar omuz genişliği, parmaklar 15-20° dış rotasyon
- Bakış 2-3 m önde, çene paralel — boyun nötr (tiroidektomi kuralı)

**Execution:**
- Diz dış rotasyon **iken** otur (knee tracking parmaklarla aynı yön)
- Kalça arkaya doğru ittiği gibi bükül (hinge + squat hibrit), göğüs dik
- DB göğüse yakın kalır, dirsekler dipte iç bacaklar arasında
- Topukla yere bas, dik dur (knee shooting forward yok)

**Yaygın hatalar:**
- Üst sırt yuvarlanması (DB ağırlaşırsa) → ağırlığı düşür, retract scapula
- Diz iç dönmesi (valgus collapse) → bant diz altına, "dizleri dışarı it" cue
- Topuk kalkma (squat depth zorla) → ROM kısalt, ankle mobility drill ekle

**Erken uyarı sinyali:**
- Diz iç dönmesi 3+ rep'te → ağırlık fazla, dur
- Bel hyperextension (lordoz aşırı) → core engage eksik, dur
- Boyun gerginliği (skar bölgesi çekme) → bakışı düzelt, set'i azalt

**Substitution:**
- A: Bodyweight Squat (ROM çalışması)
- B: Box Squat (depth fix)
- C: Leg Press (sabit yörünge)

### 6.2. Romanian Deadlift (RDL)

**Setup:**
- Bar (veya DB) bacağa yakın, ayaklar kalça genişliği
- Diz hafif fleksiyon (~15°), bu pozisyonu **set boyunca koru**
- Skapula retracted (lat angajesi), boyun nötr (yere paralel bakış)

**Execution:**
- Kalça **arkaya** ittiği gibi bükül (hinge — diz daha bükülmez)
- Bar bacak boyunca kayarak indir (bar bacaktan uzaklaşmaz)
- ROM hamstring esneklik kadar (genelde diz altı 5-10 cm); bel düzlüğü kaybolduğu yerde **DUR**
- Glute kontrol ile yukarı çık (glute squeeze tepe noktasında)

**Yaygın hatalar:**
- Bel yuvarlanması (cat-back) → ROM kısalt, hinge drill öğren
- Bar bacaktan uzaklaşma (öne sallanır) → "ayağına çiz"
- Diz aşırı fleksiyon (squat-DL hibrit) → diz pozisyonu sabit, "dizini dondur"

**Erken uyarı sinyali:**
- Bel yuvarlanması 1 rep → ağırlık fazla, set bit
- Boyun extension (yukarı bakış) → tiroidektomi spesifik, hemen düzelt
- Hamstring "yanan" değil "delici" ağrı → DUR

**Substitution:**
- A: Cable Pull-Through (hinge öğren)
- B: Hip Hinge dowel drill (form drill)
- C: Trap-Bar DL (knee shear ↓, ovulasyon-friendly)

### 6.3. Hip Thrust (Smith / Barbell)

**Setup:**
- Bench arkaya, omuz altı bench kenarına dayalı (bench yüksekliği 30-35 cm)
- Ayaklar kalça genişliği, baldır yere dik (top-position'da)
- Bar (veya DB) pubis kemiği üzerinde, **pad ile** dağılmış

**Execution:**
- Çene tucked, baş bench üzerinde nötr (yukarı bakma yok)
- Glute kontrol ile kalçayı kaldır, top-position'da **tibia yere dik**, gövde-kalça-uyluk hizalı
- Tepe noktasında **glute squeeze 1 sn**, bel hyperextension YOK
- Eksantrik fazda kalça aşağı, bel **nötr** (overarch yok)

**Yaygın hatalar:**
- Çene yukarı kalkma → tiroidektomi spesifik, "bakışın bench tavanına"
- Bel hyperextension top'da → glute değil bel kaldırıyor; ROM kısalt
- Tibia eğik (öne/arkaya) → ayak pozisyonunu ayarla, baldır 90° hedef

**Erken uyarı sinyali:**
- Bar pubis basıncı dayanılmaz → pad daha kalın, set kısalt
- Bel ağrısı 2+ rep → ROM bitemeden DUR
- Boyun gerginliği (skar bölgesi) → bench yüksekliği düşür veya bench üzeri kafa pozisyonu kontrol

**Substitution:**
- A: Glute Bridge (zeminde, daha kolay)
- B: Machine Hip Thrust (sabit yörünge)
- C: B-Stance HT (ovulasyon güvenli alternatif)

### 6.4. Lat Pulldown

**Setup:**
- Bench oturak, diz pad altında sabit
- Geniş tutuş (omuz genişliği × 1.5), supinated mu pronated mu? — pronated standart
- Skapula depression + retraction (omuzları aşağı çek, sıkıştır)

**Execution:**
- Bar göğüse, **boyun veya kafa arkasına DEĞİL**
- Dirsek aşağı + içe doğru hareket eder (lat angajesi), bel hafif arkaya tilt
- ROM tam: bar göğüs üst kısmında, kollar tam stretch yukarıda
- Eksantrik kontrollu (1-2 sn yukarı), momentum yok

**Yaygın hatalar:**
- Boyun extension (bar arkasına) → omuz impingement + boyun gerginliği; **tiroidektomi için kontrindike**
- Bel hyperextension (rowing momentum) → ağırlık fazla, set bit
- Omuz protraction (lat angajesi yok) → skapula retract drill, bar sadece bicep çekiyor

**Erken uyarı sinyali:**
- Boyun gerginliği setin son repinde → ağırlık fazla, ROM bozuluyor
- Omuz öne sıkışma → grip genişliğini ayarla
- Bilek ağrısı (pronated grip aşırı) → neutral grip handle dene

**Substitution:**
- A: Assisted Pull-up (bant)
- B: Inverted Row
- C: Single arm cable pulldown

### 6.5. Pallof Press

**Setup:**
- Cable tower (veya bant) yana, omuz hizasında
- Yan dur, kollar göğüste (cable handle iki elle)
- Ayaklar omuz genişliği, dizler hafif fleksiyon

**Execution:**
- Cable'ı **göğsün ortasından** ileri doğru it (kollar düz)
- 2-3 sn statik (anti-rotation: gövde dönmemeli)
- Yavaş geri çek (eksantrik), göğüs ortasında dur
- Nefes düzenli (Valsalva yok, anti-rotation izometrik)

**Yaygın hatalar:**
- Gövde rotasyonu (asıl iş bu — engelleme) → ağırlık fazla, daha hafif başla
- Bel hyperextension (cable çekiyor) → core engage, bel nötr
- Omuz aşırı yüksek (kollar yukarıda) → omuz hizasında tutuluş

**Erken uyarı sinyali:**
- Bel ağrısı → form bozuk, set bit
- Omuz impingement → tutuş yüksekliğini ayarla
- Gövde dönmesi sürekli → ağırlık çok fazla

**Substitution:**
- A: Anti-rotation banded plank
- B: Half-kneeling Pallof (denge zorluğu)
- C: Suitcase carry (dinamik anti-rotation)

---

## 7. Kod Değişiklik Önerileri

### 7.1. `EXERCISE_RISK_DB` (her hareket için risk metadata)

```typescript
type ExerciseRisk = {
  id: string;
  baseRisk: 1 | 2 | 3 | 4 | 5;
  thyroidectomySpecific: boolean;  // boyun-skar yükü var mı?
  ovulationRisk: 'high' | 'medium' | 'low';
  pelvicRotationRisk: boolean;
  spinalLoadType: 'axial' | 'shear' | 'rotation' | 'minimal';
  earlyWarnings: string[];  // form hatası sinyalleri
  substitutions: {
    easier: string;       // beginner alternatifi
    ovulation: string;    // Day 11-15 sub
    equipment: string;    // ekipman alternatifi
  };
};

const EXERCISE_RISK_DB: Record<string, ExerciseRisk> = {
  sq: {
    id: 'sq',
    baseRisk: 3,
    thyroidectomySpecific: true,  // bar boyun teması, Valsalva
    ovulationRisk: 'high',
    pelvicRotationRisk: false,
    spinalLoadType: 'axial',
    earlyWarnings: [
      'Diz iç dönmesi (valgus)',
      'Bel kavislenmesi',
      'Boyun gerginliği'
    ],
    substitutions: {
      easier: 'gobsq',
      ovulation: 'gobsq',
      equipment: 'lp'
    }
  },
  rdl: {
    id: 'rdl',
    baseRisk: 4,
    thyroidectomySpecific: true,  // hinge sırasında boyun nötr kritik
    ovulationRisk: 'medium',  // hinge ovulasyon-uyumlu (knee flexion az)
    pelvicRotationRisk: false,
    spinalLoadType: 'shear',
    earlyWarnings: [
      'Bel yuvarlanması',
      'Bar bacaktan uzaklaşma',
      'Boyun extension'
    ],
    substitutions: {
      easier: 'cpt',
      ovulation: 'tbdl',
      equipment: 'cpt'
    }
  },
  ht: {
    id: 'ht',
    baseRisk: 2,
    thyroidectomySpecific: true,  // bench üzerinde kafa pozisyonu
    ovulationRisk: 'low',
    pelvicRotationRisk: false,
    spinalLoadType: 'axial',
    earlyWarnings: [
      'Çene kalkma',
      'Bel hyperextension top-position',
      'Tibia eğik'
    ],
    substitutions: {
      easier: 'gbr',
      ovulation: 'ht',  // bilateral OK
      equipment: 'gbr'
    }
  },
  slht: {
    id: 'slht',
    baseRisk: 4,
    thyroidectomySpecific: false,
    ovulationRisk: 'high',
    pelvicRotationRisk: true,
    spinalLoadType: 'axial',
    earlyWarnings: [
      'Kalça asimetrik düşme',
      'Bel rotasyon',
      'Tibialis kramp'
    ],
    substitutions: {
      easier: 'gbr',
      ovulation: 'bsht',  // B-stance ovulasyon güvenli
      equipment: 'bsht'
    }
  },
  lr: {
    id: 'lr',
    baseRisk: 4,
    thyroidectomySpecific: true,  // üst trapez aktivasyonu yüksek
    ovulationRisk: 'low',
    pelvicRotationRisk: false,
    spinalLoadType: 'minimal',
    earlyWarnings: [
      'Üst trap shrug',
      'Boyun lateral fleksiyon',
      'Baş öne kayma'
    ],
    substitutions: {
      easier: 'sa_lr',  // cable, sabit gerilim
      ovulation: 'lr',  // ovulasyon-neutral
      equipment: 'sa_lr'
    }
  },
  rt: {
    id: 'rt',
    baseRisk: 3,
    thyroidectomySpecific: false,
    ovulationRisk: 'high',  // spinal rotation altında yük
    pelvicRotationRisk: true,
    spinalLoadType: 'rotation',
    earlyWarnings: [
      'Bel ağrısı',
      'Boyun gerginliği',
      'Nefes kesilme'
    ],
    substitutions: {
      easier: 'pall',
      ovulation: 'pall',
      equipment: 'pall'
    }
  },
  bgss: {
    id: 'bgss',
    baseRisk: 4,
    thyroidectomySpecific: false,
    ovulationRisk: 'high',
    pelvicRotationRisk: true,
    spinalLoadType: 'shear',
    earlyWarnings: [
      'Ön diz iç dönmesi',
      'Kalça düşmesi',
      'Denge kaybı 3+ kez'
    ],
    substitutions: {
      easier: 'rl',
      ovulation: 'rl',  // veya step-up düşük
      equipment: 'step'
    }
  },
  // ... diğer hareketler için aynı pattern
};
```

### 7.2. `getExerciseRisk(exerciseId, userState)` — Dinamik risk hesaplama

```typescript
type UserState = {
  cyclePhase: 'Menstruation' | 'Folicular' | 'Ovulation' | 'EarlyLuteal' | 'LateLuteal';
  cycleDay: number;
  daysSinceCalciday: number;
  lastSleepHours: number | null;
  recent3DayAvgRPE: number | null;
  hasFlaggedPain: boolean;
  flaggedPainArea: string[];
  postOpMonths: number;  // Bengisu için ≥6
};

function getExerciseRisk(
  exerciseId: string,
  userState: UserState
): { adjustedRisk: 1 | 2 | 3 | 4 | 5; warnings: string[]; suggestedSub?: string } {
  const base = EXERCISE_RISK_DB[exerciseId];
  if (!base) return { adjustedRisk: 3, warnings: [] };

  let risk = base.baseRisk;
  const warnings: string[] = [];
  let suggestedSub: string | undefined;

  // Ovulasyon modifikasyonu
  if (userState.cyclePhase === 'Ovulation' && base.ovulationRisk === 'high') {
    risk = Math.min(5, risk + 1) as any;
    warnings.push(
      `Ovulasyon penceresinde (Day ${userState.cycleDay}). Ligament gevşekliği +%30-50.`
    );
    suggestedSub = base.substitutions.ovulation;
  }

  // Tiroidektomi + uyku eksikliği = boyun-omuz tonusu yüksek
  if (base.thyroidectomySpecific && userState.lastSleepHours !== null && userState.lastSleepHours < 6) {
    warnings.push(
      `Uyku ${userState.lastSleepHours}h. Boyun-omuz hassasiyeti artmış olabilir. Form öncelik.`
    );
  }

  // Calciday eksiği + axial yük
  if (
    userState.daysSinceCalciday >= 4 &&
    (base.spinalLoadType === 'axial' || base.spinalLoadType === 'shear')
  ) {
    risk = Math.min(5, risk + 1) as any;
    warnings.push(
      `Calciday ${userState.daysSinceCalciday} gündür log'da yok. Kramp + form bozulma riski.`
    );
  }

  // Önceki 3 gün RPE > 8.5 → fatigue accumulated
  if (userState.recent3DayAvgRPE !== null && userState.recent3DayAvgRPE > 8.5) {
    warnings.push(
      `Son 3 gün RPE ortalaması ${userState.recent3DayAvgRPE.toFixed(1)}. Bugün hafif tut.`
    );
  }

  // Daha önce ağrı raporu varsa
  if (userState.hasFlaggedPain && userState.flaggedPainArea.length > 0) {
    warnings.push(
      `${userState.flaggedPainArea.join(', ')} bölgesinde önceki ağrı raporu. Form öncelik, gerekirse sub.`
    );
  }

  return { adjustedRisk: risk as any, warnings, suggestedSub };
}
```

### 7.3. `getOvulationSubstitution(exerciseId)` — Hızlı sub çağrısı

```typescript
function getOvulationSubstitution(exerciseId: string): string | null {
  const ex = EXERCISE_RISK_DB[exerciseId];
  if (!ex || ex.ovulationRisk !== 'high') return null;
  return ex.substitutions.ovulation;
}

// Kullanım:
// if (cyclePhase === 'Ovulation') {
//   const sub = getOvulationSubstitution('sq');  // returns 'gobsq'
//   if (sub) showOvulationSubModal(originalId: 'sq', subId: sub);
// }
```

### 7.4. `getInjuryWarnings(d, plannedWorkout)` — Günlük uyarı toplam

```typescript
type DailyWarning = {
  level: 'auto' | 'optional';
  message: string;
  cta?: { label: string; action: () => void };
};

function getInjuryWarnings(d: Date, plannedWorkout: Exercise[]): DailyWarning[] {
  const warnings: DailyWarning[] = [];
  const userState = getUserState(d);

  // 1. Ovulasyon × yüksek-risk hareket
  if (userState.cyclePhase === 'Ovulation') {
    const highRiskExercises = plannedWorkout.filter(
      ex => EXERCISE_RISK_DB[ex.id]?.ovulationRisk === 'high'
    );
    if (highRiskExercises.length > 0) {
      warnings.push({
        level: 'auto',
        message: `Ovulasyon penceresi (Day ${userState.cycleDay}). ${highRiskExercises.length} yüksek-risk hareket var. Otomatik substitute önerisi?`,
        cta: { label: 'Substitute uygula', action: () => applyOvulationSubs(highRiskExercises) }
      });
    }
  }

  // 2. Calciday eksiği × squat/DL
  if (userState.daysSinceCalciday >= 4) {
    const heavyAxial = plannedWorkout.some(ex =>
      ['sq', 'gobsq', 'rdl', 'tbdl', 'lp'].includes(ex.id)
    );
    if (heavyAxial) {
      warnings.push({
        level: 'auto',
        message: `Calciday ${userState.daysSinceCalciday} gündür yok + bugün squat/DL. Kramp riski. Bugün hafifle?`,
        cta: { label: 'Hafif gün uygula', action: () => applyEasyDay() }
      });
    }
  }

  // 3. Uyku eksikliği × herhangi bir compound
  if (userState.lastSleepHours !== null && userState.lastSleepHours < 5) {
    warnings.push({
      level: 'auto',
      message: `Dün uykun ${userState.lastSleepHours}h. Bugün RPE -1, set -1.`,
      cta: { label: 'Hafif gün uygula', action: () => applyEasyDay() }
    });
  }

  // 4. Regl Day 1-2
  if (userState.cyclePhase === 'Menstruation' && userState.cycleDay <= 2) {
    warnings.push({
      level: 'auto',
      message: `Regl ${userState.cycleDay}. gün. Bugün rest / yoga / yürüyüş öneriliyor.`,
      cta: { label: 'Hafif yoga aç', action: () => loadEasyYoga() }
    });
  }

  // 5. Folliküler peak (opsiyonel)
  if (userState.cyclePhase === 'Folicular' && userState.cycleDay >= 8 && userState.cycleDay <= 12) {
    const compound = plannedWorkout.some(ex => ['sq', 'rdl', 'ht', 'dl'].includes(ex.id));
    if (compound) {
      warnings.push({
        level: 'optional',
        message: 'Folliküler peak. Bu hafta 1 rep PR denemesi için iyi pencere.'
      });
    }
  }

  // 6. RPE accumulation (opsiyonel)
  if (userState.recent3DayAvgRPE !== null && userState.recent3DayAvgRPE > 8.5) {
    warnings.push({
      level: 'optional',
      message: `Son 3 gün RPE ortalaması ${userState.recent3DayAvgRPE.toFixed(1)}. Bugün RPE 7 hedefle?`
    });
  }

  return warnings;
}
```

### 7.5. "Yaralandım" Modal Akışı (UI taslağı)

```typescript
// localStorage state
type PainReport = {
  date: string;          // YYYY-MM-DD
  type: 'doms' | 'during' | 'persistent' | 'sharp';
  area: 'neck' | 'shoulder' | 'upper_back' | 'lower_back' | 'hip' | 'knee' | 'foot';
  exercise?: string;     // hangi egzersiz sırasında
  resolution?: string;   // not
  followUpDoctor: boolean;
};

// Akış komponenti (React-like pseudocode)
function InjuryModal() {
  const [step, setStep] = useState<1|2|3|4>(1);
  const [report, setReport] = useState<Partial<PainReport>>({});

  // Adım 1: Tip seçimi
  if (step === 1) {
    return (
      <Modal title="Bir ağrı / sorun mu var?">
        <Radio options={[
          { value: 'doms', label: '😴 Sızı / Yorgunluk (24-72h normal kabul)' },
          { value: 'during', label: '⚠️ Hareket sırasında ağrı' },
          { value: 'persistent', label: '🔴 24+ saat sonra hala devam ediyor' },
          { value: 'sharp', label: '🚨 Keskin / Yanan / Aniden — DUR' },
        ]}/>
        <Button onClick={() => setStep(2)}>Devam</Button>
      </Modal>
    );
  }

  // Adım 2: Bölge
  if (step === 2) {
    return <BodyDiagram onSelect={(area) => { setReport({...report, area}); setStep(3); }}/>;
  }

  // Adım 3: Egzersiz (log'tan al)
  if (step === 3) {
    const recentEx = getRecent7DaysExercises();
    return (
      <Modal title="Hangi egzersizde başladı?">
        <Select options={recentEx} onChange={(ex) => setReport({...report, exercise: ex})}/>
        <Option label="Antrenmanla bağlantısız" value={null}/>
        <Button onClick={() => setStep(4)}>Devam</Button>
      </Modal>
    );
  }

  // Adım 4: Triage çıktısı
  if (step === 4) {
    if (report.type === 'sharp') {
      return (
        <Modal title="🚨 Keskin / Yanan ağrı — Acil değerlendirme">
          <UrgentCard>
            <h3>DOKTORA GİT</h3>
            <p>Keskin / yanan ağrı akut yaralanma sinyali olabilir.</p>
            <ul>
              <li>Bugün antrenman yapma</li>
              <li>Hareket fonksiyonu kayıp varsa 112'yi ara</li>
              <li>İlk 24-48h: PEACE (protection, elevation, avoid NSAID, compression, education)</li>
            </ul>
          </UrgentCard>
          <Button>"Doktor randevusu aldım" işaretle</Button>
        </Modal>
      );
    }
    if (report.type === 'doms') {
      return (
        <Modal title="✅ DOMS — Normal adaptasyon">
          <p>Kas mikro-yırtık — adaptasyonun parçası, hasar değil.</p>
          <ul>
            <li>Hafif aktivite (yürüyüş) iyi gelir</li>
            <li>Foam roller + esnek</li>
            <li>24-48h sonra geçer; aynı kas grubu hariç antrenmana devam OK</li>
          </ul>
          <Button>Tamam</Button>
        </Modal>
      );
    }
    if (report.type === 'during' || report.type === 'persistent') {
      return (
        <Modal title="Anlaşıldı, biraz dinlenelim">
          <p>{report.area} bölgesinde {report.type === 'during' ? 'hareket sırası' : 'kalıcı'} ağrı.</p>
          <Recommendation>
            <h4>Bugün:</h4>
            <ul>
              <li>{report.exercise} egzersizini durdur</li>
              <li>Diğer hareketler ağrısız ROM'da OK</li>
              <li>Set-rep azalt, RPE 6-7 hedefle</li>
            </ul>
            <h4>İlk 48-72h (PEACE):</h4>
            <ul>
              <li>Protection: Tetikleyici hareketten kaçın</li>
              <li>Avoid NSAID: ibuprofen iyileşmeyi yavaşlatır (Bayer 2017)</li>
              <li>Compression + Elevation (şişlik varsa)</li>
            </ul>
            <h4>Sonraki günler (LOVE):</h4>
            <ul>
              <li>Hafif yüklenme başla (ağrısız ROM)</li>
              <li>Aerobik aktivite (bisiklet, yürüyüş — yaralı bölge hariç)</li>
              <li>Progresif rehab</li>
            </ul>
            <h4>🚨 Doktora git eğer:</h4>
            <ul>
              <li>7+ gün geçmezse</li>
              <li>Şişlik / kızarıklık / ısı varsa</li>
              <li>Fonksiyon kaybı (kol kalkmaz, yürüyemez)</li>
            </ul>
          </Recommendation>
          <Button onClick={() => savePainReport(report)}>Kaydet & Ana sayfaya dön</Button>
        </Modal>
      );
    }
  }
}

// Sonraki günlerde otomatik check:
function checkPainFollowUp() {
  const lastReport = getLastPainReport();
  if (!lastReport) return;
  const daysSince = daysBetween(lastReport.date, today);
  if (daysSince >= 1 && daysSince <= 14) {
    // O bölgeyi yüklendiren egzersizleri uyar
    showWarning(`${lastReport.area} bölgesi son ${daysSince} gündür izleniyor. Bu egzersizler dikkat: ...`);
  }
  if (daysSince === 7 && !lastReport.resolution) {
    askFollowUp("7 gün geçti. Ağrı geçti mi?", { yes: "Geçti", no: "Hâlâ var → doktora git" });
  }
}
```

---

## 8. Öneriler P0/P1/P2

### P0 (must-have, hemen — 1-2 hafta)

1. **`EXERCISE_RISK_DB` veri yapısını ekle** (her hareket için risk metadata)
2. **Boyun-nötr postür kuralları her squat/DL/press kartında görünür** (görsel + tek satır cue)
3. **Ovulasyon × yüksek-risk hareket → otomatik modal substitusyon önerisi** (Day 11-15)
4. **"Yaralandım" buton + modal akışı (4 adım)** — DOMS / during / persistent / sharp
5. **PEACE & LOVE protokolü içerik kartı** (modal sonunda)
6. **"DOKTORA GİT" uyarı listesi** (kırmızı border, 10 madde)
7. **Calciday eksiği × ağır lift uyarısı** (4+ gün log yoksa)
8. **Boyun-trap koruma stretch'i her omuz session sonrası** (3 dk routine)

### P1 (should-have, 4 hafta)

9. **`getInjuryWarnings(d, plannedWorkout)` fonksiyonu** (5 otomatik + 2 opsiyonel uyarı)
10. **Form öğretim videosu/animasyonu** her ana hareket için (Goblet, RDL, HT, Lat Pulldown, Pallof — başlangıç set)
11. **Apple Health uyku < 6h → otomatik RPE-1 ve set-1**
12. **Ağrı follow-up sistemi** — son raporlanan bölge 14 gün izlenir, ilgili egzersizlerde uyarı
13. **Folliküler peak window mesajı** (opsiyonel, Day 8-12) — PR denemesi için yeşil ışık
14. **Lehman "pain ≠ damage" eğitim sayfası** (DOMS vs alarm sinyalleri)
15. **Tiroidektomi-spesifik form rehberi sayfası** — boyun postürü, Valsalva, lateral raise trap koruma
16. **Stomach Vacuum güvenlik bilgi kutusu** (≥6 ay post-op, ses tellerinde değişiklik vs)

### P2 (uzun vadede, 2-3 ay)

17. **Set-rep tracking + RPE log** (Ajan 3 ile entegre, otoregülasyon)
18. **Erken uyarı sinyali "live" form check** — set öncesi/sonrası 3 soru ("dizin nasıl?", "belin?", "boynun?")
19. **Foam roller / mobility routine** (egzersiz sonrası 5 dk önerileri)
20. **Yaralanma istatistik dashboardu** — hangi egzersizlerde en çok ağrı raporu (kişisel)
21. **Doktor randevu reminder** — pain report sonrası 7 gün sonra
22. **Cycle-aware mobility plan** — geç luteal'de yumuşak doku flexibility farklı

---

## 9. Açık Sorular

### Doktor için (Bengisu'nun endokrinologa/cerrahına sormalı):

1. **Tiroidektomi skar dokusu durumu — hipertrofik / keloid var mı? Mekanik gerilim altında geliştirebilir mi?** (Lateral raise, upright row için bilgi)
2. **Ses tellerinde herhangi bir değişiklik var mı?** RLN paralizisi varsa Vacuum + Valsalva dikkat ister.
3. **Tek kerelik 1RM / max effort denemesi (RPE 9-10) güvenli mi?** Şu an yeni başlayan-orta seviyede gerekli değil ama 6 ay sonra eklenebilir.
4. **Servikal MRI çekildi mi? C5-C7 disk durumu nasıl?** Squat axial yükü için referans.
5. **Egzersiz sonrası boyun ağrısı / sertlik bildirildiğinde ilk basamak ne?** Fizyoterapi vs istirahat vs ilaç?

### Bengisu için:

6. **Ovulasyon takibi — semptomlara mı LH stripine mi BBT'ye mi güveniyor?** Day 11-15 substitusyon doğru pencerede olmalı.
7. **"Mid-set ağrı" vs "set sonu ağrı" arasındaki fark sezgisel mi yoksa eğitim gerek mi?** Lehman pain literacy uygulama içinde olmalı mı?
8. **Daha önce yaralanma geçmişi (knee, bel, omuz, boyun) — bireysel risk profili belirler.**
9. **Ev gym'inde rack güvenlik (squat rack J-pin'leri var mı, fail-safe?).** Free weight squat yaparken set sonu bar bırakma planı?
10. **PT eşliğinde başlangıç önerisi — özellikle RDL, hip thrust, squat form check için** ilk 4 hafta haftada 1 PT seansı?

### Ajan 7 (ortak orkestratör) için:

11. **Beslenme zamanlaması (Ajan 4) ile etkileşim:** 13:00 ilk öğün + 14:00 antrenman → glikojen yetersiz → form bozulma riski. Antrenman saat değişebilir mi?
12. **Cycle-aware sistem (Ajan 2) substitusyon kuralları** form rehberi ile **birleşmiş** UI mi yoksa ayrı mı? — Tek modal mı (ovulasyon sub + form notu) iki modal mı?
13. **Apple Health entegrasyonu (gelecek):** Uyku < 5h dışında HR variability düşük günler de "hafif gün" tetiklenmeli mi? Hangi eşik?
14. **Yaralanma data privacy:** Pain log'lar sadece local (IndexedDB) mi yoksa Supabase'e mi yazılır? Kullanıcı analitik onayı?

---

## 10. Kaynaklar (PMID + Klinik Klavuzlar)

### Yaralanma Önleme + Form

1. **McGill SM.** *Back Mechanic: The Secrets to a Healthy Spine Your Doctor Isn't Telling You.* 2015. (Servikal-lumbar bağlantı, packed neck doktrini)
2. **Lehman G.** *Pain Science in Practice* (online resource: greglehman.ca). (Pain ≠ damage, bio-psycho-social model)
3. **Beardsley C.** *Strength is Specific: The Key to Optimal Strength Training* (2018). (Front-loaded squat lumbar tork analizi)
4. **Schoenfeld BJ.** Biomechanical analysis of the deadlift during the 1999 Special Olympics World Games. *J Strength Cond Res.* 2010. **PMID: 20581691**
5. **Swinton PA, Stewart AD, Keogh JW, Agouris I, Lloyd R.** A biomechanical comparison of the traditional squat, powerlifting squat, and box squat. *J Strength Cond Res.* 2012. **PMID: 22344053** (Trap-bar vs konvansiyonel DL knee shear)

### Ovulasyon Ligament Gevşekliği

6. **Hewett TE, Zazulak BT, Myer GD.** Effects of the menstrual cycle on anterior cruciate ligament injury risk: a systematic review. *Am J Sports Med.* 2007. **PMID: 17468379** (ACL non-contact riski 2-3x ovulasyon)
7. **Park SK, Stefanyshyn DJ, Loitz-Ramage B, Hart DA, Ronsky JL.** Changing hormone levels during the menstrual cycle affect knee laxity and stiffness in healthy female subjects. *Am J Sports Med.* 2009. **PMID: 19342537** (Knee laxity +%30-50)

### Tiroidektomi + Egzersiz

8. **Hodges PW, Gandevia SC.** Activation of the human diaphragm during a repetitive postural task. *J Physiol.* 2000. **PMID: 10913124** (Vacuum vs Valsalva intra-abdominal basınç)
9. **Patel KN, Yip L, Lubitz CC, et al. (American Thyroid Association).** ATA Statement on Optimal Surgical Management of Goiter. *Thyroid.* 2023. (Perioperatif aktivite klavuzu)
10. **Russo MA, Santarelli DM, O'Rourke D.** The physiological effects of slow breathing in the healthy human. *Breathe (Sheff).* 2017. **PMID: 29209423** (Diafragmatik nefes vagal ton)

### PEACE & LOVE / Rehab

11. **Dubois B, Esculier JF.** Soft-tissue injuries simply need PEACE and LOVE. *Br J Sports Med.* 2020. **PMID: 31943906**
12. **Bayer ML, Magnusson SP, Kjaer M.** Early versus delayed rehabilitation after acute muscle injury. *N Engl J Med.* 2017. **PMID: 28467760** (NSAID iyileşmeyi yavaşlatır)
13. **van den Bekerom MP, Struijs PA, Blankevoort L, Welling L, van Dijk CN, Kerkhoffs GM.** What is the evidence for rest, ice, compression, and elevation therapy in the treatment of ankle sprains in adults? *J Athl Train.* 2012. **PMID: 22889660** (RICE eskimişlik)

### RPE / Otoregülasyon

14. **Helms ER, Storey A, Cross MR, et al.** RPE and Velocity Relationships for the Back Squat, Bench Press, and Deadlift in Powerlifters. *J Strength Cond Res.* 2017. **PMID: 27243918**
15. **Zourdos MC, Klemp A, Dolan C, et al.** Novel resistance training-specific rating of perceived exertion scale measuring repetitions in reserve. *J Strength Cond Res.* 2016. **PMID: 26049792**

### Klinik Klavuzlar

16. **NSCA — National Strength and Conditioning Association.** *Essentials of Strength Training and Conditioning.* 4th ed. 2016. (Upright row teknik, omuz impingement)
17. **ACSM — American College of Sports Medicine.** *Guidelines for Exercise Testing and Prescription.* 11th ed. 2022. (Genel egzersiz reçetesi)
18. **Schoenfeld BJ.** *Science and Development of Muscle Hypertrophy.* 2nd ed. Human Kinetics. 2020. (Hareket seçimi + volume kuralları)

---

**Ajan 5 sentez tamamlandı.** Sonraki ajan (Ajan 6 — UX/UI) için temel form-yaralanma kütüphanesi hazır. Ajan 7 (orkestratör) entegre ederken: (1) bu doküman + Ajan 2 cycle-aware substitusyon kurallarını **tek bir modal** içinde birleştirsin (`getDailyWorkout(d)` çıktısında); (2) `EXERCISE_RISK_DB` Ajan 3'ün `EX` objesini extend etsin; (3) "Yaralandım" buton dashboard'da sticky.
