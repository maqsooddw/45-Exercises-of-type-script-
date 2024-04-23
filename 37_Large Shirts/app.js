// Exercise # 37
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 37•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 37
// crating a normal function
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Type Script"; }
    console.log("\u2022\tShirt Size is \"".concat(size, "\" and the message is printed on shirt \"").concat(message, "\"\t\t\t\t\u2022"));
}
//  printing function with default value
make_shirt();
Mpetern();
// printing function with changing in 1st arguments to medium size
make_shirt("Medium");
Mpetern();
// printing fuction with changes in both argumetns to any shirt
make_shirt("Small", "I love Pakistan");
Mpetern();
// printing fuction with changes only made in 2nd argumetns 
make_shirt(undefined, "I love Gov House");
Mpetern();
Epetern();
