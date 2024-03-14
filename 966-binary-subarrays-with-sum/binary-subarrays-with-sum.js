/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
  for(let i =0; i< nums.length; i++){
    let sum = 0;
    let k = i
    while(sum<=goal){
        sum = sum + nums[k]
        if(sum == goal){
            count++
        }
        k++;
    }
  }  
  return count
};