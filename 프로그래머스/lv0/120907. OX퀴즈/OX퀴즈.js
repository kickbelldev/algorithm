function solution(quiz) {
    const answer = []
    quiz.forEach((v) => {
        let [left, operator, right, _, result] = v.split(' ')
        left = Number(left)
        right = Number(right)
        result = Number(result)
        
        if (operator === '+') {
            const isRight = left + right === result
            answer.push(isRight ? 'O' : 'X')
        } else {
            const isRight = left - right === result
            answer.push(isRight ? 'O' : 'X')
        }  
    })
    
    return answer
}