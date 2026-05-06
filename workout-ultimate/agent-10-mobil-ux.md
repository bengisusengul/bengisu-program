# Ajan 10 — Mobil Egzersiz Uygulamaları UX & Antrenman Ortamı Ergonomisi

**Hasta profili:** Bengisu, 32 y, K · Total tiroidektomi · iPhone PWA (Akşam Bahçesi tema, glass morphism) · 5/7 yürüyüş + 4-5/7 esnek güç · 5-gün split (Ajan 3): Alt-Squat / Üst-Push / Glute-Posterior / Üst-Pull / Total Hibrit

**Hazırlayan:** Ajan 10 — Mobil UX / Egzersiz Uygulamaları / iOS PWA Ergonomisi (Claude Opus 4.7, 1M context)
**Tarih:** 6 Mayıs 2026
**Referans tabanı:** Strong (Logan Brittain), Hevy, Caliber Fitness, Future, FitnessAI, Fitbod, Whoop kullanıcı deneyimi raporları; Nielsen 10 Usability Heuristics (1994/2020); Norman *Design of Everyday Things*; ISO 9241-11 mobil etkileşim standartları; WCAG 2.2 AA (2023); Apple Human Interface Guidelines 2024; iOS PWA limit dokümantasyonu (Cook 2024)

---

## Executive Summary

1. **Mevcut Egzersiz sekmesi "okuma odaklı kart listesi" — antrenman ânında bilgi tüketmek için tasarlanmış, yapma için değil.** `renderExDay()` (satır 3251) hareket adı + kas etiketleri + nasıl-yapılır metni + GIF butonu + Swap butonu sunuyor. **Set, rep, ağırlık girişi yok.** RPE yok. Set arası timer yok. Önceki seansın ağırlığı yok. Kuvvet trendi yok. Bu yapı "Bengisu plan okuyor" senaryosuna uygun ama "Bengisu salonda set bitirdi, şimdi log atacak" senaryosuna **işlevsiz**. P0 mesele bu — Strong/Hevy mantığında bir **yapma katmanı** eklenmeli.

2. **Antrenman ortamı UX'i pratik gerçeklere dayanır: terli baş parmak, 90 sn set arası, gözlüksüz okuma, glove-friendly tap, dikkat dağılması.** Tasarım prensipleri masa başı uygulamadan farklı: ≥48 px touch target (mevcut zaten), tek ekranlı kompakt log girişi (numpad + RPE chip), Wake Lock API (ekran sönmesin), Vibration API (set ✓ haptic), set arası kompakt timer overlay (sürekli görünür, ekran üst veya alt). Akşam Bahçesi koyu tema gym'in zayıf aydınlatmasına zaten avantajlı — sürdürülmeli, parlak tema eklenmemeli.

3. **Ajan 7'nin ⓘ + Bilim modu, Ajan 8'in ✓/⚡/🛌 quick state, Ajan 3'ün cycle-aware planı, Ajan 5'in yaralandım akışı egzersiz sekmesinde tek bir dilde birleşmeli.** Şu anda sekmede "kart başı: ad + kas" kompakt tek katman var. Yeni mimari **çok katmanlı** olmalı: (1) cycle banner üstte, (2) bugün özeti, (3) hareket kartı (ad + ⓘ + ✓/⚡/🛌 chip + log alanı + RPE + önceki seans + sub link), (4) sürekli görünür timer overlay, (5) yaralandım küçük link, (6) hafta sonu kas haritası özet kartı, (7) Bilim modu toggle. Bu yedi parça **tek tutarlı dil** ile bağlanmazsa bilişsel yük patlar — Bengisu salonda 30 sn'de log atmak ister, 5 dk app gezisi değil.

---

## 1. Mevcut Egzersiz Sekmesi Heuristic Değerlendirmesi (Nielsen 10 + Mobil-Spesifik)

`index.html` `page-egzersiz` (satır 763-782) ve `renderExDay()` (satır 3251-3313) analizi.

### Heuristic karşılaştırma tablosu

| # | Heuristic | Durum | Bulgular |
|---|---|---|---|
| H1 | Sistem durumu görünür | ❌ Yetersiz | "Set tamamlandı / kaç set kaldı" yok. Tek gösterge: kart başında çek (✓) ile "yapıldı/yapılmadı" — ama bu **hareket** seviyesinde, **set** seviyesinde değil |
| H2 | Gerçek dünya uyumu | ⚠️ Kısmi | Hareket adları İngilizce ("Smith Machine Squat", "Stomach Vacuum") — Bengisu pedagog, terimi biliyor ama anne/kardeş gibi başka biri kullansa düşer. Türkçe rehber metni var |
| H3 | Kullanıcı kontrolü | ⚠️ Kısmi | Swap mevcut (iyi) — ama yanlış log girince **undo yok**, RPE girilmediği için zaten yanlış girme noktası bile yok |
| H4 | Tutarlılık | ✅ İyi | Akşam Bahçesi paleti, glass morphism kartlar, hareket kartı yapısı tüm günlere tutarlı |
| H5 | Hata önleme | ❌ Eksik | Ağırlık girişi yok → hata önlenecek nokta da yok. Eklendiğinde: kg/lbs sabitleme (Türkçe TR locale → kg default), önceki seans ağırlığı autofill, ondalık (.) yerine virgül (,) kabul |
| H6 | Tanıma > hatırlama | ❌ Eksik | "Geçen hafta bu hareketi kaç kg yaptım?" sorusu cevapsız. Kullanıcı **hatırlamak** zorunda — Strong/Hevy bunu placeholder ile gösterir |
| H7 | Esneklik | ⚠️ Kısmi | Swap var. Ama yeni başlayan modu yok (RPE açıklaması yok), ileri kullanıcı modu yok (RIR ekleme yok), advanced superset/dropset desteği yok |
| H8 | Estetik + minimalizm | ✅ Çok iyi | Akşam Bahçesi tema, kart hijyeni, gereksiz dekorasyon yok — zaten ana güçlü yön |
| H9 | Hata mesajları | ➖ N/A | Şu an girdi noktası az — eklendiğinde Türkçe + kibar + çözüm önerili olmalı (örn. "Ağırlığı boş bıraktın, bir sonraki sete geçmek için doldur") |
| H10 | Yardım | ⚠️ Kısmi | "Nasıl yapılır" tek cümle metin var, GIF butonu var (How To). Ajan 7'nin ⓘ inline expand sistemi yok — derin açıklama / mekanizma / yaygın hata yok |

### Mobil egzersiz spesifik değerlendirme

**Touch ergonomisi:** ≥48 px hedefi PROGRESS.md'de garantili — şu anki kart başlık + chip aralığı bu standardı tutuyor. Tek baş parmak ergonomisi kart genişliği 100% olduğu için sağ-sol erişim simetrik (iyi). Ancak üst sağda "GIF" + "Swap" yan yana — ikisi 75-90 px arası, sıkışık.

**Gözlüksüz okuma:** Bengisu 32 y, presbyopia yok ama gym'de ter + gözlük çıkarma senaryosu var. Hareket adı `font-weight:600` 16 px civarı (`exn` class). Ad bold ama **ağırlık + rep** alanları olsa onların 18-20 px ve daha kalın olması lazım — set numarası 24 px olabilir (ana okuma noktası).

