// 1. Global variable: declared outside of any function, so every function can use it
var globalNumber = 10;

// Function that uses the global variable and shows the result in the paragraph with id "ScopeResult"
function useGlobal() {
    document.getElementById("ScopeResult").innerHTML += "Global: " + (20 + globalNumber) + "<br>";
}

// 2. Local variable: declared inside the function, only this function can use it
function useLocal() {
    var localNumber = 5;
    document.getElementById("ScopeResult").innerHTML += "Local: " + (20 + localNumber) + "<br>";
}

// 3. Function with an intentional error: localNumber exists only inside useLocal()
function brokenFunction() {
    // Debug with console.log(): this line will show an error in the console
    console.log(localNumber);
}

// ----- Time function with an if statement -----
function timeFunction() {
    // new Date().getHours() returns the current hour (0-23) from the computer's clock
    var hour = new Date().getHours();
    var greeting;

    // If statement: choose a message depending on the hour
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the message in the paragraph with id "Greeting"
    document.getElementById("Greeting").innerHTML = greeting + " (The hour is " + hour + ")";
}

// ----- My own if statement -----
function scoreFunction() {
    // Get the score the user typed in
    var score = document.getElementById("Score").value;
    var result;

    // If statement: choose a message depending on the score
    if (score >= 90) {
        result = "Excellent!";
    } else if (score >= 50) {
        result = "You passed.";
    } else {
        result = "Try again.";
    }

    // Display the message in the paragraph with id "ScoreResult"
    document.getElementById("ScoreResult").innerHTML = result;
}

// ----- Function with an if statement and an else statement -----
function ticketFunction() {
    // Get the age the user typed in
    var age = document.getElementById("TicketAge").value;
    var message;

    // If statement: runs when the condition is true
    if (age < 18) {
        message = "You get a discount ticket!";
    }
    // Else statement: runs when the condition is false
    else {
        message = "You need a full-price ticket.";
    }

    // Display the message in the paragraph with id "TicketResult"
    document.getElementById("TicketResult").innerHTML = message;
}

// ----- if, else if and else statement -----
function Time_function() {
    // Get the current hour (0-23) from the computer's clock
    var Time = new Date().getHours();
    var Reply;

    // If statement: runs when the hour is between 1 and 11
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    // Else if statement: runs when the first condition is false
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    // Else statement: runs when both conditions above are false
    else {
        Reply = "It is evening time.";
    }

    // Display the message in the paragraph with id "Time_of_day"
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// ----- Function with if and else statements: even or odd number -----
function get_Reply() {
    // Get the number the user typed in
    var user_input = document.getElementById("userInput").value;
    var reply;

    // If statement: % 2 gives the remainder, 0 means the number is even
    if (user_input % 2 === 0) {
        reply = "You entered an even number!";
    }
    // Else statement: any other remainder means the number is odd
    else {
        reply = "You entered an odd number!";
    }

    // Display the message in the paragraph with id "feedback"
    document.getElementById("feedback").innerHTML = reply;
}

// ----- Shadowing: local x hides global x inside the function -----
var x = 10; // global variable

function Shadow_function() {
    var x = 99; // local variable with the same name
    console.log("Inside the function x is " + x); // 99
}

// ----- Calls that run when the page loads -----
useGlobal();
useLocal();
Shadow_function();
console.log("Outside the function x is " + x); // 10

// Call the function with the intentional error last, so it does not stop the code above
brokenFunction();