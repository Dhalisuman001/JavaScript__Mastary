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

/*

//coding challange --> 2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) 

const bills = [125,555,44];
const tips = [];
const total = [];

const calTip = (bill) =>{
    let tip;
  if (bill >= 50 && bill <=300) {
     tip = bill * (20/100);
  }else{
    tip = bill * (15/100);
  }

  tips.push(tip);
  total.push(tip+bill);
}

calTip(bills[0]);
calTip(bills[1]);
calTip(bills[2]);


console.log(tips);
console.log(total);

*/


/*

//Object
const myData = {
    "fname":"Suman",
    "lname":"Dhali",
    "age":2022-2002,
    "job":"student",
    "friends":['Ariysh','Subhodip','Subham','Sneha'],
}

console.log(myData);
// dot notation
console.log(myData.lname);
// bracket notatioin
console.log(myData['lname']);

// we can create expression in bracket notation
const nameKey = 'name';
console.log(myData['f'+nameKey]);
console.log(myData['l'+nameKey]);

//not possible 
// console.log(myData.'l' + nameKey);


// const data = prompt("What you want to know ?");

// if (myData[data]) {
//     console.log(myData[data]);
// }else{
//     console.log('Wrong request');
// }


// add properties

myData.location = "Kolkata";
myData.website = "https://sumandhali.online";;


console.log(myData);

console.log(`${myData.fname} has ${myData.friends.length} friends, and best friend is called ${myData.friends[1]}`);


*/

/*
// Loop

// for loop
/// break, print until 10
for (let rep = 1; rep <= 100; rep++) {
    if(rep>=11) break;
     console.log(`Lifting weight repetition ${rep} 😎`);
    
}


const myData = [ "Suman",
"Dhali",
2022-2002,
"student",
['Ariysh','Subhodip','Subham','Sneha'],
true,]
   
const types = [];

for (let i = 0; i < myData.length; i++) {
    // only string will print
    if(typeof myData[i] !== 'string') continue;

    console.log(myData[i]); 
    types.push(typeof myData[i]);
    
}
console.log(types);





const myData = [ "Suman",
"Dhali",
2022-2002,
"student",
['Ariysh','Subhodip','Subham','Sneha'],
true,]
   

//loop
//  backwords
for (let i = myData.length -1; i >= 0; i--) {
    console.log(myData[i]); 
    
}

// while loop
let i = 0;
while (i<myData.length) {
    console.log(myData[i]);

    i++;
}

*/


/*

// Coding challange -->3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK 

const calcBMI = (mass, height) =>{
  const  BMI = mass /(height * height);
    return BMI;
}

const MarkData = {
    "fname":"Mark",
    "lname":"Miller",
    "height":1.69,
    "mass":78
}
const JhonData = {
    "fname":"Jhon",
    "lname":"Smith",
    "height":1.95,
    "mass":92
}

const jhonBmi = calcBMI(JhonData.mass,JhonData.height);
const markBmi = calcBMI(MarkData.mass,MarkData.height);


if (jhonBmi > markBmi) {
    console.log(`${JhonData.fname}'s BMI (${jhonBmi}) is higher than ${MarkData.fname}'s (${markBmi})!`);
}else{
    console.log(`${MarkData.fname}'s BMI (${markBmi}) is higher than ${JhonData.fname}'s (${jhonBmi})!`);
}


*/


/*

//Coding challange -->4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array


const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const totals = [];
const tips = [];


const calTip = (bills) =>{
    let tip;
    for (let i = 0; i < bills.length; i++) {
        
        if (bills[i] >= 50 && bills[i] <=300) {
            tip = bills[i] * (20/100);
         }else{
           tip = bills[i] * (15/100);
         }
       
         tips.push(tip);
         totals.push(tip+bills[i]);
        
    }
  
}
calTip(bills);
console.log(totals);
console.log(tips);

*/