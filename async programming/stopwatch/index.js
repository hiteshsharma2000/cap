let dis=document.querySelector("#main");
let stopb=document.getElementById("stop");
let start=document.getElementById("start");
let resetb=document.getElementById("reset");

let sec=0;
let min=0;
let hrs=0;


let timerid=null;

function starttime(){
    sec++
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hrs++;
        }

    }
    let secstr="";
    if(sec<10){
        secstr=`0${sec}`;
    }else{
        secstr=sec;
    }
    let minstr="";
    if(min<10){
        minstr=`0${min}`;
    }else{
        minstr=min;
    }
    let hrsstr="";
    if(hrs<10){
        hrsstr=`0${hrs}`;
    }else{
        hrsstr=hrs;
    }
    dis.innerHTML=`${hrsstr} : ${minstr} : ${secstr}`
}
start.addEventListener("click",function(){
    if(timerid!==null){
        clearInterval(timerid)
    }
  timerid =  setInterval(starttime,1000);

})
 stopb.addEventListener("click",function(){
   clearInterval(timerid)

})
resetb.addEventListener("click",function(){
  clearInterval(timerid);
  dis.innerHTML=`00 : 00 : 00`;

min=0;
sec=0;
hrs=0;

})