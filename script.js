// 1. Write a program that displays current date and time in
// your browser.

// function displayDateTme(){
//     let now = new Date()
//     const dateTime = now.toLocaleString()
//     console.log(dateTime)
// }

// displayDateTme()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.



// function greeting(firstName, lastName) {
//     let fullName = firstName + " " + lastName
//     console.log("Hello " + fullName)
// }

// greeting("Jashwant", "Chohan")



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(num1, num2){
//     const sum = num1 + num2
//     console.log(sum)
// }

// sum(2, 2)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// let num1 = parseFloat(+prompt("Enter first number"))
// let num2 = parseFloat(+prompt("Enter second number"))
// let operator = prompt("Enter operator like + , - , / , * ")

// function Calculator(num1, num2, operator){
//     let result 
//     if(operator === "+"){
//         result = num1 + num2
//     }else if(operator === "-"){
//         result = num1 - num2
//     }
//     else if(operator === "/"){
//         result = num1 / num2
//     }
//     else if(operator === "*"){
//         result = num1 * num2
//     }
//     else {
//         alert("Invalid numbers or operator")
//         return
//     }

//     return result
// }
// let result = Calculator(num1, num2, operator)
// console.log(result)

// document.write(`The result of your input is ${result}`)


// 5. Write a function that squares its argument.

// function squareRoot(number) {
//     return number * number
// }

// let no = parseFloat(+prompt("Enter a number to square"))
// let result = squareRoot(no)
// document.write(`Your square root of given number is ${result}`)
// console.log(result)

// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//     if (num < 0) {
//         return "factorial is not defined for negative no "
//     }
//     let result = 1
//     for (i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result
// }

// let no = +prompt("Enter no take factorial")
// let result = factorial(no)
// document.write(`Factorial of a number is ${result}`)


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(num1, num2) {
//     document.write(`The counting from ${num1} & ${num2} is `)

//     for (i = num1; i <= num2; i++) {
//         document.write( i," ")
//     }

// }

// let num1 = parseFloat(+prompt("Enter starting number "))
// let num2 = parseFloat(+prompt("Enter ending number "))
// let result = counting(num1,num2)


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Page 2 of 4
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular){

//     function calculateSquare(number){
//         return number * number
//     }

//     let baseSquare = calculateSquare(base)
//     let perpendicularSquare = calculateSquare(base)

//     let sumOfSquare = baseSquare + perpendicularSquare

//     let hypotenuse = Math.sqrt(sumOfSquare)

//     return hypotenuse
// }

// let base = 3
// let perpendicular = 4
// let hypotenuse = calculateHypotenuse(base, perpendicular)
// console.log("hypotenuse ", hypotenuse)


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateTriangle(width, height) {
//     area = width * height
//     return area
// }

// Arguments as value
// console.log("area of triangle",calculateTriangle(4,5)) 


// Arguments as variables
// let width = 3
// let height = 4
// let areaOfTriangle = calculateTriangle(width, height)
// console.log("area of triangle", areaOfTriangle)


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function reverseStr(str) {
//     return str.split("").reverse().join("")
// }

// let input = "racecar"
// let reverseInput = reverseStr(input)

// if(input === reverseInput){
//     console.log("its a palindrome")
// }else {
//     console.log("its not a palindrome")
// }

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT :    

// function capitalizeWords(str) {
//     let words = str.split(' ');
//     let result = '';

//     for (let word of words) {
//         let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         result += capitalized + ' ';
//     }

//     return result.trim(); // remove extra space at the end
// }

// let output = capitalizeWords('the quick brown fox');
// console.log(output);

// function longestWord(str){
//     let words = str.split(' ')
//     let result = ''

//     for(let word of words){
//       if(word.length > result.length){
//         result = word
//       }
//     }
//     return result
// }

// let output = longestWord('web development tutorial')
// console.log(output)

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// function | JAVASCRIPT
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function coount(str, letter){
//     let counter = 0

//     for(let i = 0; i< str.length; i++){
//         if(letter === str[i])
//             counter ++
//     }
//     return counter
// }

// let result = coount('JSResourceS.com', 'o')
// console.log(result)


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
   let  circumference = 2 * Math.PI * radius
   console.log('circumference is ', circumference)
}

function calcArea(radius){
    let area = Math.PI* radius* radius
    console.log("area is ", area)
}

calcCircumference(5)
calcArea(5)