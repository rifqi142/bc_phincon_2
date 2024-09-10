function hitungKemunculanKarakter(str) {
  // Tulis kode di sini
  let result = {};

  //   perulangan untuk mengecek kemunculan karakter
  for (let i = 0; i < str.length; i++) {
    // jika karakter sudah ada di result, maka akan bertambah
    // jika belum ada, maka akan dimasukkan ke result
    if (result[str[i]]) {
      console.log(result[str[i]]);
      console.log(str[i]);
      result[str[i]]++;
    } else {
      // jika karakter belum ada di result, maka akan dimasukkan ke result
      result[str[i]] = 1;
    }
  }
  return result;
}

// Ekspektasi hasil:
// hitungKemunculanKarakter("hello world") => {h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1}
console.log(hitungKemunculanKarakter("hello world"));
