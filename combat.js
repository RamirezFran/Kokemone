//Contains abilitie data
const abilities = {
  tackle: {
    power: 20,
    accuracy: 100,
    type: "normal",
    description: "Weak normal atack",
    status: [false],
    crit: 0,
  },
  sandAtack: {
    power: 0,
    accuracy: 100,
    type: "ground",
    description: "Reduces accuracy by throwing sand.",
    status: [true, 100, "accuracy", 10],
    crit: -256,
  },
  wingAtack: {
    power: 60,
    accuracy: 100,
    type: "flying",
    description: "Strong atack using wings",
    status: [false],
    crit: 0,
  },
  roost: {
    power: 0,
    accuracy: 999,
    type: "flying",
    description: "Recovers half hp",
    status: [false],
    roost: true,
    crit: -256,
  },
  growl: {
    power: 0,
    accuracy: 100,
    type: "normal",
    description: "Reduces enemy attack",
    status: [true, 100, "atack", 0.1],
    crit: -256,
  },
  thunder: {
    power: 110,
    accuracy: 70,
    type: "electric",
    description: "Strong atack that may miss",
    status: [true, 40, "speed", 10],
    crit: 0,
  },
  gust: {
    power: 20,
    accuracy: 100,
    type: "flying",
    description: "Weak gust of air",
    status: [false],
    crit: 0,
  },
  doubleTeam: {
    power: 0,
    accuracy: 999,
    type: "normal",
    description: "Raise Pokemon's evasivenes",
    status: [true, 100, "accuracy", 10],
    crit: -256,
  },
  swordDance: {
    power: 0,
    accuracy: 999,
    type: "normal",
    description: "Raise Pokemon's atack",
    status: [true, 100, "atack", 10],
    crit: -256,
  },
  dragonPulse: {
    power: 85,
    accuracy: 100,
    type: "dragon",
    description:
      "The foe is attacked with a shock wave generated by the user’s gaping mouth.",
    status: [false],
    crit: 0,
  },
  blazeKick: {
    power: 85,
    accuracy: 90,
    type: "fire",
    description: "The foe is attacked with a fiery kick.",
    status: [false],
    crit: 25,
  },
  megaKick: {
    power: 120,
    accuracy: 75,
    type: "normal",
    description: "The foe is attacked with a powerfull kick.",
    status: [false],
    crit: 0,
  },
};

//Contains pokemon data
const pokes = {
  pidgey: {
    name: "pidgey",
    lvl: 10,
    maxhp: 100,
    hp: 100,
    atacks: ["tackle", "sandAtack", "wingAtack", "gust"],
    stats: {
      atack: 1.1,
      defence: 10,
      speed: 10,
      accuracy: 0,
    },
    type: ["normal", "flying"],
    playerSprite: "../galeria/Kokemone/pidgey-back.png",
    enemySprite: "../galeria/Kokemone/pidgey-front.png",
  },
  pikachu: {
    name: "pikachu",
    lvl: 44,
    maxhp: 100,
    hp: 100,
    atacks: ["tackle", "growl", "thunder", "doubleTeam"],
    stats: {
      atack: 1.1,
      defence: 10,
      speed: 20,
      accuracy: 0,
    },
    type: ["electric"],
    playerSprite: "../galeria/Kokemone/pika-back.png",
    enemySprite: "../galeria/Kokemone/pikachu-front.png",
  },
  rayquaza: {
    name: "rayquaza",
    lvl: 80,
    maxhp: 500,
    hp: 500,
    atacks: ["dragonPulse", "doubleTeam", "thunder", "roost"],
    stats: {
      atack: 1.3,
      defence: 40,
      speed: 30,
      accuracy: 0,
    },
    type: ["flying", "dragon"],
    playerSprite: "../galeria/Kokemone/rayquaza-back.png",
    enemySprite: "../galeria/Kokemone/rayquaza-front.png",
  },
  blaziken: {
    name: "blaziken",
    lvl: 50,
    maxhp: 250,
    hp: 250,
    atacks: ["blazeKick", "megaKick", "doubleTeam", "roost"],
    stats: {
      atack: 1.2,
      defence: 10,
      speed: 25,
      accuracy: 0,
    },
    type: ["fire", "fighting"],
    playerSprite: "../galeria/Kokemone/blaziken-back.png",
    enemySprite: "../galeria/Kokemone/blaziken-front.png",
  },
  kabutops: {
    name: "kabutops",
    lvl: 50,
    maxhp: 250,
    hp: 250,
    atacks: ["blazeKick", "megaKick", "doubleTeam", "roost"],
    stats: {
      atack: 1.2,
      defence: 10,
      speed: 25,
      accuracy: 0,
    },
    type: ["fire", "fighting"],
    playerSprite: "../galeria/Kokemone/blaziken-back.png",
    enemySprite: "../galeria/Kokemone/blaziken-front.png",
  },
  wopper: {
    name: "wopper",
    lvl: 50,
    maxhp: 250,
    hp: 250,
    atacks: ["blazeKick", "megaKick", "doubleTeam", "roost"],
    stats: {
      atack: 1.2,
      defence: 10,
      speed: 25,
      accuracy: 0,
    },
    type: ["fire", "fighting"],
    playerSprite: "../galeria/Kokemone/blaziken-back.png",
    enemySprite: "../galeria/Kokemone/blaziken-front.png",
  },
};

