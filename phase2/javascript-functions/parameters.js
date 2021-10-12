// default parameters
function sayHi(name = "World")
{
    console.log("Hi " + name);
}

sayHi();
sayHi("Boris");

// default parameters followed by regular parameters

function greet(message, name = "World")
{
    console.log(message + " " + name);
}

greet("Hello");
greet("Hello", "Boris");

// rest parameters, send any number of parameters
let g1 = function greet(message, ...names)
{
    console.log(message + " " + "everyone!");
    names.forEach(name => console.log("Hi " + name));
}

g1("Welcome", "Fonyuy", "Boris", "Lami");

// spread operator
let g2 = function greet(n1, n2, n3, n4, ...others)
{
    console.log(n1, n2, n3, n4, others);
}

g2(..."Welcome");
