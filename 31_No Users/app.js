// Exercise # 31
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 31•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 31
// writing a check that is array is empty , If the array is empty, printing a message We need to find some users!
//    condition • If the list is empty, print the message We need to find some users!
var UserName = ["Zafar", "Shadab", "Admin", "Hassan", "Rashid"];
var isarrayEmpty = function () { if (UserName.length == 0) {
    return true;
} if (UserName.length != 0) {
    return false;
} };
if (isarrayEmpty() == true) {
    console.log("•\tWe need to find some users!", UserName, "\t\t\t\t\t\t\t\t\t\t•");
    Mpetern();
}
else {
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
    // • Removeing all usernames from your array, and printing  correct message.
    Sperator();
    Mpetern();
    A = 0;
    while (UserName.length > 0) {
        UserName.forEach(function (Num) {
            if (isarrayEmpty() == true) {
                console.log("•\tWe need to find some users!", UserName, "\t\t\t\t\t\t\t\t\t\t•");
                Mpetern();
            }
            else if (Num != "Admin") {
                console.log("\u2022\tHello ".concat(Num, ", thank you for logging in again\t\t\t\t\t\t\t\t\u2022"));
            }
            else {
                console.log("\u2022\tHello ".concat(Num, ", would you like to see a status report?\t\t\t\t\t\t\t\u2022"));
            }
        });
        Mpetern();
        UserName.pop();
        A++;
    }
}
if (isarrayEmpty() == true) {
    console.log("•\tWe need to find some users!", UserName, "\t\t\t\t\t\t\t\t\t\t•");
    Mpetern();
}
Epetern();
