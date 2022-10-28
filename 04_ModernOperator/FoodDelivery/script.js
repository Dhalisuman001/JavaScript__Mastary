'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  openingHours: {
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
  },
};

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
