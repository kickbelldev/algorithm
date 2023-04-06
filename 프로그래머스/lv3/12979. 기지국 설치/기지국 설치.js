function solution (n, stations, w) {
    let answer = 0
    const size = w * 2 + 1
    
    let idx = 1
    
    for (const station of stations) {
        if (station - w > idx) {
            answer += Math.ceil((station - w - idx) / size)
        }
        idx = station + w + 1
    }
    return answer + Math.ceil((n - idx + 1) / size)
}