function cariBilanganMunculSekali(arr) {
  // Tulis kode di sini
  let result = [];

  //   melakukan perulangan untuk mengecek bilangan yang muncul sekali
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    //   melakukan perulangan untuk mengecek bilangan yang sama
    for (let j = 0; j < arr.length; j++) {
      //   melakukan pengecekan bilangan yang sama
      //   jika bilangan sama, maka count akan bertambah
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Ekspektasi hasil:
// cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]) => [1, 4]

console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5])); // [1, 4]
