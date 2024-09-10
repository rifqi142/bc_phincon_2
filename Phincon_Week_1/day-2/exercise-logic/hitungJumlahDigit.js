function hitungJumlahDigit(angka) {
  // Tulis kode di sini
  let result = 0;

  //   while (angka > 0) {
  //     result += angka % 10;
  //     angka = Math.floor(angka / 10);
  //   }

  // ubah angka menjadi string agar bisa diakses per karakter
  let numString = angka.toString();
  //   membuat perulangan untuk menjumlahkan setiap karakter
  for (let i = 0; i < numString.length; i++) {
    // menambahkan setiap karakter yang sudah diubah menjadi number
    result += Number(numString[i]);
  }

  return result;
}

// Ekspektasi hasil:

console.log(hitungJumlahDigit(12345)); // 15
console.log(hitungJumlahDigit(9876)); // 30
