// Exercise # 29
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 29•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 29
var favorite_fruits = ["Apple", "Mango", "Orange"];
// creating function
console.log("•\t\t\t\t\t\t==== Favorite Fruit ====\t\t\t\t\t•");
function Phall(fruit1) {
    Mpetern();
    console.log("•\t\tHi User do you want.......>", fruit1, "\t\t\t\t\t\t\t\t•");
    Mpetern();
    if (favorite_fruits.includes(fruit1)) {
        console.log("\u2022\t\tI really like ".concat(fruit1, "!\t\t\t\t\t\t\t\t\t\t\u2022"));
        Lpetern();
    }
    else {
        console.log("\u2022\t\tSorry can't find in array basket ".concat(fruit1, "!\t\t\t\t\t\t\t\u2022"));
        Sperator();
    }
}
// statment 1
var fruit1 = "Apple";
Phall(fruit1);
// statment 2
fruit1 = "Banana";
Phall(fruit1);
// statment 3
fruit1 = "Orange";
Phall(fruit1);
// statment 4
fruit1 = "Strawberry";
Phall(fruit1);
// statment 5
fruit1 = "Mango";
Phall(fruit1);
Mpetern();
Epetern();
