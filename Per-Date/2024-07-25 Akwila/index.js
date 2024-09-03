// =====Triagle===== //
/* 
 1. Buat fuction dengan nama triagle
 2. "let angka" berfungsi untuk menyimpan angka yang akan di iniliasi mulai dari angka 1
 3. Loop baris (i) berfungsi untuk mengatur jumlah baris yang dicetak
 4. Loop baris (j) berfungsi untuk mengatur jumlah angka yang akan di cetak pada baris (i)
*/

function triagle(height) {
  let angka = 1;
  for (let i = 1; i <= height; i++) {
    let output = " ";
    for (let j = 1; j <= i; j++) {
      output += angka.toString().padStart(2, "0") + " ";
      angka++;
    }
    console.log(output.trim());
  }
}

triagle(5);

// =====Kelipatan===== //

/* 
 1. Buat fuction dengan nama Kelipatan
 2. Buat loop lalu buat fungsi "if" dengan beberapa kondisi
 3. angka yang merupakan kelipatan 3 dan 5 akan di cetak dengan "tiga lima"
 4. angka yang merupakan kelipatan 3 akan di cetak dengan "tiga"
 5. angka yang merupakan kelipatan 5 akan di cetak dengan "lima"
*/

function Kelipatan(N) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "tiga lima");
    } else if (i % 3 === 0) {
      console.log(i, "tiga");
    } else if (i % 5 === 0) {
      console.log(i, "lima");
    } else {
      console.log(i);
    }
  }
}

Kelipatan(15);

// =====Body Mass Index (BMI)===== //
/* 
 1. Buat fuction dengan nama Body Mass Index (BMI)
 2. Deklarasikan rumus untuk menghitung BMI yaitu "const BMI = weight / (height * height);"
 3. Menampilkan beberapa fungsi dengan kondisi yang berbeda
 4. Deklarasikan hasil dari Body Mass Index (BMI)
*/

function BMI(weight, height) {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "berat kurang";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    return "kelebihan berat badan";
  } else if (BMI >= 30.0 && BMI <= 34.9) {
    return "sangat kelebihan berat badan";
  } else if (BMI >= 34.9) {
    return "obesitas";
  }
}

const hasil = BMI(600, 3);
console.log(hasil);

// =====arrayOfNumber===== //
/*
 1. Buat fuction dengan nama arrayOfNumber 
 2. metode "filter()" berfunsi untuk menghasilkan array baru yang berisikan
 elemen baru yang sudah lulus uji dari fungsi callback
 3. fungsi "callback" akan memisahkan elemen yang memiliki nilai true dan false
 setelah itu elemen yang mengembalikan nilai true dimasukkan ke dalam array baru
 4. hasil dari arrayOfNumber
*/

function array(arrayOfNumber) {
  return arrayOfNumber.filter((angka) => angka % 2 === 0);
}

const arrayAsli = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayBaru = array(arrayAsli);
console.log(arrayBaru);

// =====String to Array Of String===== //
/*
 1. Buat fuction dengan nama arrayString 
 2. Metode "split()" menghasilkan substring dari proses pemisahan 
 yang di kenali sebagai "Delimeter"
 3. Deklarasikan hasil dari String to Array Of String
*/

function arrayString(String, Delimeter = " ") {
  return String.split(Delimeter);
}
const contoh = "Hello World";
const arrayOfString = arrayString(contoh);
console.log(arrayOfString);
