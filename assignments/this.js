console.log(this.document === document); // true

console.log(this === window); //true

var myFunction = function() {
  console.log(this);
};
myFunction(); // window

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); //false

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //simple function call  true
console.log(this === window)(
  // true

  // This for IIFE
  function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); //Output

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // simple call function...false

var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod(); //Value Of This

// This refers to the New Instance

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

//This refers to the invoker Object
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === window);
  }
};

user.foo(); // simple function call
let fun1 = user.foo1;
fun1(); // Output true
user.foo1(); // Output false

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // Output 81

var retrieveX = module.getX;
retrieveX(); //Output 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // Output 81

// Call with new constructor

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); //  Name: Paul Adams

person.displayName.call(person2); // Name: Paul Adams


// Guess the output of the following

const a = {
  a: "a"
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// window
obj.getThis();

// window
obj.getThis.call(a);

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obj.getThis2();

// {a: "a"}
obj.getThis2.call(a);

// window
obj.getThis3();

// window
obj.getThis3.call(a);

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obj.getThis4();

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obj.getThis4.call(a);
