let slides=document.querySelectorAll("#main img")
let slideindex=0; 
let set;
function showslide(ele){
    slides.forEach((index,i)=>{
        if(i===ele){
       index.style.display='block';
        }else{
            index.style.display='none';
        }
    })
}
showslide(slideindex)

function startshow(){
     set=setInterval(()=>{
        slideindex=(slideindex+1)%slides.length;
        showslide(slideindex)
    },1000)
}

function stop(){
    clearInterval(set)
}

function start(){
    if(set){
        stop();
        set=null;
    }else{
    startshow()
    }
}
function next(){
    stop();
    slideindex=(slideindex+1)%slides.length;
    showslide(slideindex)
}
function prev(){
    stop();
    slideindex=(slideindex-1+slides.length)%slides.length;
    showslide(slideindex)
}