const player = {};
const enemy = {};

const pokeNames = ["pidgey", "pikachu", "rayquaza", "blaziken", "kabutops", "wopper"];
const party = [];

//Loads the party array with objects referenced in pokeNames
function cargaParty() {
  let i = 0;
  for (let poke of pokeNames) {
    party[i] = pokes[poke];
    i++;
  }
}

//Get DOM elements
const playerName = document.getElementById("player-name");
const playerLvl = document.getElementById("player-lvl");
const enemyName = document.getElementById("enemy-name");
const enemyLvl = document.getElementById("enemy-lvl");
const enemyHpBar = document.getElementById("enemy-hp-bar");
const playerHpBar = document.getElementById("player-hp-bar");
const playerHpNumber = document.getElementById("n-health");
const abilityShow = document.getElementById("abilityshow");
const fightButton = document.getElementById("fight");
const runButton = document.getElementById("run");
const bagButton = document.getElementById("bag");
const playerSprite = document.getElementById("player-sprite");
const enemySprite = document.getElementById("enemy-sprite");
const nHealth = document.getElementById("n-health");
const textShow = document.getElementById("text-show");
const enemyText = document.getElementById("enemy-text");
const pokeButton = document.getElementById("pokemon");
const mainScene = document.getElementById("scene");

//Capitalizes a given word
function capitalize(word) {
  let fullWord = word.toLowerCase();
  let l = fullWord[0].toUpperCase();
  let str2 = fullWord.slice(1);
  fullWord = l.concat(str2);
  return fullWord;
}

//Loads initial data and displays it on screen
function carga() {
  selectEnemy();
  cargaParty();
  selectPlayer("");
  playerName.textContent = capitalize(player.name);
  enemyName.textContent = capitalize(enemy.name);
  playerHpBar.style.width = (player.hp * 100) / player.maxhp + "%";
  nHealth.textContent = `${player.hp}/${player.maxhp}`;
  enemyHpBar.style.width = 100 + "%";
  playerLvl.textContent = "Lv" + player.lvl;
  enemyLvl.textContent = "Lv" + enemy.lvl;
  playerSprite.src = player.sprite;
  enemySprite.src = enemy.sprite;
  textShow.textContent = `What will ${capitalize(player.name)} do?`;
}
var open = false;
carga();
runButton.addEventListener("click", () => runAway());

//Has a 50% chace to reload the page(escape) or to give the enemy a turn
function runAway() {
  fightButton.disabled = true;
  pokeButton.disabled = true;
  runButton.disabled = true;
  bagButton.disabled = true;
  let num = Math.floor(Math.random() * 10);
  if(num > 4) {
    removeButtons();
      fightButton.disabled = true;
      textShow.display = "flex";
      try {
        pokeWindow.remove();
        open = false;
      }catch {};
    setTimeout(() => {
      textShow.textContent = `You ran away successfuly`;
    }, 500)
    setTimeout(() => {
      location.reload();
    }, 2000);
  }else {
    removeButtons();
    fightButton.disabled = true;
    textShow.display = "flex";
    try {
      pokeWindow.remove();
      open = false;
    }catch {};
    setTimeout(() => {
      textShow.textContent = `You couldn't ran away`;
    }, 500);
    setTimeout(() => {
      enemyTurn();
      fightButton.disabled = false;
      pokeButton.disabled = false;
      runButton.disabled = false;
      bagButton.disabled = false;
    }, 1200);
  };
};

