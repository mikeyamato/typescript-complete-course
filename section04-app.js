"use strict";
// arrow functions
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(10, 3));
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Spread (breaks up array)
var numbersAlt = [1, 10, 99, -5];
console.log("Math.max", Math.max(33, 99, 10, -3));
console.log("Spread operator", Math.max.apply(Math, numbersAlt)); // BREAKS UP THE ARRAY and lists out the values individually.
// Rest (turns into array)
function makeArray(arg1, arg2) {
    return [arg1, arg2]; // output would be [1, 2]
}
console.log(makeArray(1, 2));
function makeArrayAlt() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args; // output would be [1, 2, 3]
}
console.log(makeArrayAlt(1, 2, 3));
// function printInfo(name: string, age: number) {
// 	console.log('My name is ' + name + ' and I am ' + age + ' years old!');
// }
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo("Mike", 18);
// Destructuring
var myHobbies = ["cooking", "sleeping"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1]; 
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // instead of writing out multiple lines. 
console.log(hobby1, hobby2);
var userDataAlt = { userName: "Mike", age: 18 };
// const userNameAlt = userDataAlt.userName;
// const ageAlt = userDataAlt.age;
var userName = userDataAlt.userName, age = userDataAlt.age;
console.log(userName, age);
