function solution(s) {
    if(s.length % 2 === 1) return 0

    let answer = 0
    for (let x = 0; x < s.length; x++) {
        const newStr = s.slice(x) + s.slice(0, x)
        if (isCorrect(newStr)) {
            answer++
        }
    }
    
    return answer
}

const mapping = { ')': '(', '}': '{', ']': '[' }

function isCorrect (str) {
    const stack = []
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "[" || str[i] === "(" || str[i] === "{" ) {
            stack.push(str[i])
        } else {
            const last = stack.pop()
            if(last !== mapping[str[i]]) {
                return false
            }
        }
    }
    return true
}