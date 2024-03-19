#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { questions } from './questions.js';
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcome to the CLI Calculator!');
    console.log(`
      ${chalk.bgBlue('Instructions ')}
      ${chalk.blue('1.')} Choose an operation.
      ${chalk.blue('2.')} Enter a first number.
      ${chalk.blue('3.')} Enter a second number.
      ${chalk.blue('4.')} Press enter to see the answer.  
    `);
    rainbowTitle.stop();
}
export function validateVal() {
    return (val) => {
        const isValid = Boolean(val);
        return isValid || 'Please enter a number';
    };
}
export function presentAnswer(result) {
    console.log(`${chalk.bgBlue('Answer')}: ${result}`);
}
export const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));
export const wantContinue = async () => {
    const { wantContinue } = await inquirer.prompt({
        type: 'confirm',
        name: 'wantContinue',
        message: 'Would you like to continue?',
        default: true
    });
    if (wantContinue) {
        return promptQuestions();
    }
    console.log(chalk.green('Thanks for using my Calculator!'));
    return;
};
export const performCalculation = ({ first_num, operation, second_num }) => {
    let result = 0;
    switch (operation) {
        case 'ADD':
            result = first_num + second_num;
            presentAnswer(result);
            return wantContinue();
        case 'SUBTRACT':
            result = first_num - second_num;
            presentAnswer(result);
            return wantContinue();
        case 'MULTIPLY':
            result = first_num * second_num;
            presentAnswer(result);
            return wantContinue();
        case 'DIVIDE':
            result = first_num / second_num;
            presentAnswer(result);
            return wantContinue();
        case 'EXPONENTIATION':
            result = first_num ** second_num;
            presentAnswer(result);
            return wantContinue();
        case 'MODULUS':
            result = first_num % second_num;
            presentAnswer(result);
            return wantContinue();
        default:
            process.exit(1);
    }
};
export default async function promptQuestions() {
    const answers = await inquirer.prompt(questions);
    return performCalculation(answers);
}
await welcome();
await promptQuestions();
//# sourceMappingURL=index.js.map