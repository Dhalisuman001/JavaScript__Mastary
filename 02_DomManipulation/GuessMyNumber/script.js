'use strict';

// document.querySelector('.message').textContent = "Correct Number 🥳";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);


// genrating random number
let getSecret = Math.trunc(Math.random()*20) + 1;
// score
let score = 20;
// console.log(getSecret);

let heighScore = 0;

// game reset functionility
document.querySelector('.again').addEventListener('click',()=>{
   getSecret = Math.trunc(Math.random()*20) + 1;
   // console.log(getSecret);
   score = 20;
   document.querySelector('.guess').value = "";
   document.querySelector('.number').textContent = "?";
   document.querySelector('.message').textContent = "Start guessing...";
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').style.width = "15rem";  
   document.body.style.backgroundColor = "#222";
   
})




// handeling event
document.querySelector('.check').addEventListener('click',()=>{
   const guess = Number(document.querySelector('.guess').value);
   // console.log(guess, typeof guess);


   // if there is no input
   if (!guess) {
    document.querySelector('.message').textContent = "⛔ No number!";
   }

   // if input  matches
   else if (getSecret === guess) {
      document.querySelector('.message').textContent = "Correct Number 🥳";
      document.body.style.backgroundColor = "green";
      document.querySelector('.number').textContent = getSecret;
      document.querySelector('.number').style.width = "30rem";
      if (score>= heighScore) {
         heighScore = score;
      }
      document.querySelector('.highscore').textContent = heighScore;
   }

   // if guess is higher than actuall number
   else if (getSecret !== guess) {
      // you have 5 guess's
      if (score > 5) {
         
         document.querySelector('.message').textContent = guess >getSecret ?  "Too high!🙁" : "Too low!🙁" ;
         score-=4;
         document.querySelector('.score').textContent = score;
      }else{
         // else you lose
         document.querySelector('.message').textContent = "You loss the game! 😭";
         document.querySelector('.score').textContent = 0;
         document.body.style.backgroundColor = "red";
      }


   }


})

