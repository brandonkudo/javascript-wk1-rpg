import { Character } from "./../js/character.js";
import { Role } from "./../js/role.js";

export class Npc extends Character {

  constructor() {
    super();
  }

  randomizeSkills(skillcount) {
    let skills = Role.getSkills();
    for (let i = 0; i < skillcount; i++) {
      const skillId = Math.round((Math.random() * skills.length - 1 ) + 1)
      let skill = skills[skillId];
      this.addSkill(skill, 1);
    }
  }
}
