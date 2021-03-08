// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

var divide = function(dividend, divisor) {
  let num = 0;
  let neg = 1;
  if (dividend < 0 && divisor > 0) {
    neg = -1;
    dividend *= -1;
  } else if (dividend > 0 && divisor < 0) {
    neg = -1;
    divisor *= -1;
  } else if (dividend < 0 && divisor < 0) {
    dividend *= -1;
    divisor *= -1;
  }
  for (let i = 0; i < (Math.pow(2, 31) - 1); i++) {
    dividend -= divisor;
    if (dividend >= 0) {
      num++;
      if (dividend === 0) {
        break;
      }
    } else {
      break;
    }
  }
  return num * neg;
};

let dividend = -1;
let divisor = -1;

dividend -= divisor;
console.log(dividend)