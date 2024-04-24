#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    "USD": 1,
    "PKR": 278.55,
    "AUD": 1.54,
    "ZAR": 19.13,
    "RMB": 7.25
};
let userInput = await inquirer.prompt([
    { name: "From",
        type: "list",
        message: "Select the currency to convert from?",
        choices: ["USD", "PKR", "AUD", "ZAR", "RMB"] },
    { name: "To",
        type: "list",
        message: "Select the currency to convert into?",
        choices: ["USD", "PKR", "AUD", "ZAR", "RMB"] },
    { name: "Amount",
        type: "number",
        message: "Enter your amount?" }
]);
let currencyFrom = currency[userInput.From];
let currencyInto = currency[userInput.To];
let amount = (userInput.Amount);
let baseCurrency = (amount / currencyFrom);
let convertCurrency = (baseCurrency * currencyInto);
console.log(`Converted Amount = ${convertCurrency}`);
