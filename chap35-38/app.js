// 1. Write a function that displays current date & time in your
// browser.
// function currentDateAndTime(){
//     var date = new Date();
//     document.write(date)
// }
// currentDateAndTime()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// function greetUser(){
//     var firstName = prompt("Enter your first name:")
//     var lastName = prompt("Enter your last name:")
//     var fullName = firstName + " " + lastName
//     document.write(fullName)
// }
// greetUser()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
//  function addTwoNumbers(){
//     var num1 = +prompt("Enter first number:")
//     var num2 = +prompt("Enter second number:")
//     var sum = num1 + num2
//     document.write(sum)
//     }
//     addTwoNumbers()

// // 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
//  function calculator(num1, num2, operator){
//     var num1 = +prompt("Write a num1")
//     var num2 = +prompt("Write a num2")
//     var operator = prompt("Write a operator")
//     var result;
//     if(operator == "+"){
//         result = num1 + num2
//         }
//         else if(operator == "-"){
//             result = num1 - num2
//             }
//             else if(operator == "*"){
//                 result = num1 * num2
//                 }
//                 else if(operator == "/"){
//                     result = num1 / num2
//                     }
//                     else if(operator == "%"){
//                         result = num1 % num2
//                         }
//                     else{
//                         result = "Invalid operator"
//                         }
//                         document.write(result)
//                         }
//                         calculator()

// 5. Write a function that squares its argument.
//  function square(num){
//     var num = +prompt("Write a num")
//     var result = num * num
//     document.write(result)
//     }
//     square()

// 6. Write a function that computes factorial of a number.
//  function factorial(num){
//     var num = +prompt("Write a num")
//     var result = 1
//     for(var i = 1; i <= num; i++){
//         result = result * i
//         }
//         document.write(result)
//         }
//         factorial()

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
//   function counting(start, end){
//     var start = +prompt("Write a start num")
//     var end = +prompt("Write a end num")
//     for(var i = start; i <= end; i++){
//         document.write(i + "<br>")
//         }
//         }
//         counting()

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function | JAVASCRIPT

// Page 2 of 4

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypotenuse(base, perpendicular) {
    
//     function calculateSquare(number) {
//       return number * number;
//     }
  

//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
  
//     return hypotenuse;
//   }
// calculateHypotenuse()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

//  function area(width, height) {
//     var width = +prompt("Write a width")
//     var height = +prompt("Write a height")
//     var total = width * height;
//     return total;

    
//     }
//     document.write(area())

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function palindrome(str) {
//     var str = prompt("Write a string")
//     var reverse = str.split('').reverse().join('');
//     if (reverse === str) {
//         return true;
//         }
//         else {
//             return false;
//             }
//             }
//             document.write(palindrome())

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
//  function upperCase(str) {
//     var str = prompt("Write a string")
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
        
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
    
//     var capitalizedStr = words.join(' ');
    
//     return capitalizedStr;
// }
// document.write(upperCase())

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
//  function longestWord(str) {
//     var str = prompt("Write a string")
//     var words = str.split(' ');
//     var longest="" ;
//     for (var i = 0; i < words.length; i++) {
//         if (longest.length < words[i].length) {
//             longest = words[i];
//             }
//             }
//             return longest;
//             }
//             document.write(longestWord())

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

  // function count(str, letter) {
  //   var count = 0;
  //   for (var i = 0; i < str.length; i++) {
  //       if (str[i] == letter) {
  //           count++;
  //           }
  //           }
  //           return count;
  //           }
  //           document.write(count('JSResourceS.com', 'o'))

//   14. The Geometrizer
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
//  function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   return circumference;
//   }
//   function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     return area;
//     }
//     document.write(calcCircumference(5)+"</br>")
//     document.write(calcArea(5))


            









   
 





    
    















