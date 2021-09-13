// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }

// var a = 33;
// var b = 10;
// var c = "Test";
// document.write(a + b);
// result = a + b;
// document.write(result);
// function show_prompt() {
//     var name = prompt("Please enter your name", "Harry Potter");
//     if (name != null && name != "") {
//         document.write("Hello " + name + "! How are you today?");
//     }
// }

//for loop is used when you know how many times the script will run
// var i = 0;
// for (i = 0; i <=5; i++) {
//     document.write("the number is" + i + "\n");
// }

//while loops through while a specified condition is true
// var i = 0;
// while (i <= 5) {
//     document.write(i);
//     i++;
// }
// the do...while execute the code once even if is false satement run befor condition are tested
// var i = 0;
// do {
//     document.write("this number is" + i);
//     i++;
// } while (i <= 5);

//the break statement break the loop and continue executing the code that follows after it. while continue breaks the current loop and continue with the next value.
// var i = 0;
// for (i = 0; i <= 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     document.write("this number" + i);
// }

// var mycars = new Array(); //1
// let arrray2 = ["hello", "world", 34]; //2

// arrray2[0] = "saab";
// arrray2[1] = "volu";
// arrray2[2] = "big";
// arrray2[3] = "tee";

// arrray2["length"] = 4;

// for (index in arrray2) {
//     document.write(arrray2[index]);
// }

// document.write(arrray2[0]) + "<br/>";

//  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.//
// SOLUTION?

// function getDifference(k) {
//     if (k > 13) {
//         return 2(k - 13);
//     } else {
//         return 13 - k;
//     }
// }

// console.log(getDifference(2));

//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.//

// function computeSum(x, y) {
//     if (x === y) {
//         return 3(x + y);
//     } else {
//         return x + y;
//     }
// }
// console.log(computeSum(6, 6));

// have a popup asking the user for name on first arrival to your page. the name is then store in a cookie, the next time the vistor arrives at your page you could have a popup saying "welcome toby"//

// ON LOAD ---- SHOW POPUP
// DESIGN A MODAL