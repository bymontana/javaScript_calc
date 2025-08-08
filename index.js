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
        console.log("Error: Division by zero is not allowed.");
        return null; // Return null or throw an error}
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

// Test the calculator functions
add(5, 3);
subtract(10, 4);
multiply(2, 6);
divide(8, 2);
printHistory();
//
// Uncomment the line below to test division by zero
divide(5, 0); //This will throw an error
printHistory(); // Print the history of calculations
//