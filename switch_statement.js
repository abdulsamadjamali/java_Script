
console.log("******************************************")
console.log("Switch Statement (10 Exercises)")
console.log("******************************************")


// 1. Write a program to display the name of a day based on a number (1 for Monday, etc.).

var day=4
switch (day) {
    case 1:
        console.log("Monday");
        
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturady")
        break;
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Unvalid number")
        break;
}
// 2. Create a program that takes a month number and logs the number of days in that month.
console.log("Enter month number and gets number of day in that month")
var month=3
switch (month) {
    case 1:
        console.log("the number of day in january are 30")
        
        break;
    case 2:
        console.log("In feb number of days are 30")
        
        break;
    case 3:
        console.log("In march number of days are 28")
        break;
    case 4:
        console.log("In aprail number of days are 29")
        
        break;
    case 5:
        console.log("In june number of days are 29")
        break;
        

    default:
        console.log("Unvalid number")
        break;
}
// 3. Use a switch statement to classify a character as a vowel or consonant.
var val2="a"
switch (val2) {
    case "a","e","i","o","u","A","E","I","O","U":
        console.log("its vowel")
        break;
    default:
        console.log("Consonent")
        break;
}
// 4. Write a program to assign grades based on marks (A, B, C, D, F).
// console.log("  For A grade marks=90+ \n For B grade marks=60+ but less than 90 \n For c grade marks=40+ but less than 60 \n For c grade marks=30+ but lss than 40 \n For E grade marks=less than 30" )
// var marks=parseInt(prompt("Enter your marks"))
// switch (marks) {
//     case marks=90:
//         console.log("Hurray , You Got Grade A")
        
//         break;
//     case marks=80:
//         console.log("B grade")
//     case marks=50:
//         console.log("C")
//         break;
//     case marks=40:
//         console.log("D")
//     case marks=30:
//         console.log("E")
//     case marks=20:
//         console.log("F")
//     default:
//         break;
// }
// 5. Create a calculator using a switch statement for operations (+, -, *, /).
// let num1=30
// let num2=40
// var result=0
// var operator=prompt("Enter any operator")
// switch (operator) {
//     case "+":
//         result=num1+num2
//         console.log(result)
//         break;
//     case "-":
//         result=num1-num2
//         console.log(result)
//         break;
//     case "/":
//         result=num1/num2
//         console.log(result)
//         break;
//     case "*":
//         result=num1*num2
//         console.log(result)
//         break;
//     default:
//         console.log("Invalid oprator")
//         break;
// }




// 6. Use a switch statement to determine the type of triangle based on side lengths.
let side1=12
let side2=18
let side3=1
var typeOfTriangle;
if (side1==side2 && side2==side3) {
    typeOfTriangle="Equilateral"  
}else if(side1==side2 || side2== side3 || side1==side3){
    typeOfTriangle="isocalces"
} else {
    typeOfTriangle="Scalene";
}

switch (typeOfTriangle) {
    case "Equilateral" :
        console.log("Equilateral")
        break;
    case "isocalces":
        console.log("isocalces")
        break
    case "Scalene":
        console.log("Scalene")

    default:
        break;
}
// 7. Write a program to print the season name based on a month number.
let monthNumber = 3; 

switch (monthNumber) {
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn (Fall)");
        break;
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
        break;
}
// 8. Create a program to identify the type of food (fruit, vegetable, grain) based on input.
const foodName=prompt("Enter food name")

switch (foodName) {
    case "apple":
    case "banana":
    case "mango":
    case "orange":
    case "grape":
        console.log("The food type is: Fruit");
        break;
    case "carrot":
    case "potato":
    case "onion":
        console.log("The food type is: Vegetable");
        break;
    case "rice":
    case "wheat":
    case "corn":
        console.log("The food type is: Grain");
        break;
    default:
        console.log("Unknown food type. Please check the input.");
        break;
}

// 9. Use a switch statement to return the corresponding zodiac sign based on a birth date.
// 10. Write a progra




