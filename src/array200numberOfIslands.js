function inbound (grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

const Dx = [1, 0, 0, -1];
const Dy = [0, 1, -1, 0];

function helper (grid, i, j) {
    for (let k = 0; k < 4; k++) {
        const x = i + Dx[k];
        const y = j + Dy[k];
        if (inbound(grid, x, y) && grid[x][y] === '1') {
            grid[x][y] = '0';
            helper(grid, x, y);
        }
    }
}

var numIslands = function(grid) {
    // dfs
    let island = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                helper(grid, i, j);
                island++;
            }
        }
    }
    return island;
};
const g =[["1","0","1"],["0","1","0"],["1","1","1"],["0","1","0"]]
//console.log(numIslands(g))

/* Union Find */

function UnionFind(grid) {
    this.count = 0;
    this.father = new Array(grid.length * grid[0].length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const k = i * grid[0].length + j;
            this.father[k] = k;
            if (grid[i][j] === '1') {
                this.count++;
            }
        }
    }
}

UnionFind.prototype.find = function (x) {
    if (this.father[x] === x) {
        return x;
    }
    this.father[x] = this.find(this.father[x]);
    return this.father[x];
}

UnionFind.prototype.union = function (a, b) {
    const root_a = this.find(a);
    const root_b = this.find(b);
    if (root_a !== root_b) {
        this.father[root_a] = root_b;
        this.count--;
    }
}

var numIslands2 = function(grid) {
    if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
        return 0;
    }

    const unionFind = new UnionFind(grid);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                for (let k = 0; k < 4; k++) {
                    let x = i + Dx[k];
                    let y = j + Dy[k];
                    if (inbound(grid, x, y) && grid[x][y] === '1') {
                        unionFind.union(x * grid[0].length + y, i * grid[0].length + j);
                    }
                }
            }
        }
    }
    return unionFind.count;
};

var numIslands3 = function(grid) {
    let count = 0;

    function depthSearch(x, y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            depthSearch(x+1, y);
        }

        if (y < grid[x].length - 1) {
            depthSearch(x, y+1);
        }

        if (x > 0 && x < grid.length) {
            depthSearch(x-1, y);
        }

        if (y > 0 && y < grid[x].length) {
            depthSearch(x, y-1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                depthSearch(i, j);
            }
        }
    }
    console.log(grid)
    return count;
};
console.log(numIslands3(g))
