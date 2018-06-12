//RPG Game

$(document).ready (function () {

    //Array of characters

    let characters = {
        'goku' : {
            name : 'goku',
            power : 10000,
            health: 300000,
            image: "assets/images/goku.png",
        },
        'piccolo' : {
            name : 'piccolo',
            power : 8000,
            health : 250000,
            image: "assets/images/piccolo.png",
        },
        'frieza' : {
            name : 'frieza',
            power : 12000,
            health : 500000,
            image: "assets/images/piccolo.png",
        },
        'cell' : {
            name : 'cell',
            power : 10000,
            health : 400000,
            image: "assets/images/cell.png",
        }
    }

    var selectedCharacter; //character selected by player
    var computerCharacter; //character selected by computer
    var enemiesRemaining = []; //Array of enemies not initially selected
    var indexSelChar; //Why this var?
    var playerResult; //var for result?
    var killCount = 0; //Set kill count to 0
    var turnCounter = 1; //Why set this to 1?
    
    var displayCharacter = function(character, displayArea, makeChar) {
        //character: object, displayArea: class/id, makeChar: string
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.image);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(displayArea).append(charDiv);
        if(makeChar == 'enemy') {
            $(charDiv).addClass('enemy');
        } else if (makeChar == 'defender') {
            computerCharacter = character;
            $(charDiv).addClass('target-enemy');
        }
    };

});