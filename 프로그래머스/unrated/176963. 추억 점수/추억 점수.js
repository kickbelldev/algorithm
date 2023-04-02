function solution (name, yearning, photo) {
    const map = {}
    for (let i = 0; i < name.length; i++) {
        map[name[i]] = yearning[i]
    }
    const answer = []
    for (const p of photo) {
        let sum = 0
        for (const m of p) {
            if (map[m]) {
                sum += map[m]   
            }
        }
        answer.push(sum)
    }
    
    return answer
}