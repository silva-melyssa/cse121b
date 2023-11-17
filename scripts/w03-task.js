/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    const sum = number1 + number2
    return sum
}
function addNumbers(){
    const firstNumber = parseFloat(document.querySelector("#add1").value)
    const secondNumber = parseFloat(document.querySelector("#add2").value)
    const sum = add(firstNumber, secondNumber)
    document.querySelector("#sum").value = sum
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers)


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    const difference = number1 - number2;
    return difference;
};

const subtractNumbers = function() {
    const firstNumber = parseFloat(document.querySelector("#subtract1").value);
    const secondNumber = parseFloat(document.querySelector("#subtract2").value);
    const difference = subtract(firstNumber, secondNumber);
    document.querySelector("#difference").value = difference;
};

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    const firstNumber = parseFloat(document.querySelector("#factor1").value)
    const secondNumber = parseFloat(document.querySelector("#factor2").value)
    const product = multiply(firstNumber, secondNumber)
    document.querySelector("#product").value = product
}
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {
    const firstNumber = parseFloat(document.querySelector("#dividend").value)
    const secondNumber = parseFloat(document.querySelector("#divisor").value)
    const quotient = divide(firstNumber, secondNumber)
    document.querySelector("#quotient").value = quotient
}
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers)

/* Decision Structure */

function calculateTotal() {
    const subtotalInput = document.getElementById("subtotal");
    const subtotal = parseFloat(subtotalInput.value);

    const discountCheckbox = document.getElementById("member");
    const isDiscountApplied = discountCheckbox.checked;

    const discountPercentage = isDiscountApplied ? 0.15 : 0;
    const discountAmount = subtotal * discountPercentage;

    const total = subtotal - discountAmount;

    const totalSpan = document.getElementById("total");
    totalSpan.textContent = `$ ${total.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener('click', calculateTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1)
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0)
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied