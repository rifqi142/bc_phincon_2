function hitungRataRata(arr) {
  // Tulis kode di sini
  let result = 0;

  //   membuat perulangan untuk menghitung rata-rata
  for (let i = 0; i < arr.length; i++) {
    // menambahkan semua nilai arr[i] ke result
    console.log(arr[i]);
    result += arr[i];
  }

  //   membagi result dengan panjang arr
  return result / arr.length;
}

// Ekspektasi hasil:
// hitungRataRata([1, 2, 3, 4, 5]) => 3

console.log(hitungRataRata([1, 2, 3, 4, 5]));
