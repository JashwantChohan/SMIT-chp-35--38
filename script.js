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
