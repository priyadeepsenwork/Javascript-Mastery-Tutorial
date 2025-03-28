//! SYNCHRONOUS JAVASCRIPT ========================
/*
const functionOne = () => {
    console.log(`function 1`)

    functionTwo()

    console.log(`Function One, Part 2`)
}

const functionTwo = () => {
    console.log(`function 2`)
}

functionOne()
*/

//? Output:
/*
function 1
function 2
Function One, Part 2
*/

//! ASYNCHRONOUS JAVASCRIPT ========================

/* 
?Asynchronous Javascript is one in which some lines of code take time to run. 
?These tasks are run in the background while the Javascript engine keeps executing other lines of code. 
?When the result of the asynchronous tasks gets available, it is then used in the program.
*/

const functionOne = () => {
    console.log(`function 1`)

    functionTwo()

    console.log(`Function One, Part 2`)
}

const functionTwo = () => {
    setTimeout(() => {console.log(`Function 2`)}, 2000)
    //waiting for console log(2 sec), but JS Engine keeps going on,
    //executing Function One, Part 2
}

functionOne()

