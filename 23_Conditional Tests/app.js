// Exercise # 23
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 23•••••••••••••••••••••••••••••••••••••••••••••••••••••");
}
function Epetern() {
    console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
}
function Lpetern() {
    console.log("•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
var Points = 0;
var Num1 = 100;
var Num2 = 150;
var car = "Toyta";
var engine = 1500;
// test 1
A++;
console.log("•Test #", A, "\tIs your favorite car == 'Toyta'? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", car == "Toyta", "\t\t\t\t\t•");
Mpetern();
// test 2
A++;
console.log("•Test #", A, "\tIs your car toyta != Suzuki Fx? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", car != "Suzki Fx", "\t\t\t\t\t•");
Mpetern();
// test 3
A++;
console.log("•Test #", A, "\tIs your car toyta > 800 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", engine > 800, "\t\t\t\t\t•");
Mpetern();
// test 4
A++;
console.log("•Test #", A, "\tIs your car toyta < 1600 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", engine < 1600, "\t\t\t\t\t•");
Mpetern();
// test 5
A++;
console.log("•Test #", A, "\tIs your car toyta <= 1500 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", engine <= 1500, "\t\t\t\t\t•");
Mpetern();
// test 6
A++;
console.log("•Test #", A, "\tIs your car toyta >= 1400 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points += 5;
console.log("•\t\tCongratulations you have gain 5 points your answer is =", engine >= 1400, "\t\t\t\t\t•");
Mpetern();
Lpetern();
console.log("•\t\tYou have Earned Total", Points, "Points   Now Level is advance harder test follow next\t\t\t•");
Lpetern();
Mpetern();
// creating fales
// test 7
A++;
console.log("•Test #", A, "\tIs your favorite car != 'Toyta'? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
// test 8
A++;
console.log("•Test #", A, "\tIs your car toyta == Suzuki Fx? I predict True.", "\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
// test 9
A++;
console.log("•Test #", A, "\tIs your car toyta < 800 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
// test 10
A++;
console.log("•Test #", A, "\tIs your car toyta > 1600 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
// test 11
A++;
console.log("•Test #", A, "\tIs your car toyta >= 1500 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
// test 12  
A++;
console.log("•Test #", A, "\tIs your car toyta >= 1400 cc? I predict True.", "\t\t\t\t\t\t\t•");
Mpetern();
Points -= 2.5;
console.log("•\t\tSorry you have Lost 2.5 points your answer is =", car != "Toyta", "\t\t\t\t\t\t•");
Mpetern();
Lpetern();
console.log("•\t", "Total Points =", 5 * 12, "Earned Points =", Points, "!!You Lost!! Your Earned Points is less then 30\t\t\t•");
Epetern();
