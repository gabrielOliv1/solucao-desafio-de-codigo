const str = "Hello, world! OpenAI is amazing."; 

function func(str) {
    const arr = str.split(" ");
    let newArr = ``;

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += `${arr[i]} `;
    }

    return newArr.trimEnd();
}

function remoteDuplicate(str) {
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

console.log(remoteDuplicate(str));