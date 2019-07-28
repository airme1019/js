var subsets = function(nums) {
    let result = [];
    dfs([], 0);

    function dfs(current, index){
        result.push(current);
        for(let i = index; i < nums.length; i++) {
            dfs(current.concat(nums[i]), i + 1);
        }
    }

    return result;
};
const nums = [1,2,3]
console.log(subsets(nums))
