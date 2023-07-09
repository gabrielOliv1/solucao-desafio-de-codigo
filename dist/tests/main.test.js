"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('reverseWordOrder', () => {
    (0, globals_1.test)('Inverte a ordem das palavras na frase', () => {
        const str = "Hello, world! OpenAI is amazing.";
        (0, globals_1.expect)((0, main_1.reverseWordOrder)(str)).toBe('amazing. is OpenAI world! Hello,');
    });
});
(0, globals_1.describe)('removeDuplicate', () => {
    (0, globals_1.test)('deve remover caracteres duplicados de uma string', () => {
        const str = 'Hello, world!';
        (0, globals_1.expect)((0, main_1.removeDuplicate)(str)).toBe('Helo, wrd!');
    });
});
(0, globals_1.describe)('maxLengthPalindrome', () => {
    (0, globals_1.test)('deve encontrar a maior substring palindrômica em uma string', () => {
        const str = 'bbabdadadadadad';
        (0, globals_1.expect)((0, main_1.maxLengthPalindrome)(str)).toBe('dadadadadad');
    });
    (0, globals_1.test)('deve retornar uma string vazia quando a entrada é inválida', () => {
        (0, globals_1.expect)((0, main_1.maxLengthPalindrome)('')).toBe('');
    });
    (0, globals_1.test)('deve retornar o próprio caractere quando a entrada contém apenas um caractere', () => {
        (0, globals_1.expect)((0, main_1.maxLengthPalindrome)('a')).toBe('a');
    });
});
(0, globals_1.describe)('convertToUpperCase', () => {
    (0, globals_1.test)('deve converter a primeira letra após um ponto, ponto de exclamação ou ponto de interrogação para maiúscula', () => {
        const str = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you.";
        const expected = "Hello. How are you? I'm fine, thank you. Hello. How are you? I'm fine, thank you. Hello. How are you? I'm fine, thank you.";
        (0, globals_1.expect)((0, main_1.convertToUpperCase)(str)).toBe(expected);
    });
});
(0, globals_1.describe)('isAnagramPalindrome', () => {
    (0, globals_1.test)('deve retornar true para uma string que é um anagrama de um palíndromo válido', () => {
        const str = 'racecar';
        (0, globals_1.expect)((0, main_1.isAnagramPalindrome)(str)).toBe(true);
    });
    (0, globals_1.test)('deve retornar true para uma string que é um anagrama de um palíndromo válido com espaços', () => {
        const str = 'taco cat';
        (0, globals_1.expect)((0, main_1.isAnagramPalindrome)(str)).toBe(true);
    });
    (0, globals_1.test)('deve retornar false para uma string que não é um anagrama de um palíndromo válido', () => {
        const str = 'abc';
        (0, globals_1.expect)((0, main_1.isAnagramPalindrome)(str)).toBe(false);
    });
});
//# sourceMappingURL=main.test.js.map