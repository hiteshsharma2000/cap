function author(name,dob,nation){
    this.name=name;
    this.dob=dob;
    this.nation=nation;
}
function book(bookname,date,author2,price){
    this.bookname=bookname;
    this.date=date;
    this.author2=author2;
    this.price=price;

}
let myauthor=document.querySelector("#author");
let alldata=document.querySelector("#all")

let data=[];
let dd=[];
myauthor.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("authorname").value;
    let dob=document.getElementById("dob").value;
    let nation=document.getElementById("nation").value;

    let author1= new author(name,dob,nation);

    data.push(author1);
 
    

myauthor.reset()
})


alldata.addEventListener("submit",function(e){
    e.preventDefault();

    let bookname=document.getElementById("bookname").value;
    let bookdate=document.getElementById("date").value;
    let  val=document.getElementById("price").value;

    let final=new book(bookname,bookdate,data[0],val);
data=[];
    console.log(final)
  
    // let m=document.createElement(h3).value;
  

  let v=document.getElementById("mg");
  v.innerText=bookname;
  let b=document.getElementById("n");
  let x=document.getElementById("x");
  let publish=document.getElementById("pb");
  
  x.innerText=val;
  publish.innerText=bookdate
})