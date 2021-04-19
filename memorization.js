const {addTiming} =require('./time')

function fib(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fib(n-2) + fib(n-1);
    }
}


const memorize = fn => {
    let cache = {};
    return x => (x in cache ? cache[x]:(cache[x]=fn(x)));
}

fib = memorize(fib);



const memorize2 = fn => {
    let cache = {};
    return (...args) =>{
        let strX =JSON.stringify()
        return strX in cache ? cache[strX]:(cache[strX]=fn(...args));
    }
}

// const testFib = n => fib(n)

// addTiming(testFib)(45);
// addTiming(testFib)(40);
// addTiming(testFib)(35);

// const testFibMemo = n => fib(n);

addTiming(fib)(35);
addTiming(fib)(45);
addTiming(fib)(100);
addTiming(fib)(1000);