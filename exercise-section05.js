"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BWM");
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
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log('exercise 2:', rectangle.calcSize());
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
var Person5 = /** @class */ (function () {
    function Person5() {
        this._firstName = "Nothing";
    }
    Object.defineProperty(Person5.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person5;
}());
var person5 = new Person5();
console.log('person 1:', person5.firstName);
person5.firstName = "Ma";
console.log('person 2:', person5.firstName);
person5.firstName = "Mike";
console.log('person 3:', person5.firstName);
