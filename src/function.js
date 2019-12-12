const cards = document.querySelectorAll('.memBlock');

let flippedCard = false;
let lockBoard = false; //locks boards incase there is no match
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return; 
  if (this === firstCard) return; 

  this.classList.add('flip');

  if (!flippedCard) {
    //first time player has clicked a card
    flippedCard = true;
    firstCard = this;

    return;
  }
 // player clicks second card
  secondCard = this;
  checkForMatch();

}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 //checks if cards macth and its a match
  isMatch ? disableCards() : unflipCards(); //ternary operator
 
}

function disableCards() {
  //disable event listener if card matches
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true; //unlocks board after cards have been flipped

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
//not a match sets timeout to flip back
    resetBoard();
  }, 500);
}

function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  //if card is clicked twice, it doesnt recognise the second click
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12); //generate random number
    card.style.order = randomPos;
  });
})(); //extra pair of () to make it immediately invoked function expression 
//it will be invoked immediately after its definition
cards.forEach(card => card.addEventListener('click', flipCard));

