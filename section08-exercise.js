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
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {}; // store key:value pairs. here we are saying it should have an optional key (not an array). and the value stored is of type T. 
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
// The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
console.log('**** break ****');
var stringMap = new MyMap();
stringMap.setItem('apples', '5');
stringMap.setItem('bananas', '10');
console.log(stringMap.getItem('apples'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
