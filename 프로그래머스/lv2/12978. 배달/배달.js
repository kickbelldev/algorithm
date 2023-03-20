function solution (N, road, K) {
    const arr = new Array(N).fill(0).map(() => new Array(N).fill(500001))
    for (let [start, end, cost] of road) {
        start--; end--
        arr[start][end] = arr[end][start] = Math.min(arr[start][end], cost)
    }
    
    const costArr = new Array(N).fill(Number.MAX_SAFE_INTEGER)
    
    costArr[0] = 0
    
    const queue = [0]
    
    while (queue.length) {
        const curr = queue.pop()
        
        for (let i = 0; i < N; i++) {
            if (arr[curr][i] + costArr[curr] < costArr[i]) {
                costArr[i] = arr[curr][i] + costArr[curr]
                queue.push(i)
            }
        }
    }
    
    return costArr.filter((v) => v <= K).length
}