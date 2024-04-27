import inquirer from "inquirer";
let myBalance = 15000;
let isContinue = true;
const pinCode = 7262;
const message = "Welcome to ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: ",
});
if (pin_ans.ans === 7262) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposit", "Withdraw", "Fast Cash", "Balance Check"],
        });
        if (ans.list === "Deposit") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Please Enter your amount:",
            });
            if (ans.Deposit_amount > 0) {
                myBalance = myBalance + ans.Deposit_amount;
                console.log(myBalance);
            }
        }
        else if (ans.list === "Withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please Enter your amount",
            });
            if (ans.Withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not enough Money");
            }
        }
        else if (ans.list === "Fast Cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "Fast_Cash",
                message: "Please select one",
                choices: ["500", "1000", "2000", "5000", "10000"],
            });
            if (ans.Fast_Cash < -myBalance) {
                if (ans.Fast_Cash === "500") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "1000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "2000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "5000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "10000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
            }
        }
        else if (ans.list === "Balance Check") {
            console.log(`Your Balance is: ${myBalance}`);
        }
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue:",
        });
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pin code");
}
