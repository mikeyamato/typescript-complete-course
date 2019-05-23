// Let's keep it simple and only add the following methods to the Map:
/**
|--------------------------------------------------
| setItem(key: string, item: T) // should create a new key-value pair
|	getItem(key: string) // should retrieve the value of the provided key
|	clear() // should remove all key-value pairs
|	printMap() // should output key-value pairs
|	The map should be usable like shown below:
|
|	const numberMap = new MyMap<number>();
|	numberMap.setItem('apples', 5);
|	numberMap.setItem('bananas', 10);
|	numberMap.printMap();
|
|	const stringMap = new MyMap<string>();
|	stringMap.setItem('name', "Max");
|	stringMap.setItem('age', "27");
|	stringMap.printMap();
|--------------------------------------------------
*/

class MyMap<T>{  // type T is generic
	private map: {[key: string]:T} = {}  // store key:value pairs. here we are saying it should have an optional key (not an array). and the value stored is of type T. 
	setItem(key: string, item: T){ // should create a new key-value pair
		this.map[key] = item;
	}
	getItem(key: string){ // should retrieve the value of the provided key
		return this.map[key];
	}
	clear(){ // should remove all key-value pairs
		this.map = {};
	}
	printMap(){ // should output key-value pairs
		for (let key in this.map){
			console.log(key, this.map[key]); 
		}
	}
}

// The map should be usable like shown below:
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

console.log('**** break ****')

const stringMap = new MyMap<string>();
stringMap.setItem('apples', '5');
stringMap.setItem('bananas', '10');
console.log(stringMap.getItem('apples'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();