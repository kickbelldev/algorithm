const factorial = (n) => {
    if (n === 1) return BigInt(1)
    return BigInt(n) * BigInt(factorial(n - 1))
}

function solution(balls, share) {
    if (share === balls) {
        return 1
    }
    return parseInt(factorial(balls) / factorial(balls - share) / factorial(share))
}