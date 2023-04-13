function solution(targets) {
    targets.sort((a, b) => a[1] - b[1])
    let last_end = -1.5
    let cnt = 0
    for (const [s, e] of targets) {
        if (s <= last_end) {
            last_end = Math.min(last_end, e - 0.5)
        } else {
            cnt++
            last_end = e - 0.5
        }
    }
    
    return cnt
}