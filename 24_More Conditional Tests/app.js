var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exercise # 24
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 24•••••••••••••••••••••••••••••••••••••••••••••••••••••");
}
function Epetern() {
    console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
}
function Lpetern() {
    console.log("•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");
}
function Sperator() {
    console.log("•\t--------------xxxxxxxxxx--------------xxxxxxxxxxxx---------------xxxxxxxxxx------------\t\t\t•");
}
/* pettern function setted*/
/*

Using Following Comparison Operators: in our progaram

1.Equal to: ==
2.Not Equal to: !=
3.Strict Equal to: ===
4.Strict Not Equal to: !==
5.Greater than: >
6.Less than: <
7.Greater than or Equal to: >=
8.Less than or Equal to: <=
 */
Spetern();
Mpetern();
// now starting exercise no 23
var A = 0;
var Num1 = 100;
var Num2 = 150;
var PersonName = "Abdul Hadi";
var engine = 1500;
// test 1 
// • Tests for equality and inequality with strings
A++;
console.log("•Test #", A, "\tis person name", PersonName, "===", "Abdul Hadi", "? I predict True.", "\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is = =", PersonName === "Abdul Hadi", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis person name", PersonName, "!=", "Abdul Hadi", "? I predict False.", "\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", PersonName != "Abdul Hadi", "\t\t\t\t\t\t\t\t•");
Lpetern();
// • Tests using the lower case function
A++;
console.log("•Test #", A, "\tis person name", PersonName.toLowerCase(), "===", "abdul hadi", "? I predict True.", "\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is = ", PersonName.toLowerCase() === "abdul hadi", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis person name", PersonName.toLowerCase(), "!=", "abdul hadi", "? I predict False.", "\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is = ", PersonName.toLowerCase() != "abdul hadi", "\t\t\t\t\t\t\t\t•");
Lpetern();
// test 2 Numerical tests 
// equality and inequality
A++;
console.log("•Test #", A, "\tis Number", Num1, "===", Num2, "? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tSorry your answer is =", Num1 === Num2, "\t\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, "!=", Num2, "? I predict True.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Num1 != Num2, "\t\t\t\t\t\t\t\t•");
Sperator();
// greater than and less than
console.log("•Test #", A, "\tis Number", Num2, ">", Num1, "? I predict True.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Num2 > Num1, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, ">", Num2, "? I predict False.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num1 > Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, "<", Num2, "? I predict True.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is=", Num1 < Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num2, "<", Num1, "? I predict False.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is=", Num2 < Num1, "\t\t\t\t\t\t\t\t•");
Sperator();
// greater than or equal to, and less than or equal to
console.log("•Test #", A, "\tis Number", Num2, ">=", Num1, "? I predict True.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Num2 >= Num1, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, ">=", Num2, "? I predict False.", "\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num1 >= Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num2, "<=", Num1, "? I predict False.", "\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num2 <= Num1, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, "<=", Num2, "? I predict True.", "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num1 <= Num2, "\t\t\t\t\t\t\t\t•");
Lpetern();
// • Tests using "and" and "or" operators
A++;
console.log("•Test #", A, "\tis Number", Num1, "==", Num2, "||", Num1, "<", Num2, "? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Num1 == Num2 || Num1 < Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, "==", Num2, "||", Num1, ">", Num2, "? I predict False.", "\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Num1 == Num2 || Num1 > Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num2, ">=", Num1, "&&", Num1, "<=", Num2, "? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num2 >= Num1 && Num1 <= Num2, "\t\t\t\t\t\t\t\t•");
Mpetern();
console.log("•Test #", A, "\tis Number", Num1, ">=", Num2, "&&", Num1, ">=", Num2, "? I predict Fales.", "\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Num1 >= Num2 && Num1 >= Num2, "\t\t\t\t\t\t\t\t•");
Lpetern();
// • Test whether an item is in a array
A++;
var Fruitesset1 = ["Apple", "Banana", "Wattermelon", "Stewberry"];
var Fruitesset2 = __spreadArray([], Fruitesset1, true);
// Example 1
console.log("•Test #", A, "\tis Index 0 item On Array 1", Fruitesset1[0], "===", Fruitesset2.reverse()[3], "of index item 3 On Array 2", "? I predict True.", "\t•");
Mpetern();
console.log("•\t\tCongratulations your answer is =", Fruitesset1[0] === Fruitesset2[3], "\t\t\t\t\t\t\t\t•");
Mpetern();
// Example 2
console.log("•Test #", A, "\tis Array 1", "Include item \"Banana\"", "? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Fruitesset1.includes("Banana"), "\t\t\t\t\t\t\t\t•");
Lpetern();
// • Test whether an item is not in a array
// Example 1
A++;
console.log("•Test #", A, "\tis Index 0 item On Array 1", Fruitesset1[0], "===", Fruitesset2[0], "of index item 3 On Array 2", "? I predict False.", "\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", Fruitesset1[0] === Fruitesset2[0], "\t\t\t\t\t\t\t\t•");
Mpetern();
// Example 2
console.log("•Test #", A, "\tis Array 1", "Not include item \"Banana\"", "? I predict False.", "\t\t\t\t\t•");
Mpetern();
console.log("•\t\tCongratulations answer is =", !Fruitesset1.includes("Banana"), "\t\t\t\t\t\t\t\t•");
Epetern();
