//Vehicle constructor function
function Vehicle(brand,speed,fuletype){
    this.brand = brand
    this.speed = speed
    this.fuletype=fuletype
}


Vehicle.prototype.accelerate=function(){
    this.speed++
}

Vehicle.prototype.break=function(){
    this.speed--
}

Vehicle.prototype.refuel=function(){
    console.log("vehicle is refueling.")
}
let car=new Vehicle("crysta",2000,100,"Diesel")
console.log(car.accelerate)


//  inherit car to vehicle

function Car(b,m,s,f,numberOfWheels){
    this.numberOfWheels=numberOfWheels
    Vehicle.call(this,b,m,s,f)
    
}

Car.prototype.honk=function(){
    console.log("honking sound.");

}


let car1=new Car("crysta",2000,100,"Diesel",4)
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
car1.accelerate()
 console.log(car1);






//inherit Airplane to vehicle

function Airplane(b,m,s,f,numberOfEngines ,hasLandingGear){
    this.numberOfEngines = numberOfEngines
    this.hasLandingGear = hasLandingGear
    Vehicle.call(this,b,m,s,f)
}


Airplane.prototype.takeOff=function(){
    console.log("airplane is taking off.");
}

let AirplaneObj= new Airplane("Embraer",2001,20000,"Diesel",4,2)

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

AirplaneObj.accelerate()
console.log(AirplaneObj);