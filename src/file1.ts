//npx ts-node file1.ts

//#################################################################### RegExp ####################################################################
const regex: RegExp = /to/;

console.log(regex.test("toMy"));
// result: true
console.log(regex.test("Myto"));
// result: true
console.log(regex.test("noTommy"));
// result: false
console.log(regex.test("7878734"));
// result: false
//###############################################################################################################################################

//#################################################################### keyof ####################################################################

//use case 1.    plocka ut keys från en type
type Staff = {
  name: string;
  salary: number;
};
const staffIntance: Staff = {
  name: "John",
  salary: 1000,
};
type staffKeys1 = keyof Staff; // "name" | "salary"

//use case 2.    funktion som plockar ut value från ett objekt med hjälp av key
type Product = {
  id: number;
  brand: string;
};
interface Disc extends Product {
  //ps type kan inte extenda type
  name: string;
  speed: number;
}
const disc: Disc = {
  id: 1,
  brand: "innova",
  name: "Star Destroyer",
  speed: 5,
};
console.log(getPropertyFromDisc(disc, "name")); //Star Destroyer
//console.log(getPropertyFromDisc(disc, "bannan")); //går inte att kompilera, ty bannan är ingen key i disc
function getPropertyFromDisc<T, propertyInT extends keyof T>(obj: T, key: propertyInT): T[propertyInT] {
  return obj[key];
}

//use case 3. sortera efter key i en array

const discs: Disc[] = [
  { id: 1, brand: "innova", name: "Star Destroyer", speed: 1 },
  { id: 2, brand: "innova", name: "Nova", speed: 5 },
  { id: 3, brand: "innova", name: "Moon", speed: 3 },
  { id: 4, brand: "innova", name: "Black hole", speed: 15 },
];

function sortByThisKey<T, Keys extends keyof T>(array: T[], key: Keys): T[] {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

console.log(sortByThisKey(discs, "speed"));

//###############################################################################################################################################
