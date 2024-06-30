// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName=prompt("What's your first name?");
// var lastName=prompt("What's your last name?");

// var fullName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() +" "+  lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()

// console.log(fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userMobile = prompt("What's your favourite Mobile?");
// document.write("Model Of Mobile:"+" "+userMobile);
// document.write("</br>")
// document.write("Lenght Of String:"+" "+userMobile.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var text = "Pakistani"
// //text.indexOf(n);
// document.write("String:" + " "+text);
// document.write("</br>");
// document.write("Index Of 'n':"+" "+ text.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var text="Hello World";
// document.write("String:" + " "+text);
// document.write("</br>");
// document.write("Index Of 'n':"+" "+ text.lastIndexOf("l")); 

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var text="Pakistani";
// var newText = text.slice(3,4);
// console.log(newText);
// document.write("String:" + text);
// document.write("</br>");
// document.write("Character on index 3:"+newText)

// 6. Repeat Q1 using string concat() method.
// var first="Fizza ";
// var last="Chouhan";
// var full=first+last;
// document.write(full)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city1 = "Hyderabad";
// var city2=city1.replace("Hyder","Islam");
// document.write("City:" + city1);
// document.write("</br>")
// document.write("After replacement:"+city2)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and","&");
// document.write(newMessage)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var string = "472";
// var num = Number(string)
// console.log(typeof(num))
// document.write("Value:"+string)
// document.write("</br>");
// document.write("Type:string");
// document.write("</br>");
// document.write("Value:"+num);
// document.write("</br>");
// document.write("Type:number");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("What's your Input?");
// var capitalInput= userInput.toUpperCase();
// //console.log(capitalInput);
// document.write("User Input:"+userInput);
// document.write("</br>");
// document.write("Upper Case:"+capitalInput)

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var userInput= prompt("Write text")
// var title= userInput[0].toUpperCase()+userInput.slice(1).toLowerCase();
//console.log(upper);
// document.write("User Input:"+userInput);
// document.write("</br>");
// document.write("Title Case:"+title)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// var str = num.toString().replace(".","");
// document.write("number:"+num);
// document.write("</br>")
// document.write("Coverted:"+str);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var validUserName= prompt("Write Username");
// var inValidChar = ["@","!",",","."];
// for(var i =0;i<inValidChar.length;i++ ){
//     if (validUserName==inValidChar){
//         alert("Enter Valid Username");
//     }
//     break;
    
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakeryItem = prompt("Welcome to ABC bakery. What do you want to order?").toLowerCase();

// var matchFound = false;

// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i] === bakeryItem) {
//         matchFound = true;
//         break; 
//     }
// }

// if (matchFound) {
//     alert("It's in the list");
// } else {
//     alert("It's not in the list");
// }
// var arayBakery = bakery.split(" ");
// for (var i = 0;i<arayBakery.lenght;i++){

// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var array1=university.split("</br>");
// document.write(array1)

// 17. Write a program to display the last character of a user
// input.

// var inputUser=prompt("Write a text");
// var lastIndex=inputUser.slice(-1)
// document.write("Input:"+inputUser)
// document.write("</br>")
// document.write("last character:"+lastIndex);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str="The quick brown fox jumps over the lazy dog";
var the = "the";
for(var i=0;i<str.length;i++){
    if
}