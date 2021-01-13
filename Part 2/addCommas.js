function addCommas(num) {
newStr = num.toString();
newArr = [];

if(newStr.length % 3 === 2){
    newArr.push(newStr.slice(0, 2));  
    for (i = 2; i < newStr.length; i += 3){
        newArr.push(newStr.slice(i, i + 3 ));
    }
} else if (newStr.length % 3 === 1){
    newArr.push(newStr.slice(0,1))
    for (i = 1; i < newStr.length; i += 3){
        newArr.push(newStr.slice(i, i + 3));
    }
} else {
    for (i = 0; i < newStr.length; i += 3){
        newArr.push(newStr.slice(i, i + 3));

}
}

return newArr.join(',');

}

console.log(addCommas(-10));
// module.exports = addCommas;