// decorators
// they're functions we create. they get one argument by typescript. it is always the constructor function of the class. 
// they get added with the '@' symbol
// A Constructor is a special type of method of a class and it will be automatically invoked when an instance of the class is created.
// A class can have any number of constructors.

/**
|--------------------------------------------------
| adding to classes
|--------------------------------------------------
*/
function logged(constructorFn: Function){  // type Function
	console.log(constructorFn);
}

@logged
class Person1 {
	constructor(){
		console.log("hi");
	}
}

/**
|--------------------------------------------------
| factory
|--------------------------------------------------
*/
// true/false print to the console or not
function logging(value: boolean){
	return value ? logged : null;  // if true, then return logged
}

@logging(true)
class Car1 {

}