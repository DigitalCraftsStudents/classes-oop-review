
// Use the `class` keyword to define a "kind of thing"
// It is customary to capitalize the name of your class
class Person {

  // `constructor()` contains all the "setup instructions" when creating an _instance_ of a class
  constructor(name) {
    // `constructor` is a built-in part of JS classes
    // it's "method" (which is a function that belongs to a class) and can accept arguments.
    // it has the ability to access and modify the attributes.
    this.name = name; // the `this` keyword refers to the specific Person object being created
    // we're modifying the Peron's `name` attribute.
    // we're assigning it whatever value was passed in when this specific Person was created (or "instantiated")
  }

}

export default Person;
