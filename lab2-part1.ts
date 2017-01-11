export class CheckingsAccount {

    private initialBalance : number;
    private ownerName : string;

    constructor(initialBalance : number, ownerName : string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
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