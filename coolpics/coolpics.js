document.addEventListener("DOMContentLoaded", function () {
    // --- MENU TOGGLE ---
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    let prevWidth = window.innerWidth;
  
    // Toggle menu visibility when button is clicked
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("hide");
    });
  
    // Handle responsive menu visibility on window resize
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
  
    // --- MODAL IMAGE VIEWER ---
    const galleryImages = document.querySelectorAll(".gallery img");
  
    galleryImages.forEach(img => {
      img.addEventListener("click", function () {
        const smallSrc = img.getAttribute("src");
        let largeSrc = smallSrc;
  
        // Use "-full." version if "-sm." exists
        if (smallSrc.includes("-sm.")) {
          largeSrc = smallSrc.replace("-sm.", "-full.");
        }
  
        // Create dark overlay behind modal
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        overlay.style.zIndex = "9998";
        document.body.appendChild(overlay);
  
        // Create dialog element (modal)
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
  
        // Container for image and close button
        const container = document.createElement("div");
        container.style.position = "relative";
        container.style.display = "inline-block";
  
        // Large image element
        const imgElement = document.createElement("img");
        imgElement.src = largeSrc;
        imgElement.alt = "Large view";
        imgElement.style.cssText = `
          width: 500px;
          height: 500px;
          object-fit: contain;
          display: block;
          margin: auto;
        `;
  
        // Close button element
        const closeBtn = document.createElement("button");
        closeBtn.className = "close-viewer";
        closeBtn.textContent = "×";
        closeBtn.style.cssText = `
          position: absolute;
          top: 40px;
          right: -20px;
          font-size: 2em;
          background: rgba(0,0,0,0.4);
          border: none;
          color: white;
          cursor: pointer;
          z-index: 10000;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          padding: 0;
        `;
  
        // Append everything
        container.appendChild(imgElement);
        container.appendChild(closeBtn);
        dialog.appendChild(container);
        document.body.appendChild(dialog);
        dialog.showModal();
  
        // Close modal when clicking close button
        closeBtn.addEventListener("click", () => {
          dialog.close();
        });
  
        // Close modal when clicking outside the image
        dialog.addEventListener("click", (e) => {
          if (e.target === dialog) {
            dialog.close();
          }
        });
  
        // Remove modal and overlay when closed
        dialog.addEventListener("close", () => {
          overlay.remove();
          dialog.remove();
        });
      });
    });
  });
  
  
  // Note to self: Try to have the enlarged image centered no matter the size of the windows later on