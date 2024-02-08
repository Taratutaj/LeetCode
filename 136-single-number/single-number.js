/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { 
    for(let i =0; i<nums.length; i++){
        const result = nums.filter((number) => number==nums[i]);
        if(result.length == 1){
            return result[0]
        }
    }
};