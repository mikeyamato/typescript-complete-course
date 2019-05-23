# [Compiling](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
`tsc <name of file>.ts` || `tsc` (after `tsc --init` has run)

`tsc --init` creates a config allowing user to just run `tsc` to compile all TS files. 

`tsc -w` this will watch for any changes so you don't need to compile all the time. Exit with control+c. 

## Namespaces
Ideal for small projects (Modules for larger projects).
To compile several **_namespace_** files there are several options. 
### Option 1 (most tedious)
Inside the root html file (`index.html`) add additional scripts to include other files. 
```
<script src="section06-circleMath.js" async defer></script>
<script src="section06-rectangleMath.js" async defer></script>
<script src="app-section06.js" async defer></script>
```

### Option 2 (tedious)
Into one Js file run:
```
tsc --outFile <output_file_name.js> <1st_file-compile_in.ts> <2nd_file-order_of.ts> <3rd_file-importance.ts> <4th_files-etc.ts>
``` 
So for example: 
```
tsc --outFile app-section06.js section06-circleMath.ts section06-rectangleMath.ts app-section06.ts
```

### Options 3 (easiest)
Importing files but not with traditional es6 import statements. From the single TS file at the very top in order of importance...
```
/// <reference path="section06-circleMath.ts" />
/// <reference path="section06-rectangleMath.ts" />
```
NOTE: three forward slashes to import
Then run the following command: `tsc app-section06.ts --outFile app-section06.js`


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

# Setting up a new React app w/ TS
`npx create-react-app . --scripts-version=react-scripts-ts` dot to signify to use the current folder (or signify the folder name). this will build the react app with TS out of the box. 

`npm start`