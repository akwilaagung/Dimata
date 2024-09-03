// =====Menggunakan Fungsi Sort===== //
function mencariNilaiDenganSort(nilai) {
  nilai.sort((a, b) => a - b);

  let min = nilai[0];
  let max = nilai[nilai.length - 1];
  let sum = nilai.reduce((acc, val) => acc + val, 0);
  let avg = sum / nilai.length;
  return { min, max, avg };
}

let nilai = [4, 5, 7, 2, 8, 1, 9, 3, 6];
let stats = mencariNilaiDenganSort(nilai);
console.log(stats);

// =====Tidak Menggunakan Fungsi Sort===== //
function mencariNilaiTanpaSort(nilai1) {
  if (nilai1.lenght === 0) return null;

  let min = nilai1[0];
  let max = nilai1[0];
  let sum = nilai1[0];

  for (let i = 1; i < nilai1.length; i++) {
    if (nilai1[i] < min) min = nilai1[i];
    if (nilai1[i] > max) max = nilai1[i];
    sum += nilai1[i];
  }
  let avg = sum / nilai1.length;
  return { min, max, avg };
}
let nilai1 = [4, 5, 7, 2, 8, 1, 9, 3, 6];
let hasil1 = mencariNilaiTanpaSort(nilai1);
console.log(hasil1);

// =====Mengubah Array Menjadi String===== //
function arrayToString(kalimat) {
  let result2 = "";
  for (let i = 0; i < kalimat.length; i++) {
    if (i === kalimat.length - 1) {
      result2 += "dan " + kalimat[i];
    } else {
      i < kalimat.length - 1;
      result2 += kalimat[i] + ", ";
    }
  }
  return result2;
}

const kata = ["Halo", "Dunia"];
const result3 = arrayToString(kata);
console.log(result3);

// =====Mengubah String Menjadi Array===== //
let data1 = "Halo Dunia";
function stringToArray(string) {
  let result4 = [];
  for (let i = 0; i < data1.length; i++) {
    if (result4.length < 1) {
      result4.push(data1);
    } else {
      break;
    }
  }
  return result4;
}

let result5 = stringToArray();
console.log(result5);

// =====Menjumlahkan Array===== //
function menjumlahkanArray(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  console.log(result);
  return result;
}

data1 = [1, 2, 3];
data2 = [3, 2, 1];

const test = menjumlahkanArray(data1, data2);
console.log(test);

// =====Menambahkan Data Baru Pada Array===== //
function menambahkanDataArray(awal, akhir) {
  if (!awal.includes(akhir)) {
    awal.push(akhir);
  }
}

let resource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
menambahkanDataArray(resource, 11);
console.log(resource);

// =====Filter Array Yang Hanya Menampilkan Angka Genap===== //
function arrayNumber(arrayOfNumber) {
  let result6 = [];
  for (let i = 0; i < arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] % 2 === 0) {
      result6.push(arrayOfNumber[i]);
    }
  }
  return result6;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil3 = arrayNumber(array);
console.log(`bilangan genap : ${hasil3}`);

// =====Membuat Array Dengan Integer Yang Bukan Array dan Memiliki Ukuran Maksimum===== //
function masukanInteger(maxSize, ...nilaiInteger) {
  const hasilArray = [];
  for (let i = 0; i < nilaiInteger.length; i++) {
    if (hasilArray.length < maxSize) {
      hasilArray.push(nilaiInteger[i]);
    } else {
      break;
    }
  }

  return hasilArray;
}

const maxSize = 5;
const Int = masukanInteger(maxSize, 5, 10, 24, 3, 6, 11);
console.log(Int);

// =====Menggabungkan 2 Array===== //
function menggabungkanArray(Data1, Data2) {
  let newHasil = [];

  for (let i = 0; i < Data1.length; i++) {
    newHasil.push(Data1[i]);
  }

  for (let i = 0; i < Data2.length; i++) {
    newHasil.push(Data2[i]);
  }
  return newHasil;
}

let arrayY = [1, 2, 3, 4];
let arrayX = [5, 6, 7, 8];

const hasil4 = menggabungkanArray(arrayY, arrayX);
console.log(hasil4);

// =====Menemukan Angka Yang Sama Dalam Sebuah Array===== //
function duplicate(resource1) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of resource1) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicates];
}

const result1 = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 4];
const result = duplicate(result1);

console.log("Nilai Duplicate:", result);

// =====Mencari Perbedaan Dari 2 Buah Array===== //
function cariPerbedaan(arr1, arr2) {
  let difference = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr1[i])) difference.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) difference.push(arr2[i]);
  }
  return difference;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const output = cariPerbedaan(array1, array2);
console.log("Perbedaan:", output);

// =====Mengembalikan Tipe Data Primitif===== //
function mengembalikanDataPrimitif(arr) {
  function isPrimitive(value) {
    const type = typeof value;
    return (
      value === null ||
      type === "string" ||
      type === "number" ||
      type === "boolean" ||
      value === undefined
    );
  }
  let Primitif = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrimitive(arr[i])) Primitif.push(arr[i]);
  }
  return Primitif;
}

let arr = [1, "string", null, false, undefined, 2, "yes", undefined];
let sauce = mengembalikanDataPrimitif(arr);

console.log("hasil:", sauce);

// =====Angka Terkecil Kedua===== //
function arrayAngka(number) {
  let uniqueArr = [];
  for (let i = 0; i < number.length; i++) {
    if (!uniqueArr.includes(number[i])) {
      uniqueArr.push(number.length[i]);
    }
  }
  if (uniqueArr.length < 2) {
    return undefined;
  }
  for (let i = 0; i < uniqueArr.length - 1; i++) {
    for (let j = i + 1; j < uniqueArr.length; j++) {
      if (uniqueArr[i] > uniqueArr[j]) {
        let temp = uniqueArr[i];
        uniqueArr[i] = uniqueArr[j];
        uniqueArr[j] = temp;
      }
    }
  }
  return uniqueArr[1];
}

let angka1 = [10, 20, 30, 10, 20, 40, 50, 70, 100];
console.log(arrayAngka(angka1));

// =====Tipe Data Campuran===== //
function mixedNumber(arr) {
  return arr
    .filter((item) => typeof item === "number")
    .reduce((a, b) => a + b, 0);
}

let mixedTypeArray = [1, "text", 3, true, 5, null, 7, undefined];

console.log(mixedNumber(mixedTypeArray));

// =====Mengembalikan Jumlah Nilai Duplkat===== //
function countDuplicate(arr) {
  let counts = {};
  let duplicateCount = 0;
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === 2) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}

let duplicateNumbersArray = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(countDuplicate(duplicateNumbersArray));

// =====Permainan Batu, Gunting, Kertas===== //
function BatuGuntingKertas(pilihanPemain) {
  const choices = ["batu", "gunting", "kertas"];
  const botChoices = choices[Math.floor(Math.random() * choices.length)];

  console.log(`Pemain choice: ${pilihanPemain}`);
  console.log(`Bot Choices: ${botChoices}`);

  if (pilihanPemain === botChoices) {
    return "Seri";
  }
  if (
    (pilihanPemain === "batu" && botChoices === "gunting") ||
    (pilihanPemain === "gunting" && botChoices === "kertas") ||
    (pilihanPemain === "kertas" && botChoices === "batu")
  ) {
    return "Menang";
  } else {
    return "Kalah";
  }
}

console.log(BatuGuntingKertas("gunting"));
