// const cirle = {
//     radius : 1, //properties - hold values
//     location : {
//         x: 1,
//         y: 1
//     },
//     draw : function () {    //methods - define logic
//         console.log('draw');
//     }
// };

// cirle.draw();

//-------------
//factory function
// function createCircle(radius){
//     return {
//         radius, //if radius:radius we can remove ':radius' in es6
//         draw : function () {    
//             console.log('draw '+this.radius);
//         }
//     };
// }//it manufactures circles with a given radius which all have the method draw..
// const circle = createCircle(10);
// circle.draw();

// //constructor function bh
// //we use 1st letter uppercase as naming convention for constructor
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw '+this.radius);
//     } 
// }
// const circle1 = new Circle(1);//'new' 1-create empty obj 2-assign it to circle 3-return it
// const circle2 = new Circle(2);//we dont need return because 'new' returns 
// console.log(circle1,circle2);

// //every js object has constructor property... 
// //that references the function that was used to construct or create that object
// console.log(circle1.constructor);
// console.log(circle.constructor);//uses js inbuild constructor fn
