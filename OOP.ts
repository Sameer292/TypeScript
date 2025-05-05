type AnimalType = {
    species: string
    age: number
    noOfLegs: number
    color: string
}

class Animal {
    protected species:string
    protected age: number
    protected noOfLegs: number
    protected color: string

    constructor(animal:AnimalType){
        this.species = animal.species
        this.age = animal.age
        this.color = animal.color
        this.noOfLegs = animal.noOfLegs
    }

}

class cat extends Animal {

    private breed:string
    private name:string
    private ownersName:string

    public showDetails():void {
        console.log(`${this.ownersName} owns a ${this.color} ${this.breed} ${this.species} named ${this.name}. ${this.name} is ${this.age} years old and has ${this.noOfLegs} legs`);
    }

    constructor(species:string, name:string, age:number,breed:string, noOfLegs:number, color:string, owner:string){
        super({species,age,noOfLegs,color})
        this.breed = breed
        this.name = name
        this.ownersName = owner
    }
}

const animal1 = new cat("Cat",'Loki',3,'Persian',4,'White','Sameer Paudel')
const animal2 = new cat("Dog",'Max',2,'Labrador',4,'Black','Sameer Paudel')
animal1.showDetails()
animal2.showDetails()