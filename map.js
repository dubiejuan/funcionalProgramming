const peopleArray = [{name:"juan",lastname:"dubie"},{name:"nico",lastname:"pedro"}]

const getField = field => object => object[field];

const peopleNameArray = (array) => array.map(getField('name'));

console.log(peopleNameArray(peopleArray));