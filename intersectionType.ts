type person = {
    name: string,
    age: number,
    address: string,
    email:string
}

type worker = {
    job:string,
    salary:number,
    experience:number
}


type employee = person & worker

const emp:employee={
    name:'Sameer Paudel',
    address:'Bagmati-1 Milanchowk',
    age:21,
    email:'Paudelsameer888@gmail.com',
    job:'Software engineer',
    salary: 100000,
    experience:12
}


console.log(emp);
