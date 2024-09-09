const balikKata = (kata) => {
  let reversed = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }

  return reversed;
};

console.log(balikKata("halo"));
console.log(balikKata("rifqi"));
console.log(balikKata("javascript"));
