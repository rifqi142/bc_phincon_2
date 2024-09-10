function cekTahunKabisat(tahun) {
  // jika tahun habis dibagi 4, maka tahun tersebut adalah tahun kabisat
  // if (tahun % 4 === 0) {
  //   if (tahun % 100 === 0) {
  //     if (tahun % 400 === 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }

  // jika tahun habis dibagi 4 dan tidak habis dibagi 100,
  // atau habis dibagi 400, maka tahun tersebut adalah tahun kabisat
  return (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
}

// Ekspektasi hasil:
console.log(cekTahunKabisat(2020)); // true
console.log(cekTahunKabisat(2021)); // false
console.log(cekTahunKabisat(2023)); // false
console.log(cekTahunKabisat(2024)); // true
