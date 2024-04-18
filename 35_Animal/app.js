// Exercise # 35
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 35•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 35
// creating varible
var Animal = ["Tiger", "Loin", "Wolf"];
// using for loop set1 to print  massege and array data 
for (var _i = 0, Animal_1 = Animal; _i < Animal_1.length; _i++) {
    var a = Animal_1[_i];
    if (a == "Tiger") {
        console.log("\u2022\tA ".concat(a, " is fastest animal\t\t\t\t\t\t\t\t\t\t\u2022"));
        Mpetern();
    }
    else if (a == "Loin") {
        console.log("\u2022\tA ".concat(a, " is the king of jungel\t\t\t\t\t\t\t\t\t\t\u2022"));
        Mpetern();
    }
    else if (a == "Wolf") {
        console.log("\u2022\tA ".concat(a, " hunt in a group\t\t\t\t\t\t\t\t\t\t\t\u2022"));
        Mpetern();
    }
}
// Add a line at the end of your progra
Mpetern();
console.log("\u2022\tAll of the above Animal are carnivorous predators\t\t\t\t\t\t\t\u2022");
Mpetern();
Epetern();
