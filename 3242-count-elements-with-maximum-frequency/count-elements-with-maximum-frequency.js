/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

let obj = {}
let max = 1

nums.forEach(element => {
    if(obj[element]){
        obj[element]+=1
        if(obj[element]>max){
            max=obj[element]
        }
    }else{
        obj[element] =1
    }
})
let ans = 0
for(element in obj){

    if(max == obj[element]){

    ans = ans +  obj[element]
    }
    
}

return ans
}