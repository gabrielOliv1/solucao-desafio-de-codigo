import { reverseWordOrder, removeDuplicate, maxLengthPalindrome, convertToUpperCase, isAnagramPalindrome } from "./main.js";

const reverse = () => {
  const string = document.getElementById("reverseInput").value;
  const reversedString = reverseWordOrder(string);
  document.getElementById("result").innerText = reversedString;
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#reverseWordOrderForm .btn");
  button.addEventListener("click", reverse);
});

const remove = () => {
    const string = document.getElementById('removeDuplicateInput').value;
    const duplicateRemoved = removeDuplicate(string);
    document.getElementById('removeDuplicateResult').innerText = duplicateRemoved;
};

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#removeDuplicateForm .btn');
    button.addEventListener("click", remove);
});

const findPalindrome = () => {
    const string = document.getElementById('maxLengthPalindromeInput').value;
    const palindrome = maxLengthPalindrome(string);
    document.getElementById('palindromeResult').innerText = palindrome;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#maxLengthPalindromeForm .btn');
    button.addEventListener('click', findPalindrome);
});

const toUpperCase = () => {
    const string = document.getElementById('convertToUpperCaseInput').value;
    const toUpperCase = convertToUpperCase(string);
    document.getElementById('convertToUpperCaseResult').innerText = toUpperCase;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#convertToUpperCaseForm .btn');
    button.addEventListener('click', toUpperCase);
});

const checkPalindromeAnagram = () => {
    const string = document.getElementById('isAnagramPalindromeInput').value;
    const checkedString = isAnagramPalindrome(string);
    document.getElementById('isAnagramPalindromeResult').innerText = checkedString;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#isAnagramPalindromeForm .btn');
    button.addEventListener('click', checkPalindromeAnagram);
});


