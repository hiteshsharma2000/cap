document.querySelector(".order-btn").addEventListener("click",()=>{
    setTimeout(function(){

        new Promise(function(resolve,reject){
            document.getElementById("hidden").style.display="block";
            document.getElementById("order-number").innerText=Math.floor(1000 + Math.random()*9000 )
        }).then(res =>{
            console.log("promise resolved");
        }).catch(res=>{
          console.error("error please check the code")
        })
    },(Math.random()*1500))
})
