const student = {
  name: `Priyadeep Sen`,
  sclass: `4th Year`,
  rollno: 41,
};
//console.log(student)

//? Delete a property
//delete student.rollno
//console.log(student)

//getting the length of an object
const array = Object.keys(student);
//console.log(array.length);

/*
?Library
const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach(element => {
    if(element.readingStatus === true){
        console.log(`The reading status of ${element.title} is : True`)
    } else {
        console.log(`The reading status of ${element.title} is : False`)
    }
});

*/


//?Bubble Sort Algorithm in Javascript
/*
const arr = [6,4,0, 3,-2,1]
let n = arr.length
const fun = (arr, n) => {
    let temp
    for(let i = n - 1; i >= 0; i--){
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(fun(arr, n))
*/

//?String Subsets
const string = `Dog`


