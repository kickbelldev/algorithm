function solution(n, words) {
    let man = 0
    let cnt = 0
    
    const map = {}
    const turn = Array(n + 1).fill(0)
    
    map[words[0]] = true
    turn[1] = 1
    for (let i = 1; i < words.length; i++) {
        const word = words[i]
        const previous = words[i - 1] || ''
        const current = i % n + 1
        
        turn[current]++
        
        if (map[word] || previous[previous.length - 1] !== word[0]) {
            man = current
            break
        }
        
        map[word] = true
    }
    
    if (man) {
        return [man, turn[man]]
    }
    return [0, 0]
}