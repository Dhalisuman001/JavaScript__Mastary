'use strict';

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
/*



// Coding challange -->1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// const checkDogs = (dogsJulia, dogsKate) => {
//   const JuliaDogs__corrected = dogsJulia.slice(1, -1);

//   console.log('Julias Dogs->');
//   JuliaDogs__corrected.forEach((age, i) => {
//     const check = age >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i + 1} is an ${check}, and is ${age} years old`);
//   });
//   console.log('Kates Dogs->');
//   dogsKate.forEach((age, i) => {
//     const check = age >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i + 1} is an ${check}, and is ${age} years old`);
//   });
// };
// const dogsJulia = {
//   dataset1: [3, 5, 2, 12, 7],
//   dataset2: [9, 16, 6, 8, 3],
// };
// const dogsKate = {
//   dataset1: [4, 1, 15, 8, 3],
//   dataset2: [10, 5, 6, 1, 4],
// };
// checkDogs(dogsJulia.dataset1, dogsKate.dataset1);
// checkDogs(dogsJulia.dataset2, dogsKate.dataset2);
*/

/*
//Array map

// const birthYear = [1998, 2002, 1947, 2015, 1968, 1991, 1981, 2006, 2004, 1973];

// const ages = birthYear.map(year => 2022 - year);
// console.log(ages);
*/
/*
// Array filter
// const deposit = movements.filter(mov => {
//   return mov > 0;
// });
const deposit = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
console.log(deposit);
*/

/*
// Reduce function
// accumulator is like a snowball
// const balence = movements.reduce((accm, curr, i) => {
//   console.log(`Iteration ${i}: ${accm}`);
//   return accm + curr;
// }, 0);
const balence = movements.reduce((accm, curr, i) => accm + curr, 0);
// array.movement(callBackFunction,initialValue)
console.log(balence);

// maximum movement
const max = movements.reduce(
  (accm, ele) => (Math.abs(ele) > accm ? Math.abs(ele) : accm),
  movements[0]
);
console.log(max);
*/

//Coding challange -->2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const calcAverageHumanAge = dogsAge => {
  // 1.
  const humanAge = dogsAge.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  //2.
  const adultHumanAge = humanAge.filter(age => age > 18);

  //3.
  const avgHuman = adultHumanAge.reduce((acc, age, _, arr) => {
    return acc + age / arr.length;
  });

  return avgHuman;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

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

//1. showing transtraction
const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
          </div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} $</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

//2. calculate and show total balance
const calcDisplayBalence = movements => {
  const balence = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balence} $`;
};
calcDisplayBalence(account1.movements);

//3. create username
const createUserName = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
