{
    // polymorphism
    class Person {
        getSleep() {
            console.log("i am sleeping 8 hour a day");

        }
    }

    class Student extends Person {
        getSleep() {
            console.log("i am sleeping 7 hour a day");
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("i am sleeping 6 hour a day");
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep()
    }


    const Person1 = new Person()
    const Person2 = new Student()
    const Person3 = new Developer()

    getSleepingHours(Person1)
    getSleepingHours(Person2)
    getSleepingHours(Person3)









}