'use strict';

const diceFace1 = document.createElement('img');
diceFace1.src = './dice-1.png'

const giveDiceFace = (imgUrl) =>{
    
} 
const generateDiceNumber = () =>{
    return Math.ceil(Math.random() * (6 - 1) + 1);
}

const diceRollButton= () => {
    const diceRoll = generateDiceNumber();
    
}