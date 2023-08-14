-- Active: 1688703098162@@127.0.0.1@5432@ilogo-absen
CREATE TABLE departement(
    id SERIAL PRIMARY KEY,
    nama VARCHAR,
    user_manager_id INT
);

CREATE TABLE absen_masuk(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    photo VARCHAR,
    longitude VARCHAR,
    latitude VARCHAR,
    status VARCHAR,
    created_at TIMESTAMP
);

ALTER TABLE absen_masuk ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE cuti ADD FOREIGN KEY (kategori_id) REFERENCES kategori_cuti(id);
ALTER TABLE cuti ADD is_approval INT DEFAULT 0;
ALTER TABLE reimbusement ADD created_at TIMESTAMP;
CREATE TABLE absen_pulang (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    photo VARCHAR,
    longitude VARCHAR,
    latitude VARCHAR,
    status VARCHAR,
    created_at TIMESTAMP 
);

CREATE TABLE cuti (
    id SERIAL PRIMARY KEY,
    user_id INT,
    kategori VARCHAR,
    alasan VARCHAR,
    keterangan VARCHAR,
    photo VARCHAR,
    dari VARCHAR,
    sampai VARCHAR,
    status VARCHAR,
    created_at TIMESTAMP
);

CREATE TABLE reimbusement (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    kategori VARCHAR,
    perusahaan VARCHAR,
    event VARCHAR,
    tanggal TIMESTAMP,
    nilai VARCHAR,
    catatan VARCHAR,
    photo VARCHAR
);


SELECT * FROM absen_masuk WHERE absen_masuk.user_id = 1;

SELECT * FROM cuti WHERE cuti.id = 15;