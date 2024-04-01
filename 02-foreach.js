const numbers = [1,4,6,3,2,1,0,9];

   let count =0;
    //for (let i=0;i <numbers.length;i++) {
    //if(numbers[i] >3) {
    //count += 1;
    //}
//}

//console.log (count);

numbers.forEach ((number, index)=> {
        if(number >3) {
    count += 1;
}
});

console.log (`La cuenta vale: ${count}`);

let evenNumbers =[];
let oddNumbers =[];

    //for (let i=0;i <numbers.length;i++) {
    //if(numbers[i] % 2=== 0){
     //   evenNumbers.push(numbers[i]);
    //}
//}

numbers.forEach((number) => {
    if (number % 2 ===0){
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }

});

console.log ('Even:', evenNumbers);
console.log ('Odd:', oddNumbers);



