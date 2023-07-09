/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.isAnagramPalindrome = exports.convertToUpperCase = exports.maxLengthPalindrome = exports.removeDuplicate = exports.reverseWordOrder = exports.validateString = void 0;\nvar str = \"Hello, world! OpenAI is amazing.\";\nvar validateString = function (str) {\n    var regex = /^[a-zA-Z\\s.,!?']+$/;\n    return regex.test(str);\n};\nexports.validateString = validateString;\nvar reverseWordOrder = function (str) {\n    var arr = str.split(\" \");\n    var newArr = \"\";\n    for (var i = arr.length - 1; i >= 0; i--) {\n        newArr += \"\".concat(arr[i], \" \");\n    }\n    return newArr.trimEnd();\n};\nexports.reverseWordOrder = reverseWordOrder;\nvar removeDuplicate = function (str) {\n    if (!(0, exports.validateString)(str)) {\n        throw new Error(\"O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.\");\n    }\n    var chars = str.split('');\n    var repeteadChars = [];\n    var uniqueChars = [];\n    var newStr = '';\n    for (var i = 0; i < chars.length; i++) {\n        if (uniqueChars.includes(chars[i]) && chars[i] !== ' ') {\n            repeteadChars.push(chars[i]);\n        }\n        else {\n            uniqueChars.push(chars[i]);\n        }\n    }\n    newStr = uniqueChars.join('');\n    return newStr;\n};\nexports.removeDuplicate = removeDuplicate;\nvar maxLengthPalindrome = function (str) {\n    if (!(0, exports.validateString)(str)) {\n        return '';\n    }\n    var start = 0;\n    var maxLength = 0;\n    if (str == '') {\n        return '';\n    }\n    else if (str.length == 1) {\n        return str;\n    }\n    for (var i = 0; i < str.length; i++) {\n        if ((str.length - i) < (maxLength / 2)) {\n            break;\n        }\n        var oddPalindrome = expandFromCenter(str, i, i);\n        var evenPalindrome = expandFromCenter(str, i - 1, i);\n        if (oddPalindrome.length > maxLength) {\n            maxLength = oddPalindrome.length;\n        }\n        if (evenPalindrome.length > maxLength) {\n            maxLength = evenPalindrome.length;\n        }\n    }\n    function expandFromCenter(str, left, right) {\n        while (left >= 0 && right < str.length && (str[left] === str[right])) {\n            var newLength = right - left + 1;\n            if (newLength > maxLength) {\n                maxLength = newLength;\n                start = left;\n            }\n            right++;\n            left--;\n        }\n        return str.substring(start, start + maxLength);\n    }\n    return str.substring(start, start + maxLength);\n};\nexports.maxLengthPalindrome = maxLengthPalindrome;\nvar string = \"bbabdadadadadad\";\nvar str2 = \"hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you.\";\nvar convertToUpperCase = function (str) {\n    if (!(0, exports.validateString)(str)) {\n        throw new Error(\"O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.\");\n    }\n    var regex = /(^|[.?!]\\s)(\\w)/g;\n    var newString = str.replace(regex, function (match) {\n        return match.toUpperCase();\n    });\n    return newString;\n};\nexports.convertToUpperCase = convertToUpperCase;\nvar str3 = \"banana\";\nvar isAnagramPalindrome = function (str) {\n    var charCount = new Map();\n    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {\n        var char = str_1[_i];\n        if (char !== ' ') {\n            charCount.set(char, (charCount.get(char) || 0) + 1);\n        }\n    }\n    var oddCount = 0;\n    for (var _a = 0, _b = charCount.values(); _a < _b.length; _a++) {\n        var count = _b[_a];\n        if (count % 2 !== 0) {\n            oddCount++;\n        }\n    }\n    return oddCount <= 1;\n};\nexports.isAnagramPalindrome = isAnagramPalindrome;\n\n\n//# sourceURL=webpack://pwc-teste/./main.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\nconst reverse = () => {\n  const string = document.getElementById(\"reverseInput\").value;\n  const reversedString = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.reverseWordOrder)(string);\n  document.getElementById(\"result\").innerText = reversedString;\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const button = document.querySelector(\"#reverseWordOrderForm .btn\");\n  button.addEventListener(\"click\", reverse);\n});\n\nconst remove = () => {\n    const string = document.getElementById('removeDuplicateInput').value;\n    const duplicateRemoved = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.removeDuplicate)(string);\n    document.getElementById('removeDuplicateResult').innerText = duplicateRemoved;\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const button = document.querySelector('#removeDuplicateForm .btn');\n    button.addEventListener(\"click\", remove);\n});\n\nconst findPalindrome = () => {\n    const string = document.getElementById('maxLengthPalindromeInput').value;\n    const palindrome = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.maxLengthPalindrome)(string);\n    document.getElementById('palindromeResult').innerText = palindrome;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const button = document.querySelector('#maxLengthPalindromeForm .btn');\n    button.addEventListener('click', findPalindrome);\n});\n\nconst toUpperCase = () => {\n    const string = document.getElementById('convertToUpperCaseInput').value;\n    const toUpperCase = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.convertToUpperCase)(string);\n    document.getElementById('convertToUpperCaseResult').innerText = toUpperCase;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const button = document.querySelector('#convertToUpperCaseForm .btn');\n    button.addEventListener('click', toUpperCase);\n});\n\nconst checkPalindromeAnagram = () => {\n    const string = document.getElementById('isAnagramPalindromeInput').value;\n    const checkedString = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.isAnagramPalindrome)(string);\n    document.getElementById('isAnagramPalindromeResult').innerText = checkedString;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const button = document.querySelector('#isAnagramPalindromeForm .btn');\n    button.addEventListener('click', checkPalindromeAnagram);\n});\n\n\n\n\n//# sourceURL=webpack://pwc-teste/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;