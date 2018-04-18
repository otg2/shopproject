//Grid
var _grid = [
    { x: 25, y: 50 },
    { x: 75, y: 50 },
    { x: 125, y: 50 },
    { x: 175, y: 50 },
    { x: 225, y: 50 },
    { x: 275, y: 50 },
    { x: 325, y: 50 },
    { x: 375, y: 50 },
    { x: 425, y: 50 },
    { x: 475, y: 50 },
    { x: 25, y: 122.5 },
    { x: 75, y: 122.5 },
    { x: 125, y: 122.5 },
    { x: 175, y: 122.5},
    { x: 225, y: 122.5 },
    { x: 275, y: 122.5 },
    { x: 325, y: 122.5 },
    { x: 375, y: 122.5 },
    { x: 425, y: 122.5 },
    { x: 475, y: 122.5 },
    { x: 25, y: 187.5 },
    { x: 75, y: 187.5 },
    { x: 125, y: 187.5 },
    { x: 175, y: 187.5 },
    { x: 225, y: 187.5 },
    { x: 275, y: 187.5 },
    { x: 325, y: 187.5 },
    { x: 375, y: 187.5 },
    { x: 425, y: 187.5 },
    { x: 475, y: 187.5 },
    { x: 25, y: 252.5 },
    { x: 75, y: 252.5 },
    { x: 125, y: 252.5},
    { x: 175, y: 252.5},
    { x: 225, y: 252.5 },
    { x: 275, y: 252.5 },
    { x: 325, y: 252.5 },
    { x: 375, y: 252.5 },
    { x: 425, y: 252.5 },
    { x: 475, y: 252.5 },
    { x: 25, y: 317.5 },
    { x: 75, y: 317.5 },
    { x: 125, y: 317.5 },
    { x: 175, y: 317.5 },
    { x: 225, y: 317.5 },
    { x: 275, y: 317.5 },
    { x: 325, y: 317.5 },
    { x: 375, y: 317.5 },
    { x: 425, y: 317.5 },
    { x: 475, y: 317.5 },
    { x: 25, y: 382.5 },
    { x: 75, y: 382.5 },
    { x: 125, y: 382.5 },
    { x: 175, y: 382.5 },
    { x: 225, y: 382.5 },
    { x: 275, y: 382.5 },
    { x: 325, y: 382.5 },
    { x: 375, y: 382.5 },
    { x: 425, y: 382.5 },
    { x: 475, y: 382.5 },

];

var _adjacencies = [
    [1, 10],
    [0, 2],
    [1, 3],
    [2, 4, 13],
    [3, 5],
    [4, 6],
    [5, 7, 16],
    [6, 8],
    [7, 9],
    [8, 19],
    [0, 11, 20],
    [10, 12],
    [11, 13],
    [12, 14, 3, 23],
    [13, 15],
    [14, 16],
    [15, 17, 6, 26],
    [16, 18],
    [17, 19],
    [18, 9, 29],
    [10, 21, 30],
    [20, 22],
    [21, 23],
    [22, 24, 13, 33],
    [23, 25],
    [24, 26],
    [25, 27, 16, 36],
    [26, 28],
    [27, 29],
    [28, 19, 39],
    [20, 31, 40],
    [30, 32],
    [31, 33],
    [32, 34, 23, 43],
    [33, 35],
    [34, 36],
    [35, 37, 26, 46],
    [36, 38],
    [37, 39],
    [38, 39, 49],
    [30, 41, 50],
    [40, 42],
    [41, 43],
    [42, 44, 33, 53],
    [43, 45],
    [44, 46],
    [45, 47, 36, 56],
    [46, 48],
    [47, 49],
    [48, 49, 59],
    [40, 51],
    [50, 52],
    [51, 53],
    [52, 54, 43],
    [53, 55],
    [54, 56],
    [55, 57, 46],
    [56, 58],
    [57, 59],
    [58, 59],
];

var _destinations = [2, 13, 30, 37, 45, 25, 59];

var _destinationNodes = [];

var _update = true;

const ENTRANCE = 0;

