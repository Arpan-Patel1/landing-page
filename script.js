const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
  const themeToggle = document.querySelector(".themeToggle");
  const body = document.getElementsByTagName("body")[0];
  themeToggle.classList.toggle("themeToggleDark");

  if (themeToggle.dataset.theme === "dark") {
    themeToggle.dataset.theme = "light";
    themeToggle.innerHTML = "L";
  } else {
    themeToggle.dataset.theme = "dark";
    themeToggle.innerHTML = "D";
  }

  body.classList.toggle("darkTheme");
});
