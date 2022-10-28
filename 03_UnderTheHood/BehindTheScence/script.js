// 'use strict';

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
