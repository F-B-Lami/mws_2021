// function with no parameters
function greeting()
{
    return "F1: Hello Boris!";
}

let result = greeting();
console.log(result);

// function with one parameter
function greetings(name)
{
    return "F2: Hello " + name + "!";
}

result = greetings("Boris");
console.log(result);


function printAll(){
    for (let i = 0; i < arguments.length; i++)
        console.log(arguments[i]);
}

// print all
console.log("Invocation")
printAll("Fonyuy", "Boris", "Lami");

console.log("Another invocation")
printAll("Boris", "Lami");

// nested function
function g1()
{
    let message = "Hello";
    
    // new scope
    let sayHi = function(){
        message = "Hi";
    };
    sayHi();
    console.log(message);

}
 
g1();

function g2()
{
    let message = "Hello";
    
    // new scope
    let sayHi = function(){
        let message = "Hi";
    };
    sayHi();
    console.log(message);

}

g2();

// var variables don't have block scope
function g3(){
    let message = "Hello";

    if(message == "Hello")
    {
        var count =  100;
    }

    console.log(count);
}

g3();


function g4(){
    let message = "Hello";

    if(message == "Hello")
    {
        let message =  100;
        console.log(message);

    }

    console.log(message);
}

g4();


// Immediately Invoked Function Expressiong (IIFE)
// defining a function and assigning it to a variable

(function (name) {
    console.log("Hello " + name);
})("Person");


// Closures holding on to variables declared in a function 
// Advanced IIFE
// Sending in function by pass scopes
function setUpCounter(val){
    return function counter(){
        return val++;
    }
}

let counter1 = setUpCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setUpCounter(10);
console.log(counter2());
console.log(counter2());