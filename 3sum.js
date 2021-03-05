const threeSum = nums => {
  if (nums.length < 3) {
    return [];
  }
  let sums = [];
  let left;
  let right;
  let sum;
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      if (nums[right] === nums[right + 1]) {
        right--;
        continue;
      }
      sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        sums.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      }
    }
  }
  return sums;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([1,2,-2,-1]));
console.log(threeSum([1,-1,-1,0]))
// -1 -1 0 1