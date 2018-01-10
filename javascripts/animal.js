"use strict";
require('./module-xhr');
// animal.js should be a module.
// This module should have two private arrays to store carnivores and herbivores.
// It should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

let carnivores = [];     // Set the value of the private array
let herbivores = [];    // Set the value of the private array

module.exports.loadCarnivores = (callbackToInvoke) => {
    const loader = new XMLHttpRequest(); //create request
    loader.addEventListener("load", function() { //setup event listeners for completed request
    carnivores = JSON.parse(this.responseText); //turn out json string into a JS object
    
    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke();
    console.log(carnivores);
    });
loader.open("GET", "data/carnivores.json");
loader.send();
};

console.log('carnivores', carnivores);

module.exports.loadHerbivores = (callbackToInvoke) => {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
    // Set the value of the private array
    herbivores = JSON.parse(this.responseText);
});
};



