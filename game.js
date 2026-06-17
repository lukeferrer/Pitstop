const playBtn=
document.getElementById("playBtn");

const game=
document.getElementById("game");

const menu=
document.getElementById("menu");

const car=
document.getElementById("car");

let startTime;
let timerInterval;
let changedWheels=0;

playBtn.onclick=()=>{

menu.style.display="none";

game.style.display="block";

enterPit();

};

function enterPit(){

let pos=
window.innerWidth+400;

const stopPos=
window.innerWidth/2-
car.offsetWidth/2;

const anim=
setInterval(()=>{

pos-=8;

car.style.left=
pos+"px";

if(pos<=stopPos){

clearInterval(anim);

showWheels();

startTimer();

}

},16);

}

function startTimer(){

startTime=
Date.now();

timerInterval=
setInterval(()=>{

timer.innerText=

((Date.now()-startTime)/1000)

.toFixed(2);

},10);

}

document
.querySelectorAll(".wheel")
.forEach(wheel=>{

wheel.onclick=()=>{

if(
wheel.classList.contains("done")
)return;

wheel.classList.add("done");

changedWheels++;

if(changedWheels===4){

finishPit();

}

};

});

function finishPit(){

clearInterval(timerInterval);

let speed=6;

let pos=
parseInt(car.style.left);

const exit=
setInterval(()=>{

speed+=0.4;

pos-=speed;

car.style.left=
pos+"px";

if(pos<-1000){

clearInterval(exit);

showResult();

}

},16);

}

function showResult(){

result.style.display=
"flex";

game.style.display=
"none";

const final=

((Date.now()-startTime)/1000)

.toFixed(2);

finalTime.innerText=
"Temps: "+final;

}