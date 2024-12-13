// Basic Function Creation (10 Exercises)
// 1. Write a function that prints "Welcome to JavaScript!" to the console.
function printName() {
    console.log("Abdul samad jamali!");
}
printName();
// 2. Create a function that takes a number and returns the number doubled.
function doubleNumber(num1) {
    return num1*2
}
console.log(doubleNumber(3))
// 3. Write a function that returns the square of a given number.
function square(num1) {
    return num1*num1
}
console.log(square(7))
// 4. Create a function that takes two numbers and returns their sum.
function sum(num1, num2) {
    return num1+num2
    
}
console.log(sum(2,4))
// 5. Write a function that logs a greeting message with a name passed as a parameter.
function greeting(name) {
    console.log("hello "+name+" How are you")
    
}
greeting("abdul samad")
// 6. Create a function that takes a string and returns it in uppercase.
function uppercase(str) {
    return str.toUpperCase(); 
}

console.log(uppercase("abdul samad")); // Output: "ABDUL SAMAD"


// 7. Write an arrow function that subtracts one number from another.
let subtract=(a,b)=>{
    return a-b
}
console.log(subtract(44,22))
// 8. Create an arrow function that returns the product of two numbers.
let product=(c,d)=>c*d
// 9. Write a function to calculate the area of a rectangle (length × width).
function areaTriangle(len,wid){
    return len*wid
}
console.log(areaTriangle(22,4))
// 10. Create an arrow function that divides one number by another and returns the result.
let divide=(e,d)=>{
    return e/d

}
let result=divide(22,11)
console.log(result)


// Functions with Conditional Logic (10 Exercises)

// 1. Write a function to check if a number is positive or negative.
function checkNumber(x){
    if(x<0){
        console.log("The numb is negative")
    }
    else{
        console.log("Numb is positive")
    }

}
checkNumber(-1)
// 2. Create a function that returns true if a number is even and false if it’s odd.
function evenOdd(z) {
    if(z%2==0){
        return true
    }else{
        return false
    }
}
console.log(evenOdd(2222222))

// 3. Write an arrow function that checks if a string contains the word "hello".
let hello=(hello)=>{
    if(hello=="hello"){
        return true
    }else{
        return false
    }
}
console.log(hello("hello"))
// 4. Create an arrow function that takes a number and returns whether it’s greater than 10.
function greater(numb3){
    if(numb3>10){
        return "number is greater than 10"
    }else{
        return "numb is less than 10"
    }
}
console.log(greater(66))
// 5. Write a function that calculates whether a student passed or failed based on a grade (pass >= 40).
function passesFailed(marks) {
if(marks>40){
    return "pass"
}else{
    return "Failed"
}   
}
console.log(passesFailed(120))

// 6. Create a function that checks if a given year is a leap year.

// 7. Write a function that checks if a string is longer than 5 characters.


function strCheck(str) {
    if(str.length>5){
        return "Length is greater than 5"
    }else "length is less than 5"
    
}
console.log(strCheck("asbcd"))

// 8. Create a function that takes a number and returns "small" if it’s less than 50 and "large"
// otherwise.

function numSmallLarge(num4) {
    if(num4>50){
        return "Numb is greater than 50"
    }else{
        return "Numb is less than 50"
    }
    
}
console.log(numSmallLarge(133))
// 9. Write a function to determine if a character is a vowel.

function vowel(alpha){
    if(alpha=="a"|| alpha=="e" || alpha=="i" || alpha=="o" || alpha=="u"){
        return "Vowel"
    }else{
        return "Consonent"
    }
}
console.log(vowel("a"))

// 10. Create an arrow function that checks if a given age qualifies for a senior citizen
// discount (age >= 60).

let seniorCitizen=(age)=>{
    if(age>60){
        return "You qualifies for thr senior citizen discount"
    }else{
        return "Unfortunatly you doesn't qualifies of this dicount"
    }
}
console.log(seniorCitizen(30))




// Working with Arrays (10 Exercises)
// 1. Write a function that returns the first element of an array.
function firstElement() {
    let array=[1,2,3,4,5,6]
    return array[0]
    
}
console.log(firstElement())
// 2. Create a function that returns the last element of an array.
function lastElement() {
    let array2=[1,2,3,4,5,6,7,8,9]
    return array2[array2.length-1]
    
}
console.log(lastElement())
// 3. Write a function that adds an element to the end of an array and returns the new array.
function addElement() {
    let array3=[1,2,3,4,5,6,7]
    array3.push(8)
    return array3
    
}
console.log(addElement())
// 4. Create a function that adds an element to the beginning of an array.
function addfirstIndex() {
    let array4=[1,2,3,4,5,6,7,8,9]
    array4.unshift(10)
    return array4
    
}
console.log(addfirstIndex())
// 5. Write an arrow function that removes the last element from an array.
function removeLastIndex() {
    let array5=[1,2,3,4,5,6,7,8,9]
    array5.pop()
    return array5
}
console.log(removeLastIndex())
// 6. Create a function that removes the first element from an array.
function removeFirstIndex(){
    let array6=[1,2,3,4,5,6,7,8,9]
    array6.shift()
    return array6
}
console.log(removeFirstIndex())
// 7. Write a function to find the largest number in an array of numbers.
function largestElement() {

    let array7=[1,2,3,4,5,6,7,48,9]
    let largest=array7[0]
    for (let index = 0; index < array7.length; index++) {
        if(array7[index]>largest){
            largest=array7[index]
            
            
        }

        
    }
    return largest
    
}
console.log(largestElement())
// 8. Create an arrow function to calculate the sum of all numbers in an array.
let add=()=>{
    let array8=[1,2,3,4,5]
    let result=0
    for (let index = 0; index < array8.length; index++) {
        result+=array8[index]
        
    }
    return result
}
console.log(add())
// 9. Write a function that checks if an array contains a specific numb
let specificNumb=()=>{
    let array9=[1,2,3,4,5]
    let specificnumb=2
    for (let index = 0; index < array9.length; index++) {
        if(array9[index]==specificnumb){
            return specificnumb
        }
        
    }
    return "Does't found"
    
}
console.log(specificNumb())
// 10. Create an arrow function that reverses an array and returns it.
function reverse() {
    let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array10.reverse();  
    
    return array10;     
}

console.log(reverse());  


// String Manipulation with Functions (10 Exercises)

// 1. Write a function to concatenate two strings.
// Concatenate means joining two or more things together. In programming, it often refers to joining strings (text) into one single string.
function concatenate() {
    let string1="Abdul Samad";
    let string2="Jamali"
    return string1+" "+string2
}
console.log(concatenate())
// 2. Create a function that returns the first character of a string.
 // The first character of a string is the character at index 0.
function firstChara() {
    let string3="Abdul Samad"
    return string3[0]
    
}
console.log(firstChara())
// 3. Write an arrow function to check if a string starts with a specific letter.
// 4. Create a function that returns the length of a string.
// 5. Write a function that converts a string to lowercase.
// 6. Create an arrow function to check if a string ends with a specific word.
// 7. Write a function to replace all spaces in a string with underscores.
// 8. Create a function that counts the number of vowels in a string.
// 9. Write a function to extract the first 3 characters from a string.
// 10. Create an arrow function that checks if two strings are equal