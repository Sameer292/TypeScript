let password: string | number = 'thisisfreakingawesome'
password = 123



type loginwithemail = {
    email: string,
    password: string
}

type loginWithUserId = {
    userId: number,
    password: string
}

const login = (userCred: loginWithUserId | loginwithemail) => {

    console.log(userCred);    


}


// login({ userId:12345, password: 'whatthefuck' })
// login({email:'paudelsameer888@gmail.com', password:'whatthefuck'})
// login({email:'paudelsameer888@gmail.com', password:'whatthefuck',userId:123})






let array:(number|string)[] = [123,123,'sa']
console.log(array);
