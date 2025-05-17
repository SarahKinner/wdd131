document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
  
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("hide");
    });
  });
  