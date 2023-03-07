function solution(babbling) {
    const speak = ['aya', 'ye', 'woo', 'ma']
    let answer = 0
    babbling.forEach((bab) => {
        let curr = ''
        let flag = true
        while (flag) {
            flag = false
            for (const s of speak) {
                if (curr !== s && bab.indexOf(s) === 0) {
                    curr = s
                    flag = true
                    bab = bab.replace(s, '')
                }
            }
        }
        if (!bab.length) {
            answer++
        }
    })
    
    return answer
}