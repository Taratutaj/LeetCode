/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;
    let z =strs[0].length;
    let out = "";
console.log(z)
//i liter   j wyraz
    for(let i = 0; i<=z; i++){
        for( let j =1; j<n;j++){
            if(strs[0].charAt(i) !== strs[j].charAt(i)){
                return out;
            }
        }
        out = out + strs[0].charAt(i);
    }
    return out;
};