#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t<======Welcome to 'Ahzam' CLI number guessing game======>\n");
const ramdonnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumbber",
        type: "number",
        message: "ENter your guess number(Number limit 1 to 5)",
    },
]);
if (answer.userguessednumbber === ramdonnumber) {
    console.log("\n\tCongratulation ! You Guess the correct number ;)");
}
else {
    console.log("\n\tSorry you guess a wrong number :(");
}
