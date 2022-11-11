'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// Array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// 1. Slice --> won't muted original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// copy
console.log([...arr]);

//2.Splice --> muted original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

//3.Reverse --> muted original array
let arr2 = [8, 9, 2, 7, 4, 0];
arr2.reverse();
console.log(arr2);

//4.Concat -->won't muted original array
const alphanumaric = arr.concat(arr2);
console.log(alphanumaric);
//alternative
console.log([...arr, ...arr2]);

//5.Concat -->won't muted original array
console.log(alphanumaric.join(''));
*/

/*
//looping -- ForEach

//--> for of
console.log('---FOR-OF---');
// for (const m of movements) {
for (const [i, m] of movements.entries()) {
  if (m > 0) {
    console.log(`Activity ${i + 1}: You deposited ${m}`);
  } else {
    console.log(`Activity ${i + 1}: You withdrew ${Math.abs(m)}`);
  }
}
//--> forEach
// break statement won't work in forEach
console.log('---FOR-EACH---');
movements.forEach((m, i, arr) => {
  if (m > 0) {
    console.log(`Activity ${i + 1}: You deposited ${m}`);
  } else {
    console.log(`Activity ${i + 1}: You withdrew ${Math.abs(m)}`);
  }
});

// arr.forEach((element,index,array))

// forEach on map
// set dosen't have key
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'RUB', 'INR', 'EUR', 'TK', 'EUR']);
console.log(currenciesUnique);
// set dosen't have key and index
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
*/
