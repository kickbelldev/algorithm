function solution (p) {
    function s (w) {
        if (w === '') {
            return w
        }
        for (let i = 1; i <= w.length; i++) {
            let u = w.slice(0, i)
            if (checkBalanced(u)) {
                let v = w.slice(i)
                
                if (checkBalanced(v)) {
                    if (checkRight(u)) {
                        return u + s(v)
                    } else {
                        return '(' + s(v) + ')' + removeAndReverse(u)
                    }
                }
            }
        }
    }
    
    return s(p)
}

function checkBalanced (w) {
    if (w === '') {
        return true
    }
    const regex1 = /\(/g
    const regex2 = /\)/g
    
    const leftCnt = (w.match(regex1) || []).length
    const rightCnt = (w.match(regex2) || []).length
    return leftCnt === rightCnt
}

function checkRight (w) {
    const arr = w.split('')
    
    const stack = []
    
    for (const char of arr) {
        if (char === '(') {
            stack.push('(')
        } else {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    
    return true
}

function removeAndReverse (w) {
    const result = w.slice(1, w.length - 1).replace(/\(/g, 'a').replace(/\)/g, '(').replace(/a/g, ')')
    return result
}