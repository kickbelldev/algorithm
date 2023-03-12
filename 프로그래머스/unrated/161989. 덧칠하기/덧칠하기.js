function solution(n, m, section) {
    const arr = new Array(n).fill(true)
    
    for (const item of section) {
        arr[item] = false
    }
    
    let unpaintedIndex = arr.indexOf(false)
    
    let answer = 0
    
    while (~unpaintedIndex) {
        for (let i = 0; i < m; i++) {
            arr[unpaintedIndex + i] = true
        }
        answer++
        unpaintedIndex = arr.indexOf(false)
    }
    
    return answer
}