function bank(accountnum,name,type,balance,isactive){
    this.accountnum=accountnum;
    this.name=name;
    this.type= type;
    this.balance=Number(balance);
    this.isactive=isactive;

    this.deposit=function(amt){
        this.balance+=Number(amt);
        console.log(`deposit succesfull and you balance is ${this.balance}`)
    }
    this.withdraw=function(amt){
        if(this.balance>amt){
            this.balance -=Number(amt);
            console.log(`withdraw succesfull and you balance is ${this.balance}`)
        }else{
            console.log(`insufficient balance`)
        }
    }

    this.checkbalance=function(){
        console.log(this.balance)
    }
    this.active=function(){
        if(this.balance>0){
            console.log(`active`)
        }else{
            console.log(`inactive`)
        }
    }
}
let no=document.getElementById("no")
let nam=document.getElementById("name");
let typ=document.getElementById("types");
let bal=document.getElementById("balance");
let myform=document.querySelector("form");

myform.addEventListener("submit",function(e){
    e.preventDefault();
    let account1= new bank(no.value,nam.value,typ.value,bal.value,true);
let amount=document.getElementById("depo").value;
let amount2=document.getElementById("with").value;
if(amount=="" && amount2==""){
    console.log(`your balance is ${account1.balance}`)
}
    if(amount!=""){
    account1.deposit(amount)
    }
    if(amount2!=""){
        account1.withdraw(amount2)
    }
   
})

