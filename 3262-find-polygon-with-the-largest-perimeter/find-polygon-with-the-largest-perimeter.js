/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const n = nums.length
    //sort array
    nums.sort((a,b)=>a-b)

    //loop n times
    for(let i = n; i>0; i--){
    let sum = 0
    for(let j = 0;j<i-1;j++){
        sum += nums[j]
    }
    if(sum>nums[i-1]){
        return sum + nums[i-1]
    }
    }   
    return -1
};