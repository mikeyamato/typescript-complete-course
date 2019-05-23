class Person {
	name: string;  // default is implicitly public
	private type: string = "Default";  // nobody has access to this and can only be accessed within this Person object;
	protected age: number = 27; // child classes have access to this and can only be accessed within this Person object. plus initializing age. 

	constructor(name: string, public username: string){ // by declaring `username` in the constructor, it's not necessary to have it in class. also `this.username` is not needed in the constructor.
		this.name = name;  // `this.name` refers to the property of the class. `name` refers to the arguement passed to the constructor.
	}

	printAge(){
		console.log('this.age:',this.age);
		this.setType("old man");  // need 'this' in order to access other methods within the Person object. 
	}
	
	// methods can be private as well. default is public.
	private setType(type: string){
		this.type = type;
		console.log('this.type:',this.type);
	}
}

const personA = new Person("Mike", "mike");  // instantiate it with "new". accessing the class Person.
console.log(personA);
console.log(personA.name, personA.username);

// cannot access 'type' or 'age' directly from here because they are outside of the Person object. we would need to create a method first then call those. 

personA.printAge();
// personA.setType("cool guy");  // won't work with private method

/**
|--------------------------------------------------
| inheritance
|--------------------------------------------------
*/

class John extends Person {  // take the "Person" class and use all the code in it. Things will either get appended (if it doesn't exist) or overwritten. 
	name = "John";
}

const john = new John("Mary", "mike");  // "new John" because I'm creating a new class.
console.log(john);  // the output name is John because "class Mike" writes over anything is class Person. 

class Michael extends Person {
	// name = "Michael";
	constructor(username: string){  // adding constructor so a name doesn't need to get passed. still need a username therefore add it here and pass it to super. 
		super("Michael", username);  // super = parent class (Person). include parameters here. 
		this.age = 31;  // this is accessible because it is protected therefore passed down to child. 
	}
}

const michael = new Michael ("michael");
console.log("michael:", michael)

/**
|--------------------------------------------------
| getters & setters
|--------------------------------------------------
*/
class Plant {
	private _species: string = "Default";

	get species (){
		return this._species; 
	}

	set species (value: string){
		if(value.length > 3){
			this._species = value;
		} else {
			this._species = "default"; 
		}
	}
}

let plant = new Plant();
console.log(plant.species);  // accessing the getter
plant.species = "AB";
console.log(plant.species);  // doesn't pass validation
plant.species = "Kitty";
console.log(plant.species);  // does pass validation

/**
|--------------------------------------------------
| static properties & methods
|--------------------------------------------------
*/

class Helpers {
	static PI: number = 3.14; // "static" kw allows us to use the property even w/o instantiating the class.
	static circumference(diameter: number): number {
		return this.PI * diameter; 
	}
}
console.log(2 * Helpers.PI);
console.log(Helpers.circumference(3));

/**
|--------------------------------------------------
| Abstract Classes & Methods
|--------------------------------------------------
*/
// cannot be instantiated directly. ONLY can be inherited. 
abstract class Project {
	projectName: string = "Default";
	budget: number = 1000;

	abstract changeName(name: string): void;

	calcBudget(){
		return this.budget * 2;
	}
}

class ITProject extends Project{  // since we are extending Project we must inherit 'changeName'
	changeName(name: string): void {
		this.projectName = name;
	}
}

let newProject = new ITProject();
console.log('newProject:',newProject); 
newProject.changeName("Super IT Project"); 
console.log('newProject changeName:',newProject);

/**
|--------------------------------------------------
| Private Constructor
|--------------------------------------------------
*/
// not sure in what scenarios this would be used
class OnlyOne{
	private static instance: OnlyOne;  // what is this?
	private constructor(public name: string){}
	// private constructor(public readonly name: string){}  // this can made read only by adding "readonly"
	static getInstance(){
		if(!OnlyOne.instance){
			OnlyOne.instance = new OnlyOne('The Only One');
		}
		return OnlyOne.instance;
	}
}

// let wrong = new OnlyOne('The Only One');  // will not work because constructor is private
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';
