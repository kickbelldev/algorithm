function solution(keymap, targets) {
    const answer = []
    for (const target of targets) {
        let sum = 0
        let flag = false
        for (const char of target) {
            let min = Number.MAX_SAFE_INTEGER
            for (const key of keymap) {
                const index = key.indexOf(char)
                if (index !== -1 && min > index + 1) {
                    min = index + 1
                }
            }
            if (min !== Number.MAX_SAFE_INTEGER) {
                sum += min
            } else {
                flag = true
                break
            }
        }
        answer.push(sum !== 0 && !flag ? sum : -1)
    }
    
    return answer
}