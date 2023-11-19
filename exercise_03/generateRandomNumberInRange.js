/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * @param {number} limit
 * @returns {number}
 */

export default function generateRandomNumberInRange(limit) {
  const randomFloat = Math.random() * limit;

  const roundedRandomNumber = Math.round(randomFloat);

  return roundedRandomNumber;
}
