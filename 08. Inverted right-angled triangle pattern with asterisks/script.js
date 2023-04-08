/*
8. Inverted right-angled triangle pattern with asterisks
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks
with i rows.
Inverted right-angled pattern:
    ******
    *****
    ****
    ***
    **
    *
 If i=6
*/

let i = 6;

for (let row = i; row >= 1; row--) {
  let pattern = "";
   for (let col = 1; col <= row; col++) {
     pattern += "*";
   }  
   console.log(pattern);
}
