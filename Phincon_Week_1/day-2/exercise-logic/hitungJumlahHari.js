function hitungJumlahHari(tanggal1, tanggal2) {
  // Tulis kode di sini
  let date1 = new Date(tanggal1);
  let date2 = new Date(tanggal2);

  //   math.abs = mengembalikan nilai absolut
  //  getTime = mengembalikan waktu dalam milisecond
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());

  //   math.ceil = pembulatan ke atas
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}

// Ekspektasi hasil:
// hitungJumlahHari("2023-01-01", "2023-12-31") => 364

console.log(hitungJumlahHari("2023-01-01", "2023-12-31")); // 364
