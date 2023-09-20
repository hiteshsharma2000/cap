let dis=document.querySelector("#main");
let stopb=document.getElementById("stop");
let start=document.getElementById("start");
let resetb=document.getElementById("reset");
 let inpm=document.getElementById("inpmin");
 let inps=document.getElementById("inpsec");
 
let timer=document.getElementById("timer")

let sec=0;
let min=0;

let timerid=null;

function starttime(){
  
  if(sec==0 && min==0){
    sec=inps.value;
    min=inpm.value;
  }   
  

  if(sec=="" || sec==null){
  min= min -1;
   sec=60;
   
  }

    sec--
    if(sec==0){
        sec=60;
        min--;
        if(min==0){
            
            sec=0;
        }
    }
    let secstr="";
    if(sec<10){
     secstr=`0${sec}`
    }else{
        secstr=sec;
    }
    timer.innerHTML=`${min} : ${secstr}`;
    
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
  timer.innerHTML="";

min=0;
sec=0;



})


