/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    
    let arr = s.split("")


    while(arr.length>1){
        let firstl = arr[0]
        let lastl = arr[arr.length-1]
        if(firstl == lastl){
            while(arr[0]==firstl){
                arr.shift()   
            }
            while(arr[arr.length-1]==lastl){
                arr.pop()
            }
        }else return arr.length
    }
    
 return arr.length
};



//check if first and last letter is the same

//yes
    //check how many the same at the front
    // if its equal to arr size return 0
    //check how many at the end
    //delete letters in front
    //delet letters in the back


//no return length

