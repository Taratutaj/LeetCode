/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    let i1 = 0
    let i2 = 0

    while(i1< n && i2< m){
    if(nums1[i1]<nums2[i2]){
        i1++;
    }else if(nums1[i1]>nums2[i2]){
        i2++;
    }else if(nums1[i1]==nums2[i2]){
        return nums1[i1]
    }
    }
return -1
};



//  if(nums1[n-1]<nums2[0]){
//         return -1
//     }

//     for(let i = 0; i<n; i++){
//         if(nums2.includes(nums1[i])){
//             return nums1[i]
//         }
//     }