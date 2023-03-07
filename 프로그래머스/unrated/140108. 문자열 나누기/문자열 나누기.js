function solution(s) {
    let answer = 0
    let str = s
    while (str.length) {
        const x = str[0]
        let xCnt = 0
        let otherCnt = 0

        let index = str.length
        for (let i = 0; i < str.length; i++) {
            const char = str[i]
            if (x === char) {
                xCnt++
            } else {
                otherCnt++
            }
            if (xCnt === otherCnt) {
                index = i
                break
            }
        }
        answer++
        str = str.substring(index + 1)
    }
    
    return answer
}