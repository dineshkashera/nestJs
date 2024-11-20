eelHere’s your text converted into Markdown format for a single `.md` file:

````markdown
# TypeScript Guide

## TypeScript Compilation Process

1. **TypeScript Code** -> **TypeScript Compiler** -> **Plain JavaScript Code** -> **Executed in the Browser**

For an interactive experience, use the **TypeScript Playground**: [TypeScript Playground](https://www.typescriptlang.org/play)

---

## Initialize a New Project

Follow these steps to set up a new TypeScript project:

1. **Install TypeScript and ts-node**:
   ```bash
   npm install -g typescript ts-node
   ```
````

2. **Verify Installation**:

   ```bash
   tsc --help
   ```

   This checks if the TypeScript compiler (`tsc`) is working correctly.

3. **Set Up `tsconfig.json`**:
   Configure the TypeScript compiler by creating a `tsconfig.json` file with the following content:

   ```json
   {
     "compilerOptions": {
       "outDir": "./compiledTs", // Output directory for compiled .js files
       "module": "ESNext",
       "target": "ESNext",
       "moduleResolution": "node",
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true
     },
     "include": ["*.ts"]
   }
   ```

4. **Update `package.json` Scripts**:
   Modify the `package.json` file to include a script for running the compiled TypeScript files:

   ```json
   "scripts": {
     "start": "tsc && node compiledTs/index.js"
   }
   ```

5. **Set Up a New Project**:
   ```bash
   npm init -y
   ```

---

## Install TypeScript and CLI Tools

To install the TypeScript compiler and `ts-node` command line tools, use:

```bash
npm install -g typescript ts-node
```

---

## Fake JSON API

Use a fake JSON API for testing data requests: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## Type Annotations in TypeScript

TypeScript allows developers to define types for variables, functions, and more. This helps in catching type-related errors early in the development process.

---

## Type Inference

When types are not specified, TypeScript tries to "guess" or **infer** the type based on the value assigned, improving code reliability while reducing the need for explicit type declarations.

```

```

## When to use Annotations

1. functions that returns the `any` type
2. When we declare a variable on one line and Initialize it later.
3. variable whose type cannot be inferred correctly, means confused to identify which datatype value is.

## Tuples (Array with types)

Array like structure where each element represents some property of a record.

Example:
In the below Object representing a drink, where each element represents some property of a record
{
color: brown,
carbonated:true,
sugar:40
}

representing as array:
[brown, true, 40], where key will be need to remeber by developer.

- have fixed order
- always define type Annotations.

Tuple example:
const drink: [string, boolean, number ] = ['brown', true, 40]

OR

//Type alias
type Drink = [string, boolean, number]

const drink: Drink = ['brown', true, 40]
const tea: Drink = ['black', false, 20]

## Interfaces

Creates a new type, describing the property names and value types of an object.

- To reuse the type Annotations and optimize the type Annotations we mostly use interfaces.

#example:
interface Vehicle{
name: string,
year: number,
broken: boolean
}

const oldFerrari = {
name: 'Formula ferarri',
year: 2023,
broken: false
}

const printVehicle = (vehicle: Vehicle): void => {
console.log(`Name: ${vehicle.name}`)
console.log(`year: ${vehicle.year}`)
console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldFerrari)

## General Startegy for reusable code in ts

- Create functions that accept arguments that are typed with interfaces.
- Object/Classes can decide to 'implement' a given interface to work with a function.

## Classes

Blueprint to create an object with some fields(values) and methods(functions) to represents a 'thing'

## parcel-bundler

tool to help us run Typescript in the Browser
npm install -g parcel-bundler

## run parcel

parcel index.html
