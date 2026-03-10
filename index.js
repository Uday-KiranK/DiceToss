var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;
var imgs = document.querySelectorAll("img");
var img0 = "./images/dice" + rand1 + ".png";
var img1 = "./images/dice" + rand2 + ".png";
imgs[0].setAttribute("src",img0);
imgs[1].setAttribute("src",img1);

if (rand1 === rand2){
    document.querySelector("h1").textContent = "Draw!";
    document.querySelector(".p1").textContent = "Player 1 🥇";
    document.querySelector(".p2").textContent = "Player 2 🥇";
}else if (rand1 > rand2){
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
    document.querySelector(".p1").textContent = "Player 1 🥇";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    document.querySelector(".p2").textContent = "Player 2 🥇";
}