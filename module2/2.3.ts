{
    // generic type

    type GenericType<T> = Array<T>

    const numbersArray: GenericType<number> = [1, 2, 4, 566, 6, 7, 70]
    // const numbersArray: number[] = [1, 2, 4, 566, 6, 7, 70]

    const friendsArray: GenericType<String> = ["Shakil", "Emon", "Himel"]
    // const friendsArray: string[] = ["Shakil", "Emon", "Himel"]

    const boolArray: GenericType<boolean> = [true, false, true]
    // const boolArray: boolean[] = [true, false, true]

    const users: GenericType<{ name?: string, age?: number, admin?: boolean }> = [
        {
            name: "hasib",
            age: 24
        }, {
            name: "jas",
            age: 33
        },
        {
            admin: true
        }
    ]


    // Generic tuple
    type GenericTupole<x, y> = [x, y];

    const human: GenericTupole<string, string> = ["mr. x", "mr. y"]
    const user: GenericTupole<number, { name: string, email: string }> = [
        1224, {
            name: "hasib",
            email: "hasib@email.com"
        }
    ]




}