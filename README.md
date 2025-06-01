# 🌱 GrowSmart Backend

GrowSmart Backend terdiri dari **dua layanan backend terpisah** yang saling terintegrasi untuk mendukung fitur prediksi stunting:

1. **Hapi.js Backend (Node.js)**  
   Menangani API utama aplikasi, autentikasi, dan menjadi jembatan antara frontend dan backend ML.

2. **Flask Backend (Python)**  
   Menyediakan endpoint prediksi berbasis Machine Learning (TensorFlow).

---

## 📁 Struktur Direktori

backend-growsmart/
├── hapi-backend/
│ ├── lib/
│ │ └── supabase.js
│ ├── routes/
│ │ ├── index.js
│ │ ├── auth.js
│ │ ├── children.js
│ │ ├── prediction.js
│ │ └── flask.js
│ ├── .env
│ ├── package.json
│ └── index.js
│
├── flask-backend/
│ ├── model/
│ │ ├── model.h5
│ │ ├── scaler_mean.npy
│ │ ├── scaler_std.npy
│ │ └── normal_values.csv
│ ├── app.py
│ ├── predict_stunting.py
│ ├── requirements.txt
│ ├── .env
│ └── venv/
│
└── README.md

---

## 🚀 Setup Hapi.js Backend

### 1. Masuk ke direktori `hapi-backend`
cd hapi-backend

### 2. Install dependencies
npm install

### 3. Konfigurasi file .env
Buat file .env dan isi seperti ini:
FLASK_API_URL=http://localhost:5000
PORT=3000

### 4. Jalankan server Hapi.js
npm start
📌 Server berjalan di: http://localhost:3000

🧠 Setup Flask Backend
1. Masuk ke direktori flask-backend
bash
Salin
Edit
cd flask-backend
2. Buat virtual environment dan aktifkan
bash
Salin
Edit
python3 -m venv venv
source venv/bin/activate       # Linux/macOS
venv\Scripts\activate          # Windows
3. Install dependencies
bash
Salin
Edit
pip install -r requirements.txt
4. Letakkan file model di folder model/
model.h5 — Model TensorFlow

scaler_mean.npy — Mean dari scaler

scaler_std.npy — Std dev dari scaler

normal_values.csv — Nilai referensi TB/BB normal

5. Jalankan server Flask
bash
Salin
Edit
python app.py
📌 Server berjalan di: http://localhost:5000

🔄 Cara Kerja
Frontend memanggil API di Hapi.js.

Hapi.js meneruskan data ke Flask untuk prediksi.

Flask memuat model TensorFlow, melakukan prediksi, dan mengembalikan hasil ke Hapi.js.

Hapi.js mengirimkan hasil ke frontend.

☁️ Deployment
Deploy Hapi.js dan Flask sebagai dua layanan terpisah di platform seperti:

Render

Railway

Heroku

Vercel (untuk Hapi.js saja)

⚠️ Pastikan:

Menggunakan URL publik Flask di .env Hapi.js (FLASK_API_URL)

Environment variabel disesuaikan untuk masing-masing layanan

📡 Contoh Endpoint
🔷 Hapi.js (Node.js)
Method	Endpoint	Deskripsi
GET	/docs	Swagger API docs
GET	/api/checking-flask	Cek koneksi ke server Flask
POST	/api/predict	Prediksi cepat tanpa simpan data
POST	/api/predictions	Prediksi dan simpan hasil (dengan auth)

🟢 Flask (Python)
Method	Endpoint	Deskripsi
GET	/status	Cek status server Flask
POST	/predict	Kirim data stunting (TB, BB, umur, dsb.) → hasil prediksi

📬 Kontak
Jika ada pertanyaan atau membutuhkan bantuan, silakan hubungi saya melalui email atau GitHub Issues pada repositori ini.

Terima kasih sudah menggunakan GrowSmart Backend! 🌱💡


