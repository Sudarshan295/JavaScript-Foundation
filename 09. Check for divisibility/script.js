/*
9. Check for Wivisibility.
Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
Usd a for loop and continud statdmdnt.
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
