// STRINGS

// const single = 'This is a String'
// const double = "This is a String"

//extended functionality string
//can run javascript inside this string
//using ${}
// let num = 100
// const backtick = `This is a String ${num}`
// console.log(backtick)


/*

let a = 10, b = 20

const sum = (a, b) => a + b;
const differnce = (a, b) => a - b;
const product = (a, b) => a * b;
const division = (a, b) => a / b;

const total = `
The sum is ${sum(a, b)}
The Differnce is ${differnce(a, b)}
The Product is ${product(a, b)}
The Division is ${division(a, b)}
`
console.log(total)

*/


/*
Always get the habit of using
the backticks(``) in Javascript
to avoid unidentified identifier error
in some strings like : 'I'm Javascript'
*/

// const str1 = `Priyadeep Sen`
// let n = str1.length

// console.log(`The first letter is : '${str1[0]}'`)
// console.log(`The Last letter is : '${str1[n-1]}'`)

//lower - upper case
/*
const str2 = 'Donald  Trump is the President of America'
let n = str2.length
const small_str2 = str2.toLowerCase()
console.log(small_str2)

const big_str2 = str2.toUpperCase()
console.log(big_str2)
*/

/*

//substrings -- lets gooo.

//indexOf and last-indexOf
const str1 = `I am an Audiophile. I love high-end Audiophile Headphones.`
console.log(str1.length)
let index = str1.indexOf('Audiophile')
console.log(index)
let last_index = str1.lastIndexOf('Audiophile')
console.log(last_index)


//includes (BEST ONE, REALLY REALLY IMPORTANT IN ADVANCED CONCEPTS)
let exist = str1.includes(`Headphones`)
console.log(exist)

//start-with
let starts = str1.startsWith('I')
console.log(starts)

//similarly ends with
let ends = str1.endsWith('.')
console.log(ends)

*/

//EVEN MORE SUBSTRINGS

//slice
const str1 = `HotDog`
let dog = str1.slice(0, 3)
console.log(dog)
//output: Hot

//split
const str2 = `Priyadeep Sen`
let str2_x = str2.split(' ')
console.log(str2_x)
//output: (2) ['Priyadeep', 'Sen']


const str3 = `test` //tset(reverse)
console.log(str3)
let rev_str3 = str3.split(``).reverse().join()
//split the string in character array, reverse the array, then do join().

console.log(rev_str3)
//output: t,s,e,t

let repeat_str3 = str3.repeat(5)
console.log(repeat_str3)
//output: testtesttesttesttest

const str4 = `  Hello, World!  `
console.log(str4)
//trim() method
console.log(str4.trim())
//trims the string and cleans up the
//spaces in first and last
//VERY IMPORTANT
//required in email input from users
//or other important informations


//exercise

const guestList = 'Our guests are: emma, jacob, isabella, ethan'

//length of the string
const len = guestList.length
console.log(len)

//upperCase guest list
const upperCasedGuestList = guestList.toUpperCase()
console.log(upperCasedGuestList)

//check ETHAN is present or not
const isEthanOnTheList = upperCasedGuestList.includes(`ETHAN`)
console.log(isEthanOnTheList)

//do the substring guest list, only names
let firstAppearanceOfGuest = upperCasedGuestList.indexOf(`EMMA`)
const substringGuests = upperCasedGuestList.substring(firstAppearanceOfGuest)
console.log(substringGuests)

//create an array out of the substring, consisting of names of people on the list
//store it in variable called guests
const guests = substringGuests.split(', ')
console.log(guests)




