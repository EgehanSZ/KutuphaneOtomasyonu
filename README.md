# Kütüphane Otomasyon Sistemi

Bu proje, kütüphane işlemlerini yönetmek amacıyla geliştirilmiş bir web tabanlı otomasyon sistemidir. Node.js, Express ve Prisma ile geliştirilmiş  React.js ve Ant Design ile oluşturulmuş kullanıcı arayüzü, PostgreSQL veritabanı kullanılarak kitap, yazar, yayın evi, kategori, üye ve ödünç işlemlerini yönetir.

## İçindekiler
1. [Proje Özeti](#proje-özeti)  
2. [Teknolojiler](#teknolojiler)  
3. [Kurulum](#kurulum)  
4. [Kullanım](#kullanım)  
5. [Proje Yapısı](#proje-yapısı)  
6. [Çevresel Değişkenler](#çevresel-değişkenler)  
7. [Veritabanı Betikleri](#veritabanı-betikleri)  
8. [Özellikler](#özellikler)  
9. [Rapor ve Dokümantasyon](#rapor-ve-dokümantasyon)  
10. [Katkıda Bulunma](#katkıda-bulunma)  
11. [Lisans](#lisans)  

## Proje Özeti
- API: Node.js + Express.js + Prisma ORM  
- Veritabanı: PostgreSQL  
- Frontend: React.js + Ant Design  
- Özellikle kitap ekleme, düzenleme, silme, çoktan çoğa ilişki (Kitap-Yazar), ödünç alma/iade işlemleri  

## Teknolojiler
- **Backend:** Node.js, Express.js, Prisma ORM  
- **Database:** PostgreSQL  
- **Frontend:** React.js, Ant Design, Axios  
- **Kimlik Doğrulama:** JWT (JSON Web Token)  
- **Diğer:** dotenv, cors  

## Kurulum
1. Depoyu klonlayın:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```  
2. Backend kurulumu:  
   ```bash
   cd backend
   npm install
   npx prisma migrate dev --name init
   npx prisma generate
   npm run dev           # http://localhost:3000
   ```  
3. Frontend kurulumu:  
   ```bash
   cd ../frontend
   npm install
   npm start             # http://localhost:3000
   ```  

## Kullanım
- **Kitap:** CRUD işlemleri  
- **Yazar:** CRUD işlemleri  
- **Kategori & Yayınevi:** CRUD işlemleri  
- **Üye:** Üyelik yönetimi  
- **Ödünç İşlemleri:** Kitap ödünç alma ve iade  

## Proje Yapısı
```
Kutuphane-Otomasyon/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── prisma/
│   └── schema.prisma
├── .env
└── README.md
```

## Çevresel Değişkenler
```
DATABASE_URL=postgresql://user:password@localhost:5432/librarydb
```

## Veritabanı Betikleri
SQL betikleri `prisma/seed.sql` veya `scripts/sql/` klasöründe yer alır.

## Özellikler
- Index, view ve trigger kullanımı  
- Çoktan çoğa ilişki: Kitap ve Yazar  
- Otomatik stok yönetimi  

  
## Lisans
MIT Lisansı  
