function toggleTheme() {
  console.log("Theme toggled");
  let styleCss = document.getElementById("style");
  let themeIcon = document.getElementById("theme");

  if (themeIcon.src.includes("dark-mode.svg")) {
    themeIcon.src = "assets/light-mode.svg";
    styleCss.href = "style2.css";
  } else {
    themeIcon.src = "assets/dark-mode.svg";
    styleCss.href = "style.css";
  }
}
