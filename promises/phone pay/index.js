let btn=document.querySelector("#btn")

btn.addEventListener("click",()=>{
    setTimeout(()=>{
        new Promise((approve,reject)=>{ let amt=document.getElementById("amount").value;
        let rst=document.getElementById("result");
    
        rst.textContent=`your ${amt} is  succesfully transfer`;
        document.getElementById("hidden").style.display="block";
        })
        .then(res =>{
            console.log("promise resolved");
        }).catch(res=>{
          console.error("error please check the code")
        })
       
  },(Math.random()*1500))
    
})