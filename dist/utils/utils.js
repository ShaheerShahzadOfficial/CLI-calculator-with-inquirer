import chalk from "chalk";
import inquirer from "inquirer";
import promptQuestions from "../index.js";
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
    console.log(chalk.green('Thanks for using the CLI Calculator!'));
    return;
};
//# sourceMappingURL=utils.js.map