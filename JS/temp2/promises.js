console.log("hi");
const axiosRequest = require('axios');

//promises are special type of objects in JS that represent the eventual completion or a failure of an async operation + its value
// const response = axiosRequest.get("https://www.boredapi.com/api/activity");//this returns a promise
// response.then((response)=>{
//     console.log(response.data.activity);
// });

// we can also write it like this
// axiosRequest
//     .get("https://www.boredapi.com/api/activity")    //returns a promise
//     .then(response=>{                           //what to do when promise is fulfilled
//         console.log(response.data.activity);
//     })
//     .catch(error=>{                             //if promise fails, returns the error
//         console.log(error.message);
//     });
//

async function getActivity(){
    let response = await axiosRequest.get("https://www.boredapi.com/api/activity");
    console.log(response.data.activity);    //this works because we wait for promise to be completed before moving to this line of code
}
getActivity();










console.log("bye");
