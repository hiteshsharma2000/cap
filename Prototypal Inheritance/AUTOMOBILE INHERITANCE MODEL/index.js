
let myform=document.querySelector("form")
  function vehicle(make,model,year,color){
this.make=make;
this.model=model;
this.year=year;
this.color=color;

  }
  vehicle.prototype.start=function(){
    console.log(`this vehicle is made by ${this.make} and model is ${this.model} `)
  }
  vehicle.prototype.stop=function(){
    
    console.log(`this vehicle is made by ${this.make} and model is ${this.model} `)
  }
  vehicle.prototype.coll=function(){
    
    console.log(`this vehicle is made by ${this.make} and model is ${this.model} contain ${this.color}color `)
  }

  function car(make,model,year,color,doors){
    vehicle.call(this,make,model,year,color);
    this.doors=doors
  }

  car.prototype=Object.create(vehicle.prototype)
  
  
  car.prototype.drive = function () {
        console.log(`Driving the ${this.year} ${this.make} ${this.model} with ${this.doors}  doors.`);
      };
  
myform.addEventListener("submit",function(e){
  e.preventDefault()
  let making=document.getElementById("make").value;
  let modelof=document.getElementById("model").value;
  let yr=document.getElementById("year").value;
 let col=document.getElementById("color").value;
  const a = new car(making,modelof,yr,col,4)
  
  console.log(a)
  a.start();
  a.drive();
  a.coll();

})
 

  

  

  