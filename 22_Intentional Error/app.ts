// Exercise # 22
// setting fucntion for petern
function Mpetern () {
    console.log("•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•");}
    
    function Spetern(){console.log(
      "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 22•••••••••••••••••••••••••••••••••••••••••••••••••••••");}
    
    function Epetern(){console.log(
        "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
      );} 
      
    function Lpetern(){console.log(
        "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");}
      /* petter function setted*/
    
      Spetern()
    
      Mpetern()
    // now starting exercise no 22

interface OfficeStaff
{Emp_Name:string,
 Emp_No:number,
 Emp_Department:string
}

let Staff1:OfficeStaff[]=[
{Emp_Name:"Zahoor Elahi",
 Emp_No:1009121,
 Emp_Department:"Finance Department",
},

{Emp_Name:"Shoaib Malik",
 Emp_No:1009211,
 Emp_Department:"Sales Department",
},

{Emp_Name:"Hanya Amir",
 Emp_No:1009213,
 Emp_Department:"Sales Department",
},

{Emp_Name:"Kashif Mehtab",
 Emp_No:1009214,
 Emp_Department:"Operation Department",
},
];

// setting varibale for international Error
let A=5

console.log("Creating International Error on subjected Array")
console.log("_______________________________________________")
Mpetern()
console.log("Araay Lent is =",Staff1.length)
Mpetern()
console.log("We have ask computer to print Index No\t\t:\t",A);
Mpetern()
console.log("Created Index Error(Internation Error)\t\t:\t",Staff1[A])
Mpetern()
Lpetern()

// now resolving error 

A=1

Mpetern()
console.log("Corrected International Error on subjected Array")
console.log("________________________________________________")
Mpetern()
console.log("Araay Lent is =",Staff1.length)
Mpetern()
console.log("We have ask computer to print Index No\t\t:\t",A);
Mpetern()
console.log("Corrected Index Error(Internation Error)\t:\t",Staff1[A])
Mpetern()
Epetern()



