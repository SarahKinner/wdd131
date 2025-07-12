document.addEventListener("DOMContentLoaded", () => {
    const characters = [
      {
        name: "HS Sam",
        image: "images/AnthroHSSAM.png",
        link: "character-page.html",
        tags: ["Anthro", "HS AU"]
      },
      {
        name: "Sam",
        image: "images/AnthroSam.png",
        link: "character2.html",
        tags: ["Anthro", "Anthro AU"]
      },
      {
        name: "Tom",
        image: "images/AnthroTom.png",
        link: "character3.html",
        tags: ["Anthro", "Anthro AU"]
      },
      {
        name: "Sona",
        image: "images/Sona.png",
        link: "character4.html",
        tags: ["Anthro", "Sona"]
      },
      {
        name: "Pibling Sam",
        image: "images/PiblingSam.png",
        link: "character5.html",
        tags: ["Human", "Ghost", "SwapSwap AU"]
      },
      {
        name: "SS Creator",
        image: "images/SwapSwapCreator.png",
        link: "character6.html",
        tags: ["Humanoid", "SwapSwap AU"]
      },
      {
        name: "Ruby",
        image: "images/Ruby.png",
        link: "character7.html",
        tags: ["Human", "Real World"]
      },
      {
        name: "The Creator",
        image: "images/AnthroCreator.png",
        link: "character8.html",
        tags: ["Anthro", "Anthro AU", "Avatar"]
      },
      {
        name: "Matt Green",
        image: "images/Matt.png",
        link: "character9.html",
        tags: ["Human", "Real World"]
      }
    ];
  
    const grid = document.getElementById("character-grid");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const sortSelect = document.getElementById("sort");
  
    let currentQuery = ""; // track current search term
  
    function createCharacterProfile(char) {
      const profile = document.createElement("div");
      profile.className = "character-profile";
  
      const img = document.createElement("img");
      img.src = char.image;
      img.alt = `${char.name} Image`;
      img.className = "character-image";
  
      const nameButton = document.createElement("a");
      nameButton.href = char.link;
      nameButton.className = "character-name-button";
      nameButton.textContent = char.name;
  
      const tagsDiv = document.createElement("div");
      tagsDiv.className = "character-tags";
  
      char.tags.forEach(tagText => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tagText;
        tagsDiv.appendChild(tag);
      });
  
      profile.appendChild(img);
      profile.appendChild(nameButton);
      profile.appendChild(tagsDiv);
  
      return profile;
    }
  
    function renderCharacters(characterList) {
      grid.innerHTML = "";
      characterList.forEach(char => {
        const profileElement = createCharacterProfile(char);
        grid.appendChild(profileElement);
      });
    }
  
    function filterAndSortCharacters() {
      let filtered = characters.filter(char => {
        const nameMatch = char.name.toLowerCase().includes(currentQuery);
        const tagMatch = char.tags.some(tag =>
          tag.toLowerCase().includes(currentQuery)
        );
        return nameMatch || tagMatch;
      });
  
      const sortValue = sortSelect.value;
  
      if (sortValue === "az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === "za") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortValue === "newest") {
        filtered = filtered.slice().reverse(); // simulate "newest first"
      }
      // "oldest" is default order
  
      renderCharacters(filtered);
    }
  
    function handleSearch() {
      currentQuery = searchInput.value.trim().toLowerCase();
      filterAndSortCharacters();
    }
  
    // Initial render
    renderCharacters(characters);
  
    // Search events
    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
  
    // Sort event
    sortSelect.addEventListener("change", filterAndSortCharacters);
  });
  
  