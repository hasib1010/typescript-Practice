{
    // OOP Inheritance 
    class Parent {
        name: string;
        Address: string;
        age: number;
        constructor(name: string, address: string, age: number) {
            this.name = name;
            this.Address = address;
            this.age = age;
        }
        getMoney(takaChao: number) {
            console.log(`${this.name} is asking for money ${takaChao * takaChao} from papa`);

        }
    }
    class Student extends Parent {
        constructor(name: string, Address: string, age: number) {
            super(name, Address, age)
        }
    }
    class Teacher extends Parent {

        designation: string;
        constructor(name: string, address: string, age: number, designation: string) {
            super(name, address, age)
            this.designation = designation
        }

        takeClass(nuumberOfClass: number) {
            console.log(`${this.name} is taking class of total ${nuumberOfClass} in a day`);

        }
    }

    const Teacher1 = new Teacher("Zakir Sir", "Tularampur", 55, "Science Teacher")
    Teacher1.takeClass(7)
    const student1 = new Student("MR. Topper", "Dhaka", 20,)
    student1.getMoney(50)

    console.log(Teacher1.designation);
    

}