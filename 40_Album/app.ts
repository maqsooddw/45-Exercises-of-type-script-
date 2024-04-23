// Exercise # 40
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 40•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 40

   // crating a normal function
   function make_album(artist_name:string,album_title:string,Track_number?:number){
// creating condition if user input track no 
    if (Track_number==undefined)
    return (`•\tCurrent plaing track artist name"${artist_name}", album title is"${album_title}"\t\t\t•`)
// else user input track number then 
    else {
      return (`•\tCurrent plaing track artist name"${artist_name}", album title is"${album_title}"and track number is"${Track_number}"\t•`)

    }
 }

//  calling function make_album with inputing 1st and 2nd argument only
 let play1=make_album("Shehzad Roy","Sali to mani nahi")
 console.log(play1)

 
//  calling funcing make_album withinputing 1st,2nd and 3rd optation argument
 Mpetern()
let play2=make_album("Shehzad Roy","Sali to mani nahi",20)
 console.log(play2)
 Mpetern()
 Epetern()