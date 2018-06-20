(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        callbackToInvoke(carnivores);
        console.log(carnivores);
    });
    loader.open("GET", "data/carnivores.json"); //tell it to get json file
    loader.send(); //act of getting it
};

console.log('carnivores', carnivores);

module.exports.loadHerbivores = (callbackToInvoke) => {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
    // Set the value of the private array
    herbivores = JSON.parse(this.responseText);
});
};




},{"./module-xhr":2}],2:[function(require,module,exports){
"use strict";
let animal = require('./animal');
console.log('hi');
animal.loadCarnivores();
// In the module-xhr.js file, define two functions that will be executed after each type of animal is loaded that display those animals in your DOM. (Example given below)

// const animal = require("./animal");

// function showCarnivores(carnivores) {
//   // code that takes the carnovores array and displays it to the DOM
// }

// function showHerbivores() {}

// animal.loadCarnivores(showCarnivores);
},{"./animal":1}]},{},[2]);
