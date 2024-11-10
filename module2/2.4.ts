{
    //interface- Generic  

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }

    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        price: number;
    }> = {
        name: "Hasib",
        computer: {
            brand: "msi",
            model: "pro seris",
            releaseYear: 2023
        },
        smartWatch: {
            brand: "apple",
            model: "apple waTCH-6",
            price: 20
        }
    }

    const richDeveloper: Developer<{
        name: string,
        model: string,
        price: string
    }, {
        brand: string,
        price: number
    }> = {
        name: "hasib",
        computer: {
            brand: "macbook air pro",
            model: "air pro",
            releaseYear: 2024,
        },
        smartWatch: {
            name: "Apple watch 9",
            model: "SoS 8",
            price: "33"
        },
        bike: {
            brand: "Yako Hama",
            price: 245000,
        }
    }



    console.log(richDeveloper);























    // 
}