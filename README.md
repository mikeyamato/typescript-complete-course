# [Compiling](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
`tsc <name of file>.ts` || `tsc` (after `tsc --init` has run)

`tsc --init` creates a config allowing user to just run `tsc` to compile all TS files. 

# Run App (dev)
`npm run dev` || `npm start`

In  order to run a `.js` file (from `index.html`) the `.ts` file needs to be compiled into `.js` format. So anytime there are changes to `.ts` always compile first then run.

# Types
string, number, boolean, array, tuples, enums, any
Assign type by the name of the variable followed by colon (ie let myVariable: number = 27)

# [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
## Compile JS file
To prevent the compiler creating a JS file even though there are errors set `noEmit": true`. Default is false. 
## Null checks
add `"strictNullChecks": true`  to the `compilerOptions`. Default is false. 
## Source Map
To have access to the .ts file in the browser for debugging (`Sources` tab and setting breakpoints inside the TypeScript file), set `"sourceMap": true`. Default is false.
## 
To not allow type any implicitly (example below) then set `"noImplicitAny": true`. Default is false.
```
let anything;  // will not work
anything = 12;

let something: any; // will work
something = 12;
```
## Unused parameters
To prevent compiling if there are any unused parameters then set `"noUnusedParameters": true`. Default is false.

