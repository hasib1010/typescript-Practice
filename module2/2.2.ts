{
    // interface
    type user1 = {
        name: string;
        age: number;
    }
    interface user2 {
        name: string;
        age: number;
    }
    type UserWithRole = user1 & { role: string }
    interface UserWithRole2 extends user2 {
        role: string
    }
    const user: user1 = {
        name: "hasib",
        age: 25,
    }
    const userWithRole: UserWithRole = {
        name: "hasib",
        age: 25,
        role: "admin"
    }
    const userWithRole2: UserWithRole2 = {
        name: "hasib",
        age: 25,
        role: "author"
    }


    // ARRAY

    type Roll = number[]
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll2 = [1, 2, 3, 4, 5]



    // function 
    type AddFunction = (num1: number, num2: number) => number
    interface AddNumber {
        (num1: number, num2: number): number
    }

    const add: AddNumber = (number1, number2) => {
        return (number1 + number2)
    }



    //
}