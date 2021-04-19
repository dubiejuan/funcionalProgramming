const number = ["123.45","-67.9","90"]

const result = number.map(x => parseInt(x));

console.log(result);

const unary = (fn) => (...args) => fn(args[0])


const result2 = number.map(unary(parseInt));

console.log(result2);

const unary2 = (fn,n) => (...args) => fn(args.slice(0,n));


const result3 = number.map(unary2(parseInt),1);

console.log(result3);