//Understand Structure of the game with javascript first, using ECMA 6

// Define player and opponent using "let" instead of var
let player = {
    health: 100,
    power: 20,
}

let opponent = {
    health: 100,
    power: 20,
}

//Attack function; use const so attack variable cannot be reassigned
const attack = () => {
    let attackButton = document.getElementById('attack-button');
    let restartButton = document.getElementById('restart-button');
    let gameMessage = document.getElementById('game-message');
    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)){
        endGame("Player wins!");
        return;
    }

    //Use Boolean for attack button
    attackButton = true;
    gameMessage.innerText = "Your Opponent is about to strike";

    setTimeout(() => { // Create delay for opponent's turn to attack
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();
        attackButton = false;

        if (isGameOver(player.health)){
            endGame("Player loose!");
            return;
        }

    }, 500 );

}

const endGame = (message) => { //Cleaning up redundant code
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
}

const determineAttack = (power) => {
    return Math.floor(Math.random() * power);
}

const isGameOver = (health) => {
    return health <= 0;
}

const restart = () => {
    player.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-button').hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
}

const printToScreen = () => {
    document.getElementById('opponent-health').innerHTML = opponent.health;
    document.getElementById('player-health').innerHTML = player.health;
}


printToScreen();