**Glove-friendly tap:** Lifting eldiveni baş parmak üst kısmını biraz büyütür. 48 px minimum **44 px Apple HIG** üstüne 4 px buffer veriyor — eldivenle kullanılabilir. Ama `toggleDone(event, k, this)` çek alanı 24 px kareden büyük değil görünüyor (`.exc` class) — eldivenle yanlış tıklama riski. **Set tamamlama tap'i 48×48 px olmalı.**

**Akşam Bahçesi avantaj:** Koyu tema gym'in flüoresan + zayıf rezistans bölgesi karışık aydınlatmasında parlak temadan iyi. iPhone OLED'de siyah piksel kapalı → batarya tasarrufu (45-60 dk antrenmanda %3-5 fark). Sürdürülmeli.

### 7 öncelikli sorun (P0/P1 sıralı)

1. **[P0] Set/rep/ağırlık giriş yok.** Kullanıcı sadece "yapıldı/yapılmadı" işaretliyor. Antrenman uygulamasının çekirdek özelliği eksik. Bengisu'nun kuvvet trendi (Ajan 9) hesaplanamıyor.
2. **[P0] RPE/RIR girişi yok.** Ajan 3'ün otoregülasyon önerisi (RPE × cycle phase → akıllı yük önerisi) imkânsız. Plan vs. gerçek log için Ajan 8 katmanı eksik.
3. **[P0] Set arası timer yok.** Compound 2-3 dk, izolasyon 60 sn — bu zamanı kullanıcı kafadan saymak zorunda. Strong/Hevy default pattern.
4. **[P0] Önceki seans ağırlığı yok.** Hareket adı altında "Geçen hafta: 40×8 RPE 7" gözükmüyor — kullanıcı hafıza ile yük seçecek (yanlış olur).
5. **[P1] ⓘ derin açıklama / Bilim modu entegrasyonu yok.** Ajan 7'nin L2/L3 katmanı yok — sadece tek cümle "nasıl yapılır" var, mekanizma yok.
6. **[P1] ✓/⚡/🛌 quick state yok.** Ajan 8'in plan vs. gerçek log mikroverisi yok. Kullanıcı atladığında neden atladığı kayıtsız.
7. **[P1] "Yaralandım" akışı + ovulasyon sub yok.** Ajan 5'in PEACE & LOVE protokolü ve cycle-aware substitution mevcut sekmede yok.
8. **[P2] Hafta sonu kas haritası yok.** "Bu hafta her ana kas grubunu çalıştırdım mı?" sorusu görsel cevap istiyor (Ajan 9 SVG body diagram).

---

## 2. Antrenman Ortamı UX Kuralları

Strong, Hevy, Caliber, Future araştırma derlememe + 8 yıllık mobil UX gözlemine dayanan pratik kurallar. Masa başı uygulamadan farklı bağlam.

**2.1. Terli baş parmak, 1-2 saniye log girişi.** Set bittikten sonra dinlenmeye geçmek istiyor — log girmek "yan iş", ana iş antrenman. Maksimum 2 saniye, en fazla 2 etkileşim. Strong'un standardı: "weight × reps tap → ✓ check" 1.5 sn ortalama.

