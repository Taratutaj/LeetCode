/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const n = nums.length
    //sort array
    const arr = nums.sort((a,b)=>a-b)
    console.log(arr, n)

    //loop n times
    for(let i = n; i>0; i--){
    let sum = 0
    for(let j = 0;j<i-1;j++){
        sum += arr[j]
    }
    console.log(sum,arr[i-1])
    if(sum>arr[i-1]){
        console.log(sum + arr[i-1])
        return sum + arr[i-1]
    }
    }
    
    return -1

};