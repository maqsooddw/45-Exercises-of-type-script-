// Exercise # 41
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 41•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
    function Epetern(){console.log(
        "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
      );} 
      
    function Lpetern(){console.log(
        "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");}

    function Sperator (){console.log("•\t--------------xxxxxxxxxx--------------xxxxxxxxxxxx---------------xxxxxxxxxx------------\t\t\t•")

    }
      /* pettern function setted*/
      console.clear()
      Spetern()
      Mpetern()
   // now starting exercise no 41

  //  creating an array of magician name

  let magician_name:string[]=["Champman","Babar Azam","Rachin Revend","Saim Ayub"]

  let magician_name2:string[]=["Junaid Bhao","Kamran Khan","Shaheen Shah","Hammad Ali"]

   // crating a normal function

   function show_magicians (magicianarray:string[]){
    magicianarray.forEach(magician => console.log(`•\t Magician ${magician}\t\t\t\t\t\t\t\t\t\t\t•`))
    Mpetern()
    
   }
  //  printing magician set 1
   show_magicians(magician_name)
  //  printing magician set 2
   show_magicians(magician_name2)

   Epetern()
