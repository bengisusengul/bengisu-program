# 🍏 Apple Health → Bengisu Program — Kurulum Rehberi

Bu rehber **iOS Shortcuts** uygulaması ile Apple Health verilerini siteye taşıyacak Shortcut'ı kurmak içindir. Bir kez kurarsın, her sabah 1 saniye → tüm veri sitede.

---

## 🎯 Ne yapacak bu Shortcut?

Apple Health'ten şu verileri çeker, JSON olarak clipboard'a kopyalar:

- 👟 Adım sayısı (steps)
- 🔥 Aktif kalori (active_kcal)
- 💪 Egzersiz dakikası (exercise_min)
- 🪨 Hareketli saat (stand_hr)
- 😴 Uyku süresi (dakika cinsinden)
- ❤️ Ortalama kalp atışı
- 💗 Dinlenme kalp atışı

Sonra siteye gelip **📋 Health** butonuna basarsın → otomatik o güne işlenir.

---

## 📲 Kurulum (5 dakika, bir kerelik)

### Adım 1 — Shortcuts uygulamasını aç

iPhone'da yüklü olan **Shortcuts** uygulamasını aç (mavi arka plan, 2 daire içinde + işareti).

### Adım 2 — Yeni Shortcut oluştur

1. Sağ üstte **+** butonuna dokun
2. "New Shortcut" başlığına dokun → adı değiştir: **"Health'imi Bengisu Program'a Yolla"**

### Adım 3 — Adımları sırayla ekle

> **Add Action** butonuna dokunup, arama kutusuna belirtilen kelimeyi yaz, çıkan eylemi seç.

#### 3.1. Tarih → metin formatına çevir
- Action: **Format Date**
- Date: `Current Date`
- Format: `Custom`
- Custom Format: `yyyy-MM-dd`
- Sonuç değişkenini "Magic Variable" olarak adlandır: **`Today`**

#### 3.2. Apple Health verilerini al (7 ayrı action)

**Steps:**
- Action: **Find Health Samples Where**
- Filter: `Steps` · Date is `Today`
- Action: **Calculate Statistics** üzerine ekle: `Sum`
- Magic Variable: `StepsTotal`

**Active Energy:**
- Action: **Find Health Samples Where**
- Filter: `Active Energy` · Date is `Today`
- Action: **Calculate Statistics**: `Sum`
- Magic Variable: `KcalTotal`

**Exercise Time:**
- Action: **Find Health Samples Where**
- Filter: `Exercise Time` (veya `Apple Exercise Time`) · Date is `Today`
- Action: **Calculate Statistics**: `Sum`
- Magic Variable: `ExerciseTotal`

**Stand Hours:**
- Action: **Find Health Samples Where**
- Filter: `Stand Hours` · Date is `Today`
- Action: **Calculate Statistics**: `Sum`
- Magic Variable: `StandTotal`

