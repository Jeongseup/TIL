"use strict";
// OOP : Object-Oriented Programming
// class : template or blue-print
// object : instance of a class

// Javascript classes
// - introduced in ES6
// - syntactical sugar over protype-based inheritance

// 1. Class declareations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speack() {
        console.log(`${this.name} : hello!`);
    }
}

const jeongseup = new Person("jeongseup", 26);

// console.log(jeongseup.name);
// console.log(jeongseup.age);
// jeongseup.speack();

//  2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        // private age
        return this._age;
    }

    set age(value) {
        // console.log(this.age);
        // console.log(value);

        // if (value < 0) {
        //     throw Error("Age can not be negative");
        // }

        // this.age = value를 하면 call stack이 닫히게 된다.
        this._age = value < 0 ? 0 : value;
        // console.log(this.age);
        // this._age = value;
    }
}

const user1 = new User("Jeongseup", "Son", -1);
// console.log(user1.age);

//  3. Fields (public, private)
//  Too soon!
//  mozilla... ?
class Experiment {
    pubicField = 2;
    #privateFeild = 0;
}

const expreiment = new Experiment();
// console.log(expreiment.pubicField);
// console.log(expreiment.privateFeild);

class Article {
    static publisher = "Jeongseup";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log("publisher of article1 is", article1.publisher);

console.log("publisher of Article is", Article.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("▲");
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const trinangle = new Triangle(20, 20, "red");
trinangle.draw();

console.log(trinangle.getArea());

console.log(rectangle instanceof Rectangle);
console.log(trinangle instanceof Rectangle);
console.log(trinangle instanceof Triangle);
console.log(trinangle instanceof Shape);
console.log(trinangle instanceof Object);

// interface Object {
//     /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
//     constructor: Function;

//     /** Returns a string representation of an object. */
//     toString(): string;

//     /** Returns a date converted to a string using the current locale. */
//     toLocaleString(): string;

//     /** Returns the primitive value of the specified object. */
//     valueOf(): Object;

//     /**
//      * Determines whether an object has a property with the specified name.
//      * @param v A property name.
//      */
//     hasOwnProperty(v: PropertyKey): boolean;

//     /**
//      * Determines whether an object exists in another object's prototype chain.
//      * @param v Another object whose prototype chain is to be checked.
//      */
//     isPrototypeOf(v: Object): boolean;

//     /**
//      * Determines whether a specified property is enumerable.
//      * @param v A property name.
//      */
//     propertyIsEnumerable(v: PropertyKey): boolean;
// }

console.log(trinangle.toString());

// JavaScript reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
