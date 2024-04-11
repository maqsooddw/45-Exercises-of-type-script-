// make a list of guset
var Glist = ["Faizan", "Rizwan", "Aziz"];
var petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
var A = 1;
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 17•••••••••••••••••••••••••••••••••••••••••••••••••••••");
function PrintGuestList() {
    console.log(petern);
    // printing guest list
    Glist.forEach(function (Gl) {
        return console.log("\u2022Guest#".concat(A++, " Dear ").concat(Gl, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t We would be delighted to have you join us for dinner at our home. The table will be set,\t\t\u2022\n\u2022\t the food will be delicious, and the company even better.\t\t\t\t\t\t\u2022\n").concat(petern, "\n\u2022\t Looking forward to sharing good food and great conversation with you!\t\t\t\t\t\u2022\n").concat(petern, "\n\u2022\t Warm Regards.\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t Maqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n").concat(petern));
    });
}
// Printing old List of Guest
PrintGuestList();
// storing not coming guest name in new variable
var Ncome = Glist[1];
// printing guest name that he will not come on today dinner
console.log("\u2022\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t\u2022\n\u2022\t\t\t\" We regret to inform you that,".concat(Ncome, " will not come to dinner \"\t\t\t\t\u2022\n").concat(petern));
//  modifying guest list
Glist.splice(1, 1, "Zubair");
// printing new guest list
A = 1;
PrintGuestList();
// printing message that we have found a bigger dinner table, so now more space is available.
console.log("\u2022\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t\u2022");
console.log("\u2022\t!!Good News!! We have found a bigger dinner table, so now more space is available\t\t\t\u2022\n".concat(petern));
// now adding a guest at start of the array
Glist.unshift("Ratan");
// now addding a gusest at end of array
A = 1;
Glist.push("Zain");
// now addding a gusest at the middel of array
var midGuest = Math.floor(Glist.length / 2);
Glist.splice(midGuest, 0, "Saim");
// printing new updated guest list
PrintGuestList();
// creating new tasks of Exercise 17
// letting guests know that we are sorry we can’t invite you to dinner
console.log("\u2022\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t\u2022");
console.log("\u2022Dear guests we are really regret to infrom you that due capicity issue we can only invite two person for dinner\u2022\n".concat(petern));
// informing each gueest that sorry i can't inviate for dinner
while (Glist.length > 2) {
    var RemoveGlist = Glist.pop();
    console.log("\u2022Guest#".concat(Glist.length + 1, " Dear ").concat(RemoveGlist, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t I'm so sorry to say i am not be able to invite you. As much as i really wish we could celebrate\t\u2022\n\u2022\t with you, i afraid that due to capacity, i have got to keep our guest list really small\t\t\u2022\n").concat(petern));
}
// Print message that some guestes are still invited
console.log("\u2022\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t\u2022");
console.log("\u2022\t!!Good News!! there is some little space are available for therefore remain ".concat(Glist.length, " guest are still invited\t\u2022\n").concat(petern));
// printing message for remaining each person that they are still invatited
A = 1;
Glist.forEach(function (GG) { return console.log("\u2022Guest#".concat(Glist.length - A--, " Dear ").concat(GG, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t You are still inviated and i would be delighted to have you join us for dinner at my home. \t\t\u2022\n\u2022\t The table will be set, the food will be delicious, and the company even better.\t\t\t\u2022\n").concat(petern, "\n\u2022\t Looking forward to sharing good food and great conversation with you!\t\t\t\t\t\u2022\n").concat(petern, "\n\u2022\t Warm Regards.\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t Maqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n").concat(petern)); });
console.log("\u2022\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t\u2022");
console.log("\u2022 We are regret to inform you that today dinner had been postponed and will infrom new date time and venue soon \u2022\n".concat(petern));
// now prining remaining each guest that dinne is postponed and at the last print empty list
while (Glist.length > 0) {
    var RemoveGlist = Glist.pop();
    console.log("\u2022Guest#".concat(Glist.length + 1, " Dear ").concat(RemoveGlist, ",\t\t\t\t\t\t\t\t\t\t\t\t\u2022\n\u2022\t I'm so sorry to say dinner had been postponed and will infrom new date time and venue soon\t\t\u2022\n").concat(petern));
}
console.log("•\t Empty Guest List", Glist, "\t\t\t\t\t\t\t\t\t\t\t•");
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
