function solution(n) {
    const answer = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    
    let d = 0
    let num = 1
    
    let x = 0
    let y = 0
    
    while (num < n * n) {
        const nx = x + dx[d]
        const ny = y + dy[d]
        
        if (nx >= n) {
            d = 1
            continue
        }
        if (ny >= n) {
            d = 2
            continue
        }
        if (nx < 0) {
            d = 3
            continue
        }
        if (ny < 0) {
            d = 0
            continue
        }
        if (answer[ny][nx]) {
            switch (d) {
                case 0:
                    d = 1
                    continue
                case 1:
                    d = 2
                    continue
                case 2:
                    d = 3
                    continue
                case 3:
                    d = 0
                    continue
            }
        }
        
        answer[y][x] = num++
        x = nx
        y = ny
    }
    
    answer[y][x] = num
    
    return answer
}