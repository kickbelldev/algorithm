function solution (citations) {
    let h = 0
    while (h <= citations.length) {
        let cnt = 0
        for (const num of citations) {
            if (h <= num) {
                cnt++
            }
        }
        
        if (h > cnt) {
            break
        }
        
        let cnt2 = 0
        for (const num of citations) {
            if (h > num) {
                cnt2++
            }
        }
        
        if (cnt2 > h) {
            break
        }
        
        h++
    }
    
    return h - 1
}