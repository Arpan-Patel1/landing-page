const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
  const themeToggle = document.querySelector(".themeToggle");
  const body = document.getElementsByTagName("body")[0];
  themeToggle.classList.toggle("themeToggleDark");

  if (themeToggle.dataset.theme === "dark") {
    themeToggle.dataset.theme = "light";
    themeToggle.innerHTML = "L";
    document.getElementById("illustration").src =
      "images/illustration-editor-mobile.svg";
    document.getElementById("phones").src = "images/illustration-phones.svg";
    document.getElementById("laptop").src =
      "images/illustration-laptop-mobile.svg";
  } else {
    themeToggle.dataset.theme = "dark";
    themeToggle.innerHTML = "D";
    document.getElementById("illustration").src =
      "images/illustration-editor-mobile-dark.svg";
    document.getElementById("phones").src =
      "images/illustration-phones-dark.svg";
    document.getElementById("laptop").src =
      "images/illustration-laptop-mobile-dark.svg";
  }

  body.classList.toggle("darkTheme");
});
