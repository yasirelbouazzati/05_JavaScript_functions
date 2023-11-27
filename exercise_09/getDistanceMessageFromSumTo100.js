/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * @param {number} value
 * @returns {string}
 */

import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";

import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";

import isGreaterThan from "../exercise_04/isGreaterThan.js";

const getDistanceMessageFromSumTo100 = function (value) {
  const roundedRandomNumber = generateRandomNumberInRange(100) + value;
  let diference = getDistanceFromThreshold(100, roundedRandomNumber);
  let mesage =
    "Sum with value " +
    roundedRandomNumber +
    " isd left in " +
    diference +
    " from number 100";
  if (isGreaterThan(roundedRandomNumber, 100)) {
    diference = getDistanceFromThreshold(roundedRandomNumber, 100);
    mesage =
      "Sum with value " +
      roundedRandomNumber +
      " exceeds in " +
      diference +
      " from number 100";
  }
  return mesage;
};

export default getDistanceMessageFromSumTo100;
