// const  printNum = (a:number, b:number):[number,number] =>{
// return [a,b]
// }

// const printString = (a:string, b:string):[string,string] => {
//     return [a,b]
// }

// const printBool = (a:boolean,b:boolean):[boolean,boolean]=>{
//     return [a,b]
// }

// const num = printNum(1,2)
// const str = printString('sam','shree')
// const bool = printBool(true,false)

// console.log(num);
// console.log(str);
// console.log(bool);

//---------------------------------------------------------------------------------------------------------------------


// function printVal<t>(a:t,b:t):[t,t]{
//     return [a,b]
// }

// function printTwoDataTypes<t,u>(a:t,b:u):[t,u]{
//     return [a,b];
// }
// function printThreeDataTypes<s,t,u>(a:s,b:t,c:u):[s,t,u]{
//     return [a,b,c];
// }


// const num = printVal<number>(1,2)
// const str = printVal<string>('sam','shree')
// const bool = printVal<boolean>(true,false)

// const numStr = printTwoDataTypes<number,string>(12,'Sameer')
// const numStrBool = printThreeDataTypes<number,string,boolean>(12,'Sameer',true)

// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(numStr);
// console.log(numStrBool);



//----------------------------------------------------------------------------

// interface car {
//     name:string,
//     color:string,
//     brand:string,
//     price:number
// }

// function gimmeCar<T extends {name:string} >(obj:T):string{

// return obj.name

// }


// const myCar = gimmeCar<car>({name:"rollsroyce",color:"green",brand:"Royces",price:1200000})
// console.log(myCar);

// --------------------------------------------------------------------


function gettingRandomkeyValuePair<T>(obj: { [key: string]: T }): {
    key: string, value: T
} {
    const keys: Array<string> = Object.keys(obj)
    const randKey: string = keys[Math.floor(Math.random() * keys.length)]
    const randVal: T = obj[randKey]
    return { key: randKey, value: randVal }
}

const alphabets = {
    a:'apple',
    b:'ball',
    c:'cat',
    d:'dog'
}


console.log(gettingRandomkeyValuePair(alphabets))