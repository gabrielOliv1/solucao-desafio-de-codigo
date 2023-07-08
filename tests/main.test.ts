import { reverseWordOrder, removeDuplicate, maxLengthPalindrome, convertToUpperCase, isAnagramPalindrome } from '../main';
import { describe, test, expect} from '@jest/globals';

describe('reverseWordOrder', () => {
    test('Inverte a ordem das palavras na frase', () => {
        const str: string = "Hello, world! OpenAI is amazing.";
        expect(reverseWordOrder(str)).toBe('amazing. is OpenAI world! Hello,');
    });
});

describe('removeDuplicate', () => {
    test('deve remover caracteres duplicados de uma string', () => {
      const str: string = 'Hello, world!';
      expect(removeDuplicate(str)).toBe('Helo, wrd!');
    });
  });
  
describe('maxLengthPalindrome', () => {
  test('deve encontrar a maior substring palindrômica em uma string', () => {
    const str: string = 'bbabdadadadadad';
      expect(maxLengthPalindrome(str)).toBe('dadadadadad');
  });
  
  test('deve retornar uma string vazia quando a entrada é inválida', () => {
    expect(maxLengthPalindrome('')).toBe('');
  });
  
  test('deve retornar o próprio caractere quando a entrada contém apenas um caractere', () => {
    expect(maxLengthPalindrome('a')).toBe('a');
  });
});
  
describe('convertToUpperCase', () => {
  test('deve converter a primeira letra após um ponto, ponto de exclamação ou ponto de interrogação para maiúscula', () => {
    const str: string = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you.";
    const expected: string = "Hello. How are you? I'm fine, thank you. Hello. How are you? I'm fine, thank you. Hello. How are you? I'm fine, thank you.";
      expect(convertToUpperCase(str)).toBe(expected);
  });
});

describe('isAnagramPalindrome', () => {
  test('deve retornar true para uma string que é um anagrama de um palíndromo válido', () => {
    const str: string = 'racecar';
      expect(isAnagramPalindrome(str)).toBe(true);
  });
  
  test('deve retornar true para uma string que é um anagrama de um palíndromo válido com espaços', () => {
    const str: string = 'taco cat';
      expect(isAnagramPalindrome(str)).toBe(true);
  });
  
  test('deve retornar false para uma string que não é um anagrama de um palíndromo válido', () => {
    const str: string = 'abc';
      expect(isAnagramPalindrome(str)).toBe(false);
  });
});
