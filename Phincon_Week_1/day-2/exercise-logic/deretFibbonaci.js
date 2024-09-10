function deretFibonacci(n) {
  // Tulis kode di sini
  let result = [];

  for (let i = 0; i < n; i++) {
    // jika i sama dengan 0, maka push 0 ke dalam array result
    if (i === 0) {
      result.push(0);
      //   jika i sama dengan 1, maka push 1 ke dalam array result
    } else if (i === 1) {
      result.push(1);
    } else {
      // rumus deret fibonacci
      //   console.log("result", result);
      //   console.log("i", i);
      //   console.log("result[i - 1]", result[i - 1]);
      //   console.log("result[i - 2]", result[i - 2]);
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

// Ekspektasi hasil:
console.log(deretFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
