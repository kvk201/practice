//initialize
let firstCard = 3;
let secondCard = 11;

let sum = firstCard + secondCard;

if (sum<21){
    console.log("do you want to draw a new card");

}
else if(sum === 21){
    console.log("you've got blackjacked");
}
else{
    console.log("you're over");
}