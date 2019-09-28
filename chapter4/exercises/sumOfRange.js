const sum = array => {
    let result = 0;
    array.forEach(element => result+=element);
    return result;
};

const range = (from,to,step=1) => {
    let array = [];
    if(from<to){
        for(let i=from; i<=to;i+=step){
            array.push(i)
        }
    } else{
        for(let i=from; i>=to;i+=step){
            array.push(i)
        }
    }
    return array
};

console.log(sum([1,2,3,4,5]));
console.log(sum(range(1,5)));