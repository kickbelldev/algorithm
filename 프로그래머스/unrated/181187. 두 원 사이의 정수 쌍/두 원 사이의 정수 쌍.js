function solution(r1, r2) {
    let answer = 0
    let rr1 = r1 * r1
    let rr2 = r2 * r2
    answer += r2 - r1 + 1
    for (let x = 1; x < r2; x++) {
        if (x >= r1) {
            const y = Math.sqrt(rr2 - x * x)
            answer += Math.floor(y)
        } else {
            const y1 = Math.sqrt(rr1 - x * x)
            const y2 = Math.sqrt(rr2 - x * x)
            
            answer += Math.floor(y2) - Math.ceil(y1) + 1
        }
    }
    
    return answer * 4
}