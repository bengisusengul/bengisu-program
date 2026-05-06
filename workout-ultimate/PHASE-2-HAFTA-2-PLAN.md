# Phase 2 Hafta 2 — Set Log Altyapısı

> SYNTHESIS.md P0 #2 — "Set/rep/ağırlık/RPE girişi sistemi". Bu en büyük tek altyapı parçası. Hafta 2'nin hedefi: Bengisu salonda set bitirip 2-3 saniyede log atabilsin.

## Context

Mevcut Egzersiz sekmesi **okuma odaklı**: hareket başlığı + GIF + açıklama + boolean ✓ tap. Set/rep/ağırlık/RPE girişi yok. Bu eklenmeden:
- Ajan 9 grafikleri (kuvvet trend, sparkline) çalışmaz
- Ajan 3 cycle-aware öneri (folliküler PR, geç luteal hafiflet) çalışmaz
- Ajan 8 plan-vs-gerçek log (✓/⚡/🛌) çalışmaz
- Apple Watch / Whoop verisi olmayan tek-cihaz PWA için **ana antrenman delili**

Bu dosya bu eksikliği kapatma planıdır.

## Bengisu kararları (6 May)

| Karar | Seçim |
|---|---|
| Birim | **kg** |
| RPE girişi | **şart** — her sette zorunlu |
| Wake Lock | **antrenmanda hep açık** |
| Pre-fill | **otomatik** (Strong-style: önceki seans placeholder) |
| Timer | **otomatik başlar** set bitince — compound 150s, izolasyon 75s, core 45s |

## Goal

Bengisu antrenman sırasında:
1. Hareket kartı açar → önceki seans değerlerini görür (placeholder)
2. Ağırlık + rep + RPE chip → 3-4 saniyede gir
3. ✓ tap → otomatik kayıt + timer başlar + bir sonraki sete pre-fill (önceki set ile aynı)
4. 90s/150s timer ekranda sayar, set arasında dinlenirken ⓘ tıklayıp bilim notunu okuyabilir
5. Tüm setler bitince hareket "tamamlandı" rozeti
6. Antrenman sonu özet: toplam volume, RPE ortalaması, en yüksek 1RM tahmini

## Scope — Hafta 2 (3 alt-hafta)

Tek seferde değil, 3 mantıksal parça:

### 2A. Veri modeli + temel set log UI (3-4 commit, ~3-5 gün)
- `WorkoutLogEntry` data structure (Ajan 8 §9.1 + Ajan 10 §5.4 birleşimi)
- localStorage migration (`done` boolean → `workout_log` array)
- Hareket kartında set log bölümü (placeholder + numpad input + RPE chip)
- ✓ Tamamla tap → kayıt + sonraki set otomatik
- Pre-fill: önceki seans son set'i

### 2B. Wake Lock + auto-timer + haptic (2-3 commit, ~2-3 gün)
- Wake Lock API (Egzersiz sekmesinde aktif, başka sekmede release)
- Set bitince otomatik timer (compound 150s, izolasyon 75s, core 45s)
- Visual countdown (büyük sayı + progress bar)
- Bitiş: vibration (Android/Web) + sound + visual flash (iOS fallback)
- Manuel skip / -10s / +10s butonu

### 2C. PR detection + summary (2 commit, ~2 gün)
- Brzycki/Epley 1RM tahmini (her set sonunda)
- PR rozet (yeni en yüksek 1RM tahmini → popup + ZEN quote + haptic)
- Antrenman sonu özet kartı: total volume (kg×rep), avg RPE, PR'ler, süre
- Hareket bazlı son 4 seans karşılaştırma (mini sparkline)

## Files to modify

**Single file PWA — sadece `index.html`.**

## Veri modeli — `WorkoutLogEntry`

```js
// localStorage key: 'workout_log'
// Structure: { [dateKey]: { [exerciseId]: WorkoutLogEntry } }
{
  exerciseId: 'sq',           // EX object key
  startedAt: 1715000000000,    // unix ms
  completedAt: 1715001500000,  // null while in progress
  sets: [
    {
      idx: 0,
      planned: { reps: 8, weight: null, rpe: null },  // hedef
      actual:  { reps: 8, weight: 40, rpe: 7 },        // gerçek
      state: 'done',           // 'done' | 'modified' | 'skipped'
      modifyReason: null,      // 'weight_down' | 'reps_down' | 'movement_changed' | 'time_short'
      skipReason: null,        // 'tired' | 'period' | 'no_time' | 'no_motivation'
      restAfterSec: 95,        // gerçek dinlenme (auto-timer'dan)
      completedAt: 1715000300000
    }
  ],
  cycleDay: 8,                  // ci(d).day o gün
  cyclePhase: 'Follicular',     // ci(d).phase
  oneRMEstimate: 47.5,          // Brzycki en yüksek
  isPR: false,                  // true ise yeni 1RM rekoru
  notes: ''
}
```

