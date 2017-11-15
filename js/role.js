let _allRoles = [];

export class Role {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;

    _allRoles.push(this);
  }

  static getAllRoles() {
    return _allRoles;
  }
}

const wizard = new Role("Wizard", {
  strength: 7,
  dexterity: 7,
  constitution: 5,
  intelligence: 20,
  luck: 11
})

const warrior = new Role("Warrior", {
  strength: 15,
  dexterity: 10,
  constitution: 10,
  intelligence: 5,
  luck: 10
});

const rogue = new Role("Rogue", {
  strength: 7,
  dexterity: 17,
  constitution: 8,
  intelligence: 8,
  luck: 10
});

const leprechaun = new Role("Leprechaun", {
  strength: 2,
  dexterity: 11,
  constitution: 5,
  intelligence: 12,
  luck: 20
});
