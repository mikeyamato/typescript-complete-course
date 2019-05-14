"use strict";
/* types
 * string, number, boolean, array, tuples, enums, any
 * Assign type by the name of the variable followed by colon (ie let myVariable: number = 27)
*/
// string
var myName = "Mike";
// myName = 28; // error
// number
var myAge = 18;
// myAge = "Mike"; // error
// boolean
var hasHobbies = true;
// hasHobbies = 1; // error
// array 
var hobbies = ["swimming", "biking"];
hobbies = [100]; // this is valid since the type is set to any[]
// tuples (not available in JS but an array that contains mixed types)
var address1 = ["pass", 1920]; // this is valid
// let address2: [string, number] = [1920, "pass"];  // this is invalid
// enum (helps make numbers be more expressive)
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor); // 1
// increments value from 0, like an index. but unlike an index, the value can be hard keyed and altered like such:
var ColorAlt;
(function (ColorAlt) {
    ColorAlt[ColorAlt["Yellow"] = 0] = "Yellow";
    ColorAlt[ColorAlt["Pink"] = 100] = "Pink";
    ColorAlt[ColorAlt["Gold"] = 101] = "Gold";
})(ColorAlt || (ColorAlt = {}));
var myColorAlt = ColorAlt.Gold;
console.log(myColorAlt); // 100. Then blue will be 101.
// any (the most flexible of types. should use as a last resort)
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//the above will be okay. but if `: any` is removed then the 2nd log will spit out an error because it is an object and no longer a string.  
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName()); // this returns a string, therefore...
function returnMyNameAlt() {
    return myName;
    // return myAge;   // compile error
}
console.log(returnMyNameAlt());
// void (nothing to return)
function sayHello() {
    console.log("Hello There");
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(1, 2));
// function types
var myMultiply;
myMultiply = sayHello; // asign a function that is a string
myMultiply();
myMultiply = multiply; // reasgin the function that is a number
console.log(myMultiply(5, 2));
// // to prevent this we can do...
var myMultiplyAlt; // create an arrow function by stating what arguements go in it and what gets returned. key names doesn't need to match as we are just checking type at this point. Later on in objects it is important. 
// myMultiplyAlt = sayHello;  // this results in an error since the format is incorrect
// myMultiplyAlt();
myMultiplyAlt = multiply; // this works perfectly fine 
console.log(myMultiplyAlt(5, 2));
// objects
var userData = {
    name: "Mike",
    age: 18
};
// userData = {  // this will not work because for objects the keys are not the same even though they are both string then number. 
// 	a: "Hello", 
// 	b: 27
// };
// complex object example
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// complex = {}
// if I want to repurpose types one solution would be to copy and paste. but if I make in change in 1, then I'll need to go hunt them down elsewhere. the alternative is to create an alias. 
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex3 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27; // single pipe. okay to add other unions
myRealRealAge = '27';
// myRealRealAge = true; // error because bool is not permitted
// check type, 
var myHobbiesAlt = "I like swimming";
console.log(typeof myHobbiesAlt); // object
// can also perform a check
if (typeof myHobbiesAlt == "number") {
    console.log("This is a number");
}
else if (typeof myHobbiesAlt == "string") {
    console.log("This is a string");
}
// never (not to be mistake as `void`)
function neverReturns() {
    throw new Error('error'); //  throws a new error with a message. this returns an error and therefore never returns anything. it's not something commonly applied but good to add there are parts of the code that should never be reached. 
}
// nullable types
var canBeNull = 12; // is number
canBeNull = null; // because of being strict, we cannot assign number to null. an alt is to add a union type to the variable declaration.
var canAlsoBeNull; // is undefined so reassigning it to null is okay
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12; // will result in an error because of type null. better to use undefined. 
