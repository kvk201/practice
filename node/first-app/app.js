function sayHello(){}

//via the global object
console.log(module);//global
global.console.log('hi'); //this works
// window.console.log('hello'); //this does not work
//because window is global object in the browswer not the server

// setTimeout(); //global
// clearTimeout(); //global
// setInterval(); // global - to call a function repeatedly after a delay
// clearInterval(); //global

