// console.log("Hello, World!");

// Constants

const interestRate = 7.8;
// console.log("Interest Rate:", interestRate);
// interestRate = 8.5; // This will cause an error

// Primitive Types
let name = "Pratik"; // String Literal
let age = 25; // Number Literal: can be any number: integer or float
let isApproved = true; // Boolean Literal: true or false
let firstName = undefined; // By default, a variable is initialized to undefined.
let lastName = null; // We use null where we want to explicitly clear the value.

// Objects
// let person = {}; // Object Literal

let person = {
  name: "pratik",
  age: 30,
};

// console.log(person)

// Change the value
person.name = "John"; // Using dot notation

person["name"] = "Marry"; // Using bracket notation

// console.log(person.name);

// Arrays:
let selectedColors = ["red", "blue"];
// console.log(selectedColors[0]);

// Dynamically add an item
selectedColors[2] = "green";

// console.log(selectedColors);

// Functions:

// function greet() {
//   console.log("Hello World");
// }

// greet();

function greet(name) {
  console.log(`Hello ${name}`);
}

// greet('pratik singh');

// Function that calculates

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

let x = {
  x: 10,
  "y is valid": 11,
};

console.log(x["y is valid"]);
