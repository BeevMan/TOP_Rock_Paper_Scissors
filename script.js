function computerPlay() {
    const zeroToThree = Math.floor(Math.random() * Math.floor(3));
    if ( zeroToThree === 0 ) {
        return "Rock"
    } else if ( zeroToThree === 1 ) {
        return "Paper"
    } else {
        return "Scissors"
    }
}


function oneRound( playerSelection ) {
    playerSelection = capitilize( playerSelection );
    const computerSelection = computerPlay();
    if ( computerSelection === playerSelection ) {
        return "Tie! Play another"
    }
    else if ( computerSelection === "Rock" ) {
        return ( playerSelection === "Paper" ? "Paper beats Rock, you win!!!" : "Rock beats Scissors, you lose :(" );
    } else if ( computerSelection === "Paper" ) {
        return ( playerSelection === "Scissors" ? "Scissors beats Paper, you win!!!" : "Paper beats Rock, you lose :(" );
    } else if ( computerSelection === "Scissors" ) {
        return ( playerSelection === "Rock" ? "Rock beats Scissors, you win!!!" : "Scissors beats Paper, you lose :(" );
    }
}


function capitilize (string){
    firstLetter = string.slice( 0, 1).toUpperCase();
    string = string.slice( 1 ).toLowerCase();
    return firstLetter + string
}


winCount = 0;
for (let i = 0; i < 5; i++) {

    const PLAYERCHOICE = window.prompt( "Rock, Paper or Scissors?" );
    const ROUND = oneRound( PLAYERCHOICE );
    if ( ROUND === "Scissors beats Paper, you win!!!" || ROUND === "Paper beats Rock, you win!!!" ) {
        console.log( ROUND );
        winCount++
    } else {
        console.log( ROUND )
    }
};
// console.log( "You've won "  )
