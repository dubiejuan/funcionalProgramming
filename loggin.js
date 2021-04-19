const { exception } = require("console")

//IMPURE
const addLogger = (fn) => (...args) => {
console.log(`Start ${fn.name} : ${args}`)
const valueToReturn = fn(...args)
console.log(`End${fn.name} : ${valueToReturn}`)
return valueToReturn
}




//PURE
const addLogger2 = (fn,logger=console.log) => (...args) => {
    try {
        logger(`Start ${fn.name} : ${args}`)
        const valueToReturn = fn(...args)
        logger(`End${fn.name} : ${valueToReturn}`)
        return valueToReturn
    } catch (error) {
        logger(`End${fn.name} : threw ${error}`)
        throw error;

    }
}


function subtract(a,b){
    b = changeSign(b)
    return a + b
 }
    
function changeSign(c){
    return - c
}
    
subtract = addLogger2(subtract)
    
changeSign = addLogger2(changeSign)
    
let x = subtract(7,5)
    