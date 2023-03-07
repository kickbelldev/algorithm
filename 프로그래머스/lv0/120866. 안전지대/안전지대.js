function solution(board) {
    const n = board.length
    const isSafe = new Array(n).fill().map(() => new Array(n).fill(true))
    const dx = [
        -1, 0, 1,
        -1, 0, 1,
        -1, 0, 1
    ]
    const dy = [
        -1, -1, -1,
        0, 0, 0,
        1, 1, 1
    ]
    board.forEach((row, i) => {
        row.forEach((item, j) => {
            if (item === 1) {
                for (let k in dx) {
                    const nx = dx[k] + i
                    const ny = dy[k] + j
                    if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
                        continue
                    }
                    isSafe[nx][ny] = false
                }
            }
        })
    })
    return isSafe.reduce((acc, curr) => acc + curr.reduce((acc, curr) => acc + (curr ? 1 : 0), 0),0)
}