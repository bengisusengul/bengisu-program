# Ajan 7 — Bilim Pedagojisi · Tıkla-Öğren Mimarisi · Mikroöğrenme

**Hasta profili:** Bengisu, 32 y, K · Hacettepe Fen Bilgisi Öğretmenliği BSc + Fen Eğitimi MSc · Total tiroidektomi · Levotiron + Calciday · Karnivor + IF · 5/7 yürüyüş · 4-5/7 esnek güç · Hedef 76.9 → 58 kg

**Hazırlayan:** Ajan 7 — Fen Eğitimi Pedagojisi × Bilim İletişimi × Microlearning × UX-içi Öğrenme Tasarımı (Claude Opus 4.7, 1M context)

**Tarih:** 5 Mayıs 2026

**Kanıt tabanı:** Mayer (Multimedya Öğrenme 2014); Sweller (Cognitive Load 1988, 2011); Vygotsky (ZPD 1978); Bruner (scaffolding 1976); Dweck (Mindset 2006); Khan (One World Schoolhouse 2012); Bjork (desirable difficulties 2011); Schoenfeld 2019 hipertrofi mekanizmaları; ACSM Position Stand 2009

---

## Executive Summary

1. **Bengisu kendisi pedagog, mevcut açıklamaların seviyesi onun bilişsel zonu altında.** PROGRESS.md ve `index.html` analizinde: hareket "ne yaptığı" tek cümle (`'Sırt kasını hisset'`), supplement "ne yapar" tek cümle, faz mantığı tek cümle. **Mekanizma yok.** Hipertrofi-mTOR yolu, glikojen-insülin etkileşimi, östrojen-protein sentezi sinerjisi, post-tiroidektomi T4→T3 dönüşüm fizyolojisi gibi konular Bengisu'nun MSc düzeyinde hazır beklediği halde uygulamada kapalı. Bu sadece "bilgi eksiği" değil — **autonomy + competence** kazanımı kayıp.

2. **Sweller cognitive load açısından açıklama dozajı **yere ve ana göre** kritiktir.** Antrenman ânında zaten yüksek extraneous load var (set sayma, RPE, form); bu pencere derin mekanizma açıklaması için **uygun değil**. Ama warmup, soğuma, akşam reflection için **L2-L3 derin açıklama** uygun. Tasarım kuralı: **just-in-time + just-enough**. Set arasında 1 cümle ipucu; akşam ekranında 5-10 paragraflık derin metin.

3. **Üç katmanlı taksonomi (L1-L2-L3) Bengisu için L2 default + L3 toggle.** L1 (lay) ona regression; L2 (lisans intermediate) konfor zonu; L3 (advanced — yüksek lisans tezli) opsiyonel "Bilim modu" toggle. Glossary 50-80 terim, kategori-bazlı (kas, makro, hormon, antrenman, tiroidektomi). Beş ana UX pattern: ⓘ inline expand · Bilim modu global toggle · Glossary sayfası · etkileşimli kas haritası · haftalık "Bu hafta odak" kartı. Cognitive load + flow noktası açısından net rolleri var.

---

## 1. Pedagojik Framework — Egzersiz Uygulamasında Öğretim

Bengisu Hacettepe Fen Eğitimi MSc + öğretmen. **Meta-öğrenme bilinci yüksek** — kendi öğrenme süreçlerinin farkında, scaffolding'i bilir, transfer/internalization arasındaki farkı tanır. Sıradan kullanıcı için "sana öğreteyim" tasarımı onda işlemez — o **konu öğretilirken kendi öğretim modelini de değerlendirir**. Kötü pedagojiyi anında fark eder, sistemden uzaklaşır. İyi tasarım onun için **estetik tatmin**.

**1.1. Mikroöğrenme (Khan).** 30-90 saniyelik birim, **tek mekanizma**. "Hipertrofi + protein sentezi + mTOR + glikojen" tek metinde verilirse load patlar. Tek fikir = tek mikroünite. Glossary terimleri arası link → öğrenci kendi yolunu açar (Khan knowledge map).

**1.2. Mayer çoklu ortam ilkeleri.** En kritik beş tanesi: **Coherence** (gereksiz dekorasyon yok), **Signaling** (önemli kelime bold + renk), **Modality** (görsel + yazı > tek başına yazı), **Pre-training** (terim ana açıklama öncesi tooltip), **Personalization** ("sen", "vücudun" — öğrenmeyi %20-25 artırır, Mayer & Estrella 2014).

**1.3. Sweller bilişsel yük.** Antrenman ânı yüksek intrinsic + extraneous yüklü. Tasarım kuralı:
- Antrenman ânı: **maksimum 1 cümle ipucu**
- Antrenman öncesi (warmup): 2-3 paragraf OK
- Antrenman sonrası (cooldown reflection): 5-10 paragraf OK
- Geceleyin "Bu hafta odak": en derin format

**1.4. Vygotsky ZPD.** Bengisu ZPD üst sınırı L3. L1 onun altında (regression — sıkılır), L2 konfor (yumuşak öğrenme), L3 challenging (yeni öğrenme). **Sistem:** L2 default + L3 toggle = "konfor + büyüme" iki seçenek aynı anda.

**1.5. Dweck büyüme zihniyeti.** Karşılaştırma:
- ✗ Sabit ton: "Hipertrofi olur. Kas büyür."
- ✓ Büyüme ton: "Bu repi çekerken kas lifin minik travmalar alıyor. Sonraki 24-48 saat onarım fazı — protein sentezi yükseliyor, lif daha kalın geri inşa ediliyor. Şu an dinlenirken bile **gelişiyorsun**."

