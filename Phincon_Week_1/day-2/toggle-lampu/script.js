function toggleLamp() {
  var lampImage = document.getElementById("lampImage");
  var lampButton = document.getElementById("lampButton");

  if (lampImage.src.includes("lampu-nyala.png")) {
    lampImage.src = "lampu-mati.png";
    lampButton.textContent = "Nyalakan Lampu";
  } else {
    lampImage.src = "lampu-nyala.png";
    lampButton.textContent = "Matikan Lampu";
  }
}
