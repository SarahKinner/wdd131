const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["imposter", "limber"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
      hp: 48,
      attack: 48,
      defense: 48,
      special_attack: 48,
      special_defense: 48,
      speed: 48
    },
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    shinySprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
    isTransformed: false,
    transform: function() {
      this.isTransformed = !this.isTransformed;
      return this.isTransformed ? this.shinySprite : this.sprite;
    }
  };
  
  // DOM elements
  const nameEl = document.getElementById("name");
  const abilityEl = document.getElementById("ability");
  const dittoImg = document.getElementById("ditto");
  
  // Initial render
  nameEl.textContent = ditto.name.toUpperCase();
  abilityEl.textContent = `Ability: ${ditto.abilities[0]}`;
  dittoImg.src = ditto.sprite;
  
  // Toggle image on click
  dittoImg.addEventListener("click", () => {
    dittoImg.src = ditto.transform();
  });
  