//  Anagram adalah susunan ulang huruf-huruf dari sebuah kata,
// tau kalimat sehingga membentuk kata atau kalimat baru
// contoh: listen -> silent, dormitory -> dirty room

function cekAnagram(kata1, kata2) {
  // Tulis kode di sini
  //   melakukan split pada kata1 dan kata2
  // contoh : listen -> [ 'l', 'i', 's', 't', 'e', 'n' ]
  let arr1 = kata1.split("");
  let arr2 = kata2.split("");

  //   melakukan sort pada arr1 dan arr2
  //   contoh : [ 'l', 'i', 's', 't', 'e', 'n' ] -> [ 'e', 'i', 'l', 'n', 's', 't' ]
  let sort1 = arr1.sort();
  let sort2 = arr2.sort();

  //   melakukan join pada sort1 dan sort2
  //   contoh : [ 'e', 'i', 'l', 'n', 's', 't' ] -> eilnst
  let join1 = sort1.join("");
  let join2 = sort2.join("");

  if (join1 === join2) {
    return true;
  } else {
    return false;
  }
}

// Ekspektasi hasil:

console.log(cekAnagram("listen", "silent")); // true
console.log(cekAnagram("hello", "world")); // false
console.log(cekAnagram("hello", "olleh")); // true
