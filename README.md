# AeroIntel Atlas

AeroIntel Atlas, NATO ve BRICS ulkelerinin acik kaynak hava gucu envanterlerini
etkilesimli dunya haritasi uzerinde incelemek icin hazirlanmis statik bir web
projesidir. Site Turkce ve Ingilizce arayuz, ulke hava gucu paneli, ucak detay
paneli, muhimmat bilgi kartlari, kullanici profili ve AI karsilastirma analizi
icerir.

## Calistirma

1. Proje klasorunu ac.
2. `index.html` dosyasini Chrome, Edge veya Firefox ile ac.
3. Ek kurulum, veritabani veya sunucu gerekmez.

Not: Uygulamanin temel dosyalari ve gorselleri yereldir. Dis baglantilar sadece
kaynak ve gorsel kredi linkleri icindir.

## Ana Ozellikler

- NATO ulkeleri mavi, BRICS uyeleri kirmizi gosterilen zoom destekli dunya haritasi.
- Ulkeye tiklayinca acilan hava gucu profili ve scroll destekli ucak envanteri.
- Ucak seciminde acilan detay paneli, teknik bilgiler, kaynak guveni ve gorsel kredi alani.
- Ucaklara gore listelenen tiklanabilir muhimmatlar ve muhimmat gorselleri.
- Turkce / Ingilizce dil secimi.
- Kayit, giris, sifremi unuttum, profil ve ayarlar prototipi.
- Favori, karsilastirma ve kategori bazli AI karsilastirma analizi.
- Kaynaklar ve hesap detaylari iceren kontrol menusu.

## Rapor Dosyalari

Ders teslimine ait raporlar yerel `docs/` klasorundedir. Bu klasor kisisel
bilgiler icerdiginden GitHub deposuna eklenmez.

## Teslim Icin Gerekli Dosyalar

Flash bellekte asagidaki dosya ve klasorler bulunmalidir:

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `docs/`
- `README.md`

`tools/` klasoru raporlari ve gorsel kataloglarini yeniden uretmek icin
yardimci scriptler icerir. Siteyi calistirmak icin gerekli degildir ve GitHub
deposuna eklenmez. Hocaya kaynak kodu tam teslim edilecekse yerel klasorden
ayrica alinabilir.

## Teknik Notlar

Kullanici sistemi ve AI analizi ders projesi prototipi olarak tarayici tarafinda
calisir. Kayit/giris bilgileri localStorage icinde tutulur; gercek uretim
surumunde backend, veritabani ve e-posta dogrulama eklenmelidir.
