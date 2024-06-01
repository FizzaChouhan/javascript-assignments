//question1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var oneArray = [[34900,"apple"],true,324,[false,1234,"monitor"]];

//question2
// var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//qustion3
// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=1;i<11;i++){
//     console.log (i);
// }

//question4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var tableNo = +prompt("Enter a number to show it's multiplication table");
// var tableLen = +prompt("Enter lenght of multiplication table");
// for(var i=1;i<=tableLen;i++){
//     console.log(i*tableNo);
// }

//question5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0;i<5;i++){
//     console.log(i+fruits[i]);
// }

//question6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for(var i=1;i<16;i++){
   
//     document.write(i+",");

// }
// document.write("</br>")
// for(var i=10;i>=1;i--){
   
//     document.write(i+",")
// }
// document.write("</br>")
// for(var i=0;i<=20;i+=2){
   
//     document.write(i+",");

// }
// document.write("</br>")

// for(var i=1;i<=19;i+=2){
   
//     document.write(i+",");

// }
// document.write("</br>")
// for(var i=0;i<=20;i+=2){
   
//     document.write(i+"k"+",");

// }
// document.write("</br>")

//question7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var bakery=["cake","apple pie","cookie","chips","patties"];
// var bakeryItem = prompt("Welcome to ABC bakery. What do u want to order?");
// for (var i=bakeryItem;i=bakery;i++){
//     console.log(i);
// }

//question8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// var  A = [24, 53, 78, 91, 12];
// var largest=A[0];
// for (var i=0;i<=largest;i++){
//     if (A[i]>largest){
//         var largest = A[i];
//     }

// }
// console.log(largest)

//question9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var  A = [24, 53, 78, 91, 12];
// var min_number=A[0];
// for (var i=1; i< A.length ;i++){
//     if (A[i] < min_number){
//         min_number = A[i];
//     }

// }
// console.log(min_number);

//question10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// var num = 5;
// for (var i = 1;i<101;i++){
//     console.log(num*i)
// }