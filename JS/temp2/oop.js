//procedural vs OOP

//procedural
// let baseSalary = 1000;
// let overtime = 10;
// let rate = 30;
// function getWage(baseSalary, overtime, rate){
//     return baseSalary + (overtime*rate);
// }
// console.log(getWage(baseSalary,overtime,rate));

//OOP - encapsulate the entire employee into a single object
// let employee = {
//     baseSalary : 1000,  //these are all properties of the employee object
//     overtime : 10,
//     rate : 40,
//     getWage : function() {  //this fn dosent need parameters because it has access to properties of employee object
//         return this.baseSalary + (this.overtime*this.rate);
//     }//less number of parameters in a fn the better
// };
// console.log(employee.getWage());

//class
class Car{
    //static properties
    static totalWheels = 4;

    //dynamic properties
}


