function hitungHurufKapital(kalimat) {
  // Tulis kode di sini
  //   melakukan split pada kalimat
  let jumlahKapital = 0;

  //  melakukan perulangan untuk mengecek huruf kapital
  for (let i = 0; i < kalimat.length; i++) {
    //   melakukan pengecekan huruf kapital
    //  dengan menggunakan kode ASCII
    if (kalimat[i] >= "A" && kalimat[i] <= "Z") {
      jumlahKapital++;
    }
  }
  return jumlahKapital;
}

// Ekspektasi hasil:
console.log(hitungHurufKapital("Saya Belajar JavaScript Di DICODING"));
