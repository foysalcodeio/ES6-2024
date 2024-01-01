
function show(a, b, ...numbers){ // a, b is cancel
    let sum = 0;
    for (let i of numbers){
        sum+=i;
    }
    console.log("sum = "+sum)
}
show(10,20,30,10)