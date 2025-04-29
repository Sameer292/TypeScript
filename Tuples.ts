//Fixed number of sprcific types of elements
let myContact: [string, number] 
myContact = ['paudelsameer888@gmail.com',9869899936] //Valid
// myContact = [9869899936,'paudelsameer888@gmail.com'] //Invalid

// myContact = ['paudelsameer888@gmail.com',9869899936, 'Bagmati-1, Milanchowk'] //Invalid


//Destructuring Tuples

let [email,phone] = myContact

console.log(email);
console.log(phone );