//Creates the selection bar for changing player pokemon in battle and adds a button for each pokemon in the team
function pokeSelectBar(change) {
  removeButtons();
  open = true;
  pokeButton.disabled = true;
  let window = document.createElement("div");
  window.id = "pokeWindow";
  mainScene.appendChild(window);
  textShow.display = "flex";
  textShow.textContent = `Which Pokemon will you send out?`
  for (let i = 0; i < party.length; i++) {
    let poke = party[i];
    let card = document.createElement("button");
    card.innerText = poke.name.toUpperCase();
    card.id = "poke-select";
    window.appendChild(card);
    card.addEventListener("click", () => {
      pokeWindow.remove();
      let aux = card.innerText.toLowerCase();
      selectPlayer(aux, change);
      if (!change) {
        pokeButton.disabled = false;
      }
      open = false;
    });
  }
  if (!change) {
    fightButton.disabled = true;
  }
}

//Loads the selected pokemon fron the selection bar, or selects a rondom one from the party. (To be changed to the first in the party order)
//Also gives the enemy a turn if the change is not a forced one after a player pokemon blacks out.
function selectPlayer(selected, change) {
  if (!player.name) {
    let random = Math.floor(Math.random() * 4);
    let selplayer = pokeNames[random];
    console.log(party[0]);
    player.name = pokes[selplayer].name;
    player.lvl = pokes[selplayer].lvl;
    player.maxhp = pokes[selplayer].maxhp;
    player.hp = pokes[selplayer].hp;
    player.atacks = pokes[selplayer].atacks;
    player.stats = pokes[selplayer].stats;
    player.type = pokes[selplayer].type;
    player.sprite = pokes[selplayer].playerSprite;
  } else {
    let partySel = findMember(selected);
    player.name = party[partySel].name;
    player.lvl = party[partySel].lvl;
    player.maxhp = party[partySel].maxhp;
    player.hp = party[partySel].hp;
    player.atacks = party[partySel].atacks;
    player.stats = pokes[selected].stats;
    player.type = party[partySel].type;
    player.sprite = pokes[selected].playerSprite;
    playerHpBar.style.width = (player.hp * 100) / player.maxhp + "%";
    nHealth.textContent = `${player.hp}/${player.maxhp}`;
    playerSprite.src = player.sprite;
    playerName.textContent = capitalize(player.name);
    playerLvl.textContent = "Lv" + player.lvl;
    textShow.style.display = "flex";
    textShow.textContent = `Go ${capitalize(player.name)} you can do it.`;
    removeButtons();
    if (change) {
      fightButton.disabled = true;
      pokeButton.disabled = true;
      delayingTurn("enemy", 0, 0, 0, 0);
    }
  }
}

//Finds the position in the PARTY array for a given name
function findMember(x) {
  for (let i = 0; i < party.length; i++) {
    if (x === party[i].name) {
      return i;
    }
  }
}

//Loads enemy data 
function selectEnemy() {
  let random = Math.floor(Math.random() * pokeNames.length);
  let selEnemy = pokeNames[random];
  enemy.name = pokes[selEnemy].name;
  enemy.lvl = pokes[selEnemy].lvl;
  enemy.maxhp = pokes[selEnemy].maxhp;
  enemy.hp = pokes[selEnemy].hp;
  enemy.atacks = pokes[selEnemy].atacks;
  enemy.stats = pokes[selEnemy].stats;
  enemy.type = pokes[selEnemy].type;
  enemy.sprite = pokes[selEnemy].enemySprite;
}

pokeButton.addEventListener("click", () => pokeSelectBar(true));
fightButton.addEventListener("click", () => fighting());

//Delays the slower pokemon's turn
function delayTurn(x, chance, check, damage, action) {
  if (x === "enemy") {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(enemyTurn());
      }, 1200)
    );
  } else if (x === "player") {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(damn(chance, check, damage, action));
      }, 1200)
    );
  };
};
async function delayingTurn(x, chance, check, damage, action) {
  pokeButton.disabled = true;
  fightButton.disabled = true;
  await delayTurn(x, chance, check, damage, action);
  if (enemy.hp > 0 && player.hp > 0) {
    pokeButton.disabled = false;
    fightButton.disabled = false;
  }
}

