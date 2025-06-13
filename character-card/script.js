const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    attacked() {
      if (this.health >= 20) {
        this.health -= 20;
      } else {
        alert('Character Died');
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
  };
  
  // DOM element references
  const imageEl = document.querySelector('.image');
  const nameEl = document.querySelector('.name');
  const classEl = document.getElementById('class');
  const levelEl = document.getElementById('level');
  const healthEl = document.getElementById('health');
  const logEl = document.getElementById('log');
  const attackedBtn = document.getElementById('attacked');
  const levelUpBtn = document.getElementById('levelup');
  
  // Update all displayed data
  function updateDisplay() {
    imageEl.src = character.image;
    imageEl.alt = character.name;
    nameEl.textContent = character.name;
    classEl.textContent = character.class;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
  }
  
  // Button Event Listeners
  attackedBtn.addEventListener('click', () => {
    const previousHealth = character.health;
    character.attacked();
    updateDisplay();
    if (character.health < previousHealth) {
      logEl.textContent = `${character.name} took 20 damage!`;
    }
  });
  
  levelUpBtn.addEventListener('click', () => {
    character.levelUp();
    updateDisplay();
    logEl.textContent = `${character.name} leveled up!`;
  });
  
  // Initial setup on page load
  updateDisplay();
  