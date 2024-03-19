import { validateVal } from "./index.js";
export const questions = [
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation:',
        choices: [
            "+ Add",
            "- Subtract",
            "× Multiply",
            "÷ Divide",
            "^ Exponentiation",
            "% Modulus",
        ],
        filter: (val) => val.toUpperCase().split(' ')[1],
        validate: validateVal()
    },
    {
        type: 'input',
        name: 'first_num',
        message: 'Enter a first number:',
        filter: (val) => Number(val),
        validate: validateVal()
    },
    {
        type: 'input',
        name: 'second_num',
        message: 'Enter a second number:',
        filter: (val) => Number(val),
        validate: validateVal(),
    },
];
//# sourceMappingURL=questions.js.map