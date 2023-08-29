//lexical scope
    //global scope
    // let x = 1;
    // let parentFunction = () => {
    //     //parent has access to global
    //     let y=2;
    //     console.log(x);
    //     console.log(y);

    //     const childFunction = () => {
    //         //child has access to parent as well as global
    //          console.log(x+= 5);
    //          console.log (y+=6);
    //     }
    //     childFunction();
    // }
    // parentFunction();


//closure - a closure is a function having access to the parent scope, even after the parent function has closed
    // let x = 1;
    // let parentFunction = () => {
    //     //parent has access to global
    //     let y=2;
    //     console.log(x);
    //     console.log(y);

    //     const childFunction = () => {
    //         //child has access to parent as well as global
    //         console.log(x+= 5);
    //         console.log (y+=6);
    //     }
    //     return childFunction;   //here we return the child function as output of parent function
    // }

    // let result = parentFunction();  //execute prarentfunction and store result (child function is not executed but is stored)
    // console.log(result);    
    // result();   //execute child function... it still contains access to parent function variable as private variables.
    // result();   //result is a closure that means y's updated value are stored inside result... 
    //             //x is a global variable so its value is not stored inside closure
    // let result2 = parentFunction();
    // result2();

//immediately Invoked Function Expression  
    //everything gets executed once initially  
    //when fn is called only return part gets executed
        // const fun = (()=>{  let parentVar=0;
        //                     return (()=>{parent+=1;});}
        //             )();

//IIFE + closure
    // const privateCounter = (()=>{
    //     let count = 0;  // this is a private variable 
    //     console.log(`initial value: ${count}`);
    //     return (()=>{ count += 1; console.log(`initial value: ${count}`);}) //count can only be accessed by this function
    // })();
    // privateCounter();

   
//closure + parameters
    // const credits = ((num)=>{
    //     let credits = num;  //this private variable can only be accessed by the child fn
    //     console.log(`initial credits value: ${credits}`);
    //     return ()=>{
    //         credits -= 1;
    //         if (credits > 0){
    //             console.log(`credits remaining: ${credits}`);
    //         }
    //         else{
    //             console.log(`no credits left`);
    //         }
    //     }
    // })(3);
    // credits();
    // credits();
    // credits();
    // credits();


//currying

    //this is the type of code we are trying to avoid with currying
        // const sandwich = (ingredient1) => {
        //     return (ingredient2) => {
        //         return (ingredient3) => {
        //             console.log(`here is your ${ingredient1} ${ingredient2} ${ingredient3} sandwich`)
        //         }
        //     }
        // }
        // sandwich('cheese')('potato')('bread');

    //this is a curried code
        // const sandwich2 = ingredient1 => ingredient2 => ingredient3 => {
        //     return `here is your ${ingredient1}, ${ingredient2}, ${ingredient3} sandwich`;
        // };
        // const mySandwich = sandwich2('butter')('paneer')('bread');
        // console.log(mySandwich);

        // //you can add predefined ingredient like bread to this sandwich
        // const breadSandwich = sandwich2('bread');
        // //now u can make cheese butter sandwich and u dont need to add bread
        // const mySandwich2 = breadSandwich('butter')('cheese');
        // console.log(mySandwich2);

    //more curried code
    //     const curryMultiply = x => y => x*y;
    //     //custom function created used a curry function
    //     const tenMultiply = curryMultiply(10);
    //     console.log(tenMultiply(3));

    // // currying - function composition

    //     const addCustomer = fn => (...args) => {
    //         console.log('saving customer info..');
    //         return fn(...args);
    //     }

    //     const processOrder = fn => (...args) => {
    //         console.log(`processing order # ${args[0]}`);
    //         return fn(...args);
    //     }
    
    //     let completeOrder = (...args) => {
    //         console.log(`Order #${[...args].toString()} completed`);
    //     }

    //     completeOrder = (proc)





    //map filter reduce

    // const numbers = [5,7,5,75,55,32];

    // const no57 = numbers.filter((number)=>{
    //     return (number !== 5 || number !== 7)
    // })


    // //


    //////////////deep copy

    let person1 = {name:"messi",skills:function(){}};

    //method 1 - not suitable for nested
    // let person2 = Object.assign({},person1);
    // person2.name = "vivek";

    //method 2 - not fool proof - dosent work with nested obj
    // let person2 = {...person1};
    // person2.name = "vivek"; 

    //method 3 - dosen work with fns (fns are lost, date-object becomes string)
    // let person2 = JSON.parse(JSON.stringify(person1));
    // person2.name = "vivek";

    //method 4
    //



    console.log(person1,person2);