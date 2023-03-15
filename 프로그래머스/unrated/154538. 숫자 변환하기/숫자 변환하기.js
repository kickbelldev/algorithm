function solution(x, y, n) {
    const d = Array(y + 1).fill(1000001)

    d[x] = 0
    d[x + n] = 1
    d[x * 2] = 1
    d[x * 3] = 1
    
    for (let i = x + 1; i <= y; i++) {
        if (x <= i - n) {
            d[i] = Math.min(d[i - n] + 1, d[i])
        }
        if (i % 2 === 0 && x <= i / 2) {
            d[i] = Math.min(d[Math.floor(i / 2)] + 1, d[i])
        }
        if (i % 3 === 0 && x <= i / 3) {
            d[i] = Math.min(d[Math.floor(i / 3)] + 1, d[i])
        }
    }
    
    return d[y] !== 1000001 ? d[y] : -1
}