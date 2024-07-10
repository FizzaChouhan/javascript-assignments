// 1. Write a program that displays current date and time in
// your browser.

//  var today = new Date();
//  document.write(today)

// 2. Write a program that alerts the current month in words.
// For example December.
//  var date = new Date();
//  var month = date.getMonth()
//  document.write("Month:"+month)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var date = new Date()
// var day = date.getDay()
// var firstThree = day.slice(0,3)
// document.write("Today is "+firstThree+"day")

// 5.Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
//  var date = new Date()
//  var day = date.getDate()
//  if(day<16){
//     document.write("First fifteen days of the month")
//     }else{
//         document.write("Last days of the month")
//         }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
//  var date = new Date()

//  var millisec = date.getTime()
//  var minutes = millisec*60*60
//  document.write("Current Date: "+date+"<br>")
//  document.write("Elapsed milliseconds since January 1, 1970: "+millisec+"<br>")
//  document.write("Elapsed minutes since January 1, 1970: "+minutes+"<br>")

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
//   var date = new Date()
//   var hour = date.getHours()
//   if(hour<12){
//     document.write("Its AM")
//     }else{
//         document.write("Its PM")
//         }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
  //var date = new Date("Dece")
//   var laterDate = new Date("December 2020 31")
  
//   document.write("Later Date: "+laterDate+)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var date = new Date("June 18, 2015")
// var today = new Date()
// var days = Math.round((today-date)/(1000*60*60*24))
// document.write("Ramadan Starts: "+date+"<br>")
// document.write("Current Date: "+today+"<br>")
// document.write("Elapsed days since Ramadan: "+days+"<br>")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var date = new Date("January 1, 2015")
// var today = new Date()
// var seconds = Math.round((today-date)*24*60*60)
// document.write("Current Date: "+today+"<br>")

// document.write("Current Date: "+today+"<br>")
// document.write(" seconds since beginning of 2015: "+seconds)

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var date = new Date()
var hours = date.getHours()




















