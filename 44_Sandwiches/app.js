// Exercise # 44
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 44•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
console.clear();
Spetern();
Mpetern();
// now starting exercise no 44
//  creating simple function to store sandwitch iteam in array
var A = 1;
function sandwitch() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\u2022\tMaking a sandwitch for order #".concat(A, "\t\t\t\t\t\t\t\t\t\t\u2022"));
    Mpetern();
    item.forEach(function (ItemA) { return console.log("\u2022\tadding ".concat(ItemA, "\t\t\t\t\t\t\t\t\t\t\t\t\u2022")); });
    Lpetern();
    console.log("\u2022\tOrter#".concat(A, " is ready enjoy you meal\t\t\t\t\t\t\t\t\t\t\u2022"));
    A++;
}
// printing header
console.log("•\t\t\t\t   Tassori Sandwitch & Burger \t\t\t\t\t\t\t•");
console.log("•\t\t\t\t ============================== \t\t\t\t\t\t•");
Mpetern();
sandwitch("Chicken", "Tomattos", "cucuber");
Sperator();
sandwitch("Beef", "Tomattos", "cucuber", "Egg");
Sperator();
sandwitch("Beef", "Tomattos", "cucuber", "chicken", "onion");
Sperator();
Epetern();
