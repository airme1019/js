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
var beststock = function (arr) {
  let bestBuyTime = 0
  let bestSellTime = 0
  let earning = 0
  let bestEarning = 0
  let lost = 0
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i+1] > arr[i]){
      console.log(arr[i+1] + ' > ' + arr[i])
      earning = arr[i+1] - arr[i]
      if(earning >=bestEarning){
        bestEarning = earning
        bestSellTime = i + 1
      }
    } else {
      if (lost >= arr[i+1] - arr[i]){
        lost = arr[i+1] - arr[i]
        bestBuyTime = i + 1
      }
      console.log('lost ' + lost)
      console.log('bestBuyTime ' + bestBuyTime)
    }
  }
  return [ bestBuyTime, bestSellTime, bestEarning]
}
console.log(beststock([1,5,2,6,4]))
