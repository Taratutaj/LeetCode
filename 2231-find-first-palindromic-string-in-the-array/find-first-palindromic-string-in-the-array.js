/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(item in words){
        let str = ""
        let pali = true
        console.log(words[item])
        n = words[item].length
        console.log(n)

        for(let i = 0; i<Math.floor(n/2); i++){
            console.log(words[item].charAt(i),words[item].charAt(n-i-1))
            if(words[item].charAt(i) !== words[item].charAt(n-i-1)){
                console.log("not palindrom")
                pali = false;
                str = ""
                break;
            }
            
            else{
                pali = true;
                console.log("maybe")
            }
            

        }
        if(pali){
                return words[item]
            }
        
        
    }
  return ""
};