// //HOC
// const both = (x,y) =>square(multiply(x,y));

// const ans = both(2,2);
// console.log(ans)
// -----------------------

// function tripleCall(func) {
//     func();
//     func();
//     func();
// }

// function fight(){
//     console.log('fight!');
// }

// tripleCall(fight);

// -----------------------

// function greetingCreator(greeting){
//     return function(name){
//         console.log(greeting + name);
//     }   
// }

// const formalGreeting = greetingCreator("hello! ");
// const informalGreeting = greetingCreator("wassup! ");

// formalGreeting('bob');
// informalGreeting('bob');
// informalGreeting('bill');

// greetingCreator('hi ')('tom')

//--------------------------

//this references the caller
// console.log(this);  // references window

//-------------------------------
//function expression are made to stop hoisting
// function uncoolFunction() {return x*1;}
// const coolFunction = (x) => x*3;
// const coolerFunction = x => x*6;
// //--------------------------------


//array helpers
//for each does task for each item - but does not return an array

// let flavors = ["Strawberry", "cherry", "peach", "banana"]

// flavors.forEach(function(flavor){
//     console.log(flavor+"!");
// })

// let flavors = ["Strawberry", "cherry", "peach", "banana"]
// let foods = ["yogurt", "milk","ice cream"]


// foods.forEach(function(food){
//     flavors.forEach(function(flavor){
//         //console.log(flavor+" "+food);
//         console.log(`${flavor}  ${food}`);
//     })
// })
// //-------------------------------------------------

// let stock = [
//     { flavor: "cherry yogurt",
//       quantity: 10},
//     { flavor: "cherry milk",
//     quantity: 12},
//     { flavor: "cherry ice cream",
//     quantity: 0},
//     ]

// let empty = []

// function restock(){
//     stock.forEach((item) => {
//         if(item.quantity===0){
//             empty.push(item);
//             item.quantity+=3;
//         }
//     });
// }

// restock();
// console.log(empty);
// console.log(stock);
//--------------------------------------------------
//map

// let stock = [
//     { flavor: "cherry yogurt",
//       quantity: 10},
//     { flavor: "cherry milk",
//     quantity: 12},
//     { flavor: "cherry ice cream",
//     quantity: 0},
//     ]

// const newStock = stock.map((item)=>{
//     return {
//         flavor:item.flavor.toUpperCase(),
//         quantity: item.quantity*2
//     }
// })
// console.log(newStock);

//-----------------------
//spread and rest

// const sum = (...numbers) => {
//     let sum = 0;
//     numbers.forEach(number => {sum = sum + number});
//     return sum
// }

// console.log(sum(1,3,2,30));


// const triple = (...numbers) => {
//     return numbers.map(number => number*3);
// }

// console.log(...triple(1,3,2,3,9,2,3));


// const num1 = [1,23,12,5,6,343,1]
// const num2 = [55,23,6785,1236,3,32,2,224,223]
// const num3 = [...num1, ...num2]

// console.log(num3)

//----------------------
//destructuring
// let cake ={
//     flavor:"choclate",
//     size:"M",
//     price: 5.99
// }
// // {flavor,size,price} - this is object destructuring
// function cakeInfo({flavor,size,price}){
//     console.log(`${flavor} cake of size ${size} costs ${price}`)
// }
// cakeInfo(cake);

//-------------------filter map reduce

// const arr = [4,5,33,62,47,88];

// const arr2 = arr.filter(item => item%2 === 1)
//                 .reduce((result,item)=>(result*item),1);
// //if you dont put initial result in reduce its going to be first item in the array


// console.log(arr2);