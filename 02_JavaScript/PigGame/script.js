'use strict';

//selecting element
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');

const newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');

// storeing score
let score,currentScore ,activePlayer ,isPlaying ;

// initial state
const initialState = () =>{  
    // storeing score
     score= [0,0]
     currentScore = 0;
     activePlayer = 0;
     isPlaying = true;
     dice.classList.add('hidden');

    // initialize score
    score0.textContent = 0 ;
    score1.textContent = 0 ;
    current0.textContent=currentScore;
    current1.textContent=currentScore;
    
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    
}
initialState();


const switchingPlayer = () =>{
    // switch next player
    currentScore = 0;
       
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer= activePlayer === 0 ? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');


}


// button rolling
rollbtn.addEventListener('click',()=>{
    if (isPlaying) {
        
    
    // genarate random dice
    const random = Math.trunc(Math.random() * 6)+1;
    console.log(random);

    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${random}.png`;


    //condition
    if (random !== 1) {
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        // switch next player
        switchingPlayer();
    }
}
});



// collect points
    holdbtn.addEventListener('click',()=>{
        if (isPlaying) {
            
        
          // add score 
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // win or switch
        if (score[activePlayer] >= 20) {
            isPlaying = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove
            ('player--active')
            
        }else{
            switchingPlayer();
        }      

    } 
        
    });
    
newbtn.addEventListener('click',initialState);




