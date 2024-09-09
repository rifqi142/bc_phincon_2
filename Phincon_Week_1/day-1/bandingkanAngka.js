const bandingkanAngka = (angka1, angka2) => {
  //   if (angka1 === angka2) {
  //     return -1;
  //   }
  //   return angka1 < angka2;

  return angka1 === angka2 ? -1 : angka1 < angka2;
};

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(8, 5));
console.log(bandingkanAngka(8, 8));
