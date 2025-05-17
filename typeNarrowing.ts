// type myType = number | string


// function example(val:myType):void{

//     if(typeof val === 'string'){
//         console.log(val.toUpperCase());
//     }else{
//         console.log(val.toFixed(2));
//     }
        
// }

// example(10)
// example('sameer')


// ------------------------------------------------------------------------------------------------

// class Dog{

//     bark():void{
//         console.log('bark');
//     }

// }


// class Cat{

//     meow():void{
//         console.log('meow');
//     }
// }



// const sound = (animal:Dog|Cat):void =>{

//     if(animal instanceof Cat){
//         animal.meow()
//     }else{
//         animal.bark()
//     }

// }


// sound(new Dog())
// sound(new Cat())


// ------------------------------------------------------------------------------------------------


type man ={
    name:string,
    age:number,
    email:string,
    address:string
}


type manager = {
    department:string,
    salary:number,
    experience:number
}


const employee:man&manager ={
    name:'Sameer Paudel',
    address:'Bagmati-1 Milanchowk',
    age:21,
    email:'Paudelsameer888@gmail.com',
    department:'IT',
    salary:100000,
    experience:12
}



console.log(employee);