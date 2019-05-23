// namespaces allow us to split code. 

// /// <reference path="section06-circleMath.ts" />
// /// <reference path="section06-rectangleMath.ts" />  


namespace MyMath {  // commented out and modularized to separate files. 
	const PI = 3.14;  // only accessible within this scope
	
	export function calculateCircumference(diameter: number){
		return diameter * PI; 
	}
	
	export function calculateRectangle(width: number, length: number){
		return width * length; 
	}
}

const PI = 3.14;

console.log('Namespace rectangle',MyMath.calculateRectangle(10,20)); 
console.log('Namespace circle',MyMath.calculateCircumference(3));
// console.log('PI inside', MyMath.PI);   // cannot grab PI since it's not exported
console.log('PI outside', PI);

import * as Circle from "./section06-math/circle";
import Rectangle from "./section06-math/rectangle";

console.log('Module Pi:', Circle.PiModule);
console.log('Module Calculate Circumference', Circle.calculateCircumferenceModule(10));
console.log('Module Calculate Rectangle:', Rectangle(2,5));