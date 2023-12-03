var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.querySelector(".img2").setAttribute("src", randomDiceImage2);
