const users =[
    {id:1, name:'Abel'},
    {id:2, name:'Julia'},
    {id:3, name:'Pedro'},
    {id:4, name:'Amanda'}
];

const modifiedNameUsers = users.map (user => {
    if (user.name.startsWith('A')) {
        return {...user, name:'Anacleto'};
    } else {
        return user;
    }
});
console.log (modifiedNameUsers);
    
    