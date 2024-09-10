function cariBilanganHilang(arr) {
  // Variabel untuk menyimpan bilangan yang hilang
  let total = 0;

  // Melakukan perulangan dari 1 hingga panjang array + 1
  for (let i = 1; i <= arr.length + 1; i++) {
    // Mengecek apakah bilangan i ada di dalam array
    if (arr.indexOf(i) === -1) {
      // Jika bilangan i tidak ditemukan, simpan bilangan tersebut
      total = i;
    }
  } 
  return total;
}

// Ekspektasi hasil:
console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7])); // 4
