
//1. Declare a variable to store your name and log it to the console.
let Name="Abdul samad jamali";
console.log(Name)
//2. Create two variables to store your age and a friend’s age, then log the sum.
let my_age=20;
let friend_age=21;
let result=my_age+friend_age
console.log("The sum of ages is ",result)
// 3. Declare a constant to store the value of Pi (3.14159).
const pi=3.14159;
console.log("The value of Pi is ",pi)

// 4. Store your favorite color in a variable and display it in a sentence.
let favorite_color="black";
console.log(`my favorite color is ${favorite_color}`)
// 5. Swap the values of two variables without creating a third variable.
var a=2
var b=3
var a=a+b
var b=a-b
var a=a-b
console.log(`The value of A is ${a} and the value of B is ${b}`) 
// 6. Declare a variable with no initial value, then assign a number to it.
 let my_number;
 my_number=10;
 console.log(my_number)
// 7. Create a variable that holds the result of multiplying two numbers.
var a=7;
var b=8;
var Result=a*b;
console.log(` The result of multiplying two numb is ${Result}`);
// 8. Store the result of dividing two numbers and log whether the result is an integer.
 var a=10;
 var b=3;
 var Result=a/b;
 console.log(`The result of dividing two numb is ${Result} and it is ${Number.isInteger(Result)}`)
// 9. Declare variables for first name, last name, and age. Log a sentence combining them.
var first_name="abdul Samad"
var last_name="Jamali"
console.log(` My First name  ${first_name} and the last name is ${last_name}`)
// 10. Declare a Boolean variable to indicate whether today is sunny. Log the value.
var Boolean=true
console.log(`today is  sunny day ${Boolean} \n `)






// OPERATORS
console.log("********************************")
console.log("Secound Portion ")
console.log("********************************")



// 1. Use the addition operator to add two numbers and display the result.
var x = 7;
var y = 8;
var Resu = x + y;
console.log(Resu); 


// 2. Use the modulus operator to check if a number is even or odd.
var a = 5; // Declare the variable
let Res = (a % 2 == 0) ? "Even" : "Odd"; 
console.log(Res); 


// 3. Write a program to compare two numbers and log which is larger.
var i=20;
var j=30;
var larger=(i>j)?`i is greater b/c value of i is ${i} and j is  ${j}`:`j is greater b/c j= ${j} and i = ${i}`
console.log(larger)

// 4. Use the increment operator to increase a variable by 1.
var k=20
k++
console.log(k)
// 5. Use the decrement operator to decrease a variable by 1.
var k=99
k--
console.log(k)
// 6. Write a program to calculate the area of a rectangle (length × width).
let length=33
let width=88
let Results=length*width
console.log(Results)
// 7. Use the += operator to add 10 to a variable.
var p=66
p+=10
console.log(p)
// 8. Write a program to calculate the simple interest (P × R × T) / 100.
var principal_val=100
var rate_of_intrest=10
var time_period=10
let simple_intrest=(principal_val*rate_of_intrest*time_period)/100
console.log("The simple intrest on initial value is ",simple_intrest)
// 9. Create a program to find the remainder when dividing 25 by 4.
var z=20
var reminder=(z/4)
console.log(z)
// 10. Check whether two strings are equal using the equality operator.
let string1="abdul samad jamali"
let string2="abdul samad jamali"
let resultt=string1==string2
console.log(resultt)


console.log("********************************")
console.log("Third Portion  IF-ELSE Conditions ")
console.log("********************************")





// 1. Write a program to check if a number is positive, negative, or zero.
var a=6
if(a>0){
    console.log("Number is positive ")
}
else{
    console.log("Number is negative")
}

// 2. Check if a person is eligible to vote based on age.
let agee = 3;
if (agee >= 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible");
}


// 3. Write a program to check whether a number is divisible by 5 and 11.
var a = 6
if(a%5==0){
    console.log("Number is devisible by 5")
}
else{
    console.log("Numb is not divisible ")
}
// 4. Check whether a given year is a leap year.
var year = 1999
if(year%4 === 0 && year %100 !== 0 ||    year %400 == 0){
    console.log("it's a leap year")

}
else{
    console.log("it's not leap year")
}
// 5. Write a program to display the largest of three numbers.
let num1 = 66;
let num2 = 8;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log("Num 1 is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log("Num 2 is greater");
} else if (num3 > num1 && num3 > num2) {
    console.log("Num 3 is greater");
} else {
    // Handles the case when there are equal numbers
    console.log("There is a tie between the numbers.");
}


// 6. Check if a person is a child (age < 12), teenager (12–18), or adult (18+).

let age=48
if (age<12) {
    console.log("Child")
}
else if(age>12 && age<18){
    console.log("Teen Ager")
}
else if(age>=18){
    console.log("Adult")
}
// 7. Write a program to determine if a character is a vowel or a consonant.
let value="e"
if("aeiouAeiou".includes(value)){
    console.log("The given character is a vowel")
}

else{
    console.log("The given character is a consonant")
}
























