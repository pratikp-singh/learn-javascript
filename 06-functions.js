// Function Declaration vs expression

// Function Declaration
function walk() {
  console.log("Walk");
}

// Function Expression

// Anonymour Function Expression: No name for function
let run = function () {
  console.log("run");
};

let move = run; // both run and move have same reference

// Named Function Expression

let run2 = function walk() {
  console.log("run");
};

// Hoisting

x();

function x() {
  console.log("I am in X");
}

// Arguments
// Every function has a special object called: arguments
function sum() {
  let total = 0;
  for (let value of arguments) {
    // We are able to iterate over this object because
    // arguments object has Iterator.
    total += value;
  }
  return total;
}

console.log(`SUM: ${sum(1, 2, 3, 4, 5)}`);

// The REST Operator
function sum(...args) {
  return args.reduce((a, n) => a + n);
}

console.log(sum(1, 2, 3, 4, 5, 6));

function totalCost(discount, ...prices) {
  return (1 - discount) * prices.reduce((a, n) => a + n);
}

console.log(totalCost(0.5, 1, 2, 3, 4));

// Default Parameter
function interest(principal, rate = 3.5, years = 5) {
  // // Before ES6, setting default value
  // rate = rate || 3.5;
  // years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

// Getters and setters
// try and catch

// getters: access properties
// setters: change (mutate) them

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    let name = value.split(" ");
    if (name.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = name[0];
    this.lastName = name[1];
  },
};

console.log(person.fullName);
// person.fullName = "pratik singh";

try {
  person.fullName = "pratik";
} catch (e) {
  alert(e);
}

console.log(person.fullName);

// Local and global scope

// let vs var

// The this keyword

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();

function playVideo() {
  console.log(this); // references window/global object
}

playVideo();

function Video(title) {
  this.title = title;
  console.log(this); //references new object {}
}

new Video("b");

// Changing this

// Exercise 01 - Sum of arguments
function sum(...args) {
  if (args.length == 0) return;
  if (args.length == 1 && Array.isArray(args[0]))
    // return args[0].reduce((a, n) => a + n);
    args = [...args[0]];

  return args.reduce((a, n) => a + n);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Exercise 02 - area of circle
const circle = {
  radius: 1,

  get area() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle.radius);
console.log(circle.area);

// Exercise 03 - Error handlings
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Not an array");

  return array.reduce((accumlator, current) => {
    const occurrence = current == searchElement ? 1 : 0;
    return accumlator + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4];
console.log(countOccurrences(numbers, 1));
