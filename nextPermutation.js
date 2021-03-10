var nextPermutation = function(nums) {
  // find the first decreasing number going from right to left
  // once found, go from left to right to find the smallest number that is greater than the initial number
  // swap initial number and second number
  // reverse array from initial number index + 1 to end of array
  for (let i = nums.length - 2; i > -1; i--) {
    if (nums[i] < nums[i + 1]) {
      console.log(nums[i]);
    }
  }
};
