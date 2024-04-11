// make a list of guset
let Glist = ["Faizan", "Rizwan", "Aziz"];
let petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
let A = 1

console.log(
  "•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 17•••••••••••••••••••••••••••••••••••••••••••••••••••••"
  );

function PrintGuestList()

{
        console.log(petern);
        // printing guest list
        Glist.forEach((Gl) => 
  
        console.log(
        `•Guest#${A++} Dear ${Gl}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t We would be delighted to have you join us for dinner at our home. The table will be set,\t\t•\n•\t the food will be delicious, and the company even better.\t\t\t\t\t\t•\n${petern}\n•\t Looking forward to sharing good food and great conversation with you!\t\t\t\t\t•\n${petern}\n•\t Warm Regards.\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t Maqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t•\n${petern}`
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
PrintGuestList();

// creating new tasks of Exercise 17

// letting guests know that we are sorry we can’t invite you to dinner

console.log(`•\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t•`);
console.log(
  `•Dear guests we are really regret to infrom you that due capicity issue we can only invite two person for dinner•\n${petern}`);

  // informing each gueest that sorry i can't inviate for dinner
  while (Glist.length>2)
    
    {
        let RemoveGlist = Glist.pop()

        console.log(`•Guest#${Glist.length+1} Dear ${RemoveGlist}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t I'm so sorry to say i am not be able to invite you. As much as i really wish we could celebrate\t•\n\•\t with you, i afraid that due to capacity, i have got to keep our guest list really small\t\t•\n${petern}`)

          
        
        
    }
 
// Print message that some guestes are still invited

console.log(`•\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t•`)
console.log(
  `•\t!!Good News!! there is some little space are available for therefore remain ${Glist.length} guest are still invited\t•\n${petern}`
)

// printing message for remaining each person that they are still invatited
A=1
  
Glist.forEach( 

  (GG) => console.log (`•Guest#${Glist.length-A--} Dear ${GG}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t You are still inviated and i would be delighted to have you join us for dinner at my home. \t\t•\n•\t The table will be set, the food will be delicious, and the company even better.\t\t\t•\n${petern}\n•\t Looking forward to sharing good food and great conversation with you!\t\t\t\t\t•\n${petern}\n•\t Warm Regards.\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t Maqsood Ahmed\t\t\t\t\t\t\t\t\t\t\t\t•\n${petern}`
)

)

console.log(`•\t\t\t\t\t!!Announcement!!\t\t\t\t\t\t\t•`)
console.log(
  `• We are regret to inform you that today dinner had been postponed and will infrom new date time and venue soon •\n${petern}`
)

// now prining remaining each guest that dinne is postponed and at the last print empty list

while (Glist.length>0)
    
  {
      let RemoveGlist = Glist.pop()

      console.log(`•Guest#${Glist.length+1} Dear ${RemoveGlist}\,\t\t\t\t\t\t\t\t\t\t\t\t•\n•\t I'm so sorry to say dinner had been postponed and will infrom new date time and venue soon\t\t•\n${petern}`)

        
      
      
  }
console.log("•\t Empty Guest List",Glist,"\t\t\t\t\t\t\t\t\t\t\t•")


console.log(
  "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
);



