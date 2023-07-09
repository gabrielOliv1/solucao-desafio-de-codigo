"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./dist/main");
const reverse = () => {
    const string = document.getElementById("reverseInput").value;
    const reversedString = (0, main_1.reverseWordOrder)(string);
    document.getElementById("result").innerText = reversedString;
};
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", reverse);
});
//# sourceMappingURL=script.js.map