function calculateScoreGame(games) {
  // declare an object to store the scores of the players
  let scores = { Abigail: 0, Benson: 0 };

  for (let [Abigail, Benson] of games) {
    // If both players choose the same, continue to the next game
    if (Abigail === Benson) continue;

    // Determine the winner of the game
    let winner = "";

    // Winner conditions
    if (Abigail === "R") {
      // if Abigail chooses Rock, Benson should choose Scissors to win
      winner = Benson === "S" ? "Abigail" : "Benson";
      //   if Abigail chooses Scissors, Benson should choose Paper to win
    } else if (Abigail === "S") {
      // if Abigail chooses Paper, Benson should choose Rock to win
      winner = Benson === "P" ? "Abigail" : "Benson";
      //   if Abigail chooses Paper, Benson should choose Scissors to win
    } else {
      // if Abigail chooses Rock, Benson should choose Paper to win
      winner = Benson === "R" ? "Abigail" : "Benson";
    }

    // Increment the score of the winner
    scores[winner]++;
  }

  //   if the scores are equal, return "Tie", otherwise return the winner
  if (scores.Abigail === scores.Benson) return "Tie";
  return scores.Abigail > scores.Benson ? "Abigail" : "Benson";
}

// example
console.log(
  calculateScoreGame([
    ["R", "R"],
    ["S", "S"],
  ])
); // Expected "Tie"
console.log(
  calculateScoreGame([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScoreGame([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
); // Expected  "Abigail"
console.log(
  calculateScoreGame([
    ["R", "R"],
    ["S", "S"],
  ])
); // Expected "Tie"
console.log(
  calculateScoreGame([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScoreGame([
    ["S", "R"],
    ["P", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScoreGame([
    ["S", "S"],
    ["S", "P"],
    ["R", "S"],
    ["S", "R"],
    ["R", "R"],
  ])
); // Expected "Abigail"
console.log(
  calculateScoreGame([
    ["S", "R"],
    ["S", "R"],
    ["S", "R"],
    ["R", "S"],
    ["R", "S"],
  ])
); // Expected "Benson"
