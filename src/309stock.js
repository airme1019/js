var maxProfit = function(prices) {
  if(prices.length < 2) return 0
  let [sell,buy,prev_sell,prev_buy] = [0,-prices[0],0,0]
  for( let price of prices){
    prev_buy = buy
    buy = Math.max(prev_sell - price, prev_buy)
    prev_sell = sell
    sell = Math.max(prev_buy + price, prev_sell)
    console.log('sell: '+sell + 'buy: '+buy)
  }
  return sell
}
/*
def maxProfit(self, prices):
    if len(prices) < 2:
        return 0
    sell, buy, prev_sell, prev_buy = 0, -prices[0], 0, 0
    for price in prices:
        prev_buy = buy
        buy = max(prev_sell - price, prev_buy)
        prev_sell = sell
        sell = max(prev_buy + price, prev_sell)
    return sell
*/
const p = [1,2,3,0,2]
console.log(maxProfit(p))
