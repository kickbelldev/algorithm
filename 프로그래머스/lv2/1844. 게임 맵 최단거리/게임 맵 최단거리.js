function solution(maps) {
    const m = maps.length
    const n = maps[0].length
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    
    const queue = []
    queue.push([0, 0, 1])
    
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    while (queue.length) {
        const [x, y, d] = queue.pop()
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue
            }
            
            if (!maps[ny][nx]) {
                continue
            }
            
            if (visited[ny][nx]) {
                continue
            }
            
            if (ny === m - 1 && nx === n - 1) {
                return d + 1
            }
            
            visited[ny][nx] = true
            
            queue.unshift([nx, ny, d + 1])
        }
    }
    
    return -1
}