//constructor self method and class
// when create an object, constructor automatically call
// another function working same 
// this doesn't return data

// class myClass{
//     constructor(a, b){
//         console.log(a+b)
//     }
// }

// new myClass(10, 20);


class myClass{
    constructor(a, b){
        this.firstNum = a
        this.secondNum = b
    }
    add(){
        let result = this.firstNum+this.secondNum
        console.log(result)
    }
}

var obj = new myClass(10, 20);
obj.add()