//Creates buttons for each of the players abilities. (And calculates the damage and chance to hit. This should be done in a separate function)
function fighting() {
  if (open) {
    pokeWindow.remove();
    pokeButton.disabled = false;
    open = false;
  }
  textShow.style.display = "none";
  fightButton.disabled = true;

  for (i = 0; i < player.atacks.length; i++) {
    let node = document.createElement("button");
    node.textContent = capitalize(player.atacks[i]);
    node.id = "b" + i;
    abilityShow.appendChild(node);
  }
  abilityShow.style.display = "grid";
  const b1 = document.getElementById("b0");
  const b2 = document.getElementById("b1");
  const b3 = document.getElementById("b2");
  const b4 = document.getElementById("b3");
  b1.addEventListener("click", () => {
    let action = 0;
    let chance = abilities[player.atacks[action]].accuracy + player.stats.accuracy;
    let check = Math.floor(Math.random() * 100);
    let damage = abilities[player.atacks[action]].power * player.stats.atack;
    let type = abilities[player.atacks[action]].type;
    damage = calcPlayerDamage(damage, type, abilities[player.atacks[action]]);
    removeButtons();
    if (player.stats.speed >= enemy.stats.speed) {
      let turn = "enemy";
      damn(chance, check, damage, action);
      delayingTurn(turn);
    } else {
      let turn = "player";
      enemyTurn();
      delayingTurn(turn, chance, check, damage, action);
    }
  });
  b2.addEventListener("click", () => {
    let action = 1;
    let chance = abilities[player.atacks[action]].accuracy + player.stats.accuracy;
    let check = Math.floor(Math.random() * 100);
    let damage = abilities[player.atacks[action]].power * player.stats.atack;
    let type = abilities[player.atacks[action]].type;
    damage = calcPlayerDamage(damage, type, abilities[player.atacks[action]]);
    removeButtons();
    if (player.stats.speed >= enemy.stats.speed) {
      let turn = "enemy";
      damn(chance, check, damage, action);
      delayingTurn(turn);
    } else {
      let turn = "player";
      enemyTurn();
      delayingTurn(turn, chance, check, damage, action);
    }
  });
  b3.addEventListener("click", () => {
    let action = 2;
    let chance = abilities[player.atacks[action]].accuracy;
    chance = chance + player.stats.accuracy;
    let check = Math.floor(Math.random() * 100);
    let damage = abilities[player.atacks[action]].power * player.stats.atack;
    let type = abilities[player.atacks[action]].type;
    damage = calcPlayerDamage(damage, type, abilities[player.atacks[action]]);
    removeButtons();
    if (player.stats.speed >= enemy.stats.speed) {
      let turn = "enemy";
      damn(chance, check, damage, action);
      delayingTurn(turn);
    } else {
      let turn = "player";
      enemyTurn();
      delayingTurn(turn, chance, check, damage, action);
    }
  });
  b4.addEventListener("click", () => {
    let action = 3;
    let chance = abilities[player.atacks[action]].accuracy + player.stats.accuracy;
    let check = Math.floor(Math.random() * 100);
    let damage = abilities[player.atacks[action]].power * player.stats.atack;
    let type = abilities[player.atacks[action]].type;
    damage = calcPlayerDamage(damage, type, abilities[player.atacks[action]]);
    removeButtons();
    if (player.stats.speed >= enemy.stats.speed) {
      let turn = "enemy";
      damn(chance, check, damage, action);
      delayingTurn(turn);
    } else {
      let turn = "player";
      enemyTurn();
      delayingTurn(turn, chance, check, damage, action);
    }
  });
}

//Calculates enemy and player damage based on damage mechanics (STAB 25%, and respective type strengths and weaknesses)
function calcPlayerDamage(damage, type, ability) {
  for(let i = 0; i < player.type.length; i++) {
    if (type === player.type[i]) {
      damage = damage * 1.25;
    }
  }
  for (let i = 0; i < enemy.type.length; i++) {
    let eneType = enemy.type[i];
    damage = checkType(ability, eneType, damage);
  }
  return Math.floor(damage);
}
function calcEnemyDamage(damage, type, ability) {
  for(let i = 0; i < enemy.type.length; i++) {
    if (type === enemy.type[i]) {
      damage = damage * 1.25;
    }
  }
  for (let i = 0; i < player.type.length; i++) {
    let eneType = player.type[i];
    damage = checkType(ability, eneType, damage);
  }
  return Math.floor(damage);
}

//Chance for double damage
function critChance(ability) {
  let chance = Math.floor(Math.random() * 256);
  let check = Math.floor(Math.random() * 256);
  check = check + ability.crit;
  check = check - 210;
  return check >= chance ? true : false;
}

