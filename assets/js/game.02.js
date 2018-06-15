//Convert js to jQuery

$(document).ready (() => {

    let player = {
        name: "goku",
        health : 100,
        power: 20,
        image: 'assets/images/goku.png',
    }
    
    let opponent = {
        name: "frieza",
        health: 100,
        power: 20,
        image: 'assets/images/frieza.png',
    }

    //TODO: Display characters
        //Create an array for displaying characters
    //TODO: Player to select characters
        //If selected player's character == character in the array, pop()
    //TODO: Player to select opponent
        //If selected opponent's character == character in the array, pop()
        //If player's health < 0, game over
        //Else if opponent's health < 0, player selects next opponent
            //If character array = [], player wins the game
    
    //Global Variables
    var attackButton = $('#attack-button');
    var restartButton = $('#restart-button');
    restartButton.hide();
    var gameMessage = $('#game-message');

    const displayOpponent = $('#opponent');
    const displayPlayer = $('#player');
    const displayOpponentHealth = $('#opponent-health');
    const displayPlayerHealth = $('#player-health');

    let blast = new Audio('assets/sounds/attack-sounds/laser_cannon.mp3');
    let counterBlast = new Audio('assets/sounds/attack-sounds/ray_gun.mp3');

    var attack = $('#attack');
    
    $('#attack-button').on("click",() => {
        attack.html("<img class='kamehameha' src='assets/images/kamehameha.png'>");
        blast.play();
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
            attack.html("<img class='kamehameha-reverse' src='assets/images/kamehameha-reverse.png'>"); 
            counterBlast.play();
            let opponentAttack = determineAttack(opponent.power);
            player.health -= opponentAttack;
            displayOnScreen();
            attackButton = false;

            if (isGameOver(player.health)){
            endGame("Player loose!");
            return;
            }
    }, 1000);

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
        displayOpponent.html("<h3>" + opponent.name + "</h3>" + "<h4>Power: " + opponent.power + "</h4>" + "<img class='character' src='" + opponent.image + "'>");
        displayPlayer.html("<h3>" + player.name +  "</h3>" + "<h4>Power: " + player.power + "</h4>" +  "<img class='character' src='" + player.image + "'>");
        displayOpponentHealth.text(opponent.health);
        displayPlayerHealth.text(player.health);
        gameMessage.text("");
    }

    displayOnScreen();

});

