/*var avinash = 'b';
if(avinash=='a'){
    console.log('hello jii')
}
else{
    console.log('BYE JII');
}

var a=2004;
if(a%4==0){
    console.log('leap year');
}
else{
    console.log('not a leap year')
}

var num = 0;
while(num<=10){
    console.log(num);
    num++;
}
function add(){
    var a=10;
    var b=20;
    var c=a+b;
    console.log(c);
}
function sub(){
    var a=10;
    var b=20;
    var c=a-b;
    console.log(c);
    
}

add();
function add(a,b){
    var total=a+b;
    console.log(total);
    
}
add(20,30);
add(40,30);
add(90,30);


for(let num = 1; num<=10; num++){
let table=12;
//console.log(table +"*" + num +"=" + table*num);
console.log(`${table} * ${num} = ${table*num}`);

}


function sum(){
    let a=10 ,b=20;
    let c=a+b;
    return `sum is ${c}`;
    
}

const sum = () =>{
    let a=10 ,b=20;
    let c=a+b;
    return `sum is ${c}`; 
} 
console.log(sum());

const sum = () =>{
   // let a=10 ,b=20;
    //let c=a+b;
    return `sum is ${(a=10)+(b=20)}`; 
} 

console.log(sum());             
*/

// const sum = () =>`sum is ${(a=10)+(b=20)}`; 
//  console.log(sum()); 


// var avi=["avinashj","kushwhaha","monu","Beast", "avinashj","kushwhaha","monu","Beast" ,"avinashj","kushwhaha","monu","Beast"];
// console.log(avi[3]);
 
// console.log(avi.length);


// var avi=["avinashj","kushwhaha","monu","Beast", "avinashj","kushwhaha","monu","Beast" ,"avinashj","kushwhaha","monu","Beast"]; 


// for (let element in avi){
//     console.log(element);
// }

// for (let element of avi){
//     console.log(element);
// }



var avi=["avinashj","kushwhaha","monu","Beast", "avinashj","kushwhaha","monu","Beast" ,"avinashj","kushwhaha","monu","Beast"]; 


avi.forEach(function(element,index,array){

console.log(element + ": " + index +" :" + array);
});

