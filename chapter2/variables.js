//Basic operation with variables
let variable = 1;
let num1 = 1, num2 = 2;
let sum = num1 + num2;

//Creating a function
const spacer = number => {
    let string = "";
    for(let i = 0; i<number; i++) {
        string += "-";
    }
    return string
};

//Operations with variables and variable injection on array
console.log(spacer(50));
console.log("variable value: " + variable);
console.log(`The sum of num1: ${num1} ans num2: ${num2} is equals to ${sum}`);
console.log(spacer(50));

//var and const
var name = "Mateo";
const greeting = "Hello ";
console.log(greeting + name);

//Correct way to name variables
console.log(spacer(50));
const rules = (ruleNumber, message) => {
    console.log(`Rule #${ruleNumber}: ${message}`)
};
rules(1, "Variables could be name with letters and numbers, but never have to start with a number.");
rules(2, "Variables should be named with low camel case.");
rules(3, "Don't use reserved words like: \n\t\tbreak case catch class const continue debugger default\n" +
    "\t\tdelete do else enum export extends false finally for\n" +
    "\t\tfunction if implements import interface in instanceof let\n" +
    "\t\tnew package private protected public return static super\n" +
    "\t\tswitch this throw true try typeof var void while with yield");

