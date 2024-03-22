// make a list of guset
var Glist = ["Faizan", "Rizwan", "Aziz"];
var petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 15•••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log(petern);
// printing guest list
Glist.forEach(function (Gl) {
    return console.log("\u2022\tDear ".concat(Gl, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t\tWe would be delighted to have you join us for dinner at our home. The table will be set,\t\u2022\n\u2022\tthe food will be delicious, and the company even better.\t\t\t\t\t\t\u2022\n").concat(petern, "\n\u2022\tLooking forward to sharing good food and great conversation with you!\t\t\t\t\t\u2022\n\u2022\tWarm Regards.\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\tMaqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n").concat(petern));
});
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
// storing not coming guest name in new variable
var Ncome = Glist[1];
// printing guest name that he will not come on today dinner
console.log("\nWe regret to inform you that,".concat(Ncome, " will not come to dinner\n"));
//  modifying guest list
Glist.splice(1, 1, "Zubair");
// printing new guest list
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 15•••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log(petern);
// printing guest list
Glist.forEach(function (Gl) {
    return console.log("\u2022\tDear ".concat(Gl, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t\tWe would be delighted to have you join us for dinner at our home. The table will be set,\t\u2022\n\u2022\tthe food will be delicious, and the company even better.\t\t\t\t\t\t\u2022\n").concat(petern, "\n\u2022\tLooking forward to sharing good food and great conversation with you!\t\t\t\t\t\u2022\n\u2022\tWarm Regards.\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\tMaqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n").concat(petern));
});
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
