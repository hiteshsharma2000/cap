const submit = document.querySelector("form");
const input=document.getElementById("task");
const prio=document.getElementById("priority");
let tbody=document.querySelector("tbody");

let arr=[];

submit.addEventListener("submit",function(e)
{
    e.preventDefault();

    let data={
inp : input.value,
priority:prio.value
}
arr.push(data);
tbody.innerHTML=""; 
arr.map((ele)=>{

let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
console.log(ele.input);
td1.innerText=ele.inp;
td2.innerText=ele.priority;
tr.append(td1,td2)
tbody.append(tr)
})
})

