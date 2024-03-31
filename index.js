#!/usr/bin/env node
import inquirer from "inquirer";
//1 campare will generate a random number
//2 user input for guessing number
//3 campare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation!you gussed right number");
}
else {
    console.log("sorry! you guessed wrong number");
}
