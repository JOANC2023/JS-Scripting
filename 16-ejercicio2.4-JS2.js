const car = {name:'Mazda6', itv: [2015, 2011, 2020]};
const {name, itv: itv }= car;
console.log('Name:', name);
console.log('itv:', itv);

const [year1, year2, year3]=itv;
console.log ('ITV Year 1:', year1);
console.log ('ITV Year 2:', year2);
console.log ('ITV Year 3:', year3);


