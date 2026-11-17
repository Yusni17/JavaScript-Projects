function printDictionary() {
    var car = {
        brand: "Nissan",
        model: "Qashqai",
        year: 2020,
        color: "Mindnight Blue",
    };
    delete car.year;
    document.getElementById("Dictionary").innerHTML = " Brand: " + car.brand + ", Model: " + car.model;
}
