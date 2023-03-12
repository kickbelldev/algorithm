function solution(numbers) {
    const answer = []

    for (const number of numbers) {
        if (number % 2 === 0) {
            answer.push(number + 1)
        }  else {
            const idx = number.toString(2).lastIndexOf('0')
            if (idx === -1) {
                answer.push(number + number + 1 - parseInt((number + 1) / 2))
            } else {
                const n = parseInt('1'.padEnd(number.toString(2).length - idx, '0'), 2)
                answer.push(number + n - parseInt(n / 2))
            }
        }
    }
    
    return answer
}