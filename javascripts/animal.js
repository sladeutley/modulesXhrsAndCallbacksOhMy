"use strict";

// animal.js should be a module.
// This module should have two private arrays to store carnivores and herbivores.
// It should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

let carnivores = [];
let herbivores = [];
console.log(carnivores);

module.exports.loadCarnivores = (callbackToInvoke) => {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);

    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
  });
};

