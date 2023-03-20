function solution(places) {
    const answer = []
    
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    for (const place of places) {
        const arr = place.map((v) => v.split(''))
        
        
        let flag = 1
        
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (arr[i][j] === 'P') {
                    const visit = new Array(5).fill(0).map(() => new Array(5).fill(false))
                    function dfs (x, y, c) {
                        if (x < 0 || x >= 5 || y < 0 || y >= 5 || c >= 3) {
                            return
                        }
                        if (visit[y][x] || arr[y][x] === 'X') {
                            return
                        }
                        visit[y][x] = true

                        if (arr[y][x] === 'P') {
                            if (c <= 2) {
                                flag = 0
                            }
                            return
                        }
                        for (let i = 0; i < 4; i++) {
                            const nx = x + dx[i]
                            const ny = y + dy[i]
                            
                            dfs(nx, ny, c + 1)
                        }
                    }
                    arr[i][j] = 'T'
                    dfs(j, i, 0)
                    arr[i][j] = 'P'
                }
            }
        }
        
        answer.push(flag)
    }
    
    return answer
}

function getManhattan (t1, t2) {
    const [r1, c1] = t1
    const [r2, c2] = t2
    
    return Math.abs(r1 - r2) + Math.abs(c1 - c2)
}