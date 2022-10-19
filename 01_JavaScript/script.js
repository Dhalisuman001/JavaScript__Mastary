'use strict';

/*
// function

// function defination
function logger(){ 
    
    console.log("My name is Suman");
}

// calling // running / invoking function
logger();

//function with parameters
function fruitProcessor(appels,oranges) {
    // console.log(appels,oranges);
    const juice = `Juice with ${appels} apples and ${oranges} oranges`;

    //returnig to the calling 
    return juice;
}

// storing the data from returning from function
const juice = fruitProcessor(8,7);
console.log(juice);
console.log(fruitProcessor(2,4));

*/

//function declearition
//we can call function before declearation
function calAge1(brithYear) {
    return 2022 - brithYear;
}
const age1 = calAge1(2002);



//function expression
//we can't call function before expression
const calAge2 = function (brithYear) {  //anonaymys function
    return 2022 - brithYear; 
}
const age2 = calAge2(2020);

console.log(age1);
console.log(age2);