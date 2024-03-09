/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');


    n = Math.floor(word.length/2)


    for(let i =0; i<n; i++){

        if(word[i]!=word[word.length-1-i]){
 
            return false
           
        }
    }
    return true
};