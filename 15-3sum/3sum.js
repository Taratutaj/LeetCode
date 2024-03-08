/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let n=nums.length
    let arr=[]
    let sum = 0
    
    
    for(let i = 0; i<n-2;i++){ 
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        let l = i+1;
        let r = n-1;
        while(l<r){
        sum = nums[i] + nums[l] + nums[r];
        if(sum == 0){
            arr.push([nums[i], nums[l], nums[r]])
            l++;
            r--;
            while(nums[l]==nums[l-1] && l<r) {
                     l++;
                }
        }else if(sum> 0){
            r--;
        }
        else if(sum< 0){
            l++;
        }
        }
    }
    return arr
};