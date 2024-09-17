function cariBilanganTerbesar(arr) {
  // Tulis kode di sini
  // cara 1
  // return Math.max(...arr);
  // cara 2
  // return arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
  // cara 3
  // let result = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > result) {
  //     result = arr[i];
  //   }
  // }
  // return result;
}

// Ekspektasi hasil:
// cariBilanganTerbesar([3, 7, 2, 9, 1]) => 9
console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));
