export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}


let dilan: Person = {
    name: 'Dilan',
    age: 23462464,
    isActive: false
};

let chopsito = {
    name: 'Chopsito',
    age: 3,
    isActive: false
};

let juan = {
    name: 'Juan',
    age: 32,
    isActive: false
};


let peoples = [ dilan, chopsito, juan];

console.log(peoples);


for( let i = 0; i < peoples.length; i ++ ) {
    let person = peoples[i];
    console.log(person.name + ' ' + person.age);
}






