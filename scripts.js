"use str ict";
const Person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};
const jack = new Person("Jackso", 1994);
console.log(jack);
console.log(jack instanceof Person);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jack.calcAge();
console.log(jack.__proto__);
Person.prototype.species = "Homo Sapiens";
console.log(jack.__proto__ === Person.prototype);
console.log(jack.hasOwnProperty("firstName"));
console.log(jack.hasOwnProperty("species"));
console.log(jack.__proto__.__proto__);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.lastIndexOf(arr));
console.log(arr.__proto__);
