const str = "Hello, world! OpenAI is amazing."; 

function func(str) {
    const arr = str.split(" ");
    let newArr = ``;

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += `${arr[i]} `;
    }

    return newArr.trimEnd();
}

console.log(str);
console.log(func(str))