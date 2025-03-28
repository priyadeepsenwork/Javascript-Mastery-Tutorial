console.log(`Arrays =======================`)

const months = [`January`, `February`, `March`, `April`, `May`, `June`]

//data values and type of data
console.log(months)
console.log(typeof months)
//arrays are a type of Object in Javascript

//printing an element
//console.log(months[0])

//changing elements
//months[3] = `Not April LOL`
//console.log(months)


//length of an array
const n = months.length
console.log(`Length of the Array is : ${n}`)

//custom array with different types of variables and data types.

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

console.log(`===========================`)

//LOOPS....not again!

for(let i = 0; i < n; i++){
    console.log(months[i])
}


//MORE ARRAYS!! ============================
//next chapter