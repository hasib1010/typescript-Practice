{
    // instence of gourd

    class Animal {
        name: string;
        specis: string;

        constructor(name: string, specis: string) {
            this.name = name;
            this.specis = specis;
        }
        makeSound() {
            console.log("sound making");

        }
    }
    class Dog extends Animal {
        constructor(name: string, specis: string) {
            super(name, specis)
        }
        makeBark() {
            console.log("Ghew Ghew");

        }
    }
    class Cat extends Animal {
        constructor(name: string, specis: string) {
            super(name, specis)
        }
        makeMeaw() {
            console.log("Meaw Meaw");
        }
    }
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }
    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        }
        else if (isCat(animal)) {
            animal.makeMeaw()
        }
        else {
            animal.makeSound()
        }
    }
    const dog = new Dog("DOG Saheb", "dog");
    const cat = new Cat("CAT Saheb", "Cat")
    // getAnimal(dog)
    // getAnimal(cat)

    getAnimal(dog)














}