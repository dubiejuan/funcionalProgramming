const compositeTwo = (f,g) =>(...args) => f(g(...args));

const comositeAll =(...fns) => fns.reduce(compositeTwo);

const peopleArrray  =[{name:"juan",balance:-10},{name:"nico",balance:-20},{name:"walter",balance:110}];

const getField = field => object => object[field];

const peopleBalanceArray = (array) => array.map(getField('balance'));

const sum = (x,y) => x + y;

const sumBalance = (array) => array.reduce(sum,0);

const getPeopleBalance = compositeTwo(sumBalance,peopleBalanceArray)

const addIVA = (balance) => balance * 1.21;

const getPeopleBalanceWithIVA = comositeAll(addIVA,sumBalance,peopleBalanceArray)

console.log(getPeopleBalance(peopleArrray))

console.log(getPeopleBalanceWithIVA(peopleArrray))


const getPeopleBalanceDeclarative = (people) =>{
    const balance = peopleBalanceArray(people);
    const balanceSum =  sumBalance(balance)
    const balanceSumWithIVA = addIVA(balanceSum);
    return balanceSumWithIVA;
}

console.log(getPeopleBalanceDeclarative(peopleArrray))



