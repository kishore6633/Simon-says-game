 let gameSeq=[];
 let userSeq=[];
 let btns=["yellow","red","purple","green"];
 let started=false;
 let level=0;
 let h2=document.querySelector("h2");
 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelUp();
    }
 });
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
 }
 function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
   btn.classList.remove("userflash");
},150)
 }
 function levelUp(){
   userSeq=[];
    level++;
h2.innerText = `level ${level}`;
let randIdx=Math.ceil(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
 }
 function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,500);
     }
   }else{
      h2.innerHTML=`game over! your sore is ${level} press any key to restart the game`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
   }
 }
 function btnPress(){
let btn=this;
userFlash(btn);
userColor=btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
 }
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
 }
