/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let text = s.trim()
    let lastword ="";
    let length = 0;
    for(let i =0; i<text.length; i++){
        if(text.charAt(i) === " "){
            lastword= "";
            length = 0;

        }
        else{
            lastword = lastword + text.charAt(i)
            length += 1

        }
    }
    return length;
};