İkincisi aynı bilim + zaman boyutu (süreç) + agency hissi. Dweck longitudinal: büyüme zihniyetinde challenge engagement %30 yüksek.

**1.6. Bengisu'nun pedagog kimliği.** İki gözle okur: hasta gözü (içerik) + pedagog gözü (öğretim tasarımı). Tasarım: açıklama kendi öğretim mantığına atıfta bulunabilir ("antrenman ânındasın, kısa tuttuk; akşam reflection'da derinine bakabilirsin"). Glossary altına opsiyonel "Pedagojik notlar" toggle: "Mikroöğrenme prensipleri kullanıyoruz..." Bu çoğu kullanıcı için gereksiz, Bengisu için fark yaratır.

---

## 2. Mevcut Uygulamanın Eğitim Eksikleri

`index.html` (≈4500 satır) analizi:

1. **Egzersiz açıklamaları düz cümle.** Sat 1514: `h:'Bench\'e dayan. Kalçaya doğru çek. Sırt kasını hisset.'` — form ipucu, mekanizma yok. "Hangi kas? Latissimus mu rhomboid mi? Hangisi primer? Neden bu açı?" cevapsız.

2. **Beslenme açıklamaları "ne" düzeyinde, "neden" yok.** Sat 1318: regl açıklaması "kırmızı et + ciğer · demir + B12". Heme demir mi non-heme mi? Reglde demir kaybı kaç mg (15-30 mg, Hallberg 1991)? Ciğerdeki heme 2-3x daha iyi emilir — açıklanmamış.

3. **Faz mantığı yüzeysel.** Sat 1322 ovulasyon: "östrojen yüksek · protein vurgu". Neden? Östrojen-protein sentezi sinerjisi (Hansen 2017): mTOR yanıtı +%15 — yüksek östrojen + protein = hipertrofi penceresi. Mekanizma metni 2-3 cümle, eksik.

4. **Supplement açıklamaları "doz + zaman" düzeyinde, "ne yapar" yok.** Kreatin (sat 1656): "5g/gün, 3L+ su". **Neden?** Phosphocreatine sistemi ATP'yi 5-10 sn'de yeniler. Suplement kas içi PCr deposunu %15-30 ↑ → set başına 1-2 ekstra rep (Kreider 2017 ISSN). Bengisu'ya hiç söylenmiyor.

5. **Tiroidektomi fizyolojisi söylenmiyor.** "Levotiron al, ilaca uy" var. Ama T4 → T3 periferal dönüşüm (deiodinaz tip 1+2) sınırlı; serum T3 ortalama %15-30 düşük (Wiersinga 2014). Bu **BMR neden hâlâ %5-10 düşük** açıklar. Bengisu bu mekanizmayı bilseydi "ilaç tiroidi yerine geçiyor" miti erken çürürdü — Ajan 6 4.2 psikolojik travma azalırdı.

6. **Öğrenme penceresi sadece tüketici-merkezli.** "Uygulama söyler, kullanıcı yapar". Sorgu yapısı yok. "Neden?" tıklayabileceği yer yok. Pedagog için pasif tüketici rolü yıpratıcı.

7. **Mevcut metinlerin seviyesi L1 civarında — Bengisu için 2-3 katman düşük.** Yararlı olan **L2** (lisans) + opsiyonel **L3** (advanced).

---

## 3. "Tıkla, Öğren" Mimarisi — UX Patterns

Altı pattern, her biri farklı cognitive load profili + farklı flow noktası için.

**3.1. ⓘ ikon — inline expand.** Egzersiz/yemek/faz/supplement başlığında. Tıkla → **inline accordion** (modal değil, bağlam korunur). 2-3 paragraf L2 metni. Footer'da "L3 aç" linki. Cognitive load: düşük (isteğe bağlı). Konum: her kart başlığında.

**3.2. "Bilim modu" toggle — global açma/kapama.** Settings'te `educationLevel: 'L1' | 'L2' | 'L3'`. Toggle ON: **teknik terimlerin altı çizilir** — tıklanırsa popover (1-2 cümle hızlı tanım + glossary linki). Mayer pre-training prensibi.

**3.3. Glossary — 50-80 terim kategori-bazlı.** 5 kategori: Kas grupları (15-20) | Makrolar/besinler (15-20) | Hormonlar (10-15) | Antrenman terminolojisi (15-20) | Tiroidektomi-spesifik (5-10). Her terim: **L1 hızlı + L2 derin + L3 ileri**. Cross-link: terim içi terimler tıklanabilir. Search + filter. Bonus: kavram haritası görseli (knowledge graph).

**3.4. Etkileşimli kas haritası.** SVG body diagram, ön + arka view. Kas tıklandığında modal: TR + Latince adı (örn. "Kalça Kası — Gluteus Maximus") · ne yapar (kalça ekstansiyonu, dış rotasyon) · bu uygulamada hangi günler/hareketler · L2 mini açıklama. Pedagog için hediye.

**3.5. Haftalık "Bu hafta odak" kartı.** Pazartesi sabah dashboard'da otomatik. 200-400 kelime kart cycle fazına göre. Yapı: faz başlığı + hormon profili + fizyolojik durum + antrenman implikasyonu + beslenme implikasyonu + risk/dikkat. Bengisu için **uygulamanın derin değer noktası** — pedagog ders planı kalitesinde 1 sayfa.

**3.6. Mikro-balon — set arasında 1 ipucu.** Antrenman ânında. Set 1 sonrası 90 sn dinlenmede üst banner: "**Smith Squat ipucu** — Bar omuzlarda nedeni: serratus anterior + üst trapez paketi." 1 cümle, 1 mekanizma. Sonraki set RPE girilince kapanır. Maksimum hareket başına 2-3 = antrenman başına ~12 mikro-balon.

