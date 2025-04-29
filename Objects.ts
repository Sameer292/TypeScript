
const person: { firstName: string; lastName: string, age: number, address: string, dob: { month: number, day: number, year: number } } = {
    firstName: 'Sameer',
    lastName: 'Paudel',
    age: 21,
    address: 'Bagmati-1, Milanchowk',
    dob: {
        month: 12,
        day: 20,
        year: 2003
    }
}

// console.log(person);

///////////////////////////////////////////////////////////////////////////////////////////////////////////


//Type alias
type Person = {
    firstName: string,
    lastName: string, //Either , or ;
    readonly age: number; // makes the value unchangable
    address: string;
    dob?: { month: number; day: number; year: number };
}
// Sameer.age = 22 won't work because age is defined as readonly

const Sameer: Person = {
    firstName: "Sameer",
    lastName: "Paudel",
    age: 21,
    address: "Bagmati-1, Milanchowk",
};


console.log(Sameer.age);
