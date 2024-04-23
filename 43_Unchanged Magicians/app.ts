// Exercise # 43
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 43•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 43

  //  creating an array of magician name

  let magician_name:string[]=["Champman","Babar Azam","Rachin Revend","Saim Ayub"]

   // crating a normal function for print list wise

   
   // creating a normal function to print array list wise

   function show_magicians (magicianarray:string[]){
    magicianarray.forEach(magician => console.log(`•\t Magician ${magician}\t\t\t\t\t\t\t\t\t\t\t•`))
    Mpetern()
    }
// creating a normal function to ARRAY string value with The great
    function greatmagician(magicianarray1:string[]){
      return magicianarray1.map(GName => `The Great ${GName}`)
      }
  


  //  printing magician name without The Great
  console.log(`•\t   Orignal Array \t\t\t\t\t\t\t\t\t\t\t•`)
  console.log(`•\t ================= \t\t\t\t\t\t\t\t\t\t\t•`)
   show_magicians(magician_name)
  
  //  making a copy of magician name array 

  let copy_magician_name=magician_name.slice()

//  printing magician name without The Great
console.log(`•\t   Copy of Orignal Array \t\t\t\t\t\t\t\t\t\t•`)
console.log(`•\t ========================= \t\t\t\t\t\t\t\t\t\t•`)
 show_magicians(copy_magician_name)  


  //  add The Great with each value of array
   let G1:string[]=greatmagician(copy_magician_name)
   Mpetern()

  //  printing magician name with The Great
  console.log(`•\t   Copy of Orignal Array With The Great \t\t\t\t\t\t\t\t•`)
  console.log(`•\t ======================================== \t\t\t\t\t\t\t\t•`)
   show_magicians(G1)

   Epetern()
