export class Account {

    initialBalance : number;
    ownerName : string;
    numWithdrawls : number;

    constructor(initialBalance : number, ownerName : string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.numWithdrawls = 0;
    }

    deposit = (amount : number) : void => {
        this.initialBalance += amount;
    }

    withdraw = (amount : number) : void => {
        this.initialBalance -= amount;
    }

    checkBalance = () : void => {
        console.log(`${this.ownerName}'s Balance is : ${this.initialBalance}`)
    }
}

export class CheckingsAccount extends Account {

    constructor(initialBalance : number, ownerName : string) {
        super(initialBalance, ownerName);
    }
}

export class SavingsAccount extends Account {

    constructor(initialBalance : number, ownerName : string) {
        super(initialBalance, ownerName);
        this.numWithdrawls = 0;
    }

    withdraw = (amount : number) : void => {
        if(this.numWithdrawls < 3) {
            this.initialBalance -= amount;
            this.numWithdrawls++;
        } else {
            console.log("Already withdrew 3 times");
        }
    }
}