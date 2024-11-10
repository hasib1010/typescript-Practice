{
    // type gourds
    type AlphaNumaric = string | number

    const add = (param1: AlphaNumaric, param2: AlphaNumaric): AlphaNumaric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const add2 = (param1: AlphaNumaric, param2: AlphaNumaric): AlphaNumaric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;  // If both are numbers, add them
        } else {
            return param1.toString() + param2.toString();  // Convert both to strings and concatenate
        }
    };
    const res1 = add("x", 5)
    console.log(res1);

    // in gourd

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }
    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`${user.name} is an admin`);
        }
        else {
            console.log(`${user.name} is a normal user`);

        }
    }
    const normalUser: NormalUser = {
        name: "Normal User"
    }
    const adminUser: AdminUser = {
        name: "Admin",
        role: "admin"
    }
    const result = getUser(normalUser)
    const result2 = getUser(adminUser)
    console.log(result, result2);

}