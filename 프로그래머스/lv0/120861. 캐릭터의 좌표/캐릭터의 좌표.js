function solution(keyinput, board) {
    let x = 0
    let y = 0
    
    const left = -Math.floor(board[0] / 2)
    const right = Math.floor(board[0] / 2)
    const top = Math.floor(board[1] / 2)
    const bottom = -Math.floor(board[1] / 2)
    for (const key of keyinput) {
        switch (key) {
            case 'up':
                if (y < top) y += 1
                break
            case 'down':
                if (y > bottom) y -= 1
                break
            case 'right':
                if (x < right) x += 1
                break
            case 'left':
                if (x > left) x -= 1
                break
        }
    }
    return [x, y]
}