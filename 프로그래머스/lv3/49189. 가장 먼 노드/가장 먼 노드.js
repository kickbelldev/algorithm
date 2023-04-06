function solution(n, edge) {
    edge = edge.map(([a, b]) => {
        if (a > b) {
            return [b, a]
        } else {
            return [a, b]
        }
    })
    const queue = [[1, 1]]
    const visit = new Array(n + 1).fill(0)
    
    const arr = []
    
    while (queue.length) {
        const [curr, cnt] = queue.pop()
        
        if (visit[curr]) {
            continue
        }
        
        visit[curr] = cnt
        
        for (let i = 0; i < edge.length; i++) {
            if (edge[i][0] === curr && !visit[edge[i][1]]) {
                queue.unshift([edge[i][1], cnt + 1])
            } else if (edge[i][1] === curr && !visit[edge[i][0]]) {
                queue.unshift([edge[i][0], cnt + 1])
            }
        }
    }
    console.log(visit)
    
    const max = Math.max(...visit)
    
    return visit.filter((v) => v === max).length
}