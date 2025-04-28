type Person = {
    name: string,
    age?: number
};
const person : Person = {
    name: 'Sameer',
    age: 23
};

console.log(person.name);
console.log(person.age)
