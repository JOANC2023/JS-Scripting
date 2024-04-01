const cities = [
    {isVisited : true, name: 'Tokio'},
    {isVisited : false, name: 'Madagascar'},
    {isVisited : true, name: 'Amsterdam'},
    {isVisited : false, name: 'Seul'},
];

const visitedCities = cities.map (city=> {
    if(city.isVisited){
        return {...city, name:`${city.name} (Visitado)`};
    } else {
        return city;
    } 
});  

console.log(visitedCities);
