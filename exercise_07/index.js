//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js";

const stringValue = "hello";
const numberValue = 42;
const booleanValue = true;
const arrayValue = [1, 2, 3];

const resultString = isTypeOf(stringValue, false);
console.log(`is ${stringValue} of type string? ${resultString}`);

const resultNumber = isTypeOf(numberValue, false);
console.log(`is ${numberValue} of type number? ${resultNumber}`);

const resultBoolean = isTypeOf(booleanValue, false);
console.log(`is ${booleanValue} of type boolean? ${resultBoolean}`);

const resultArray = isTypeOf(stringValue, false);
console.log(`is ${JSON.stringify(arrayValue)} of type array? ${resultArray}`);
