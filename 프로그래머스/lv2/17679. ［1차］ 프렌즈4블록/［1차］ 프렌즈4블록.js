function solution(m, n, board) {
    
    const dx = [0, 1, 0, 1]
    const dy = [0, 0, 1, 1]
    board = board.map((v) => v.split(''))
    
    function check (x, y, block, arr) {
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if (board[ny][nx] === block) {
                arr.push({ x: nx, y: ny })   
            }
        }
        
        return arr
    }
    
    let answer = 0
    
    let flag = true
    while (flag) {
        flag = false
        
        const set = new Set()
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j]) {
                    const checked = check(j, i, board[i][j], [])
                    if (checked.length >= 4) {
                        flag = true
                        checked.map(({ x, y }) => `${x}/${y}`).forEach((v) => set.add(v))
                    }
                }
            }
        }
        answer += set.size
        set.forEach((v) => {
            const [x, y] = v.split('/')
            board[y][x] = 0
        })
        let flag2 = true
        while (flag2) {
            flag2 = false
            for (let i = 1; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    if (!board[i][j] && board[i - 1][j]) {
                        board[i][j] = board[i - 1][j]
                        board[i - 1][j] = 0
                        flag2 = true
                    }
                }
            }
        }
    }
    
    return answer
}