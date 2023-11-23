function solution (clothes) {
    const map = {}
    
    clothes.forEach(([name, type]) => {
        if (!map[type]) {
            map[type] = 1
        }
        map[type]++
    })
    
    let answer = 1
    
    for (const cnt of Object.values(map)) {
        answer *= cnt
    }
    
    return answer - 1
}