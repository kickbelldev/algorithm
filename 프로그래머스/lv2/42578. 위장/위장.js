function solution (clothes) {
    const map = {}
    
    clothes.forEach(([name, type]) => {
        if (!map[type]) {
            map[type] = []
        }
        map[type].push(name)
    })
    
    let answer = 1
    
    for (const list of Object.values(map)) {
        answer *= (list.length + 1)
    }
    
    return answer - 1
}