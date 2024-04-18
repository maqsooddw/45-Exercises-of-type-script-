// Exercise # 27
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 27•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 27
var Alien = ["Green"];
var point = 0;
var A = 0;
Spetern();
Mpetern();
console.log("•\t\t\t\t\t****Starting Allien Hit Game*****\t\t\t\t\t•");
Mpetern();
// • If the alien is green, print a message that the player earned 5 points.
console.log("•\t\t\t\t\t\t==== Version 1 ====\t\t\t\t\t\t•");
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
else if (Alien.includes("Yellow")) {
    point += 10;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
else if (Alien.includes("Red")) {
    point += 15;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
{
    console.log("•\t\tUser Going Next Level.............................>", point, ":Total Earned Points\t\t\t•");
    Lpetern();
}
// • If the alien is yellow, print a message that the player earned 10 points.
var gpoint = point;
Alien.splice(0, 1, "Yellow");
console.log("•\t\t\t\t\t\t==== Version 2 ====\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tIn 2050. An Alien Shown on screen and its a.......>", Alien[0], "Alien\t\t\t\t•");
Mpetern();
console.log("•\t\tUser shot a fire and hit..........................>", Alien[0], "Alien\t\t\t\t•");
if (Alien.includes("Green")) {
    point += 5;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
else if (Alien.includes("Yellow")) {
    point += 10;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
else if (Alien.includes("Red")) {
    point += 15;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
{
    console.log("•\t\tUser Going Next Level.............................>", point, ":Total Earned Points\t\t\t•");
    Lpetern();
}
// • If the alien is red, print a message that the player earned 15 points.
gpoint = point;
Alien.splice(0, 1, "Red");
console.log("•\t\t\t\t\t\t==== Version 3 ====\t\t\t\t\t\t•");
Mpetern();
console.log("•\t\tIn 2050. An Alien Shown on screen and its a.......>", Alien[0], "Alien\t\t\t\t\t•");
Mpetern();
console.log("•\t\tUser shot a fire and hit..........................>", Alien[0], "Alien\t\t\t\t\t•");
if (Alien.includes("Green")) {
    point += 5;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
else if (Alien.includes("Yellow")) {
    point += 10;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
else if (Alien.includes("Red")) {
    point += 15;
    Mpetern();
    console.log("•\t\tUser have earned..................................>", point - gpoint, ":Points\t\t\t\t\t•");
    Alien.splice(0, 1);
    // console.log(Alien)
    Lpetern();
}
{
    console.log("•\t\tGame End Total Earn Points........................>", point, ":Total Earned Points\t\t\t•");
    Epetern();
}
