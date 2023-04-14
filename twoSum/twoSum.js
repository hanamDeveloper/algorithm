/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const twoSum = function (nums, target) {
//   const result = [];
//   nums.forEach((num1, index1) => {
//     nums.forEach((num2, index2) => {
//       if (index1 !== index2 && num1 + num2 === target && result.length < 2) {
//         result.push(index1, index2);
//       }
//     });
//   });

//   return result;
// };

const twoSum = function (nums, target) {
  let result = [];
  const keyValue = {};

  nums.forEach((num, index) => {
    const findNum = target - num;
    if (keyValue[findNum] !== undefined && result.length < 2) {
      result = [keyValue[findNum], index];
    } else {
      keyValue[num] = index;
    }
  });

  return result;
};

module.exports = { twoSum };
