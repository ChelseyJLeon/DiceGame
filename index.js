//Create Player 1's random dice throw
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");


//Create Player 2's random dice throw
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");


//Change the Title to show the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁"
}
else {
  document.querySelector("h1").innerHTML = "🏁 Draw! 🏁"
}
