/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if(n==1) return 1
    if(trust.length==0) return -1
    const arr = Array.from(
        { length: n },
        (_, index) => index + 1
    );
    const arrCount = new Array(n);
    arrCount.fill(0);


    for (let person of trust) {

        arrCount[person[1]-1]+=1
        let index = arr.indexOf(person[0]);
        if(index == -1){continue}
        arr.splice(index, 1);
        
    }

    if (arr.length !== 1) {
        return -1
    }

    if(arrCount[arr[0]-1]==n-1){
        return arr[0]
    }else return -1

};