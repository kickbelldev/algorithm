function solution(maze) {
    const n = maze.length
    const m = maze[0].length
    
    const dx = [0, 0, -1, 1]
    const dy = [-1, 1, 0, 0]
    
    const aVisited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    const bVisited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let answer = 99999999
    
    const dfs = (ax, ay, bx, by, cnt) => {
        if (maze[ay][ax] === 3 && maze[by][bx] === 4) {
            answer = Math.min(cnt, answer)
            return
        }
        for (let i = 0; i < 4; i++) {
            const nax = ax + dx[i]
            const nay = ay + dy[i]
            for (let j = 0; j < 4; j++) {
                const nbx = bx + dx[j]
                const nby = by + dy[j]
                if (maze[ay][ax] !== 3) {
                    if (nax < 0 || nax >= m || nay < 0 || nay >= n) {
                        continue
                    }
                    if (maze[nay][nax] === 5) {
                        continue
                    }
                    if (aVisited[nay][nax]) {
                        continue
                    }
                    if (maze[by][bx] === 4) {
                        if (nax === bx && nay === by) {
                            continue
                        }
                    }
                }
                if (maze[by][bx] !== 4) {
                    if (nbx < 0 || nbx >= m || nby < 0 || nby >= n) {
                        continue
                    }
                    if (maze[nby][nbx] === 5) {
                        continue
                    }
                    if (bVisited[nby][nbx]) {
                        continue
                    }
                    if (maze[ay][ax] === 3) {
                        if (nbx === ax && nby === ay) {
                            continue
                        }
                    }
                }
                
                if (nax === nbx && nay === nby) {
                    continue
                }
                if (nax === bx && nay === by && nbx === ax && nby === ay) {
                    continue
                }
                
                if (maze[ay][ax] !== 3 && maze[by][bx] !== 4) {
                    aVisited[nay][nax] = 1
                    bVisited[nby][nbx] = 1
                    dfs(nax, nay, nbx, nby, cnt + 1)
                    aVisited[nay][nax] = 0
                    bVisited[nby][nbx] = 0
                } else if (maze[ay][ax] === 3 && maze[by][bx] !== 4) {
                    bVisited[nby][nbx] = 1
                    dfs(ax, ay, nbx, nby, cnt + 1)
                    bVisited[nby][nbx] = 0
                } else if (maze[ay][ax] !== 3 && maze[by][bx] === 4) {
                    aVisited[nay][nax] = 1
                    dfs(nax, nay, bx, by, cnt + 1)
                    aVisited[nay][nax] = 0
                }
            }
        }
    }
    
    const a = {}
    const b = {}
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maze[i][j] === 1) {
                a.x = j
                a.y = i
            }
            if (maze[i][j] === 2) {
                b.x = j
                b.y = i
            }
        }
    }
    aVisited[a.y][a.x] = 1
    bVisited[b.y][b.x] = 1
    dfs(a.x, a.y, b.x, b.y, 0)
    
    return answer === 99999999 ? 0 : answer
}