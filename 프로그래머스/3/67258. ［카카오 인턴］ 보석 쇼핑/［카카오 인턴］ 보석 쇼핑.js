function solution(gems) {
    const allGemsCnt = new Set(gems).size
    const gemMap = new Map()
    gemMap.set(gems[0], 1)
    
    let left = 0
    let right = 0
    
    const answer = [1, gems.length]
    
    while (right < gems.length) {
        if (gemMap.size === allGemsCnt) {
            if (answer[1] - answer[0] > right - left) {
                answer[0] = left + 1
                answer[1] = right + 1
            }
            
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1)
            
            if (!gemMap.get(gems[left])) {
                gemMap.delete(gems[left])
            }
            
            left++
        } else {
            right++
            gemMap.set(gems[right], (gemMap.get(gems[right]) ?? 0) + 1)
        }
    }
    
    return answer
}