// Seeing the world

let petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
let A = 1;
let task = 1;

console.log(
  "\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 18•••••••••••••••••••••••••••••••••••••••••••••••••••••"
);
console.log(petern);

// 1 storing location in array

let City = ["Karachi", "Shinghai", "Columbo", "Dehli", "Istanbol"];

console.log("•\t", "Task # ", task++, " Array is created", City, "\t\t\t•");

console.log(petern);

// Creating Orignal Order function

function OO() {
  console.log(
    "•\t",
    "Task # ",
    task++,
    "Printing cities name Array in orignal Orders\t\t\t\t\t\t\t•"
  );
  console.log(petern);

  City.forEach((Shehar) =>
    console.log("•\t", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );
}

// 2 Printing Array in orignal orders without modifying array

OO();

// 3 Printing Array in alphabetical orders without modifying array

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Printing cities name Array in alphabetical Orders\t\t\t\t\t\t•"
);
console.log(petern);

let sorta = [...City];

sorta
  .sort()
  .forEach((Shehar1) =>
    console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );

// 4 Printing Array in orignal orders without modifying array

A = 1;
console.log(petern);

OO();

// 5 Printing Array in reverse alphabetical orders without modifying array

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Printing cities name Array in reverse alphabetical Orders\t\t\t\t\t•"
);
console.log(petern);

let sortd = [...City];

sortd
  .sort()
  .reverse()
  .forEach((Shehar1) =>
    console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );

// 6 Printing Array in orignal orders without modifying array

A = 1;
console.log(petern);

OO();

// 7 Printing Array in reverse orders orders

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Printing cities name Array in reverse Orders\t\t\t\t\t\t\t•"
);
console.log(petern);

City.reverse().forEach((Shehar1) =>
  console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
);

// 8 Printing Array revesing array back to there orignal formation

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Reversing back cities name Array to orignal formation and Printing cities Array name\t\t•"
);
console.log(petern);

City.reverse().forEach((Shehar1) =>
  console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
);

// 9 Sorting and printing Array in alphabetical orders

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Sorting and printing Array in alphabetical orders\t\t\t\t\t\t•"
);
console.log(petern);

City.sort().forEach((Shehar1) =>
  console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
);

// 10 Sorting and printing Array in reverse alphabetical orders

A = 1;

console.log(petern);
console.log(
  "•\t",
  "Task # ",
  task++,
  "Sorting and printing Array in reverse alphabetical orders\t\t\t\t\t•"
);
console.log(petern);

City.sort()
  .reverse()
  .forEach((Shehar1) =>
    console.log("•\t", A++, "#", Shehar1, "\t\t\t\t\t\t\t\t\t\t\t\t•")
  );

console.log(petern);

console.log(
  "•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n"
);
