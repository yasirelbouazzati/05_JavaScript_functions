/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

/**
 * Checks if the type of a value matches the specified type.
 * For arrays, it uses Array.isArray() to check.
 * @param {string|number|boolean|Array} valueToBeChecked - The value to check the type of.
 * @param {boolean} type - The expected type (true for array, false for other types).
 * @returns {boolean} - True if the type matches, false otherwise.
 */
const isTypeOf = function (valueToBeChecked, type) {
  if (type) {
    return Array.isArray(valueToBeChecked);
  } else {
    return (
      typeof valueToBeChecked === "string" ||
      typeof valueToBeChecked === "number" ||
      typeof valueToBeChecked === "boolean"
    );
  }
};

export default isTypeOf;
