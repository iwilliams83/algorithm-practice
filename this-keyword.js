
//I want my dog to bark(), but instead I get an error. Why?
/*
function Dog(name) {
  this.name = name
}

Dog.bark = function() {
  console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
fido.bark()
*/

//missing the word prototype
//
function Dog(name) {
  this.name = name
}

Dog.prorotype.bark = function() {
  console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
fido.bark()

//What's the output of the following code?
// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');
