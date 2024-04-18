// Exercise # 31
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 31•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
    function Epetern(){console.log(
        "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
      );} 
      
    function Lpetern(){console.log(
        "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");}

    function Sperator (){console.log("•\t--------------xxxxxxxxxx--------------xxxxxxxxxxxx---------------xxxxxxxxxx------------\t\t\t•")

    }
      /* pettern function setted*/
      Spetern()
      Mpetern()
   // now starting exercise no 31
   
   // writing a check that is array is empty , If the array is empty, printing a message We need to find some users!

   //    condition • If the list is empty, print the message We need to find some users!
   let UserName=["Zafar","Shadab","Admin","Hassan","Rashid"]

   let isarrayEmpty = () => {if (UserName.length==0) {return true} if (UserName.length!=0){return false}}

   if (isarrayEmpty()==true){
 console.log("•\tWe need to find some users!",UserName,"\t\t\t\t\t\t\t\t\t\t•")
 Mpetern()
      }
else {

    let A=0

    while (A <= UserName.length)
     {
      if (UserName[A] != "Admin") 
         {
         console.log(`•\tIndex ${A} Hello ${UserName[A]}, thank you for logging in again`)
         Mpetern()}
      else if(UserName[A]==="Admin")
         {
         console.log(`•\tIndex ${A} Hello ${UserName[A]}, would you like to see a status report?`)
      Mpetern()}
      if (A==UserName.length-1) {
         A=6
      }
     A++
     
    }
      // • Removeing all usernames from your array, and printing  correct message.
      Sperator()
      Mpetern()
      A=0

      while (UserName.length>0) { UserName.forEach((Num:string) => 
            {
               if (isarrayEmpty()==true){
                  console.log("•\tWe need to find some users!",UserName,"\t\t\t\t\t\t\t\t\t\t•")
                  Mpetern()
                       }
           else if (Num!="Admin") {console.log(`•\tHello ${Num}, thank you for logging in again\t\t\t\t\t\t\t\t•`)}
             
           else {console.log(`•\tHello ${Num}, would you like to see a status report?\t\t\t\t\t\t\t•`)}
       }
      )
       
        Mpetern()
      
        UserName.pop()
        A++
        }}

        if (isarrayEmpty()==true){
         console.log("•\tWe need to find some users!",UserName,"\t\t\t\t\t\t\t\t\t\t•")
         Mpetern()
              }
        Epetern()

    
    

