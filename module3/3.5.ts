{
    // access modifyer

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
        addDeposit(amount: number) {
            this.balance = this.balance + amount
        }
        getBalance() {
            return this.balance
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.balance
        }
    }




    const poorAccount = new BankAccount(268, "Hasib", 120)
    // poorAccount.balance = 233
    poorAccount.addDeposit(2000)
    console.log(poorAccount.getBalance());





















}