---

## 4. Bilim Mod Taksonomi — Üç Seviye

**L1 — Lay (lise altı).** Günlük Türkçe, teknik terim minimum. "Kas büyüme. Yağ yakma. Kemik güçlenme." Yaşlı kullanıcı / tıbbi okuryazarlık düşük için. Bengisu için: **gizlenmiş** (Settings → "Yaşlı aile üyesi modu").

**L2 — Intermediate (lisans).** Temel tıbbi/fizyolojik terim, mekanizma açıklamalı. "Hipertrofi (kas büyüme) iki ana tetikleyicisi: mekanik gerilim + metabolik stres. Squat'ta ağır yük → kas lifinde mekanik gerilim → mTOR yolu aktif → protein sentezi rampa." Terimler ilk geçişte parantez içi tanımlı. Bengisu için: **default**.

**L3 — Advanced (MSc+).** Tam terminoloji, biyokimya, kanıt seviyesi notu. "Mekanik gerilim → integrin-FAK kompleksi → mTORC1 fosforilasyonu → S6K1 + 4EBP1 substratı → 5'TOP mRNA translasyonu → ribozom biyogenezi (Schoenfeld 2019). (B-orta kanıt)." Bengisu için: **toggle** Settings'te "Bilim modu derin" checkbox.

**Geçiş kuralları:** Default L2 + onboarding'te 3 seçenek mini quiz ("Egzersiz benim için yeni" → L1, "Salonda gidiyorum" → L2, "Spor bilimi okudum/araştırırım" → L3). L2 metnindeki advanced terimler underline + tıkla → L3 popover (geçici). Her zaman değiştirilebilir.

---

## 5. Mikro-Açıklama Örnekleri (5 Hareket)

Format: **Kısa (2 cümle ⓘ tıklamadan görünen)** + **Derin L2 (anatomi/biyomekanik/metabolik)** + **Yaygın yanlış kavram** + **L3 ileri (toggle ON)**.

### 5.1. Smith Machine Squat

**Kısa:** Quadriceps + glute primer, alt vücudun temel hareketi. Smith makinesinde sabit yörünge → form öğrenmek için dengeli giriş.

**Derin L2:** *Anatomi:* 5 kas grubu sıralı yüklenir. Quadriceps (vastus medialis/lateralis/intermedius, rectus femoris) diz ekstansiyonu. Gluteus maximus kalça ekstansiyonu. Adduktör duruşa stabilite. Erector spinae gövde dik. Core (TVA + obliques) intra-abdominal basınç. *Biyomekanik:* Diz fleksiyonu + kalça fleksiyonu eş zamanlı. İner: kalça arkaya, diz öne, gövde 30-45° eğim. Smith bar yörüngesini sabit kılar — vücut bara uyum sağlar. Avantaj: form bozulamaz; dezavantaj: doğal ROM kısıtlanabilir. *Metabolik:* Compound, yüksek motor ünite katılımı, ~9-12 kcal/dk. mTOR aktivasyonu yüksek — hipertrofi sinyali güçlü.

**Yaygın yanlış kavram:** "Squat dizi bozar" → **YANLIŞ.** Dizleri bozan **kötü form**. McGill 2007 + Hartmann 2013 meta: derin squat doğru hizalama ile **diz kıkırdağına yararlı** (sinovyal sıvı sirkülasyonu ↑). Yanlış: valgus collapse, bel kavislenmesi, topuk kalkması.

**L3 ileri:** mTORC1 mekanik gerilim yolu — integrin-FAK-PA-mTORC1. PI3K-AKT bypass edilebilir doğrudan mekanik yük yoluyla (Hornberger 2006). 8-12 set/hafta = MEV-MAV (Israetel 2018). Erken faz adaptasyon **nöral**, geç faz **morfolojik**.

### 5.2. Romanian Deadlift (RDL)

**Kısa:** Hamstring + glute hinge hareketi. Bel ile karıştırma — hareket kalçadan, omurga sabit.

**Derin L2:** *Anatomi:* Posterior chain — hamstring (semitendinosus, semimembranosus, biceps femoris) + glute max + erector spinae. Eccentric (uzayarak) iniş kontrolünde, concentric kalkış. *Biyomekanik:* Hip hinge — kalça mafsal hareketi, diz hafif bükük (10-15°) ve sabit. Bar bacağa yakın iner. Omurga **nötr** tüm hareket boyu. Bel hareket etmeyecek, kalça hareket edecek. *Metabolik:* Hamstring derin lif aktivasyonu yüksek (Schoenfeld 2014 EMG). Hip hinge transfer değeri yüksek (yer kaldırma, kucaklama).

**Yaygın yanlış kavram:** "RDL bel egzersizi" → **YANLIŞ.** Bel **çalışmaz**, **sabit kalır** (izometrik). Egzersiz hamstring + glute. "Bel yandı" → form yanlış, hinge değil rotasyon.

**L3 ileri:** Lumbar disk shear minimum için McGill 2007 iki kuralı: nefes tut + nötr omurga. Hamstring eccentric — kas-tendon ünitesi pliometrik kapasite. Kollajen sentezi östrojen-aracılı (Hansen 2017) → folliküler/ovulasyon fazında daha verimli.

### 5.3. Hip Thrust

**Kısa:** Glute izolasyon kralı. Kalça ekstansiyonu maksimum yük altında.

