/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * @param {string}  sentence
 * @returns {number}
 */

export default function getTotalWordsFromString(sentence) {
  const words = sentence.split(/\s+/);

  const totalWords = words.filter((word) => word !== "").length;

  return totalWords;
}
