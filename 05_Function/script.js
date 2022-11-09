'use strict';

/*
//Default parameter
const booking__history = [];

const flightBooking = (flightId, passCount = 1, price = 5600 * passCount) => {
  // ES5
  //   passCount = passCount || 1;
  //   price = price || 5600;

  const booking = {
    flightId,
    passCount,
    price,
  };
  booking__history.push(booking);
  console.log(booking);
};

flightBooking('LH534');
flightBooking('LP764', 2, 10000);
*/

/*
// passing value and reference
const flightId = 'LH534';
const MyData = {
  name: 'Suman Dhali',
  id: 622153475847,
};

const checkIn = (flightID, passenger) => {
  flightID = 'LP296';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.id === 622153475847) {
    alert('Booked');
  } else {
    alert('Worng details');
  }
};

checkIn(flightId, MyData);
console.log(flightId);
console.log(MyData);

*/

/*
// Higher order function

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, func) => {
  console.log(`Orginal String: ${str}`);
  console.log(`Treansform String: ${func(str)}`);
  console.log(`Transform By: ${func.name}`);
};

transformer('JavaScript is most used language!', upperFirstWord);
transformer('JavaScript is most used language!', oneWord);

*/

/*
// Function returning function
const greet = greeting => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greet('Hey');

greetHey('Suman');
greetHey('Rehniriya');

//nested function revoking
greet('Hello')('Jonas');

// call and apply method

const AirIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  booking: [],
  book(flightId, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightId}`
    );
    this.booking.push({ flight: this.iataCode, flightId: flightId });
    console.log(this.booking);
  },
};

AirIndia.book('239', 'Jonas');
AirIndia.book('216', 'Suman');

const IndiGo = {
  airline: 'Indi Go',
  iataCode: 'IG',
  booking: [],
};

// creating copy of a method, which converted into function
const book = AirIndia.book;

// dosent work
// book('LP567', 'Martha');

book.call(IndiGo, '567', 'Martha');

const AirAsia = {
  airline: 'Air Aisa',
  iataCode: '2A',
  booking: [],
};

const flightData = ['438', 'Agon'];
// old way
book.apply(AirAsia, flightData);
//modern way
book.call(AirAsia, ...flightData);

// Bind method
// Bind method simply return the binded function

const bookAir = book.bind(AirIndia);
const bookInd = book.bind(IndiGo);
const book2A = book.bind(AirAsia);

bookInd(348, 'A-Train');

// pre set argument
const bookInd618 = book.bind(IndiGo, 618);
bookInd618('Huighe');

// with event listener
AirIndia.planes = 300;
AirIndia.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// won't work
// document.querySelector('.buy').addEventListener('click', AirIndia.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', AirIndia.buyPlane.bind(AirIndia));

// partial
const addTax = (rate, value) => value + rate * value;

console.log(addTax(0.12, 900));

const addGST = addTax.bind(null, 0.18);
console.log(addGST(1999));

// challenge
const chAddTax = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

const chAddGST = chAddTax(0.18);
console.log(chAddGST(99));

*/

/*
//Coding challange -->1
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const ans = Number(
      prompt(`${this.question}
  ${this.options.join('\n')} \n (Write option number) `)
    );
    console.log(this);

    typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;

    this.DisplayResults('hi');
    this.DisplayResults();
  },
  DisplayResults(type = 'array') {
    if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}".`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


*/

//Immediately invoked function expression

//1.
(function () {
  console.log('This will never run again');
})();

//2.
(() => console.log('This will also never run again'))();
