export class SavingsAccount {

    private initialBalance : number;
    private ownerName : string;
    private numWithdrawls : number;

    constructor(initialBalance : number, ownerName : string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.numWithdrawls = 0;
    }

    deposit = (amount : number) : void => {
        this.initialBalance += amount;
    }

    withdraw = (amount : number) : void => {
        if(this.numWithdrawls < 3) {
            this.initialBalance -= amount;
            this.numWithdrawls++;
        } else {
            console.log("Already withdrew 3 times");
        }
    }

    checkBalance = () : void => {
        console.log(`${this.ownerName}'s Balance is : ${this.initialBalance}`)
    }
}