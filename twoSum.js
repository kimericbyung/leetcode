/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (arr, target) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) {
        return [i , j];
      }
      sum = arr[i];
    }
  }
}
