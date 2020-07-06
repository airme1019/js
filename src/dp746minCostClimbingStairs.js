var minCostClimbingStairs = function(cost) {
  let dp = [cost[0],cost[1]]
  let n = cost.length
  for (let i = 2; i < n; i++) {
    console.log("i "+i)
    dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
  }
  return Math.min(dp[n-1],dp[n-2])
};

var minCostClimbingStairs2 = function(cost) {
    let firstStep = 0
    let secondStep = 0

    for(let i = 0; i < cost.length; i++) {
        let localMin = cost[i] + Math.min(firstStep, secondStep)
        firstStep = secondStep
        secondStep = localMin
    }
    return Math.min(firstStep, secondStep)
};
const cost = [10, 15, 20]
console.log(minCostClimbingStairs(cost))
