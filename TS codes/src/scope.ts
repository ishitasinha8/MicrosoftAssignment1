// Scope: Global, Local, Block (ES6 - 2015)
// Variable Scope: var, let, const (ES6)

// Global Scope

var a: number = 1;

console.log("global: ",a);

// Local Scope

function localScope(): void {
  var b: number = 2;
  console.log("local: ",b);
}

localScope();

// Block Scope [let, const]

if (true) {
  let c: number = 3;
  const d: number = 5;
  console.log("block: ",c);
  console.log("block: ",d);
}

// console.log(c); // ReferenceError: c is not defined
// console.log(d); // ReferenceError: d is not defined

const e: number = 4;

console.log(e);

// e: number = 5; // TypeError: Assignment to constant variable.

// const f;  // SyntaxError: Missing initializer in const declaration

// Convention
// const name = ''
// let name = ''