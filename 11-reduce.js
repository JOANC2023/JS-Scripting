numbers =[1,2,3,4,5];

//let sum =0;
//numbers.forEach((number) => {
  //  sum+= number;
    
//});

const sum= numbers.reduce((acc, next)=>{
console.log(acc,next);
return acc+next;
});

console.log (sum);

const words = ['Hola','que','tal','?'];
//words.join(' ')

const sentence = words.reduce ((acc,next)=>{
    console.log (acc,next);

    return `${acc} ${next}`
});
console.log (sentence);

const animals = [
    {icon:'🐱‍🐉',herb: false},
    {icon:'🐼',herb:true},
    {icon:'🐥', herb: false},
    {icon:'🐯', herb:false},
    {icon:'🐮', herb:true}
];

const herbAnimals = animals.reduce((acc,next)=>{
    if(next.herb){
        return;
    }
    
},[]);