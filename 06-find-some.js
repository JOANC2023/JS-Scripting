const fridgeFood =['🍉','🍔','🍓','🍌'];

const burguer =fridgeFood.find((food)=> {
    if (food=== '🍔') {
        return true;
}
});
console.log (`de la nevera me cojo:${burguer}`);

const people =[
{name: 'A', age: 11},
{name: 'B', age: 22},
{name: 'C', age: 33},
{name: 'D', age: 44},
];
//const hasPersonOver30 =(peopleArr)= =>{
  //  const personOver30 = peopleArr.find((person)=>{
    //    if (person.age > 30) {
      //      return true;
       // }
//});

  //  return !!personOver30;
//};

//const personOver30 = people.find((person)=>{
  //      if (person.age > 30) {
    //        return true;
      //  }

//console.log(hasPersonOver30(people)); 

const personOver30 = people.some((person)=>{
    if(person.age >30){
        return true;
    }
});
console.log(personOver30)