'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mianIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mianIndex]];
  },
  //ES6 enhance object litarls
  openingHours,
  orderDelivery({
    startIndex = 1,
    mianIndex = 1,
    time = '9am',
    address = 'None',
  }) {
    console.log(
      `Order recived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mianIndex]}`
    );
    console.log(
      `Time ${time}
       Address:
         Village: ${address},
      `
    );
  },
  orderPasta(in1, in2, in3) {
    console.log(`Here are your pasta ${in1}, ${in2} and ${in3}`);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// -->String

const airline = 'Tap Air India';
const plain = 'A320';

// string indexes
console.log(airline[1]);
console.log(plain[0]);

console.log('B78ES'[3]);

//size
console.log(plain.length);
console.log('B78ES'.length);

//indexOf
console.log(airline.indexOf('r')); // give first appearence
console.log(airline.lastIndexOf('a')); // give last appearence

//slice method
console.log(airline.slice(4)); // start form 4
console.log(airline.slice(4, 7)); // start form 4 to 7

// useage
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//negative
console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got a middle seat! 😎');
};

checkMiddleSeat('23E');
checkMiddleSeat('7A');
checkMiddleSeat('11B');

// String is a primmative data types,
// When ever we call methods on string
//interpreter convert string into string Object

console.log(new String('Hello World!'));
console.log(typeof 'Hello World!'); // string
console.log(typeof new String('Suman!')); //string object

// changing cases
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//excercise
const passenger = 'jHoN';
const lowerCase = passenger.toLowerCase();
const properCase = lowerCase[0].toUpperCase() + lowerCase.slice(1);
console.log(properCase);

//Comparing email
const email = 'dhalisuman001@gmail.com';
const inputEmail = ' DhaliSuman001@Gmail.com \n';

const normaliseEmail = inputEmail.toLowerCase().trim();
console.log(normaliseEmail);
console.log(normaliseEmail == email);

// replacing
const priceGB = '288,97£';
const priceUSA = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUSA);
const str1 =
  'Tommrow Zimbabwa will face mighty India and Netherland will mighty South Africa';
// console.log(str1.replace('mighty', ''));
console.log(str1.replaceAll('mighty', ''));

//Boolean
console.log(str1.includes('Zimbabwa'));
console.log(str1.startsWith('Tommrow'));

// Excersice
const checkTheBaggage = items => {
  const bagage = items.toLowerCase();

  if (
    bagage.includes('gun') ||
    bagage.includes('knife') ||
    bagage.includes('drug')
  ) {
    console.log('You are not allowed in this place');
  } else {
    console.log('Welcome here');
  }
};

checkTheBaggage('I have a laptop, KnIfE');
checkTheBaggage('I have a laptop, headphone and shirts');
checkTheBaggage('I have not smuggiling drug');
checkTheBaggage('I have a licenced gun and food');

// split
const arr1 = 'You are not allowed in this place'.split(' ');
console.log(arr1);

const [firstName, lastName] = 'Suman Dhali'.split(' ');

// join
const finalName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(finalName);

