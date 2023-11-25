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
  // Check if the array has elements
  if (collection.length > 0) {
    let resultString = ""; // Initialize the resulting string

    // Iterate over the elements of the array
    for (let i = 0; i < collection.length; i++) {
      resultString += collection[i]; // Concatenate the current element

      // Add '|' if not the last element
      if (i < collection.length - 1) {
        resultString += " | ";
      }
    }

    return resultString; // Return the resulting string
  }

  return ""; // Return an empty string if the array is empty
}

export default transformCollectionToString;
