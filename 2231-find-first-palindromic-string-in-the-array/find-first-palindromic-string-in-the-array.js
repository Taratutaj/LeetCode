/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(item in words){
        let pali= true;
        n = words[item].length
       
        for(let i = 0; i<Math.floor(n/2); i++){
            if(words[item].charAt(i) !== words[item].charAt(n-i-1)){
                
                pali = false;
                str = ""
                break;
            }    
            else{
                pali = true;
            }
        }
        if(pali){return words[item]}   
    }
  return ""
};