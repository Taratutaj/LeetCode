/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let output = -1;
    for(let i =0; i<haystack.length; i++){
        if(haystack.charAt(i) === needle.charAt(0)){

            for(let j=0; j<needle.length;j++){
                if(haystack.charAt(i+j)!==needle.charAt(j)){
                    break;
                }
                if(j === needle.length-1){

                if(output === -1){output = i}
                }
            }
        }
    }
    return output;
};