var p = [7,1,5,3,6,4];
var maxProfit = function(prices) {
    var profit = [];
    for( let i = 1; i< prices.length; i++) {
      profit.push(prices[i]- prices[i-1])
    }
    //console.log(Math.max(...profit))
    return Math.max(...profit)
};
maxProfit(p)
