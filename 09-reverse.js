
const people =[
    {name: 'A', age: 30},
    {name: 'B', age: 20},
    {name: 'C', age: 10},
    {name: 'D', age: 40},
           
];

const newPeople = people.slice()
newPeople.reverse();
console.log (newPeople);