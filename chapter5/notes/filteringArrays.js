const  SCRIPTS = require('./scripts.js');

///////////////////////////////////////////////////////////////////////////
function filter(array, test){
    let passed = [];

    for (let element of array){
        if(test(element)){
            passed.push(element);
        }
    }

    return passed
}

// console.log(filter(SCRIPTS, script => script.living));
// console.log(SCRIPTS.filter(script => script.direction == "ltr"));

///////////////////////////////////////////////////////////////////////////
function map(array, transform){
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element))
    }
    return mapped
}

// console.log(map(SCRIPTS, scrips => scrips.name));
// console.log(SCRIPTS.map(script => script.name));

///////////////////////////////////////////////////////////////////////////
function reduce(array, combine, start) {
    let current = start;
    array.forEach(element => current = combine(current,element));
    return current
}
// console.log(reduce([1,2,3,4],(a,b) => a+b, 0));
// console.log([1,2,3,4].reduce((a,b) => a+b));

///////////////////////////////////////////////////////////////////////////
// console.log("Longer name length: ",SCRIPTS.map(script => script.name.length)
//     .reduce((previousValue, currentValue) => currentValue>previousValue?currentValue:previousValue)
// );

function characterCounter(script) {
    return script.ranges.reduce((count,[from,to]) => count+to-from, 0);
}
// console.log("Script with bigger number of characters: ",SCRIPTS.reduce((previousValue, currentValue) => characterCounter(currentValue)>characterCounter(previousValue)?currentValue:previousValue));

///////////////////////////////////////////////////////////////////////////

function average(array) {
    return array.reduce((previousValue, currentValue) => previousValue+currentValue)/array.length;
}

// console.log("Average year on living script: ",Math.round(average(SCRIPTS.filter(script => script.living).map(script => script.year))));
// console.log("Average year on not living script: ",Math.round(average(SCRIPTS.filter(script => !script.living).map(script => script.year))));

///////////////////////////////////////////////////////////////////////////
function characterScript(code) {
    return SCRIPTS.filter(script => script.ranges.some(([from,to])=>from<code && to<code));
}

console.log(characterScript(120));
