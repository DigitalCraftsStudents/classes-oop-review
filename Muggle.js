import Person from './Person.js';

// Muggle is-a Person
// In JS, we say that Muggle extends Person
class Muggle extends Person {

  // we don't define the constructor()
  // we'll just reuse the one we inherited from Person

  // You can define additional methods to customize Muggle
  converse(otherPerson) {
    console.log(`Nice to meet you, ${otherPerson.name}, I am {this.name}.`);
  }
}

export default Muggle;
