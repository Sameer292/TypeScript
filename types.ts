
// Basic Types: types are explicitly declared
let myName: string = 'Sameer Paudel'
//myName = 22; ERRORRR
let age: number = 22
let isCool: boolean = true

console.log(myName)
console.log(age)
console.log(isCool)


//Inference: types are inferred from the data
let name1 = 'Sameer'
//name1 = 22; ERRORR
let age1 = 22
let isCool1 = true

console.log(name1)
console.log(age1)
console.log(isCool)


//Any type: Any type of data can be held in the variable
let name2: any = 'Sameer'
name2 = 33 // works. But should be used only when absoloutely necessary
let age2 : any = 21
age2 = 'twentyone'

console.log(name2)
console.log(age2)
