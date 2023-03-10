function solution(s) {
    let answer = 0
    for (let x = 0; x < s.length; x++) {
        const newStr = s.slice(x) + s.slice(0, x)
        if (isCorrect(newStr)) {
            answer++
        }
    }
    
    return answer
}

function isCorrect (str) {
    while (str.length) {
        const newStr = str.replace(/(\(\)|\[\]|\{\})/g, '')
        if (newStr === str) {
            return false
        }
        str = newStr
    }
    return true
}