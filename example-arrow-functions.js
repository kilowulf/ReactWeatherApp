//base example
var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function() {
//     console.log('forEach',names);
// });

// //example in es6 with arrow function
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// //another example of a arrow function use
// names.forEach((name) => console.log(name));

// //same -var is declared and assigned 
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

/*this keyword in a anonymous function looses 
its binding, hence a arrow function can be used*/
// var person = {
//     name: 'Aaron',
//     greet: function() {
//         // names.forEach(function (name)
//         names.forEach((name) => {
//             console.log(this.name + ' says hey to ' +name)
//         });
//     }
// };
// person.greet();

/*Challenge - addExpression using the expression arrow function and addStatement which uses the curly braces to return the value*/
function add(a, b) {
    return a+b;
}
console.log(add(1, 3));
console.log(add(9, 0));

//Expression arrow function
var addExpression = (a, b) => a + b;
console.log(addExpression(4, -2));

//Statement arrow function
var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(4, 7));