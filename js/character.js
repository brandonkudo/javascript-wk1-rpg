let _allCharacters = [];



export class Character {
  getCharacters() {
    return _allCharacters;
  }

  constructor(name, hp = 100) {
    this.id = this.getCharacters().count + 1;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.skills = {};
    this.level = 1;
    this.xp = 0;

    _allCharacters.push(this);

  }

  setMaxHp(maxHp) {
    this.maxHp = maxHp;
  }

  getMaxHp() {
    return this.maxHp;
  }

  setHp(hp) {
    this.hp = hp;
  }

  getHp() {
    return this.hp;
  }

  addHp(amount) {
    let oldHp = this.getHp();
    let maxHp = this.getMaxHp();

    // let newHp = Math.min( Math.max(oldHp + amount, 0) , maxHp);
    let newHp = Math.min(Math.max(oldHp + amount,0), this.getMaxHp());

    this.setHp(newHp);
  }

  addXp(amount) {
     this.xp = this.xp + amount;
     while (this.xp >= this.getNeededXp()) {
      this.level += 1;
     }
  }

  getNeededXp() {
    let level = this.level + 1;
    return 25*(3*level + 2)*(level - 1);
  }

  getSkill(skill, ignoreBuff = false) {
    let hasSkill = this.skills[skill];
    return hasSkill ? hasSkill : 0;
  }

  setSkill(skill, value) {
    this.skills[skill] = value;
  }

  addSkill(skill, addAmount) {
    let oldSkill = this.getSkill(skill, true);
    let newSkill = oldSkill + addAmount;
    this.setSkill(skill, newSkill);
  }
}
