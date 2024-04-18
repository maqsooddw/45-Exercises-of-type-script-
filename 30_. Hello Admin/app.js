// Exercise # 30
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 30•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 30
// creating array
var UserName = ["Zafar", "Shadab", "Admin", "Hassan", "Rashid"];
var A = 0;
while (A <= UserName.length) {
    if (UserName[A] != "Admin") {
        console.log("\u2022\tIndex ".concat(A, " Hello ").concat(UserName[A], ", thank you for logging in again"));
        Mpetern();
    }
    else if (UserName[A] === "Admin") {
        console.log("\u2022\tIndex ".concat(A, " Hello ").concat(UserName[A], ", would you like to see a status report?"));
        Mpetern();
    }
    if (A == UserName.length - 1) {
        A = 6;
    }
    A++;
}
Epetern();
