// decorators
// they're functions we create. they get one argument by typescript. it is always the constructor function of the class. 
// they get added with the '@' symbol
// A Constructor is a special type of method of a class and it will be automatically invoked when an instance of the class is created.
// A class can have any number of constructors.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
|--------------------------------------------------
| adding to classes
|--------------------------------------------------
*/
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person1 = /** @class */ (function () {
    function Person1() {
        console.log("hi");
    }
    Person1 = __decorate([
        logged
    ], Person1);
    return Person1;
}());
/**
|--------------------------------------------------
| factory
|--------------------------------------------------
*/
// true/false print to the console or not
function logging(value) {
    return value ? logged : null; // if true, then return logged
}
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1 = __decorate([
        logging(true)
    ], Car1);
    return Car1;
}());
