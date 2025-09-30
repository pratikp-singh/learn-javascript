// const numbers = [3, 4];
const numbers = [1, 2, 3, 1, 4];

// Add Elements:

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

// Finding an Element (Primitives)

console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 1));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1)); // same as above

// Finding Elements (Reference Types:)
// includes() or indexOf() will not work.
// Use find(): returns the value of the first element in the array that satisfies the provided testing function. It returns the actual object.
// findIndex(): works same way as find(). But returns index.

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

let course = courses.find(function (c) {
  return c.name == "a";
});

let index = courses.findIndex(function (c) {
  return c.name == "a";
});

console.log(course);
console.log(index);

// Arrow function

course = courses.find((course) => course.name == "a");

// Removing Elements:
// const numbers = [1, 2, 3, 4];

// Removing from END: pop()
const last = numbers.pop();
console.log(last);

// Removing from BEGINNING: shift()
const begin = numbers.shift();
console.log(begin);

// Removing from MIDDLE: splice()
const middle = numbers.splice(1, 1);
console.log(middle);
console.log(numbers);

// Emptying an Array:

// let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// numbers = []; // If no reference to the previous array, it will be garbage collected
// otherwise, original array will be there

// Solutuon 2
// numbers.length = 0;
// // all elements truncated, no matter how many references exists

// Solution 3: using splice() method
// numbers.splice(0, numbers.length);

// Solution 4: using pop() continuously in loop
// while (numbers.length > 0) numbers.pop();

console.log(numbers);
console.log(another);

// Combining arrays and slicing arrays

let first = [1, 2, 3];
let second = [4, 5, 6];

// combine
let third = first.concat(second);

// console.log(first);
// console.log(second);
// console.log(third);

// slice
// let slice = third.slice(2, 4); // from index 2 to 4
// let slice = third.slice(2); // from index 2 onwards
let slice = third.slice(); //get the copy, entire array;
// console.log(slice);

// From concat() and slice() method, if array contains primitive values,
// the values are copied.
// Else, the reference is copied.

let x = [{ id: 10 }];
let y = [1];

let combined = x.concat(y);
x.id = 1;

console.log(combined); // id is changed.

// Spread Operator
let one = [1, 2, 3, { id: 1 }];
let two = [4, 5, 6];

// Combine arrays using spread operator
let three = [...one, "a", ...two, "b"];

console.log(three);
one[3].id = 10;

// Copy array using spread operator
let copy = [...three];
console.log(copy);

// Even if we use spread operator in to combine, still the reference gets copied if the array has object.

// Iterating an array
// const numbers = [1, 2, 3, 4, 5, 6];

// Using for...of
// for (const item of numbers) console.log(item);

// Using forEach()
// numbers.forEach(function(number){console.log(number)})
numbers.forEach((number) => console.log(number));
// numbers.forEach((number, index) => console.log(index, number)) // 2nd param is index for forEach

// Joining Arrays

// const numbers = [1, 2, 3];
const joined = numbers.join("-");

console.log(joined);

// split(): part of string
const message = "this is my first message";
const parts = message.split(" ");
console.log(parts);
console.log(parts.join("-"));

// Sorting Arrays:

// const numbers = [1, 2, 3];

// When we have numbers and strings in the array: sort() and reverse() are useful
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// When elements are not numbers or string

//

courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  // Sorting based on id
  //   if (a.id < b.id) return -1;
  //   if (a.id > b.id) return 1;
  //   return 0;

  // Sorting based on name
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

// Testing the Elements of an Array
// every() and some() method

// const numbers = [1, -2, 3];

// Check if all numbers are positive

// every():
// If one element is found which does not satisfiy the condition
// search stops
const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

// some():
// If atleast one element is found which satisfies the condition
// then search stops
const atleastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atleastOnePositive);

// Filtering an Array:
// filter() method:

// const numbers = [1, -1, 2, 3];
const temp = [];

// Using normal function
let filtered = numbers.filter(function (value) {
  return value >= 0;
});

// Using arrow functio
filtered = numbers.filter((n) => n >= 0);

console.log(filtered);

// Mapping an array:
// map() method:

// const numbers = [1, -1, 2, 3];

const filteredNumbers = numbers.filter((n) => n >= 0);

const items = filteredNumbers.map((n) => `<li>${n}</li>`);

const li = items.join("");
const html = `<ul>${li}</ul>`;

console.log(html);

// let mappedNumbers = numbers.map((n) => n ** 2);
// console.log(mappedNumbers);

// Reducing an Array:

// const numbers = [1, -1, 2, 3];
const sum = numbers.reduce(function (acc, n) {
  return acc + n;
}, 0);

console.log(sum);

// Exercise 01
function arrayFromRange(min, max) {
  const nums = [];
  for (let i = min; i <= max; i++) nums.push(i);
  return nums;
}

const nums = arrayFromRange(-10, -4);
console.log(nums);

// Exercise 02
// const numbers = [1, 2, 3];

function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++)
    if (searchElement == array[i]) return true;
  return false;
}

console.log(includes(numbers, 10));

// Exercise 03
function except(array, excluded) {
  let output = [];
  for (let item of array) {
    if (!excluded.includes(item)) output.push(item);
  }
  return output;
}

// const nums = [1, 2, 3, 1, 1];

const output = except(nums, [1, 2]);

console.log(output);

// Exercise 04
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// const numbers = [1, 2, 3, 4, 5, 6];

// const output = move(numbers, 1, 2);
console.log(output);

// Exercise 05
function countOccurrences(numbers, searchElement) {
  let count = 0;
  for (let number of numbers) if (number == searchElement) count += 1;

  // Using reduce()
  count = numbers.reduce((accumulator, number) => {
    if (number == searchElement) return ++accumulator;
    return accumulator;
  }, 0);
  return count;
}

// const numbers = [1, 2, 3, 4, 5, 6, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

// Exercise 06

function getMax(array) {
  if (!array || !array.length) return undefined;

  // Using reduce()
  return array.reduce(function (max, number) {
    if (number > max) return number;
    return max;
  }, array[0]);

  // Using normal approach
  let max = array[0];
  for (let item of array) if (item > max) max = item;
  return max;
}

// const numbers = [10, 1, 2, 3, 4, 5, 6];
const max = getMax(numbers);
console.log(max);

// Exercise 07

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// Find all the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title property

filtered = movies
  .filter((movie) => movie.year == 2018 && movie.rating >= 4)
  .sort((a, b) => b.rating - a.rating)
  //   .sort((a, b) => {
  //     if (a.rating > b.rating) return -1;
  //     if (a.rating < b.rating) return 1;
  //     return 0;
  //   })
  .map((movie) => movie.title);

console.log(filtered);
