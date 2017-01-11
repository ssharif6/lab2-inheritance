import {CheckingsAccount} from "./lab2-part1";
import {SavingsAccount} from "./lab2-part2";


var manager = new CheckingsAccount(50.00, "Shaheen");

manager.checkBalance();

var savings = new SavingsAccount(50.00, "Shaheen");
savings.withdraw(10);
savings.withdraw(10);
savings.withdraw(10);
savings.withdraw(10);

savings.checkBalance();