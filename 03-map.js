const animals = ['🐼','🐦', '🐱‍🐉'];

//const food =[];
const getAnimalFood = (animal) => {
    let food;

    if(animal ==='🐼'){
        food = '🍉';
        } else if (animal === '🐦'){
            food ='🍇';
            } else if (animal ==='🐱‍🐉'){
                food='🍒';
            }
    return food;
}



//animals.forEach (getAnimalFood);

const animalFood= animals.map ((animal)=>{
    const food = getAnimalFood (animal)
    return food;
    
});

console.log(animalFood)


//for (let i=0; i < animals.length; i++) {
  //  const animal = animals [i];

   
    console.log(`Para los animales ${animals}`);
    console.log(`su comida favorita es ${animalFood}`);

