class Vehicle{
    constructor(param1, param2){
        this.color = param1;
        this.passenger = param2;
    }
    chooseColor(){
        console.log(this.color)
    }
}

//inheritance
class Car extends Vehicle{
    constructor(numWheel, pass, color){
        super(color, pass); //super keyword use for copy from main function
        this.wheel = numWheel
    }
}

let obj1 = new Car(4, "karim", "blue");
console.log(obj1)
