///Function that builds a sentence using the += operator
function buildSentence() {
    // Start with the firts part of the sentence
    var sentence = "I am learning JavaScript";
    // Use += to add more text to the end of the same variable
    sentence += " and I am building functions.";
    sentence += "This text was added with the += operator!";
    // Use document.getElementById to display the result in the paragraph with id "output"
    document.getElementById("output").innerHTML = sentence;
}

var multiply = function(a,b) {
    return a * b;
    
}