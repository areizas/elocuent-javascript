const createList = (value, rest) =>{
  return {
      value: value,
      rest: rest
  }
};

const arrayToList = array => {
    let list = createList(array.pop());
    array.reverse().forEach( element => {
        list=createList(element,list);
    });
    return list
};

const listToArray = list => {
    let array = [];
    while(list != undefined){
        array.push(list.value);
        list=list.rest;
    }
    return array;
};

const prepend = (value, list) => {

    if(list.rest == undefined){
        list.rest = createList(value);
    } else {
        list.rest = prepend(value, list.rest);
    }
    return list;

};

const nth = (value, list) => {
    if(value==0 || list == undefined){
        return list != undefined ? list.value : undefined;
    } else{
        return nth(value-1, list.rest)
    }
};

const clone = x => JSON.parse(JSON.stringify(x));

const resultList = arrayToList([1,2,3,4,5]);
const resultArray = listToArray(clone(resultList));
const resultList2 = prepend(3,clone(resultList));
const resultArray2 = listToArray(resultList2);
const testNth = nth(4,clone(resultList));

console.log(resultList);
console.log(resultArray);
console.log(resultList2);
console.log(resultArray2);
console.log(testNth);