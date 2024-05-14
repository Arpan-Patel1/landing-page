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

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (hamburger.dataset.menu === "close") {
    hamburger.dataset.menu = "open";
    hamburger.src = "images/icon-close.svg";
    document.getElementsByTagName("nav")[0].style.scale = "1 1";
  } else {
    hamburger.dataset.menu = "close";
    hamburger.src = "images/icon-hamburger.svg";
    document.getElementsByTagName("nav")[0].style.scale = "0 0";
  }
});

const products = document.getElementsByClassName("headingDrop");
const productContainers = document.getElementsByClassName("productContainer");
let openContainer = null;
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", (e) => {
    console.log(e.target.dataset);
    let arrow = products[i].children[1];
    arrow.classList.toggle("rotate");
    if (openContainer) {
      openContainer.classList.toggle("productContainerClose");
    }
    productContainers[i].classList.toggle("productContainerClose");
    openContainer = productContainers[i];
  });
}