var _racks = [
    { x: 50, y: 75, width: 50, height: 15, node: 1 },
    { x: 100, y: 75, width: 50, height: 15, node: 2 },
    { x: 50, y: 90, width: 50, height: 15, node: 11 },
    { x: 100, y: 90, width: 50, height: 15, node: 12 },
    { x: 50, y: 140, width: 50, height: 15, node: 11 },
    { x: 100, y: 140, width: 50, height: 15, node: 12 },
    { x: 50, y: 155, width: 50, height: 15, node: 21 },
    { x: 100, y: 155, width: 50, height: 15, node: 22 },
    { x: 50, y: 205, width: 50, height: 15, node: 21 },
    { x: 100, y: 205, width: 50, height: 15, node: 22 },
    { x: 50, y: 220, width: 50, height: 15, node: 31 },
    { x: 100, y: 220, width: 50, height: 15, node: 32 },
    { x: 50, y: 270, width: 50, height: 15, node: 31 },
    { x: 100, y: 270, width: 50, height: 15, node: 32 },
    { x: 50, y: 285, width: 50, height: 15, node: 41 },
    { x: 100, y: 285, width: 50, height: 15, node: 42 },
    { x: 50, y: 335, width: 50, height: 15, node: 41 },
    { x: 100, y: 335, width: 50, height: 15, node: 42 },
    { x: 50, y: 350, width: 50, height: 15, node: 51 },
    { x: 100, y: 350, width: 50, height: 15, node: 52 },
    { x: 200, y: 75, width: 50, height: 15, node: 4 },
    { x: 250, y: 75, width: 50, height: 15, node: 5 },
    { x: 200, y: 90, width: 50, height: 15, node: 14 },
    { x: 250, y: 90, width: 50, height: 15, node: 15 },
    { x: 200, y: 140, width: 50, height: 15, node: 14 },
    { x: 250, y: 140, width: 50, height: 15, node: 15 },
    { x: 200, y: 155, width: 50, height: 15, node: 24 },
    { x: 250, y: 155, width: 50, height: 15, node: 25 },
    { x: 200, y: 205, width: 50, height: 15, node: 24 },
    { x: 250, y: 205, width: 50, height: 15, node: 25 },
    { x: 200, y: 220, width: 50, height: 15, node: 34 },
    { x: 250, y: 220, width: 50, height: 15, node: 35 },
    { x: 200, y: 270, width: 50, height: 15, node: 34 },
    { x: 250, y: 270, width: 50, height: 15, node: 35 },
    { x: 200, y: 285, width: 50, height: 15, node: 44 },
    { x: 250, y: 285, width: 50, height: 15, node: 45 },
    { x: 200, y: 335, width: 50, height: 15, node: 44 },
    { x: 250, y: 335, width: 50, height: 15, node: 45 },
    { x: 200, y: 350, width: 50, height: 15, node: 54 },
    { x: 250, y: 350, width: 50, height: 15, node: 55 },
    { x: 350, y: 75, width: 50, height: 15, node: 7 },
    { x: 400, y: 75, width: 50, height: 15, node: 8 },
    { x: 350, y: 90, width: 50, height: 15, node: 17 },
    { x: 400, y: 90, width: 50, height: 15, node: 18 },
    { x: 350, y: 140, width: 50, height: 15, node: 17 },
    { x: 400, y: 140, width: 50, height: 15, node: 18 },
    { x: 350, y: 155, width: 50, height: 15, node: 27 },
    { x: 400, y: 155, width: 50, height: 15, node: 28 },
    { x: 350, y: 205, width: 50, height: 15, node: 27 },
    { x: 400, y: 205, width: 50, height: 15, node: 28 },
    { x: 350, y: 220, width: 50, height: 15, node: 37 },
    { x: 400, y: 220, width: 50, height: 15, node: 38 },
    { x: 350, y: 270, width: 50, height: 15, node: 37 },
    { x: 400, y: 270, width: 50, height: 15, node: 38 },
    { x: 350, y: 285, width: 50, height: 15, node: 47 },
    { x: 400, y: 285, width: 50, height: 15, node: 48 },
    { x: 350, y: 335, width: 50, height: 15, node: 47 },
    { x: 400, y: 335, width: 50, height: 15, node: 48 },
    { x: 350, y: 350, width: 50, height: 15, node: 57 },
    { x: 400, y: 350, width: 50, height: 15, node: 58 }];

function drawStore() {
    drawRacks();
    if (_update) {
        updateDestinationNodes();
    }
    drawDestinations();
    drawGrid();
}

function clearPath() {
    clearCanvas();
    drawStore();
}

function updateDestinationNodes() {
    _destinationNodes = [];
    var duplicatePrevention = Array.apply(null, Array(_grid.length)).map(Number.prototype.valueOf, 0);
    for (var i = 0; i < _destinations.length; i++) {
        var destination = _racks[_destinations[i]].node;
        if (duplicatePrevention[destination] === 0) {
            _destinationNodes.push(_racks[_destinations[i]].node);
            duplicatePrevention[destination]++;
        }
    }
    _update = false;
}

