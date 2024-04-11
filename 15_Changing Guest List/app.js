// make a list of guset
let Glist = ["Faizan", "Rizwan", "Aziz"];
let petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 15•••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log(petern);
// printing guest list
Glist.forEach((Gl) => console.log(`•\tDear ${Gl}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t\tWe would be delighted to have you join us for dinner at our home. The table will be set,\t•\n•\tthe food will be delicious, and the company even better.\t\t\t\t\t\t•\n${petern}\n•\tLooking forward to sharing good food and great conversation with you!\t\t\t\t\t•\n•\tWarm Regards.\t\t\t\t\t\t\t\t\t\t\t\t•\n•\tMaqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t•\n${petern}`));
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
// storing not coming guest name in new variable
let Ncome = Glist[1];
// printing guest name that he will not come on today dinner
console.log(`\nWe regret to inform you that,${Ncome} will not come to dinner\n`);
//  modifying guest list
Glist.splice(1, 1, "Zubair");
// printing new guest list
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 15•••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log(petern);
// printing guest list
Glist.forEach((Gl) => console.log(`•\tDear ${Gl}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t\tWe would be delighted to have you join us for dinner at our home. The table will be set,\t•\n•\tthe food will be delicious, and the company even better.\t\t\t\t\t\t•\n${petern}\n•\tLooking forward to sharing good food and great conversation with you!\t\t\t\t\t•\n•\tWarm Regards.\t\t\t\t\t\t\t\t\t\t\t\t•\n•\tMaqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t•\n${petern}`));
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
export {};
