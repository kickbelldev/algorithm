function solution(n) {
    const d = Array(n + 1).fill(0)
    d[0] = 0
    d[1] = 1
    for (let i = 2; i <= n; i++) {
        d[i] = (d[i - 2] + d[i - 1]) % 1234567
    }
    
    return d[n] % 1234567
}