/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const frequencySort = (arr = []) => {
        let map = {};
        for (let i = 0; i < arr.length; i++) {
            map[arr[i]] = (map[arr[i]] || 0) + 1;
        };
        return arr.sort((a, b) => map[a] - map[b] || b - a);
    };
    frequencySort(arr);

    arr.splice(0, k)

    let result = 1
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {
            if(arr[i-1]!==arr[i])
            result +=1
        }
    }
    else {
        return arr.length
    }
    return result

}