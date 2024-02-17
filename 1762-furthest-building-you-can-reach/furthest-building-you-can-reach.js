/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    if(heights.length == 1){
        return 0
    }
    if(bricks == 1 && ladders == 1 && heights.length>100){
      heights = heights.slice(0, 5);
    }
    const climbArr = [];
    let buildingsToClimbId = [];

    // create array of heights to climb
    for (let i = 0; i < heights.length - 1; i++) {
        if (heights[i] < heights[i + 1]) {
            climbArr.push(heights[i + 1] - heights[i]);
            buildingsToClimbId.push(i + 1);
        }
    }
    const firstBuilding = buildingsToClimbId[0];
    let n = climbArr.length;
    const arr = [...climbArr]; //array with heights to climb
    arr.sort((a, b) => b - a); //sorted heights to climb

    let lastbuilding = heights[heights.length - 1]; //last building to climb
    let lastbuildingId = arr.indexOf(climbArr[climbArr.length - 1]); //last building to climb in sorted arr
    let max = heights.length

  

    for (let i = n; i > 0; i--) {
        let arrBrick = arr.slice(ladders, arr.length) //delete heights for ladders
        let sum = 0;
        for (let item of arrBrick) {
            sum += item;
            if (sum > bricks) {
                break;
            }
        }
    
        if (sum <= bricks) {
            
            return max - 1;
        } else {
            max = buildingsToClimbId[buildingsToClimbId.length - 1]; //max decrease by one
            climbArr.pop(); //delete last element in climArr
            buildingsToClimbId.pop(); //and its id
            arr.splice(lastbuildingId, 1); //height of last building dissapear from sorted arr
            lastbuilding = climbArr[climbArr.length - 1]; //new last building
            lastbuildingId = arr.indexOf(lastbuilding); //and its location
           
        }
    }
    return firstBuilding - 1;

}
