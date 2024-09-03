/* ------------MENKONVERSI CELSIUS KE FAHRENHEIT----------- */
/* 
1. deklarasikan tinggi suhu yang ingin di konversi
2. deklarasikan penampungan untuk mengubah suhu dari celsius ke fahrenheit
3. tuliskan rumus di tempat penampungan yang sudah di deklarasikan 
*/

let celsius = 25;
let farenheit = (celsius * 9) / 5 + 32;
console.log(farenheit + " " + "fahrenheit");

/* -----MEMBUAT SUPAYA BISA MEMERIKSA ANGKA GANJIL GENAP-------- */
/* 
1. deklarasikan angka yang ingin di deklarasikan
2, buatlah kondisi dengan menggunakan if, dengan kondisi jika angka yang dideklarasikan jika
   habis di bagi menjadi 2 dan sama dengan 0 maka nilai tersebut genap, jika tidak, nilai tersebut ganjil
*/

let angka1 = 21;
if (angka1 % 2 === 0) {
  console.log("nilai genap");
} else {
  console.log("nilai ganjil");
}

/* --------------MENCARI BILANGAN PRIMA--------------- */
/* 
1. mendeklarasikan nilai yang akan dicari bilangan prima nya
2. deklarasikan variabel prima dan atur default nya menjadi true
3. buat kondisi dimana jika nilai yang dimasukan lebih kecil atau sama dengan satu maka atur prima menjadi false
4. buat kondisi lagi dimana jika angka yang dimasukan lebih kecil atau sama dengan 3 maka atur prima menjadi true 
   karena merupakan bilangan prima.
5. buat kondisi 
*/
const number = 29;

let prima = true;

if (number <= 1) {
  prima = false;
} else if (number <= 3) {
  prima = true;
} else if (number % 2 === 0 || number % 3 === 0) {
  prima = false;
} else {
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      prima = false;
      break;
    }
  }
}

console.log(
  `Bilangan ${number} adalah ${
    prima ? "bilangan prima" : "bukan bilangan prima"
  }`
);

/* 
--------------MENCARI SUM-------------
1. deklarasikan nilai yang ingin di cari 
2. deklarasikan variable sum dengan rumus mencari sum 
*/
const Nilai = 4;
const sum = (Nilai * (Nilai + 1)) / 2;

console.log(`Jumlah dari 1 sampai ${Nilai} adalah ${sum}`);

/* 
----------MENCARI BILANGAN FAKTORIAL---------------
1. deklarasikan variabel angka 
2. deklarasikan factorial 
*/
const angka2 = 5;
let factorial = 1;

for (let i = 1; i <= angka2; i++) {
  factorial *= i;
}

console.log(`Faktorial dari ${angka2} adalah ${factorial}`);

/* --------MENCARI NILAI FIBONACCI----------*/

/* 
 1. deklarasikan nilai 'N' 
 2. pada line 'if' jika nilai N adalah 1 atau lebih maka code akan 
 menambahkan 0 ke array fibonacci
 3. nilai pada posisi 'i' dihitung dengan menjumlahkan dua nilai sebelumnya 
 dalam deret fibonacci[i - 1] dan fibonacci[i - 2]
*/
const N = 14;
let fibonacci = [];

if (N >= 1) fibonacci.push(0);
if (N >= 2) fibonacci.push(1);

for (let i = 2; i < N; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Bilangan Fibonacci pertama sebanyak ${N} adalah:`);
console.log(fibonacci.join(", "));
