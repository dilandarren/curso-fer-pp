
export let employees: string[] = ['Fernando', 'Melissa', 'Eduardo'];
export let salaries: number[] = [1500, 2400, 3200];


// if ( people[3] ===undefined) {
//     console.log(people[2])
// }

// console.log(people[1])

// console.log(flowers.length);

// for(let i = 0; i < flowers.length; i++) {
//     console.log(flowers[i])
// }

for( let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let salary  = salaries[i];
    console.log(employee + ' tiene un salario de '+ salary)
}
