const numberArray = [1,2,3,4,5,6,7,8,9]

const sum = (x,y) => x + y;

const total = (array,fn) =>  array.reduce(sum,0);

console.log(total(numberArray,sum));