const {readFile, readFileSync} = require('fs');//fs is a module i.e. code that can be exported

// sync = blocking = syncronous
const txt = readFileSync('./hello.txt','utf-8'); //need to finish all of this work before proceeding
console.log(txt);
console.log('do this asap');

// non-blocking
const txt2 = readFile('./hello.txt','utf-8',(err,txt)=>{
    console.log(txt);
});
console.log('do this asap');

// using promises
const {readFile:readFile2} = require('fs').promises;
async function readTxt(){
    try{
         const txt3 = await readFile2('./hello.txt','utf-8');
         console.log("txt3:"+txt3);
    }
    catch(error){
        console.error('Error reading file:', error);
    }
}
readTxt();