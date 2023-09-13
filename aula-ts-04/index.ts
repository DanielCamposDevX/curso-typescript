function multiply(num1: number, num2: number) {
    return Number(num1) * Number(num2)
}

function sum(num1: string | null, num2: string | null) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 * num2;
    }
     return Number(num1) + Number(num2);
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number")
    const num2 = prompt("Second Number")

    let result = sum(num1, num2);
    showResult(result);
})();
