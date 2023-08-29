const express = require('express');
const {readFile} = require('fs').promises;

const app = express();

//app endpoints 
app.get('/',async(request,response)=>{
    const file = await readFile('./home.html','utf-8');
    response.send(file);
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('app available on port 3000');
})