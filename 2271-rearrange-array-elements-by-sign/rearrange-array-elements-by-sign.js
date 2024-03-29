/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    const positiveArr =[]
    const negativeArr =[]
    const result = []

    for(let item of nums){
        if(item>0){
            positiveArr.push(item)
        }else{
            negativeArr.push(item)
        }
    }
    let i = 0;
    while(i<nums.length/2){
        result.push(positiveArr[i])
        result.push(negativeArr[i])
        i+=1
    }
    return result
};