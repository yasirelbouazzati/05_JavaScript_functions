//imports
import transformCollectionToString from "./transformCollectionToString.js";

const caso1Input = ["apple", "grapes", "strawberries"];
const caso1Output = transformCollectionToString(caso1Input);
console.log(`Case1 input: [${caso1Input}], output: "${caso1Output}"`);

const caso2Input = [];
const caso2Output = transformCollectionToString(caso2Input);
console.log(`Case2 input: [${caso2Input}], output: "${caso2Output}"`);
