/**
 * 
 * Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

Explain & TIP: To compare strings without considering their case (uppercase/lowercase), 
you can convert both strings to the same case before comparing.
 * 
 * 
 */

let stringOne="Hello";
let stringTwo="HELLO";

if(stringOne.toLowerCase()===stringTwo.toLowerCase()){
    console.log("String are identical");
}
else{
    console.log("String are not identical");
}