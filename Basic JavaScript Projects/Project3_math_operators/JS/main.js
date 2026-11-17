// Function that performs an addition and displays the result
function addNumbers() {
    // add two numbers and store the result
    var sum = 5 + 10;
    // Put the result into the paragraph with id "Math"
    document.getElementById("Math").innerHTML = " 5 + 10 = " + sum;
}

function subtractNumbers() {
    var difference = 20 - 8;
    document.getElementById("Subtract").innerHTML = " 20 - 8 = " + difference;
}

function multiplyNumbers() {
    var product = 4 * 6;
    document.getElementById("Multiply").innerHTML = " 4 * 6 = " + product;
}

function divideNumbers() {
    var quotient = 48 / 6;
    document.getElementById("Divide").innerHTML = " 48 / 6 = " + quotient;
}

function modulusNumbers() {
    var remainder = 17 % 5;
    document.getElementById("Modulus").innerHTML = " 17 % 5 = " + remainder;
}

function negateNumbers() {
    var number = 25;
    var negatedNumber = -number;
    document.getElementById("Negate").innerHTML = " The negation of 25 is " + negatedNumber;
}


function incrementNumber() {
    var count = 10;
    count++;
    document.getElementById("Increment").innerHTML = "10 after ++ is " + count;
}

function decrementNumber() {
    var count = 10;
    count--;
    document.getElementById("Decrement").innerHTML = "10 after -- is " + count;
}

function randomNumber() {
    var random = Math.random();
    document.getElementById("Random").innerHTML = "Random number: " + random;
}

function squareRootNumber() {
    var root = Math.sqrt(64);
    document.getElementById("SquareRoot").innerHTML = " The square root of 64 is " + root;
}