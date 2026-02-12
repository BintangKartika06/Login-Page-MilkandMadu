## 🥛 Milk and Madu - Login Page (React + TypeScript)
Selamat datang di repositori Milk and Madu. Proyek ini adalah implementasi halaman login modern yang dibangun menggunakan framework React dan TypeScript untuk memastikan keamanan tipe data dan pengembangan yang lebih terstruktur.

## 📝 Deskripsi Singkat
Proyek ini bertujuan untuk menciptakan antarmuka login yang aman dan responsif. Dengan menggunakan TypeScript, kode menjadi lebih mudah dipelihara dan meminimalisir kesalahan runtime.

## Fitur Utama:

Type Safety: Menggunakan TypeScript untuk validasi props dan state.

Component-Based: Arsitektur UI yang modular dan dapat digunakan kembali.

Modern Styling: Desain yang bersih dan responsif.

## 🚀 Cara Menjalankan Program
Pastikan Anda sudah menginstal Node.js dan npm (atau yarn) di komputer Anda.

1. Clone Repositori
Clone project dan masuk ke branch develop:

```
git clone -b develop https://github.com/BintangKartika06/Login-Page-MilkandMadu.git
cd Login-Page-MilkandMadu
```
2. Instal Dependensi
Jalankan perintah berikut untuk mengunduh semua library yang dibutuhkan:

```
npm install
# atau
yarn install
```
3. Menjalankan Server Pengembangan
Setelah instalasi selesai, jalankan aplikasi dengan perintah:

```
npm run dev
# atau
npm start
```
Aplikasi akan berjalan secara otomatis di browser Anda (biasanya di http://localhost:5173 atau http://localhost:3000).

## 🛠️ Tech Stack
React.js: Library utama untuk membangun antarmuka pengguna.

TypeScript: Superset JavaScript untuk pengetikan statis.

CSS/SASS/Tailwind: (Sesuaikan dengan library styling yang Anda pakai).

Vite/CRA: Tooling untuk build project.

## Struktur Folder Utama
```
.
└── LOGIN PAGE/
    ├── src/
    │   ├── assets/
    │   │   └── #Media (logo, image, & vector)
    │   ├── components/
    │   │   ├── auth/
    │   │   │   ├── loginform.tsx
    │   │   │   ├── registerform.tsx
    │   │   │   └── sociallogins.tsx
    │   │   ├── commons/
    │   │   │   ├── caraousel.tsx
    │   │   │   └── InputField.tsx
    │   │   ├── hooks
    │   │   ├── styles/
    │   │   │   ├── button.css
    │   │   │   └── index.css
    │   │   └── types/
    │   │       ├── auth.ts
    │   │       └── images.d.ts
    │   ├── app.tsx
    │   └── index.tsx
    ├── .gitignore
    ├── extensions.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── tsconfig.json
```
