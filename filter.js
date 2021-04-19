const peopleArray = [{name:"juan"},{name:"nico"}]

const nameIsJuan = ({name}) => name ==="juan";

const peopleNameJuan = (array,fn) => array.filter(fn);

console.log(peopleArray);

// output [ { name: 'juan' }, { name: 'nico' } ]
console.log(peopleNameJuan(peopleArray,nameIsJuan))
// output  [ { name: 'juan' } ]