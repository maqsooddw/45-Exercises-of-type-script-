// Exercise # 45

// setting fucntion for petern
    function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 45•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 45

   //  creating simple function to store sandwitch iteam in array

  function carfunc(manufacturer: any, model: any, ...extras: string[]) {
  // console.log(manufacturer,model,extras)

    let car: any = {
      manufacturer: manufacturer,
      model: model,
    };
  
    extras.forEach(extra => {
      let [key, value] = extra.split(":");
      car[key.trim()] = value.trim();
    });
  
    return car; // return the constructed car object
  }
  
  let carX = carfunc("Toyota", "Corolla", "color: Red", "Year:2000", "used:Yes");
  let carY = carfunc("Honda", "City", "color: Black", "Year:2024", "used:No");
  console.log(carX); // Output the constructed car object
  Mpetern()
  Lpetern()
  Mpetern()
  console.log(carY); // Output the constructed car object
  Mpetern()
  Epetern()
  