/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

/**
 * @param {string | number | boolean | array}  value
 * @param {boolean}  type
 * @returns {boolean}
 */

export default function isTypeOf(value, type) {
  if (type) {
    return Array.isArray(value);
  } else {
    const valueType = typeof value;
    return valueType !== "undefined" && valueType !== "object";
  }
}
