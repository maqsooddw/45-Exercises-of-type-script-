// Exercise # 39
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 39•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
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
   // now starting exercise no 39

   // crating a normal function
   function city_country(city:string,country:string="Pakistan"){

    return (`•\t${city} is in ${country}\t\t\t\t\t\t\t\t\t\t\t•`)
 }

//  calling function describe_city giving 1st arugment city name but default argument country not changed
  let city=[city_country("Karachi")]
  console.log(city[0])
  Mpetern()

//  calling function describe_city 2nd time giving 1st arugment city name but default argument country not changed
city.unshift(city_country("Sukkur"))
console.log(city[0])
Mpetern()

//  calling function describe_city 2nd time giving 1st arugment city name and made changes in to default arrgument country
city.unshift(city_country("coumbo","Srilank"))
console.log(city[0])
Mpetern()
Mpetern()
Epetern()







