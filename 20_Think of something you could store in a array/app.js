// Seeing the world
var petern = "•\t\t\t\t\t\t\t\t\t\t\t\t\t\t•";
var A = 1;
var B = 0;
var TOA = ["Cities", "Mountains", "River", "Language", "Friends"];
var task = 1;
console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••Exercise 20•••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log(petern);
// 1 storing location in array
var City = ["Karachi\t", "Shinghai", "Columbo\t", "Dehli\t", "Istanbol"];
var Mountains = ["K2\t", "Kargil\t", "Siyachin", "Falak Sher", "Malam Jabba"];
var River = ["Indus", "Chanab", "Jehlam", "Sawat", "Hub"];
var Language = ["Sindhi", "Urdu", "Punjabi", "Balochi", "Paston"];
var Friends = ["Kashif", "Hassan", "Faizan", "Taha", "Rashid"];
// Creating Orignal Order function
function OO() {
    if (B == 0) {
        console.log("• ", "Array # ", task++, "Printing", TOA[B], "name Array in list format\t\t\t\t\t\t\t\t•");
        console.log(petern);
        City.forEach(function (Shehar) {
            return console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t•");
        });
        console.log(petern);
    }
    if (B == 1) {
        console.log("• ", "Array # ", task++, "Printing", TOA[B], "name Array in list format\t\t\t\t\t\t\t•");
        console.log(petern);
        Mountains.forEach(function (Shehar) {
            return console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t•");
        });
        console.log(petern);
    }
    if (B == 2) {
        console.log("• ", "Array # ", task++, "Printing", TOA[B], "name Array in list format\t\t\t\t\t\t\t\t•");
        console.log(petern);
        River.forEach(function (Shehar) {
            return console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•");
        });
        console.log(petern);
    }
    if (B == 3) {
        console.log("• ", "Array # ", task++, "Printing", TOA[B], "name Array in list format\t\t\t\t\t\t\t•");
        console.log(petern);
        Language.forEach(function (Shehar) {
            return console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•");
        });
        console.log(petern);
    }
    if (B == 4) {
        console.log("• ", "Array # ", task++, "Printing", TOA[B], "name Array in list format\t\t\t\t\t\t\t•");
        console.log(petern);
        Friends.forEach(function (Shehar) {
            return console.log("• ", A++, "#", Shehar, "\t\t\t\t\t\t\t\t\t\t\t\t\t•");
        });
        console.log(petern);
    }
    B = B + 1;
    A = 1;
}
// 2 Printing Array in orignal orders without modifying array
OO();
OO();
OO();
OO();
OO();
console.log("•••••••••••••••••••••••••••••••••This program is created by Maqsood Ahmed••••••••••••••••••••••••••••••••••••••••\n");
