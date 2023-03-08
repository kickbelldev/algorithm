function solution(t, p) {
    const pNum = Number(p)
    
    let answer = 0
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const num = Number(t.slice(i, i + p.length))
        if (num <= pNum) {
            answer++
        }
    }
    
    return answer
}