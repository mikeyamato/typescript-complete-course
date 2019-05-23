namespace MyMath {

	// perfectly fine to have a namespace within a namespace.
	// export if needed.
	export namespace Circle {
		const PI = 3.14;  // only accessible within this scope
		
		export function calculateCircumference(diameter: number){
			return diameter * PI; 
		}
	}
}