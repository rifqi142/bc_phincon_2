function hitungPangkat(angka, pangkat) {
  // Tulis kode di sini
  let result = 1;

  // membuat perulangan untuk menghitung pangkat
  for (let i = 0; i < pangkat; i++) {
    // mengkali setiap angka yang ada di dalam perulangan
    result *= angka;
  }
  return result;
}

// function hitungPangkat(angka, pangkat) {
//   // return Math.pow(angka, pangkat);

//   return new Array(pangkat).fill(angka).reduce((acc, curr) => acc * curr);
// }

// Ekspektasi hasil:
console.log(hitungPangkat(2, 3)); // 8
console.log(hitungPangkat(5, 2)); // 25