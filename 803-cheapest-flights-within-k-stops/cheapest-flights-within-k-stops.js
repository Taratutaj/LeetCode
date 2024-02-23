/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const flightMap = {};

    for (let i = 0; i < flights.length; i++) {
        let start = flights[i][0]
        let destination = flights[i][1]
        let cost = flights[i][2]
        if (flightMap.hasOwnProperty(start)) {
            flightMap[start].push([destination, cost])
        } else {
            flightMap[start] = [[destination, cost]]
        }
    }

    const arr = [[0, src, k + 1]]
    const visited = new Map();

    console.log(arr)
    while (arr.length) {
        arr.sort((a, b) => a[0] - b[0])

        const [cost, city, stops] = arr.shift()
        visited.set(city, stops);

        if (city === dst) return cost
        if (stops <= 0 || !flightMap.hasOwnProperty(city)) {
            continue;
        }

        for (let [nextCity, nextCost] of flightMap[city]) {
            if(visited.has(nextCity)&& visited.get(nextCity) >= stops-1) continue;
            arr.push([cost+nextCost,nextCity, stops-1])
        }



    }
return -1

};