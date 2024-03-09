/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let i = Infinity;
    let j = Infinity;

    for(let k=0; k<nums.length; k++){
        if(nums[k]<=i){
            i = nums[k]
        }
        if(nums[k]>i && nums[k]<= j){
            j = nums[k]
        }
        if(nums[k]>i && nums[k]>j){
            return true
        }
    }
return false
};