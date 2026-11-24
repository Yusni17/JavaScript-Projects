var myVariable = "Hello, Yusni";
document.write("The data type of myVariable is: " + typeof myVariable);

// A number too large for JavaScript to represent becomes Infinity
var tooBig = 2e308;

// A negative number too large for JavaScript to represent becomes -Infinity
var tooSmall = -2e308;

// Use document.getElementById() to display each result in its paragraph
document.getElementById("Infinity").innerHTML = "Large number: " + tooBig;
document.getElementById("NegativeInfinity").innerHTML = "Negative large number: " + tooSmall;

// The greater than operator returns true because 10 is greater than 5
document.getElementById("True").innerHTML = "10 > 5 is " + (10 > 5);

// The less than operator returns false because 10 is not less than 5
document.getElementById("False").innerHTML = "10 < 5 is " + (10 < 5);

// The equal operator returns true because 10 is equal to 10
document.getElementById("Equal").innerHTML = "10 == 10 is " + (10 == 10);

// The not equal operator returns true because 10 is not equal to 5
document.getElementById("NotEqual").innerHTML = "10 != 5 is " + (10 != 5);

// Display a message together with the result of a math operation
console.log("8 * 5 = " + (8 * 5));

// 1. Same data type (number) and same value: returns true
document.getElementById("StrictTrue").innerHTML = "5 === 5 is " + (5 === 5);

// 2. Different data type (number vs string) and different value: returns false
document.getElementById("StrictFalse1").innerHTML = '5 === "hello" is ' + (5 === "hello");

// 3. Different data type (number vs string) but the same value: returns false
document.getElementById("StrictFalse2").innerHTML = '5 === "5" is ' + (5 === "5");

// 4. Same data type (number) but a different value: returns false
document.getElementById("StrictFalse3").innerHTML = "5 === 8 is " + (5 === 8);


// AND (&&) returns true only if BOTH conditions are true
document.getElementById("AndTrue").innerHTML = "(5 > 2) && (10 > 7) is " + ((5 > 2) && (10 > 7));

// AND (&&) returns false if at least one condition is false
document.getElementById("AndFalse").innerHTML = "(5 > 2) && (10 < 7) is " + ((5 > 2) && (10 < 7));

// OR (||) returns true if AT LEAST ONE condition is true
document.getElementById("OrTrue").innerHTML = "(5 < 2) || (10 > 7) is " + ((5 < 2) || (10 > 7));

// OR (||) returns false only if BOTH conditions are false
document.getElementById("OrFalse").innerHTML = "(5 < 2) || (10 < 7) is " + ((5 < 2) || (10 < 7));

// NOT (!) reverses a Boolean value: !(5 > 2) is !true, which returns false
document.getElementById("NotTrue").innerHTML = "!(5 > 2) is " + !(5 > 2);

// NOT (!) reverses a Boolean value: !(5 < 2) is !false, which returns true
document.getElementById("NotFalse").innerHTML = "!(5 < 2) is " + !(5 < 2);