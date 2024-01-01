let numbers = [1,2,3,4,5,6]
let squares = numbers.map(function(item){
    return item*item
})

console.log(squares)

//short cut arrow function
let cubes = numbers.map( (item)=> {
    return item ** 3;
})

console.log(cubes)