**Derin L2:** *Anatomi:* Glute max'in **en yüksek EMG aktivasyonu** hip thrust'ta (Contreras 2015) — squat ve deadlift'ten **daha yüksek**. Hareket izole: diz ve bel sabit. *Biyomekanik:* Sırt bench üstü, ayaklar yerde, bar pelvis üstü. Kalkış: kalça yukarı (omurga nötr, ekstra kavislenme yok). Top pozisyon 1-2 sn squeeze = aktivasyon zirvesi. *Metabolik:* Glute max vücudun en büyük tek kası (~700-1100 cm³ kadın). Hipertrofiye en hızlı yanıt; 6-8 haftada belirgin değişim.

**Yaygın yanlış kavram:** "Hip thrust kompleks değil, gerçek hareket squat" → **YANLIŞ.** İzolasyon ≠ küçük hareket. Glute izolasyonunda hip thrust kanıt-bazlı en yüksek EMG. Squat quad-baskın, hip thrust glute-baskın. **İkisi farklı, ikisi gerekli.**

**L3 ileri:** Glute max üç bölüm (superior, medial, inferior); hip thrust ayak konumu farklı bölüm vurgu. Posterior pelvic tilt → maksimum aktivasyon (Contreras "Squeeze technique"). Femur boynu yatay yük → **bone loading** verimli (post-tiroidektomi KMY için kritik, Beck 2017 PMID 27875836).

### 5.4. Lat Pulldown

**Kısa:** Sırt + bicep çekme hareketi. Latissimus dorsi (sırt kanatları) ana hedef.

**Derin L2:** *Anatomi:* Latissimus dorsi vücudun en geniş kası (adduction + extension + internal rotation). Trapezius orta+alt + rhomboids scapular retraction. Biceps brachii + brachialis dirsek fleksiyonu. *Biyomekanik:* Bar göğse (clavicle hizası), **boyun arkasına değil** (omuz impingement + sevikal yük). Dirsek aşağı + içe. Bilek nötr. Top pozisyon: bar göğüs, kürekler birbirine, lat kasılmış. Eccentric kontrollü, 2 sn. *Metabolik:* Üst vücut çekme — push antagonisti. Modern oturma kültürü ön-baskın (göğüs sıkı, sırt zayıf), sırt çekme bunu dengeler.

**Yaygın yanlış kavram:** "Bar boyun arkasına çekmek lat'ı daha çok çalıştırır" → **YANLIŞ.** Omuz kapsülü impingement + sevikal ekstrem yük. EMG fark minimum (Lehman 2004), risk maksimum. Modern öneri: bar göğse, hep göğse.

**L3 ileri:** Lat lifleri mültifibriler — farklı çekme açıları farklı demetleri aktive eder. Geniş tutuş + bar göğse = lat üst. Dar tutuş + bar göbeğe = lat alt + rhomboid. 2-3 farklı çekme/hafta = full lat hipertrofi (Schoenfeld 2017 multi-angle).

### 5.5. Pallof Press

**Kısa:** Anti-rotasyon core izolasyonu. Statik egzersiz — hareket değil, hareketi durduruyorsun.

**Derin L2:** *Anatomi:* Transversus abdominis + internal/external obliques + multifidus (derin omurga stabilizatörü). Klasik crunch yatay rectus abdominis ("six-pack") çalıştırır; Pallof press **derin core** — omurga koruma için fonksiyonel kas. *Biyomekanik:* Cable yandan, kollar göğüs hizası, bar dik öne ittirilir. Cable seni **döndürmek** ister — sen **dönmemek** için core izometrik kasılır. *Metabolik:* Düşük enerji, yüksek nöromüsküler. Postür stabilizasyon mimarisi gelişir. Squat/deadlift core stabilite carry-over yüksek.

**Yaygın yanlış kavram:** "Crunch core'u en iyi çalıştırır" → **YANLIŞ.** Crunch flexor pattern — modern oturma zaten bu. McGill 2007 anti-rotation/anti-extension önerir. Pallof press fonksiyonel + bel-friendly (lumbar fleksiyon yok). Crunch ≠ kötü ama tek başına yetersiz.

**L3 ileri:** McGill "Big 3" (curl-up, side bridge, bird dog) + Pallof = lumbar disk yük min + nöromüsküler core entegrasyon max. Anti-rotation transferi: tek-bacak hareketler, athletic cutting, postür koruma. EMG (Boren 2011): Pallof press external oblique aktivasyonu yüksek, lumbar disk shear minimum.

---

## 6. Cycle ve Beslenme için Bilim-Açıklama Framework

**6.1. Faz açıklamaları paragraf format.** Örnek **Folliküler (Day 6-13):**
> Östradiol fizyolojik olarak yükselişte: Day 6 ~50 pg/mL, Day 13 zirvesi ~250-400. Bu "üreme" değil **anabolik** hormon. Kollajen sentezi (cilt/ligament/kemik), kas protein sentezi (mTOR yanıtı +%15), insülin duyarlılığı, serotonin, bilişsel performans ↑. T3 dönüşümü periferal verimli — Levotiron monoterapide endojen sinyal sınırlı, ama insülin/protein/mood kazanımı var. **Pratik:** kuvvet kazancı için en uygun pencere, PR denemek için en ehven faz, motor öğrenme keskin (östrojen → BDNF → hipokampus).

**6.2. Makro hedef "neden bu sayı".** Örnek **Protein 160g/gün:**
> Bengisu LBM ~52 kg. Sims kadın atlet 2.0 g/kg LBM = 104g; ama tiroidektomi + kalori açığı + hızlı kayıp = **muscle preservation premium**. Phillips 2017 (PMID 28290237) deficitte 2.3-3.1 g/kg LBM öneriyor. 160g = 3.0 g/kg LBM — agresif ama doğru. 4 öğüne dağıtılır (per-meal 30-50g, leucine threshold ~3g/öğün; Trommelen 2023).

**6.3. Supplement "ne yapar" açıklamaları.**

