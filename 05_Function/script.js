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
