# Portfolio — Satria Prasda Wibawa

Website portfolio statis (HTML/CSS/JS, tanpa framework) siap diupload ke GitHub Pages.

## Struktur File
```
portfolio/
├── index.html         # struktur halaman
├── style.css          # tampilan (warna navy + emas seperti desain asli)
├── script.js           # data skill, tools, proyek (edit di sini)
├── foto.jpg            # foto profil
├── proposal.jpg        # sampul proposal tugas akhir
├── logo-polines.png    # logo Politeknik Negeri Semarang
├── logo-smk.png        # logo SMK Muhammadiyah Kudus
└── logo-hartono.png    # logo CV Hartono Mitra Audio Equipment
```

Semua gambar sudah termasuk. Kalau salah satu file gambar hilang/rusak, halaman tetap aman karena otomatis menampilkan placeholder.

## Cara Edit Data
Buka `script.js`, ubah isi array `skills`, `tools`, `interests`, dan `projects`.
Untuk teks lain (Tentang Saya, Pendidikan, Pengalaman Magang, Tugas Akhir, kontak), edit langsung di `index.html`.

## Cara Upload ke GitHub Pages

1. **Buat repository baru** di GitHub, misal `portfolio`.
2. Upload semua file di folder ini (index.html, style.css, script.js, foto.jpg) ke repository tersebut.
   - Bisa lewat web GitHub: klik **Add file → Upload files**, drag semua file, lalu **Commit changes**.
   - Atau lewat terminal:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/USERNAME/portfolio.git
     git push -u origin main
     ```
3. Di repository, buka **Settings → Pages**.
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit, situs akan tersedia di:
   ```
   https://USERNAME.github.io/portfolio/
   ```

## Catatan
- Pastikan **semua file** (termasuk gambar `.jpg`/`.png`) ikut diupload dalam satu folder yang sama dengan `index.html`, jangan hanya file HTML-nya saja.
- Bisa juga pakai nama repo `USERNAME.github.io` supaya URL menjadi domain utama kamu (tanpa `/portfolio`).
