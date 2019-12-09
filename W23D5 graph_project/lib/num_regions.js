function numRegions(graph) {
    let count = 0;
    let visited = new Set();

    for(let node in graph){
        // visited.add(node);
        if(!visited.has(node)){
          exploreRegion(node, graph, visited)
          count ++;
        }
    //   console.log(count)
    }
    return count;
}

function exploreRegion(node, graph, visited){
    if(visited.has(node)) return;
    // console.log(node, "node")
    // console.log(graph)
    // console.log(visited)

    visited.add(node);

    graph[node].forEach(neighbor => {
        // console.log(neighbor, "<--- neighbor")
        exploreRegion(neighbor, graph, visited)
    });
}




module.exports = {
    numRegions
};