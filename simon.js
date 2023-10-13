let gameseq =[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","puple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game Started");
        started=true;
        levelup();
    }
});
    function btnflash(btn){
        btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},1000);
    }

function levelup(){
    userseq=[];
    level++;
    h2.innerText= 'Level ' + level;
    let randIdx=Math.floor(Math.random()*3);
console.dir(randIdx);
let randColor=btns[randIdx];
gameseq.push(randColor);
console.log(gameseq);

let randbtn=document.querySelector(`.${randColor}`);

btnflash(randbtn);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function btnPress(){
    console.log(this);
    let btn=this;
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
    userflash(btn);
}
function checkAns(idx){
   
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
       }
    } else
    {
        h2.innerHTML=`Game Over! Your Score was<b> ${level} </b> <br> Press Any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";},150
        );
        reset();
    }
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
        
    }, 250);

}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}