#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function Welcome() {
    let neonTitle = chalkAnimation.neon(`     Let's start Calculation`);
    await sleep();
    neonTitle.stop();
    console.log(chalk.green(`
     _____________________
    |  _________________  |
    | | Calculator  00. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |    
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    console.log(chalk.cyan.bold(`\n     Developed By Ahmed Sherwani\n`));
}
await Welcome();
async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "Operator",
            message: "Which Operation do you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your First Number: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your Second Number: "
        }
    ])
        .then((answers) => {
        console.log(answers);
        if (answers.Operator === "Addition") {
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.Operator === "Subtraction") {
            console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.Operator === "Multiplication") {
            console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.Operator === "Division") {
            console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
}
;
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n: "
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
await startAgain();
