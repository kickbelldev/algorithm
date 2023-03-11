function solution (land) {
    const d = Array(land.length).fill(0).map(() => Array(4).fill(0))
    
    for (let i = 0; i < 4; i++) {
        d[0][i] = land[0][i]
    }
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            const arr = []
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    arr.push(d[i - 1][k])
                }
            }
            d[i][j] = Math.max(...arr) + land[i][j]
        }
    }
    
    return Math.max(...d[land.length - 1])
}