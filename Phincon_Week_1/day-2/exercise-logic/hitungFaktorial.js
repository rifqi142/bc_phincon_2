function hitungFaktorial(n) {
  // Tulis kode di sini
  let hasil = 1;

  //  membuat perulangan untuk menghitung faktorial
  for (let i = n; i > 0; i--) {
    // mengkali setiap angka yang ada di dalam perulangan
    console.log(hasil, i);
    hasil *= i;
  }

  return hasil;
}

// Ekspektasi hasil:
console.log(hitungFaktorial(5)); // 120
console.log(hitungFaktorial(0)); // 1
