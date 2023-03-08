function solution(s){
    const stack = []
    
    for (const char of s) {
        if (char === `(`) {
            stack.push(`(`)
        } else {
            const a = stack.pop()
            if (!a) return false
        }
    }
    if (stack.length) return false
    return true
}