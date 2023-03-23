function solution (picks, minerals) {
    const a = [
        { diamond: 1, iron: 1, stone: 1 },
        { diamond: 5, iron: 1, stone: 1 },
        { diamond: 25, iron: 5, stone: 1 }
    ]
    
    function dfs (curr, idx) {
        if (idx >= minerals.length) {
            return 0
        }
        
        let f = 0
        
        for (let i = idx; i < Math.min(idx + 5, minerals.length); i++) {
            f += a[curr][minerals[i]]
        }
        
        let fp = 2e9
        
        for (let i = 0; i < 3; i++) {
            if (picks[i]) {
                picks[i]--
                const newFp = dfs(i, idx + 5)
                fp = Math.min(fp, newFp)
                picks[i]++
            }
        }
        return fp >= 2e9 ? f : f + fp
    }
    
    let min = 2e9
    
    for (let i = 0; i < 3; i++) {
        if (picks[i]) {
            picks[i]--
            min = Math.min(dfs(i, 0), min)   
            picks[i]++
        }
    }
    
    return min
}