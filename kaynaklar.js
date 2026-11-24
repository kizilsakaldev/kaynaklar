// Ücretsiz kaynaklar listesi. Yeni bir şey eklemek için ilgili diziye bir nesne ekle.
// Prompt:  { baslik, aciklama, prompt, etiket, tarih }
// Dosya:   { baslik, aciklama, dosya (göreli yol ya da tam URL), boyut, etiket, tarih }
// En yeni üstte görünür (tarih alanına göre sıralanır).

window.KAYNAKLAR = {
  promptlar: [
    // Örnek:
    // {
    //   baslik: "Gemini ile tarih animasyonu",
    //   aciklama: "Bölüm 2'deki stickman videosunun tam promptu.",
    //   prompt: "Buraya prompt metni...",
    //   etiket: "Gemini",
    //   tarih: "2026-11-25"
    // }
  ],
  rehberler: [
    // { baslik: "6 GB ekran kartında video üretimi", aciklama: "Adım adım kurulum.", dosya: "dosyalar/6gb-video.pdf", boyut: "2,4 MB", etiket: "PDF", tarih: "2026-11-26" }
  ],
  sesler: [
    // { baslik: "Whoosh paketi #1", aciklama: "20 geçiş sesi, WAV. Kendi ürettiğim, ticari kullanım serbest.", dosya: "https://github.com/.../releases/download/sfx-1/whoosh-1.zip", boyut: "18 MB", etiket: "WAV", tarih: "2026-11-27" }
  ]
};
