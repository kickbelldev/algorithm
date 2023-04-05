function solution (begin, target, words) {
    words.unshift(begin)
    const visit = new Array(words.length).fill(false)
    
    let min = 51
    
    function dfs (idx, cnt) {
        if (words[idx] === target) {
            min = Math.min(cnt, min)
            return
        }
        if (visit[idx]) {
            return
        }
        visit[idx] = true
        for (let i = 0; i < words.length; i++) {
            let c = 0
            for (let j = 0; j < words[0].length; j++) {
                if (words[idx][j] !== words[i][j]) {
                    c++
                }
            }
            
            if (c === 1) {
                dfs(i, cnt + 1)
            }
        }
    }
    
    dfs(0, 0)
    
    return min !== 51 ? min : 0
}