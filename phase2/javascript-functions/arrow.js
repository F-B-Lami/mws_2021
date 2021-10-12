// What are arrow functions?
// Introduced in ES6 
// Similar to lambda functions
function add(n1, n2)
{
    return n1 + n2;
}

let output = add(10, 5);
console.log(output)

// Arrow function
let arrowAdd = (n1, n2) => n1 + n2;
console.log(arrowAdd(10, 20));

// Use of the "this" key word
let message = {
    name: 'John',
    regularFunction: function(){
        console.log(this);
        console.log('Hello ' + this.name);
    },
    arrowFunction: () => console.log('Hi ' + this.name),

}
message.regularFunction();
message.arrowFunction();

