document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    let prevWidth = window.innerWidth;
  
    // Toggle menu visibility when button clicked
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("hide");
    });
  
    function handleResize() {
      const currentWidth = window.innerWidth;
  
      if (prevWidth >= 1000 && currentWidth < 1000) {
        // Resized down from large to small: hide menu
        menu.classList.add("hide");
      } else if (prevWidth < 1000 && currentWidth >= 1000) {
        // Resized up from small to large: show menu
        menu.classList.remove("hide");
      }
      // If resizing inside the same range, do nothing (keep user toggle)
  
      prevWidth = currentWidth;
    }
  
    handleResize(); // initial check on page load
    window.addEventListener("resize", handleResize);
  });
  