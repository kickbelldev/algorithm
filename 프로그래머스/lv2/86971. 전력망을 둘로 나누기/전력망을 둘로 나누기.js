function solution (n, wires) {
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
    for (let [start, end] of wires) {
        start--; end--
        arr[start][end] = arr[end][start] = 1
    }
    
    const visit = new Array(n)
    
    function dfs (x, section) {
        if (visit[x]) {
            return
        }
        visit[x] = section
        for (let i = 0; i < n; i++) {
            if (arr[x][i] || x === i) {
                dfs(i, section)
            }
        }
    }
    
    let min = 101
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i; j < n; j++) {
            if (arr[i][j] === 1) {
                arr[i][j] = 0
                visit.fill(0)
                dfs(i, 2)
                for (let i = 0; i < n - 1; i++) {
                    for (let j = i; j < n; j++) {
                        if (!visit[i] && arr[i][j] === 1) {
                            dfs(i, 3)
                        }
                    }
                }
                arr[i][j] = 1
                const first = visit.filter((v) => v === 2).length
                const last = visit.filter((v) => v === 3).length
                min = Math.min(Math.abs(first - last), min)
            }
        }
    }
    
    return min
}