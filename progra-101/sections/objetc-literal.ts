
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['Soccer', 'basquetball'],
    toString() {
        let objetString = this.name + '  ' + this.age + '  ' + this.hobbies;
        console.log(objetString);
    }
}


// console.log( person.name.toUpperCase() );
// person.toString();


let car = {
    doors: 5,
    brand: 'honda',
    color: 'white',
    year: 2025,
    gearBox: 'manual'
} 

let smartTv = {
    sizeInches: 90,
    brand: 'Sanmsung',
    year: 2015,
    type: 'Led'
}


let youtubeVideo = {
    lengthMin: 1.5,
    visitas: 2500,
    author: 'Dilan darren',
    comments: ['Buen video, me gusto mucho, el peor video del mundo'],
    likes: 1500,
    dislikes: 100,
}
console.log(car);
console.log(smartTv);
console.log(youtubeVideo);



