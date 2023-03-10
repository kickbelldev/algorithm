function solution (k, tangerine) {
    const map = {}
    
    for (const t of tangerine) {
        if (!map[t]) {
            map[t] = 0
        }
        
        map[t]++
    }
    let answer = 0
    for (const [t, cnt] of Object.entries(map).sort((a, b) => b[1] - a[1])) {
        answer++
        k -= cnt
        if (k <= 0) {
            return answer
        }
    }
    
    return answer
}