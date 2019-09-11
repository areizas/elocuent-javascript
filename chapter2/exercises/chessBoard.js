let result = "";
let currentState = "#";

const changeState = character => {
    if (character === "#") {
        return " ";
    } else {
        return "#"
    }
};

for (let i=1; i<=64; i++){
    currentState=changeState(currentState);
    result+=currentState;
    if(i%8===0){
        result+="\n";
        currentState=changeState(currentState);
    }
}
console.log(result);