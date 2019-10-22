/*Recursive Top Down with Memoization =>*/

var coinChange1 = function(coins, amount) {
    let newMap = new Map();
    let rec = function(total, coins){
        if(total === 0) return 0;
        if(newMap.has(total)) return newMap.get(total);
        let minValue = amount+1;
        for(let x in coins) {
            if(coins[x] > total) continue;
            let val = rec(total-coins[x], coins)
            if (val < minValue) minValue = val;
        }

        minValue = (minValue === amount+1 ? minValue : minValue + 1);
        newMap.set(total, minValue);
        return minValue;
    }
    return rec(amount, coins) === amount +1 ? -1 : rec(amount, coins);
};


/*Dynamic Programming =>*/

var coinChange = function(coins, amount) {
    coins = coins.sort((a,b ) => a-b);
    let countArray = new Array(amount+1).fill(amount+1);
    countArray[0] = 0;
    let count = 0;

    for(let c=0; c<=amount; c++){
        for(let i=0; i<coins.length; i++){
            count++
            if( c >= coins[i] ) {
                countArray[c] =  Math.min(countArray[c], countArray[c-coins[i]]+1)
            } else {
                break;
            }
        }
    }
    return countArray[amount] <= amount ? countArray[amount] : -1;
};

const coins = [186,419,83,408], amount = 6249
console.log(coinChange(coins,amount))
