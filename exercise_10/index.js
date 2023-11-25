//imports
import transformCollectionToString from "./transformCollectionToString.js";

const caso1Input = ["apple", "grapes", "strawberries"];
const caso1Output = transformCollectionToString(caso1Input);
console.log(`Caso #1 - entrada: [${caso1Input}], salida: "${caso1Output}"`);

const caso2Input = [];
const caso2Output = transformCollectionToString(caso2Input);
console.log(`Caso #2 - entrada: [${caso2Input}], salida: "${caso2Output}"`);
