import { Character } from "./../js/character.js";
import { BaseItem } from "./../js/baseitem.js";

let testCharacter;
describe("Character", function() {
  beforeEach(function() {
    testCharacter = new Character("TestMan", 100);
  });

  it ("Should scale the weapon's damage with the character's stats", function() {
    testCharacter.setSkill("strength", 10);
    testCharacter.setSkill("dexterity", 10);

    const item = new BaseItem("stick", {
      stats: {
        damage: 10
      },
      skillStats: {
        damage: {
          dexterity: 1,
          strength: 1,
        }
      }
    }, true);

    let damage = item.getStat("damage", testCharacter);

    expect(damage).toEqual(30);
  });
});
