function showWheels(){

const rect=
car.getBoundingClientRect();

const positions=[

[rect.left+40, rect.top+30],

[rect.right-120, rect.top+30],

[rect.left+40, rect.bottom-110],

[rect.right-120, rect.bottom-110]

];

["w1","w2","w3","w4"]
.forEach((id,index)=>{

let wheel=
document.getElementById(id);

wheel.style.left=
positions[index][0]+"px";

wheel.style.top=
positions[index][1]+"px";

wheel.style.display="block";

});

}