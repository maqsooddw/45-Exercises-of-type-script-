// Exercise # 44

// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 44•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 44

  //  creating simple function to store sandwitch iteam in array

  let A=1

  function sandwitch (...item:string[]){
  console.log(`•\tMaking a sandwitch for order #${A}\t\t\t\t\t\t\t\t\t\t•`);
  Mpetern()
  item.forEach(ItemA => console.log(`•\tadding ${ItemA}\t\t\t\t\t\t\t\t\t\t\t\t•`));
  Lpetern()
  console.log(`•\tOrter#${A} is ready enjoy you meal\t\t\t\t\t\t\t\t\t\t•`);
  A++
  }
// printing header
  console.log("•\t\t\t\t   Tassori Sandwitch & Burger \t\t\t\t\t\t\t•")
  console.log("•\t\t\t\t ============================== \t\t\t\t\t\t•")
  Mpetern()

  sandwitch("Chicken","Tomattos","cucuber")
  Sperator()
  sandwitch("Beef","Tomattos","cucuber","Egg")
  Sperator()
  sandwitch("Beef","Tomattos","cucuber","chicken","onion")
  Sperator()
  Epetern()
