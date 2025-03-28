/*
console.log(`OBJECTS ==============================================
Object is an unordered collection of related data in the form of key value pairs.`)
*/

//DOT NOTATION

/*
const person = {
}

person.Jishu = {
  name: 'Jishu Sengupta',
  age: 2,
}

person.Priyadeep = {
  name: 'Priyadeep Sen',
  age: 21,
}

console.log(person.Priyadeep.name)

?SQUARE BRACKET NOTATION
const property = 'Jishu'

console.log(person[property])
*/

/*
const person = {
  name: `Priyadeep Sen`,
  age: 22,
  School: `St. James School`,
  Subjects: `Data Structures and Algorithms`
}

console.log(person.Subjects)
*/

/*
const dog = {
  name: `Fluffy`,
  age: 4,
  Bark: () => {
     return (`Woof Woof!`)
  },

  ! this keyword
  display: function() {
    ? this keyword points to the object dog where it is residing
    console.log(this.name)
    console.log(this.age)
    console.log(this.Bark())
  }
}

console.log(dog.age)
dog.Bark() 
calling the function  from the object

? Here, we are calling the function display()
dog.display()

*/

//? Object.keys() creates an array containing the keys of an object

const employees = {
  boss: `Priyadeep`,
  secretaty: `Jishu`,
  sales: `Sourav`,
  accountant: `Rudranil`
}

const positions = Object.keys(employees)
//?transformed all the keys in the Object and put em' in the array.
//console.log(positions)

//? Object.values() creates an array containing the values of the object

const employee_data = Object.values(employees)
//console.log(employee_data) //prints the data of the objects


//?Object.entries() basically the above two combined but in separate arrays. creates nested array

const Operating_System = {
  name: 'Linux Mint Cinnamon',
  version: 22.1,
  license: 'Open Source',
  DE: 'Cinnamon 6.4.8'
}

const entries = Object.entries(Operating_System)
//console.log(entries)

//Looping through the results
entries.forEach(entry => {
  let key = entry[0] //the keys
  let value = entry[1] //the values of the keys

  //console.log(`${key} : ${value}`)
})


/*
? Object.freeze() prevents any modification to the properties
? and values of an object.
also prevents from being added or removed from an object
*/

const user = {
  username: 'marshall990',
  password: 'marshall@12345'
}

const admin = Object.freeze(user)

admin.password = '11111'
admin.user = 'jishu'

//console.log(admin)

//? Object.seal() similar to freeze but it allows modification
//? of existing values and keys. prevents new properties from
//? being added in the object

const user2 = {
  username: 'marshall990',
  password: 'marshall@12345'
}

const new_user = Object.seal(user2)
user2.username = 'jishu123'
user2.activity = `not saving!` //this is not saved coz seal()
console.log(user2)

//output:
/* {username: 'jishu123', password: 'marshall@12345'} */

