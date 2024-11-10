{
    // OOP Class


    class animal {
        name: string;
        species: string;
        sounds: string

        constructor(name: string, species: string, sounds: string) {
            this.name = name;
            this.species = species
            this.sounds = sounds
        }
    }

    const cat = new animal("Bilai", "Cat", "Meao Maaaou")

    const kak2 = new animal("KAUWA KADER", "KALA KU", "KAAA KAAA")



    // parameter Property
    // Public
    class bird {
        constructor(public name: string, public color: string, public sound: string) {
        }
    }
    const kak = new bird("KAUWA KADER", "KALA KU", "KAAA KAAA")
    console.log(`this is ${cat.name}, fighting with ${kak.name}`);


}