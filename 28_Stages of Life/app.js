// Exercise # 28
// setting fucntion for petern
function Mpetern() {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");
}
function Spetern() {
    console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 28•••••••••••••••••••••••••••••••••••••••••••••••••••••");
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
// now starting exercise no 28
var PersonAge = 0;
var ageType = " ";
Spetern();
Mpetern();
console.log("•\t\t\t\t\t\t==== Stage of Life ====\t\t\t\t\t\t•");
Mpetern();
function Age(PersonAge) {
    // PersonAge=pAGE  
    console.log("•\t\tPerson Age ...........................>", PersonAge, "\t\t\t\t\t\t\t•");
    Mpetern();
    // • If the person is less than 2 years old, print a message that the person is a baby.
    if (PersonAge < 2) {
        ageType = "Baby\t";
        // console.log("Age type",ageType)
    }
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    else if (PersonAge == 2 || PersonAge < 4) {
        ageType = "toddler";
    }
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    else if (PersonAge == 4 || PersonAge < 13) {
        ageType = "Kid\t";
    }
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    else if (PersonAge == 13 || PersonAge < 20) {
        ageType = "teenager";
    }
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    else if (PersonAge == 20 || PersonAge < 65) {
        ageType = "adult\t";
    }
    // • If the person is age 65 or older, print a message that the person is an elder.
    else if (PersonAge >= 65) {
        ageType = "elder\t";
    }
    console.log("•\t\tAs per age Person is a ...............>", ageType, "\t\t\t\t\t\t•");
    Sperator();
}
// checking if else and || logic from age 0 to 69
var A = 0;
while (A < 70) {
    Age(A);
    Mpetern();
    A++;
}
Epetern();
