function solution(lines) {
    let answer = 0
    
    for (let i = -100; i <= 100; i++) {
        let cnt = 0
        for (const [start, end] of lines) {
            if (start <= i && i < end) {
                cnt++
            }
        }
        if (cnt > 1) {
            answer++
        }
    }
    
    return answer
}