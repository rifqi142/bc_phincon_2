function konversiSuhu(suhu, jenis) {
  // Tulis kode di sini
  let result = 0;

  //   jika jenis suhu adalah Celcius, maka rumusnya adalah (suhu * 9) / 5 + 32
  if (jenis === "C") {
    result = (suhu * 9) / 5 + 32;
    //  jika jenis suhu adalah Fahrenheit, maka rumusnya adalah ((suhu - 32) * 5) / 9
  } else if (jenis === "F") {
    result = ((suhu - 32) * 5) / 9;
  } else {
    return "Masukkan jenis suhu yang benar";
  }

  return result;
}

// Ekspektasi hasil:
console.log(konversiSuhu(30, "C")); // 86
console.log(konversiSuhu(86, "F")); // 30
