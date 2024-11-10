{
    // Getter and setter

    class BankAccount {
        public readonly id: number;
        name: string;
        // private balance: number
        protected balance: number
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance
        }
        // public addDeposit(amount: number) {
        //     this.balance = this.balance + amount
        // }

        //    public getBalance() {
        //         return this.balance
        //     }

        // getter
        get Banance() {
            return this.balance
        }
        // setter 
        set deposit(amount:number) {
            this.balance = this.balance + amount
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.balance
        }
    }




    const poorAccount = new BankAccount(268, "Hasib", 120)
    // poorAccount.balance = 233
    // poorAccount.addDeposit(2000)
    // console.log(poorAccount.getBalance());
    poorAccount.deposit= 400
    const mybalance = poorAccount.Banance  
    console.log(mybalance);






















}