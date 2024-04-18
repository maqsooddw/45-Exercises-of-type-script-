// Exercise # 26
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 26•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
    function Epetern(){console.log(
        "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
      );} 
      
    function Lpetern(){console.log(
        "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");}

    function Sperator (){console.log("•\t--------------xxxxxxxxxx--------------xxxxxxxxxxxx---------------xxxxxxxxxx------------\t\t\t•")

    }
      /* pettern function setted*/



    // now starting exercise no 26
  
    let Alien=["Green"];
    let point=0
    let A=0
    Spetern()
    Mpetern()
    console.log("•\t\t\t\t\t****Starting Allien Hit Game*****\t\t\t\t\t•")
    Mpetern()

// task 1 • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// level 1

    console.log("•\t\t\t\t\t\t==== Level 1 ====\t\t\t\t\t\t•")
    Mpetern()
    console.log("•\t\tIn 2050. An Alien Shown on screen and its a.......>",Alien[0],"Alien\t\t\t\t\t\•");
    Mpetern()
      
    console.log("•\t\tUser shot a fire and hit..........................>",Alien[0],"Alien\t\t\t\t\t\•");
  

  
    if (Alien.includes("Green")){
    
      point+=5
      Mpetern()
      console.log("•\t\tUser have earned..................................>",point,":Points\t\t\t\t\t•")
      Alien.splice(0,1)
      // console.log(Alien)
      Lpetern()
      }
  {
  console.log("•\t\tUser Going Next Level....................................>",point,":Total Earned Points\t\t•")
    Lpetern()
  }

  // task 2 • 2nd vesion If the alien’s color isn’t green, print a statement that the player just earned 10 points.

Alien.push("Orange")

console.log("•\t\tIn 5050. An Alien Shown on screen and its a.......>",Alien[0],"Alien\t\t\t\t\•");
Mpetern()

console.log("•\t\tUser shot a fire and hit..........................>",Alien[0],"Alien\t\t\t\t\•");

  if (Alien[0]!="Green"){
    
    point+=10
    Mpetern()
    console.log("•\t\tUser have earned..................................>",point-5,":Points\t\t\t\t\t•")
    Alien.splice(0,1)
    // console.log(Alien)
    Lpetern()
    }
      console.log("•\t\tUser Going Next Level....................................>",point,":Total Earned Points\t\t•")
      Lpetern()
// task # 3 • Write one version of this program that runs the if block and another that runs the else block.

if (Alien.length==0){
Mpetern()
console.log("•\t\tUser shot a fire but no Alien Arried at screen.......>",Alien[0],"Alien\t\t\t\t\•");
Mpetern()}

{
  Alien.unshift("Yellow")
  
console.log("•\t\tIn 5050. New Alien Shown on screen and its a.........>",Alien[0],"Alien\t\t\t\t\•");
Mpetern()
console.log("•\t\tUser shot a fire and hit.............................>",Alien[0],"Alien\t\t\t\t\•");

if (Alien.includes("Yellow")){
    
  point+=10
  Mpetern()
  console.log("•\t\tUser have earned.....................................>",point-15,":Points\t\t\t\t•")
  Alien.splice(0,1)
  // console.log(Alien)
  Lpetern()
  }}  

 if (point>=10){
  Mpetern()
  console.log("•\t\tUser have earned ....................................>",point,":Total Earned Points\t\t\t•")
  console.log("•\t\t\t\t\t\t==== Game End ====\t\t\t\t\t\t•")
  Lpetern()}

  
 