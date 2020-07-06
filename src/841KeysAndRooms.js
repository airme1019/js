/* https://leetcode.com/problems/keys-and-rooms/
*/
/*BFS*/
var canVisitAllRooms1 = function(rooms) {
    const stack = [0], visitedRoom = {'0' : true};
    while(stack.length) {
        const currRoom = stack.pop();
        rooms[currRoom].forEach(key => {
            if(!visitedRoom[key]) stack.push(key);
            visitedRoom[key] = true;
        })
    }
    return Object.keys(visitedRoom).length === rooms.length;
};
/*dfs*/
var canVisitAllRooms = function(rooms) {
    const visitedRoom = {};
    const dfs = (index) => {
        if(visitedRoom[index]) return;
        visitedRoom[index] = true;
        rooms[index].forEach(key => {
            dfs(key);
        })
    }
    dfs(0);
    return Object.keys(visitedRoom).length === rooms.length;
};
const rooms = [[],[2],[1]]
console.log(canVisitAllRooms(rooms))
