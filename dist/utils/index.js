import { presentAnswer, wantContinue } from './utils.js';
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
//# sourceMappingURL=index.js.map