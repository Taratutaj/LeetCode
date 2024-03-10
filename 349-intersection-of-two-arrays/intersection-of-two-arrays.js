/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
// create arr
let arr = []

for (let i = 0; i<nums1.length; i++){
    console.log("i value from nums1", nums1[i])
//take each value from nums1

//chceck if nums2 has this value
    if(nums2.includes(nums1[i]) && !arr.includes(nums1[i])){
        arr.push(nums1[i])
        console.log("arr", arr)
    }
    
    }

return arr
};