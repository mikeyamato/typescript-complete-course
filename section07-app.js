"use strict";
// interfaces
// these get ignored by Js. they are here just to check my code during compilation. 
/**
|--------------------------------------------------
| There's nothing wrong with the following but a more robust way of
| cleaning this up is to use `interface`
|
| function greetings(person: {name: string}){  // wrapping the type in 	||	curly braces signifies that what should be coming in is an object with |	the key of name that is a string. this is a very solid check layer.
|	console.log("hello, " + person.name);
|	}
|
|	const person = {
|		name: "Mike",
|		age: 18
|	}
|
|	greetings(person);
|--------------------------------------------------
*/
function greetings(person) {
    console.log("hello, " + person.name);
}
var person = {
    name: "Mike",
    // firstName: "Mike",  // this doesn't work as we are expecting `name`
    age: 18
};
greetings(person);
function greetings1(person1) {
    console.log("hello, " + person1.name);
}
var person1 = {
    name: "Mike",
    age: 18
};
greetings1({ name: "Mike", age: 20 }); // as an object literal this will spit an error if `interface NamedPerson1` only contained "name". Or as an option add an optional tag to interface. 
function greetings2(person2) {
    console.log("hello, " + person2.name);
}
var person2 = {
    name: "Mike",
    age: 18,
    hobbies: ["cooking", "camping"]
};
greetings2(person2);
function greetings3(person3) {
    console.log("hello, " + person3.firstName);
}
function changeName3(person3) {
    person3.firstName = "Beth";
}
var person3 = {
    firstName: "Mike",
    hobbies: ["cooking", "camping"],
    greetings3: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greetings3({firstName: "John", age: 20}); // this won't work because I don't have the method
changeName3(person3);
greetings3(person3);
person3.greetings3("Anything");
/**
|--------------------------------------------------
| adding classes
|--------------------------------------------------
*/
console.log('**** break ****');
function greetings4(person4) {
    console.log("hello, " + person4.firstName);
}
function changeName4(person4) {
    person4.firstName = "Beth";
}
var person4 = {
    firstName: "Mike",
    hobbies: ["cooking", "camping"],
    greetings4: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
changeName4(person4);
greetings4(person4);
person4.greetings4("Anything");
var Person4 = /** @class */ (function () {
    function Person4() {
    }
    Person4.prototype.greetings4 = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person4;
}());
var myPerson4 = new Person4();
myPerson4.firstName = "Michael";
greetings4(myPerson4); // calling the standalone greet method and not the embedded one inside the class "Person4"
myPerson4.greetings4("Yams");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log('function type', myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Mike",
    greetings4: function (lastName) {
        console.log("hello");
    }
};
console.log(oldPerson);
