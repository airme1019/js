/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

var findCheapestPrice = function(n, flights, src, dst, K) {
	const incomingNeighborInfo = createIncomingNeighborInfo(flights);
console.log(incomingNeighborInfo);
	const solution = {};

	for (let k=0; k<=K; k++) {
		for (let i=0; i<n; i++) {
			if (solution[k]) {
				solution[k][i] = -1;
			} else {
				solution[k] = {};
				solution[k][i] = -1;
			}
		}
	}
console.log('solutions: ');
console.log(solution);
	for (let k=0; k<=K; k++) {

		for (let i=0; i<n; i++) {

			let min = Number.MAX_SAFE_INTEGER;
//console.log(incomingNeighborInfo[i]);
			if (incomingNeighborInfo[i]) {
				for (let j=0; j<incomingNeighborInfo[i].length; j++) {
					const neighbor = incomingNeighborInfo[i][j];
					if (k > 0) {
						if (solution[k-1][neighbor.src] !== -1 && (solution[k-1][neighbor.src] + neighbor.price) < min) {
							min = solution[k-1][neighbor.src] + neighbor.price;
						}
					} else {
						if (neighbor.src === src && neighbor.price < min) {
							min = neighbor.price;
						}
					}
				}
			}

			if (min !== Number.MAX_SAFE_INTEGER) {
				solution[k][i] = min;
			}
		}
	}

	let cheapest = Number.MAX_SAFE_INTEGER;

	for (k=0; k<=K; k++) {
		if (solution[k][dst] !== -1 && solution[k][dst] < cheapest) {
			cheapest = solution[k][dst];
		}
	}

	if (cheapest !== Number.MAX_SAFE_INTEGER) {
		return cheapest;
	}

	return -1;
};

function createIncomingNeighborInfo(flights) {
	const incomingNeighborInfo = {};

	for (let i=0; i<flights.length; i++) {
		const flight = flights[i];

		const src = flights[i][0];
		const dest = flights[i][1];
		const price = flights[i][2];

		const srcPrice = {
			src: src,
			price: price
		};

		if (incomingNeighborInfo[dest] !== undefined) {
			incomingNeighborInfo[dest].push(srcPrice);
		} else {
			incomingNeighborInfo[dest] = [srcPrice];
		}
	}
//console.log(incomingNeighborInfo);
	return incomingNeighborInfo;
}

/*BFS easy to understand */
var findCheapestPrice2 = function(n, flights, src, dst, K) {
    let map = new Map();

    for (let i = 0; i < flights.length; i++) {
        const [start, end, price] = flights[i];
        let edges = map.get(start) || [];
        edges.push([end, price]);
        map.set(start, edges);
    }
		//console.log(map);

    let queue = [[0, src, K + 1]];

    while (queue.length) {
        const [price, city, stops] = queue.shift();
        if (city === dst) return price;
        if (stops > 0) {
            const nextFlights = map.get(city) || [];
            for (let i = 0; i < nextFlights.length; i++) {
                const [next, cost] = nextFlights[i];
                queue.push([cost + price, next, stops - 1]);
            }
            queue.sort((a, b) => a[0] - b[0]);
        }
    }

    return -1;
};
/*DFS faster than BFS*/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice3 = function(n, flights, src, dst, K) {
    if (n <= 0 || flights === null || flights.length === 0 ||
        src === dst) {
        return 0;
    }
    const neighbors = new Map();
    for (const flight of flights) {
        if (!neighbors.has(flight[0])) {
            neighbors.set(flight[0], new Map());
        }
        neighbors.get(flight[0]).set(flight[1], flight[2]);
    }
    let minPrice = Number.MAX_SAFE_INTEGER;
    dfs(src, 0, K, new Set([src]));
    return minPrice === Number.MAX_SAFE_INTEGER ? -1 : minPrice;
    function dfs(src, priceSoFar, K, visited) {
        if (src === dst) {
            minPrice = priceSoFar;
            return;
        }
        if (K < 0) {
            return;
        }
        const nextNodes = neighbors.get(src);
        if (nextNodes === undefined) {
            return;
        }
        for (const node of nextNodes) {
            const [n, p] = node;
            if (visited.has(n) || priceSoFar + p >= minPrice) {
                continue;
            }
            visited.add(n);
            dfs(n, priceSoFar + p, K - 1, visited);
            visited.delete(n);
        }
    }
};
var n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1;

var test = findCheapestPrice2(n, edges,src,dst,k);
//console.log(test);
