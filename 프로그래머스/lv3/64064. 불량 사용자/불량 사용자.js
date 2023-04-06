function check (id, ban) {
    const regStr = `^${ban.replaceAll('*', '.')}$`
    const regex = new RegExp(regStr)
    return regex.test(id)
}

function solution (user_id, banned_id) {
    const set = new Set()
    
    const visit = [...user_id].fill(false)
    
    function dfs (idx, cnt, str) {
        if (cnt === banned_id.length) {
            const arr = str.split(' ')
            arr.sort()
            const newStr = arr.join('')
            set.add(newStr)
        }
        
        if (idx >= user_id.length) {
            return
        }
        
        for (let i = idx; i < banned_id.length; i++) {
            for (let j = 0; j < user_id.length; j++) {
                if (visit[j]) {
                    continue
                }
                if (!check(user_id[j], banned_id[i])) {
                    continue
                }
                
                visit[j] = true
                dfs(i + 1, cnt + 1, str + ' ' + user_id[j])
                visit[j] = false
            }
        }
    }
    
    dfs(0, 0, '')
    
    return set.size
}