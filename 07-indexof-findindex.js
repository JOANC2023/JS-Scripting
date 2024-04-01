const animals =['🐯','🐥','🐄','🐱‍🐉', '🐥'];

const indexOfBird = animals.indexOf ('🐥');
console.log (`El primer pollo está en el índice:${indexOfBird}`);

const lastIndexOfBird = animals.lastIndexOf ('🐥');
console.log (`El último pollo está en el índice:${lastIndexOfBird}`);


const people =[
    {name: 'A', age: 30},
    {name: 'B', age: 20},
    {name: 'C', age: 10},
    {name: 'D', age: 40},
    {name: 'C', age: 50},
    {name: 'E', age: 50},
    {name: 'C', age: 51},
        
];

const index = people.findIndex ((person)=>{
if(person.name === 'C' && person.age >= 45 && person.age<=55){
    return true;
}

});

if (index === -1 { 
    console.log (`No hemos encontrado a la persona`);
} else {
    console.log(`La persona está en la posición:`, index);
    console.log(`La persona está en la posición:`, people[index]);
    
}




