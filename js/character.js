let _allCharacters = [];



export class Character {
  getCharacters() {
    return _allCharacters;
  }

  constructor(name, hp) {
    this.id = this.getCharacters().count + 1;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.skills = [];

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


}
