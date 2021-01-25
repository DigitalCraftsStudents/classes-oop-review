import Person from './Person.js';

// Wizard is-a Person
class Wizard extends Person {
  // provide a customized version of the constructor
  constructor(name, specialty) {
    super();
    this.name = name;
    this.specialty = specialty;

    this.spellPoints = 10;
    this.spells = [
      {
        name: 'stupefy',
        points: 2
      }
    ];
  }

  listSpells() {
    console.log('You know the following spells:');
    this.spells.forEach(s => console.log(`- ${s.name} (${s.points})`));
  }

  findSpell(spellName) {
    return this.spells.find(s => s.name.toLowerCase() === spellName.toLowerCase());
  }

  cast(spellName) {
    const spell = this.findSpell(spellName);
    if (spell) {
      if (this.spellPoints >= spell.points) {
        this.spellPoints -= spell.points;
        console.log(`${this.name} casts ${spellName}`);
      } else {
        console.log(`${this.name} does not have enough spell points.`);
      }
    } else {
      console.log(`${this.name} does not know that spell.`);
    }
  }  
}

export default Wizard;
