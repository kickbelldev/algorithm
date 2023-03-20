function solution(m, n, startX, startY, balls) {
    const result = []
    for (const [ballX, ballY] of balls) {
        const left = Math.pow(ballX + startX, 2) + Math.pow(ballY - startY, 2)
        const right = Math.pow(m - ballX + m - startX, 2) + Math.pow(ballY - startY, 2)
        const top = Math.pow(ballX - startX, 2) + Math.pow(n - ballY + n - startY, 2)
        const bottom = Math.pow(ballX - startX, 2) + Math.pow(ballY + startY, 2)
        const lb = Math.pow(Math.sqrt(Math.pow(startX, 2) + Math.pow(startY, 2)) + Math.sqrt(Math.pow(ballX, 2) + Math.pow(ballY, 2)), 2)
        const rb = Math.pow(Math.sqrt(Math.pow(m - startX, 2) + Math.pow(startY, 2)) + Math.sqrt(Math.pow(m - ballX, 2) + Math.pow(ballY, 2)), 2)
        const lt = Math.pow(Math.sqrt(Math.pow(startX, 2) + Math.pow(n - startY, 2)) + Math.sqrt(Math.pow(ballX, 2) + Math.pow(n - ballY, 2)), 2)
        const rt = Math.pow(Math.sqrt(Math.pow(m - startX, 2) + Math.pow(n - startY, 2)) + Math.sqrt(Math.pow(m - ballX, 2) + Math.pow(n - ballY, 2)), 2)
        if (ballY === startY) {
            const arr = [top, bottom, lb, rb, lt, rt]
            if (startX < ballX) {
                arr.push(left)
            } else {
                arr.push(right)
            }
            result.push(Math.min(...arr))
        } else if (ballX === startX) {
            const arr = [left, right, lb, rb, lt, rt]
            if (startY < ballY) {
                arr.push(bottom)
            } else {
                arr.push(top)
            }
            result.push(Math.min(...arr))
        } else {
            result.push(Math.min(left, right, top, bottom)) 
        }
    }
    
    return result
}