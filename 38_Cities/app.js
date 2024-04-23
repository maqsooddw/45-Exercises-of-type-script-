// Exercise # 37
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 38•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\u2022\t".concat(city, " is in ").concat(country, "\t\t\t\t\t\t\t\t\t\t\t\u2022"));
}
//  calling function describe_city giving 1st arugment city name but default argument country not changed
describe_city("Karachi");
Mpetern();
//  calling function describe_city 2nd time giving 1st arugment city name but default argument country not changed
describe_city("Sukkur");
Mpetern();
//  calling function describe_city 2nd time giving 1st arugment city name and made changes in to default arrgument country
describe_city("Columbo", "Srilanka");
Mpetern();
Epetern();
