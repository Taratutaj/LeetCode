/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  //order into arr
  let arrOrder = order.split("")
  //s into arr
  let arrS = s.split("")
  //create arr
  let arrSorted = []

    for(let i= 0; i<arrOrder.length;i++){
        if(arrS.length == 0){
            break;
        }
      //take value from order

        //while s has value
        while(arrS.includes(arrOrder[i])){
            // add it to arr and delete from s
            arrSorted.push(arrOrder[i])
            let idx = arrS.indexOf(arrOrder[i])
            arrS.splice(idx,1)
        }

    }
//at the end push arr into s and turn join
arrS = arrS.concat(arrSorted)
let ans = arrS.join("")
return ans

};