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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "Default"; // nobody has access to this and can only be accessed within this Person object;
        this.age = 27; // child classes have access to this and can only be accessed within this Person object. plus initializing age. 
        this.name = name; // `this.name` refers to the property of the class. `name` refers to the arguement passed to the constructor.
    }
    Person.prototype.printAge = function () {
        console.log('this.age:', this.age);
        this.setType("old man"); // need 'this' in order to access other methods within the Person object. 
    };
    // methods can be private as well. default is public.
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('this.type:', this.type);
    };
    return Person;
}());
var personA = new Person("Mike", "mike"); // instantiate it with "new". accessing the class Person.
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
var John = /** @class */ (function (_super) {
    __extends(John, _super);
    function John() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "John";
        return _this;
    }
    return John;
}(Person));
var john = new John("Mary", "mike"); // "new John" because I'm creating a new class.
console.log(john); // the output name is John because "class Mike" writes over anything is class Person. 
var Michael = /** @class */ (function (_super) {
    __extends(Michael, _super);
    // name = "Michael";
    function Michael(username) {
        var _this = _super.call(this, "Michael", username) || this;
        _this.age = 31; // this is accessible because it is protected therefore passed down to child. 
        return _this;
    }
    return Michael;
}(Person));
var michael = new Michael("michael");
console.log("michael:", michael);
/**
|--------------------------------------------------
| getters & setters
|--------------------------------------------------
*/
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // accessing the getter
plant.species = "AB";
console.log(plant.species); // doesn't pass validation
plant.species = "Kitty";
console.log(plant.species); // does pass validation
/**
|--------------------------------------------------
| static properties & methods
|--------------------------------------------------
*/
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // "static" kw allows us to use the property even w/o instantiating the class.
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.circumference(3));
/**
|--------------------------------------------------
| Abstract Classes & Methods
|--------------------------------------------------
*/
// cannot be instantiated directly. ONLY can be inherited. 
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log('newProject:', newProject);
newProject.changeName("Super IT Project");
console.log('newProject changeName:', newProject);
/**
|--------------------------------------------------
| Private Constructor
|--------------------------------------------------
*/
// not sure in what scenarios this would be used
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    // private constructor(public readonly name: string){}  // this can made read only by adding "readonly"
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');  // will not work because constructor is private
var right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';