**Levotiron:** Sentetik T4. Vücut periferal olarak (deiodinaz tip 1+2) T3'e çevirir. T3 aktif: mitokondri biyogenezi, protein sentezi, BMR, kemik döngüsü. **Kritik:** monoterapi T3'ü tam normalize etmez (~%15-30 düşük; Wiersinga 2014). BMR neden hâlâ düşük cevabı.

**Calciday:** Profilaktik Ca + D3. Hipoparatiroidi tanın **yok**, ama tiroidektomi cerrahisinde paratiroid bezleri minik travma alabilir, ihtiyat klinik standart. D3 + Ca kemik mineralizasyonu + nöromüsküler ileti. Kalsitriol (1,25-OH₂-D) bağırsakta TRPV6 transporter upregüle.

**Kreatin:** Kas içi PCr deposunu doldurur. ATP-PCr enerji sistemi (ilk 5-10 sn ana yakıt). %15-30 ↑ → set başına 1-2 ekstra rep, 5-8 hafta sonu kuvvet +%5-10 + kas +%1-2. Kadın için kanıt güçlü (Smith-Ryan 2021, PMID 33571627). Su artar (yağ değil!) — ilk 2-3 hafta tartı +0.8-1.5 kg normaldir.

**6.4. Tiroidektomi sonrası fizyoloji — şeffaf + kontrol verici.**
> Total tiroidektomi sonrası vücudun tiroid hormonu üretmiyor. Levotiron (T4) eksiklik kapatır, ama %100 fizyolojik replikasyon değil. Doğal tiroid T4+T3 birlikte ve pulsatif üretir; Levotiron sabit T4 girişi sağlar. Periferal dokular T4'ü T3'e çevirir (deiodinaz). Sistem **iyi çalışır ama optimal değil** — T3 ortalama %15-30 düşük (Wiersinga 2014).
> 
> **Pratik:** BMR senin yaşında tiroid sağlam kadından %5-10 düşük — kilo kaybı **biyolojik olarak yavaş**. Hızlı kilo kaybı T3'ü daha da baskılayabilir (RED-S, Ajan 1 #2). Kuvvet antrenmanı kemik koruma için kritik. TSH + sT3 + sT4 3-6 ayda bir.
> 
> **Bu seni tanımlamıyor.** Bengisu olarak sen, tiroid + Levotiron sistem birlikte hareket eden bir bütünsün. "Eksik" değil, "farklı işleyiş".

---

## 7. Glossary Tasarım Önerisi (15 Terim Örneği)

```
**RPE (Rate of Perceived Exertion)** [Antrenman]
L1: Çabanın ne kadar zor hissettiği. 1=kolay, 10=max.
L2: 1-10 ölçeği. Hipertrofi için RPE 7-8 (RIR 2-3) ideal. Helms 2018.
L3: Otoregülasyon — Zourdos validasyonu (PMID 26605807). Cycle, uyku, stres etkili.

**RIR (Reps in Reserve)** [Antrenman]
L1: Set sonunda kalan rep sayısı.
L2: RIR 2 = 2 rep daha çekebilirdin. Hipertrofi için RIR 0-3 ideal.
L3: RIR-RPE eşdeğerlik: RIR 0 = RPE 10, RIR 1 = RPE 9, RIR 2 = RPE 8.

**Hipertrofi** [Kas]
L1: Kas büyümesi.
L2: Kas lifi enine kesit alanının artışı. İki tetikleyici: mekanik gerilim + metabolik stres. Schoenfeld 2010.
L3: Myofibrillar PS + sarkoplazmik PS. mTORC1-S6K1 axisi. Sarkomer paralel + seri eklenmesi.

**Glikojen** [Beslenme]
L1: Kasın depo karbonhidratı.
L2: Kas içi glikoz polimeri. Karb alımı ile dolar, ağır antrenman ile boşalır. ~400-500g toplam.
L3: Glikojen sentaz insülin-stimüle. Antrenman sonrası 30-60 dk sentaz aktivasyonu zirvesi (anabolik pencere). Karnivor diyette kapasite %60-70 (Phinney 1983).

**T3 (Triiyodotironin)** [Hormon]
L1: Tiroidin aktif hormonu.
L2: 3 iyot atomu içeren tiroid hormonu. T4'ten dönüşür. BMR, kalp atışı, protein sentezi etkilenir.
L3: Deiodinaz D1 (periferal) + D2 (hücre içi). Nükleer reseptör (TRα/β) → gen ekspresyonu. Levotiron monoterapi T3'ü %15-30 düşürür (Wiersinga 2014).

**Östrojen (Estradiol)** [Hormon]
L1: Kadın üreme hormonu, cycle boyu değişir.
L2: Folliküler ↑, ovulasyon zirve, luteal 2. tepe (Day 21). Anabolik — kollajen, kas PS, kemik.
L3: ER-α + ER-β reseptörleri. Kollajen tip 1+3 sentezi. mTOR yanıtı modülasyon. Hansen 2017.

**Progesteron** [Hormon]
L1: Luteal hormonu, sakinleştirici.
L2: Ovulasyon sonrası corpus luteum. BMR +%2-12, bazal ısı +0.3-0.5°C.
L3: PR-A + PR-B. GABA-A allosterik modülatör (allopregnanolon) — anksiyolitik. Plasma volume %5-8 ↓ (Stachenfeld 2008).

**Glute (Gluteus maximus)** [Kas]
L1: Kalça kası, vücudun en büyük tek kası.
L2: Kalça ekstansiyonu, dış rotasyon. Hip thrust EMG en yüksek.
L3: Üç bölüm (superior, medial, inferior). Janda 1987 "gluteal amnesia". Contreras 2015.

**Lat (Latissimus dorsi)** [Kas]
L1: Sırt kanat kası.
L2: Vücudun en geniş kası. Adduction + extension + internal rotation.
L3: Multifibriler — multi-angle hypertrophy. Üst lifler (humerus) + alt lifler (iliac crest).

**Quadriceps** [Kas]
L1: Ön bacak kası, diz açar.
L2: 4 kas (vastus + rectus femoris). Diz ekstansiyonu.
L3: VMO patellofemoral tracking için kritik. Rectus femoris bi-articular.

**Hamstring** [Kas]
L1: Arka bacak kası, diz büker, kalça açar.
L2: 3 kas (semitendinosus, semimembranosus, biceps femoris). Bi-articular.
L3: Eccentric kapasite > concentric. ACL koruma için Hewett.

**Compound vs İzolasyon** [Antrenman]
L1: Compound = çoklu eklem (squat). İzolasyon = tek eklem (leg curl).
L2: Compound çoklu kas, yüksek motor ünite. İzolasyon lokal hipertrofi.
L3: Mechanism stacking (mekanik gerilim + metabolik stres + kas hasarı, Schoenfeld 2010).

**Eccentric vs Concentric** [Antrenman]
L1: Eccentric = uzayarak (iniş). Concentric = kısalırarak (kalkış).
L2: Eccentric kuvvet capacity %30-40 yüksek. Eccentric kontrol = kas hasarı + hipertrofi.
L3: Eccentric overload (Roig 2009). Stretch-shortening cycle (SSC).

**MEV / MAV / MRV** [Antrenman]
L1: Haftalık set sayısı bandları.
L2: Israetel sistem. MEV (minimum), MAV (orta-optimal), MRV (recovery limit).
L3: Bireysel + kas grubu spesifik. Kadında glute MAV 12-16, sırt 14-18. Deficit'te MEV-MAV/2.

**RED-S** [Beslenme]
L1: Düşük enerji alımı sendromu, kadın atletlerde yaygın.
L2: Energy availability < 30 kcal/kg LBM/gün. Hormon, kemik, immün, performans bozulur.
L3: GnRH suppression → LH/FSH ↓ → östrojen/progesteron ↓ → kemik kaybı + amenore + T3 ↓. Mountjoy 2023.
```

