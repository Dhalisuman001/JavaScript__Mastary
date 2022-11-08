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
