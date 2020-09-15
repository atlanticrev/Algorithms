/**
 * Graph
 */
const graph1 = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        finish: 1
    },
    b: {
        a: 3,
        finish: 5
    },
    finish: {}
};

const costs = {
    a: 6,
    b: 2,
    finish: Number.POSITIVE_INFINITY
};

const parents = {
    a: 'start',
    b: 'start',
    finish: null
};

/**
 * Algorithm
 */
const processed = [];

let node = findLowestCostNode(costs);

while (node) {
    let cost = costs[node];
    let neighbors = graph1[node];
    for (let n of Object.keys(neighbors)) {
        let newCost = cost + neighbors[n];
        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs)
}

/**
 * @param costs
 * @return {string|null}
 */
function findLowestCostNode (costs) {
    let lowestCost = Number.POSITIVE_INFINITY;
    let lowestCostNode = null;
    for (let key of Object.keys(costs)) {
        let cost = costs[key];
        if (cost < lowestCost && processed.indexOf(key) === -1) {
            lowestCost = cost;
            lowestCostNode = key;
        }
    }
    return lowestCostNode;
}

function printWay (parents) {
    let node = parents['finish'];
    let way = ['finish'];
    while (node !== 'start') {
        way.unshift(node);
        node = parents[node];
    }
    way.unshift('start');
    return way.join('->');
}

console.log(costs['finish'], printWay(parents));