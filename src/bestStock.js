/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
var beststock = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0
  for (let i = 0; i < prices.length; i += 1){
    minPrice = prices[i] < minPrice ? prices[i] : minPrice
    maxProfit = prices[i] - minPrice > maxProfit ? prices[i] - minPrice : maxProfit
  }
  return maxProfit
}
console.log(beststock([7,1,5,12,6,24]))

const prices = [7,1,5,12,6,24]
var maxProfit = function(prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i+1] > prices[i]) profit += prices[i+1] - prices[i]
  }
  return profit
};
console.log(maxProfit(prices))

/* maxProfit with cooldown requirement*/
var maxProfit2 = function(prices) {
    let memo = {};
    function rec(i, j) {
        let index = [i, j];
        if(index in memo) return memo[index];
        if(i >= prices.length) return 0;
        let profit = -Infinity;

        if(prices[j] >= prices[i]) {
            // if current share price is less than or equal previously bought share.
            // greedily buy current share
            // no need to sell;
            profit = Math.max(profit, rec(i + 1, i));
        } else if(prices[i] - prices[j] > 0) {
            // if we can make profit sell it
            profit = Math.max(profit, prices[i] - prices[j] + rec(i + 3, i + 2));
            // hold on we might get bigger profit next
             profit = Math.max(profit, rec(i + 1, j));
        }
        memo[index] = profit;
        return profit;
    }
	// start from 2nd day and buy first day share
    return rec(1, 0);
};
