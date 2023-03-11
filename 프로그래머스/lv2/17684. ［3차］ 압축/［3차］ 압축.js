function solution (msg) {
    const dict = Array(26).fill(0).map((_, i) => String.fromCharCode(65 + i))
    
    if (msg.length === 1) {
        return [msg.charCodeAt(0) - 65 + 1]
    }
    
    const answer = []
    
    let i = 0
    let cnt = 1
    while (i < msg.length) {
        let w
        for (const word of dict) {
            if (msg.indexOf(word) === i) {
                cnt = word.length
                w = msg.slice(i, i + cnt)
            }
        }
        msg = msg.slice(i + cnt)
        const c = msg.slice(0, 1)
        
        const idx = dict.indexOf(w)
        
        if (~idx) {
            answer.push(idx + 1)
            dict.push(w + c)
            
            i = 0
            
        } else {
            cnt++
            break
        }
    }

    
    return answer
}