const partialCurryByclosure = (fn,len =fn.length) =>{
    const curryize = (...args1) => (...args2) => {
        const allParams =[...args1,...args2];
        return (allParams.length < len ? curryize:fn)(...allParams);
    }

    return curryize;
}

// const make3 =(a,b,c) => String(100*a+10*b+c)
// const f1 = partialByclosure(make3,undefined,4)
// const f2 =f1(7)
// const f3 = f2(9)


const nonsense =(a,b,c) => `${a}/${b}/${c}`;

console.log(nonsense(10,20,30))
console.log(example(10,20))