//question1
//1. Declare an empty array using JS literal notation to store
//student names in future.
// var studentName = [];

//question2
// 2. Declare an empty array using JS object notation to store
// student names in future.
//var studentName = {};

//question3
//3. Declare and initialize a strings array.
// var stringArray = ["Apple","Banana","Mango"];
// console.log(stringArray);

//question4
//4. Declare and initialize a numbers array.
// var numArray = [1,2,3,4,5];
// console.log(numArray)

//question5
//5. Declare and initialize a boolean array.
// var booleanArray = [true,false];
// console.log(booleanArray);

//question6
//6. Declare and initialize a mixed array.
// var mixedArray = ["Apple",1,3,true,false];
// console.log(mixedArray);

//question7
//7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
// var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","Phd"];
// document.write("Qualification:");
// document.write("</br>");
// document.write(1. + qualifications[0]);
// document.write("</br>");
// document.write(2. + qualifications[1]);
// document.write("</br>");
// document.write(3. + qualifications[2]);
// document.write("</br>");
// document.write(4. + qualifications[3]);
// document.write("</br>");
// document.write(5. + qualifications[4]);
// document.write("</br>");
// document.write(6. + qualifications[5]);
// document.write("</br>");
// document.write(7. + qualifications[6]);
// document.write("</br>");
// document.write(8. + qualifications[7]);

//question8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentName = ["Michael","Jony","Tony"];
// var studentScore = [320 ,230 ,480];
// var totalMarks = 500;
// var percentage1 = studentScore[0]/totalMarks*100
// var percentage2 = studentScore[1]/totalMarks*100
// var percentage3 = studentScore[2]/totalMarks*100
// document.write("score" +" " + studentName[0]+" "+studentScore[0]+" " +"percentage"+ percentage1)
// document.write("</br>");
// document.write("score" +" " + studentName[1]+" "+studentScore[1]+" " +"percentage"+ percentage2)
// document.write("</br>");
// document.write("score" +" " + studentName[2]+" "+studentScore[2]+" " +"percentage"+ percentage3)

//question9
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the end of the array. Display the updated array in your browser.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// Arrays | JAVASCRIPT

// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["red","blue","green","yellow"];

//  var strtColor = prompt("which color u want in begining");
// colors [0] = strtColor;
// document.write(colors);

// var endColor = prompt("which color u want in end");
// colors.push(endColor);
// document.write(colors);

//  var strtColor = prompt("which color u want in begining");
// colors [0,1] = strtColor;
// document.write(colors);

// var deleted = colors.shift();
// document.write(colors);


// colors.pop()
// document.write(colors);

// var add = +prompt("at which position do u want to add color");
// var colorName = prompt ("which color do u want");
// colors[add]=colorName
// document.write(colors);