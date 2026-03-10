var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;
var imgs = document.querySelectorAll("img");

if (rand1 === 1){
    imgs[0].setAttribute("src","./images/dice1.png");
}else if (rand1 === 2){
    imgs[0].setAttribute("src","./images/dice2.png");
}else if (rand1 === 3){
    imgs[0].setAttribute("src","./images/dice3.png");
}else if (rand1 === 4){
    imgs[0].setAttribute("src","./images/dice4.png");
}else if (rand1 === 5){
    imgs[0].setAttribute("src","./images/dice5.png");
}else{
    imgs[0].setAttribute("src","./images/dice6.png");
}

if (rand2 === 1){
    imgs[1].setAttribute("src","./images/dice1.png");
}else if (rand2 === 2){
    imgs[1].setAttribute("src","./images/dice2.png");
}else if (rand2 === 3){
    imgs[1].setAttribute("src","./images/dice3.png");
}else if (rand2 === 4){
    imgs[1].setAttribute("src","./images/dice4.png");
}else if (rand2 === 5){
    imgs[1].setAttribute("src","./images/dice5.png");
}else{
    imgs[1].setAttribute("src","./images/dice6.png");
}

if (rand1 === rand2){
    document.querySelector("h1").textContent = "Draw!"
}else if (rand1 > rand2){
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩"
}else{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}