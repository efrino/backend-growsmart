# 🌱 GrowSmart Backend

GrowSmart Backend terdiri dari dua layanan terpisah:

1. **[Hapi.js Backend (Node.js)](https://github.com/efrino/hapi-backend.git)** – API utama untuk mengelola user, data anak, prediksi, dan koneksi ke backend ML.
   - 🌐 [Production](https://hapi-backend-36vb.onrender.com)
2. **[Flask Backend (Python)](https://github.com/efrino/flask-backend.git)** – API khusus untuk melakukan prediksi stunting menggunakan model TensorFlow.
   - 🌐 [Production](https://flask-backend-1s35.onrender.com/)
---

## 🗂 Struktur Proyek

```
backend-growsmart/
├── hapi-backend/               # Backend utama (Node.js + Hapi.js)
│   ├── lib/
│   │   └── supabase.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── auth.js
│   │   ├── children.js
│   │   ├── prediction.js
│   │   └── flask.js
│   ├── .env
│   ├── package.json
│   └── index.js
│
├── flask-backend/              # Backend prediksi ML (Flask)
│   ├── model/
│   │   ├── model.h5
│   │   ├── scaler_mean.npy
│   │   ├── scaler_std.npy
│   │   └── normal_values.csv
│   ├── app.py
│   ├── predict_stunting.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
│
└── README.md
```

---

## 🚀 Setup Hapi.js Backend

### 1. Masuk ke folder `hapi-backend`

```bash
cd hapi-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Konfigurasi file `.env`

Buat file `.env` dan isi seperti berikut:

```env
FLASK_API_URL=http://localhost:5000
PORT=3000
```

### 4. Jalankan server Hapi.js

```bash
npm start
```

📌 Server Hapi.js berjalan di: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Setup Flask Backend

### 1. Masuk ke folder `flask-backend`

```bash
cd flask-backend
```

### 2. Buat virtual environment dan aktifkan

```bash
python3 -m venv venv
source venv/bin/activate       # Untuk Linux/macOS
venv\Scripts\activate          # Untuk Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Letakkan file model ke dalam folder `model/`:

- `model.h5` — Model TensorFlow
- `scaler_mean.npy` — Nilai mean untuk normalisasi
- `scaler_std.npy` — Nilai std dev untuk normalisasi
- `normal_values.csv` — Nilai referensi TB/BB untuk analisis tambahan

### 5. Jalankan server Flask

```bash
python app.py
```

📌 Server Flask berjalan di: [http://localhost:5000](http://localhost:5000)

---

## 🔄 Alur Kerja Sistem

```text
Frontend → Hapi.js → Flask → Hapi.js → Frontend
```

1. Frontend memanggil endpoint di Hapi.js.
2. Hapi.js meneruskan data ke Flask untuk prediksi.
3. Flask memproses input menggunakan model TensorFlow.
4. Hasil dikembalikan ke Hapi.js → lalu dikirim ke frontend.

---

## ☁️ Deployment

Kamu bisa deploy **secara terpisah**:

- **Hapi.js Backend**: Render, Railway, Heroku, atau Vercel
🌐 https://hapi-backend-36vb.onrender.com

- **Flask Backend**: Render, Railway, Heroku
🌐 https://flask-backend-1s35.onrender.com


⚠️ Jangan lupa:

- Gunakan URL publik Flask di environment `.env` milik Hapi.js:

  ```env
FLASK_API_URL=https://flask-backend-1s35.onrender.com/status
  ```

- Pastikan environment variable disesuaikan di masing-masing platform.

---

## 📡 Contoh Endpoint

### 🔷 Hapi.js (Node.js)

| Method | Endpoint               | Deskripsi                                 |
|--------|------------------------|-------------------------------------------|
| GET    | `/`                    | Cek status server                         |
| GET    | `/docs`                | Dokumentasi Swagger API                   |
| GET    | `/api/checking-flask`  | Cek koneksi Hapi.js ke Flask              |
| POST   | `/api/predict`         | Prediksi cepat tanpa simpan data          |
| POST   | `/api/predictions`     | Prediksi & simpan hasil (dengan login)    |

### 🟢 Flask (Python)

| Method | Endpoint     | Deskripsi                                       |
|--------|--------------|-------------------------------------------------|
| GET    | `/status`    | Cek status server Flask                         |
| POST   | `/predict`   | Kirim data (TB, BB, umur, dsb) → hasil prediksi |

---

## 🧑‍💻 Kontak & Kontribusi

Jika kamu memiliki pertanyaan, bug report, atau ingin berkontribusi:

- 📧 Email: [efrinowep@gmail.com](mailto:efrinowep@gmail.com)
- 🐙 Repo: [GitHub - backend-growsmart](https://github.com/efrino/backend-growsmart.git)

---

Terima kasih telah menggunakan **GrowSmart Backend**!
Bersama kita bantu pencegahan stunting sedini mungkin. 🌱📊
