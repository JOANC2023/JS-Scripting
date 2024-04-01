const streamers =[
    {name:'Rubius', age:43, gameMorePlayed: 'Minecraft'},
    {name:'Ibai', age:25, gameMorePlayed: 'League of Legends'},
    {name:'Reven', age:43, gameMorePlayed: 'League of Legends'},
    {name:'AuronPlay', age:33, gameMorePlayed: 'Among Us'}
];

const filteredStreamers = streamers.filter (streamer=>{
    return   
streamer.gameMorePlayed.toLowerCase().includes('Legends') && streamer.age >35;
}).map(streamer =>({
    ...streamer,
     gameMorePlayed:
 streamer.gameMorePlayed.toUpperCase()
 
}));

console.log(filteredStreamers);
