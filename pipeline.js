const  getDir = path =>{
const fs = require('fs');
const files = fs.readdirSync(path);
return files;
}

const filterByText = (text,arr) => arr.filter(v => v.includes(text));

const filterByJS = array => filterByText('.js',array)

const count = array => array.length;



const countJsFiles = path => {
    const files = getDir(path)
    const filterJsFiles = filterByJS(files);
    const countFiles = count(filterJsFiles);
    return countFiles;
}


console.log(countJsFiles('./'));


const pipeTwo = (f,g) =>(...args) => g(f(...args));


const countJsFiles2 = path => pipeTwo(pipeTwo(getDir,filterByJS),count)('./');

console.log(countJsFiles2('./'))

const godPipeLine =(...fns) => fns.reduce((result,f) => (...args) =>f(result(...args)));

const godPipeLine2 =(...fns) => fns.reduce(pipeTwo);



const countJsFiles3 = godPipeLine(getDir,filterByJS,count);
console.log(countJsFiles3('./'));

const countJsFiles4 = godPipeLine2(getDir,filterByJS,count);
console.log(countJsFiles4('./'));
