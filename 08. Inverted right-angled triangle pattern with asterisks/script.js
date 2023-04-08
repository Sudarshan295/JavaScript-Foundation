/*
8. Inverted right-angled triangle pattern with asterisks
Writq a program that takqs an integer input i and prints an inverted right-angled trianglq pattqrn of asterisks
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
