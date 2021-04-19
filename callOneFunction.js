const person = {
    name:"juan",
    lastName:"dubie"
}

const once  = fn => {
    let done = false;
    return (...args) => {
        if(!done){
            done = true;
            fn(...args);
        }
    }
}

const informar = (name,lastName) => console.log("nombre:",name,"apellido",lastName);

const informarOnce =once(informar)

informOnce(person);
informOnce(person);
informOnce(person);
