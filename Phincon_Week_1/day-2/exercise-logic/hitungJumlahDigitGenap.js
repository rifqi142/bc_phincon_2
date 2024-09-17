function hitungJumlahDigitGenap(angka) {
  // Tulis kode di sini
  //   mengubah angka menjadi string, lalu di split
  //    contoh: 1234567890 => [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
  let arr = angka.toString().split("");

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr);
    if (arr[i] % 2 === 0) {
      result++;
    }
  }

  return result;
}

// Ekspektasi hasil:
// hitungJumlahDigitGenap(1234567890) => 5

console.log(hitungJumlahDigitGenap(1234567890)); // 5
