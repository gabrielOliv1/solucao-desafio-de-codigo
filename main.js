"use strict";
exports.__esModule = true;
exports.isAnagramPalindrome = exports.convertToUpperCase = exports.maxLengthPalindrome = exports.removeDuplicate = exports.reverseWordOrder = exports.validateString = void 0;
var str = "Hello, world! OpenAI is amazing.";
var validateString = function (str) {
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(str);
};
exports.validateString = validateString;
var reverseWordOrder = function (str) {
    var arr = str.split(" ");
    var newArr = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr += "".concat(arr[i], " ");
    }
    return newArr.trimEnd();
};
exports.reverseWordOrder = reverseWordOrder;
var removeDuplicate = function (str) {
    if (!(0, exports.validateString)(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
    }
    var chars = str.split('');
    var repeteadChars = [];
    var uniqueChars = [];
    var newStr = '';
    for (var i = 0; i < chars.length; i++) {
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
var maxLengthPalindrome = function (str) {
    if (!(0, exports.validateString)(str)) {
        return '';
    }
    var start = 0;
    var maxLength = 0;
    if (str == '') {
        return '';
    }
    else if (str.length == 1) {
        return str;
    }
    for (var i = 0; i < str.length; i++) {
        if ((str.length - i) < (maxLength / 2)) {
            break;
        }
        var oddPalindrome = expandFromCenter(str, i, i);
        var evenPalindrome = expandFromCenter(str, i - 1, i);
        if (oddPalindrome.length > maxLength) {
            maxLength = oddPalindrome.length;
        }
        if (evenPalindrome.length > maxLength) {
            maxLength = evenPalindrome.length;
        }
    }
    function expandFromCenter(str, left, right) {
        while (left >= 0 && right < str.length && (str[left] === str[right])) {
            var newLength = right - left + 1;
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
var string = "bbabdadadadadad";
var str2 = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you.";
var convertToUpperCase = function (str) {
    if (!(0, exports.validateString)(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
    }
    var regex = /(^|[.?!]\s)(\w)/g;
    var newString = str.replace(regex, function (match) {
        return match.toUpperCase();
    });
    return newString;
};
exports.convertToUpperCase = convertToUpperCase;
var str3 = "banana";
var isAnagramPalindrome = function (str) {
    var charCount = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char !== ' ') {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }
    var oddCount = 0;
    for (var _a = 0, _b = charCount.values(); _a < _b.length; _a++) {
        var count = _b[_a];
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
};
exports.isAnagramPalindrome = isAnagramPalindrome;
