// Objects:

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("Draw");
//   },
// };

// Factory Functions

/*
function createCircle(radius) {
  return {
    radius: radius, // if key and value are same, key can be dropped.
    draw: function () { // also, no need to write function inside an object.
      console.log("Draw");
    },
  };
}
*/

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

// let circle1 = createCircle(1);
// let circle2 = createCircle(2);

// console.log(circle1);
// console.log(circle2);

// Constructor Function

function Circle(radius) {
  //   console.log(`this: ${this}`);

  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

// let c = Circle(100);
let c1 = new Circle(10);
let c2 = new Circle(11);

// console.log(c1.radius);
// console.log(c2.radius);

// Dynamic Nature of Object:

let newCircle = {
  radius: 1,
};

// Adding new properties and methods after creation
newCircle.color = "yellow";
newCircle["color"] = "red";
newCircle.draw = function () {
  console.log("draw");
};

// console.log(newCircle);

// Deleting proeperties and methods dynamically
delete newCircle.color;
delete newCircle.draw;
// console.log(newCircle);

// Constructor Property:

// let circle = createCircle(1);
// let another = new Circle(1);

// console.log(circle.constructor);
// console.log(another.constructor);

// Functions are Objects:

console.log(Circle.name); // name of the function
console.log(Circle.length); // number of parameters of the function
console.log(Circle.constructor); // Function()

const greet = new Function("message", `console.log(message)`);

function X(value) {
  this.x = value;
}

X.call(this, 10);

// Functions are Objects
function X() {}
X.functionName = "Function name is X";
X.paramLength = 0;

// Value Type vs Reference Type
let x = 10;
let y = x;
x = 12;
console.log(y);

let number = 10;

function increase(number) {
  number += 1;
}
increase(number);
console.log(number);

// Reference Type

let m = { value: 10 };
let n = m;

m.value += 1;
console.log(n);

let obj = { value: 10 };

function increase(obj) {
  obj.value += 1;
}
increase(obj);
console.log(obj);

// Enumearting objects:
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(`KEY: ${key}, VALUE: ${circle[key]}`);
}

// for...of can't be used with object as the object is not iterable

for (const key of Object.keys(circle)) {
  console.log(key, circle[key]);
}

// Object.keys(): return only the array of keys
// Object.entries(): return array of element and each element is an array of two elements: key and value
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// To check if a property in an object: use 'in' operator
if ("radius" in circle) console.log("Yes it has.");

// Cloning an Object
// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// Clone: Method 1 (Copy all key value pair)
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// console.log(another);

// Clone: Method 2 (Using Object.assign() method)

// const another = Object.assign({}, circle); // first argument can be new object or existing object.
// const another = Object.assign({
//     color: 'yellow'
// }, circle); // first argument can be new object or existing object.
// console.log(another);

// Clone: Method 3 (using spread operator)
// const another = { ...circle };
// const another = { ...circle, color: "yellow" };
// console.log(another);

// Garbage Collection

// Math

// String
// Primitive String
let message = "hi";
console.log(typeof message); // string

// String Object
const another = new String("hi");
console.log(typeof another); // object

// Template Literals

// Date:

// EXERCISE 01:
let address = {
  street: "street 01",
  city: "city 02",
  zipCode: "zip 03",
};

function showAddress(address) {
  for (const key in address) console.log(`KEY: ${key}, VALUE: ${address[key]}`);
}
showAddress(address);

// EXERCISE 02:
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = createAddress("s", "c", "z");
let address2 = new Address("s", "c", "z");

console.log(address1);
console.log(address2);

// EXERCISE 03:
function NewAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  if (address1.street !== address2.street) return false;
  if (address1.city !== address2.city) return false;
  if (address1.zipCode !== address2.zipCode) return false;
  return true;
}

function areSame(address1, address2) {
  if (address1 === address2) return true;
  return false;
}

let address3 = new NewAddress("s", "c", "z");
let address4 = new NewAddress("s", "c", "z");
let address5 = address3;

console.log(areEqual(address3, address4));
console.log(areSame(address3, address5));

// EXERCISE 04:
const blogPost = {
  title: "t",
  body: "b",
  author: "a",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "a", body: "b" },
  ],
  isLive: false,
};

// EXERCISE 05:
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post("title", "body", "author");

// EXERCISE 06:
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 30 },
];

/*  
        OBJECT ORIENTED PROGRAMMING
*/

// Private Properties

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function () {};

  this.draw = function () {
    defaultLocation.x = 10;
    computeOptimumLocation();

    console.log("draw");
  };
}

// Exercise : StopWatch
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
