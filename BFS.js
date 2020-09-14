class Node {
    constructor (name, isSeller) {
        this.name = name;
        this.isSeller = isSeller;
    }
}

const graph = {};

const alice = new Node('alice', false);
const bob = new Node('bob', false);
const claire = new Node('claire', false);
const anuj = new Node('anuj', false);
const peggy = new Node('peggy', false);
const thom = new Node('thom', false);
const jonny = new Node('jonny', true);

graph['you'] = [alice, bob, claire];
graph['bob'] = [anuj, peggy];
graph['alice'] = [peggy];
graph['claire'] = [thom, jonny];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

let queue = [...graph['you']];
let searched = [];
let result = false;

while (queue.length) {
    const node = queue.shift();
    console.log(JSON.stringify(queue));
    if (searched.indexOf(node) === -1) {
        if (node.isSeller) {
            result = true;
            break;
        } else {
            queue.push(...graph[node.name]);
            searched.push(node);
        }
    }
}
console.log(result);

// let queue = [...graph['you']];
// let queued = [...graph['you']];
// let result = false;
//
// while (queue.length) {
//     console.log(JSON.stringify(queue));
//     const node = queue.shift();
//     if (node.isSeller) {
//         result = true;
//         break;
//     } else {
//         for (let neighbor of graph[node.name]) {
//             if (queued.indexOf(neighbor) === -1) {
//                 queue.push(neighbor);
//                 queued.push(neighbor);
//             }
//         }
//     }
// }
// console.log(result);

