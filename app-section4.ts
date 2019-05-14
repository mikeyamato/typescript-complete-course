// arrow functions
const addNumbers = function (num1: number, num2: number): number {
	return num1 + num2; 
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (num1: number, num2: number) => num1 * num2; 
console.log(multiplyNumbers(10, 3));

// default parameters
const countdown = (start: number = 10) => {  // since the calling function doesn't have any value, countdown will start at 10. but if `countdown(20)` then it will start at 20. 
	while (start > 0){
		start--; 
	}
	console.log("Done!", start);
}
countdown();

// Spread (breaks up array)
const numbersAlt = [1, 10, 99, -5];
console.log("Math.max", Math.max(33, 99, 10, -3)); 
console.log("Spread operator", Math.max(...numbersAlt)); // BREAKS UP THE ARRAY and lists out the values individually.

// Rest (turns into array)
function makeArray(arg1: number, arg2: number){  // allows for 2 parameters. but what if you don't know the number of parameters?
	return [arg1, arg2]; // output would be [1, 2]
}
console.log(makeArray(1,2));

function makeArrayAlt(...args: number[]){  // rest operator tells the system to turn multiple arguments INTO AN ARRAY. 
	return args; // output would be [1, 2, 3]
}
console.log(makeArrayAlt(1,2, 3));

// function printInfo(name: string, age: number) {
// 	console.log('My name is ' + name + ' and I am ' + age + ' years old!');
// }
function printInfo(...info: [string, number]) {  // use of tuples is valid. same as above.
	console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo("Mike", 18);

// Destructuring
const myHobbies = ["cooking", "sleeping"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1]; 
const [hobby1, hobby2] = myHobbies; // instead of writing out multiple lines. 
console.log(hobby1, hobby2); 

const userDataAlt = { userName: "Mike", age: 18 };
// const userNameAlt = userDataAlt.userName;
// const ageAlt = userDataAlt.age;
const {userName, age} = userDataAlt;
console.log(userName, age);

