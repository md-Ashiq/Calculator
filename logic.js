let buttons=document.querySelectorAll("button"),
input = document.getElementById("screen"),
screenvalue="";

for (item of buttons) {
    item.addEventListener("click",(e)=>{
      
buttonData=e.target.innerText;
if (buttonData=="X") {
    buttonData="*";
    screenvalue += buttonData; 
    input.value = screenvalue;   
}
else if (buttonData =="="){
    input.value=eval(screenvalue);
     }
else if (buttonData=="C"){
    screenvalue="";
    input.value = screenvalue;
     }
else{
     screenvalue+= buttonData ; 
    input.value= screenvalue; 
     }  
    }) 
}

/* +++++++++++++random color generation================ */
let randomColor= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let bg=document.querySelector(".child");
let hash="#";
bg.addEventListener("load",changeColor());
function changeColor() {
    for (let i= 0; i<6;i++) {
        random=Math.floor(Math.random()*randomColor.length);
        hash+=randomColor[random];}
    bg.style.backgroundColor=hash;
    
}
