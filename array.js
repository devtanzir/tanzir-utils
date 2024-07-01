/**
 * Divides an array into smaller subarrays of a specified size.
 * time complexity for this function : 0.81ms
 * @param {Array} arr - The array to divide.
 * @param {number} size - The size of each subarray.
 * @returns {Array} - A new array containing the subarrays.
 * @throws {Error} - Throws an error if the input is not a valid array or the size is not a positive integer.
 */

export const divide = (arr, size) => {
  if (!Array.isArray(arr) || !Number.isInteger(size) || size <= 0) {
    throw new Error(
      "Invalid input. Please provide a valid array and a positive integer size."
    );
  }
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    let divide = arr.slice(i, i + size);
    newArr.push(divide);
  }
  return newArr;
};

/**
 * Filters out falsy values from an array.
 * time complexity for this function : 0.065ms
 * @param {Array} arr - The array to filter.
 * @returns {Array} - A new array containing only truthy values from the original array.
 * @throws {TypeError} - Throws an error if the input is not an array.
 */
export const truthy = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  return arr.filter((value) => value);
};

/**
 * Concatenates elements to an array with a specified depth of flattening.
 * time complexity for this function : 0.065ms
 * @param {Array} arr - The initial array to which elements will be concatenated.
 * @param {Number} [flat=1] - The depth level specifying how deep a nested array structure should be flattened.
 * @param {...any} distribute - Additional elements or arrays to concatenate and flatten.
 * @returns {Array} - A new array with the concatenated and flattened elements.
 * @throws {Error} - Throws an error if the first argument is not an array.
 */

export const concat = (arr, flat = 1, ...distribute) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  return [...arr, ...distribute.flat(flat)];
};

/**
 * Difference Between Two Arrays
 * time complexity for this function : 0.064ms
 * @param {Array} arr1 - The first array
 * @param {Array} arr2 - The second array
 * @returns {Array} - Array containing elements that are in arr1 but not in arr2
 */

export const difference = (arr1, arr2) => {
  return arr1.filter((item) => !arr2.includes(item));
};
/**
 * Creates a duplicate-free version of an array.
 * @param {Array} array - The array to inspect.
 * @returns {Array} - Returns the new duplicate-free array.
 * @throws {TypeError} - Throws if input is not an array.
 */
export const uniq = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array.");
  }
  return [...new Set(array)];
};

/**
 * Creates an array of unique values that are included in all given arrays.
 * @param {Array} array - The first array to inspect.
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} - Returns the new array of shared values.
 * @throws {TypeError} - Throws if inputs are not arrays.
 */
export const intersection = (array, ...arrays) => {
  if (!Array.isArray(array) || arrays.some((arr) => !Array.isArray(arr))) {
    throw new TypeError("All inputs must be arrays.");
  }
  return array.filter((value) => arrays.every((arr) => arr.includes(value)));
};
/**
 * Creates an array of unique values, in order, from all given arrays.
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} - Returns the new array of combined values.
 * @throws {TypeError} - Throws if any input is not an array.
 */
export const union = (...arrays) => {
  if (arrays.some((arr) => !Array.isArray(arr))) {
    throw new TypeError("All inputs must be arrays.");
  }
  return [...new Set(arrays.flat())];
};
/**
 * Recursively flattens array.
 * @param {Array} array - The array to flatten.
 * @returns {Array} - Returns the new flattened array.
 * @throws {TypeError} - Throws if input is not an array.
 */
export const flattenDeep = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array.");
  }
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
};
