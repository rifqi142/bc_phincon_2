document.addEventListener("DOMContentLoaded", function () {
  const barsIcon = document.getElementById("bars-icon");
  const menu = document.getElementById("menu");

  barsIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
