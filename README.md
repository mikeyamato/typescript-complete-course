# Compiling
`tsc <name of file>.ts`

`tsc --init` creates a config allowing user to just run `tsc` to compile all TS files. 

# Run App (dev)
`npm run dev`

# Types
string, number, boolean, array, tuples, enums, any
Assign type by the name of the variable followed by colon (ie let myVariable: number = 27)

# Null checks
inside `tsconfig.json` add `"strictNullChecks": false` (default)  to the `compilerOptions`. 