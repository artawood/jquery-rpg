//This is to experiment on character selection

$(document).ready ( () => {
    let characters = {
        'goku' : {
            name : 'goku',
            power : 10000,
            health: 300000,
            image: "assets/images/goku-thumbnail.png",
        },
        'piccolo' : {
            name : 'piccolo',
            power : 8000,
            health : 250000,
            image: "assets/images/piccolo-thumbnail.png",
        },
        'frieza' : {
            name : 'frieza',
            power : 12000,
            health : 500000,
            image: "assets/images/frieza-thumbnail.png",
        },
        'cell' : {
            name : 'cell',
            power : 10000,
            health : 400000,
            image: "assets/images/cell-thumbnail.png",
        }
    }

    for (var key in characters) { //Define each 'characters' as keys
        if (characters.hasOwnProperty(key)) {
            var name = characters[key].name;
            var power = characters[key].power;
            var health = characters[key].health;
            var characterImage = characters[key].image;
            console.log(characterImage);
            for (let i = 0; i < characterImage.length; i++) {
                characterImages = characterImage[i];
                $('#characters').html("<img src='" + characterImages + "'>");    
            }
            
        }
    }

});  