function clearCanvas() {
    var ctx = $('#myCanvas')[0].getContext("2d");
    var canvas = $('#myCanvas')[0];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawDestinations() {
    for (var i = 0; i < _destinations.length; i++) {
        drawRack(_racks[_destinations[i]], true);
    }
}

function drawRacks() {
    for (var i = 0; i < _racks.length; i++) {
        drawRack(_racks[i], false);
    }
}

function drawRack(rack, destination) {
    var ctx = $('#myCanvas')[0].getContext("2d");

    ctx.beginPath();

    ctx.rect(rack.x, rack.y, rack.width, rack.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    if (destination) {
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    ctx.stroke();
}

function drawGrid() {
    var ctx = $('#myCanvas')[0].getContext("2d");

    for (var i = 0; i < _grid.length; i++) {

        ctx.beginPath();

        ctx.arc(_grid[i].x, _grid[i].y, 3, 0, 6.28, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}

function drawPaths(paths) {
    for (var i = 0; i < paths.length; i++) {
        for (var j = 0; j < paths[i].length - 1; j++) {
            drawPath(paths[i][j], paths[i][j + 1]);
        }
    }
}

function drawPath(startNode, endNode) {
    var ctx = $('#myCanvas')[0].getContext("2d");

    ctx.beginPath();

    ctx.beginPath()
    ctx.moveTo(_grid[startNode].x, _grid[startNode].y);
    ctx.lineTo(_grid[endNode].x, _grid[endNode].y);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
}

function Dijkstra(Graph, source) {

    var Q = [];
    var dist = [];
    var prev = [];

    for (var v = 0; v < Graph.length; v++) {
        dist[v] = 10000;                      // Unknown distance from source to v
        prev[v] = -1;                 				// Previous node in optimal path from source
        Q.push(v);
    }

    dist[source] = 0;                         // Distance from source to source

    var counter = 100;

    while (Q.length && counter-- >= 0) {

        u = minVertex(Q, dist);     		// Node with the least distance
                                            // will be selected first
        removeItemFromArray(Q, u);

        for (i = 0; i < _adjacencies[u].length; i++) {
            v = _adjacencies[u][i];
            var isIndexOf = Q.indexOf(v);

            if (isIndexOf >= 0) {
                alt = dist[u] + 1;

                if (alt < dist[v]) {
                    dist[v] = alt;
                    prev[v] = u;
                }
            }              // A shorter path to v has been found
        }
    }
    return [dist, prev];
}

function minVertex(Q, dist) {
    if (dist.length === 0) {
        return -1;
    }

    var minDistance = dist[Q[0]];
    var minVrtx = Q[0];

    for (var i = 0; i < Q.length; i++) {
        if (dist[Q[i]] < minDistance) {
            minVrtx = Q[i];
            minDistance = dist[Q[i]];
        }
    }
    return minVrtx;
}

function removeItemFromArray(array, item) {
    var index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

function findBestOrder(distances) {
    var permitations = permutator(_destinationNodes);

    var pathLengths = [];
    var paths = []
    var node;
    var path = [];
    for (var i = 0; i < permitations.length; i++) {
        node = permitations[i][0];

        path.push(node);
        pathLengths[i] = distances[0][node];
        var currentNode = permitations[i][0];
        for (var j = 0; j < permitations[i].length - 1; j++) {
            var nextNode = permitations[i][j + 1];
            var n = _destinationNodes.indexOf(currentNode);
            pathLengths[i] += distances[n + 1][nextNode];
            path.push(nextNode);
            currentNode = nextNode;
        }
        paths.push(path);
        path = [];
    }

    var min = Math.min.apply(null, pathLengths);
    return paths[pathLengths.indexOf(min)];
}

function getPathForBestOrder(order, paths) {
    var path = [];
    path.push(getPathTo(order[0], paths[0]));
    path[0].push(ENTRANCE);
    for (var i = 1; i < order.length; i++) {
        var startNodeIndex = _destinationNodes.indexOf(order[i - 1]);
        path.push(getPathTo(order[i], paths[startNodeIndex + 1]));
    }
    return path;
}

function getPathTo(destNode, prev) {
    var path = [destNode];
    var prevNode = prev[destNode];
    
    while (prevNode > 0) {
        path.push(prevNode);
        prevNode = prev[prevNode];
    }
    return path;
}

function runDjikstra() {
    try {
        if (!(_destinationNodes.length > 0)) {
            return false;
        }
        var result = Dijkstra(_grid, ENTRANCE);
        var shortestDistances = [result[0]];
        var shortestPaths = [result[1]];

        for (var i = 0; i < _destinationNodes.length; i++) {
            result = Dijkstra(_grid, _destinationNodes[i]);
            shortestDistances.push(result[0]);
            shortestPaths.push(result[1]);
        }

        var bestOrder = findBestOrder(shortestDistances)

        var paths = getPathForBestOrder(bestOrder, shortestPaths);
        drawPaths(paths);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        return false;
    }
}

function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }
    return permute(inputArr);
}

function clearDestinations() {
    _destinations = [];
    _update = true;
    clearCanvas();
    drawStore();
}

function updateDestinations() {
    try {
        var input = $('#destination')[0].value;
        if (input && input > 0 && input <= 60) {
            var exists = _destinations.indexOf(input);
            if (exists === -1) {
                _destinations.push(input - 1);
                drawRack(_racks[input - 1], true);
                updateDestinationNodes();
                console.log(_destinations);
                console.log(_destinationNodes);
            }
        }
    }
    finally {
        return false;
    }
    
}

drawStore();