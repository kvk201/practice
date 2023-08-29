//declare event emitter
const {EventEmitter} = require('events');
const ee = new EventEmitter();

//listening to lunch event and firing callback fn if that occurs
ee.on('lunch',()=>{
    console.log('lunch event occured');
}); 

//emitting an event
ee.emit('lunch');
ee.emit('lunch');




// global processes

//x = process.env.USER;
console.log(process.platform);



// node is an asyncronous event driven JS runtime

// allows node js to push intensive operations to a seperate thread 
// only fast non blocking events happen on the main thread
// hence node is called non blocking - design choice makes nodejs suitable for sw that require high throughput (realtime apps, web servers)

// event emitter - eg. request hitting the server
// event listener - server.on('request'..) is a listener which listens to the above event
// callback fn -   server.on('request', (req,res)=>{   //do something   }) - the fn here is the callback fn which executes after listening
// ** the above 3 combine to create the OBSERVER DESIGN PATTERN ** it is designed to react rather than to call.

// process.on('exit', function(){

// })

