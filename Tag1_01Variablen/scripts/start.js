"use strict";

function init() {
    let feld = [10,20];
    

    let data = JSON.parse(JSON.stringify(feld));

    data[0] = 100;

    console.log(feld[0]);
    console.log(data[0]);

    let gruss = "Hallo";
    gruss += " Welt";
    let greeting = gruss;

    greeting = "Hello";

    console.log(gruss);
    
}





