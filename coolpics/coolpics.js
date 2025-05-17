document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    let prevWidth = window.innerWidth;
  
    // Toggle menu visibility
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("hide");
    });
  
    // Handle window resizing
    function handleResize() {
      const currentWidth = window.innerWidth;
      if (prevWidth >= 1000 && currentWidth < 1000) {
        menu.classList.add("hide");
      } else if (prevWidth < 1000 && currentWidth >= 1000) {
        menu.classList.remove("hide");
      }
      prevWidth = currentWidth;
    }
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    // Modal image viewer
    const galleryImages = document.querySelectorAll(".gallery img");
  
    galleryImages.forEach(img => {
      img.addEventListener("click", function () {
        const smallSrc = img.getAttribute("src");
        let largeSrc = smallSrc;
  
        if (smallSrc.includes("norris-sm.jpeg")) {
          largeSrc = smallSrc.replace("-sm.jpeg", "-full.jpeg");
        }
  
        // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        overlay.style.zIndex = "9998";
        document.body.appendChild(overlay);
  
        // Create dialog
        const dialog = document.createElement("dialog");
        dialog.style.cssText = `
          position: fixed;
          inset: 0;
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: hidden;
        `;
  
        // Create large image
        const imgElement = document.createElement("img");
        imgElement.src = largeSrc;
        imgElement.alt = "Large view";
        imgElement.style.cssText = `
          width: 500px;
          height: 500px;
          object-fit: contain;
          display: block;
        `;
  
        // Create close button
        const closeBtn = document.createElement("button");
        closeBtn.className = "close-viewer";
        closeBtn.textContent = "×";
        closeBtn.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 2em;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 10000;
        `;
  
        // Append elements
        dialog.appendChild(imgElement);
        dialog.appendChild(closeBtn);
        document.body.appendChild(dialog);
        dialog.showModal();
  
        // Close modal
        closeBtn.addEventListener("click", () => {
          dialog.close();
        });
  
        dialog.addEventListener("click", (e) => {
          if (e.target === dialog) {
            dialog.close();
          }
        });
  
        dialog.addEventListener("close", () => {
          overlay.remove();
          dialog.remove();
        });
      });
    });
  });
  