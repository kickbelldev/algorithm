function solution (board) {
    const d = new Array(board.length + 1).fill(0).map(() => new Array(board[0].length + 1).fill(0))
    
    let max = 0
    
    for (let i = 1; i <= board.length; i++) {
        for (let j = 1; j <= board[0].length; j++) {
            if (board[i - 1][j - 1]) {
                d[i][j] = Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]) + 1
                if (d[i][j] > max) {
                    max = d[i][j]
                }
            }
        }
    }
    
    return Math.pow(max, 2)
}