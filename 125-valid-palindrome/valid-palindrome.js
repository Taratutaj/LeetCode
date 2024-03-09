/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    console.log(word)

    n = Math.floor(word.length/2)
    console.log(n)

    for(let i =0; i<n; i++){
        console.log(word[i], word[word.length-1-i])
        if(word[i]!=word[word.length-1-i]){
             console.log("false")
            return false
           
        }
    }
    return true
};