Final hedef 50-80 terim. Kategoriler: Tiroidektomi-spesifik (Levotiron, deiodinaz, calcitriol), kas grupları (calf, biceps, triceps, deltoid, core), antrenman (set, rep, intensity, frequency, deload, peak, periodization), beslenme (BMR, BMI, EA, refeed, anabolic window, MPS), supplement (Mg, kollajen, çinko, B12, demir).

---

## 8. "Bu Hafta Odak" Haftalık Kart Örnekleri

Pazartesi sabah dashboard'da otomatik. 4 farklı format cycle haftasına göre.

### 8.1. Folliküler Hafta (Day 6-13) — 🌱 Yükseliş

**Vücudunda neler oluyor:** Östradiol 50 → 250-400 pg/mL. Kollajen sentezi rampa. Kas protein sentezi mTOR +%15 (Hansen 2017). T3 dönüşümü periferal verimli (Levotiron için sınırlı, ama insülin/mood kazanımı). BDNF ↑ → motor öğrenme keskin.

**Antrenman:** PR penceresi açık. Squat/RDL'de yeni rep PR. Volume +%10 (kas grubu başına 14-18 set). HIIT, plyometrik, sprint OK. Yeni hareket öğrenmek için ideal.

**Beslenme:** Baseline 1850 kcal. Karb 40g standart. Protein 160g öncelik (folliküler PS yanıtı yüksek).

**Risk/dikkat:** Folliküler fazda kendine sert olmamak yaygın (Sims 2022). Yeni PR çekersen "minimum bu" düşünme — bu pic, devamı geç-luteal yumuşar.

### 8.2. Ovulasyon Haftası (Day 13-16) — ☀️ Pik + Dikkat

**Vücudunda neler oluyor:** LH pik → ovulasyon. Östradiol 1. tepesi zirvede. **Ligament gevşekliği +%30-50** (Wojtys 1998, Hewett 2007). ACL non-contact yaralanma riski 2-3x (Lefevre 2013). Bazal ısı yükselmeye başlar. Force production zirvesinde — eklem stabilitesi azalmış.

**Antrenman:** **Bilateral compound OK** (Smith squat, hip thrust, leg press) — sabit yörünge. **Tek-bacak dikkat** — Bulgarian split, single-leg HT, step-up: TRX/duvar destekli, ROM kısalt. Plyometrik dikkat — box jump yerine box step-down. RDL trap-bar'a swap. Squat depth full ROM yerine parallel.

**Beslenme:** +50 kcal cycle bonusu (1900 kcal). Protein vurgu. Omega-3 öne çık (anti-inflamatuar, ovulatuar inflamasyon hafifletir). Mg 300-350 mg.

**Risk/dikkat:** **Bu hafta tek-bacak hareketlerde ekstra dikkat.** Ligament gevşek = eklem **toleransı** düşüyor. Smith squat ve makine bu hafta tercih.

### 8.3. Erken Luteal (Day 17-21) — 🌒 Geçiş

**Vücudunda neler oluyor:** Progesteron ↑ → BMR +%2-12, bazal ısı +0.3°C. Östradiol 2. tepe (Day 21). Plasma volume ↓ %5. GI motilite ↓. İnsülin duyarlılığı orta. Fat oxidation rampa.

**Antrenman:** Volume + intensity baseline (referans plan). HIIT OK ama ısı yönetimi şart. Yürüyüş 7-8 km, sıcaksa erken.

