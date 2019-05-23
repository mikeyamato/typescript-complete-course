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

interface NamedPerson {
	name: string
}

function greetings(person: NamedPerson){  // wrapping the type in curly braces signifies that what should be coming in is an object with the key of name that is a string. this is a very solid check layer. 
	console.log("hello, " + person.name);
}

const person = {
	name: "Mike",  // this works
	// firstName: "Mike",  // this doesn't work as we are expecting `name`
	age: 18
}

greetings(person);

/**
|--------------------------------------------------
| optional field
|--------------------------------------------------
*/
interface NamedPerson1 {
	name: string;
	age?: number;  // question mark indicates this field is optional
}

function greetings1(person1: NamedPerson1){  
	console.log("hello, " + person1.name);
}

const person1 = {
	name: "Mike",  
	age: 18
}

greetings1({name: "Mike", age: 20}); // as an object literal this will spit an error if `interface NamedPerson1` only contained "name". Or as an option add an optional tag to interface. 

/**
|--------------------------------------------------
| unkown field
| for times when you don't know the name of the field yet
|--------------------------------------------------
*/
interface NamedPerson2 {
	name: string;
	age?: number;  
	[propName: string]: any;  // square brackets indicate the field name isn't known yet but it will be coming. like the question mark above, this is optional 
}

function greetings2(person2: NamedPerson2){  
	console.log("hello, " + person2.name);
}

const person2 = {
	name: "Mike", 
	age: 18,
	hobbies: ["cooking", "camping"]
}

greetings2(person2); 

/**
|--------------------------------------------------
| adding methods to interface
| 
|--------------------------------------------------
*/
interface NamedPerson3 {
	firstName: string;
	age?: number;  
	[propName: string]: any;  
	greetings3(lastName: string): void;  // return type void because it doesn't return a value. logging only possible.
}

function greetings3(person3: NamedPerson3){  
	console.log("hello, " + person3.firstName);
}

function changeName3(person3: NamedPerson3){
	person3.firstName = "Beth";
}

const person3: NamedPerson3 = {
	firstName: "Mike", 
	hobbies: ["cooking", "camping"],
	greetings3(lastName: string){
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
}

// greetings3({firstName: "John", age: 20}); // this won't work because I don't have the method
changeName3(person3);
greetings3(person3); 
person3.greetings3("Anything");


/**
|--------------------------------------------------
| adding classes
|--------------------------------------------------
*/
console.log('**** break ****')

interface NamedPerson4 {
	firstName: string;
	age?: number;  
	[propName: string]: any;  
	greetings4(lastName: string): void;  // return type void because it doesn't return a value. logging only possible.
}

function greetings4(person4: NamedPerson4){  
	console.log("hello, " + person4.firstName);
}

function changeName4(person4: NamedPerson4){
	person4.firstName = "Beth";
}

const person4: NamedPerson4 = {
	firstName: "Mike", 
	hobbies: ["cooking", "camping"],
	greetings4(lastName: string){
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
}

changeName4(person4);
greetings4(person4); 
person4.greetings4("Anything");

class Person4 implements NamedPerson4 {  // adding everything from NamedPerson4 except for the optional things
	firstName: string;
	greetings4(lastName: string){
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
}

const myPerson4 = new Person4();
myPerson4.firstName = "Michael";
greetings4(myPerson4);  // calling the standalone greet method and not the embedded one inside the class "Person4"
myPerson4.greetings4("Yams");

/**
|--------------------------------------------------
| function types
|--------------------------------------------------
*/

interface DoubleValueFunc {
	(number1: number, number2: number): number;  // whatever usese this interface must be a function of this type. 
}

let myDoubleFunction: DoubleValueFunc; 
myDoubleFunction = function(value1: number, value2: number){
	return (value1 + value2) * 2;
}
console.log('function type', myDoubleFunction(10, 20));

/**
|--------------------------------------------------
| interface inheritnce
|--------------------------------------------------
*/

interface AgedPerson extends NamedPerson4 {  // uses everything from NamedPerson4 but also add more
	age: number, // here we say age is required where it was optional before
}

const oldPerson: AgedPerson = {
	age: 27,
	firstName: "Mike",
	greetings4(lastName: string){
		console.log("hello");
	}
}

console.log(oldPerson);