// //local storage is persistent
// //if you remove this line the object that was put into local storage can still be retrieved
 // localStorage.setItem("birdobject","yellow bird");//key:value 
//retrieve from storage
// const birdfromstorage = localStorage.getItem("birdobject");
// console.log(birdfromstorage);
//remove from storage
//localStorage.removeItem('bird');

//session storage is exactly the same except the data is lost when we close the tab

//cookies
// document.cookie = 'name=vivek'
// document.cookie = 'class=9c; expires=' + new Date(2050,0,1).toUTCString();
// document.cookie = 'subject=science; expires=' + new Date(2050,0,1).toUTCString();
// console.log(document.cookie);

//-------------------------
 //async
 //console.log("hi");

//GET to retrueve data
//POST to send data
//PUT to update data
//DELETE to delete data


// // //async non blocking request to api
// const request = new XMLHttpRequest();  

// //there are 5 read states 0-unsent,1-opened, 2-headers-recieved, 3-loading, 4-done
// request.addEventListener('readystatechange',()=>{
//     //console.log(request,request.readyState);
//     if(request.readyState === 4 &&request.status === 200){
//         console.log(request, request.responseText);
//     }
// });

// request.open('GET', "https://jsonplaceholder.typicode.com/todoss/");
// request.send();

// console.log("bye");

 
