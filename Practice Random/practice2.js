// Question 1 . sum of 2 numbers
/*
let a = 20, b = 20
console.log(a + b)
*/

//Question: Maximum number in an array
/*
const array = [1,2,3,5,65,7,3,22,1,45]
array.sort((a, b) => a - b)
console.log(array[array.length - 1])
*/

//QUESTION 3: Check if the string is palindrome
//? JavaScript strings are immutable, meaning they cannot be modified directly.

/*
const string = "malayalam"
let rev_str = string.split("").reverse().join("")
console.log(rev_str === string)
*/

//QUESTION 4: function that takes array of numbers
//            and returns a new array with only even numbers
/*
const fun = (number) => {
    return number.filter(num => num % 2 === 0)
}
const array = [1, 4, 5, 32, 2, 17, 9, 0, 100, 200, 3, 77, 323, 64]
console.log(fun(array))
*/

//QUESTION 6: Calculate the factorial of a given number
/*
const factorial = (num) => {
    if(num === 1 || num === 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
const num = 5;
console.log(factorial(num))
*/

//QUESTION 7: given number is prime or not.
/*
const prime_num = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false
    }
    return true
}
const num = 19
console.log(prime_num(num))
*/

//QUESTION: largest element in a nested array

/*
const nested_array = (arr) => {
  let largest = arr[0][0];
  for (let i of arr) {
    for (let j of i) {
      if (j > largest) {
        largest = j;
      }
    }
  }
  return largest;
};
*/

//easier method using flat() function
/*
const nested_array = (arr) => Math.max(...arr.flat())
const arr = [
  [1, 2, 4],
  [4, 6, 2],
  [6, 9, 100],
  [233, 56, 3],
];
console.log(nested_array(arr));
arr.flat()
*/

//QUESTION 9: Fibonacci
/*
const fibo = (n) => {

  if(n === 0) return []
  if(n === 1) return [0]

  let second_last = 0, last = 1
  let res = [second_last, last]
  for(let i = 2; i < n; i++){
    let curr = last + second_last
    second_last = last
    last = curr
    res.push(curr)
  }
  return res
}
const num = 10
console.log(fibo(num))
*/


