function solution(k, d) {
    let answer = 0
    for (let i = 0; i <= d; i += k) {
        const j = (d ** 2 - i ** 2) ** 0.5
        answer += Math.ceil(j / k) + (j % k === 0 ? 1 : 0)
    }
    return answer
}