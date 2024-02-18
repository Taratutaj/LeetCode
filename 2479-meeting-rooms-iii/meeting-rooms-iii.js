/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {

    //arr with future meetings - meeting
    //sort it with earliest meetings in the beggining
    meetings.sort((a, b) => a[0] - b[0]);
    //console.log("sorted meeting: ", meetings);

    //arr rooms_meetings_counter
    let rooms_meetings_counter = Array(n).fill(0)
    //console.log("Arr rooms filled with 0", rooms_meetings_counter)

    //arr available_rooms
    //with n, populate with 0
    let available_rooms = Array(n).fill(0)
    //console.log("Arr rooms filled with 0", available_rooms)

    //for each meeting loop
    for (let i = 0; i <= meetings.length - 1; i++) {
        //console.log("Wpasowuje spotkanie nr: ", i, meetings[i])
        let roomFound = false;
        //znajdź pokój z czasem mniejszym lub równym czasie rozpoczecia spotkania
        for (j = 0; j < n; j++) {
            if (available_rooms[j] <= meetings[i][0]) {
                //yes -> Spotkanie na czas
                //end time is now equal to cuurent room end time
                available_rooms[j] = meetings[i][1]
                //update rooms_meetings_counter
                rooms_meetings_counter[j] += 1
                //console.log("Spotkanie bez spóżnienia", available_rooms)
                //console.log("room counter", rooms_meetings_counter)
                roomFound = true
                break;
            }
        } if(!roomFound) {
            //no -> Bedzie obsuwa
            //console.log("Bedzie obsuwa")
            //earliestEndTime
            //earliestRoomIdx
            // end time = end time + current room meeting time
            let earliestEndTime = Math.min(...available_rooms)
            //console.log("Najbliższe spotkanie kończy się o ", earliestEndTime)
            let earliestRoomId = available_rooms.indexOf(earliestEndTime)
            //console.log("w pokoju ", earliestRoomId)
            let meeting_timeline = meetings[i][1] - meetings[i][0]
            //console.log("Spotkanie ma trwać: ", meeting_timeline)
            available_rooms[earliestRoomId] += meeting_timeline
            //update rooms_meetings_counter
            rooms_meetings_counter[earliestRoomId] += 1
            //console.log("Spotkanie z spóżnieniem", available_rooms)
            //console.log("room counter", rooms_meetings_counter)
        }




    }


    //find max value in arr counter
    //find index of this value and return it
    let maxCounter = Math.max(...rooms_meetings_counter)
    //console.log("Najwieksza liczba spotkań: ", maxCounter)
    let maxCounterId = rooms_meetings_counter.indexOf(maxCounter)
    //console.log("W pokoju: ", maxCounterId)
    return maxCounterId;
};






