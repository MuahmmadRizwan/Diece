let button = document.getElementById("rol");
button.addEventListener("click", function(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage2);
let h1 = document.querySelector("h1");
var rizo = localStorage.getItem("value");
var rizo1 = localStorage.getItem("value1");
if (randomNumber1 > randomNumber2) {
  document.getElementById("main").innerHTML= `🚩 ${rizo} Wins 🎉`;
} else if (randomNumber2 > randomNumber1) {
    document.getElementById("main").innerHTML= `🚩 ${rizo1} Wins 🎉`;
} else {
  h1.innerHTML = "Draw!";
}
});
let but2 = document.getElementById("info");
but2.addEventListener("click", function(){
    info1 = prompt("Enter Player 1 Name");
    info2 = prompt("Enter Player 2 Name");
 localStorage.setItem( "value" ,info1 )
 localStorage.setItem( "value1" ,info2 )
document.getElementById("pla1").innerHTML= info1;
document.getElementById("pla2").innerHTML= info2;


});

