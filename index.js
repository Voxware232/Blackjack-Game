let cards=[]
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

let player = {
  name:'Jan',
  funds:100
}

playerEl.textContent = player.name + " :$" + player.funds;
function getRandomCard(){
  let randomCard = Math.floor((Math.random()*13)+1)
  if ((randomCard === 1)) {
    return 11;
  } else if ((randomCard > 10)) {
    return 10;
  }
  else{
    return randomCard;
  }
  
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: " ;

  for(let i = 0 ; i<cards.length; i++)
  {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message;
}
function newCard() {
  if(isAlive === true && hasBlackJack === false)
  {
    
    let newCard = getRandomCard();
    sum += newCard;
    // Push new card to array
    cards.push(newCard);
    renderGame();
  }
}
