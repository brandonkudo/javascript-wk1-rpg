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
});
