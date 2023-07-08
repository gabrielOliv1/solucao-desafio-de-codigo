const str = "Hello, world! OpenAI is amazing."; 

function func(str) {
    const arr = str.split(" ");
    let newArr = ``;

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += `${arr[i]} `;
    }

    return newArr.trimEnd();
}

function removeDuplicate(str) {
    const chars = str.split('');
    const repeteadChars = [];
    const uniqueChars = [];
    let newStr = '';
    
    for (let i = 0; i < chars.length; i++) {
        if (uniqueChars.includes(chars[i]) && chars[i] !== ' ') {
            repeteadChars.push(chars[i]);
        } else {
            uniqueChars.push(chars[i]);
        }
    }

    newStr = uniqueChars.join('');
    return newStr;
}

console.log(removeDuplicate(str));

function maxLengthPalindrome(str) {
    let start = 0;
    let maxLength = 0;

    if (str == '' || str == null) {
        return '';
    } else if (str.length < 2) {
        maxLength = `${str[0]}`;

        return maxLength;
    }

    for (let i = 0; i < str.length; i++) {
        if ((str.length - i) < (maxLength / 2)) {
            break;
        }

        let oddPalindrome = expandFromCenter(str, i, i);
        let evenPalindrome = expandFromCenter(str, i - 1, i);

        if (oddPalindrome > maxLength) {
            maxLength = oddPalindrome;
        }

        if (evenPalindrome > maxLength) {
            maxLength = evenPalindrome;
        }
    } 

    function expandFromCenter(str, left, right) {
        while(left >= 0 && right < str.length && (str[left] === str[right])) {
            const newLength = right - left + 1;
            if (newLength > maxLength) {
                maxLength = newLength;
                start = left;
            }

            right++;
            left--;
        }
    }

    return str.substring(start, start + maxLength);
}

const string = "bbabdadadadadad";
console.log(maxLengthPalindrome(string));

const str2 = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you."

function convertToUpperCase(str) {
    const regex = /(^|[.?!]\s)(\w)/g;
    const newString = str.replace(regex, (match) => {
        return match.toUpperCase();
    })

    return newString;
}

console.log(convertToUpperCase(str2));


/*module.exports = {
    func,
    removeDuplicate,
    maxLengthPalindrome,
    convertToUpperCase
};*/