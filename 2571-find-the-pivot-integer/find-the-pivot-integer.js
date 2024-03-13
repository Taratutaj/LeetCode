/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n==1){
        return 1
    }

  for(let i =1; i<n; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for(let j = 1; j<=i; j++){
        leftSum = leftSum + j
    }
    for(let k = i; k<=n;k++){
        rightSum = rightSum + k
    }
    console.log(i,leftSum, rightSum)

    if(leftSum == rightSum){
        return i
    }
  }
  return -1
};