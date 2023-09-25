import { limite } from './for';
//Creacion de variables

export var variableVar;            //es la màs antigua
let variableLet;            // sustituye a la var
const variableConst = 'Valor predefinido';   // es la màs usada



//Asignacion de variables

variableVar = 'Hola';
variableLet = 'Mundo';

const variableConstAsignanda = 'Hello';

//Vuejs
// const variable = ref('');    //Declaracion
// variable.value = 30;         //Asignacion


//Creacion de  un arreglo o array

let arrayNumero = []; //array vacion
let arraNumeroLleno = [ 20, 30, 40, 50]  //Array con valores


//Creación de objetos
let objetoCarro = {}; //objeto vacio


let objetoCarroLleno = { //objeto con valores
    color: 'blanco',
    marca: 'Fiat',
    puertas: 4
};

//Array de objetos

let arrayObjetos = [{}];//Array objetos vacios


let arrayObjetosLlenos = [
    {
        color: 'red',
        marca: 'Ferrari',
        puertas: 2
    },
    {
        color: 'blue',
        marca: 'udi',
        puertas: 3
    }
];

//Array dentro de objetos

let objetoMesa = {
    medida: [20, 30, 40],
    niveles: [1, 2, 3],
    color: 'negro'
};
console.log(objetoMesa);


//Crear metodo o funcion

function nombreFuncion(nombre, apellido){ //Argumentos
    //Aqui el codigo
}



//crear metodo flecha
const nombreFuncionFlecha = () => { //Argumentos
    //Aqui el codigo
}



//Crear clase
class NombreClase {

    //AQUI LAS PROPIEDADES
    nombre;

    constructor() {

    }

    //AQUI LOS METODOS O FUNCIONES DE CLASE

    nombreMetodo() {

    }
}

//Get i Set

let getVariable // coje el valor de la varriable
let setVariable // almacena el nombre de la variable

let variableGet = getVariable(); 
let variableSet = setVariable('Nuevo valor'); 



//Bucle o iteradores

for(let i = 0; i < 10; i++) {
    //TODO AQUI VA EL CODIGO O LA LOGICA
}

let edad = 10
while(edad < 18) {
    //TODO AQUI VA EL CODIGO O LA LOGICA

    edad++;
}


do {
    //TODO AQUI VA EL CODIGO O LA LOGICA


    edad++;
}while (edad < 16);



