/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    console.log(nums)
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    console.log(nums)
    nums.sort((a,b)=>a-b);
    console.log(nums)
    return nums
};