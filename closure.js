const counter = () => {
    let count = 0;
    return () => count++;
}

const count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());