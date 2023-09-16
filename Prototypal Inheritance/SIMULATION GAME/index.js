// Basic Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = Number(speed) || 0;
    this.fuelType = fuelType;
  }
  
  // Add common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function (amount) {
    this.speed += Number(amount);
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function (amount) {
    this.speed -= Number(amount);
    console.log(`${this.brand} ${this.model} is braking.`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function that inherits from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  // Inherit methods from Vehicle's prototype
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Add a specific method for Car
  Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking. Honk honk!`);
  };
  
  // Airplane constructor function that inherits from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }

  Airplane.prototype = Object.create(Vehicle.prototype);
  
  // Add a specific method for Airplane
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
 

  // Create instances of Car and Airplane
  let btn=document.querySelector("#lambo");
  btn.addEventListener("click",function(e){
    e.preventDefault()

    let company=document.getElementById("company").value;
    let modelof=document.getElementById("model").value;
    let speed=document.getElementById("speed").value;
   let fuel=document.getElementById("fuel").value;
    let myCar = new Car(company,modelof,speed,fuel, 4);
    console.log(myCar)
    myCar.accelerate(30);
  myCar.brake(10);
  myCar.honk();
  myCar.refuel();
  })

  let btn2=document.querySelector("#jet");

  btn2.addEventListener("click",function(e){
    e.preventDefault()
    let company2=document.getElementById("company2").value;
    let modelof2=document.getElementById("model2").value;
    let speed2=document.getElementById("speed2").value;
   let fuel2=document.getElementById("fuel2").value;
   let engine=document.getElementById("numberOfEngines").value;
  //  let gear=document.getElementById("hasLandingGear").value;
   const myAirplane = new Airplane(company2,modelof2,speed2,fuel2,engine ,true);
   console.log(myAirplane)
   myAirplane.accelerate(250);
 myAirplane.takeOff();
 myAirplane.refuel();

  })


 
  
  