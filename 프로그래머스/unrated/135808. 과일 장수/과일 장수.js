function solution(k, m, score) {
    score = score.sort((a, b) => b - a)
    
    const arr = []
    
    for (let i = 0; i < score.length; i++) {
        if ((i + 1) % m === 0) {
            arr.push(score.slice(i - m + 1, i + 1))
        }
    }
    return arr.reduce((acc, curr) => {
        return acc + curr.sort((a, b) => a - b)[0] * m
    }, 0)
}