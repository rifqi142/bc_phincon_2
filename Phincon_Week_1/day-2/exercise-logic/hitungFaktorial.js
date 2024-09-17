function hitungFaktorial(n) {
  // // Tulis kode di sini
  // let hasil = 1;

  // //  membuat perulangan untuk menghitung faktorial
  // for (let i = n; i > 0; i--) {
  //   // mengkali setiap angka yang ada di dalam perulangan
  //   hasil *= i;
  // }

  // return hasil;

  if (typeof n !== "number") {
    return "Input harus berupa angka";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }

  return n;
}

// Ekspektasi hasil:
console.log(hitungFaktorial(-5)); // 120
console.log(hitungFaktorial(0)); // 1
