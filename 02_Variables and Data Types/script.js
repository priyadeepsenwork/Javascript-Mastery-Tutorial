//single line comment

/* 
    Multi Line Comment 
*/

//creating variables const/let/var
let name2 = 'sen'
const name1 = 'Priyadeep'

console.log(name1 + " " + name2)


//===================================

//STRINGS 

const string_name = 'This is a string.. single quotes'
const string_name2 = "This is second_string .. double quotes!"
const string_name3 = `This is third_string .. back-ticks!!`


console.log(string_name)
console.log(string_name2)
console.log(string_name3)

const string_name4 = `${name1 + name2}`
console.log('Backtick string: we can print variables inside the string with ${} <--  here, printing with variable name1 + name 2 -->  ' + string_name4)




// ============== NUMBERS AND OPERATION =======

const decimal_number = 69.99
const whole_number = 999

console.log("whole number : " + whole_number + "  decimal number : " + decimal_number)
console.log("Addition:  " + (decimal_number + whole_number))
//similarly subtraction, multiplication, division etc....

const res = decimal_number / name2
console.log(res)

// ========== BOOLEANS ==================


const bool1 = 13

if (bool1 > 12){
    console.log("Big Boi")
}
else {
    console.log("child!")
}



//====== Null? =========================

let age = null
console.log(age)
console.log(typeof age)

age = 19
console.log(age)

//===== wait...undefined? =============

//undefined --> variable which has not been assigned a value YET.

let age2
console.log(typeof age2)


//===== LETS GOOO OBJECTS!! ==========

//objects are used to store collections of data in a more complex entity

const name5 = 'John'
const age5 = 25
const email = 'john@gmail.com'

const person = {
    name: 'John',
    age: 25,
    email: 'john@gmail.com'
}

console.log(typeof person)

console.log("Below are variables extracted from object person : name and age")
console.log("Name : " + person.name + ", Age: " + person.age )
console.log(`Email: ${person.email}`)



//====== Array? nah, just example ====

const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(typeof arr)
// Miscellenaous ===========

console.log(Date())
console.log(typeof Date())





// STATICALLY TYPES vs DYNAMICALLY TYPED Languages

//Javascript is a dynamically typed language.
//as it can dynamically receive different types of data when its run. so 1 variable can hold different data types of a value at a time



let message = "S.O.S" // string
console.log(message)

message = 69 //number
console.log(message)


message = null //null type
console.log(message)

//================ END ================