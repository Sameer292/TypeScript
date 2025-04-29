const addUs = (a: number, b: number): number => {
    return a + b
}

const hello = (name: string): string => {
    return `Hello, ${name}`
}

//void: for functions that don't return anything
function sayMyname(): void {
    console.log('Heisenberg');

}
// //Never: Used for functions that never return anything
// //Some functions like the ones who only throw error or which only have an infinite loop. They never return. So for them never is used. A function with return never MUST not have a reachable point
const ThrowError = (msg: string): never => {
    throw new Error(msg)
    
}

ThrowError('Noooo')

const infiniteloop = ():never => {
    while(true) { }
}


console.log(addUs(5, 6));
console.log(hello('shreeya'))
sayMyname()