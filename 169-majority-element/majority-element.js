/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n=nums.length;
    let m=n/2;
    console.log(m)
    const counter = {};
    let max;
    if(n==1){return nums[0]}
    else{
    nums.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
        if(counter[ele]>m){
        max = ele
        }
    } else {
        counter[ele] = 1;
    }})
    
    return max  
}}
