"use strict";

//||||||||||||||||||||COding Challenge 1/||||||||
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return console.log(` the current speed is  ${this._speed / 1.6} mi/hr`);
//   }
//   set speedUs(speed) {
//     this._speed = speed * 1.6;
//   }
// }
// const ford = new Car("Ford", 120);
// console.log(ford.speed);

// |||||||||||||||||||| ||||||||||||||||

// ||||||||||||||||||||COding Challenge 1/||||||||
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`the new speed of ${this.make} car is ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`the new speed of ${this.make} car is ${this.speed}km/h`);
// };
// const ev = new Car("EV", 120);
// ev._proto__.chargeTo = function () {
//   battery;
// };

// EV.accelerate();
// EV.brake();

//|||||||||||||||||||| ||||||||||||||||

// const Person = function (firstName, birthYear) {
//   this.birthYear = birthYear;
//   this.firstName = firstName;
// };
// const jack = new Person("Jackso", 1994);
// console.log(jack);
// console.log(jack instanceof Person);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jack.calcAge();
// console.log(jack.__proto__);
// Person.prototype.species = "Homo Sapiens";
// console.log(jack.__proto__ === Person.prototype);
// console.log(jack.hasOwnProperty("firstName"));
// console.log(jack.hasOwnProperty("species"));
// console.log(jack.__proto__.__proto__);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.lastIndexOf(arr));
// console.log(arr.__proto__);
// E|| M A S C R I P T C L A S S E S I N J S |||||
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       alert("you entered full name correctly");
//     }
//   }
//   get fullName() {
//     return console.log(`your name is ${this._fullName} `);
//   }
// // }
// const markos = new PersonCl("Markos Teshome", 2001);
// console.log(markos.__proto__);
// console.log(markos.__proto__ === PersonCl.prototype);

// console.log(markos.fullName);
// console.log(markos);
// const abrham = new PersonCl("Abrham Shiferaw", 2000);
// console.log(abrham.fullName);

/// coding CHallenge 3||||||||||||

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`the new speed of ${this.make} car is ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`the new speed of ${this.make} car is ${this.speed}km/h`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `the new speed of ${this.make} car is ${this.speed} km/h and the charge is ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
console.log(tesla.accelerate());
tesla.chargeBattery(90);
console.log(tesla.accelerate());
console.log(tesla);
