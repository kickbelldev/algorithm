function solution(s) {
    const map = {}
    const answer = []
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(map[s[i]])) {
            answer.push(i - map[s[i]])
        } else {
            answer.push(-1)
        }
        map[s[i]] = i
    }
    return answer
}