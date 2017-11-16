import { Character } from "./../js/character.js";

let testCharacter;
describe("Character", function() {
  beforeEach(function() {
    testCharacter = new Character("TestMan", 100);
  });

  it('should increase a characters health', function() {
    let currentHp = 20;
    testCharacter.setHp(currentHp);
    let addHp = 55;

    testCharacter.addHp(55);

    expect(testCharacter.getHp()).toEqual(currentHp + addHp);
  });

  it("shouldn't increase the characters hp higher than their max hp", function() {
    testCharacter.addHp(110);

    expect(testCharacter.getHp()).toEqual(100);
  });

  it ("Shouldn't fall below 0", function() {
    testCharacter.addHp(-110);

    expect(testCharacter.getHp()).toEqual(0);
  });

  it ("should take 200 xp to get to level 2", function() {
    testCharacter.level = 1;
    expect(testCharacter.getNeededXp()).toEqual(200);
  });

  it ("should take 7200 xp to get to level 10", function() {
    testCharacter.level = 9;
    expect(testCharacter.getNeededXp()).toEqual(7200);
  });

  it ("should take 23,800 xp to get to level 18", function() {
    testCharacter.level = 17;
    expect(testCharacter.getNeededXp()).toEqual(23800);
  });

  it ("should be possible to increment a chracter's skill", function() {
    testCharacter.setSkill("strength", 5);

    testCharacter.addSkill("strength", 5);

    expect(testCharacter.getSkill("strength", true)).toEqual(10);
  });
});
