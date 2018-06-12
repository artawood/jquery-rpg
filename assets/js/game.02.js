//Convert js to jQuery

$(document).ready (() => {

    let player = {
        health : 100,
        power: 20,
        image: 'assets/images/goku.png',
    }
    
    let opponent = {
        health: 100,
        power: 20,
        image: 'assets/images/frieza.png',
    }
    
    //Global Variables
    var attackButton = $('#attack-button');
    var restartButton = $('#restart-button');
    restartButton.hide();
    var gameMessage = $('#game-message');

    const displayOpponent = $('#opponent');
    const displayPlayer = $('#player');
    const displayOpponentHealth = $('#opponent-health');
    const displayPlayerHealth = $('#player-health');

    var attack = $('#attack');
    
    $('#attack-button').on("click",() => {
        attack.html("<img class='kamehameha' src='assets/images/kamehameha.png'>");
        $('#blast')[0].play();
        let playerAttack = determineAttack(player.power);
        opponent.health -= playerAttack;
        displayOnScreen();

        if (isGameOver(opponent.health)){
            endGame("Player wins!");
            return;
        }

        attackButton = true;
        gameMessage.text("Your Opponent is about to strike");

        setTimeout(() => { 
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        displayOnScreen();
        attackButton = false;

        if (isGameOver(player.health)){
            endGame("Player loose!");
            return;
        }

    }, 500 );

    });

    const endGame = (message) => {
        gameMessage.text(message);
        $('#attack-button').hide(); //Temp fix. Browser thinks "hide()" is an undefined function
        $('#restart-button').show(); //Temp fix. Browser thinks "show()" is an undefined function
    }

    const determineAttack = (power) => {
        return Math.floor(Math.random() * power);
    }

    const isGameOver = (health) => {
        return health <= 0;
    }
    
    $('#restart-button').on("click",() => {
        player.health = 100;
        opponent.health = 100;
        gameMessage.text("");
        $('#attack-button').show();
        $('#restart-button').hide();
        attack.html("");
        displayOnScreen();
    })

    const displayOnScreen = () => {
        displayOpponent.html("<img class='character' src='" + opponent.image + "'>");
        displayPlayer.html("<img class='character' src='" + player.image + "'>");
        displayOpponentHealth.text(opponent.health);
        displayPlayerHealth.text(player.health);
    }

    displayOnScreen();

});