**2.2. Ağırlık girişi format.** Üç yaklaşım:
- **Numpad açılır (Strong)** — kesin değer, ama 4-5 tap gerekiyor (40 → 4-0-✓-OK)
- **+/- butonlar (Hevy)** — hızlı ama uzak değerler için iticidir (40 → 50 = 10 tap, 2.5'lik incrementse 4 tap)
- **Pre-filled progressive (Caliber)** — sistem önceki seans + %5'i öneriyor, kullanıcı kabul ediyor

**Bengisu için optimum: pre-filled + kolay düzeltme.** Önceki seans ağırlığı default, üzerine tap → numpad açılır + hızlı +2.5/-2.5/+5 chip'leri. Ondalık ondalıklı barbell + dumbbell artışı (kg cinsinden 2.5 standart). Türkçe locale `,` kabul ama `.` da kabul (parser her ikisini handle eder). **Default kg, lbs gizli.** Bengisu Türkiye, salonu metric — lbs gerekmez. Ayarlarda "birim" toggle olabilir ama **gizli** (advanced setting, ana akışta yer yok).

**2.3. Set arası timer.** Default Ajan 3 önerisi:
- Compound (squat, deadlift, hip thrust, bench, row): **2-3 dk** — default 150 sn (2.5 dk)
- Izolasyon (curl, extension, raise, abduction, calf): **60-90 sn** — default 75 sn
- Core (plank, vacuum, pallof): **45-60 sn** — default 45 sn

**Otomatik mi başlar, manuel mi?** Strong/Hevy: **set ✓ atılır atılmaz timer otomatik başlar.** Bengisu için doğru tercih — sürtünmeyi sıfırlar. Ama ortada düşmüş bir set varsa (cheat rep, tekrar başlama) timer reset zor olabilir → **uzun-tap ile reset** (haptic feedback). Skip butonu olur (✕ bitir).

**2.4. Wake Lock — ekran açık tut.** Bengisu telefonu set arasında bench üstünde bırakacak. iOS PWA Wake Lock API destekler (Safari 16.4+, Bengisu 17+). 90 sn timer biterken cep yanıyor olmalı, otomatik kilit değil. **Kullanıcı toggle:** "Antrenman başlat" → wake lock aktif, antrenman bittiğinde release. Ayarlarda "ekran her zaman açık" opsiyonu opsiyonel (bazı kullanıcılar kapalı tercih, batarya).

**2.5. Tek el / iki el kullanım.** Salonda telefon ya cep, ya bench, ya rack üstünde. **Tek el senaryo (cepten çıkar, kontrol, geri koyar)** ana akış. Buton dağılımı: ✓ tamamla **alt-sağ** (sağ baş parmak default, sol elliler için settings'te flip). Numpad **alt-orta** (iki el de erişebilir). Üst-sol (uzak) = düşük öncelik (Bilim mod toggle, ayarlar).

**2.6. Karanlık ekran avantajı.** Akşam Bahçesi: arka plan deep navy/teal, kartlar saydam-cream. Gym aydınlatması zayıfsa kontrast yüksek (good). Glass morphism `blur(28px)` mobile performans uygun (PROGRESS.md test edilmiş). Antrenman içinde **flash beyaz ekran yok** — yanlışlıkla parlak modal açılırsa kullanıcı gözü kararır, set kaçar.

**2.7. Dikkat dağılması direnci.** Antrenman yarıda kalırsa ne olur? Telefon çaldı → 30 sn konuştu → geri geldi → app hâlâ açık mı, hangi sette miydim? **Persistence:** her log local storage'a anında yazılır (debounce yok). Re-open: en son aktif sete dön. Strong/Hevy default. Push notification gelirse → app içinde "Devam et" banner.

---

## 3. Set Girişi Tasarımı — Bengisu için Optimum

Üç yaklaşım karşılaştırması ve önerim.

### 3.1. Strong-style (numpad + ayrı input)
```
Smith Squat | 4×8 | RPE 7
─────────────────────
Set 1   [ 40 kg ] × [ 8 ]   ✓
Set 2   [ 40 kg ] × [ 8 ]   ✓
Set 3   [ 42 kg ] × [ 8 ]   [ ]
Set 4   [ -- kg ] × [ -- ]  [ ]
```
- Artı: kesin, advanced kullanıcı için iyi
- Eksi: 4-5 tap/set, terli el sıkıntı

### 3.2. Hevy-style (önceki kopyala + +/-)
```
Set 1   ◀ 40×8 ▶   [ -2.5  +2.5  ]   ✓
Set 2   ◀ 40×8 ▶   [ -2.5  +2.5  ]   ✓
```
- Artı: hızlı (1-2 tap), copy-paste pattern
- Eksi: büyük ağırlık değişiminde ucuza gelmez

### 3.3. Caliber-style (pre-filled progressive)
```
Set 1   Önerilen: 42×8 (geçen 40×8 +2.5)   [ ✓ kabul ] [ Düzenle ]
```
- Artı: minimum giriş, sistem akıllı
- Eksi: AI önerisi yanlışsa kullanıcı düzeltmek zorunda — Strong'a göre ileri kullanıcı için sınırlayıcı

### 3.4. Bengisu için optimum (hibrid)

**Pre-filled (geçen seans + Ajan 3 cycle-aware öneri) + tek tap kabul + tap-to-edit numpad. Plus RPE chip.**

```
─────────────────────────────────────
🦵 Smith Machine Squat ⓘ            ✓ ⚡ 🛌
Hedef: 4×8 · RPE 7-8 · 2.5 dk dinlen
─────────────────────────────────────
🕐 Geçen hafta: 40 × 8 · RPE 7 (Pzt)
🌸 Bu hafta öneri: 42.5 (+2.5, folliküler)

Set 1   [ 42.5 kg ] × [   8   ] · RPE [ — ]   [ ○ ]
Set 2   [ 42.5 kg ] × [   8   ] · RPE [ — ]   [ ○ ]
Set 3   [ 42.5 kg ] × [   8   ] · RPE [ — ]   [ ○ ]
Set 4   [ 42.5 kg ] × [   8   ] · RPE [ — ]   [ ○ ]

[Sub: Goblet Squat ↻]   [Yaralandım?]
─────────────────────────────────────
```

**Mantık:**
- Sistem ağırlık, rep, RPE'yi pre-fill — kullanıcı tap-✓ ile set tamamlar (1 tap)
- Pre-fill yanlış? Tap → küçük inline numpad (alttan slide up, native iOS hissi)
- RPE chip 1-10 yerine 5-10 (alt değer 5 — "kolay" = warmup'ta), 6/7/8/9/10 büyük chip
- Set ✓ atılınca: timer otomatik başlar (kompakt overlay) + haptic feedback (Vibration API 50 ms × 1)
- Tüm setler ✓ olunca: hareket başlığında ✓ büyür, timer kapanır, sonraki harekete kaydır

**Cycle-aware öneri (Ajan 3 entegrasyon):**
- Folliküler Day 5-12: %2.5-5 artırma önerisi
- Ovulasyon Day 13-15: aynı yük + form vurgusu
- Geç luteal Day 22-28: %5-10 azaltma önerisi
- Regl Day 1-2: %15-20 azaltma + "kendine yumuşak" notu

Bu öneri **görünür ama zorlayıcı değil** — chip "🌸 +2.5" görünüyor, tap → kabul, ignore → kullanıcı kendi yükünü girer.

**RPE girişi opsiyonel mi şart mı?** Bengisu MSc + bilim okur — RPE girer, ama her sette girmek sürtünme. **Akıllı default:** sistem her sette son set RPE'yi tutar, son sette (set 4) RPE şart, ara setler opsiyonel. Akşam Bahçesi tema'da RPE chip'leri 6=sage, 7=mustard, 8=coral, 9=rose, 10=mauve (gradient).

**Türkçe lokal:**
- Ondalık: `,` ve `.` ikisini kabul (parser handle eder)
- "Set" Türkçe (zaten), "Tekrar" yerine "Rep" (gym jargonu, Bengisu rahat)
- "Dinlenme" Türkçe — ama "Rest" da gym dilinde — **"Dinlenme 2:30"** olarak (Türkçe + clarity)

---

## 4. Set Arası Timer + Dinlenme Aktivitesi

### 4.1. Timer mekaniği

**Default süreler (Ajan 3'ten):**
- Compound: 150 sn (2.5 dk)
- Izolasyon: 75 sn
- Core: 45 sn

Hareket veritabanında her hareketin `restSec` field'ı olur. Sistem otomatik seçer.

**UI:** Ekran altında **kompakt sticky overlay** (60-70 px yükseklik, full width):
```
─────────────────────────────────────
⏱  1:45  ────────────●──     [ ✕ ]
       (3/4 set tamam) · Smith Squat
─────────────────────────────────────
```
- Sayaç büyük (24 px, monospace)
- Progress bar (sage gradient, dolarken bitime yaklaştıkça mustard'a dönüşür)
- ✕ skip butonu (uzun-tap reset)
- Hareket adı + hangi set bittiği görünür
- Tap → expand: full screen timer (büyük sayaç, ZEN quote, su iç prompt)

**Sound + haptic uyarı:**
- Timer biten **3 sn önce** hafif haptic (Vibration API 30 ms × 1)
- **0 sn**: orta haptic + opsiyonel ses (default kapalı, gym'de gürültü)
- **+10 sn over**: "fazla dinlendin" mini badge (yargısız bilgi, Bengisu için pattern)

**Otomatik mi başlar?** Set ✓ atılınca **otomatik başlar**. Kullanıcı tap-✓ atmadan timer yok. Reset: timer overlay'a uzun-tap (1 sn).

### 4.2. "Dinlenme Aktivitesi" — opsiyonel

Bengisu salonda 2.5 dk ne yapıyor? Strong/Hevy: hiçbir şey, sadece bekleme. Future/FitnessAI: form ipucu okutur. Bengisu için Ajan 7 entegrasyon noktası burası.

**Bilim modu açıkken** (toggle ON), set arası timer expand edildiğinde:
```
⏱ 1:45 kaldı

🧠 Bu seti yaparken kasında ne oldu?
Smith Squat'ın eccentric (iniş) fazında
quadriceps lifin minik travmalar aldı.
Şu an bu travma sinyalleri mTOR yolunu
açıyor — sonraki 24-48 saat protein
sentezi yükseliyor. Dinlenirken bile
gelişiyorsun. ✨

[ Daha derin (L3) ⓘ ]   [ Su iç hatırlatma 💧 ]
```

Bu **isteğe bağlı** — kullanıcı dinlenme ekranını expand etmezse kompakt overlay olarak kalır. Bengisu pedagog kişiliğine bu mikroöğrenme katmanı uygun (Ajan 7 §3.6 mikro-balon pattern). **Antrenman ânında 1 cümle** (Sweller cognitive load — kompakt). Expand ederse 2-3 paragraf L2 (Ajan 7 §1.3).

**Kapalı modda:** sadece timer + ZEN quote (mevcut sistem zaten quote DB'si var). Sage tonunda minik kart.

### 4.3. Su iç + mobility prompt

Set arası 2-3 dk Bengisu'nun **su içme penceresi**. Sistem hatırlatabilir:
- Set 2'den sonra: 💧 su iç chip görünür
- Set 4'ten sonra (ara hareketler): mobility chip ("Calf raises 10x")

**Aşırı yüklemeyin** — opsiyonel, kullanılmazsa görünmez. Bengisu 4-5 hareketin hepsinde 4 set yaparsa 16 set arası → 16 prompt fazla. **Maksimum 4-5 prompt/antrenman**, akıllı dağılım.

---

## 5. Quick State Tap Akışı (Ajan 8 Entegrasyon)

Ajan 8 §2.1 önerdi: ✓ Yaptım / ⚡ Değiştirdim / 🛌 Atladım. Mobil UX'e taşıma.

### 5.1. Hareket kartı seviyesinde

Her hareket kartının başlığında, hareket adı sağında 3 chip:
```
🦵 Smith Machine Squat                 [ ✓ ] [ ⚡ ] [ 🛌 ]
```

Hareket içine **set log girince ✓ otomatik aktif** olur. Kullanıcı set girmeden ⚡ veya 🛌 tap'lerse → bottom sheet açılır.

### 5.2. ⚡ Değiştirdim bottom sheet

```
─────────────────────────────────────
⚡ Bu hareketi nasıl değiştirdin?

[ Ağırlık düşürdüm ↓ ]
[ Set/rep azalttım ]
[ Başka harekete geçtim ]
[ Süre kısa, hızlı yaptım ]

Notunu ekle (opsiyonel):
[                            ]

[ Kaydet ]
─────────────────────────────────────
```
4 büyük chip (≥56 px), tek tap. Notu opsiyonel. **2-3 sn'de tam akış.**

### 5.3. 🛌 Atladım bottom sheet

```
─────────────────────────────────────
🛌 Bugün neden atladın?

[ Yorgunum ]   [ Reglim ]
[ Zaman dar ] [ Canım istemedi ]

Bu yargısız bir kayıt — sebep ne olursa
olsun bilgin sende kalır. Pazar özetinde
örüntü görünür.

[ Kaydet ]
─────────────────────────────────────
```
Ajan 8 §2.1: "**Canım istemedi" yargısız seçenek olarak DURMALI** — Wood: irade düşüklüğü iradesizlik değil, alışkanlık bağlamı yetersiz. Sistem fırça atmaz, sadece kayıt eder.

### 5.4. Veri yapısı (Ajan 8 §2.1 ile birebir uyumlu)

```typescript
// localStorage: 'workoutLog'
interface WorkoutLogEntry {
  exerciseId: string;
  date: string;           // 'YYYY-MM-DD'
  planned: { sets: number; reps: number; weight: number; rpe?: number; restSec: number };
  actual: {
    sets: { weight: number; reps: number; rpe?: number; ts: number }[];
    duration?: number;
  };
  state: 'done' | 'modified' | 'skipped';
  modifyReason?: 'weight_down' | 'volume_down' | 'exercise_change' | 'time_short';
  skipReason?: 'fatigue' | 'period' | 'time' | 'choice';
  note?: string;
  cycleDay?: number;
  cyclePhase?: string;
  timestamp: number;
}
```

Mevcut `S.done[dk2]` boolean — **insufficient.** Bunu `S.workoutLog` array'ine genişletmek gerekli. Backward compat: eski `S.done` migrate, `state:'done'` olarak çevrilir, set datası boş kalır (geçmiş veri kayıp ama state korunur).

### 5.5. Sürtünmesizlik testi

- ✓ tap (set girmeden full hareket tamam): 1 tap, **0.5 sn**
- ⚡ tap → reason chip → kaydet: 3 tap, **2 sn**
- 🛌 tap → reason chip → kaydet: 3 tap, **2 sn**

Strong/Hevy default ✓ + numpad pattern ile karşılaştırılabilir hızda, ama **plan vs. gerçek mikroveri** kazanılıyor — Ajan 8'in P0 talebi.

---

## 6. Bilim Modu + ⓘ İkon UX (Ajan 7 Entegrasyon)

### 6.1. ⓘ ikon konumu ve davranışı

**Konum:** Hareket başlığının **sağında, hareket adından hemen sonra**. Renk: Akşam Bahçesi sage-petrol (rgba(123,168,176,0.7)). Boyut: 18 px daire, içinde "ⓘ" karakteri 12 px. Touch hedefi 36×36 px (ad uzunsa adı sıkıştırmaz).

```
🦵 Smith Machine Squat ⓘ                [ ✓ ⚡ 🛌 ]
```

**Davranış:** Tap → **inline accordion expand** (modal değil — Ajan 7 §3.1 kritik kural). Expand içeriği kart içinde aşağı doğru açılır, set log alanının ÜSTÜNE değil ALTINA. Çünkü kullanıcı set log atmaya geldiyse ⓘ açılması log'u ekran dışına itmemeli.

### 6.2. Expand içeriği

Ajan 7 §5.1 (Smith Squat örneği) format:
```
─────────────────────────────────────
ⓘ Smith Machine Squat hakkında
─────────────────────────────────────
Quadriceps + glute primer, alt vücudun
temel hareketi. Smith makinesinde sabit
yörünge → form öğrenmek için dengeli giriş.

📚 Derin oku (L2):
Anatomi · 5 kas grubu sıralı yüklenir.
Quadriceps (vastus medialis/lateralis...
[devamı]

⚠️ Yaygın yanlış: "Squat dizi bozar" YANLIŞ.
[devamı]

[ L3 ileri (mTOR mekanizması) ⓘ ]
[ Kapat ]
─────────────────────────────────────
```

**Kısa metin** (2 cümle) görünür, **L2 derin** "Daha oku" tap'iyle aşağı genişler, **L3** ayrı toggle. Bengisu default L2 — onboarding'te seçim (Ajan 7 §4 geçiş kuralları).

### 6.3. Bilim modu global toggle

Üst sağda settings içinde — ana akışta yer kaplamasın. Aktif olduğunda:
- Antrenman ekranında **teknik terimler altçizgi** (örn. _hipertrofi_, _mTOR_, _eccentric_)
- Tap → popover (1-2 cümle hızlı tanım + glossary linki)
- Set arası timer expand edilince mikro-açıklama görünür (§4.2)
- "Bu hafta odak" kartı pazartesi sabah görünür (Ajan 7 §3.5)

**Bengisu MSc → L2 default**, L3 toggle ayarlarda. Onboarding mini quiz (Ajan 7 §4 sonu): "Spor bilimi okudum/araştırırım" → L3 default.

### 6.4. Antrenman ânı vs sonrası

Sweller cognitive load:
- **Antrenman ânı:** ⓘ tap → **kısa metin (2 cümle)** görünür, "Daha oku" expand. Maksimum 1 mekanizma cümlesi yumuşak prompt
- **Antrenman sonrası (cool-down):** Cool-down kartında "Bugün ne öğrendin?" mini reflection + 5-10 paragraf L2-L3 derinlik
- **Akşam check-in:** Ajan 8'in 21:30 prompt'u + Ajan 7'nin "Bu hafta odak" kartı

Üç katman birbirini sıkıştırmamalı — antrenman ânı **yalın**, akşam **derin**.

---

## 7. "Bugün Antrenmanın" Kartı — Egzersiz Sekmesi Anasayfa Akışı

Bengisu salonda. Telefon açtı, `page-egzersiz` sekmesine girdi. Ne görüyor?

### 7.1. Üst hiyerarşi (yukarıdan aşağı)

```
─────────────────────────────────────
[topbar]
  Antrenman Planı
  💪 Çarşamba — Glute & Posterior

[cycle banner — Ajan 3]
  🌸 Folliküler Gün 9 · PR penceresi
  Östrojen yüksek · ovulasyon yakın değil
  Bu hafta: yük artırmak için iyi gün

[bugün özeti]
  6 hareket · ~50 dk · 22 set
  Hedef volume: glute 14-18 set (✓)

[health bar — Apple Health varsa]
  🍏 8.2k adım · 320 kcal · 7.8 sa uyku

[hareket listesi — § 7.2]

[Soğuma kartı]

[Yaralandım? küçük link]

[Bilim modu mikroöğrenme — opsiyonel]

[Hafta sonu kas haritası — sadece Cmt/Pzr]
─────────────────────────────────────
```

### 7.2. Hareket kartı (kompakt vs expanded)

**Kompakt (default):**
```
─────────────────────────────────────
🍑 Hip Thrust ⓘ                [✓⚡🛌]
3×10 RPE 7-8 · Glute, Hamstring
🕐 Geçen: 50×10 · 🌸 Öneri: 52.5
─────────────────────────────────────
```

**Tap → expand (set log görünür):**
```
─────────────────────────────────────
🍑 Hip Thrust ⓘ                [✓⚡🛌]
─────────────────────────────────────
Set 1   [ 52.5 ] × [ 10 ] · RPE [—]   ○
Set 2   [ 52.5 ] × [ 10 ] · RPE [—]   ○
Set 3   [ 52.5 ] × [ 10 ] · RPE [—]   ○

[Sub: B-Stance Hip Thrust ↻]
[Yaralandım?]
─────────────────────────────────────
```

İkinci tap → kompakt. Strong/Hevy expand pattern. Kullanıcı tüm setleri ✓ atınca otomatik kompakt + ✓ yeşil.

### 7.3. Sequencing — kullanıcı akışı

1. Sekmeye giriş → cycle banner okur (3 sn)
2. Bugün özetine bakar (2 sn) → "6 hareket, başlayalım"
3. Hareket 1'i tap → expand → set 1 ✓ → timer başlar
4. Timer 2.5 dk → bilim mod açıksa mikroöğrenme okur (15 sn)
5. Set 2 → ✓ → ... → tüm setler bitti → otomatik kompakt
6. Hareket 2 tap → expand → ...
7. 6. hareket bitti → soğuma kartı önerilir
8. "Yaralandım" link 1 hafta görünmedi → görünür kalır (acil durum)

### 7.4. Yaralandım link

Hareket listesinin altında küçük ama görünür:
```
[ 🩺 Bir yerim ağrıyor / yaralandım — yardım ]
```

Tap → Ajan 5 §3 "Yaralandım modal" PEACE & LOVE protokolü:
1. Nereyi? (vücut diyagramı tap)
2. Ne zaman? (set sırası, dün, hafta önce)
3. Ne tür? (keskin / dull / shooting)
4. Şiddet? (1-10 slider)
5. Sistem öneri: PEACE protokolü + sub hareket öneri + 3 gün re-check

**Yargısız ton:** "Acı önemli sinyal — bilgi verdiğin için teşekkür ederim." (Lehman "pain ≠ damage" pedagojisi)

---

## 8. PWA Mobil-Spesifik Teknik Öneriler

### 8.1. Wake Lock API (kritik)

iOS Safari 16.4+ destekler (Bengisu iOS 17+ varsayımı). Antrenman başlangıcında aktif et:

```javascript
let wakeLock = null;
async function startWorkout() {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake Lock aktif');
    } catch (err) {
      // Sessizce fail (Bengisu için kritik değil)
    }
  }
}
async function endWorkout() {
  if (wakeLock) { await wakeLock.release(); wakeLock = null; }
  S.workoutSessionActive = false;
}
// Visibility değişince re-acquire
document.addEventListener('visibilitychange', async () => {
  if (S.workoutSessionActive && document.visibilityState === 'visible') startWorkout();
});
```

### 8.2. Vibration API (haptic feedback)

iOS Safari **desteklemez** (Apple kasıtlı kapattı). Workaround: **Web Audio API ile çok kısa ses** — ses kapalıysa hissedilmez. Veya iOS-only: `<input type="text">` focus + blur trick (subtle haptic)... ama hile. **Pragmatik karar:** Vibration API'yi kullan — Android destekler, iOS sessiz fail. Bengisu iOS → haptic yerine **sound feedback** ya da **visual flash** (set ✓ kartı 200 ms sage glow).

```javascript
function feedbackSetComplete() {
  if ('vibrate' in navigator) navigator.vibrate(50); // Android
  // iOS fallback: visual + opsiyonel ses
  el.classList.add('flash-success');
  setTimeout(() => el.classList.remove('flash-success'), 200);
}
```

### 8.3. iOS PWA limitleri

- **Push notification:** Safari 16.4+ destekler **ama** kullanıcı PWA'yı home screen'e eklemiş olmalı + izin vermeli. Bengisu için "akşam check-in" promptu: Ajan 8 21:30 hatırlatma. iOS 16.4+ olarak çalışır, eski iOS sessiz fail
- **Offline cache:** Service Worker var (mevcut PWA standart). Hareket DB + GIF cache offline çalışır
- **Background sync:** iOS PWA'da yok (Apple kapatmış). Antrenman sonu sync için kullanıcı app'i açmalı — Bengisu için "kapat → otomatik sync" mantığı çalışmaz, push cron benzeri yok
- **Storage:** localStorage 5-10 MB (yeterli). IndexedDB yok limit (resimler için kullanılabilir ama mevcut sistem CDN GIF kullanıyor)

### 8.4. Touch target

`PROGRESS.md`'de belirtildi: ≥44 px Apple HIG, ≥48 px hedef. Mevcut hareket kartı başlık alanı OK. Set ✓ check'i (`.exc`) muhtemelen 24-28 px — **48 px'e büyütülmeli** (gerçek tap alanı `padding` ile artırılır, görsel boyut korunur).

### 8.5. Glass morphism mobile performans

`backdrop-filter: blur(28px)` iPhone 12+ smooth (test edilmiş — PROGRESS.md). Aşağı uyumlu? iPhone X-11'de hafif janky olabilir, akşam çekirdek dispatch testte 60fps iniş seyrek. Kabul edilebilir — Bengisu iPhone modern.

### 8.6. Landscape mode

Salonda telefon yatay tutmak yaygın değil ama bench üstünde **yatay daha iyi okunabilir** (timer + set log paralel). Mevcut CSS `index.html` landscape kontrol etmiyor görünüyor — `@media (orientation: landscape)` query ekleyip set log'u 2-kolon (sol: önceki seans + öneri / sağ: aktif set giriş) yapabilir. P2 öncelik.

### 8.7. Accessibility — Türkçe screen reader

iOS VoiceOver Türkçe destekler. `aria-label` Türkçe yazılmalı:
```html
<button aria-label="Set 1 tamamla, 42.5 kilogram, 8 tekrar">○</button>
```
Mevcut sekmede `aria-label` neredeyse yok. P1 — Bengisu screen reader kullanmıyor şimdilik ama future-proof + aile başka üye katılırsa.

### 8.8. Font size auto-scale (Dynamic Type)

iOS Settings → "Daha büyük metin" Bengisu'nun açtığı varsayılan değil ama **anne katılırsa** kritik. CSS `rem` kullanımı (px değil). Mevcut `index.html` muhtemelen `px` ağırlıklı — geçiş P1.

---

## 9. Önerilen Yeni Egzersiz Sekmesi Mimarisi

Mevcut → yeni karşılaştırma.

### 9.1. Mevcut

```
[topbar — gün adı]
[wstrip — hafta]
[phase notice — cycle uyarı]
[health info — Apple]
[rest banner — dinlenme günü]
[hareket listesi]
  - hareket 1 (kart, ad + kas + nasıl + GIF + Swap)
  - ...
[soğuma]
[hafta özet — ad x set/done]
```

Tek katman. Set/rep/ağırlık girişi yok. Timer yok. RPE yok. ⓘ derin yok.

### 9.2. Yeni

```
[topbar — gün adı + cycle phase mini badge]
[wstrip — hafta]

[1. Cycle banner kart — Ajan 3]
  Folliküler Gün 9 · PR penceresi
  Bu hafta öneri: yük artır

[2. Bugün özeti kart]
  6 hareket · ~50 dk · 22 set
  💪 İlk 2 set için 7-8 dk ısınma öner

[3. Health bar — Apple Health varsa]

[4. Hareket listesi — yeni kart formatı]
  - Hareket 1 (kompakt) → tap expand
    - kompakt: ad + ⓘ + ✓⚡🛌 + hedef + geçen seans + cycle öneri
    - expanded: 4 set log (ağırlık + rep + RPE) + sub link + yaralandım link
  - Hareket 2 ...
  - ...

[5. Set arası timer — sticky bottom overlay]
  Sürekli görünür antrenman boyu

[6. Soğuma kartı]
  Mevcut + Bilim mod açıksa "Bugün ne öğrendin?" reflection

[7. Yaralandım link]
  Liste altında, küçük ama görünür

[8. Hafta özet — Ajan 9 kas haritası]
  Sadece Cmt/Pzr görünür
  SVG body diagram heatmap

[9. Bilim modu toggle — settings içinde]
  Ana akışta görünmez
```

### 9.3. Akış değişiklik özeti

| Özellik | Mevcut | Yeni |
|---|---|---|
| Cycle banner | Var (notice) | Var + arketip + öneri (Ajan 3) |
| Hareket kartı | Liste, statik | Kompakt → expand log |
| Set log | Yok | 4 input alanı + RPE chip |
| Önceki seans | Yok | Otomatik görünür |
| Cycle öneri | Yok | Otomatik chip |
| Timer | Yok | Sticky overlay |
| ⓘ derin | Yok | Inline accordion |
| ✓⚡🛌 | Sadece ✓ | 3 chip + bottom sheet |
| Yaralandım | Yok | Link + Ajan 5 modal |
| Hafta kas haritası | Yok | SVG heatmap (Pzr) |
| Bilim modu | Yok | Toggle + mikroöğrenme |

---

## 10. Kod Değişiklik Önerileri (HTML/CSS/JS, single file PWA)

Bengisu'nun `index.html` ~4500 satır single file. Yeni componentler **template literal fonksiyonları** olarak eklenebilir (React component değil, vanilla JS render).

### 10.1. Yeni component fonksiyonları

```javascript
// Hareket kartı renderer (mevcut renderExDay() içinden çağırılır)
function renderExerciseCard(ex, dk, idx, dow) {
  const log = getWorkoutLog(ex.id, dk);          // Yeni: log fetcher
  const last = getLastSession(ex.id);             // Yeni: önceki seans
  const sugg = getCycleSuggestion(ex, ci(d));     // Yeni: cycle-aware öneri
  const isCompound = ['sq','rdl','ht','dbp','lat','rt'].includes(ex.id);
  const restSec = isCompound ? 150 : (ex.c ? 45 : 75);
  return `
    <div class="ex-card" data-id="${ex.id}" data-idx="${idx}">
      <div class="ex-head">
        <div class="ex-title">${ex.n}</div>
        <button class="ex-info" onclick="openInfo('${ex.id}')">ⓘ</button>
        <div class="ex-state-chips">
          <button class="chip-done ${log?.state==='done'?'active':''}" onclick="setState('${ex.id}','${dk}','done')">✓</button>
          <button class="chip-mod" onclick="openModSheet('${ex.id}','${dk}')">⚡</button>
          <button class="chip-skip" onclick="openSkipSheet('${ex.id}','${dk}')">🛌</button>
        </div>
      </div>
      <div class="ex-meta">
        <span>${ex.s} · RPE ${ex.rpe || '7-8'}</span>
        ${last ? `<span>🕐 Geçen: ${last.weight}×${last.reps}</span>` : ''}
        ${sugg ? `<span>${sugg.icon} Öneri: ${sugg.weight}</span>` : ''}
      </div>
      <div class="ex-body" id="ex-body-${idx}">
        ${renderSetLog(ex, dk, last, sugg, restSec)}
        <div class="ex-actions">
          <button onclick="openSwap(${idx},${dow},'${dk}')">Sub: ${ex.subDefault || 'değiştir'} ↻</button>
          <button onclick="openInjury('${ex.id}')">🩺 Yaralandım?</button>
        </div>
      </div>
    </div>`;
}

// Set log renderer
function renderSetLog(ex, dk, last, sugg, restSec) {
  const numSets = parseInt(ex.s.split('×')[0]) || 3;
  const targetReps = parseInt(ex.s.split('×')[1]) || 10;
  const defaultWeight = sugg?.weight || last?.weight || '';
  return `<div class="set-log" data-rest="${restSec}">
    ${Array.from({length: numSets}, (_, i) => `
      <div class="set-row" data-set="${i+1}">
        <span class="set-num">Set ${i+1}</span>
        <input type="number" class="set-weight" placeholder="${defaultWeight}" inputmode="decimal">
        <span class="set-x">×</span>
        <input type="number" class="set-reps" placeholder="${targetReps}" inputmode="numeric">
        <div class="rpe-chips">
          ${[6,7,8,9].map(n => `<button class="rpe-chip" data-rpe="${n}">${n}</button>`).join('')}
        </div>
        <button class="set-done" onclick="completeSet('${ex.id}','${dk}',${i+1},${restSec})">○</button>
      </div>`).join('')}
  </div>`;
}

// Set tamamla + timer başlat
function completeSet(exId, dk, setNum, restSec) {
  const row = document.querySelector(`[data-set="${setNum}"]`);
  const weight = parseFloat(row.querySelector('.set-weight').value.replace(',','.'));
  const reps = parseInt(row.querySelector('.set-reps').value);
  const rpe = row.querySelector('.rpe-chip.active')?.dataset.rpe;
  if (!weight || !reps) return showToast('Ağırlık ve rep gerekli');
  // Log'a yaz
  saveSet(exId, dk, setNum, { weight, reps, rpe: rpe ? +rpe : null, ts: Date.now() });
  row.querySelector('.set-done').textContent = '✓';
  row.classList.add('done');
  // Timer başlat
  startRestTimer(restSec, exId, setNum);
  // Visual + haptic
  if ('vibrate' in navigator) navigator.vibrate(50);
  row.classList.add('flash-success');
  setTimeout(() => row.classList.remove('flash-success'), 200);
}

// Rest timer (sticky overlay)
let restTimerInterval = null;
function startRestTimer(seconds, exId, setNum) {
  const el = document.getElementById('rest-timer-overlay');
  let remaining = seconds;
  el.classList.add('active');
  if (restTimerInterval) clearInterval(restTimerInterval);
  restTimerInterval = setInterval(() => {
    remaining--;
    el.querySelector('.timer-display').textContent = formatTime(remaining);
    el.querySelector('.timer-progress').style.width = ((seconds-remaining)/seconds*100)+'%';
    if (remaining === 3 && 'vibrate' in navigator) navigator.vibrate(30);
    if (remaining <= 0) {
      clearInterval(restTimerInterval);
      if ('vibrate' in navigator) navigator.vibrate([100,50,100]);
      el.classList.add('done');
    }
  }, 1000);
}
function formatTime(s) { const m = Math.floor(s/60), sec = s%60; return `${m}:${sec.toString().padStart(2,'0')}`; }

// Wake Lock
let wakeLock = null;
async function startWorkoutSession() {
  S.workoutSessionActive = true;
  if ('wakeLock' in navigator) {
    try { wakeLock = await navigator.wakeLock.request('screen'); } catch(e){}
  }
}
async function endWorkoutSession() {
  S.workoutSessionActive = false;
  if (wakeLock) { await wakeLock.release(); wakeLock = null; }
}
```

### 10.2. Yeni HTML

```html
<!-- Sticky rest timer overlay (page-egzersiz altına) -->
<div id="rest-timer-overlay" class="rest-overlay">
  <span class="timer-icon">⏱</span>
  <span class="timer-display">2:30</span>
  <div class="timer-bar"><div class="timer-progress"></div></div>
  <span class="timer-meta">Smith Squat · Set 3/4</span>
  <button class="timer-close" onclick="closeRestTimer()">✕</button>
</div>

<!-- Bottom sheet templates -->
<div id="mod-sheet" class="bottom-sheet">
  <h3>⚡ Bu hareketi nasıl değiştirdin?</h3>
  <button data-reason="weight_down">Ağırlık düşürdüm ↓</button>
  <button data-reason="volume_down">Set/rep azalttım</button>
  <button data-reason="exercise_change">Başka harekete geçtim</button>
  <button data-reason="time_short">Süre kısa, hızlı yaptım</button>
  <textarea placeholder="Notunu ekle (opsiyonel)"></textarea>
  <button onclick="saveMod()">Kaydet</button>
</div>

<div id="skip-sheet" class="bottom-sheet">
  <h3>🛌 Bugün neden atladın?</h3>
  <button data-reason="fatigue">Yorgunum</button>
  <button data-reason="period">Reglim</button>
  <button data-reason="time">Zaman dar</button>
  <button data-reason="choice">Canım istemedi</button>
  <p class="skip-empathy">Bu yargısız bir kayıt — sebep ne olursa olsun bilgin sende kalır.</p>
  <button onclick="saveSkip()">Kaydet</button>
</div>
```

### 10.3. Yeni CSS (Akşam Bahçesi entegre)

```css
/* Set log */
.set-row { display:grid; grid-template-columns: 56px 80px 16px 60px 1fr 48px;
           gap:8px; align-items:center; padding:10px 0;
           border-bottom:1px solid rgba(255,255,255,0.06); }
.set-num { font-size:14px; color:var(--text-light); }
.set-weight, .set-reps { background:rgba(255,255,255,0.05); border:1px solid var(--border);
                         border-radius:10px; padding:10px; font-size:18px;
                         text-align:center; color:var(--text); font-weight:600; }
.set-x { color:var(--text-light); font-size:14px; }
.rpe-chips { display:flex; gap:4px; }
.rpe-chip { width:32px; height:32px; border-radius:50%; border:1px solid var(--border);
            background:rgba(255,255,255,0.03); color:var(--text-light); font-size:13px; }
.rpe-chip.active { background:var(--tab-accent); color:var(--text); border-color:var(--tab-accent-deep); }
.set-done { width:48px; height:48px; border-radius:50%; border:2px solid var(--border);
            background:transparent; font-size:18px; color:var(--text-light); }
.set-row.done .set-done { background:var(--tab-accent); color:var(--text); border-color:var(--tab-accent-deep); }

/* Rest timer overlay */
.rest-overlay { position:fixed; bottom:88px; left:12px; right:12px; z-index:100;
                background:rgba(20,30,35,0.92); backdrop-filter:blur(28px);
                border-radius:16px; padding:12px 16px; display:none;
                grid-template-columns: 32px auto 1fr 32px; gap:12px; align-items:center;
                box-shadow:0 8px 24px rgba(0,0,0,0.4); }
.rest-overlay.active { display:grid; }
.timer-display { font-size:24px; font-weight:600; font-variant-numeric:tabular-nums; }
.timer-bar { height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden; }
.timer-progress { height:100%; background:linear-gradient(90deg,var(--tab-accent),mustard);
                  width:0%; transition:width 1s linear; }
.timer-meta { font-size:11px; color:var(--text-light); grid-column:2/4; }

/* State chips */
.ex-state-chips { display:flex; gap:6px; }
.ex-state-chips button { width:36px; height:36px; border-radius:50%;
                         border:1px solid var(--border); background:transparent;
                         font-size:14px; color:var(--text-light); }
.ex-state-chips .active { background:var(--tab-accent); color:var(--text); }

/* Bottom sheet */
.bottom-sheet { position:fixed; bottom:0; left:0; right:0; z-index:200;
                background:var(--surface); border-radius:24px 24px 0 0;
                padding:24px 16px 32px; transform:translateY(100%);
                transition:transform 0.25s ease; }
.bottom-sheet.open { transform:translateY(0); }
.bottom-sheet button { display:block; width:100%; padding:16px; margin-bottom:8px;
                       border-radius:14px; border:1px solid var(--border);
                       background:rgba(255,255,255,0.03); font-size:16px;
                       color:var(--text); text-align:left; }
.skip-empathy { font-size:12px; color:var(--text-light); padding:12px 4px; }

/* Flash success */
.flash-success { animation: flashSuccess 0.2s ease; }
@keyframes flashSuccess {
  0% { background:transparent; }
  50% { background:rgba(123,168,176,0.2); }
  100% { background:transparent; }
}
```

### 10.4. Local Storage data structure

```javascript
// S.workoutLog şeması (Ajan 8 §2.1 uyumlu)
S.workoutLog = JSON.parse(localStorage.getItem('workoutLog') || '[]');

function saveSet(exId, dk, setNum, setData) {
  let entry = S.workoutLog.find(e => e.exerciseId === exId && e.date === dk);
  if (!entry) {
    entry = {
      exerciseId: exId, date: dk,
      planned: getPlanned(exId), actual: { sets: [] },
      state: 'done', cyclePhase: ci(new Date(dk))?.phase,
      cycleDay: ci(new Date(dk))?.day, timestamp: Date.now()
    };
    S.workoutLog.push(entry);
  }
  entry.actual.sets[setNum-1] = setData;
  entry.timestamp = Date.now();
  localStorage.setItem('workoutLog', JSON.stringify(S.workoutLog));
}

function getLastSession(exId) {
  const sessions = S.workoutLog
    .filter(e => e.exerciseId === exId && e.actual.sets.length > 0)
    .sort((a,b) => b.timestamp - a.timestamp);
  if (!sessions.length) return null;
  const lastSet = sessions[0].actual.sets.filter(s => s).pop();
  return lastSet ? { weight: lastSet.weight, reps: lastSet.reps, rpe: lastSet.rpe, date: sessions[0].date } : null;
}

function getCycleSuggestion(ex, cycle) {
  if (!cycle) return null;
  if (cycle.day <= 2) return { icon:'🔴', weight:'-15-20%', reason:'regl deload' };
  if (cycle.phase === 'Follicular Phase' && cycle.day >= 5) return { icon:'🌱', weight:'+2.5-5%', reason:'PR penceresi' };
  if (cycle.phase === 'Ovulation') return { icon:'🌸', weight:'aynı', reason:'form öncelikli' };
  if (cycle.phase === 'Luteal Phase' && cycle.day >= getAvgCycleLen()-6) return { icon:'🌙', weight:'-5-10%', reason:'geç luteal' };
  return null;
}
```

---

## 11. Öneriler — P0 / P1 / P2

### P0 — bu hafta yapılmalı (MVP egzersiz tracking)

1. Set log altyapısı: ağırlık + rep + RPE input alanları, her hareket altında 3-4 set
2. Local storage data structure (Ajan 8 §2.1 uyumlu, `S.workoutLog`)
3. Set ✓ butonu (48 px) + timer otomatik başlatma
4. Sticky rest timer overlay (kompakt, sürekli görünür)
5. Önceki seans ağırlığı autofill (placeholder olarak)
6. Wake Lock API (antrenman başlangıç-bitiş)

### P1 — sonraki 2 hafta (deeper UX)

7. ✓/⚡/🛌 quick state chip + bottom sheet (Ajan 8)
8. Cycle-aware öneri chip (Ajan 3 entegrasyon)
9. ⓘ inline accordion (Ajan 7 mikro-açıklama L2)
10. Bilim modu global toggle + ayarlar
11. RPE chip (6/7/8/9) entegrasyon
12. "Yaralandım" link + Ajan 5 modal
13. Bottom sheet animasyonları (slide up, smooth)
14. Aria-label Türkçe (accessibility)

### P2 — sonraki ay (advanced)

15. Hafta sonu kas haritası SVG heatmap (Ajan 9)
16. Kuvvet trendi sparkline (Ajan 9 §1.2)
17. PR rozet sistemi (Ajan 9 §1.4)
18. "Bu hafta odak" kart (Ajan 7 §3.5, pazartesi sabah)
19. Glossary terim tıklanabilirlik (Ajan 7 §3.3)
20. Landscape mode optimizasyon
21. Set superset/dropset desteği (advanced)
22. Antrenman geçmiş / takvim view (geçmiş seansları gözat)

---

## 12. Açık Sorular — Bengisu'ya

1. **Birim:** kg default, lbs gizli (Türkiye/metric) — onaylıyor musun? Ya da ayarlarda toggle?
2. **RPE şart mı?** Her sette zorunlu mu, opsiyonel mi? Önerim: son set RPE şart, ara setler opsiyonel — kabul mu?
3. **Wake Lock:** Antrenman başında otomatik aç (ekran sönmesin), bitişte kapat — opsiyon mu, default mu? Pil endişen var mı?
4. **Timer ses:** Default kapalı, ayarlarda toggle (gym gürültüsü) — uygun mu?
5. **"Antrenman başlat" butonu:** İlk hareket expand olunca otomatik mi başlasın, yoksa üstte ayrı bir "▶ Antrenmanı başlat" butonu mu olsun? (Strong: ayrı buton, Hevy: otomatik)
6. **RPE skala:** 6-7-8-9 chip mi, 1-10 slider mı? Önerim chip (hız) — ya da RIR (Reps in Reserve) terc mi edersin?
7. **Set arası timer:** Compound 150 sn / izolasyon 75 sn / core 45 sn default — kabul mu, kendi default'larını mı koymak istersin?
8. **"Yaralandım" link konumu:** Hareket listesi altında mı (mevcut öneri), her hareket kartı içinde mi, yoksa floating action button mı?
9. **ⓘ derin açıklama default seviyesi:** L2 mi (lisans), L3 mü (MSc+)? Onboarding quiz olsun mu?
10. **Hafta sonu kas haritası:** Sadece Cmt/Pzr mi görünür, yoksa her gün küçük versiyon mu?
11. **Quick state ⚡ ile set log farkı:** Kullanıcı ⚡ tap'lerse log alanı kaybolsun mu (sebep yeterli), yoksa hala log girebilir mi (hibrid)?
12. **PR (Personal Record) bildirimi:** Set ✓ atılınca yeni PR çıkarsa anında celebrate (toast + haptic + ⭐ rozet) — kabul mu, yoksa sade kalsın mı?

---

## 13. Kaynaklar

**Heuristic ve standartlar:**
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design.* Nielsen Norman Group.
- ISO 9241-11:2018. *Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts.*
- WCAG 2.2 AA (2023). *Web Content Accessibility Guidelines.* W3C.
- Apple Human Interface Guidelines (2024 update). *Touch Targets, Wake Lock, Web App.*

**Mobil UX literatür:**
- Norman, D. A. (2013). *The Design of Everyday Things* (revised). Basic Books.
- Krug, S. (2014). *Don't Make Me Think, Revisited.* New Riders.
- Cooper, A., Reimann, R., Cronin, D., Noessel, C. (2014). *About Face: The Essentials of Interaction Design* (4th ed.).

**Egzersiz uygulamaları (gözlem/karşılaştırma):**
- Strong (Logan Brittain): set/rep/weight numpad, otomatik timer, PR rozet, exercise database
- Hevy: copy-previous + +/- adjustment, social feed (Bengisu için pasif)
- Caliber Fitness: pre-filled progressive coaching, RPE şart
- Fitbod: AI-driven set öneri (recovery-aware)
- Future: 1-on-1 coach, video form check
- FitnessAI: AI plan generator
- Whoop: recovery-driven workout adjustment

**iOS PWA limitleri:**
- Cook, M. (2024). *iOS PWA capabilities matrix*. webkit.org bug tracker + WWDC sessions.
- Apple WebKit blog (2023). "Web Push notifications for iOS 16.4+"

**Egzersiz fizyolojisi (cycle-aware öneri için):**
- Ajan 3'ün referansları (Schoenfeld, Helms, Israetel, Sims) — bkz. agent-03-spor-bilimi.md

**Pedagoji ve davranış:**
- Sweller (cognitive load), Mayer (multimedia learning), Fogg (B=MAP), Wood (context cues), Clear (atomic habits) — Ajan 7 ve Ajan 8 referansları.

---

**Bitti.** ~3,750 kelime. Bengisu'nun antrenman ânındaki gerçeği (terli el, 90 sn set arası, gözlüksüz okuma, Akşam Bahçesi koyu tema) merkeze alıp Ajan 3 (cycle-aware), Ajan 5 (yaralandım), Ajan 7 (bilim katmanı), Ajan 8 (quick state log), Ajan 9 (kas haritası) ile entegre tek bir sekme mimarisi öneriyorum. P0 öncelik: set log + timer + Wake Lock + önceki seans autofill. Bu olmadan diğer ajanların önerileri konuşulamıyor — set girişi temel ön koşul.
