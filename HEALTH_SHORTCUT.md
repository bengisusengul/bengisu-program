# 🍏 Apple Health → Bengisu Program

Apple Health verilerini siteye taşımanın yolu: **screenshot al, AI okusun.**

iOS Shortcut, clipboard, JSON kopyalama yok. Sadece bir ekran görüntüsü.

---

## ☀️ Günlük ritüel (10 saniye)

1. iPhone'da **Health** uygulamasını aç → **Summary** sekmesi
2. **Screenshot al:** yan tuş + ses açma tuşu (aynı anda, kısa basış)
3. Bengisu Program sitesine gel → **Calendar** sekmesi
4. Üst sağda **📷 Health** butonuna dokun
5. Açılan galeri'den az önce aldığın screenshot'u seç
6. ~2 saniye sonra modal açılır: **AI okudu**, sayılar dolu gelir
7. Yanlış okuduğu varsa düzelt (her alan elle yazılabilir)
8. **💾 Kaydet** butonuna bas → bitti ✅

Site otomatik:
- Calendar günlük detayında 🍏 Apple Health kartı dolar
- Cycle log'unda **uyku skalası** (1-5) otomatik gelir
- Workout sekmesi üstünde **adım + kcal + egzersiz dakikası** görünür

---

## 📸 Hangi screenshot'lar en iyi okunur?

AI vizyon modeli (Claude Haiku 4.5) Apple Health'in farklı ekranlarını okur. En temiz sonuç için:

### ✅ İyi: Summary ekranı (önerilen)
Health → Summary → "Today" bölümünde aktif halkalar:
- Move/Active Energy (kalori)
- Exercise (egzersiz dakikası)
- Stand (hareketli saat)
- Steps (adım, biraz aşağı kaydırırsan)

Tek screenshot, en çok veriyi tek seferde verir.

### ✅ İyi: Activity uygulaması (Apple Watch'lı isen)
Activity app'in Today görünümü → halkalar + alttaki sayılar.

### ✅ İyi: Sleep özet ekranı
Health → Browse → Sleep → bugün/dün gece detayı.

Uyku verisini ayrı bir gün için yüklemek istersen ayrı screenshot kullan.

### ⚠️ Daha az iyi: Workout listesi, kalp atış grafiği
Sayılar var ama UI yoğun, AI okumayı şaşırabilir. Olur ama önce Summary'i dene.

---

## ❓ Sorun giderme

| Sorun | Çözüm |
|---|---|
| **📷 Health** butonuna basınca galeri açılmıyor | Safari'ye fotoğraflara erişim izni vermemiş olabilirsin. iPhone Ayarlar → Safari → "Tüm fotoğraflar" izni ver. |
| Modal "AI okuyamadı" diyor | Anthropic API key'in eksik veya yanlış. Diet sekmesinde "AI ile makro tahmin et" çalışıyorsa key doğrudur — bu hatada en altta gösterilen mesaja bak. |
| AI sayıları yanlış okudu | Kaydet'e basmadan **doğrudan inputta** düzelt. Her alan elle yazılabilir. Boş bırakırsan o veri kaydedilmez. |
| "AI X alan okudu" diyor ama bazıları boş | Apple Health o veriyi gösteriyor olmayabilir (ör. Stand sadece Apple Watch'tan gelir). Doğru, o günkü ekrandan ne varsa okur. |
| Tarih yanlış | Modal'daki tarih input'undan değiştir. Geriye dönük screenshot yüklerken bu işine yarar. |
| Sayılar binlik formatla geldi (ör. "8.123") | AI bunu 8123 olarak çevirir. Aksi olursa düzelt. |

---

## 🤖 Maliyet

Claude Haiku 4.5 vision: ~$0.001 fotoğraf başına. Günde 1 screenshot yüklersen aylık **~3 sent**. Anthropic key'in zaten Diet/Recipe için kullandığın key.

---

## 🔒 Gizlilik

- Screenshot ve okunan sayılar **sadece localStorage'da** kalır (cihazında).
- Anthropic API'ye sadece o screenshot ve prompt gider, response (sayılar) anında localStorage'a yazılır, kaydedilmez Anthropic tarafında.
- Site backend'siz, statik GitHub Pages.

---

## 📚 Teknik not (geliştirici için)

Eski sürümde **iOS Shortcut + clipboard** yolu denenmişti. iOS 17+ "Health Samples'tan türetilmiş veri external paylaşılamaz" güvenlik kuralı buna izin vermedi. Photo + AI yolu bu kuralı **bypass** eder çünkü:

1. Screenshot iOS'un standart sistem eylemi (Health verisi değil)
2. Site Apple Health API'ye dokunmaz, sadece kullanıcının resmini okur

Ayrıntı: `index.html` → `openHealthPhotoPicker()` / `analyzeHealthPhoto()` fonksiyonları (Claude Haiku 4.5 vision).
