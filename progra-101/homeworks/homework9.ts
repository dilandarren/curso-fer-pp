


export function heroesThatStartWhith(nameList: string[], letter: string) {
    letter = letter.toUpperCase();
    let newNameList: string[] = [];

    for( let i = 0; i < nameList.length; i++) {
        let name = nameList[i];

        if (name.startsWith(letter) ) {
            newNameList.push( name )
        }
    }
}


let heroes = [
    'Doom',
    'Dr.stranger',
    'Hulk',
    'she Hulk',
    'Spiderman',
    'Captain Marvel',
];

let herosWhithLetterS = heroesThatStartWhith(heroes, 'D');
console.log(herosWhithLetterS);