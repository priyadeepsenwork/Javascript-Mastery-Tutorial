import { dogs, no_of_dogs } from "./dogs.js";

//* ECMAScript 6 Javascript or Simply ES6

/*
const multiply = (x) => {
  return x * x
}

//* console.log(multiply(2))

const add = (a = 0, b = 0, c = 0) => {
  return a + b + c
}

//*console.log(add())

const customer = 'John'

const order = {
  name: `iPad`,
  price: 1000
}

console.log(`The device for ${customer} is : ${order.name}, price : $${order.price}`)

*/

//? Module imports and exports in Javascript

//console.log(`My dogs are: ${dogs} and I have ${no_of_dogs} dogs`)

//* Spread and Rest operator

//Rest operator : ... (3 dots to accept as many arguments from the function call)

/*
const add = (...args) => {
  return args.reduce((acc, val) => acc + val);
};

console.log(add(2, 2, 2, 4, 2, 5));

const numbers = [1, 2, 3, 4, 5, 6];
//* spread => ... (three dots)
console.log(...numbers);

const newNumbers = [...numbers, 7, 8, 9];
console.log(...newNumbers)

! never ever mutate any const variables, its a BAD PRACTICE.


const object = {name: 'John', age: 25}
const object1 = {...object, name: `Jenny`} //* GOOD PRACTICE

 Bad Practice --> object1.name = 'Jenny'

*/

//? ARRAY/OBJECT DESTRUCTURING

const person = {
  firstName: "Priyadeep",
  lastName: "Sen",
  car: {
    color: `Red`,
    brand: `Toyota`,
    wheels: 4,
  },
  animals: {
    dog: {
      name: `Jupiter`,
      age: 3,
    },
    cat: {
      name: `Venus`,
      age: 5,
    },
  },
};

//Destructure Objects : --->
//* Used widely in NodeJS and ReactJs and any other JS  based framework
//* used in frontend and widely in backend
/*
const {
  firstName,
  lastName,
  car: { color, wheels, brand },
  animals: { dog, cat },
} = person;

console.log(firstName);
console.log(dog.name);
*/

//? Array Destructuring

const introduction = [`Hello`, `I`, `am`, `Priyadeep`]
const [greeting, a, b, name] = introduction 
//*much better approach than using array indexes

console.log(name)