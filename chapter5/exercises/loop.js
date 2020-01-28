/*
Your own loop

Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping.
 */

function loop(value,test,body,update){

    while(test(value)){
        body(value);
        value = update(value)
    }

    console.log(value,"Exit, value is negative")
}

const test = v => v >= 0;

const body = v => console.log(v,"Machine is working correctly!");

const update = v => v * (2*Math.random()-Math.random());

loop(2,test,body,update);
