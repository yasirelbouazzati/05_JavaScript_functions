//imports
import formatStringByWordsLength from "./formatStringByWordsLength.js";

const case1_Input = "This is a long, long, long sentence.";

const case1_Output = formatStringByWordsLength(case1_Input);

console.log(`case1  input: "${case1_Input}"   output: "${case1_Output}"`);

const case2_Input = "This is short one.";

const case2_Output = formatStringByWordsLength(case2_Input);

console.log(` case2 input:  "${case2_Input}"  output: "${case2_Output}"`);
