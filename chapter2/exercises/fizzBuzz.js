let result = "";

for(let i=1; i<=100; i++){
    if(i%3===0){
        if(i%5===0){
            result+="FizzBuzz "
        }
        else {
            result+="Fizz "
        }
    } else if(i%5===0){
        result+="Buzz "
    } else{
        result+=`${i} `
    }
}

console.log(result);