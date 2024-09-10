function hitungKombinasi(n, r) {
  // Tulis kode di sini
  let result = 1;

  // menghitung n! / (n - r)!
  for (let i = n; i > n - r; i--) {
    result *= i;
  }

  //   menghitung r!
  for (let i = r; i > 0; i--) {
    result /= i;
  }

  return result;
}

// Ekspektasi hasil:

console.log(hitungKombinasi(5, 2));
console.log(hitungKombinasi(10, 3));
