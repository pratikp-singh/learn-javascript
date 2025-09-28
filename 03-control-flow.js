// if...else

// hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning !");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon !");
} else {
  console.log("Good Evening");
}

// switch...case

// Check if role is admin, moderator or guest
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User.");
    break;

  case "moderator":
    console.log("Moderator User.");
    break;

  default:
    console.log("Unknown User.");
}

// Loop (for, do...while, while, for...in, for...of)

// for Loop:
for (let i = 0; i < 5; i++) {
  console.log(`For: ${i}`);
}

// while Loop:
let i = 0;
while (i < 5) {
  console.log(`While: ${i}`);
  i++;
}

// do...while Loop
let j = 0;
do {
  console.log(`Do...while: ${j}`);
  j++;
} while (j < 5);

// for...in Loop

// using object
const person = {
  name: "John",
  age: 30,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// using arrays

let colors = ["red", "green", "blue"];
for (const index in colors) {
  console.log(`${index}: ${colors[index]}`);
}

// for...of Loop:
for (const color of colors) {
  console.log(color);
}

// break & continue

let counter = 0;

while (counter <= 10) {
  counter++;
  if (counter == 5) continue;

  if (counter == 9) break;

  console.log(`COUNTER: ${counter}`);
}

////////////////////////////////////////////
//  EXERCISE
////////////////////////////////////////////

// Exercise - 01
// Problem: Write a function that takes two numbers and returns the maximum of the two
function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

let number1 = 12;
let number2 = 10;

console.log(`Max of ${number1} and ${number2} is ${max(number1, number2)}`);

// Exercise - 02
// Problem: Given height and width, check if it is landscape or not.

function isLandscape(width, height) {
  return width > height;
}

// Exercise - 03
// Problem:
// Divisible by 3: Fizz
// Divisible by 5: Buzz
// Divisible by 3 and 5: FizzBuzz
// If input is not number: return same number

function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("Not a number");
    return NaN; // typeof NaN -> number
  }

  if (input % 3 == 0 && input % 5 == 0) console.log("FizzBuzz");
  else if (input % 5 == 0) console.log("Buzz");
  else if (input % 3 == 0) console.log("Fizz");
  else console.log(input);
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz("true");

// Exercise - 04
// Problem:
// Speed Limit: 70
// If speed limit is or under 70 -> OK
// For every 5 km above speed limit: 1 point
// If more than 12 points: license suspended

function checkSpeed(speed) {
  if (speed < 75) {
    console.log("OK");
    return;
  }
  let SPEED_LIMIT = 70;
  let difference = speed - SPEED_LIMIT;
  let point = Math.floor(difference / 5);

  if (point > 12) {
    console.log("License suspended.");
  } else {
    console.log(`${point} point`);
  }
}

checkSpeed(70);
checkSpeed(74);
checkSpeed(75);
checkSpeed(80);
checkSpeed(81);
checkSpeed(180);

// Exercise - 05
// Problem:

function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    let result = i % 2 ? "EVEN" : "ODD";
    console.log(`${i} "${result}"`);
  }
}

showNumbers(10);

// Exercise - 06
// Problem:

// Falsy Values: undefined, null, NaN, false, '', 0

function countTruthy(array) {
  let counter = 0;
  for (let item of array) if (item) counter++;

  console.log(`Truthy Values: ${counter}`);
}

countTruthy([12, "", "pRaTiK-sInGh", undefined, "undefined"]);

// Exercise - 07
// Problem:

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.8,
  director: "b",
};

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] == "string") console.log(`${key} ${obj[key]}`);
}

showProperties(movie);

// Exercise - 08
// Problem:

function sum(limit) {
  let finalSum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 == 0 || i % 5 == 0) finalSum += i;
  console.log(`Final Sum: ${finalSum}`);
}

sum(10);

// Exercise - 09
// Problem:
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50, 100, 100, 100, 100, 100, 100];

function calculateGrade(marks) {
  let averageMark = calculateAverage(marks);

  if (averageMark < 60) return "F";
  if (averageMark < 70) return "D";
  if (averageMark < 80) return "C";
  if (averageMark < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let item of array) sum += item;

  return sum / array.length;
}

console.log(calculateGrade(marks));

// Exercise - 10
// Problem:

function showStars(rows) {
  for (let row = 0; row < rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

showStars(10);

// Exercise - 11
// Problem:

function showNumbers(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showNumbers(20);
