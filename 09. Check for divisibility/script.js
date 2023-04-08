/*
9. Check for divisibility.
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement.
*/

let array = [ 2, 3, 4, 5, 6, 7, 9, 10, 27];
for (let i = 0; i < array.length; i++) {
  let num = array[i];
  if (num % 2 === 0) {
    continue; 
  }
  if (num % 3 === 0) {
    console.log(num);
  }
}
