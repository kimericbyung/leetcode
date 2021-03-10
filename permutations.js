var permute = function(nums) {
  var rotations = function(arr) {
    if (arr.length === 1) {
      return [arr]
    }
    let perms = [];
    let rest, head, permutation;
    for (let i = 0; i < arr.length; i++) {
      head = arr[i];
      rest = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length + 1)]
      permutation = rotations(rest);
      for (let j = 0; j < permutation.length; j++) {
        perms.push([head, ...permutation[j]])
      }
    }
    return perms;
  }
  let perms = rotations(nums);
  return perms;
};