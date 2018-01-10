(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let carnivores = [];
let herbivores = [];
console.log(carnivores);

// loadCarnivores = function(callbackToInvoke) {
//   const loader = new XMLHttpRequest();

//   loader.addEventListener("load", function() {
//     // Set the value of the private array
//     carnivores = JSON.parse(this.responseText);

//     // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
//   });
// };

// module.exports = { loadCarnivores };
},{}],2:[function(require,module,exports){
"use strict";

const animal = require("./animal");

function showCarnivores(carnivores) {
  // code that takes the carnovores array and displays it to the DOM
}

function showHerbivores() {}

animal.loadCarnivores(showCarnivores);
},{"./animal":1}]},{},[2]);
