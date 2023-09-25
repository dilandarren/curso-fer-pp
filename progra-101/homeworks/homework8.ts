export function largestNameOfArray(nameArray: string[]) {


    let largesName = '';


    for(let i = 0; i < nameArray.length; i++){

        let name =nameArray[i];

        if(name.length > largesName.length) {
            largesName = name;
        }

    }

    return largesName;


}



let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xaier'];

let hero = largestNameOfArray(heroes);

console.log(hero);