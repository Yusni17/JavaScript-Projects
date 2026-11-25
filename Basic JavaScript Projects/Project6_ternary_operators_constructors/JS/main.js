 // ----- Ternary operator -----
// Function that uses the ternary operator
function voteFunction() {
    // Get the age the user typed in
    var age = document.getElementById("Age").value;
    // Ternary operator: condition ? value if true : value if false
    var canVote = (age >= 18) ? "You are old enough to vote!" : "You are too young to vote.";
    // Display the result in the paragraph with id "Vote"
    document.getElementById("Vote").innerHTML = canVote;
}

// ----- Constructor Car -----
// Constructor function that creates Car objects
function Car(make, model, year, color) {
    // "this" refers to the new object being created
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

// Create a new object from the constructor using the new keyword
var myCar = new Car("Toyota", "Corolla", 2018, "Blue");

// Function that displays a value from the object
function showCar() {
    document.getElementById("Car").innerHTML = "My car is a " + myCar.color + " " + myCar.make + " " + myCar.model + " (" + myCar.year + ").";
}

// ----- Constructor Vehicle with new and this -----
// "this" is a placeholder for the new object's values
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// The "new" keyword creates objects from the Vehicle constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Display information about Erik's vehicle
function myFunction() {
    document.getElementById("Keyword_Example").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}


// ----- Nested function -----
// Outer function that contains a nested function
function countFunction() {
    // Variable that belongs to the outer function
    var counter = 0;

    // Nested function: it is declared inside countFunction and can use its variables
    function plusOne() {
        counter += 1;
    }

    // Call the nested function three times
    plusOne();
    plusOne();
    plusOne();

    // Display the result in the paragraph with id "Nested"
    document.getElementById("Nested").innerHTML = "The counter is " + counter;
}

// A function using a ternary operator with input from the browser
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

// A nested function
function add_Strings() {
    var start_string = "Hello";

    // Nested function: it can use start_string from the outer function
    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}