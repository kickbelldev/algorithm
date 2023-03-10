function solution (n) {
    let d = Array(n + 1).fill(0)
    d[1] = 1
    d[2] = 2
    d[3] = 3
    for (let i = 4; i <= n; i++) {
        d[i] = (d[i - 2] + d[i - 1]) % 1234567
    }
    
    return d[n] % 1234567
}