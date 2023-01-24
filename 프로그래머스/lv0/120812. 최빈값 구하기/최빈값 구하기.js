function solution(array) {
    const map = {}
    for (const num of array) {
        map[num] = 0
    }
    
    for (const num of array) {
        map[num]++
    }
    let max = -1
    let maxCnt = 0
    
    for (const [num, cnt] of Object.entries(map)) {
        if (cnt > maxCnt) {
            max = Number(num)
            maxCnt = cnt
        }
    }
    map[max] = -1
    for (const cnt of Object.values(map)) {
        if (cnt === maxCnt) return -1
    }
    return max
}