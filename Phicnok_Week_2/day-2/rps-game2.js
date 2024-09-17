function rockPaperScissor(players, games) {
  let player1 = players[0];
  let player2 = players[1];

  let scores = { player1: 0, player2: 0 };

  for (let [p1, p2] of games) {
    if (p1 === p2) continue;

    let winner = "";

    if (p1 === "R") {
      winner = p2 === "S" ? "player1" : "player2";
    } else if (p1 === "S") {
      winner = p2 === "P" ? "player1" : "player2";
    } else {
      winner = p2 === "R" ? "player1" : "player2";
    }

    scores[winner]++;
  }

  if (scores.player1 === scores.player2) return "Tie";
  return scores.player1 > scores.player2 ? player1 : player2;
}

// Testing with custom player names
console.log(
  rockPaperScissor(
    ["Rifqi", "Andi"],
    [
      ["R", "R"],
      ["S", "S"],
    ]
  )
);
console.log(
  rockPaperScissor(
    ["Ujang", "Pandi"],
    [
      ["S", "R"],
      ["R", "S"],
      ["R", "R"],
    ]
  )
);

console.log(
  rockPaperScissor(
    ["Reza", "Fadlan"],
    [
      ["R", "P"],
      ["R", "S"],
      ["R", "P"],
    ]
  )
);
