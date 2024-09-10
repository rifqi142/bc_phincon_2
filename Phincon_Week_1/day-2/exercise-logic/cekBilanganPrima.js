function cariBilanganPrima(n) {
  // Tulis kode di sini
  let bilanganPrima = [];

  for (let i = 2; i <= n; i++) {
    let isPrima = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrima = false;
        // jika bilangan bukan prima, maka hentikan perulangan
        break;
      }
    }

    if (isPrima) {
      bilanganPrima.push(i);
    }
  }
  return bilanganPrima;
}

// Ekspektasi hasil:
console.log(cariBilanganPrima(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
