// make a list of guset
let Glist = ["Faizan", "Rizwan", "Aziz"];
let petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
let A = 1

function PrintGuestList()

{
        console.log(
        "•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 16•••••••••••••••••••••••••••••••••••••••••••••••••••••"
        );
        console.log(petern);
        // printing guest list
        Glist.forEach((Gl) => 
  
        console.log(
        `•Guest#${A++} Dear ${Gl}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t We would be delighted to have you join us for dinner at our home. The table will be set,\t\t•\n•\t the food will be delicious, and the company even better.\t\t\t\t\t\t•\n${petern}\n•\t Looking forward to sharing good food and great conversation with you!\t\t\t\t\t•\n•\t Warm Regards.\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t Maqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t•\n${petern}`
        )
        );

}

// Printing old List of Guest
PrintGuestList()

// storing not coming guest name in new variable
let Ncome=Glist[1];

// printing guest name that he will not come on today dinner

console.log(
  `•\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t•\n•\t\t\t" We regret to inform you that,${Ncome} will not come to dinner "\t\t\t\t•\n${petern}`
)


//  modifying guest list
Glist.splice(1,1,"Zubair");

// printing new guest list
A=1
PrintGuestList()

// printing message that we have found a bigger dinner table, so now more space is available.
console.log(`•\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t•`)
console.log(
  `•\t!!Good News!! We have found a bigger dinner table, so now more space is available\t\t\t•\n${petern}`
)

// now adding a guest at start of the array
Glist.unshift("Ratan")

// now addding a gusest at end of array
A=1
Glist.push("Zain")

// now addding a gusest at the middel of array
let midGuest = Math.floor(Glist.length/2)

Glist.splice(midGuest,0,"Saim")

// printing new updated guest list
PrintGuestList()




console.log(
  "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
);



