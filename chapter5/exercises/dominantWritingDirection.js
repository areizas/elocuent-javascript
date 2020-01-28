/*
Dominant writing direction

Write a function that computes the dominant writing direction in a string of
text. Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy func-
tions defined earlier in the chapter are probably useful here.
 */

let SCRIPTS = require('../notes/scripts');

let numberOfScriptsPerDirection = [];
let directions = ['rtl','ltr','ttb'];

directions.forEach( (direction, index) =>
    numberOfScriptsPerDirection[index] = SCRIPTS.filter(el => el.direction == direction).length
);

let maxi = Math.max(...numberOfScriptsPerDirection);
console.log(directions[numberOfScriptsPerDirection.indexOf(maxi)]+" is the dominant writing direction with "+maxi+" scripts");
