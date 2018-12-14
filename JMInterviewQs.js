let n = prompt('1. Write a program that outputs the string representation of numbers from 1 to n.', 'Please provide n')
while (n == ""){
    alert('Please provide n')
    n = prompt('Please provide n')
}

for (let i = 1 ; i <= n; i++) {
    if(i % 3 === 0 && i %5 === 0){
        console.log("FizzBuzz")
    } else if(i % 3 === 0 ){
        console.log("Fizz")
    }else if(i % 5 === 0 ){
        console.log("Buzz")
    } else {console.log(i.toString())}
}

let reverseString = prompt('2. How would you reverse a string?', 'Please provide a string')
while (reverseString == ""){
alert('Please provide a string')
reverseString = prompt('Please provide a string')
}
let stringArr = reverseString.split("")
let reverseArr = stringArr.reverse()
let reversedString = reverseArr.join("")
/*
Or...
let reversedString = reverseString.split("").reverse().join("")
*/

alert(`Here is your reversed string - ${reversedString}`)

alert('3. Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).')

function getRandomNum(max) {
    return Math.ceil(Math.random()* Math.ceil(max) + 1)
  }

let numArr = new Array(getRandomNum(n)).fill(null);

numArr = numArr.map (() => (Math.floor(Math.random() * n) + 1))
alert(`Starting array - ${numArr}`)

const topThree = (arr) => {
    let output = [0,0,0]
    if (arr.length < 3){
        output = arr.sort
    } else {
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < output.length; j++){
                if(arr[i] > output[j]){
                    output.splice(0,0,arr[i])
                    output.pop()
                    break;
                }
            }
        }
    }
    return output  
}
alert(`Here is the sorted array - ${topThree(numArr)}`)
alert('Question 4...I cannot do')
alert('5. Is there a difference between null and undefined values?')
alert('Yes. null is the result of calling something that has been declared but had no value assigned to it. undefined occurs when referencing something that has not been declared yet')
alert('6. What is the difference between double equals and triple equals?')
alert('== will compare just the value where === will compare the value and the type')
alert('eg 5 == "5" would be true but 5 === "5" would be false')
alert('7. What is your QA process or testing process within the team when writing clean JavaScript code in an extension or just in general (open interpretation)?')
alert('Due to just starting out in my JavaScript career, I have not touched on testing just yet')