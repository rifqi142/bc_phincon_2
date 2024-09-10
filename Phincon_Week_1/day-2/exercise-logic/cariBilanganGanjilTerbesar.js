function cariBilanganGanjilTerbesar(arr) {
  // Tulis kode di sini
  let result = 0;

  //   Membuat perulangan untuk mencari bilangan ganjil terbesar
  for (let i = 0; i < arr.length; i++) {
    // jika arr[i] habis dibagi 2 dan arr[i] lebih besar dari result, maka result sama dengan arr[i]
    if (arr[i] % 2 !== 0 && arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
}

// Ekspektasi hasil:
// cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9]) => 9
console.log(cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
