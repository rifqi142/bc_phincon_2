function cekPalindrom(kata) {
  // Tulis kode di sini
  let result = true;

  //   membuat perulangan untuk membandingkan setiap karakter
  for (let i = 0; i < kata.length; i++) {
    //  jika karakter pertama tidak sama dengan karakter terakhir, maka kata bukan palindrom
    if (kata[i] !== kata[kata.length - 1 - i]) {
      // jika kondisi terpenuhi, maka result akan bernilai false
      result = false;
      break;
    }
  }
  return result;
}

// Ekspektasi hasil:

console.log(cekPalindrom("katak")); // true
console.log(cekPalindrom("malam")); // true
console.log(cekPalindrom("hello")); // false
