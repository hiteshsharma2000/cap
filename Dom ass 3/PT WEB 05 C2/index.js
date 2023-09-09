// fill in javascript code here
let myform=document.querySelector('form');


myform.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let id=document.getElementById("docID").value;
    let department=document.getElementById("dept").value;
    let exper=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;
    let tbody=document.querySelector("tbody");

let role="";
    if(exper>5){
        role="senior";    
    }
    else if(exper>=2 && exper<=5){
        role="junior";
        
    }else{
        role="trainee";
    }

   let tr=document.createElement("tr");
   
   let data=[name,id,department,exper,email,mobile,role];
   data.forEach((e)=>{
    let td=document.createElement("td");
    td.innerText=e;
    tr.appendChild(td)
})
tbody.appendChild(tr)

let deleter=document.createElement("td");
let deletebutton=document.createElement("button");

deletebutton.innerText=" delete";
deleter.appendChild(deletebutton);
tr.appendChild(deleter);
deletebutton.addEventListener("click",function(){
    tbody.removeChild(tr)
})

   


})


