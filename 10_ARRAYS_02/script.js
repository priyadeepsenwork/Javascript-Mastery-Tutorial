console.log(`Arrays =======================`);

const months = [`January`, `February`, `March`, `April`, `May`, `June`];

//data values and type of data
//console.log(months)
//console.log(typeof months)
//arrays are a type of Object in Javascript

//printing an element
//console.log(months[0])

//changing elements
//months[3] = `Not April LOL`
//console.log(months)

//length of an array
const n = months.length;
//console.log(`Length of the Array is : ${n}`)

//?custom array with different types of variables and data types.

/*
const arr1 = [
    'Apple',
    {
        name: `John`,
    },
    true,
    () => {
        console.log(`A func() inside an Array`)
    }
]

console.log(arr1)
*/

//console.log(`===========================`)

//?LOOPS....not again!

for (let i = 0; i < n; i++) {
  //console.log(months[i])
}

//?MORE ARRAYS!! ============================
//?next chapter

const names = [`John`, `James`, `Spike`, `David`, `Mark`];

//array.push() pushes an element
let string1 = `Jessica`;
names.push(string1);
//console.log(names)
//(6) ['John', 'James', 'Spike', 'David', 'Mark', 'Jessica']

//return type of push()
let x = names.push(`Olivia`);
//console.log()
//output: 7 as push() returns the length of the array when an element is pushed.

//pop() method
let y = names.pop();
//console.log(names)
//console.log(y)
//outputs the value thats deleted, i.e. `Olivia`

//?Array Shift

names.shift();
//console.log(names)
//this basically shifts the array left and deleteing the first value. so the array starts with `James` instead of `John`.

//Array unshift (adds a new value in the start of the array and shifts the array right)
names.unshift(`John`);
//console.log(names)

//!Slice() AND Splice() == Dangerous!!

//splice()
/*
The splice() method of Array instances changes the contents of an array by
removing or replacing existing elements and/or adding new elements in place.

splice(start, deleteCount, item1, item2, item3...... itemN)
*/
console.log(`SPLICE().\nBefore: ${names}`)
names.splice(2, 0, `Lucy`, `Johnny`);
console.log(`After : ${names}`);

//slice()
/*
The slice() method of Array instances returns a shallow copy of a portion of an
array into a new array object selected from start to end (end not included) where
start and end represent the index of items in that array. The original array will
not be modified.
 */
const John = names.slice(0, 1);
console.log(John)

//bro, check video no. 50, array methods
//its f*cking long, but easy to understand

for (let i = 0; i < n; i++) {
  console.log(i, names[i])
}

//?forEach() method

//names.forEach((name, index) => {
//console.log(index + ` - ` + name)
//})

const logTheName = (name, index) => {
  //console.log(index + `-` + name)
};

const result = names.forEach(logTheName);
console.log(result)
//output: undefined
//! forEach() always returns undefined!

/*
Use this when: You want to do something with each element of the array.

Don't use this when: You want to break or stop the loop when some condition is true.

Also: Don't use when you are working with Asynchronous Codes (async code)
*/

/*

let sum = 0
const numbers = [23, 55, 67, -43, 100]

numbers.forEach((number) => {
    sum += number;
})

console.log(sum)

*/

//? EVEN MORE ARR...WAIT..MAPS???

const inventory = [
  { price: 5, name: "Eggs" },
  { price: 4, name: "Chicken" },
  { price: 3, name: "Bread" },
  { price: 5, name: "Oil" },
];
console.log(inventory)
//Array map
//maps returns an object of type array..

const prices = inventory.map((item) => item.price);
//console.log(prices)
/* output: (4) [5, 4, 3, 5] */

const items = inventory.map((item) => item.name);
//onsole.log(items)
/* output: (4) ['Eggs', 'Chicken', 'Bread', 'Oil'] */

//? Array Filter Method
const numbers = [
  23, 55, 67, -43, 100, 32, -24, -111, 0, 94, -322, -3, 11, -78, 1000,
];
//console.log(numbers);

//! filter() doesn't change the original array
const pos_num = numbers.filter((number) => {
  return number >= 0;
});

//console.log(pos_num);

//find() method in array
/*
const find1 = numbers.find((number) => number < 25)

console.log(find1)
*/

//using find and startWith

const states = ["West Bengal", "Assam", "Manipur", "Meghalaya", "Mizoram"];
/*
let find2 = states.find((state) => state.startsWith('M'))

console.log(find2)
*/

//includes() method
//let find3 = states.includes('West Bengal')

//console.log(find3)

//! includes() method is case sensitive

const bookshelf = [
  "Moby Dick",
  "The Tempest",
  "Animal Farm",
  "Pride and Prejudice",
  "David Copperfield",
];
/*
if(bookshelf.includes('moby dick') === true){
    console.log('We have that book')
} else {
    console.log(`We cannot find the book`)
}

*/

//! sort() mutates array itself
//? It does not work as its inteneded to by default.

//? Its a bit more complex.

//? ASCENDING ORDER
numbers.sort((a, b) => a - b);
//console.log(numbers)

//? DESCENDING ORDER
numbers.sort((a, b) => b - a);
//console.log(numbers)

/* CHAT-GPT EXPLANATION
the .sort() method sorts elements in place and by default,
it converts elements into strings and sorts them in 
lexicographical order (like in a dictionary). 
However, when you provide a comparison function, it sorts based 
on the logic inside that function.

For Strings, its normal ASCII values(case sentitive)
For case-insensitive String sorting, use localeCompare(). This is useful when sorting by names etc.
*/


const numm = [1, 2, 3, 4, 5];
//Array SOME
//returns true if some elements passes the test given inside the arrow function

//let greaterThan3 = (number) => number > 3
//console.log(greaterThan3())

//console.log(numm.some((number) => number > 3))


//Array Every
//returns true ONLY-IF all the elements given in the arrow function passes the tests

//console.log(numm.every((number) => number > 3))

const groceryList = [29, 12, 45, 35, 87, 110]


let totalPrice = 0

groceryList.forEach(element => {
    totalPrice += element
});

//console.log(totalPrice)


//!ARRAY REDUCE
//we will perform the same thing as above, sum of the prices!
console.log(groceryList)
const total = groceryList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(total)

