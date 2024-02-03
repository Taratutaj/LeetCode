/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){return false;}
    if(x<10){return true;}

    const arr = String(x).split('').map(Number);
    for (let i = 0; i<Math.floor(arr.length/2); i++){
        if(arr[i] !== arr[arr.length -1- i]){
            return false;
        }
    }
    return true;
};