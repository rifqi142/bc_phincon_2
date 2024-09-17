function hitungJumlahKata(kalimat) {
  // Tulis kode di sini

  // return kalimat.split(" ").length;
  //   jika kalimat kosong, maka return 0
  if (kalimat.length === 0) {
    return 0;
  }

  let result = 0;

  //   membuat perulangan untuk menghitung jumlah kata
  for (let i = 0; i < kalimat.length; i++) {
    // jika kalimat[i] sama dengan spasi, maka result bertambah 1
    console.log(kalimat[i]);
    if (kalimat[i] === " ") {
      result++;
    }
  }

  return result + 1;
}

// Ekspektasi hasil:
console.log(hitungJumlahKata("Saya suka belajar JavaScript")); // 4
console.log(hitungJumlahKata("")); // 0