**Migration:** mevcut `S.done[dateKey_idx]` boolean'lar `workout_log[dateKey][exerciseId].sets[idx].state='done'` mappinge geçer. Eski done değerleri korunur ama set/RPE/ağırlık bilgisi yok (history'de "veri eksik" olarak gösterilir).

## UI — set log component (mockup)

```
┌─────────────────────────────────────┐
│ 🦵 Smith Squat              ⓘ   ⌄   │
│ Hedef: 4×8 RPE 7-8                  │
│ Önceki seans: 38kg × 8 RPE 7        │
│ ─────────────────────────────────── │
│ Set 1   [40 kg] × [8] reps  RPE [7] │ ← önceki seans placeholder
│         ✓ Tamamla                   │
│ ─────────────────────────────────── │
│ Set 2   [40 kg] × [8] reps  RPE [7] │ ← Set 1 onaylanınca aktifleşir
│         · pending                   │
│ Set 3   [40 kg] × [8] reps  RPE [_] │
│         · pending                   │
│ Set 4   [42 kg] × [8] reps  RPE [_] │ ← progressive overload önerisi
│         · pending                   │
│ ─────────────────────────────────── │
│ ⏱ Dinleniyor: 1:18 / 2:30            │ ← otomatik timer
│ [-10s] [skip] [+10s]                │
│ ─────────────────────────────────── │
│ ⚡ Değiştirdim   🛌 Atladım          │ ← Ajan 8 quick state
└─────────────────────────────────────┘
```

## Helper fonksiyonlar (yeni)

```js
// Brzycki + Epley 1RM tahmini
function calc1RM(weight, reps) {
  if (reps === 1) return weight;
  if (reps <= 10) return Math.round(weight * (36 / (37 - reps)) * 10) / 10;  // Brzycki
  return Math.round(weight * (1 + reps / 30) * 10) / 10;                      // Epley
}

// Önceki seans son set'i
function getLastSessionSet(exerciseId) {
  const log = JSON.parse(localStorage.getItem('workout_log') || '{}');
  const dates = Object.keys(log).sort().reverse();
  for (const date of dates) {
    if (log[date][exerciseId]?.sets?.length) {
      const sets = log[date][exerciseId].sets.filter(s => s.state === 'done');
      if (sets.length) return sets[sets.length - 1];
    }
  }
  return null;
}

// Progressive overload önerisi (Hafta 2A için basit, ileride cycle-aware)
function getProgressiveOverload(prevSet, plannedReps) {
  if (!prevSet) return { weight: 0, reps: plannedReps, rpe: null };
  // Geçen sefer RPE ≤7 ise ağırlık +2.5kg, RPE 8-9 ise aynı, RPE 10 ise -2.5kg
  const rpe = prevSet.actual.rpe;
  let weightDelta = 0;
  if (rpe && rpe <= 7) weightDelta = 2.5;
  else if (rpe === 10) weightDelta = -2.5;
  return {
    weight: Math.max(0, prevSet.actual.weight + weightDelta),
    reps: plannedReps,
    rpe: null
  };
}

// Wake Lock — Egzersiz sekmesinde aktif
let wakeLockSentinel = null;
async function acquireWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
    } catch (e) { console.warn('Wake Lock failed', e); }
  }
}
function releaseWakeLock() {
  wakeLockSentinel?.release();
  wakeLockSentinel = null;
}

// Auto-timer
function startSetTimer(exerciseType) {
  // exerciseType: 'compound' | 'isolation' | 'core'
  const durations = { compound: 150, isolation: 75, core: 45 };
  const dur = durations[exerciseType] || 90;
  // ... timer state management
}

// PR detection
function isNewPR(exerciseId, candidateOneRM) {
  // Tüm geçmiş 1RM'lerin maximumundan yüksek mi?
  const log = JSON.parse(localStorage.getItem('workout_log') || '{}');
  let max = 0;
  for (const date in log) {
    const entry = log[date][exerciseId];
    if (entry?.oneRMEstimate > max) max = entry.oneRMEstimate;
  }
  return candidateOneRM > max;
}
```

## Render değişiklikleri

