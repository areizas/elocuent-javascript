/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
 */

const generateArrays = n => {
    let arrays = [];

    for (let i=0;i<n;i++){
        arrays.push([i,i,i,i,i])
    }

    return arrays
};

let arrays = generateArrays(10);

let flatten = arrays.reduce((prev,current)=>prev.concat(current));

console.log(arrays);
console.log(flatten);