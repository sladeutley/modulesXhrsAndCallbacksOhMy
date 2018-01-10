'use strict';

console.log("hi");

// Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.

// animal.js should be a module.
// This module should have two private arrays to store carnivores and herbivores.
// It should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

// In the module-xhr.js file, define two functions that will be executed after each type of animal is loaded that display those animals in your DOM. (Example given below)

// In the animal module invoke the callback function passed in from module-xhr.js after each JSON file is loaded by the XHR request.
// Setup a Gruntfile to execute a Browserify task that will compile your JS into a single file. Remember to include that compiled file, and not the individual JS files, in a script tag in index.html.