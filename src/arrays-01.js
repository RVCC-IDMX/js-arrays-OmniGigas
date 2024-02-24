/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/*
 * arrays-01.js
 * Language: javascript
 * Test: tests/arrays-01.test.js
 * Path: src/arrays-01.js
 *
 * Description: Basic array operations
 *
 * ? Arrays are a collection of values and are passed by reference
 * ? Arrays are zero-indexed
 * ? Arrays are mutable
 * ? Arrays are iterable
 * ? Arrays are objects
 * ? Because they are passed by reference, arrays can be modified
 * ? in a function and the changes will be permanent
 */

/**
 * Returns the first element (indexing from 0) of an array
 * @param {array} arr - the array
 * @returns {*} - the first (0th) element in the array
 * ? example: [1, 2, 3, 4, 5] => 1
 */
function getFirstValue(arr) {
  // write your code here & return value
  const firstNumber = arr[0];
  return firstNumber;
}

/**
 * Returns a new array with 4 elements
 * @param {*} a - 0th element of the array
 * @param {*} b - 1st element of the array
 * @param {*} c - 2nd element of the array
 * @param {*} d - 3rd element of the array
 * @returns {array} - array of the 4 elements
 */
function makeArray(a, b, c, d) {
  // write your code here & return value
  const listA = a;
  const listB = b;
  const listC = c;
  const listD = d;
  const entireArr = [listA, listB, listC, listD];
  return entireArr;
}

/**
 * Creates a new array of the first 5 prime numbers
 * @returns {array} array of the first 5 prime numbers
 * starting at 2
 * ? hint: use an array literal
 *
 */
function createFirstFivePrimes() {
  // write your code here & return value
  const primes = [2, 3, 5, 7, 11];
  return primes;
}
/**
 * Creates a new array with a number of elements
 * @param {number} size - number of elements in the array
 * @returns {array} - new array with the specified number of elements
 * ? create an array of numbers from 0 to size - 1
 * ? example: size = 3 => [0, 1, 2]
 * ? must use a for loop
 */
function createSizedArray(size) {
  // write your code here & return value
  for (let i = 0; i <= size; i++) {
    console.log(i);
  }
}

/**
 * Modifies the array by adding the number 1
 * both to the front and the back of the array
 * @param {array} arr - array to be modified
 * @returns modified array
 */
function modifyArrayByAdding(arr) {
  // write your code here & return value
  arr.push(1);
  arr.unshift(1);
  return arr;
}

/**
 * Modifies the array by deleting the beginning and end elements
 * @param {array} arr - the array to modify
 * @returns {array} - the modified array
 * ? example: [1, 2, 3, 4, 5] => [2, 3, 4]
 */
function modifyArrayByDeleting(arr) {
  // write your code here & return value
  arr.pop();
  arr.shift();
  return arr;
}

/**
 * Finds and returns the element in the array at a particular index
 * @param {array} arr - the passed in array
 * @param {number} index - the index at which to find the element
 * @returns {*} - the element at the specified index
 * ? example: [1, 2, 3, 4, 5], index = 2 => 3
 */
function findElementAtIndex(arr, index) {
  // write your code here & return value
  return arr[index];
}

/**
 * Finds the first index of an element in an array
 * @param {array} arr - the array
 * @returns {number} - integer index of the first occurrence of the element
 * ? example: [1, 2, 3, 4, 5], value = 3 => 2
 * ? example: [1, 2, 3, 4, 5], value = 6 => -1
 * ? hint: https://bit.ly/4bL1MxZ - Array Searching and Sorting Methods
 */
function findElementByValue(arr, value) {
  // write your code here & return value
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= value) return i;
  }
  return arr;
}

/**
 * Modifies the array replacing a value at index with a new value
 * @param {array} arr - the passed in array
 * @param {number} index - the index at which to find the element
 * @param {*} value - the value to be swapped
 * @returns {array} - the modified array
 * ? example: [1, 2, 3, 4, 5], index = 2, value = 0 => [1, 2, 0, 4, 5]
 */
function changeElementAtIndex(arr, index, value) {
  // write your code here & return value
  arr.splice(index, 1, value);
  return arr;
}

/**
 * Creates a string from an array of letters
 * @param {array} arr - array to use
 * @returns {string} - made from array elements
 * ? example: ['a', 'b', 'c'] => 'abc'
 * ? https://mzl.la/3ib7Dm3
 */
function makeStringFromArray(arr) {
  // write your code here & return value
  const unite = arr.join('');
  return unite;
}

/**
 * Create a shallow copy of an array
 * @param {array} arr - array to be cloned
 * @returns {array} - a new array with the same elements as the passed in array
 * ? example: [1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]
 * ? https://mzl.la/4bKFQ68- The spread operator
 */
function createShallowCopy(arr) {
  // write your code here & return value
  const copy = arr.slice(0);
  return copy;
}

module.exports = {
  getFirstValue,
  makeArray,
  createFirstFivePrimes,
  createSizedArray,
  modifyArrayByAdding,
  modifyArrayByDeleting,
  findElementAtIndex,
  findElementByValue,
  changeElementAtIndex,
  makeStringFromArray,
  createShallowCopy,
};
