function solution(k, dungeons) {
    const result = []
    
    const visited = Array(dungeons.length).fill(false)
    
    function dfs (count, k) {
        result.push(count)
        
        for (let i = 0; i < dungeons.length; i++) {
            const [require, consume] = dungeons[i]
            if (k >= require && !visited[i]) {
                visited[i] = true
                dfs(count + 1, k - consume)
                visited[i] = false
            }
        }
    }
    
    dfs(0, k)
    
    return Math.max(...result)
}