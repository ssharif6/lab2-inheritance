"use strict";
var lab2_part1_1 = require("./lab2-part1");
var lab2_part2_1 = require("./lab2-part2");
var manager = new lab2_part1_1.CheckingsAccount(50.00, "Shaheen");
manager.checkBalance();
var savings = new lab2_part2_1.SavingsAccount(50.00, "Shaheen");
savings.withdraw(10);
savings.withdraw(10);
savings.withdraw(10);
savings.withdraw(10);
savings.checkBalance();
