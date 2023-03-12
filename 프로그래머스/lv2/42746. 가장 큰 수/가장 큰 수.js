function solution(numbers) {
    numbers = numbers.map((v) => '' + v).sort((a, b) => (b + a) - (a + b))
    let answer = ''
    for (const num of numbers) {
        answer += num
    }
    
    return answer[0] === '0' ? '0' : answer
}