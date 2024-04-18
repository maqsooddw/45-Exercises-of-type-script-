// Exercise # 25
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 25•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 25
var Alien = ["Green"];
var point = 0;
var A = 0;
Spetern();
Mpetern();
console.log("•\t\t\t\t\t****Starting Allien Hit Game*****\t\t\t\t\t•");
Mpetern();
// task 1 • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// level 1
console.log("•\t\t\t\t\t\t==== Level 1 ====\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tIn 2050. An Alien Shown on screen and its a.......>", Alien[0], "Alien\t\t\t\t\t\•");
Mpetern();
console.log("•\t\tUser shot a fire and hit..........................>", Alien[0], "Alien\t\t\t\t\t\•");
if (Alien.includes("Green")) {
    point += 5;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
Alien.unshift("Red"); /* un commit to triger else statment */
// task 2 Write one version of this program that passes the if test and another thatfails. (The version that fails will have no output.)
if (Alien.includes("Red")) {
    // level 2
    Mpetern();
    console.log("•\t\t\t\t\t\t==== Level 2 ====\t\t\t\t\t\t•");
    Mpetern();
    console.log("•\t\tAnother Alien Shown again on screen and its a.....>", Alien[0], "Alien\t\t\t\t\t\•");
    Mpetern();
    console.log("•\t\tUser shot 2nd fire and hit........................>", Alien[0], "Alien\t\t\t\t\t\•");
    if (Alien.includes("Red")) {
        point += 5;
        Mpetern();
        console.log("•\t\tUser have earned..................................>", point - 5, ":Points\t\t\t\t\t•");
        Alien.splice(0, 1);
        // console.log(Alien)
        Lpetern();
    }
    // level 3
    Alien.push("YELLOW");
    Mpetern();
    console.log("•\t\t\t\t\t\t==== Level 3 ====\t\t\t\t\t\t•");
    Mpetern();
    console.log("•\t\tAnother Alien Shown again on screen and its a......>", Alien[0], "Alien\t\t\t\t\•");
    Mpetern();
    console.log("•\t\tUser shot 3rd fire and hit.........................>", Alien[0], "Alien\t\t\t\t\•");
    if (Alien.includes("yellow".toUpperCase())) {
        point += 5;
        Mpetern();
        console.log("•\t\tUser have earned...................................>", point - 10, ":Points\t\t\t\t\t•");
        Alien.splice(0, 1);
        // console.log(Alien)
        Lpetern();
    }
    // Boss level 
    Alien.push("Black");
    Mpetern();
    console.log("•\t\t\t\t\t\t==== Boss Level ====\t\t\t\t\t\t•");
    Mpetern();
    console.log("•\t\tAlien Boss Shown on screen and its a...............>", Alien[0], "Alien\t\t\t\t\•");
    Alien.unshift("Yellow");
    Mpetern();
    console.log("•\t\tAnother Alien Shown again on screen and its a......>", Alien[0], "Alien\t\t\t\t\•");
    Alien.unshift("Green");
    Mpetern();
    console.log("•\t\t3rd Alien Shown again on screen and its a..........>", Alien[0], "Alien\t\t\t\t\•");
    Alien.splice(1, 0, "Red");
    Mpetern();
    console.log("•\t\t4th Alien Shown again on screen and its a..........>", Alien[1], "Alien\t\t\t\t\t•");
    Mpetern();
    console.log("•\t\tUser shot brust fire and hit All...................>", Alien[0], "\,", Alien[1], "\,", Alien[2], "\&", Alien[3], "\t\t•");
    Alien.splice(0, 4);
    if (Alien.length == 0) {
        point += 100;
        Mpetern();
        console.log("•\t\tBoss level is cleared User have earned.............>", point - 15, ":Points\t\t\t\t•");
        Alien.splice(0, 1);
        // console.log(Alien)
        Lpetern();
        console.log("•\t\tTotal Earned Points................................>", point, ":Points\t\t\t\t•");
        Mpetern();
        console.log("•\t\t\t\t\t\t==== Game End ====\t\t\t\t\t\t•");
        Mpetern();
        Epetern();
    }
}
if (point <= 5) {
    console.log("•\t\tUser have earned ..............................>", point, ":Total Earned Points\t\t\t\t•");
    console.log("•\t\t\t\t\t\t==== Game End ====\t\t\t\t\t\t•");
    Epetern();
}
