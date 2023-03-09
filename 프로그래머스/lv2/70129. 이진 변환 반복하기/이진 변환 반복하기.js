function solution(s) {
    let zeroCnt = 0
    let repeatCnt = 0
    while (s !== '1') {
        for (const char of s) {
            if (char === '0') {
                zeroCnt++
            }
        }
        
        s = s.replaceAll('0', '')
        
        s = parseInt(s.length).toString(2)

        repeatCnt++
    }
    
    return [repeatCnt, zeroCnt]
}