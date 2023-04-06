function solution (sticker) {
    const len = sticker.length + 2
    
    const d1 = new Array(len).fill(0)
    const d2 = new Array(len).fill(0)
    
    if(sticker.length === 1) return sticker[0] 
    
    for (let i = 2; i < len - 1; i++) {
        d1[i] = Math.max(d1[i - 1], d1[i - 2] + sticker[i - 2])
    }
    for (let i = 3; i < len; i++) {
        d2[i] = Math.max(d2[i - 1], d2[i - 2] + sticker[i - 2])
    }
    
    return Math.max(d1[len - 2], d2[len - 1])
}