"use strict";
// namespaces allow us to split code. 
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference path="section06-circleMath.ts" />
// /// <reference path="section06-rectangleMath.ts" />  
var MyMath;
(function (MyMath) {
    var PI = 3.14; // only accessible within this scope
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 3.14;
console.log('Namespace rectangle', MyMath.calculateRectangle(10, 20));
console.log('Namespace circle', MyMath.calculateCircumference(3));
// console.log('PI inside', MyMath.PI);   // cannot grab PI since it's not exported
console.log('PI outside', PI);
var Circle = __importStar(require("./section06-math/circle"));
var rectangle_1 = __importDefault(require("./section06-math/rectangle"));
console.log('Module Pi:', Circle.PiModule);
console.log('Module Calculate Circumference', Circle.calculateCircumferenceModule(10));
console.log('Module Calculate Rectangle:', rectangle_1.default(2, 5));
