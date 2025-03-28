//? The new {} keyword creates a new object

/*
const person = {} //an object
const person1 = new Object()

const arr = [1,2,3] //an array
const arr1 = new Array(1,2,3)

person.firstName = `Jishu`
person1.firstName = `Priyadeep`

console.log(person)
console.log(person1)

?where to use new keyword? --> DATES!

*/

/*
const myDate = new Date()
console.log(myDate)

//examples

console.log(Array)
console.log(Object)
console.log(Number)
console.log(Date)


const arr = [1,2,3,4,5] //! literal Syntax
arr.push(6) //this is a method too
arr.pop(6) // this is a method
arr.slice('') //this is a method too
console.log(arr)

*/

// New Boss! 


//! this() keyword: Boss has appeared!
/*
function Sentence(words) {
  this.words = words
  console.log(this)
}
*/

//const string1 = new Sentence(`This is a sentence.`)

/*
const person = {
  name: `Lion`,
  getName() {
    console.log(this) //this points to object person
  },
  age: 21
}

person.getName()

*/

//============================
/*
function Car(color, brand, wheels) {
  this.color = color
  this.brand = brand
  this.wheels = wheels

  console.log(this)
}

const blueCar = new Car('blue', 'BMW', 4)
const redCar = new Car('red', 'Ferrari', 4)
*/


//! CLASSES -- not modern enough

/*
const person = {
  name: `Lion`,
  age: 21,
  student: true
}

class Person {
  constructor(name, age, student) {
    this.name = name
    this.age = age
    this.student = student
  }
}

const user = new Person(`Jishu`, 22, true)
const user2 = new Person(`priyadeep`, 22, true)
console.log(user)
console.log(user2)

*/

//! using modern functions

const createPerson = (name, age, isStudent) => {
  const userSchema = {
    name,
    age,
    isStudent
  }

  return userSchema
}

const user1 = createPerson('Priyadeep', 21, true)
console.log(user1)

//! EVEN SHORTER --->

const createCar = (brand, model, year) => ({brand, model, year}) 
//? 1 line object declaration & return using functional programming.

const car1 = createCar('BMW', 'M5 competition', 2024)
console.log(car1)
const car2 = createCar('Mercedes', 'S Class', 2021)
console.log(car2)
