let wins = 0;
let losses = 0;
let ties = 0;
let elDisplayHeading = document.getElementsByTagName( "h1" );
elDisplayHeading = elDisplayHeading[0];

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
        return displayResult( "Tie! Play another round!" )
    }
    else if ( computerSelection === "Rock" ) {
        return ( playerSelection === "Paper" ? displayResult( "Paper beats Rock, you win!!!" ) : displayResult( "Rock beats Scissors, you lose :(" ) );
    } else if ( computerSelection === "Paper" ) {
        return ( playerSelection === "Scissors" ? displayResult( "Scissors beats Paper, you win!!!" ) : displayResult( "Paper beats Rock, you lose :(" ) );
    } else if ( computerSelection === "Scissors" ) {
        return ( playerSelection === "Rock" ? displayResult( "Rock beats Scissors, you win!!!" ) : displayResult( "Scissors beats Paper, you lose :(" ) );
    }
}


function displayResult( msg ){
    if ( msg.endsWith( "win!!!" ) ) {
        ++wins
    } else if ( msg.endsWith( ":(" ) ) {
        ++losses
    } else {
        ++ties 
    }
    if ( wins > 4 ) {
        // DISPLAY USER WON 5 GAMES
        elDisplayHeading.innerText = `You've won 5 games!  Out of ${wins + losses + ties}`;
        wins = 0;
        losses = 0;
        ties = 0;
    } else if ( losses > 4 ) {
        // DISPLAY USER HAS LOST 5 GAMES
        elDisplayHeading.innerText = `You've lost 5 games!  Out of ${wins + losses + ties}`;
        wins = 0;
        losses = 0;
        ties = 0;
    } else {
        // DISPLAY the current standings and the last rounds result
        elDisplayHeading.innerText = `${msg} \n Wins: ${wins}  Losses: ${losses}  Ties: ${ties}`;
    }
}


function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    // <h1> = "Pick a choice to start the game.";
    elDisplayHeading.innerText = "Pick a choice to start the game.";
}


function capitilize (string){
    firstLetter = string.slice( 0, 1).toUpperCase();
    string = string.slice( 1 ).toLowerCase();
    return firstLetter + string
}

const gameChoices = document.querySelectorAll("#game-choices button");

// used an anonymous function so I could pass in the buttons text as an argument
gameChoices.forEach( choice => choice.addEventListener( "click", () => { oneRound( choice.innerText ); }, false) );