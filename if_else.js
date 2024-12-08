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

// 8. Check if a number is even or odd using an if-else statement.
var numb=10
if(numb%2==0){
    console.log("that's a Even number ")
}
else{
    console.log("its a odd number")
}
// 9. Write a program to determine if a grade is pass or fail (pass >= 40).
var marks=66
if(marks>=40){
    console.log("You are PASS")
}
else{
    console.log(" i'am doomed , fail")
}
// 10. Write a program to determine whether a person is tall enough to ride a roller coaster
// (height ≥ 120 cm).
var person_height=55
if(person_height>=120){
    console.log("You are abble to take ride don't worry")
}
else{
    console.log("you should grow ")
}


