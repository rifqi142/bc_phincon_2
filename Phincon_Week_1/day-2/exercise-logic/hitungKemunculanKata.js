function hitungKemunculanKata(kalimat, kata) {
  // Tulis kode di sini

  //   membuat variabel arr yang berisi kalimat yang sudah di split
  let arr = kalimat.split(" ");

  let result = 0;

  //   Membuat perulangan untuk mencari kata yang sama
  for (let i = 0; i < arr.length; i++) {
    // jika arr[i] sama dengan kata, maka result bertambah 1
    if (arr[i] === kata) {
      result++;
    }
  }

  // cara 2
  // return kalimat.split(kata).length - 1;

  return result;
}

// Ekspektasi hasil:
// hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka") => 2

console.log(
  hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka")
); // 2
