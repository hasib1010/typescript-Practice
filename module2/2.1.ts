{
    let anything: any;
    anything = "next level web dev";
    anything = true;
    anything = 666;

    (anything as number)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const conversion = parseFloat(value) * 1000
            return `The converted value is ${conversion}`
        }
        if (typeof value === "number") {
            return value * 1000
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("320") as string;
    console.log(result1);

    type customError = {
        messege: string
    }

    try {

    } catch (error) {
        console.log((error as customError).messege);

    }














}