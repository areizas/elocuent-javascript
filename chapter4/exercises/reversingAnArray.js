const reverseArray = array => {
  let result = [];
  let len = array.length;
  for(let i = 0; i<len; i++){
      result.push(array.pop())
  }
  return result;
};

const reverseArray2 = array =>{
    let result = [];
    let len = array.length;
    for(let i = 0; i<len; i++){
        result.unshift(array.shift());
    }
    return result
};

console.log(reverseArray([1,2,3,4,5,6,7]));
console.log(reverseArray2([1,2,3,4,5,6,7]));
