// context, the this (defines where a function is called)
// new keyword creating of a contructor

// call, use for list of separate arguements
let person1 = {name: "John", age: 22};
let person2 = {name: "John", age: 22};

let greeting = function(message, parameter2){
    console.log(message, ", ", this.name);
}

greeting.call(person1, "Hi") //  function in person1 context
greeting.call(person2, "Hello")  //  function in person2 context

// apply
let greet = function(message, parameter2){
    console.log(message + parameter2, ", ", this.name);
}
greet.apply(person1, ["Good ", "Morning"]) //  function in person1 context


// bind, create a new copy of a function and change the context
let p = {
    name: "Mary",
    getName: function(){ return this.name;}
}

console.log(p.getName());

// bind
let getCopyName = p.getName.bind(person2);

// log binded function
console.log(getCopyName());

// built in functions
let x = 1;
let y = 2;
console.log(eval('x + y'));

let s = 'abc'
console.log(eval('x + y + s'));

// parseInt(number, base), parseFloat, escape, unescape
console.log(parseInt(45, 16));
console.log(parseInt("s4s5", 16));

console.log(escape(' '));

console.log(unescape('%20'));