// Seeing the world

let petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
let A = 1;
let B = 0
let TOA=["Cities","Mountains","River","Language","Friends"]
let task = 1;

console.log(
  "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 20•••••••••••••••••••••••••••••••••••••••••••••••••••••"
);
console.log(petern);

// 1 storing location in array

let City = ["Karachi\t", "Shinghai", "Columbo\t", "Dehli\t", "Istanbol"];
let Mountains = ["K2\t","Kargil\t","Siyachin","Falak Sher","Malam Jabba"];
let River =["Indus","Chanab","Jehlam","Sawat","Hub"]
let Language = ["Sindhi","Urdu","Punjabi","Balochi","Paston"]
let Friends = ["Kashif","Hassan","Faizan","Taha","Rashid"]
// Creating Orignal Order function

function OO() {

  if (B==0){
  console.log(
    "• ",
    "Array # ",
    task++,
    "Printing",TOA[B],"name Array in list format\t\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  City.forEach((Shehar) =>
    console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
  console.log(petern)
 }

 if (B==1){
  console.log(
    "• ",
    "Array # ",
    task++,
    "Printing",TOA[B],"name Array in list format\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  Mountains.forEach((Shehar) =>
    console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
  console.log(petern)
 }


 if (B==2){
  console.log(
    "• ",
    "Array # ",
    task++,
    "Printing",TOA[B],"name Array in list format\t\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  River.forEach((Shehar) =>
    console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
  console.log(petern)
 }

 if (B==3){
  console.log(
    "• ",
    "Array # ",
    task++,
    "Printing",TOA[B],"name Array in list format\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  Language.forEach((Shehar) =>
    console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
  console.log(petern)
 }

 if (B==4){
  console.log(
    "• ",
    "Array # ",
    task++,
    "Printing",TOA[B],"name Array in list format\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  Friends.forEach((Shehar) =>
    console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
  console.log(petern)
 }

  B=B+1
  A=1
}

// 2 Printing Array in orignal orders without modifying array

OO();
OO();
OO();
OO();
OO();
console.log(
  "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
);