**Sleep (önceki gece):**
- Action: **Find Health Samples Where**
- Filter: `Sleep Analysis` · Value is `Asleep`
- Date Range: Last Night (veya: Date is yesterday/today, "All Day" — Apple Watch'a göre değişir)
- Action: **Calculate Statistics**: `Sum (Duration in Minutes)`
- Magic Variable: `SleepTotal`

**Heart Rate (ortalama):**
- Action: **Find Health Samples Where**
- Filter: `Heart Rate` · Date is `Today`
- Action: **Calculate Statistics**: `Average`
- Magic Variable: `HRAvg`

**Resting Heart Rate:**
- Action: **Find Health Samples Where**
- Filter: `Resting Heart Rate` · Date is `Today`
- Action: **Calculate Statistics**: `Average` (veya `Latest`)
- Magic Variable: `HRRest`

#### 3.3. JSON olarak birleştir

- Action: **Text**
- İçerik (her köşeli parantez içine yukarıdaki Magic Variable'ı ekle, manuel yazma):

```
{"date":"[Today]","steps":[StepsTotal],"active_kcal":[KcalTotal],"exercise_min":[ExerciseTotal],"stand_hr":[StandTotal],"sleep_min":[SleepTotal],"hr_avg":[HRAvg],"hr_rest":[HRRest]}
```

> **Önemli:** Köşeli parantezler düz metin değil, **Magic Variable**. Yazıya tıklayıp Magic Variable seçici çıkacak — ilgili variable'ı seç.

#### 3.4. Clipboard'a kopyala

- Action: **Copy to Clipboard**
- Input: yukarıdaki Text variable'ı

### Adım 4 — Test et

1. Shortcut'ın altındaki ▶ play butonuna dokun
2. Apple Health permission isterse → izin ver
3. iOS notification: **"Copied"**
4. Notes app aç → yapıştır → JSON görmeli, şuna benzer:

```json
{"date":"2026-04-28","steps":7842,"active_kcal":420,"exercise_min":35,"stand_hr":11,"sleep_min":423,"hr_avg":68,"hr_rest":58}
```

5. Sayılar 0 ise: Apple Health'te o veri yoktur (örn. henüz adım atmadın), sorun değil.

### Adım 5 — Lock screen widget'a ekle (opsiyonel ama tavsiye)

1. Lock screen'i uzun bas → "Customize"
2. Lock screen widget alanına **+** ile widget ekle
3. **Shortcuts** seç → "Health'imi Bengisu Program'a Yolla" Shortcut'ını seç
4. Done

Artık lock screen'de tek dokunuşla çalıştırırsın.

### Adım 6 — Siri kısayolu (alternatif)

Hey Siri ile çalıştırmak için: Shortcut'ın detayında **Settings** → **Add to Siri** → "Health'imi yolla" gibi kısa bir ifade kaydet.

---

## ☀️ Sabah ritüeli (her gün 5 saniye)

1. Lock screen widget'a dokun (veya Siri'ye söyle)
2. ✅ "Copied" bildirimi
3. Bengisu Program sitesine gel
4. **📋 Health** butonuna dokun (Calendar üst kısmında)
5. Site otomatik veriyi okur, o güne işler

Bitti.

---

## ❓ Hatalar

| Sorun | Çözüm |
|---|---|
| "Copied" bildirimi yok | Shortcut'ta **Copy to Clipboard** action'ı eksik veya yanlış sırada. Adım 3.4'ü tekrar et. |
| Notes'a yapıştırınca boş geliyor | Magic Variable bağlantısı kopuk. Text action'da köşeli parantezler düz metin yazılmış olabilir — Magic Variable seçici ile bağla. |
| Sayılar hep 0 | Apple Health'te bu veri yok. Apple Watch takıyor musun? Bazı veriler (Stand, Exercise) sadece Watch'tan gelir. |
| Site "Geçersiz format" hatası | JSON yapısı bozuk. Notes'a yapıştır, JSON'ın `{...}` içinde olduğundan emin ol, virgüller doğru mu? |
| Site "Clipboard boş" diyor | Shortcut çalışmadı veya başka bir uygulama clipboard'ı temizledi. Shortcut'ı tekrar çalıştır. |
| Shortcut'ta "Find Health Samples" eyleminde "Sleep" göremiyorum | iOS sürümüne göre adı "Sleep Analysis" veya altında "Sleep Samples" altında olabilir. iOS 17+ tavsiye. |

---

## 🔒 Gizlilik

Bu veri **localStorage'da** kalır, sadece senin tarayıcında. Sunucuya gönderilmiyor. Site'nin tamamı backend'siz, statik bir GitHub Pages uygulaması.

---

## 🛟 Yardım

iOS Shortcut'lar bazen iOS sürümleri arasında farklı action'lara sahip olabiliyor. Yukarıdakiler iOS 17+ için. Sıkışırsan ekran görüntüsü atarsan adımı düzeltirim.
