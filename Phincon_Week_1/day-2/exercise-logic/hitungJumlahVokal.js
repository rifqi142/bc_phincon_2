function hitungJumlahVokal(kata) {
  // Tulis kode di sini
  let count = 0;

  //   membuat objek yang berisi huruf vokal
  const vowels = { a: 1, i: 1, u: 1, e: 1, o: 1 };

  //   membuat perulangan untuk menghitung jumlah huruf vokal
  for (let letter of kata.toLowerCase()) {
    //   jika letter ada di dalam objek vowels, maka count +1
    if (vowels[letter]) {
      count++;
    }
  }

  return count;
}

// Ekspektasi hasil:
// hitungJumlahVokal("javascript") => 3
console.log(hitungJumlahVokal("javascript"));
