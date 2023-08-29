
let count = 0;
let counterHTML = document.getElementById('counter');
let prevEntriesH3 = document.getElementById("prev-entries");
counterHTML.innerText = count;


//PasCal case use for constructor functions/classes
function Person(name){
    this.name = name;
}

const person1 = new Person('vivek');
const person2 = new Person('messi');

const increment = () => {
    count += 1;
    counterHTML.innerText = count + "😀";
}

function save(){
    prevEntriesH3.textContent += count + ", "
    count = 0;
    counterHTML.textContent = count;
    dummy();
    
}

const dummy = () => {
    console.log('dummy');
}

