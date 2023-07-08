const str: string = "Hello, world! OpenAI is amazing."; 

export const validateString = (str: string): boolean => {
    const regex = /^[a-zA-Z\s.,!?']+$/;

    return regex.test(str);
  }

export const reverseWordOrder = (str: string): string => {
    const arr = str.split(" ");
    let newArr = ``;

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += `${arr[i]} `;
    }

    return newArr.trimEnd();
}

export const removeDuplicate = (str: string): string => {
    if (!validateString(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
      }

    const chars: string[] = str.split('');
    const repeteadChars: string[] = [];
    const uniqueChars: string[] = [];
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

export const maxLengthPalindrome = (str: string): string  => {
    if (!validateString(str)) {
        return '';
    }
    
    let start: number = 0;
    let maxLength: number = 0;

    if (str == '') {
        return '';
    } else if (str.length == 1) {
        return str;
    }

    for (let i = 0; i < str.length; i++) {
        if ((str.length - i) < (maxLength / 2)) {
            break;
        }

        let oddPalindrome: string = expandFromCenter(str, i, i);
        let evenPalindrome: string = expandFromCenter(str, i - 1, i);

        if (oddPalindrome.length > maxLength) {
            maxLength = oddPalindrome.length;
        }

        if (evenPalindrome.length > maxLength) {
            maxLength = evenPalindrome.length;
        }
    } 

    function expandFromCenter(str: string, left: number, right: number): string {
        while(left >= 0 && right < str.length && (str[left] === str[right])) {
            const newLength: number = right - left + 1;
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
}

const string: string = "bbabdadadadadad";

const str2: string = "hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you. hello. how are you? i'm fine, thank you."

export const convertToUpperCase = (str: string): string => {
    if (!validateString(str)) {
        throw new Error("O argumento deve conter apenas caracteres alfabéticos, espaços e sinais de pontuação.");
    }

    const regex: RegExp = /(^|[.?!]\s)(\w)/g;
    const newString: string = str.replace(regex, (match) => {
        return match.toUpperCase();
    })

    return newString;
}

const str3: string = "banana";

export const isAnagramPalindrome = (str: string): boolean => {
    const charCount: Map<string, number> = new Map();
      
    for (let char of str) {
        if (char !== ' ') {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }
      
    let oddCount: number = 0;
      
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
      
    return oddCount <= 1;
}