/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * @param {array} collection
 * @returns {string}
 */

function transformCollectionToString(collection) {
  if (collection.length > 0) {
    let resultString = "";

    for (let i = 0; i < collection.length; i++) {
      resultString += collection[i];

      if (i < collection.length - 1) {
        resultString += " | ";
      }
    }

    return resultString;
  }

  return "";
}

export default transformCollectionToString;
