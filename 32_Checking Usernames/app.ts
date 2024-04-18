// Exercise # 32
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 32•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 32

   // creating varible 
   const current_users = ["Usman Ghazi","Shayan Ali","Noor Chasham","JHON ALYA","khalid hussain","ZAFAR ZADRAN","abdul razak"];

   const new_users = ["Maqsood Ahmed","Hassan Karim","zafar zadran","jhon alya","USMAN GHAZI","Rizwan Mubeen","Abdul Razak"]

   // coping both varibale to lower case for comparison is case insensitive 

   const lowercurrent_user:string[] = current_users.map  ((User:string) => {return User.toLowerCase()})
   const lownew_users:string[] = new_users.map ((UserN:string) => {return UserN.toLowerCase()})


   let A=0
   let B=0

  /* console.log (current_users.length,current_users);
   console.log (lowercurrent_user.length,lowercurrent_user)


   console.log(new_users.length,new_users)
   console.log(lownew_users.length,lownew_users)*/

   while (A<lownew_users.length){
// console.log(A)

    if (lowercurrent_user.includes(lownew_users[B])) {
    console.log("•\tIndex",B,new_users[B],"...> the person will need to enter a new username.\t\t\t\t\t•")
    Mpetern()
    B++
    A++
    }

    else if (!lowercurrent_user.includes(lownew_users[B]))
    {console.log("•\tIndex",B,new_users[B],"...> username is available.\t\t\t\t\t\t\t•")
    Mpetern()
    B++
    A++
    // console.log("checking esle if b value",new_users[B], B)
    }
    

    }

Epetern()
    
 
