function increment(num: number){
    return ++num;
}

function helloName(name:string){
    return "Hello " + name 
}

const double = (a:number, b:number)=>{
return a*b
}

const square = double(10,2)

console.log(square)
console.log(increment(9))
console.log(helloName('Sameer'))


//Default parameters
const add = (a:number, b:number=10) =>{
    return a+b
}

console.log(add(20))