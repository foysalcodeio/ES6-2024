class vehicle{
    constructor(param1, param2){
        this.color = param1;
        this.passenger = param2;
    }
    chooseColor(){
        console.log(this.color)
    }
}

let obj1 = new vehicle("red", 30);
let obj2 = new vehicle("green", 25);

console.log(obj1)
console.log(obj2)

obj1.chooseColor()