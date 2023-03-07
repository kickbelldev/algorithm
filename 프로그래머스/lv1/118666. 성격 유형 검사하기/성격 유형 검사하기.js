function solution(survey, choices) {
    const score = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0
    }
    
    for (const i in survey) {
        const type = survey[i]
        const choice = choices[i] - 4
        
        switch (type) {
            case 'RT':
            case 'CF':
            case 'JM':
            case 'AN':
                score[type] += choice
                break
            default:
                score[type.split('').reverse().join('')] -= choice
        }
    }
    let answer = ''
    
    for (const [type, point] of Object.entries(score)) {
        if (point <= 0) {
            answer += type[0]
        } else {
            answer += type[1]
        }
    }
    
    return answer
}