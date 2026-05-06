# Egzersiz Sekmesi Ultimate — Master Sentez (Ajan 12)

> 11 uzman ajanın ~7200 satırlık raporundan damıtılmış master roadmap.
> Bengisu için tek tasarım dili, P0/P1/P2 önceliklendirilmiş, 5 orijinal sentez fikriyle.

**Hazırlayan:** Ajan 12 — Master Sentezci (Claude Opus 4.7, 1M context)
**Tarih:** 6 Mayıs 2026
**Hedef okuyucu:** Bengisu — "evet, Phase 2 implementation'a geçelim" diyebilmek için tek dosyada eylem netliği.

---

## Executive Summary

11 ajan ortak bir tablo çiziyor: **mevcut sistem cycle-aware diyet ve sacred feminine ton ekseninde sınıfının üstünde, ama egzersiz sekmesi "okuma odaklı kart listesi" olarak donmuş** — Bengisu salonda set bitirip log atmak istediğinde sistem ona hizmet etmiyor (Ajan 10 P0). Beş mega-değişim her şeyi açıklar: (1) **Set/rep/ağırlık/RPE girişi yok** — bu eklenmeden hiçbir Ajan 9 grafiği, hiçbir Ajan 3 cycle-aware öneri, hiçbir Ajan 8 plan-vs-gerçek log mümkün değil; (2) **Cycle-aware antrenman katmanı eksik** — diyet 4 fazda dinamik, antrenman sadece geç luteal'de bir uyarıyla sınırlı, ovulasyon ligament riski sistemde yok (Ajan 2, Ajan 5); (3) **Tıbbi context yanlış** — 9+ yerde "hipoparatiroidi" kullanıcının olmayan tanısı kodda dolaşıyor (Ajan 1 P0); (4) **Bilim katmanı L1 seviyesinde** — Bengisu Hacettepe MSc, "kasını hisset" ona regression (Ajan 7); (5) **Tek metrik (kg) tiranlığı** — Bengisu'nun tiroidektomi + 5 kg/ay agresif hedefiyle birleşince RED-S ve kompulsif egzersiz vektörü (Ajan 1, Ajan 4, Ajan 6). Bu beş ekseni P0'da çözen **tek tasarım dili** Phase 2'nin omurgası.

---

## 1. Mevcut Sistemin En Büyük 5 Boşluğu

11 ajanın ortak işaret ettiği boşluklar — her biri en az 3 ajandan referansla.

### 1.1. Set/rep/ağırlık/RPE girişi YOK (foundation gap)

- **Kaynak:** Ajan 3 (1.4 RPE-cycle kalibrasyon), Ajan 8 (2.1 quick state tap), Ajan 9 (1.2 kuvvet trendi → veri yok), Ajan 10 (1 H1+H6 sistem durumu+hatırlama heuristic), Ajan 11 (Strong/Hevy gold standard)
- **Sonuç:** Kuvvet trendi hesaplanamıyor → PR detection yok → cycle-aware öneri yapamıyor → Bengisu salonda "geçen hafta kaç kiloydu" sorusunu hafıza ile cevaplıyor.
- **Çözüm hattı:** Pre-filled progressive (Caliber pattern) + numpad düzenleme (Strong) + RPE chip (Helms RIR/RPE skalası) — Ajan 10 detay verdi.

### 1.2. Cycle-aware antrenman önerisi yetersiz — sadece diyet phase-reaktif

