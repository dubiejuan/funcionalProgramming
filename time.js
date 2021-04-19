const { performance } = require('perf_hooks');

function subtract(a,b){
    b = changeSign(b)
    return a + b
 }
    
function changeSign(c){
    return - c
}
    

const myGet = () => performance.now();


const myPut = (text,name,tStart,tEnd) =>  console.log(`${text} -  ${name}, ${ tEnd - tStart} ms`)

const addTiming =(fn,getTime = myGet,outPut = myPut) => (...args) =>{
    let tStart = getTime();
    try {
        const valueToReturn = fn(...args);
        outPut("normal exit",fn.name,tStart,getTime())
        return valueToReturn
    } catch (error) {
        outPut("error exit",fn.name,tStart,getTime())
        throw error;
    }
}

// subtract = addTiming(subtract)

// subtract(7,5);




module.exports =  {addTiming }