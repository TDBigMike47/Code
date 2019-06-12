var careful = 3.1;
careful
var careful = 1.3;//watch out
careful
var careful = null; //worst
careful

let price = 120.25;
price
let price = 20.125; //error
price = 110.12
price
price = null;
price

const tax = 0.825;
tax
const tax = 0.825;//Syntax error
tax = 1.25; //TypeError, but jsshell

const sam = { first: 'Sam', age: 2}
sam
const sam ={};
sam.age = 3; //however
sam
sam instanceof 'number';



const greet = 'dude';
greet[0] = 'r'//Strings are inmutable:


const pearl = Object.freeze({ furst: 'pearl', age: 1});
pearl
const pearl = {}//syntaxis error
pearl.age = 3 //note
pearl
