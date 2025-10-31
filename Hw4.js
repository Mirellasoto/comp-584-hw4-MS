

// Exercise 1
let thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  // Code block
}

// Exercise 2
let stringWithBackticks = `String With Backticks`;
let floatNumber = 3.14159;
let trueBoolean = true;

// Exercise 3
	// Stores the score the player currently has
	let currentScore = 95;

// Exercise 4
console.log(`100` == 100);
console.log(`100` === 100);

// Exercise 5
let isWeekend = false;
let schedule;
schedule = isWeekend ? '"Day off"' : '"Work day"';

// Exercise 6
let userAge = 16;
if (userAge >= 18) {
  console.log('"Access Granted"');
} else {
  console.log('"Access Denied"');
}

// Exercise 7
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log('"Ready to process"');
}

// Exercise 8
for (let i = 1; i <= 5; i++) {
  console.log('Iteration ', i);
}

// Exercise 9
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    break; 
  }
}
// Exercise 10
let counter = 10;
do {
  console.log('"Running once"');
} while (counter == 0);

// Exercise 11
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);

// Exercise 12
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape'); 
fruitList.shift(); 
console.log('Index of Banana =', fruitList.indexOf('Banana'));

// Exercise 13
let originalData = [1, 2, 3];
let clonedData = originalData.slice();
// slicing the array makes a shallow copy, any nested objects/arrays will use a refrence

// Exercise 14
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15

let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
let animalArray = [dog, cat];

