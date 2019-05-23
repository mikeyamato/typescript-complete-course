// Exercise 1 - How was your TypeScript Class?
// class
/**
|--------------------------------------------------
| function Car(name) {
|	  this.name = name;
|	  this.acceleration = 0;
|
|	  this.honk = function() {
|		  console.log("Toooooooooot!");
|	  };
|
|	  this.accelerate = function(speed) {
|	    this.acceleration = this.acceleration + speed;
|	  }
| }
|
| var car = new Car("BMW");
| car.honk();
|	console.log(car.acceleration);
|	car.accelerate(10);
|	console.log(car.acceleration);
|--------------------------------------------------
*/
class Car {
	name: string; 
	acceleration: number = 0; 

	constructor(name: string){  // constructor of "name" because that's the argument being passed.
		this.name = name; 
	}

	honk(){
		console.log("Toooooooooot!");
	}

	accelerate(speed: number){
		this.acceleration = this.acceleration + speed; 
	}
}

const car = new Car("BWM")
car.honk();
console.log('acceleration 1:', car.acceleration);
car.accelerate(10);
console.log('acceleration 2:', car.acceleration);

// Exercise 2 - Two objects, based on each other ...
// inheritance
/**
|--------------------------------------------------
|	var baseObject = {
|		width: 0,
|		length: 0
| };
|
| var rectangle = Object.create(baseObject);
|	rectangle.width = 5;
|	rectangle.length = 2;
|	rectangle.calcSize = function() {
|		return this.width * this.length;
|	};
|	console.log(rectangle.calcSize());
|--------------------------------------------------
*/
class BaseObject {
	width: number = 0; 
	length: number = 0;
}

class Rectangle extends BaseObject {
	calcSize(){
		return this.width * this.length; 
	}
}

const rectangle = new Rectangle(); 
rectangle.width = 5;
rectangle.length = 2;
console.log('exercise 2:', rectangle.calcSize())

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// getters & setters
/**
|--------------------------------------------------
| var person = {
|		_firstName: ""
|	};
|	Object.defineProperty(person, "firstName", {
|		get: function () {
|				return this._firstName;
|		},
|		set: function (value) {
|				if (value.length > 3) {
|						this._firstName = value;
|				}
|				else {
|						this._firstName = "";
|				}
|		},
|		enumerable: true,
|		configurable: true
|	});
|	console.log(person.firstName);
|	person.firstName = "Ma";
|	console.log(person.firstName);
|	person.firstName = "Maximilian";
|	console.log(person.firstName);
|--------------------------------------------------
*/

class Person5{
	private _firstName: string = "Nothing";

	get firstName(){
		return this._firstName;
	}

	set firstName(value: string){
		if (value.length > 3){
			this._firstName = value; 
		} else {
			this._firstName = "Default"; 
		}
	}
}

const person5 = new Person5();
console.log('person 1:', person5.firstName);
person5.firstName = "Ma";
console.log('person 2:', person5.firstName);
person5.firstName = "Mike";
console.log('person 3:', person5.firstName);
