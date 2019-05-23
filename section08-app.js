// generics
function echo(data) {
    return data;
}
console.log(echo("Mike").length); // by adding `<t>` above, we can now take advantage of properties associated with strings such as length.
console.log(echo(18)); // length cannot be used here because the number type doesn't allow for that. 
// console.log(echo<number>("Bob"));  // this is not allowed because we are saying the generic type here is a number. 
console.log(echo({ name: "Mike", age: 18 }));
/**
|--------------------------------------------------
| buit in generics (array)
|--------------------------------------------------
*/
var testResults1 = [1.94, 2.33]; // `<number>` states what values the array should hold. const is okay because we are adding to the array, just not reassigning the value (ie testResults1 = 20).
testResults1.push(-2.99);
console.log(testResults1);
/**
|--------------------------------------------------
| array
|--------------------------------------------------
*/
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["potato", "onion"]);
/**
|--------------------------------------------------
| generic types
|--------------------------------------------------
*/
// when would this be used?
var echo2 = echo; // creating a constant and assigning a type. the const will hold a function with 1 argument of type 't' and it will return something of type 't'
console.log(echo2("something"));
/**
|--------------------------------------------------
| generic classes
|--------------------------------------------------
*/
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // adding + to beginning explicilty says that these are going to be numbers
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
