//Primitive Values: Number, String, Boolean
//Complex Values : Objects, Arrays

/*
let x = 1
let y = x //1
x = 2 // y is still 1
console.log(x + " " + y) // 2 1

let firstPerson = `Priyadeep`
let secondPerson = `Sen`
firstPerson = `Jishu`
console.log(firstPerson + " " + secondPerson)
*/

//! Javascript fucks up references a lot. That's how it works!

/*
const animals = [`dogs`, `cats`];
const otherAnimals = animals;

animals.push(`Llama`); //other animals is still same? wait what?

console.log(animals); // ['dogs', 'cats', 'Llama']
console.log(otherAnimals); // ['dogs', 'cats', 'Llama']



const Person = {
  firstName: `Priyadeep`,
  lastName: `Sen`,
}; //#123asd <- location in the memory

const otherPerson = Person; // we pointed to #123asd -> Person

Person.firstName = `Jishu`

console.log(Person) //{firstName: 'Jishu', lastName: 'Sen'}
console.log(otherPerson) //{firstName: 'Jishu', lastName: 'Sen'}

*/

//! Person and otherPerson points in the 'SAME' location in the memory.
/*
const person = {
  name: `John`,
};

const otherPerson = {
    name: `John`
};
*/
//console.log(person === otherPerson) //!false
//?the above two objects are `COMPLETELY DIFFERENT`.
//? they have no link to each other. Its just that their values are same!

/*

?Array Spread()

const numbers = [1,2,3,4,5] //same reference
const copy_numbers = numbers //same --> numbers
console.log(...numbers)

 output: 1 2 3 4 5

?de-spreading 
const numbers2 = [ ... numbers] //shallow clone, different.
console.log(numbers2)

console.log(numbers2 === numbers)

numbers.push(6)
console.log(numbers + " | " + copy_numbers)



?Array Slice()

const new_numbers = numbers2.slice()
console.log(new_numbers)

*/

//Cloning Objects
/*
const person = { name: 'John', age: 21}
const otherPerson = {...person}
const otherPerson = Object.assign({}, person)
? Both the above are same

person.age = 22

console.log(person)
console.log(otherPerson)
*/

//? Deep Cloning concept


const person = {
    firstName: `Priyadeep`,
    car: {
        brand: `Toyota`,
        color: `Orange`,
        wheels: 4
    }
}

const person2 = {...person}
person2.firstName = `Jishu`
//person2.car.color = `black` //wait what? why did my car color change too?
//! car is also an object inside object person. It has its own reference.

//the fix:
const person3 = {...person, car: {...person.car}}
//! only works at two levels, no more nested.

//console.log(person)
//console.log(person3)


//? JSON Stringify method : json.stringify
/*
const person4Stringified = JSON.stringify(person) //convert the object to type string
const result = JSON.parse(person4Stringified) //reconvert the string/parse it to an object type
*/
//in one line
const person4Stringified = JSON.parse(JSON.stringify(person))

//console.log(person4Stringified)

person4Stringified.firstName = 'Sourav'
person.firstName = 'Jishu'
person.car.wheels = 8

console.log(person)
console.log(person4Stringified)

//========= END