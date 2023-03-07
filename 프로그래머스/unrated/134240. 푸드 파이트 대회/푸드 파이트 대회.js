function solution(food) {
    food.shift()
    let answer = ''
    for (const i in food) {
        for (let j = 1; j < food[i]; j += 2) {
            answer += Number(i) + 1
        }
    }
    
    return answer + 0 + answer.split('').reverse().join('')
}