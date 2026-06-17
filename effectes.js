function brakeSmoke(){

for(let i=0;i<5;i++){

const smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.left=
(window.innerWidth/2+i*20)+"px";

smoke.style.top=
(window.innerHeight/2+60)+"px";

game.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},800);

}

}