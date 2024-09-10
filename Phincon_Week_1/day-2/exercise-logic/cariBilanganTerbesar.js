function cariBilanganTerbesar(arr) {
  // Tulis kode di sini
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

// Ekspektasi hasil:
// cariBilanganTerbesar([3, 7, 2, 9, 1]) => 9
console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));
