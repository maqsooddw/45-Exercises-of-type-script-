// Exercise # 33
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 33•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
Spetern();
Mpetern();
// now starting exercise no 33
// creating varible 
var Num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var A = 0;
// 1st 2nd 3rd 4th 5th 6th7th 8th 9th
Num1.forEach(function (Char) {
    if (Char == 1) {
        console.log("\u2022\t".concat(Char, "st\t\t\t\t\t\t\t\t\t\t\t\t\t\u2022"));
    }
    if (Char == 2) {
        console.log("\u2022\t".concat(Char, "nd\t\t\t\t\t\t\t\t\t\t\t\t\t\u2022"));
    }
    if (Char == 3) {
        console.log("\u2022\t".concat(Char, "rd\t\t\t\t\t\t\t\t\t\t\t\t\t\u2022"));
    }
    if (Char >= 4) {
        console.log("\u2022\t".concat(Char, "th\t\t\t\t\t\t\t\t\t\t\t\t\t\u2022"));
    }
});
Mpetern();
Epetern();
