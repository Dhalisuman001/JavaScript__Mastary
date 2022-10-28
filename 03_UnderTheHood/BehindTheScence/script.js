'use strict';

/* How Java Script work?
Behind the */

//   1. High-Level
//   2. Barbage-collected
//   3. Interpreted
//   4. Multi-paradigm
//   5. Object-Oriented
//   6. First-class functions
//   7. Dynamic
//   8. Single-threaded
//   9. Non-blocking event-loop

// scop chaining

/*
const calcAge = brithYear => {
  // function scope
  const age = 2022 - brithYear;
  console.log(firstName); // valid

  const printAge = () => {
    // function scope
    const output = `${firstName}, you are ${age}, born in ${brithYear}`;
    console.log(output);

    if (age >= 18) {
      // block scope
      // var is beyond block scope
      var cool = true;
      const str = `You are adult( ${age} )`;
      console.log(str);

      function add(a, b) {
        console.log(a + b);
      }
    }
    // console.log(str); can't acess str variable
    console.log(cool); //valid
    // add(7, 8); // depands on "use strict"
  };

  printAge(); // valid
  //   console.log(output); can't acess ourtput variable

  return age;
};

// calcAge(2002); // will produce error

// global variable
const firstName = 'Suman';

calcAge(2002);
// console.log(age);// can't acess age variable
// printAge(); // can't acess printAge() function
*/

/*
//Temporal Dead zone

console.log(me); // undefined
// console.log(job);// can't access job before initialiazition
// console.log(year); // can't access year before initialiazition

var me = 'Jonas';
let job = 'Student';
const year = 20;

// invoking
console.log(addD(2, 3));
// console.log(addE(2, 3)); can't access addE before initialiazition


// console.log(addA(2, 3));
// initally var is undefined .
// and if we call addA before declearition
// it will not act as a function expression.
// insted it will act as a variale
// so it will produce error: addA is not a function



// function declearition
function addD(a, b) {
  return a + b;
}

// function expression
const addE = function add(a, b) {
  return a + b;
};

// using var
var addA = (a, b) => a + b;

var x = 1; // create a window instence
const y = 1;
let z = 1;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


*/

//This keyword

console.log(this);
// this keyword will show window object in global scope

function calcAge(brithYear) {
  // this keyword will show undefined in function decleartion
  // * use strict
  console.log(this);
}
const calcAgeE = function (brithYear) {
  // this keyword will show undefined in function decleartion
  // * use strict
  console.log(this);
};
const calcAgeA = brithYear => {
  // tarrow function use this keyword of parent scope

  // * use strict
  console.log(this);
};

calcAge(2002);
calcAgeE(2002);
calcAgeA(2002);

const Suman = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
// show the parent age
Suman.calcAge();

const jhon = {
  year: 2000,
};
// method borrowing
jhon.calcAge = Suman.calcAge;
jhon.calcAge();

const f = Suman.calcAge;
