function bank(accountnum,name,type,balance,isactive){
    this.accountnum=accountnum;
    this.name=name;
    this.type= type;
    this.balance=balance;
    this.isactive=isactive;

    this.deposit=function(amt){
        this.balance+=amt;
        console.log(`deposit succesfull and you balance is ${this.balance}`)
    }
    this.withdraw=function(amt){
        if(this.balance>amt){
            this.withdraw-=amt;
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

    console.log(account1.balance)
})

