// Interfaces for class

interface Man {
    name: string,
    age: number,
    email: string,
    address: string,
    displaydetails: () => void;
}

class human implements Man {
    name = 'sameer'
    age = 21
    email = 'paudelsameer'
    address = 'fuck'

    displaydetails = (): void => {
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
        console.log(this.address);

    }

}
const man = new human()

// man.displaydetails()

interface Her {
    name: string,
    age: number,
    email: string,
    address: string,
    displaydetails: () => void;
}

const her: Her = {
    name: "Shreeya Chhatkuli",
    age: 21,
    email: "Shreeyaci@gmail.com",
    address: "Manas chowk, Hetauda-2, Makawanpur",
    displaydetails() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
        console.log(this.address);
    },
}

// console.log(her);
// her.displaydetails()




//Interfaces for functions


interface fn {
    (a: string, b: string): void
}


const showname: fn = (a, b)=>{
    console.log(a, b);

}

showname('shreeya', 'chhatkuli')