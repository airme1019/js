var minMeetingRooms = function(intervals) {
  const start = []
  const end = []
  let room = 0
    for( let i = 0; i < intervals.length; i += 1) {
      start[i] = intervals[i][0]
      end[i] = intervals[i][1]
    }
    start.sort((a,b) => a-b)
    end.sort((a,b) => a-b)
    console.log(start)
    console.log(end)

    let endItr = 0
    for( let j = 0; j < start.length; j +=1){
       if(start[j]- end[endItr] >= 0){
        endItr++

      } else{
        room++
      }
       console.log(room)
    }
    return room
};

const meetings = [[0, 30],[5, 10],[15, 20]]
console.log(minMeetingRooms(meetings))
