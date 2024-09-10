function hitungKataUnik(kalimat) {
  // Tulis kode di sini
  let uniqueWords = [];

  //   melakukan split pada kalimat
  let words = kalimat.split(" ");

  //   melakukan perulangan untuk mengecek kata unik
  for (let i = 0; i < words.length; i++) {
    //   melakukan pengecekan kata unik dengan menggunakan indexOf
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.length;
}

// Ekspektasi hasil:
// hitungKataUnik("Saya suka makan nasi suka minum air") => 6

console.log(hitungKataUnik("Saya suka makan nasi suka minum air")); // 6
