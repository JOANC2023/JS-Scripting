const numbers =[1,10, 4, 3, 5, 6];
const orderNumbersAscending =(a,b) => a-b;
const orderNumbersDescending =(a,b) => b-a;
numbers.sort(orderNumbersDescending);


//numbers.sort ((a,b)=>{
  //  if (a>b){
    //    return 1;
    //} 
    //if (a<b) {
     //   return -1;
   // }
    //return 0;

    //});

console.log(numbers);


const names =['pepe','Jaime','Pepe','Lucas', 'Jordi'];
const compareStringsAscending =(a,b) => a.localeCompare(b);
const compareStringsDescending =(a,b) => b.localeCompare(a);

names.sort(compareStringsDescending);
//names.sort();
//console.log(names)
// ahora quiero que se ordene al revés
//names.sort((a,b)=> {
  //  return b.localeCompare(a)
//});
console.log(names)


// y que es un sort de objetos?

const people = [
{name:'pepe', age: 30},
{name:'Jaime', age: 25},
{name:'Pepe',age: 20},
{name:'Lucas',age:31},
{name: 'Jordi',age:34}

];

//people.sort((a,b) =>{
  //  return compareStringsAscending(a.name, b.name);
//});
people.sort((a,b) =>{
    return orderNumbersAscending(a.age, b.age);
})

console.log(people)