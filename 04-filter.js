const animals = [
    {icon:'🐱‍🐉',herb: false},
    {icon:'🐼',herb:true},
    {icon:'🐥', herb: false},
    {icon:'🐯', herb:false},
    {icon:'🐮', herb:true}
];

//const herbAnimals = [];

//for (let i=0; i < animals.length; i++) {
  //  const animal = animals [i];
    //if (animal [i]==='🐼' || animal [i]==='🐮'){
    //herbAnimals.push(animal);
    //}
//}
const herbAnimals = animals.filter((animal)=> {
    const isHerbAnimal = animal ==='🐼' || animal ==='🐮';
        return animal.herb;
        
});
console.log (herbAnimals)
const herbAnimalsIcons = herbAnimals.map((animal)=>{
    return animal.icon;
})
console.log(herbAnimalsIcons);
console.log(`Los animales herviboos son : ${herbAnimalsIcons}`);
