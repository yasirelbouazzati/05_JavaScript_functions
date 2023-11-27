import isTypeOf from "./isTypeOf.js";

console.log(`Check a string: ${isTypeOf("Hi there", "string")}`);

console.log(`Check a string if a number: ${isTypeOf("Hi there", "number")}`);

console.log(`Check a string if a boolean: ${isTypeOf("Hi there", "boolean")}`);

console.log(`Check a number if a boolean: ${isTypeOf(8, "boolean")}`);

console.log(`Check a number if a number: ${isTypeOf(8, "number")}`);

console.log(`Check a number if a string: ${isTypeOf(8, "string")}`);

console.log(`Check a boolean if a boolean: ${isTypeOf(true, "boolean")}`);

console.log(`Check a boolean if a number: ${isTypeOf(true, "number")}`);

console.log(`Check a boolean if a string: ${isTypeOf(false, "string")}`);

console.log(
  `Check an array if a boolean: ${isTypeOf(["Apple", "Banana"], true)}`,
);

console.log(
  `Check an array if a number: ${isTypeOf(["Apple", "Banana"], "number")}`,
);

console.log(
  `Check an array if an array: ${isTypeOf(["Apple", "Banana"], Array.isArray)}`,
);

console.log(
  `Check an array if a string: ${isTypeOf(["Apple", "Banana"], "string")}`,
);