// excercise
const nameConvert = name => {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
nameConvert('vIraT dHoNI SUrya hARDik');

//padding
console.log('Suman'.padStart(7, ' ').padEnd(9, ' '));

// excercise
const maskAddhar = number => {
  const endsDigit = number + '';
  const masked = endsDigit.slice(-4).padStart(endsDigit.length, '*');
  console.log(masked);
};
maskAddhar(622153475847);
maskAddhar('622153475847');

// repeat
const msg = 'Welcome to JavaScript.. ';
const repeated = msg.repeat(5);
console.log(repeated);

/*
// maps --> key value pairs
const rest = new Map();
rest.set('name', 'Shoppable');
rest.set(1, 'Kolkata');
console.log(rest.set(2, 'Delhi'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open: D')
  .set(false, 'We are close: (');

console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// has method
console.log(rest.has('categories'));

// delete method
rest.delete(2);

// size method
console.log(rest.size);

// clear method

const arr = [3, 4];
rest.set(arr, 'Array');

console.log(rest.get(arr));
console.log(rest);

const quiz = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try again!'],
]);

console.log(quiz);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

console.log(quiz.get('question'));
for (const [key, value] of quiz) {
  typeof key === 'number' ? console.log(`Option ${key}: ${value}`) : null;
}

// const answare = Number(prompt('Your choise? '));
const answare = 3;
console.log(quiz.get(quiz.get('Correct') === answare));

//convert back to array
console.log([...quiz]);

*/

/*
// set --> unordered Collection of unique value

// set of array
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Risato',
  'Pizza',
  'Pasta',
  'Pizza',
]);
// set of string
console.log(new Set('Suman'));

console.log(orderSet);
//size
console.log(orderSet.size);
// exist or not
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
// add
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); //ignored
console.log(orderSet);

//delete
orderSet.delete('Garlic Bread');
console.log(orderSet);

//empty
// orderSet.clear();
// console.log(orderSet);

//looping
for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
*/

/*
//Coding challange -->2
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK 😀
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal no. ${key + 1} scored by ${value}`);
}

//2.
let sum = 0;
let count = 0;
for (var [key, value] of Object.entries(game.odds)) {
  sum += value;
}
const average = sum / key.length;
console.log(average);

//3.
for (const [key, value] of Object.entries(game.odds)) {
  const resultStr = `Odd of ${key === 'x' ? '' : 'victory'} ${
    key === 'x' ? 'draw' : game[key]
  }: ${value}`;
  console.log(resultStr);
}

//4.
const scores = {};
for (const value of game.scored) {
  scores[value] ? scores[value]++ : (scores[value] = 1);
}
console.log(scores);

*/

/*
// loop over object
//object keys
const attr = Object.keys(openingHours);
let OpenStr = `We are open on ${attr.length} days: `;

attr.forEach(element => {
  OpenStr += `${element}, `;
});
console.log(OpenStr);

// Object values
const values = Object.values(openingHours);
console.log(values);

// Object name and value
const entry = Object.entries(openingHours);
console.log(entry);

entry.forEach(([key, { open, close }]) => {
  console.log(`On ${key}: we open at ${open} and close at ${close}`);
});

*/

/*
// optional chaning

// console.log(restaurant.openingHours.mon?.open); //error
//solution:

// traditional way
console.log(restaurant.openingHours.mon && restaurant.openingHours.mon.open);

//modern way
console.log(restaurant.openingHours.mon?.open);

//example
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for of loop
for (const item of weekDays) {
  // chaining and nullish operator
  const open = restaurant.openingHours[item]?.open ?? 'closed';
  console.log(`On ${item}, we open at ${open}`);
}

// method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

const game = [
  {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  },
];
// arrays
console.log(game[0]?.players[0]);
*/

//coding challange -->1
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayer = [...players1, ...players2];
console.log(allPlayer);

//4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, team2, draw);

//6.
const printGoals = (...names) => {
  console.log('Goal scorer list: ');
  names.forEach(e => {
    console.log(e);
  });
  console.log('Total goal scored: ', names.length);
};
printGoals(...game.scored);

//7.
team1 > team2 && console.log('Team1 is more likily to win');
team1 < team2 && console.log('Team2 is more likily to win');

*/

/*
// nullish coalsing operator

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests || 10;
console.log(guest1);

//using ternary
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);
*/

/*
// Short cuircuiting(&&,||)

//------ Or --------

console.log(3 || 'Suman');
console.log('' || 'Suman'); //falsy value
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests || 10;
console.log(guest1);

//using ternary
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest2);

// ------ And -------
//return falsey value if the first one is false
console.log(0 && 'Suman');
//return falsey value if the value is false
console.log('hello' && 23 && null && 'Suman');

restaurant.order && restaurant.orderPizza('Mushrooms', 'Chicken');


*/

/*
// rest pattren
// spread right side of '='
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// rest pattren must be the last element.
const [pizza, risato, ...oth] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risato, oth);

// rest with object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// rest in fucntion
const add = (...a) => {
  let sum = 0;
  console.log(a);
  a.forEach(element => {
    sum += element;
  });
  return sum;
};
console.log(add(6, 8, 3, 8.9, 10));
console.log(add(6, 8, 10));

const eArr = [67, 12, 93, 18];
console.log(add(...eArr));

restaurant.orderPizza('mushrooms', 'onion', 'chicken', 'cheez', 'olives');
*/

/*
// spread operator

const arr = [4, 5, 7];

//old way
// const newArr = [8, 9, arr[0], arr[1], arr[2]];

// modern way
const newArr = [1, 2, ...arr];
console.log(newArr);
// Display individually
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Momo'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays,strings,maps,sets, not object
// string
const str = 'Suman';
const letters = [...str, ' ', 'D.'];
console.log(...letters);
console.log(...str);
// console.log(`${...str} `); not work

// const ing = [
//   prompt('Lets make pasta! Ingredient1?'),
//   prompt('Lets make pasta! Ingredient2?'),
//   prompt('Lets make pasta! Ingredient3?'),
// ];
// console.log(ing);
// restaurant.orderPasta(...ing);

//objects
const newResturent = { ...restaurant, founder: 'Suman Dhali' };
console.log(newResturent);

// copy object using spread object
const copyResturent = { ...restaurant };
copyResturent.name = 'Rehagar';

// old object can't change
console.log(copyResturent.name);
console.log(restaurant.name);

*/

/*
// argument object destructuring
restaurant.orderDelivery({
  time: '22.30pm',
  mianIndex: 2,
  startIndex: 2,
});

// object destructure
// name destructuring
const { name, openingHours: openHour, categories } = restaurant;
console.log(name, openHour, categories);

// default values
const { menu = [], starterMenu: startMenu = [] } = restaurant;
console.log(menu, startMenu);

// mutating value
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 89 };
({ a, b } = obj);
console.log(a, b);

// nested object
const {
  fri: { open: o, close: c },
} = openHour;

console.log(o, c);
*/

/*
// destructring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, sec] = restaurant.categories;
console.log(first, sec);

// swapping manully
// const temp = first;
// first = sec;
// sec = temp;
// console.log(first, sec);

// swapping modern way
[first, sec] = [sec, first];
console.log(first, sec);

// destructure retutn value
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// destructure in nested array
const nested = [2, 8, [6, 1]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [n1 = 7, n2 = 4, n3 = 1] = [8, 0];
console.log(n1, n2, n3);
*/
