//import 'checkCollectionHasElements' and execute

import checkCollectionHasElements from "./checkCollectionHasElements.js";

const arrayElemnts = [1, 2, 3];

const emptyArray = [];

const result1 = checkCollectionHasElements(arrayElemnts);

console.log(`does the array have elements? ${result1}`);

const result2 = checkCollectionHasElements(emptyArray);

console.log(`does the empty array have elements? ${result2}`);
