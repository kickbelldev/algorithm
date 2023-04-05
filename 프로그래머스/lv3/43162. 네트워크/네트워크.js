function solution (n, computers) {
    
    const visit = new Array(n).fill(false)
    
    function dfs (x) {
        for (let i = 0; i < n; i++) {
            if (!visit[i] && x !== i && computers[x][i] === 1) {
                visit[i] = true
                dfs(i)
            }
        }
    }
    let cnt = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && !visit[i]) {
                visit[i] = true
                dfs(i, cnt++)
            }
        }
    }
    
    return cnt
}