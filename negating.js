const peopleArrray  =[{name:"juan",balance:-10},{name:"nico",balance:-20},{name:"walter",balance:110}];

const isNegativeBalance = ({balance}) => balance <= 0;

const notDeliquent = (people) => people.filter(isNegativeBalance);

console.log(notDeliquent(peopleArrray));


//negating function
const not = fn =>{
   console.log(fn.name); 
   return  (...args)  => {
       console.log(...args)
    return !fn(...args);
   }
} 



const notDeliquentUpgrade = (people) => people.filter(not(isNegativeBalance));

console.log(notDeliquentUpgrade(peopleArrray));


