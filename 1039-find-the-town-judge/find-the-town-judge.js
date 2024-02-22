/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const arr = Array.from(
        { length: n },
        (_, index) => index + 1
    );
    console.log(arr)
    const arrCount = new Array(n);
    arrCount.fill(0);
console.log(arrCount)

    for (let person of trust) {
        
        console.log("Osoba pierwsza: ", person[0])
        console.log("Osoba druga: ", person[1])
        arrCount[person[1]-1]+=1
        let index = arr.indexOf(person[0]);
        if(index == -1){continue}
        arr.splice(index, 1);
        console.log("Podejrzani: ", arr)
    }
    console.log(arrCount)
    if (arr.length !== 1) {
        console.log("za dużo lub za mało podejrzanych: ",arr)
        return -1
    }
    console.log(arr[0])
    if(arrCount[arr[0]-1]==n-1){
        return arr[0]
    }else return -1

};