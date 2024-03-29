function solution(m, n, puddles) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
    dp[1][1] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) {
                
                continue
            }
            if (puddles.some((v) => (v[0] === j && v[1] === i))) {
                continue
            }
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007
        }
    }
    
    return dp[n][m]
}