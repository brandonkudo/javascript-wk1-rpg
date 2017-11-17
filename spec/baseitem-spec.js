import { Character } from "./../js/character.js";
import { BaseItem } from "./../js/baseitem.js";

let testCharacter;
let testItem

describe("Character", function() {
  beforeEach(function() {
    testCharacter = new Character("TestMan", 100);
    testItem = new BaseItem("stick", {
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
  });

  it ("Should scale the weapon's damage with the character's stats", function() {
    testCharacter.setSkill("strength", 10);
    testCharacter.setSkill("dexterity", 10);


    let damage = testItem.getStat("damage", testCharacter);

    expect(damage).toEqual(30);
  });

  it ("Shouldn't Error if the testItem doesn't have stats", function() {
    testItem.data.stats = null;

    const testValue = testItem.getStat("damage", testCharacter);
    expect(testValue).toEqual(0);
  });
});
