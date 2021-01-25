# Intro to the `class` syntax (Object-Oriented Programming)


## What is `this`?

It's the "owner" of a function. 

Most of the time, it's the "caller" of the function. 

Alternatively, you can set it by using:

- an arrow function (The value of `this` inside an arrow function cannot be changed)
- the `.bind()` function (You can manually pass in the value of `this`.)

## Prototypes

Under the hood, classes are just nicer syntax for prototype functions.

Prototypes existed *before* the class syntax was introduced.

We might say that `.map()` is a method that belongs to the Array class.

However, there is no actual Array class.

Class syntax is implemented using an older technology called prototypes.

```js
class Array {
    map() {

    }
    filter() {

    }
}
```

It is actually written like so:

```js
function Array() {
    // ...do cool stuff
}

Array.prototype.map = () => {

}

Array.prototype.filter = () => {

}
```


What is a prototype?
- It's an object
- It holds any *shared* attributes or methods that belong to that type (e.g., all Arrays have a `.map()` and a `.filter()`. Those are actually "bolted on" to the `Array.prototype` object).



## Libraries used

- [readline-promise](https://www.npmjs.com/package/readline-promise) - to get user input from the command line.

## List of spells

- [Names and descriptions](https://www.pojo.com/harry-potter-spell-list/)
- [As JSON](https://raw.githubusercontent.com/duckduckgo/zeroclickinfo-goodies/master/share/goodie/cheat_sheets/json/harry-potter-spells.json)
