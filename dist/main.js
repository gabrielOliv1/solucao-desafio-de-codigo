"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagramPalindrome = exports.convertToUpperCase = exports.maxLengthPalindrome = exports.removeDuplicate = exports.reverseWordOrder = exports.validateString = void 0;
const str = "Hello, world! OpenAI is amazing.";
const validateString = (str) => {
    const regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(str);
};
exports.validateString = validateString;
const reverseWordOrder = (str) => {
    const arr = str.split(" ");
    let newArr = ``;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += `${arr[i]} `;
    }
    return newArr.trimEnd();
};
exports.reverseWordOrder = reverseWordOrder;
const removeDuplicate = (str) => {
    if (!(0, exports.validateString)(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
    }
    const chars = str.split('');
    const repeteadChars = [];
    const uniqueChars = [];
    let newStr = '';
    for (let i = 0; i < chars.length; i++) {
        if (uniqueChars.includes(chars[i]) && chars[i] !== ' ') {
            repeteadChars.push(chars[i]);
        }
        else {
            uniqueChars.push(chars[i]);
        }
    }
    newStr = uniqueChars.join('');
    return newStr;
};
exports.removeDuplicate = removeDuplicate;
const maxLengthPalindrome = (str) => {
    if (!(0, exports.validateString)(str)) {
        return '';
    }
    let start = 0;
    let maxLength = 0;
    if (str == '') {
        return '';
    }
    else if (str.length == 1) {
        return str;
    }
    for (let i = 0; i < str.length; i++) {
        if ((str.length - i) < (maxLength / 2)) {
            break;
        }
        let oddPalindrome = expandFromCenter(str, i, i);
        let evenPalindrome = expandFromCenter(str, i - 1, i);
        if (oddPalindrome.length > maxLength) {
            maxLength = oddPalindrome.length;
        }
        if (evenPalindrome.length > maxLength) {
            maxLength = evenPalindrome.length;
        }
    }
    function expandFromCenter(str, left, right) {
        while (left >= 0 && right < str.length && (str[left] === str[right])) {
            const newLength = right - left + 1;
            if (newLength > maxLength) {
                maxLength = newLength;
                start = left;
            }
            right++;
            left--;
        }
        return str.substring(start, start + maxLength);
    }
    return str.substring(start, start + maxLength);
};
exports.maxLengthPalindrome = maxLengthPalindrome;
const string = "bbabdadadadadad";
const str2 = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you.";
const convertToUpperCase = (str) => {
    if (!(0, exports.validateString)(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
    }
    const regex = /(^|[.?!]\s)(\w)/g;
    const newString = str.replace(regex, (match) => {
        return match.toUpperCase();
    });
    return newString;
};
exports.convertToUpperCase = convertToUpperCase;
const str3 = "banana";
const isAnagramPalindrome = (str) => {
    const charCount = new Map();
    for (let char of str) {
        if (char !== ' ') {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }
    let oddCount = 0;
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
};
exports.isAnagramPalindrome = isAnagramPalindrome;
//# sourceMappingURL=main.js.map