/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water. */

var maxArea = function(height) {
  let max = 0;
  let initHeight, endHeight, area;
  for (let i = 0; i < height.length; i++) {
    initHeight = height[i];
    for (let j = i + 1; j < height.length; j++) {
      endHeight = height[j];
      if (initHeight < endHeight) {
        area = initHeight * (j - i);
      } else {
        area = endHeight * (j - i);
      }
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};

let height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));