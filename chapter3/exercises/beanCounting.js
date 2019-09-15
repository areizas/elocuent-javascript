const countChar = char => {
    return string => {
        let counter = 0;
        for(let i=0; i< string.length; i++){
            if(char == string[i]){
                counter++;
            }
        }
        return counter;
    }
};

countBs = countChar("B");
console.log(countBs("aBssaBBs"));