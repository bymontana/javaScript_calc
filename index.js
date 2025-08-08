// Create a calculator capable of performing basic operations
// and keeps track of all calculations made.

// History array to store calculations
let history = [];

// Create functions for each operation and store results in history
function add(a, b) {
    const resulta = a + b;
    history.push(`${a} + ${b} = ${resulta}`);
    return resulta;
}
function subtract(a, b) {
    const resultb = a - b;
    history.push(`${a} - ${b} = ${resultb}`);
    return resultb;
}
function multiply(a, b) {
    const resultc = a * b;
    history.push(`${a} * ${b} = ${resultc}`);
    return resultc;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    const resultd = a / b;
    history.push(`${a} / ${b} = ${resultd}`);
    return resultd;
}

// Print history in the console
function printHistory() {
    if (history.length === 0) {
        console.log("No calculations made yet.");
    } else {
        console.log("Calculation History:");
        history.forEach(entry => console.log(entry));
    }
}
