// generics

function echo<t>(data: t){  // `<t>` can be any characater uppercase or lowercase. it's saying whatever type echo receives, that's going to be the type for data. 
	return data;
}

console.log(echo("Mike").length); // by adding `<t>` above, we can now take advantage of properties associated with strings such as length.
console.log(echo(18));  // length cannot be used here because the number type doesn't allow for that. 
// console.log(echo<number>("Bob"));  // this is not allowed because we are saying the generic type here is a number. 
console.log(echo({name: "Mike", age: 18}));

/**
|--------------------------------------------------
| buit in generics (array)
|--------------------------------------------------
*/

const testResults1: Array<number> = [1.94, 2.33]; // `<number>` states what values the array should hold. const is okay because we are adding to the array, just not reassigning the value (ie testResults1 = 20).
testResults1.push(-2.99);
console.log(testResults1);

/**
|--------------------------------------------------
| array
|--------------------------------------------------
*/
function printAll <T>(args: T[]){
	args.forEach(element => console.log(element));
}
printAll<string>(["potato", "onion"])

/**
|--------------------------------------------------
| generic types
|--------------------------------------------------
*/
// when would this be used?
const echo2: <t>(data: t) => t = echo;  // creating a constant and assigning a type. the const will hold a function with 1 argument of type 't' and it will return something of type 't'
console.log(echo2<string>("something"));

/**
|--------------------------------------------------
| generic classes
|--------------------------------------------------
*/
class SimpleMath <t extends number | string, u extends number | string> {  // number or string. if string then the const down below needs to be updated to accept string only and the values need to be converted to a string. 
	baseValue: t;
	multiplyValue: u;
	calculate(): number{
		return +this.baseValue * +this.multiplyValue;  // adding + to beginning explicilty says that these are going to be numbers
	}
}
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());