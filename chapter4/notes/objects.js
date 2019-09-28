//------------------------------------------

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

//------------------------------------------

console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

//------------------------------------------

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//------------------------------------------
