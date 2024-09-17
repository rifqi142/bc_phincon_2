function hitungKarakterUnik(str) {
  // Tulis kode di sini
  let result = 0;
  let arr = str.split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    result++;
  }
  return new Set(str).size;

  // cara dua
  // return str.split("").filter((item, index, arr) => arr.indexOf(item) === index)
  //   .length;

  // cara tiga
  // let karakterUnik = new Set();
  // for (let i = 0; i < str.length; i++) {
  //   karakterUnik.add(str[i]);
  // }
  // return karakterUnik.size;
}

// Ekspektasi hasil:
// hitungKarakterUnik("hello world") => 8
console.log(hitungKarakterUnik("hello world")); // 8