//Checks the respective damage changes for diferent matchups
function checkType(ability, eneType, damage) {
  let abiType = ability.type;
  if (abiType === "electric") {
    if (eneType === "flying" || eneType === "water") {
      return damage * 2;
    } else if (eneType === "grass" || eneType === "electric" || eneType === "dragon") {
      return damage / 2;
    } else if (eneType === "ground") {
      return 0;
    } else {
      return damage;
    }
  }
  if (abiType === "flying") {
    if (eneType === "fighting" || eneType === "bug" || eneType === "grass") {
      return damage * 2;
    } else if (eneType === "rock" || eneType === "steel" || eneType === "electric") {
      return damage / 2;
    } else {
      return damage;
    }
  }
  if (abiType === "normal") {
    if (eneType === "rock" || eneType === "steel") {
      return damage / 2;
    } else if (eneType === "ghost") {
      return 0;
    } else {
      return damage;
    }
  }
  if (abiType === "dragon") {
    if (eneType === "dragon") {
      return damage * 2;
    } else if (eneType === "steel") {
      return damage / 2;
    } else if (eneType === "fairy") {
      return 0;
    } else {
      return damage;
    }
  }
  if (abiType === "ground") {
    if (eneType === "poison" || eneType === "rock" || eneType === "steel" || eneType === "fire" || eneType === "electric") {
      return damage * 2;
    } else if (eneType === "bug" || eneType === "grass") {
      return damage / 2;
    } else if (eneType === "flying") {
      return 0;
    } else {
      return damage;
    }
  }
  if (abiType === "fire") {
    if (eneType === "bug" || eneType === "steel" || eneType === "grass" || eneType === "ice") {
      return damage * 2;
    } else if (eneType === "rock" || eneType === "fire" || eneType === "water" || eneType === "dragon") {
      return damage / 2;
    } else {
      return damage;
    }
  }
}

//Removes buttons created by the fighting function to create space for textShow.
function removeButtons() {
  try {
    b0.remove();
    b1.remove();
    b2.remove();
    b3.remove();
  } catch {}
  fightButton.disabled = false;
  abilityShow.style.display = "initial";
}

//Displays information about the player's turn
function infoMsg(action, b, crit) {
  let abilName = capitalize(player.atacks[action]);
  let playerName = capitalize(player.name);
  textShow.textContent = `${playerName} used ${abilName}`;
  textShow.style.display = "flex";
  if (!b) {
    textShow.textContent = `${textShow.textContent} but it failed.`;
  } else if (crit) {
    textShow.textContent = `${textShow.textContent}. A critical hit!`;
  }
}

//Player turn's general calculations
function damn(chance, check, damage, action) {
  if (enemy.hp <= 0 || !remainingPokes()) {
    return;
  } else if (player.hp <= 0) {
    return;
  }
  let crit = critChance(abilities[player.atacks[action]]);
  if (abilities[player.atacks[action]].roost) {
    player.hp = Math.floor(player.hp + player.maxhp / 2);
    party[findMember(player.name)].hp = player.hp;
    infoMsg(action, true, crit);
    if (player.hp > player.maxhp) {
      player.hp = player.maxhp;
      party[findMember(player.name)].hp = player.hp;
    }
    playerHpBar.style.width = (player.hp * 100) / player.maxhp + "%";
    nHealth.textContent = `${player.hp}/${player.maxhp}`;
    return;
  }

  if (chance > check) {
    if (crit) {
      damage = damage * 2;
    }
    console.log(`You deal ${damage} damage`);
    enemy.hp = Math.floor(enemy.hp - damage);
    if (enemy.hp <= 0) {
      enemyHpBar.style.width = 0 + "%";
      fightButton.disabled = true;
      pokeButton.disabled = true;
      runButton.disabled = true;
      bagButton.disabled = true
      infoMsg(action, true, crit);
      textShow.style.display = "flex";
      setTimeout(() => {
        textShow.textContent = `Congratulations you win`;
      }, 1500);
      return;
    }
    enemyHpBar.style.width = (enemy.hp * 100) / enemy.maxhp + "%";
    if (abilities[player.atacks[action]].status[0]) {
      let toChange = abilities[player.atacks[action]].status[2]
      console.log(`Enemy ${toChange} is ${enemy.stats[toChange]} before`);
      console.log(`Player ${toChange} is ${player.stats[toChange]} before`);

      
      let chance = abilities[player.atacks[action]].status[1];
      let check = Math.floor(Math.random() * 100);
      if (chance >= check) {
        enemy.stats[toChange] = (enemy.stats[toChange]) - (abilities[player.atacks[action]].status[3]);
      }
      console.log(`Enemy ${toChange} is ${enemy.stats[toChange]} after`);
      console.log(`Player ${toChange} is ${player.stats[toChange]} after`);

    }
    infoMsg(action, true, crit);
  } else {
    infoMsg(action, false, crit);
  }
}

