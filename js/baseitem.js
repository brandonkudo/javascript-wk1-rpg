import { Character } from "./../js/character.js";

let _allItems = {};

export class BaseItem {

  static getAll() {
    return _allItems;
  }

  static find(itemId) {
    return _allItems[itemId];
  }

  constructor(itemId, itemData = {}) {
    this.id = itemId;
    this.data = itemData;
    _allItems[itemId] = this;
  }

  getStat(stat, character, round = false, ignoreSkills = false) {
    // try {
      let skillValue = this.data.stats[stat];
      const skillStats = this.data.skillStats[stat];
      if (!ignoreSkills && skillStats) {
        let keys = Object.keys(skillStats);
        keys.forEach(function(k) {
          let v = skillStats[k];
          skillValue += (character.getSkill(k) * v)
        });

      }
      return round ? Math.round(skillValue) : skillValue;
    // }
    // catch(err) {
    //   return 0;
    // }
  }
}


new BaseItem("aid_healthpotion", {
  name: "Small Health Potion",
  namePlural: "Small Health Potions",
  type: "aid",
  stackable: true,
  disposable: true,
  value: 24,
  weight: 0.2,
  use: function(character) {
    if (character.getHp() >= character.maxHp) {
      return false;
    }
    character.addHp(25);
    return true
  }
});

new BaseItem("curr_gold", {
  name: "Gold Coin",
  namePlural: "Gold Coins",
  type: "currency",
  stackable: true,
  value: 1,
});

new BaseItem("sword_iron", {
  name: "Iron Sword",
  type: "equipment",
  value: 50,
  weight: 10,
  stats: {
    damage: 20,
    hitChance: 60,
    range: 60,
  },
  skillStats: {
    damage: {
      strength: 0.05,
      dexterity: 0.04
    },
    hitChance: {
      strength: 0.005,
      dexterity: 0.01
    }
  }
});

new BaseItem("bow_wood", {
  name: "Wooden Bow",
  type: "equipment",
  value: 50,
  weight: 4,
  stats: {
    damage: 20,
    hitChance: 30,
    range: 1024
  },
  statSkills: {
    damage: {
      strength: 0.1,
      dexterity: 0.05,
    },
    hitChance:{
      dexterity: 0.02,
      strength: 0.005,
    }
  }
})