- **Kaynak:** Ajan 2 (2.2 antrenmanın anatomisi cycle'a kapalı), Ajan 3 (1.4 cycle modifikasyonları), Ajan 5 (3 ovulasyon Day 11-15 ligament gevşekliği +%30-50), Ajan 9 (6 cycle × performance pattern), Ajan 11 (Wild AI gold standard)
- **Sonuç:** Ovulasyon ligament riski (ACL non-contact +2-3x — Hewett 2007) sistemde yok; folliküler PR penceresi anlatılmıyor; geç luteal sadece 1 noktada uyarıyla sınırlı.
- **Çözüm hattı:** `getCycleAwareWorkoutAdjustment(d, exerciseId)` helper — faz × hareket × set/rep/yük/substitusyon matrisi (Ajan 2 §5.1, Ajan 3 §1.4, Ajan 5 §3 birleştirilmiş).

### 1.3. Tıbbi context yanlış kodlanmış — "hipoparatiroidi" hatası

- **Kaynak:** Ajan 1 (2 tablo P0, 9+ satır referansı: 1645, 1656, 1665, 1772, 1774, 4115), Ajan 2 (2.3 satır 1665+1774 referans), Ajan 4 (1.4 Calciday rationale yanlış), Ajan 7 (6.3 Calciday açıklamasında düzeltme önerisi)
- **Sonuç:** Kullanıcı **hipoparatiroidi tanısı YOK** — Calciday profilaktik. Calcitriol referansı, "3L su şart (hipoparatiroidi)" rationale, Renpho AI prompt yanlış medikal context taşıyor → AI yanlış öneri çıkartabilir.
- **Çözüm hattı:** Find/replace `hipoparatiroidi → post-tiroidektomi profilaktik`, Calcitriol ref kaldır, kreatin kan testi 5 gün → 14 gün düzelt. P0 — saatler içinde yapılabilir.

### 1.4. Bilim katmanı L1 seviyesinde — Bengisu MSc için L2/L3 gerekli

- **Kaynak:** Ajan 7 (2 mevcut açıklamalar düz cümle), Ajan 6 (5.1 SDT competence boşluğu), Ajan 9 (1.4 PR cycle pattern → Bengisu kendi bilimini öğrenmeli), Ajan 11 (Caliber bilim ortada, Bengisu için yetmez)
- **Sonuç:** "Sırt kasını hisset" gibi tek-cümle form ipucu, mekanizma yok. Hipertrofi-mTOR yolu, östrojen-protein sentezi sinerjisi, T4→T3 dönüşüm fizyolojisi kapalı. Bengisu pedagog kimliğiyle pasif tüketici rolü yıpratıcı.
- **Çözüm hattı:** L1/L2/L3 taksonomi (Ajan 7 §4) — L2 default + L3 toggle ("Bilim modu derin"); ⓘ inline expand pattern; 50-80 terimli glossary; haftalık "Bu hafta odak" kartı.

### 1.5. Tek metrik (kg) baskısı — kompozisyon/kuvvet/balance/cycle pattern eksik

- **Kaynak:** Ajan 6 (3 5 kg/ay psikolojik gerçeklik, 6.6 body appreciation eksik), Ajan 9 (1 5 metrik beşlisi), Ajan 4 (1.7 EA hesabı RED-S sınırı), Ajan 1 (1.7 5 kg/ay tıbbi RED-S), Ajan 8 (3 multiple streak)
- **Sonuç:** kg ekranı cycle-aware değil → geç luteal +1-2 kg sıvı "yağ" gibi okunuyor → anksiyete tetiklemesi (Ajan 6 §3.4); kuvvet trendi görünür değil → "ilerlemiyor muyum?" hissi; vücudun yapabildikleri (kuvvet, dayanıklılık) görünmez.
- **Çözüm hattı:** Beşli matters metrik (Ajan 9 §1) — kompozisyon smoothed + kuvvet trendi + kas balance heatmap + akış sürekliliği + cycle × performance pattern. Kg "tek tiran" değil, beşinden biri.

---

## 2. 11 Ajandan Top 3 Bulgu = 33 Madde

### Ajan 1 — Tıp Literatürü
1. **9+ yerde "hipoparatiroidi" yanlış kodlanmış** — kullanıcı tanı YOK, Calciday profilaktik (P0 kod düzeltmesi).
2. **5 kg/ay hızı tiroidektomili kadında RED-S kritik bölge** — EA hesabı 26.5 kcal/kg LBM (sınır 30); 8-9 ay daha sürdürülebilir.
3. **Stomach Vacuum tiroidektomi-safe ≥6 ay post-op** — Hodges 2000 PMID 10913124 vacuum vs Valsalva fark; uyarı eklenmeli.

### Ajan 2 — Endokrin × Cycle
1. **Antrenmanın kendisi cycle'a kapalı** — diyet 4 fazda dinamik, antrenman 1 fazda. En büyük asimetri.
2. **Ovulasyon ligament gevşekliği +%30-50 sistemde yok** — Wojtys 1998, Hewett 2007 ACL non-contact 2-3x risk.
3. **Geç luteal Bengisu için RED-S en yüksek riskli faz** — BMR +%8-12, plasma volume -%8, kortizol AUC +%15-20; +150 kcal cycle bonus + volume -%15 gerekli.

### Ajan 3 — Spor Bilimi
1. **6-gün PPL → 5-gün split (Lower-Squat / Upper Push / Glute-Posterior / Upper Pull / Total Hibrit)** — Schoenfeld 2017 PMID 27400175 5≥6 gün, deficit'te recovery için.
2. **12 hafta periodization mezo-cycle** — Hafta 1-4 anatomik adaptasyon, 5-8 strength loading, 9-12 konsolidasyon; Hafta 4/8 deload.
3. **Glute & Posterior Chain günü ayrı** — hip thrust (Contreras 2015 EMG en yüksek) tabanlı, kemik koruma + Bengisu estetik hedefi (Beck 2017 PMID 27875836).

### Ajan 4 — Beslenme Zamanlaması
1. **Fasted yürüyüş 90 dk + 18.5 saat açlık + sabah egzersiz Sims kadın için kortizol vurgu** — 60 dk veya 09:00 break-fast (100-150 kcal).
2. **Calciday 2. doz 17:00 → 18:30 kaydır** — Hallberg 1991 PMID 1899671 Ca non-heme demir emilimini %50-60 düşürüyor; ciğer günü kritik.
3. **Pre-workout 60 kcal ISSN minimum altı** — 14:00 30g karb + 15-25g protein, 14:30 ek 10-15g hızlı karb.

### Ajan 5 — Yaralanma Önleme
1. **Üç özel risk vektörü** — boyun postürü (skar 6-12 ay), ovulasyon ligament gevşekliği, RED-S deficit + bağ doku rejenerasyonu yavaş.
2. **Ovulasyon Day 11-15 substitusyon matrisi** — Smith squat → Goblet/Box, Konvansiyonel DL → Trap-bar/RDL, Single Leg HT → B-Stance, Bulgarian → Reverse Lunge, Russian Twist → Pallof.
3. **"Yaralandım" akışı PEACE & LOVE protokolü** — modal ile bölge log, antrenman planı otomatik küçülme, doktor rehberi.

### Ajan 6 — Kadın Psikolojisi
1. **5 kg/ay matematik gerçekleşmez (1.4-2.3 kg/ay biyolojik)** — Ay 2 sonu "yine başarısız oldum" çıkarımı doğal; reframing P0 (kademeli mikro-hedef + çoklu metrik).
2. **Compulsive exercise 4 risk faktörü mevcut** — yüksek hedef × kısa zaman × düğün × disiplinli kişilik; Bratland-Sanda 2018 klasik tablo.
3. **Body appreciation (Tylka BAS-2) yok, body neutrality dili eksik** — sadece kg/BF%/ölçü, vücudun yapabildikleri görünmez.

### Ajan 7 — Bilim Pedagoji
1. **L1/L2/L3 taksonomi — L2 default + L3 toggle** — Bengisu MSc için L1 regression, L2 konfor, L3 challenging (ZPD üst sınır).
2. **ⓘ inline expand + Bilim modu global toggle + Glossary 50-80 terim** — beş UX pattern ile cognitive load yönetimi.
3. **5 hareket için L2/L3 mikro-açıklama örneği** — Smith Squat, RDL, Hip Thrust, Lat Pulldown, Pallof Press; mekanizma + yaygın yanlış kavram + L3 ileri.

### Ajan 8 — Davranış & Alışkanlık
1. **3 katmanlı plan vs gerçek log** — (a) hareket başına 2 sn quick tap (✓/⚡/🛌), (b) akşam 30 sn kibar check-in, (c) otomatik bağlam algılama (cycle Day 1-2, uyku <6h).
2. **"Streak" → "Süreklilik/Akış" rebrand + multiple streak (yürüyüş/kuvvet/beslenme/su/dinlenme/cycle)** — birinde aksaklık olursa diğerleri akar; kompulsif risk düşer.
3. **Anti-kompulsif tasarım P0** — "daha fazla yap" çağrıları yok, rest günleri kutlanır, "daha az ye" hiç yer almaz, macro hedefler alt sınır olarak.

### Ajan 9 — Veri Görselleştirme
1. **Beşli matters metrik** — kompozisyon smoothed (cycle-aware), kuvvet trendi sparkline, kas balance heatmap, akış sürekliliği, cycle × performance pattern.
2. **"Her kasımı çalıştırdım" kas haritası primary + radar secondary + stacked bar tertiary** — Hevy pattern + Akşam Bahçesi paleti + anti-kıyas (Israetel MEV bandı tek normatif kıyas).
3. **Anti-kıyas tasarım ilkesi** — hiçbir grafik "diğer kullanıcılar / 32 y kadın ortalaması / BMI normal aralık" tarzı normatif kıyas içermez; sadece kendi geçmişiyle.

### Ajan 10 — Mobil UX
1. **Egzersiz sekmesi "okuma odaklı" — yapma katmanı eksik** — Strong/Hevy mantığında set/rep/ağırlık/RPE girişi + per-exercise timer + Wake Lock + Vibration API.
2. **Pre-filled progressive yük + numpad düzenleme + RPE chip** — 1.2 sn log süresi (Caliber önde Strong'tan); cycle-aware öneri görünür ama zorlayıcı değil.
3. **Bugün antrenman kart hiyerarşisi 7 katmanlı** — cycle banner + bugün özeti + hareket kartı (ad+ⓘ+✓⚡🛌+log+RPE+önceki+sub) + sticky timer + yaralandım link + hafta sonu kas haritası + Bilim modu toggle.

### Ajan 11 — Pazar Araştırma
1. **5 differentiator kombinasyonu hiçbir app'te yok** — Cycle+Tracker+Bilim L3 üçlüsü, TR+MSc+Sacred-Feminine üçlemesi, Cycle×PR pattern emergence, Anti-kıyas ilke, Single-file PWA privacy.
2. **Pattern adoption hattı** — Strong logging UX, Hevy muscle heatmap, Caliber pre-filled progressive + bilim, Wild AI cycle felsefesi, Future body neutrality, FitrWoman 3-cycle pattern emergence.
3. **PWA single-file kısıtlamaları kabul edilebilir kayıp** — AI form check, voice coach, Apple Watch native pas; mainstream app'lerin %75'i kapatılabilir.

---

## 3. Çelişkiler ve Sentezleri

Ajanlar arası farklı yaklaşımlar nerede çelişti, sentez kararı nasıl alındı:

### 3.1. Smith Squat vs Goblet Squat (default seçim)

- **Ajan 3** Smith Machine Squat'u Day 1 ana lift olarak öneriyor (sabit yörünge + form öğrenme).
- **Ajan 5** ovulasyonda Smith → Goblet substitusyon önerdi (%30 lumbar tork azaltma, Beardsley 2018).
- **Sentez:** **Smith Squat default**, ovulasyon Day 11-15 otomatik **Goblet Squat substitusyon** önerisi (chip görünür, kullanıcı override edebilir). Tek tasarım dili: faz × hareket dinamik substitution sistemi (`getCycleSafeAlternative(exerciseId, cyclePhase)`).

### 3.2. Fasted yürüyüş süresi (90 dk koru mu kısalt mı?)

- **Ajan 4** Sims literatürü ile 90 dk → 60 dk düşürmeyi VEYA 09:00 break-fast (100-150 kcal) eklemeyi önerdi (kortizol vurgu).
- **Ajan 6** kompulsif egzersiz uyarısı verdi — "daha fazla yap" baskısı yok, 5/7 yürüyüş zaten yüksek hacim.
- **Sentez:** Bengisu'ya **kibar reframe** — "60 dk + günü hafifletme" diliyle, 90 dk zorunlu değil opsiyonel; geç luteal/regl Day 1-2'de otomatik 60 dk öneri. Süre azaltma "yetersizlik" değil "akıllı yönetim" tonuyla.

### 3.3. 5 kg/ay hedefi (matematik dürüstlük vs motivasyon)

- **Ajan 1** tıbbi RED-S sınırı: 5 kg/ay agresif, ~3 kg/ay sürdürülebilir; doktor onayı şart.
- **Ajan 4** matematiksel: mevcut 1850 kcal alımıyla beklenen 1.4-2.3 kg/ay; 5 kg/ay için 1000-1200 kcal alım = klinik RED-S.
- **Ajan 6** psikolojik: hedef ulaşılamaz algılanırsa Bandura self-efficacy çöker, Ay 2 sonu terk riski; reframing seçenekleri A (açık matematik), B (kademeli mikro-hedef), C (çoklu metrik).
- **Sentez:** **B + C kombinasyonu** — aylık hedef yerine **aralık** göster (May 73-75 kg, Haz 70-73 kg vb.), altında "Hız bedenine ait, yön Eylül'e doğru". 2-haftalık check-in'de matematik **şeffaf yumuşak açılır** (A öğesi). Eylül hedefi tek satır kg değil, 5 satır (kg, ölçü, kuvvet, dayanıklılık, ruh hali) — kg ulaşmasa bile 4 metrik ulaşırsa net başarı.

### 3.4. Streak görünürlüğü (sürekli vs gizli)

- **Ajan 8** üç seçenek sundu: A sürekli görünür, B haftalık özet, C hidden ("Akışım" sekmesi). Önerim B veya C — Bengisu kompulsif risk.
- **Ajan 11** Apple Fitness+ activity ring closure pattern — günlük habit anchor güçlü.
- **Sentez:** **B (haftalık özet) default + C (Akışım sekmesi) opsiyonel**. Activity ring tarzı günlük closure çıkarılır (kompulsif risk); haftalık 7 gün heatmap (GitHub contribution-style sage tonları) + Pazar gece "Bu hafta akışın nasıldı" kart yumuşak.

### 3.5. Confetti animasyonu (5 yemek + 8 bardak günlük)

- **Ajan 8** kompulsif overshoot riski (8 bardak vurmalıyım, 7 yetmez) — kaldır veya haftalık milestone'a kaydır.
- **Ajan 6** variable reward havuzu önerdi — günlük dopamin lazım ama variable + spesifik.
- **Sentez:** **Günlük confetti kaldır** (5 yemek tamam, 8 bardak vurma trigger silinir); **haftalık milestone'a kaydır** (haftada 5/7 yürüyüş, 4/7 kuvvet, 1+ rest gün); **variable reward havuzu** (ZEN quote, arketip kart, fizyolojik içgörü, somatic prompt, kuvvet PR alkışı) sabah-akşam dağılımıyla — günlük dopamin korunur.

### 3.6. Apple Watch / HealthKit entegrasyonu (denenmiş ama kısıtlı)

- **Ajan 6** PROGRESS.md'de Apple HealthKit attempt notları var ama tamamlanmamış.
- **Ajan 8** otomatik bağlam algılama (uyku <6h) Apple Health'a bağımlı.
- **Ajan 11** PWA single-file Watch native erişim vermiyor; HealthKit read-only workaround mümkün.
- **Sentez:** **Manuel ✓/⚡/🛌 (Ajan 8) default**, **Apple HealthKit opsiyonel enrichment** (P2). Bengisu Watch sahibi mi belirsiz (açık soru) — manuel input %100 yeterli, HealthKit değer ekler ama olmazsa olmaz değil.

---

## 4. Master Roadmap

### 🔴 P0 — Must-have, 2 hafta içinde (kritik düzeltmeler + temel altyapı)

> Format: **[Konu]** (Kaynak ajan(lar)) · S/M/L kompleksite · Etki ⭐⭐⭐⭐⭐ · Risk düşük/orta/yüksek

1. ✅ **Hipoparatiroidi referanslarını koddan temizle** (Ajan 1, Ajan 2, Ajan 4, Ajan 7) · S · ⭐⭐⭐⭐⭐ · Risk: düşük — **TAMAMLANDI: commit `ffb2619` (6 May 2026)**
   - 9+ satır find/replace: `hipoparatiroidi → post-tiroidektomi profilaktik`. Calcitriol referansı kaldır, kreatin kan testi 5 gün → 14 gün, Renpho AI prompt fix.
   - Implementation: Tek commit, saatler içinde tamamlanır. **İlk yapılacak iş** — diğer her şey bunun üstüne kuruluyor.
   - **Yapılan:** 7 yerde temizlendi (walk_detail x2, creatine_detail, qalyviz_detail, calciday_detail x2, AI prompt Renpho, onboarding card). Kreatin 5→14 gün (PMID 30986825). Calcitriol → D3+K2+25(OH)D rehberi.

2. **Set/rep/ağırlık/RPE girişi sistemi** (Ajan 3, Ajan 8, Ajan 9, Ajan 10, Ajan 11) · L · ⭐⭐⭐⭐⭐ · Risk: orta
   - Pre-filled progressive (geçen seans + cycle-aware öneri) + tap-to-edit numpad + RPE chip (5-10 büyük chip, set 4 zorunlu, ara setler opsiyonel) + per-exercise timer (compound 150s, izolasyon 75s, core 45s) + Wake Lock API + Vibration API + autosave debounce-free.
   - Veri yapısı: `WorkoutLogEntry` (Ajan 8 §9.1, Ajan 10 §5.4 birleştirilmiş) — exerciseId, planned, actual, state (done/modified/skipped), modifyReason, skipReason, cycleDay/Phase, mood, sleepHours.

3. **5-gün dengeli split geçişi** (Ajan 3) · M · ⭐⭐⭐⭐ · Risk: orta
   - Mevcut 6-gün PPL → Lower-Squat / Upper Push / Glute-Posterior / Upper Pull / Total Hibrit. Day 5 luteal'de skip-edilebilir (4-gün haftaya doğal düşüş).
   - 33 hareket envanteri Ajan 3 §3.1 tablosuyla yeni split'e map'le; Front Raise + Hanging Knee Raise çıkar (gereksiz volume), 12 yeni hareket eklenir (Goblet Squat, Bulgarian Split Squat, B-Stance Hip Thrust, Trap-Bar DL, Cable Pull-Through, Step-Up, Lateral Raise Cable, Face Pull, Hammer Curl, Band Pull-Apart, Sumo Squat, Farmer's Carry).

4. **Cycle-aware antrenman matrisi (faz × hareket × set/rep/yük/substitusyon)** (Ajan 2, Ajan 3, Ajan 5) · L · ⭐⭐⭐⭐⭐ · Risk: orta
   - `getCycleAwareWorkoutAdjustment(d, exerciseId)` helper — 6 faz (Reg D1-2, Reg D3-5, Folliküler, Ovulasyon, Erken Luteal, Geç Luteal) × volume/intensity/eksantrik tempo/substitusyon kuralları (Ajan 2 §5.1).
   - **Ovulasyon Day 11-15 ligament substitusyon banner** (Ajan 5 §3) — Smith→Goblet/Box, DL→Trap-bar/RDL, Single Leg HT→B-Stance, Bulgarian→Reverse Lunge, Russian Twist→Pallof, eksantrik tempo 3-1-1.
   - **Folliküler PR penceresi banner** (Day 6-12) — "Bu hafta rep PR denemesi için iyi pencere, RPE 8.5'i geçme".

5. **Quick state tap (✓/⚡/🛌) + akşam 30 sn check-in** (Ajan 8) · M · ⭐⭐⭐⭐⭐ · Risk: düşük
   - Hareket başlığı yanında 3 chip; ⚡ → bottom sheet (4 sebep: ağırlık ↓ / set-rep ↓ / hareket değişti / kısa süre); 🛌 → bottom sheet (4 sebep: yorgunum / reglim / zaman dar / canım istemedi — yargısız).
   - Akşam 21:30 check-in 5 seçenek (✨💪🌊🌫️🌙 — hiçbiri "başarısız"); cycle Day 1-2 / az uyku / çok atlandı durumlarında otomatik proaktif önek.

6. **Hareket kartında ⓘ inline expand (L2 mekanizma açıklaması)** (Ajan 7, Ajan 10) · M · ⭐⭐⭐⭐ · Risk: düşük
   - Her egzersiz kartı başlığında ⓘ ikonu; tıkla → inline accordion 2-3 paragraf L2 (anatomi + biyomekanik + metabolik + yaygın yanlış kavram) + footer "L3 aç" linki.
   - 5 ana hareket için Ajan 7 §5 mikro-açıklama metinleri hazır; kalan ~20 hareket için aynı şablon doldurulur.

7. **Plan vs gerçek görselleştirmesi (haftalık özet)** (Ajan 8, Ajan 9) · M · ⭐⭐⭐⭐ · Risk: düşük
   - Pazar gece kart: "Bu hafta 4/5 antrenman tamamlandı. 1 atlandı (Çar — yorgunluk; uyku 5.2 saatti). 2 hareket modify (RDL → trap-bar DL, ovulasyon ACL koruması). Bu **stratejik hafta**, yarım değil."
   - Süreklilik (multiple streak: yürüyüş, kuvvet, beslenme, su, dinlenme, cycle-dinleme) altı mini-akış görünür.

8. **Body neutrality dil revizyonu + 5 kg/ay reframing** (Ajan 6) · S · ⭐⭐⭐⭐⭐ · Risk: orta
   - Aylık hedef yerine **aralık** (May 73-75 kg, Haz 70-73 kg vb.); altında "Hız bedenine ait, yön Eylül'e doğru".
   - Eylül hedefi 5 satır: kg / ölçü / kuvvet (squat 8RM) / dayanıklılık (10 km süresi) / ruh hali. Kg "tek tiran" değil.
   - "Hot girl / shred / beach body" dili HİÇBİR YERDE; "estetik" → "function"; outcome praise → process praise (Dweck). 

9. **Anti-kompulsif tasarım** (Ajan 6, Ajan 8) · S · ⭐⭐⭐⭐⭐ · Risk: orta
   - "Daha fazla yap" çağrıları yok; macro hedefler alt sınır olarak çerçevelenir; günlük confetti kaldır → haftalık milestone'a kaydır; "daha az ye" hiçbir yerde.
   - Haftalık compulsive screening 3 madde (Pazar check-in son sorusu, opsiyonel): antrenman atlamayı düşününce huzursuzluk / yedikten sonra ekstra antrenman düşüncesi / hasta zorlama. Ortalama ≥3.5 → kibar 3-gün esnek hafta önerisi.

10. ✅ **Renpho AI prompt + Onboarding wizard tıbbi etiket düzeltme** (Ajan 1) · S · ⭐⭐⭐⭐ · Risk: düşük — **TAMAMLANDI: commit `ffb2619` (6 May 2026)** (P0 #1 ile birlikte yapıldı)
    - Satır 3499 Renpho AI prompt: hipoparatiroidi referansı sil, "post-tiroidektomi (Levotiron + profilaktik Ca/D)" dilini kullan.
    - Satır 4115 Onboarding wizard: aynı düzeltme.

---

### 🎁 Bonus tamamlananlar — Phase 2 Quick Wins (commit `ffb2619`, 6 May 2026)

P0 listesinde direkt başlık değil ama Ajan 1, 2, 4 kuvvetle önerdi:

- ✅ **Geç luteal cycle bonus +100 → +150 kcal** (Ajan 2 §3.3, Ajan 4 §1.6) — `getMacroTarget()` geç luteal branch: kcal 1950→2000, c 50→60, bonus message güncellendi. BMR +%8-12 ve EA hesabıyla doğrulanmış değer.
- ✅ **RED-S guardrail Energy Availability hesabıyla genişletildi** (Ajan 1 §1.7, Ajan 4 §1.7) — `getEstimatedLBM()` (Renpho ölçümünden veya 55kg default) + `getDailyExerciseKcal(d)` (Apple Health veya 500 default) + `getEA(d)` helper'ları eklendi. `getLowIntakeAlert()` IOC RED-S 2023 thresholds (<30 klinik, 30-45 subklinik, ≥45 hedef) ile güncellendi. Eski sadece-kcal mantığı korundu, EA katmanı eklendi.

### 🟡 P1 — Should-have, 4 hafta içinde (gelişmiş özellikler)

1. **Bilim Modu global toggle + Glossary 50-80 terim** (Ajan 7) · L · ⭐⭐⭐⭐ · Risk: düşük
   - Settings'te `educationLevel: 'L1' | 'L2' | 'L3'`. Toggle ON → teknik terimlerin altı çizilir, tıkla → popover (1-2 cümle hızlı tanım + glossary linki) — Mayer pre-training prensibi.
   - Glossary 5 kategori (kas grupları, makrolar/besinler, hormonlar, antrenman, tiroidektomi); her terim L1/L2/L3 üç katman.

2. **Kas grubu balance heatmap (SVG body diagram)** (Ajan 9, Ajan 11) · L · ⭐⭐⭐⭐⭐ · Risk: orta
   - Ön + arka SVG, 9 ana kas grubu; haftalık volume / MAV oranıyla 5-stop renk gradient (Akşam Bahçesi paleti: mauve soluk → sage soluk → sage deep → mustard → coral).
   - Tap-to-expand: o kas grubu detay ("Glute: 18 set bu hafta. Hip thrust 5×8, RDL 4×10, B-stance 3×10, kickback 3×15"). Pazartesi sabah otomatik reset.

3. **Kuvvet sparkline grid (6 ana lift × 1RM tahmini)** (Ajan 9) · M · ⭐⭐⭐⭐ · Risk: düşük
   - Brzycki formula `1RM = weight × (36 / (37 - reps))` (≤10 rep), Epley (12+ rep). Squat / Hip Thrust / RDL / Lat Pulldown / Incline DB Press / Shoulder Press grid 2×3.
   - Cycle phase background tint, PR ⭐ ikonları, deload haftaları soluk; tooltip seans detayı.

4. **PR detection + celebration (cycle-aware ZEN)** (Ajan 9, Ajan 11) · S · ⭐⭐⭐⭐ · Risk: düşük
   - Yeni en yüksek 1RM tahmini → otomatik popup + haptic feedback (Vibration API 50ms × 3) + ZEN quote (cycle phase'e göre havuz: Folliküler PR/Ovulasyon PR/Luteal PR/Regl sonrası PR).
   - PR timeline ekranı: yıllık özet "Bu yıl 12 PR yaptın".

5. **"Yaralandım" akışı (PEACE & LOVE protokolü)** (Ajan 5) · M · ⭐⭐⭐⭐ · Risk: düşük
   - Modal: bölge log (boyun/omuz/dirsek/bel/diz/kalça/...), şiddet (1-5), tetik hareket. Antrenman planı otomatik küçülür (ilgili bölge kontrindike hareketler 7-14 gün için kapatılır), doktor rehberi linklenir.
   - Mevcut "Hasta / Seyahat / Yoğun regl" protected day genişletmesi — manuel + otomatik (Apple Health uyku, cycle, RPE).

6. **Volume × MEV/MAV/MRV stacked bar** (Ajan 3, Ajan 9, Ajan 11) · M · ⭐⭐⭐ · Risk: düşük
   - 12 hafta × kas grubu, X ekseni hafta, Y ekseni toplam set. İnce bant: MEV (alt çizgi) + MAV (üst çizgi). MRV'yi geçen hafta: soluk kırmızı uyarı band (alarm değil bilgi). Deload haftaları otomatik düşüş — "kasıtlı recovery".

7. **Cycle × performance pattern emergence (3 cycle sonra)** (Ajan 9, Ajan 11) · M · ⭐⭐⭐⭐ · Risk: düşük
   - PR × cycle phase scatter — Bengisu'nun kendi pattern'ı: "Ovulasyondan önce squat PR yapıyorum, geç luteal RDL düşük". Wild AI (cycle var, PR yok) + Strong (PR var, cycle yok) **kesişimi** Bengisu için unique differentiator.
   - 3 cycle (≈3 ay) sonra "Pattern bulundu" modal: bilimsel pekiştirme.

8. **"Bu hafta odak" haftalık kart (Pazartesi sabah)** (Ajan 7) · M · ⭐⭐⭐⭐ · Risk: düşük
   - 200-400 kelime, cycle fazına göre (Folliküler / Ovulasyon / Erken Luteal / Geç Luteal+Regl). Yapı: faz başlığı + hormon profili + fizyolojik durum + antrenman implikasyonu + beslenme implikasyonu + risk/dikkat. Bengisu MSc için ders planı kalitesinde derin değer.

9. **Pre-workout & post-workout zamanlama optimizasyonu** (Ajan 4) · S · ⭐⭐⭐ · Risk: düşük
   - 14:00 pre-workout 30g karb + 15-25g protein (1 yk bal + 1 kivi + 25g whey isolate / 1 yumurta beyazı); 14:30 ek 10-15g hızlı karb opsiyonel; 14:15 kafein 100-200mg doktor onayıyla.
   - Calciday 2. doz 17:00 → 18:30 kaydır (Hallberg demir emilim çatışması); zeytinyağ shot ile yağ-D3-Ca emilim sinerji.

10. **Mikronutrient gap kapatma** (Ajan 1, Ajan 4) · S · ⭐⭐⭐ · Risk: düşük
    - Ekle: Vitamin C 100 mg/gün (1. öğünle), Vitamin K2 MK-7 100 µg/gün (1. öğünle, Calciday + D3 sinerji), Omega-3 1g (eğer balık günü <3/7), Psyllium 5-10g/gün opsiyonel (GI tolerans iyiyse).
    - Doz açıklığı doktor sorusu listesi (Calciday içeriği, serum 25(OH)D, DEXA, TSH/T3/T4).

11. **Apple HealthKit read-only workaround** (Ajan 8, Ajan 11) · L · ⭐⭐⭐ · Risk: orta
    - Health Auto Export çözümü (Bengisu Watch sahibi ise) — uyku, HRV, RHR, adım, aktif kalori 14 gün small multiples (Tufte pattern).
    - Otomatik bağlam algılama: uyku <6h → ertesi gün "hafifletme önerisi" prompt.

12. **5-gün split 12-hafta periodization (Mezo 1-2-3)** (Ajan 3) · M · ⭐⭐⭐ · Risk: düşük
    - Hafta 1-4 anatomik adaptasyon (MEV → MAV alt + Hafta 4 deload), 5-8 strength loading (MAV peak + Hafta 8 deload), 9-12 konsolidasyon + Hafta 12 test günü (Squat 8RM, Hip Thrust 8RM, RDL 10RM, Lat Pulldown 10RM, Incline DB Press 8RM).
    - Cycle ile çakışma: Mezo 2 peak (Hafta 5-8) Folliküler haftalarına denk getirme (mevcut tarihte 5 May = Day 8 Folliküler, mükemmel uyum).

### 🟢 P2 — Nice-to-have, uzun vadede

1. **Voice logging Türkçe deneme** (Ajan 11) · M · ⭐⭐ · Risk: orta
   - Web Speech API Türkçe parser kalibrasyon — 1-2 günlük deneme, kalite yeterliyse aktive.
2. **Wearable predictive enrichment** (Ajan 11) · L · ⭐⭐⭐ · Risk: orta
   - HRV → adaptive yük öneri (Whoop pattern + Anthropic Claude API ile).
3. **Plate calculator görsel** (Ajan 11) · S · ⭐⭐ · Risk: düşük
   - Hevy pattern, kg cinsinden plakalar (20+15+10+5+2.5).
4. **Set arası bilim mikro-balon** (Ajan 7, Ajan 10) · S · ⭐⭐⭐ · Risk: düşük
   - Set arası 90 sn dinlenmede üst banner: 1 cümle mekanizma ipucu (Sweller cognitive load uygun, hareket başına 2-3 = antrenman başına ~12 mikro-balon).
5. **Etkileşimli kas haritası (anatomi öğrenme)** (Ajan 7) · M · ⭐⭐⭐ · Risk: düşük
   - SVG body diagram tıkla → modal: TR + Latince adı (Gluteus Maximus = Kalça Kası), ne yapar, hangi günler/hareketler, L2 mini açıklama.
6. **Wedding countdown opt-out + somatic readiness reframing** (Ajan 6) · S · ⭐⭐⭐⭐ · Risk: düşük
   - `shouldShowCountdownToday(mood, cycleDay)` — mood ≤2 ve geç luteal/regl'de otomatik soft-hide. "Düğüne X gün — kg" değil, "kız kardeşinle paylaşmak istediğin 3 anı".
7. **Tiroidektomi destek modülü ("Bedenim ve Tiroidim")** (Ajan 6) · M · ⭐⭐⭐ · Risk: düşük
   - İlaç hatırlatma, kan tahlili planı, doktor sorusu bankası, T4→T3 dönüşüm fizyolojisi açıklaması (Wiersinga 2014).
8. **Push notification iOS PWA** (Ajan 8, Ajan 11) · M · ⭐⭐ · Risk: düşük
   - iOS 16.4+ Web Push, sadece Levotiron 06:30 default açık + onboarding 5 checkbox.

---

## 5. 5 ORİJİNAL FİKİR (Sentezci Katkı — Diğer Ajanların Kapsamadığı)

11 ajanın yaptığı kapsamlı analiz dışında, sentezci olarak şu 5 orijinal fikri öneriyorum. Her biri 2-3 ajanın bulgularını yeni bir UX format olarak birleştiriyor.

### 5.1. "Hacettepe Lab" — Bilim Modu Özel Sekme

**Esin:** Ajan 7 (L3 toggle) + Ajan 11 (Bengisu MSc seviyesi differentiator) + Ajan 6 (pedagog kimliği)

**Format:** Bilim Modu açıkken **5. tab** olarak görünür ("Lab" etiketi). Bengisu kendi laboratuvarı:
- **Veri Atölyesi**: Kuvvet trendi linear regresyon + R² değer; "ovulasyondan önce squat PR" pattern emergence p-value (3 cycle sonra istatistiksel kabul).
- **Hipotez Defteri**: "Hipotez: geç luteal yürüyüşten sonra Levotiron emilim azalır mı?" — Bengisu kendi hipotezini test eder, veri toplar, pattern görür.
- **PMID Kütüphanesi**: Ajan 1, Ajan 3, Ajan 4 referansları kategorize (tiroidektomi / cycle / hipertrofi / RED-S / supplementation) — Bengisu kaynak okuyabilir.
- **Pedagojik Notlar**: "Bu sistem hangi pedagojik prensipleri kullanıyor?" — Mayer çoklu ortam, Sweller cognitive load, Vygotsky ZPD; Bengisu Fen Eğitimi MSc gözüyle sistemin kendi öğretim tasarımını okur.

**Neden orijinal:** Hiçbir mainstream app kullanıcıyı **araştırmacı** olarak konumlandırmıyor — ya tüketici (Strong, Hevy) ya öğrenci (Caliber). Bengisu için *araştırmacı* en saygılı pozisyon — pedagog kimliğine + bilim sevgisine + kompulsif risk koruyucu (kompulsif egzersiz dürtüsü "veri toplama" ile kanalize edilir).

**P1 — implementasyon orta kompleksite (M-L), P0 altyapısı (set log, cycle, kuvvet trendi) tamamlandıktan sonra inşa edilebilir.

### 5.2. "Body Conversation" — Günde 1 Vücutla Diyalog Kartı

**Esin:** Ajan 6 (somatic check-in) + Ajan 8 (akşam check-in) + Ajan 7 (mikroöğrenme) + Ajan 9 (mood × performance)

**Format:** Sabah 09:00 (yürüyüşten sonra duş öncesi) **2 dk diyalog kartı**:
```
☀️ Sabah 09:12 · Day 11 Folliküler

Bedeniyle: "Bugün için en çok ne istiyorsun?"
□ Güç hissetmek
□ Hafiflik
□ Bağlantı
□ Sessizlik
□ Oyun

[Seçim] →

Bedeniyle: "Bunu nasıl yapabilirim?"
[Bengisu cevap yazar — opsiyonel 0-1 cümle]

Akşam 21:30 dönecek: "Sabah 'güç hissetmek' istedin. Bedenin
ne dedi? Tutma — bilgi olarak bırak."
```

**Sabah → akşam karşılığı**: niyet ile geri bildirim. Mood × performance scatter'ında (Ajan 9) işaretlenir. 7 gün sonra pattern: "Hafiflik istediğin 5 günden 4'ü Pazar — restorasyon ihtiyacın orada".

**Neden orijinal:** Mevcut akşam check-in (Ajan 8) veri toplama, sabah niyet kartı (Ajan 6) tek seferlik. **Çift uçlu diyalog** (sabah niyet → akşam karşılaştırma) hiçbir ajanın direkt önerisinde yok — somatic literacy + identity-based habit (Clear) + relatedness (SDT Ajan 6) üçü birden.

**P1 — Ajan 6'nın 7.1 sabah check-in kartı + Ajan 8 akşam check-in altyapısı zaten var; sadece **bağlama** mekanizması eklenecek.

### 5.3. "Cycle Pattern Emergence" — 3 Cycle Sonra Kişisel Atlas

**Esin:** Ajan 9 (cycle × performance pattern) + Ajan 11 (FitrWoman 3-cycle felsefesi) + Ajan 2 (cycle bireyselleştirme) + Ajan 7 (haftalık odak kartı)

**Format:** Sistem 3 cycle sonra otomatik **"Bengisu'nun Cycle Atlası"** modal açar:
```
🌙 84 gün boyunca cycle'ını takip ettin.
Şimdi atlasin oluştu.

Senin pattern'ın:
✦ Folliküler Day 8-11: kuvvet zirvesi (3/3 cycle PR)
✦ Ovulasyon Day 13-15: enerji yüksek, RPE algı düşük
✦ Erken Luteal Day 17-20: stabil, "konfor zonu"
✦ Geç Luteal Day 25-28: enerji -%20, ağırlık -%5
✦ Regl Day 1-2: tam dinlenme talep, Day 3-5 toparlanma
✦ Bilinen genel pattern'dan farklı: 
  - Senin ovulasyon RPE algı ortalama 7.1 (literatür 7.5)
  - Senin geç luteal kuvvet düşüş -%5 (literatür -%10)

[Atlas'ımı kaydet] [Yeni cycle ile güncelle]
```

**Pattern + literatür kıyas** = "Senin biyolojin literatürün ortalamasından şu yönde farklı". Bengisu MSc — bu ona kendi bilimini hediye eder.

**Neden orijinal:** Wild AI 4-faz tek pattern, FitrWoman 3-cycle felsefesi var ama emergence modali yok, Strong/Hevy cycle yok. **Pattern emergence + literatür kıyas + Bengisu personalized atlas** = 3 ajanın kesişimi yeni format.

**P1 — 3 cycle veri biriktikten sonra (~3 ay), modal otomatik açılır. P0 set log + cycle log altyapısı yeterli.

### 5.4. "Levotiron Diary" — İlaç × Performance × Mood Pattern

**Esin:** Ajan 1 (TSH süpresyonu × kemik koruma) + Ajan 6 ("ilacımdan sonra kilo veremiyorum" travma) + Ajan 9 (mood × performance scatter) + Ajan 7 (T4→T3 fizyoloji)

**Format:** Sabah 06:30 Levotiron alarm + 1 tap log:
```
☀️ 06:30 — Levotiron 100mcg
[✓ Aldım] (default — 1 tap)
[+ Kayıt notu] (opsiyonel)
```

Haftalık özet (Pazar gece):
```
🩺 Levotiron Bu Hafta
✓ 7/7 alındı (saat ortalama 06:31, sapma ±4 dk)
✦ Pattern: Saat 06:45 sonrası alındığı 2 günde mood ortalama 2.8/5
  (06:35 öncesi alındığı günlerde 4.0/5)
✦ Test: Bu hafta her gün 06:30'da almayı dene — fark hissedilebilir
```

**Doktor sorusu bankası entegrasyonu**: 3 ay log birikince → "Endokrin randevuda göstermek ister misin?" PDF export.

**Neden orijinal:** Hiçbir cycle/fitness app **ilaç × performance × mood × cycle** dört eksenli pattern göstermiyor. Bengisu için tiroidektomi yas süreci (Ajan 6 §4.2 organ kaybı travması) bilimsel pekiştirmeyle yumuşatılır — "ilaç sabit, vücudum değişiyor" yerine "ikisi birlikte hareket eden sistem".

**P1 — sabah Levotiron alarm zaten var; **log + pattern emergence + PDF export** ekleme orta kompleksite.

### 5.5. "Wedding Mirror" — Düğüne 60 Gün Kala Tasarım Modu

**Esin:** Ajan 6 (wedding countdown çift uçlu silah) + Ajan 8 (anti-kompulsif tasarım) + Ajan 11 (postpartum/cycle yaşam evresi felsefesi)

**Format:** Düğüne 60 gün kala (≈Temmuz 27, 2026) sistem otomatik **"Wedding Mirror" modu** önerisi açar:
```
💐 Düğüne 60 gün kala.

Bu son 60 günde sistem değişebilir mi?
Sana 3 mod öneriyorum:

📐 Status quo — Mevcut sistem devam (cycle + kuvvet + 5/7 yürüyüş)
🌙 Hafifletme — Volume -%15, mobility +1 gün, uyku önce
✨ Hazırlık — Düğün haftası simülasyonu (gece geç + dans + 
   alkol + farklı yemek) için body resilience focus

Hangi seni anlatıyor?
```

**Hafifletme** seçilirse — düğün haftası burnout riski düşer, kompulsif "son 60 gün maksimum çalışma" dürtüsü engellenir. **Hazırlık** seçilirse — gerçekçi (gece geç dans için kardiyovasküler dayanıklılık, alkol için karaciğer destek).

**60 gün öncesi**: countdown göstergesi yumuşatılır (gün sayısı yerine "Düğün haftası: hazırlık aşamasında"). 14 gün öncesi: **kg hedefi otomatik kapatılır** — "Şu son 14 günde bedenin %1-2 sıvı dalgalanması var, kg ile kıyas anlamsız. Odak: enerji + uyku + mood".

**Neden orijinal:** Sweat postpartum modu var ama düğün modu hiçbir app'te yok. **Yaşam evresi farkındalığı + countdown reframing + automatic kg suspension** üç katman — Ajan 6 + Ajan 8 + Ajan 11 kesişimi yeni format.

**P1 — Eylül 2026 düğün, Mayıs 2026'da inşa için 4 ay var. Implementasyon S-M (60 gün önce trigger + mod seçimi + 14 gün önce kg suspension).

---

## 6. Phase 2 Implementation Roadmap (Giriş)

### Sıra önerisi (P0 itibarıyla)

**Hafta 1 — Foundation (P0 #1, #10):**
- Hipoparatiroidi referanslarını temizle (saatler).
- Renpho AI prompt + Onboarding wizard düzelt.
- 5 hareket Ajan 7 §5 mikro-açıklama metinleri yaz (statik content).

**Hafta 2 — Set Log Altyapısı (P0 #2):**
- `WorkoutLogEntry` veri yapısı tasarla.
- Pre-filled progressive numpad UI implement et.
- RPE chip 5-10 + per-exercise timer + Wake Lock + Vibration API.
- Autosave debounce-free localStorage.

**Hafta 3 — 5-Gün Split + Cycle-Aware Matrisi (P0 #3, #4):**
- 33 hareket → 5 gün split map + 12 yeni hareket envanter ekle.
- `getCycleAwareWorkoutAdjustment(d, exerciseId)` helper.
- Ovulasyon Day 11-15 substitusyon banner + Folliküler PR penceresi banner.

**Hafta 4 — UX Tamamlama (P0 #5, #6, #7, #8, #9):**
- Quick state tap ✓/⚡/🛌 + akşam check-in 5 seçenek.
- ⓘ inline expand (L2 mekanizma).
- Plan vs gerçek haftalık özet.
- Body neutrality dil revizyonu + 5 satır Eylül hedefi.
- Anti-kompulsif tasarım (confetti haftalık'a kaydır, compulsive screening).

### Test stratejisi

- **Unit test:** Brzycki 1RM formula, EA hesabı (LBM × 30), cycle phase calculator (28-29 gün varyans), `getCycleSafeAlternative` substitusyon mantığı.
- **Integration test:** Set log → cycle phase → cycle-aware öneri zinciri; PR detection real-time + ZEN quote havuzu.
- **Real-user test:** Bengisu 1 hafta paralel 5-gün split + set log + ⓘ kullanır → feedback. Açık sorular bu noktada cevaplanır.

### Kritik bağımlılıklar

- **P0 #2 (set log) → P1 #2 (kas haritası), P1 #3 (kuvvet sparkline), P1 #4 (PR detection), P1 #6 (volume × MEV/MAV/MRV), P1 #7 (cycle × performance pattern)** — set log olmadan hiçbir Ajan 9 grafiği çalışmaz.
- **P0 #4 (cycle matrisi) → P1 #5 (yaralandım akışı), P1 #7 (pattern emergence), P1 #8 (haftalık odak kartı)** — cycle modifikasyon kuralları olmadan haftalık kart ve pattern emergence eksik.
- **P0 #6 (ⓘ L2) → P1 #1 (Bilim Modu toggle + Glossary)** — L2 metinleri olmadan L3 ve glossary inşa edilemez.

---

## 7. Açık Sorular (Bengisu'nun Cevaplaması Gereken)

Tüm ajanlardan toplanmış 30+ soru — kategorize edilmiş.

### 7.1. Tıbbi (doktora sorulacak)

1. **Son TSH, serbest T3, serbest T4 değerlerim?** Tiroidektomi nedeni neydi (DTC, multinodüler, otoimmün)? TSH süpresyonu hedefimiz var mı? (Ajan 1 #1)
2. **Levotiron dozumu kilo değişimine göre ne sıklıkta gözden geçirelim?** Her 5 kg'da kontrol uygun mu? (Ajan 1 #2)
3. **Calciday içerik:** elementer kalsiyum kaç mg, D vit kaç IU, kalsiyum karbonat mı sitrat mı? (Ajan 1 #4)
4. **Serum 25(OH)D düzeyim?** >30 ng/mL içinde miyim? (Ajan 1 #5)
5. **DEXA scan en son ne zamandı?** Tiroidektomi sonrası bazal ölçüm var mı? (Ajan 1 #8)
6. **5 kg/ay kayıp hızı tıbben uygun mu?** Daha yavaş (0.7-0.8 kg/hafta) önerir misin? (Ajan 1 #10)
7. **Karnivor diyet uzun vadede önerilir mi? Lipid profili (LDL, ApoB) takibi nasıl?** (Ajan 1 #11)
8. **Kreatin 5g/gün başlamamda sakınca var mı?** Renal fonksiyon (eGFR, BUN) baseline ölçtük mü? (Ajan 1 #12)
9. **Stomach Vacuum (3×30sn) tiroidektomi sonrası güvenli mi?** Skar oturma süresi ne kadar? (Ajan 1 #13)
10. **18.5 saat sabah açlığı + sabah egzersiz benim için uygun mu?** Sabah kortizol pikim var mı? (Ajan 1 #14)
11. **Menstruel düzenim (28-29 gün) kayar veya kanama hafiflerse ne yapayım?** RED-S erken sinyal olarak takip etmeli miyim? (Ajan 1 #15)
12. **Pre-workout kafein 100-200mg uygun mu?** AF riski TSH süpresyonu altında varsa? (Ajan 4 §3.1)
13. **T3 ekleme tartışması (LT4+LT3 kombinasyon)** benim profilim için değerlendirebilir misiniz? (Ajan 6 §4.3)

### 7.2. Kişisel tercih (Bengisu kendi kararı)

14. **Streak görünürlüğü:** A sürekli görünür / B haftalık özet / C hidden? (Ajan 8 §3.7) — Önerim B/C.
15. **Akşam check-in saati:** 21:00 / 21:30 / 22:00? (Ajan 8 §2.2)
16. **Push notification:** sadece Levotiron 06:30 / + 1. öğün 10:00 / + 17:00 antrenman / + 21:30 check-in? (Ajan 8 §6.6)
17. **Karnivor "saf"lık tercihi:** pre-workout bal+kivi (saf değil) / yumurta beyazı + jelatin (saf)? (Ajan 4 §3.1)
18. **Geç luteal +150 kcal kombinasyonu:** 2. öğüne ekle / 1. öğüne ekle / 12:00 polifenol shot ile snack? (Ajan 4 §1.6)
19. **Wedding countdown görünürlük:** her zaman / mood iyiyken / kapalı? (Ajan 6 §5.4)
20. **Bilim Modu seviye:** L1 (lay) / L2 (intermediate, default) / L3 (advanced toggle)? (Ajan 7 §4)
21. **5-gün split veya 4-gün hibrid:** baseline 5 gün + Cum opsiyonel skip / baseline 4 gün? (Ajan 3 §1.3)
22. **Day 5 (Total Hibrid) zorunlu mu?** Geç luteal'de skip default mı? (Ajan 3 §1.3)

### 7.3. Teknik karar (uygulama tasarımı)

23. **Apple Watch sahibi misin?** HealthKit + manuel input çift modu / manuel only? (Ajan 11 #2)
24. **Apple HealthKit yeniden denenir mi?** PROGRESS.md attempt notları var. (Ajan 8 §2.3, Ajan 11 §8)
25. **Doğum kontrol kullanıyor musun?** Wild AI 150 variant — natural cycle mı, pill/IUD mu? Cycle phase tahmini değişir. (Ajan 11 #3)
26. **Adaptive yük önerisi için Anthropic Claude API çağrı maliyeti** kabul edilebilir mi? Tek kullanıcı ayda <$1. (Ajan 11 #5)
27. **Rakip app deneyimi:** Strong / Hevy / Wild AI / MyFitnessPal kullandın mı? Beğendiğin / sevmediğin pattern? (Ajan 11 #1)
28. **Voice logging Türkçe deneme** zaman ayrılır mı? 1-2 günlük iş, P2'den P1'e taşınabilir? (Ajan 11 #6)
29. **Renpho akıllı tartı veri formatı:** günlük otomatik mı, haftalık manuel girer misin? (Ajan 9 §1.1)
30. **Ölçü mezurası alır mısın?** Vücut ölçüleri kg'dan daha güvenilir progresyon metriği. (Ajan 9 §1.1 implicit)

### 7.4. Davranışsal (kompulsif risk yönetimi)

31. **Compulsive screening 3 madde** Pazar check-in'de görünmesi OK mi? (Ajan 6 §7.7, Ajan 8 §5.6)
32. **Body Conversation sabah niyet kartı** ister misin? Opsiyonel, varsayılan kapalı. (Sentez §5.2)
33. **Hacettepe Lab özel sekmesi** açılsın mı? Bilim Modu açıkken görünür. (Sentez §5.1)

---

## 8. Risk Değerlendirmesi

### 8.1. 5 kg/ay matematik gerçeklik vs psikolojik etki

- **Risk:** Bengisu hedef ulaşamayınca Ay 2 sonu "yine başarısız oldum" → terk (Ajan 6 §3.3, Bandura self-efficacy çöker).
- **Yönetim:**
  - Aralık hedefler (May 73-75 kg); altında "Hız bedenine ait, yön Eylül'e doğru".
  - 2-haftalık check-in'de matematik şeffaf yumuşak: "Beklenen tempo 1.5-2 kg/ay — sen tam içindesin. Senin ortalama hızın 1.7 kg/ay" — tiroidektomi nüansı görünür.
  - 5 satır Eylül hedefi (kg/ölçü/kuvvet/dayanıklılık/mood) — kg ulaşmasa bile 4 metrik ulaşırsa net başarı.

### 8.2. Kompulsif egzersiz / disordered eating riski

- **Risk:** 4 risk faktörü mevcut (yüksek hedef × kısa zaman × düğün × disiplinli kişilik) — Bratland-Sanda 2018 klasik tablo.
- **Yönetim:**
  - "Daha fazla yap" çağrıları HİÇBİR YERDE; macro hedefler alt sınır.
  - Günlük confetti kaldır → haftalık milestone'a kaydır.
  - Compulsive screening haftalık 3 madde, ortalama ≥3.5 → 3-gün esnek hafta önerisi; ≥4 × 2 hafta → kibar uzman önerisi (terapist/diyetisyen).
  - Multiple streak (yürüyüş/kuvvet/beslenme/su/dinlenme/cycle) — birinde aksaklık olunca diğerleri akar.
  - Cycle Day 1-2 + uyku <6h + RPE >8.5 ardarda 5+ gün → otomatik proaktif "rest_strongly_suggested".
  - Wedding Mirror modu (Sentez §5.5) — son 60 gün kompulsif "maksimum çalışma" dürtüsü engellenir.

### 8.3. Tıbbi onay gereken alanlar

- TSH / serbest T3 / serbest T4 değerleri — endokrinolog onayı şart (5 kg/ay hız + Levotiron doz ayarı + AF riski).
- Calciday içeriği + serum 25(OH)D — D3 ek doz veya değişim gerekiyor mu.
- DEXA scan baseline — TSH süpresyonu altındaysa yıllık.
- Kreatin başlama — eGFR/BUN baseline.
- Karnivor diyet uzun vade — lipid profili (LDL, ApoB).
- Pre-workout kafein — AF riski.

### 8.4. Veri kaybı / privacy

- **PWA single-file avantaj:** veri cihazda, cloud yok (Ajan 11 §8 differentiator). GDPR-immune.
- **Risk:** Telefon kayıp / IndexedDB clear → veri kaybı.
- **Yönetim:** Manuel JSON export (PROGRESS.md zaten var); haftalık otomatik backup öneri (settings'te).

### 8.5. Phase 2 over-engineering riski

- **Risk:** P0 12 madde + P1 12 madde + 5 orijinal fikir = ~30 maddelik liste, Bengisu yapay zeka destekli tek geliştirici, hızlı pivot avantajı var ama burnout riski.
- **Yönetim:**
  - **P0 4 hafta** disiplinli (yukarıda Hafta 1-4 sıralaması); P1 ekleme her seferinde 1-2 madde paralel.
  - Her sprint sonu Bengisu paralel kullanım test eder (1 hafta gerçek antrenman) — feedback'siz P1 maddesi inşa edilmez.
  - 5 orijinal fikir P1 sonrasına bırak — temel sistem sağlamlaştıktan sonra.

---

## 9. Başarı Kriterleri

Ultimate hâlinde Bengisu'nun ne hissetmeli, ne görmeli, ne yapabilmeli:

1. **Salonda 1.5 sn'de set logu atabilir** — pre-filled ✓ tap, RPE chip, timer otomatik başlar (Ajan 10).
2. **"Bu hafta tüm ana kas gruplarımı çalıştırdım" sorusunun görsel cevabını alır** — Pazar gece kas haritası heatmap "✓ 9 grup MEV üstünde" (Ajan 9).
3. **Cycle fazını biliyor ve antrenmanı buna göre adapte oluyor** — ovulasyon Day 13 squat günü "Goblet substitusyon önerildi" görüyor, kabul ediyor; folliküler Day 9'da "PR penceresi açık" görüyor, +2.5 kg deniyor (Ajan 2, Ajan 5).
4. **Tıbbi context doğru** — hiçbir ekranda "hipoparatiroidi" görmüyor; "post-tiroidektomi profilaktik" dilini görüyor; T4→T3 dönüşüm fizyolojisini biliyor (Ajan 1, Ajan 7).
5. **Bilim seviyesi MSc — pasif tüketici değil araştırmacı** — ⓘ tıkla L2 mekanizma okuyor, "Bilim modu derin" toggle ile L3 PMID kaynak görüyor; "Hacettepe Lab"da kendi pattern'ını test ediyor (Ajan 7, Sentez §5.1).
6. **5 kg/ay matematik dürüst ama yumuşak** — May 73-75 kg aralığı, "Hız bedenine ait" tonu; Ay 2 sonu hayal kırıklığı yerine "biyolojik beklenen, devam" pekiştirmesi (Ajan 6).
7. **Multiple streak — biri aksarsa diğerleri akıyor** — yürüyüş 5/7, kuvvet 4/7, beslenme 5 öğün, su, dinlenme, cycle-dinleme — 6 mini-akış görünür, kompulsif "tek streak çöktü her şey çöktü" yok (Ajan 8).
8. **Plan vs gerçek görüyor — yargısız bilgi** — "Bu hafta 4/5 antrenman tamamlandı, 1 atlandı (Çar — yorgunluk; uyku 5.2 saatti, vücudun haklıydı), 2 modify (RDL → trap-bar DL, ovulasyon ACL koruması). Bu **stratejik hafta**, yarım değil." (Ajan 8).
9. **Akşam 30 sn check-in — yargısız** — 5 seçenek (✨💪🌊🌫️🌙), hiçbiri "başarısız", her biri kendine özel reframe (Ajan 8).
10. **3 cycle sonra kendi atlasını alıyor** — "Senin pattern'ın: Folliküler Day 8-11 kuvvet zirvesi (3/3 cycle PR); literatürden farklı: ovulasyon RPE algı 7.1 vs 7.5" (Sentez §5.3).

---

## 10. Kaynak Ajan Dosyaları

11 ajanın tek-satır özeti + ana çıktı:

1. **agent-01-tip-literaturu.md** (Ajan 1, Tıp Literatürü — 21 PMID/DOI, 405 satır)
   - Ana çıktı: 9+ yerde "hipoparatiroidi" yanlış kodlama tespiti; 5 kg/ay RED-S kritik bölge; Stomach Vacuum tiroidektomi-safe ≥6 ay.

2. **agent-02-endokrin-cycle.md** (Ajan 2, Endokrin × Cycle — 22 öneri, ~600 satır)
   - Ana çıktı: Antrenmanın anatomisi cycle'a kapalı; ovulasyon ligament gevşekliği +%30-50 sistemde yok; faz × parametre tablosu (Reg D1-2 / D3-5 / Folliküler / Ovulasyon / Erken Luteal / Geç Luteal).

3. **agent-03-spor-bilimi.md** (Ajan 3, Spor Bilimi — 5-gün split + 12 yeni hareket, ~700 satır)
   - Ana çıktı: 6-gün PPL → 5-gün split (Lower-Squat / Upper Push / Glute-Posterior / Upper Pull / Total Hibrit); 12 hafta periodization (Mezo 1-2-3 + deload Hafta 4/8); 33 hareket envanter map.

4. **agent-04-beslenme-zamanlama.md** (Ajan 4, Beslenme × Antrenman Zamanlaması — yeni zamanlama tablosu + EA hesabı, ~700 satır)
   - Ana çıktı: Fasted yürüyüş 90 → 60 dk veya 09:00 break-fast; Calciday 17:00 → 18:30 kaydır (demir emilim); pre-workout 60 → 30g karb + 15-25g protein; mikronutrient gap (C, K2, Omega-3, lif).

5. **agent-05-yaralanma-form.md** (Ajan 5, Yaralanma & Form — 50+ hareket risk haritası + PEACE & LOVE protokolü, ~600 satır)
   - Ana çıktı: 3 risk vektörü (boyun, ovulasyon, RED-S); ovulasyon Day 11-15 substitusyon matrisi; "Yaralandım" modal akışı + protected day genişletmesi.

6. **agent-06-kadin-psikoloji.md** (Ajan 6, Kadın Psikolojisi — 4 kritik psikolojik boşluk, ~350 satır)
   - Ana çıktı: 5 kg/ay matematik gerçeklik (1.4-2.3 kg/ay); kompulsif egzersiz 4 risk faktörü; body appreciation (Tylka BAS-2) eksik; wedding countdown çift uçlu silah.

7. **agent-07-bilim-pedagoji.md** (Ajan 7, Bilim Pedagoji — L1/L2/L3 taksonomi + 5 hareket mikro-açıklama, ~400 satır)
   - Ana çıktı: L1/L2/L3 katman + L2 default + L3 toggle; ⓘ inline expand + Bilim modu + Glossary 50-80 terim + haftalık "Bu hafta odak" kartı + etkileşimli kas haritası.

8. **agent-08-davranis-aliskanlik.md** (Ajan 8, Davranış & Alışkanlık — 3 katmanlı log + Süreklilik rebrand, ~600 satır)
   - Ana çıktı: 3 katmanlı log (quick tap + akşam check-in + auto-context); Streak → Süreklilik/Akış + multiple streak; anti-kompulsif tasarım; habit stacking Bengisu zinciri.

9. **agent-09-veri-gorsellestirme.md** (Ajan 9, Veri Görselleştirme — beşli matters metrik + kas haritası, ~600 satır)
   - Ana çıktı: Beşli metrik (kompozisyon smoothed + kuvvet sparkline + kas balance heatmap + akış sürekliliği + cycle × performance pattern); Anti-kıyas tasarım ilkesi.

10. **agent-10-mobil-ux.md** (Ajan 10, Mobil UX — set/rep/RPE girişi + kart hiyerarşisi, ~600 satır)
    - Ana çıktı: Pre-filled progressive log (1.2 sn) + RPE chip + per-exercise timer + Wake Lock + Vibration API; "Bugün antrenmanın" 7 katmanlı kart hiyerarşisi.

11. **agent-11-pazar-arastirma.md** (Ajan 11, Pazar Araştırma — 5 differentiator + 60+ kaynak, ~600 satır)
    - Ana çıktı: 5 differentiator (Cycle+Tracker+Bilim L3 / TR+MSc+Sacred-Feminine / Cycle×PR pattern / Anti-kıyas / Single-file PWA privacy); pattern adoption hattı (Strong/Hevy/Caliber/Wild AI/Future/FitrWoman).

---

## Kapanış

Bu sentez 11 uzman ajanın 7200 satırlık raporundan damıtıldı. Ortak çıkarım: **mevcut sistem cycle-aware diyet ve sacred feminine ton ekseninde sınıfının üstünde, ama egzersiz sekmesi 5 mega-değişimle ultimate'a dönüşür** — set log altyapısı, cycle-aware antrenman matrisi, tıbbi context düzeltme, L1→L2/L3 bilim katlanması, kg-tek-tiranlığını kıran 5 metrik beşli.

P0 4 haftada tamamlanır (10 madde). P1 sonraki 4-8 haftada (12 madde) tamamlanır. P2 + 5 orijinal fikir uzun vadede.

Bengisu pedagog kimliğiyle bu sistemi kullanırken **araştırmacı** rolünde olur — Bilim Modu, Hacettepe Lab, Cycle Pattern Emergence, Levotiron Diary, Wedding Mirror beş yeni format Bengisu'ya pazarda **hiçbir app'in sunmadığı** kişisel bilim deneyimini sunar.

Phase 2 implementation hazır — Bengisu onayı ile Hafta 1 başlayabilir.

---

**Toplam kelime:** ~6800 kelime · Türkçe · 11 ajan referans · 30+ açık soru · 5 orijinal sentez fikri