**Beslenme:** +50 kcal bonus (1900 kcal). Karb baseline yeterli. Açlık daha hızlı gelebilir (BMR ↑) — 1. öğüne ek 50g et OK. Hidrasyon +500 ml.

**Risk/dikkat:** "Hiçbir şey hissetmiyorum, neden?" yaygın. Cycle linear değil, transition. Sabit kal.

### 8.4. Geç Luteal + Regl (Day 22-Day 5) — 🌚 Yumuşama

**Vücudunda neler oluyor:** Progesteron PEAK ~Day 22 → düşüş. Östradiol düşüşte. Kortizol AUC +%15-20 (hormon withdrawal). BMR +%2-12. Plasma volume ↓ %8. İnsülin duyarlılığı en düşük. Termoreg bozuluyor. Day 1-2: prostaglandin → kramp + Hb ↓ 0.5 g/dL (kan kaybı).

**Antrenman:** **Volume -%10-15** (kas başına 10-15 set). **Intensity -%5-10** (planlanan ağırlığın %85-95'i). Set sayısı koru, ağırlığı düşür (Sims). HIIT toleransı düşer. **Day 1-2 deload/rest** — yürüyüş 5-6 km, mobility, yoga. **Day 3-5 kademeli geri dönüş.**

**Beslenme:** **+150 kcal bonus** (2000 kcal) + **+20g karb** (60g toplam) (commit `ffb2619` ile güncellendi: BMR +%8-12 + EA hesabıyla doğrulandı). **Day 1-2: Demir ön plan** — kırmızı et + ciğer (heme demir 7-12 mg/200g). Tuz +1-2g (kan kaybı sodyum). Mg 350-400 mg (kramp). Kafein min.

**Risk/dikkat:** **"Hedef geri gitti" hissi yaygın — su tutma 1-2.5 kg (Stachenfeld 2008).** Yağ değil sıvı. Day 6-8 sonrası tartı düzelir. **Bu hafta kg'ya bakma — uyku + enerji + ağrı eşiği takip et.**

---

## 9. Mevcut Kod Entegrasyonu

`index.html` mevcut yapıya minimum değişiklikle eğitim katmanı.

```js
const EXERCISE_EDU = {
  smithSquat: {
    short: 'Quadriceps + glute primer, alt vücudun temel hareketi.',
    deepL2: { anatomy:'...', biomechanic:'...', metabolic:'...' },
    misconception: 'Squat dizi bozar değil, yanlış form bozar.',
    deepL3: 'mTORC1 mekanik gerilim yolu...',
    relatedTerms: ['hipertrofi','mTOR','glute','quadriceps'],
    cyclePhase: { ovulation: 'Smith iyi (sabit yörünge, ACL koruma).' }
  },
  // rdl, hipThrust, latPulldown, pallofPress, ...
};

const FOOD_EDU = {
  liver: {
    short: 'Heme demir + B12 + retinol kralı.',
    deepL2: '200g\'da heme demir 7-12mg + B12 60µg + retinol 14000µg...',
    timing: 'Reglde Day 1-2 zorunlu.',
    pairings: ['Vit C ile (emilim ↑)','Kalsiyumdan ayrı saatte'],
  },
  // honey, ...
};

const SUPP_EDU = {
  levothyroxine: {
    name: 'Levotiron', chemicalName: 'Levothyroxine sodium (T4)',
    short: 'Sentetik T4. Tiroid bezi yokluğunda yerine koyar.',
    mechanism: 'Periferal deiodinaz T4 → T3...',
    timing: 'Sabah 06:30 aç, 30-60 dk sonra yiyecek + Calciday 4 saat ara.',
    pitfall: 'Monoterapi T3 %15-30 düşük (Wiersinga 2014).',
  },
  // creatine, calciday, ...
};

const PHASE_EDU = {
  follicular: {
    title: '🌱 Folliküler — Yükseliş',
    hormoneProfile: 'Östradiol 50 → 250-400 pg/mL...',
    physiology: 'Kollajen rampa, mTOR +%15...',
    trainingImpact: 'PR penceresi, volume +%10 OK',
    nutritionImpact: 'Baseline 1850 kcal',
    risks: 'Kendine sert olmama riski',
    weeklyFocus: { /* full text §8 */ },
  },
  // ovulation, earlyLuteal, lateLuteal, menstruation
};

const GLOSSARY = {
  rpe: {
    term: 'RPE', category: 'training',
    L1: 'Çabanın ne kadar zor hissettiği.',
    L2: '1-10 ölçeği. Hipertrofi için RPE 7-8...',
    L3: 'Otoregülasyon — Zourdos PMID 26605807...',
    related: ['rir','volume','intensity'],
  },
  // 50-80 term
};

function getEducationLevel() { return localStorage.getItem('eduLevel') || 'L2'; }
function setEducationLevel(level) { localStorage.setItem('eduLevel', level); reRenderApp(); }
function renderInfoIcon(topic, type='exercise') { 
  return `<button class="info-icon" data-topic="${topic}" data-type="${type}">ⓘ</button>`;
}
function renderEducationContent(topic, type, level=getEducationLevel()) {
  const db = type==='exercise'?EXERCISE_EDU : type==='food'?FOOD_EDU : type==='supplement'?SUPP_EDU : type==='phase'?PHASE_EDU : GLOSSARY;
  const item = db[topic]; if (!item) return '';
  let html = `<div class="edu-content"><div class="edu-short">${item.short}</div>`;
  if (level==='L2'||level==='L3') {
    html += `<div class="edu-deep">${item.deepL2||item.L2}</div>`;
    if (item.misconception) html += `<div class="edu-misconception">⚠️ ${item.misconception}</div>`;
  }
  if (level==='L3' && item.deepL3) html += `<div class="edu-advanced">${item.deepL3}</div>`;
  return html + '</div>';
}
function getWeeklyFocus(d) {
  const phase = ci(d).phase;
  if (phase==='Follicular Phase') return PHASE_EDU.follicular.weeklyFocus;
  if (phase==='Ovulation') return PHASE_EDU.ovulation.weeklyFocus;
  // ...
}
```

CSS minimum:
```css
.info-icon { width:22px; height:22px; border-radius:50%; background:var(--cream-soft); color:var(--text-mid); border:none; cursor:pointer; font-size:14px; }
.edu-content { background:var(--cream-soft); border-radius:12px; padding:16px; margin-top:8px; font-size:14px; line-height:1.6; }
.edu-short { font-weight:600; margin-bottom:8px; }
.edu-misconception { background:rgba(217,89,30,0.12); border-left:3px solid var(--accent); padding:10px 12px; border-radius:8px; margin:12px 0; }
.edu-advanced { background:rgba(122,155,106,0.10); border-left:3px solid var(--green); padding:10px 12px; border-radius:8px; font-size:13px; color:var(--text-mid); }
.glossary-term-link { text-decoration:underline; text-decoration-style:dotted; cursor:pointer; color:var(--accent); }
```

---

## 10. Öneriler P0 / P1 / P2

**P0 (kritik, 1-2 hafta):**
1. **L2 default seviyesi tasarımı.** Mevcut L1; her egzersiz/supplement/faz için 2-3 paragraf mekanizma ekle.
2. **ⓘ ikon + inline expand pattern.** Her kart başlığında. Modal değil.
3. **Tiroidektomi fizyoloji kartı.** Onboarding sonrası "Bedenim ve Tiroidim" — Levotiron + T4→T3 dönüşümü + monoterapi sınırı + Calciday rationale.
4. **Cycle faz açıklamaları derinleştir.** PHASE_EDU şeması — her faz için 200-400 kelime.

**P1 (önemli, 2-4 hafta):**
5. **"Bu hafta odak" haftalık kartı.** Pazartesi sabah otomatik. 4 cycle hafta formatı (§8).
6. **Glossary 30+ terim.** Kategori-bazlı, search + filter, cross-link.
7. **L3 toggle "Bilim modu derin".** İlk 10-15 ana terim için.
8. **Yaygın yanlış kavram kutuları.** Her egzersiz altında.

**P2 (zenginleştirme, 1-3 ay):**
9. **Etkileşimli kas haritası.** SVG body diagram + tıklanabilir.
10. **Mikro-açıklama set arası balonları.** 1-cümle ipucu pattern.
11. **Glossary tam 50-80 terim.**
12. **Knowledge graph görsel** (kavram haritası).
13. **"Pedagojik notlar" toggle** — Bengisu-spesifik meta-katman.

---

## 11. Açık Sorular (Bengisu için)

1. **L2 default + L3 toggle uygun mu?** Yoksa direkt L3 default mi?
2. **ⓘ ikon inline expand mi modal mi?** Inline bağlam korur, modal odaklanma yüksek.
3. **Glossary konumu:** ayrı sekme mi (5. sekme: Sözlük) yoksa Settings altında mı?
4. **Kanıt seviyesi notu görünür mi?** "B-orta kanıt, RCT'ler tutarlı" — pedagog için faydalı, sıradan kullanıcı için load.
5. **Pedagojik notlar (meta-katman) ister misin?** "Neden böyle anlatıyoruz" özel madde.
6. **Haftalık "Bu hafta odak" kartı:** Pazartesi otomatik mı, manuel mı?
7. **Mikro-açıklama set arası balonları:** ekstra bilişsel yük antrenman ânında — gerekli mi?
8. **Anlatım dili "sen" kalsın mı?** Mevcut sacred feminine ton + Mayer personalization +%20 öğrenme → evet.

---

## 12. Kaynaklar

- **Mayer, R. E.** (2014). *Cambridge Handbook of Multimedia Learning* (2nd ed.). Cambridge UP.
- **Sweller, J., Ayres, P., & Kalyuga, S.** (2011). *Cognitive Load Theory*. Springer.
- **Vygotsky, L. S.** (1978). *Mind in Society*. Harvard UP.
- **Bruner, J. S., Wood, D., & Ross, G.** (1976). The role of tutoring in problem solving. *J Child Psychol Psychiatry* 17(2), 89-100.
- **Dweck, C. S.** (2006). *Mindset: The New Psychology of Success*. Random House.
- **Khan, S.** (2012). *The One World Schoolhouse*. Twelve.
- **Bjork, R. A., & Bjork, E. L.** (2011). Making things hard on yourself, but in a good way. In *Psychology and the Real World*.
- **Schoenfeld, B. J.** (2019). The mechanisms of muscle hypertrophy. *J Strength Cond Res* 24(10), 2857-2872.
- **ACSM Position Stand** (2009). Progression Models in Resistance Training. *Med Sci Sports Exerc* 41(3), 687-708.
- **Heath, C., & Heath, D.** (2007). *Made to Stick*. Random House. (SUCCES heuristics).

---

**Sonuç:** Bengisu'nun MSc düzeyine yakışan eğitim katmanı. Sacred feminine ton korunarak — güçlendirilerek — bilim katmanı oturtulur. Cognitive load doğru pencerelerde dağıtıldığında (antrenmanda az, akşam reflection'da çok, haftalık odak zirve) pedagog kullanıcı için "uygulama" olmaktan çıkıp "öğretmen + araştırma defteri + bedensel günlük" hibrid bir ortam haline gelir.
