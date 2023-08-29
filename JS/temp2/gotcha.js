// return{}    //correct
// return      //wrong - because semicolon is optional and js will add semicolon after return if {} not specified
// {

// }


// for(var i=0; i<5; i++){         
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }// print 5,5,5,5,5 because setTimeout actually waits the forloop to finish looping before it calls the settimeout
// //because setTimeout is async fn provided by the browser....
// // and since var is function scoped it will hoist to the global in this case.. hence i=5 at end of loop
// // let will allow variable to be confined to the for block... hence i is created after each loop

// convert any string or boolean value to number by adding '+' in front of it
// console.log(+true);
// console.log(typeof(+true));

// // convert any value to boolean by adding '!' in front of it
// console.log(!"stringgg");   //string is true negation of that is false
// console.log(typeof(!"stringg"));
// console.warn(!!"stringgg"); //double negation of string is true

//access objects
// const bird = {
//     size: "small",
// };
// console.log(bird[size]);    //wrong
// console.log(bird["size"]);  //right
// console.log(bird.size);     //right

// //datatype
// let a=1;    //a is number
// let b=new Number(1);    //b is object
// // a == b is true - but a === b is not true

//in array an array is an object

// function print(...args){    //array of argument is input 
//     args.forEach((arg)=>{
//         console.log(arg);
//     })
//     console.log(typeof(args));  //array has type object
// }
// print(5,3,4,1);

//eval-evaluates expressions inside string 
// const sum = eval('10*10+2');

//call bind apply - to fn inside object
// const greeting = {
//     name : "vivek",
//     greet : function(greeting1, greeting2) { console.log(greeting1 + this.name + greeting2) },
// }
// greeting.greet.call({name:' messi '},'hi','howdy');
// greeting.greet.apply({name:' mess '},["hi","howdy"]);
// const greetAnu = greeting.greet.bind({name:' anu '});    //to create new function by binding object to it.
// greetAnu('oye',"gandu")
// //in array.max dont exist so we can use apply with Math.max
// const arr=[1,3,5,11,2,7,2];
// console.log(Math.max.apply(null,arr));

// THISyemp
// const person = {
//     name: "Alice",
//     greet: function() {
//         setTimeout(function() {
//             console.log("Hello, " + this.name); //this does not have access to person object because it runs on sperate thread and has caller scope
//         }, 1000);
//     }
// };
// person.greet();



// if you write talk.call(xyz)... 
// then inside of talk fn the xyz becomes the 'this' object
//inside of constructor 'this' refers to the object being created

