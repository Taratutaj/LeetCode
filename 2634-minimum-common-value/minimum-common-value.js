/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let n = nums1.length

    if(nums1[n-1]<nums2[0]){
        return -1
    }

    for(let i = 0; i<n; i++){
        if(nums2.includes(nums1[i])){
            return nums1[i]
        }
    }
return -1
};