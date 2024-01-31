function addDigitsUntilSingleDigit(number) {
    while (number > 9) {
        number = Array.from(String(number), Number).reduce((acc, digit) => acc + digit, 0);
    }
    return number;
}

function calculateSingleDigit() {
    let numberInput = document.getElementById('numberInput').value;
    let resultElement = document.getElementById('result');

    if (/^\d+$/.test(numberInput)) {
        let result = addDigitsUntilSingleDigit(parseInt(numberInput));
        resultElement.textContent = "Final single-digit result: " + result;
    } else {
        alert("Invalid input. Please enter a valid integer.");
    }
}
