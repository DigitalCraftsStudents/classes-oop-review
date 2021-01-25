import Person from './Person.js';

// Muggle is-a Person
class Muggle extends Person {

  converse(otherPerson) {
    console.log(`Nice to meet you, ${otherPerson.name}, I am {this.name}.`);
  }
}

export default Muggle;