`renderExDay()` fonksiyonu (~satır 3251) tamamen yenilenecek. Mevcut basit kart yerine yeni set log component'i. Eski "GIF tıkla → modal" akışı korunur (ⓘ ile yan yana).

`renderEx()` (gün strip + topbar) korunur, sadece her hareketin altında yeni set log component yer alır.

## Migration stratejisi

Backwards compat kritik — `S.done[dk_idx]` ile yıllarca veri birikti.

```js
// Initialization at app startup
function migrateWorkoutData() {
  const log = JSON.parse(localStorage.getItem('workout_log') || '{}');
  const done = JSON.parse(localStorage.getItem('done') || '{}');
  if (!Object.keys(log).length && Object.keys(done).length) {
    // Eski done verileri yeni log'a aktar (set/weight/RPE = null)
    for (const key in done) {
      const [dk, idx] = key.split('_');  // "Mon May 06 2026_0"
      // ... build minimal WorkoutLogEntry
    }
    localStorage.setItem('workout_log', JSON.stringify(log));
    // 'done' anahtarını silmeyelim; eski feedback için kalsın
  }
}
```

## Verification

### 2A — Set log UI test plan
- [ ] index.html aç, Egzersiz sekmesi → bir hareket
- [ ] Set 1 placeholder'da önceki seans değerleri (yoksa boş)
- [ ] Ağırlık tap → numpad açılır → 40 yaz → ok
- [ ] Rep tap → numpad → 8
- [ ] RPE chip → 7
- [ ] ✓ Tamamla → Set 1 kapanır, Set 2 aktif olur, Set 2'de aynı değerler placeholder
- [ ] Set 4'te +2.5kg progressive overload önerisi (önceki RPE ≤7 ise)
- [ ] localStorage'da `workout_log[dateKey][exerciseId]` görünür
- [ ] JS smoke test PASS

### 2B — Wake Lock + timer test plan
- [ ] Egzersiz sekmesini aç → konsola `wakeLockSentinel` log → not null
- [ ] Başka sekmeye git → release edilmeli
- [ ] Set ✓ → timer otomatik başlar (compound 2:30, izolasyon 1:15)
- [ ] Timer bitince vibration (Android) veya görsel flash (iOS)
- [ ] Skip butonu çalışıyor
- [ ] Background'da timer bağımsız çalışıyor (browser tab visibility değişse)

### 2C — PR + summary test plan
- [ ] Yeni en yüksek 1RM → popup "🏆 PR! 1RM tahminin: 52.5 kg"
- [ ] ZEN quote cycle phase'e göre (folliküler farklı, ovulasyon farklı)
- [ ] Antrenman bitince özet: total volume, avg RPE, PR'ler, süre
- [ ] Son 4 seans mini sparkline → trend görünür

## Risk & dependencies

- **localStorage 5-10 MB sınır** — `workout_log` zamanla büyür. Hesap: 10 hareket/gün × 4 set × ~150 byte = 6KB/gün × 365 = ~2 MB/yıl. 5 yıl rahat sığar. Yine de eski seansları arşivleme stratejisi P2'de.
- **iOS PWA Wake Lock 16.4+** desteği — eski iPhone'larda çalışmaz, sessizce fail eder. Bengisu'nun iPhone modeli kontrol gerekli.
- **iOS Vibration API yok** — set bitiminde sadece visual flash + sound. Android'de full haptic.
- **Migration veri kaybı yok** ama set/RPE/ağırlık geriye dönük doldurulamaz.

## Ölçü başarı kriterleri

Hafta 2 sonu Bengisu antrenmanda:
1. Set bitirip log atması ≤3 saniye
2. Timer'ı manuel açmaya gerek yok
3. Telefon ekranı set arasında kapanmıyor
4. Önceki seans değerleri görünüyor — "ne kaldırmıştım" diye düşünmüyor
5. PR rozet alıyor (yeni 1RM tahmini)
6. Antrenman sonu özet kartı görünüyor

## Out of scope (sonraki haftalar)

- Cycle-aware antrenman matrisi (Hafta 3 — P0 #4)
- Bilim Modu toggle + ⓘ inline expand (Hafta 4 — P0 #6)
- Kas haritası heatmap (P1, sonraki sprint)
- Akşam check-in 30 sn (P0 #5, Hafta 4 ile birlikte)
- 5 orijinal fikir (Hacettepe Lab vb.) — P1, ayrı haftalar
- Push notification iznine bağlı özellikler (sen henüz karar vermedin)
