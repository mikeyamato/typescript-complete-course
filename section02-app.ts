/* types
 * string, number, boolean, array, tuples, enums, any
 * Assign type by the name of the variable followed by colon (ie let myVariable: number = 27)
*/

// string
let myName: string = "Mike";
// myName = 28; // error

// number
let myAge: number = 18;
// myAge = "Mike"; // error

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1; // error

// array 
let hobbies: any[] = ["swimming", "biking"];
hobbies = [100]; // this is valid since the type is set to any[]

// tuples (not available in JS but an array that contains mixed types)
let address1: [string, number] = ["pass", 1920];  // this is valid
// let address2: [string, number] = [1920, "pass"];  // this is invalid

// enum (helps make numbers be more expressive)
enum Color{
	White,
	Red,
	Blue
}
let myColor: Color = Color.Red;
console.log(myColor);  // 1

// increments value from 0, like an index. but unlike an index, the value can be hard keyed and altered like such:
enum ColorAlt{
	Yellow,
	Pink = 100,
	Gold
}
let myColorAlt: ColorAlt = ColorAlt.Gold;
console.log(myColorAlt);  // 100. Then blue will be 101.

// any (the most flexible of types. should use as a last resort)
let automobile: any = "BMW";
console.log(automobile);
automobile = {brand: "BMW", series: 3};
console.log(automobile); 
//the above will be okay. but if `: any` is removed then the 2nd log will spit out an error because it is an object and no longer a string.  

// functions
function returnMyName(){
	return myName;
}
console.log(returnMyName());  // this returns a string, therefore...

function returnMyNameAlt() : string{  // the type here states what type will be returned and does not pertain to the argument
	return myName;
	// return myAge;   // compile error
}
console.log(returnMyNameAlt());

// void (nothing to return)
function sayHello(): void {
	console.log("Hello There");
}

// argument types
function multiply(val1: number, val2: number): number {  // 2 number arguments and we return a number
	return val1 * val2;
}
console.log(multiply(1, 2)); 

// function types
let myMultiply; 
myMultiply = sayHello;  // asign a function that is a string
myMultiply();
myMultiply = multiply;  // reasgin the function that is a number
console.log(myMultiply(5,2));
// // to prevent this we can do...
let myMultiplyAlt: (value1: number, value2: number) => number;  // create an arrow function by stating what arguements go in it and what gets returned. key names doesn't need to match as we are just checking type at this point. Later on in objects it is important. 
// myMultiplyAlt = sayHello;  // this results in an error since the format is incorrect
// myMultiplyAlt();
myMultiplyAlt = multiply;  // this works perfectly fine 
console.log(myMultiplyAlt(5,2));

// objects
let userData: {name: string, age: number} = {  
	name: "Mike", 
	age: 18
};

// userData = {  // this will not work because for objects the keys are not the same even though they are both string then number. 
// 	a: "Hello", 
// 	b: 27
// };

// complex object example
let complex: {data: number[], output: (all: boolean) => number[]} = {  // we have a variable named object that should be an object
	data: [100, 3.99, 10],
	output: function (all: boolean): number[] {
		return this.data;
	}
}

// complex = {}
// if I want to repurpose types one solution would be to copy and paste. but if I make in change in 1, then I'll need to go hunt them down elsewhere. the alternative is to create an alias. 
let complex2: {data: number[], output: (all: boolean) => number[]} = {  
	data: [100, 3.99, 10],
	output: function (all: boolean): number[] {
		return this.data;
	}
}
// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex3: Complex = { 
	data: [100, 3.99, 10],
	output: function (all: boolean): number[] {
		return this.data;
	}
}

// union types
let myRealRealAge: number | string = 27;  // single pipe. okay to add other unions
myRealRealAge = '27';
// myRealRealAge = true; // error because bool is not permitted

// check type, 
let myHobbiesAlt = "I like swimming";
console.log(typeof myHobbiesAlt);  // object
// can also perform a check
if (typeof myHobbiesAlt == "number"){
	console.log("This is a number"); 
} else if (typeof myHobbiesAlt == "string"){
	console.log("This is a string"); 
}

// never (not to be mistake as `void`)
function neverReturns(): never { 
	throw new Error('error');  //  throws a new error with a message. this returns an error and therefore never returns anything. it's not something commonly applied but good to add there are parts of the code that should never be reached. 
}

// nullable types
let canBeNull: number | null = 12;  // is number
canBeNull = null;  // because of being strict, we cannot assign number to null. an alt is to add a union type to the variable declaration.
let canAlsoBeNull;  // is undefined so reassigning it to null is okay
canAlsoBeNull = null;
let canThisBeAny: null = null;
// canThisBeAny = 12; // will result in an error because of type null. better to use undefined. 