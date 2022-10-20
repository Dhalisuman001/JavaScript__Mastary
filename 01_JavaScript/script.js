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

/*

//function expression



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

*/


/*

//arrow function

const calAge3 =  birthYear => 2022 - birthYear; //for one parameter

const age3 = calAge3(2002);
console.log(age3);


const isElegable = (birthYear,name) =>{
    const age = 2022 - birthYear;
    let temp;
    if (age >= 18) {
       temp = "elegable";
    }else{
        temp = "not elegable";
    }


    return `${name} is ${temp}`;     
}


console.log(isElegable(2002,"Suman"));
console.log(isElegable(2012,"Jhon"));

*/

/*

// Coding challange --> 1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �



const calAgv = (n1,n2,n3) => (n1+n2+n3)/3;
const checkWinner = (avgDolphins ,avgKoalas) =>{
    if ( avgDolphins >= 2 * avgKoalas ) {
         console.log(`Dolphins win( ${avgDolphins} vs ${avgKoalas} )`);
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win( ${avgKoalas} vs ${avgDolphins} )`);
    }
    else{
        console.log(`Match drawn Dolphins ${avgDolphins} vs Koalas ${avgKoalas}`);
    }
}


// Test 1
const avgDolphins1 = calAgv(44,23,71);
const avgKoalas1 = calAgv(65,54,49);


checkWinner(avgDolphins1,avgKoalas1);



// Test 2
const avgDolphins2 = calAgv(85,54,41);
const avgKoalas2 = calAgv(23,34,27);


checkWinner(avgDolphins2,avgKoalas2);

*/

/*
// array


// why we need arry ?
const friend1 = 'Aryash';
const friend2 = 'Subhadip';
const friend3 = 'Subham';
const friend4 = 'Sayak';


// how to declear
// 1.
const friends = ['Ariysh','Subhodip','Subham','Sneha'];
// 2.
const birthYear = new Array(2002,2020,1991,2018);


console.log(friends);

// access array element
console.log(friends[0]);

//access array length
console.log(friends.length);

//access with expression
console.log(friends[friends.length-1]);

// array element is mutable
friends[3] = 'Sayak';
console.log(friends);


const fname = 'Suman';

//array's acceptd data type
const myData = [fname,'Dhali',2022-2002,'Student',friends];
console.log(myData);


//excercise
const calAge = function (brithYear) {  
    return 2022 - brithYear; 
}


const years = [2002,2020,1991,2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[2]);
const age4 = calAge(years[3]);


const ages = [age1,age2,age3,age4];
console.log(ages);


// array methods
const friends = ['Ariysh','Subhodip','Subham','Sneha'];


// add element
// add element in the end of the array
const size = friends.push('Sayak')// returns the newly forms arrays length
console.log(size); 
// console.log(friends);

// add element in the beginning of the array
 friends.unshift('Partha');
// console.log(friends);


//remove element
//remove element from end of the array
friends.pop();
const poped = friends.pop();
console.log("Pop out element is: ",poped);
console.log(friends);


//remove element from the begining of the array
friends.shift();
console.log(friends);


// Exists or not

// return index
console.log(friends.indexOf('Ariysh'));
// return -1 if not exist
console.log(friends.indexOf('Partha'));

// return true or false
console.log(friends.includes('Ariysh'));
console.log(friends.includes('Partha'));


// Excercise
if (friends.includes('Partha')) {
    console.log('You have friend called subhadip in your friend list');
}

*/