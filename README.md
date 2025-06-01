# GrowSmart Backend

Proyek ini terdiri dari dua backend terpisah:

1. **Hapi.js Backend (Node.js)**  
   Menangani API utama aplikasi dan menghubungkan frontend dengan backend ML.

2. **Flask Backend (Python)**  
   Menyediakan API prediksi machine learning menggunakan model TensorFlow (.h5) dan scaler (.npy).

---

## Struktur Proyek

backend-growsmart/
│
├── hapi-backend/
├── lib/
│ │ └── supabase.js
│ ├── routes/
│ │ └── index.js
    └── auth.js
    └── children.js
    └── prediction.js
│ ├── package.json
│ └── .env
  └── index.js
│
├── flask-backend/
│ ├── model/
│ │ ├── model.h5
│ │ ├── scaler_mean.npy
│ │ └── scaler_std.npy
│ ├── app.py
│ ├── requirements.txt
│ ├── venv/
│ └── .env
│
└── README.md
---

## Setup Backend Hapi.js

### 1. Masuk ke folder `hapi-backend`

```
cd hapi-backend
2. Install dependencies



npm install
3. Konfigurasi .env
Buat file .env dan isi URL backend Flask, contoh:

ini


FLASK_API_URL=http://localhost:5000
PORT=3000
4. Jalankan server Hapi.js



npm start
Server akan berjalan di http://localhost:3000.

Setup Backend Flask
1. Masuk ke folder flask-backend



cd flask-backend
2. Buat virtual environment dan aktifkan



python3 -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows
3. Install dependencies

pip install -r requirements.txt

4. Letakkan file model di folder model/:
model.h5 — model TensorFlow

scaler_mean.npy — mean scaler

scaler_std.npy — std scaler

5. Jalankan server Flask



python app.py
Server Flask default berjalan di http://localhost:5000.

Cara Kerja
Frontend memanggil API di Hapi.js.

Hapi.js akan memanggil API Flask untuk prediksi ML.

Flask memuat model TensorFlow dan scaler, mengolah input, dan mengembalikan prediksi.

Deployment
Deploy backend Hapi.js dan Flask sebagai dua layanan terpisah di platform seperti Render, Heroku, atau Vercel (hanya untuk Hapi.js).

Pastikan environment variable di setiap layanan sudah disesuaikan.

Gunakan URL public Flask API di konfigurasi Hapi.js (FLASK_API_URL).

Contoh Endpoint
Hapi.js (Node.js)
GET / — Cek server berjalan

POST /predict — Meneruskan data ke Flask dan mengembalikan hasil prediksi

Flask (Python)
POST /predict — Menerima data fitur dan mengembalikan hasil prediksi model

Kontak
Jika ada pertanyaan atau butuh bantuan, hubungi saya.

Terima kasih sudah menggunakan GrowSmart Backend!