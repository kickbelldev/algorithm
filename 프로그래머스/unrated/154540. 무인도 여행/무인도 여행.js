function solution(maps) {
    const visit = new Array(maps.length).fill(0).map(() => new Array(maps[0].length).fill(false))
    
    const answer = []
    
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    let amount
    
    function dfs (x, y) {
        if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length) {
            return
        }
        if (visit[x][y] || maps[x][y] === 'X') {
            return
        }
        
        visit[x][y] = true
        
        amount += Number(maps[x][y])
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            dfs(nx, ny)
        }
    }
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (!isNaN(maps[i][j]) && !visit[i][j]) {
                amount = 0
                dfs(i, j)
                answer.push(amount)
            }
        }
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1]
}