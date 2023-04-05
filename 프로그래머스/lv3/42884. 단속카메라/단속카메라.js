function solution(routes) {
    routes.sort((a, b) => a[0] - b[0])
    
    let out = routes[0][1]
    
    routes.shift()
    
    let answer = 1
    
    for (const [start, end] of routes) {
        if (out < start) {
            answer++
            out = end
        }
        
        if (out > end) {
            out = end
        }
    }
    
    return answer
}