//Checks if the players has at leats 1 pokemon left with more than 0 hp
function remainingPokes() {
  let count = 0;
  for (let poke of party) {
    if (poke.hp > 0) {
      return true;
    } else if (count === pokeNames.length) {
      return false;
    }
    count++;
  }
}

//Enemy turn's general calculations
function enemyTurn() {
  if (enemy.hp <= 0 || !remainingPokes()) {
    return;
  }
  let action = Math.floor(Math.random() * 4);
  if (abilities[enemy.atacks[action]].roost && enemy.hp > enemy.maxhp / 1.5) {
    action = Math.floor(Math.random() * 4);
  }
  let crit = critChance(abilities[enemy.atacks[action]]);
  let eneName = capitalize(enemy.name);
  let abilName = capitalize(enemy.atacks[action]);
  let damage = (abilities[enemy.atacks[action]].power) * enemy.stats.atack;
  damage = calcEnemyDamage(damage, abilities[enemy.atacks[action]].type, abilities[enemy.atacks[action]]);
  if (abilities[enemy.atacks[action]].roost) {
    enemy.hp = Math.floor(enemy.hp + enemy.maxhp / 2);
    if (enemy.hp > enemy.maxhp) {
      enemy.hp = enemy.maxhp;
    }
    enemyHpBar.style.width = (enemy.hp * 100) / enemy.maxhp + "%";
  }
  if (hitChance(action)) {
    if (abilities[enemy.atacks[action]].status[0]) {
      let toChange = abilities[enemy.atacks[action]].status[2];
      console.log(`Player ${toChange} is ${player.stats[toChange]} before`);
      console.log(`Enemy ${toChange} is ${enemy.stats[toChange]} before`);

      let chance = abilities[enemy.atacks[action]].status[1];
      let check = Math.floor(Math.random() * 100);
      if (chance >= check) {
        player.stats[toChange] = (player.stats[toChange]) - (abilities[enemy.atacks[action]].status[3]);
      }
      console.log(`Player ${toChange} is ${player.stats[toChange]} after`);
      console.log(`Enemy ${toChange} is ${enemy.stats[toChange]} after`);


    }
    if (crit) {
      damage = damage * 2;
    }
    console.log(`Enemy deals ${damage} damage`);
    player.hp = Math.floor(player.hp - damage);
    party[findMember(player.name)].hp = player.hp;
    enemyTextShow(eneName, abilName, true, crit);
    playerHpBar.style.width = (player.hp * 100) / player.maxhp + "%";
    nHealth.textContent = `${player.hp}/${player.maxhp}`;
    if (player.hp <= 0) {
      playerHpBar.style.width = 0 + "%";
      nHealth.textContent = `0/${player.maxhp}`;
      if (remainingPokes()) {
        fightButton.disabled = true;
        pokeSelectBar(false);
      } else {
        fightButton.disabled = true;
        pokeButton.disabled = true;
        runButton.disabled = true;
        bagButton.disabled = true;
        textShow.style.display = "flex";
        textShow.textContent = `Peton`;
        return;
      }
    }
  } else {
    playerHpBar.style.width = (player.hp * 100) / player.maxhp + "%";
    nHealth.textContent = `${player.hp}/${player.maxhp}`;
    enemyTextShow(eneName, abilName, false, crit);
  }
}

//Enemy chance to hit (Should do something simillar for player chance to hit)
function hitChance(action) {
  let chance = abilities[enemy.atacks[action]].accuracy;
  chance = chance + enemy.stats.accuracy
  let check = Math.floor(Math.random() * 100);
  if (chance > check) {
    return true;
  } else {
    return false;
  }
}

//Displays information about the enemie's turn
function enemyTextShow(eneName, abilName, b, crit) {
  textShow.style.display = "flex";
  textShow.textContent = `Enemy ${eneName} used ${abilName}`;
  if (!b) {
    textShow.textContent = `${textShow.textContent} but it failed.`;
  } else if (crit) {
    textShow.textContent = `${textShow.textContent}. A critical hit!`;
  }
}
