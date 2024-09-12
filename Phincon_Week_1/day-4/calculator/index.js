function toggleTheme() {
  console.log("Theme toggled");
  let styleCss = document.getElementById("style");
  let themeIcon = document.getElementById("theme");

  if (themeIcon.src.includes("dark-mode.svg")) {
    themeIcon.src = "/Phincon_Week_1/day-4/calculator/assets/light-mode.svg";
    styleCss.href = "/Phincon_Week_1/day-4/calculator/style2.css";
  } else {
    themeIcon.src = "/Phincon_Week_1/day-4/calculator/assets/dark-mode.svg";
    styleCss.href = "/Phincon_Week_1/day-4/calculator/style.css";
  }
}
