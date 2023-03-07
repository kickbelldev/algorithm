function solution(score) {
    const avg = score.map(([eng, math], i) => ({ score: (eng + math) / 2, idx: i }))
    const sorted = avg.sort((a, b) => b.score - a.score)
    
    let rank = 1
    let cnt = 1
    let currentScore = sorted[0].score
    
    const result = []
    result[sorted[0].idx] = 1
    for (let i = 1; i < sorted.length; i++) {
        const { score, idx } = sorted[i]
        if (score === currentScore) {
            cnt++
        } else {
            currentScore = score
            rank += cnt
            cnt = 1
        }
        result[idx] = rank
    }
    
    return result
}