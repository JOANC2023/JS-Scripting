const streamers =[
    {name:'Rubius', age:43, gameMorePlayed: 'Minecraft'},
    {name:'Ibai', age:25, gameMorePlayed: 'League of Legends'},
    {name:'Reven', age:43, gameMorePlayed: 'League of Legends'},
    {name:'AuronPlay', age:33, gameMorePlayed: 'Among Us'}
];

const streamersLeagueOfLegends = streamers.filter(streamer=>
    streamer.gameMorePlayed === 'League of Legends');
    console.log(streamersLeagueOfLegends);
    
 const streamersWithLetterU = streamers.filter (streamer => 
    streamer.name.includes('u'));
    console.log(streamersWithLetterU);
       
const filteredStreamers = streamers.filter (streamer=>{
    return
    streamer.gameMorePlayed.toLocaleLowerCase().includes ('Legends') && streamer.age >35);
}).map(streamer =>...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
}));

console.log(filteredStreamers);
