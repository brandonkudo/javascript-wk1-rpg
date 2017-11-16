import { Npc } from "./../js/npc.js";

let testCharacter;
describe("Npc", function() {
  beforeEach(function() {
    testCharacter = new Npc("TestMan", 100);
  });

  it("The npcs random skills totals 50", function() {
    testCharacter.randomizeSkills(50);
    let total = 0;
    var keys = Object.keys(testCharacter.skills);

    keys.forEach(function(key) {
      let value = testCharacter.skills[key];
      total += value;
    });

    expect(total).toEqual(50);
  });

});
