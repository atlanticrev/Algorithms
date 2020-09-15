const graph = {
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

const processed = [];

let node = findLowestCostNode(costs);

while (node) {
    let cost = costs[node];
    let neighbors = graph[node];
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

function findLowestCostNode (costs) {

}