const addUs = (a: number, b: number): number => {
    return a + b
}

const hello = (name: string): string => {
    return `Hello, ${name}`
}

//void: for functions that don't return anything
function sayMyname():void{
    console.log('Heisenberg');
    
}
//Never: 

console.log(addUs(5, 6));
console.log(hello('shreeya'))
sayMyname()