/* =====Mencari Luas Persegi Panjang===== */

/*   Luas Persegi Panjang 
 1. Deklarasikan Panjang Persegi
 2. Deklarasikan Lebar Persegi
 3. Deklarasikan Luas Persegi Rumus Mencari Luas Persegi
*/
let panjang = 10;
let lebar = 5;
let luas;
luas = panjang * lebar;
console.log(luas);

/* ======Mencari Keliling Persegi Panjang===== */

/*
 1. Deklarasikan Panjang Persegi
 2. Deklarasikan Lebar Persegi
 3. Deklarasikan Keliling Persegi dan Rumus Mencari Keliling Persegi
 */

let panjang1 = 15;
let lebar1 = 5;
let Keliling;
Keliling = 2 * (panjang1 + lebar1);
console.log(Keliling);

/* ======Mencari Diameter,Keliling,dan Luas Lingkaran===== */

/*  
 1. Deklarasikan Panjang Jari-Jari
 2. Deklarasikan Diameter
 3. Deklarasikan Diameter dan Rumus Mencari Diameter Lingkaran
 4. Deklarasikan Keliling dan Rumus Mencari Keliling Lingkaran
 5. Deklarasikan Luas dan Rumus Mencari Luas Lingkaran
*/

// Diameter Lingkaran
let jarijari = 5;
let diameter;
diameter = 2 * jarijari;
console.log(diameter);

// Keliling Lingkaran
const pi = 3.14;
let kelilingLingkaran;
kelilingLingkaran = pi * diameter;
console.log(kelilingLingkaran);

// Luas Lingkaran
const pi1 = 3.14;
let luasLingkaran;
luasLingkaran = pi1 * jarijari * jarijari;
console.log(luasLingkaran);

/* ======Mencari Sudut segitiga===== */

/*
 1. Deklarasikan Sudut yang belom di ketahui
 2. Deklarasikan Rumus mencari Sudut Segitiga 
 */
let sudutA = 35;
let sudutB = 55;
let sudutC = 180 - (sudutA + sudutB);
console.log(sudutC);

/* ======Mencari Selisih Hari pada Tanggal===== */

/*
 1. Deklarasikan Rumus Selisih Waktu
 2. Deklarasikan Selisih Hari
 3. Deklarasikan milidetPerhari
 4. Deklarasikan selisihmilidet
 */
const tanggal1 = new Date("2023-01-01");
const tanggal2 = new Date("2023-12-31");
const milidetPerhari = 24 * 60 * 60 * 1000;
const selisihmilidet = tanggal2 - tanggal1;
const selisihHari = selisihmilidet / milidetPerhari;
console.log(selisihHari);

/* ======Convert Hari Menjadi Tahun===== */

/*
 1. Deklarasikan Jumlah hari yang mau di hitung
 2. Deklarasikan banyak hari dalam satu tahun
 3. Deklarasikan banyak hari dalam satu bulan
 4. Deklarasikan Hasil Convert Hari Menjadi Tahun 
 */
const totalHari = 800;
const totalhariPertahun = 365;
const totalhariPerbulan = 30;
const tahun = Math.floor(totalHari / totalhariPertahun);
let sisaHari = totalHari % totalhariPertahun;
const bulan = Math.floor(sisaHari / totalhariPerbulan);
sisaHari = sisaHari % totalhariPerbulan;
console.log(tahun + " Tahun " + bulan + " Bulan " + sisaHari + " Hari ");
