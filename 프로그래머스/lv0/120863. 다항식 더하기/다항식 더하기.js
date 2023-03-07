function solution(polynomial) {
    const arr = polynomial.split(' + ')
    const result = arr.reduce((acc, curr) => {
        let { x, k } = acc
        const num = parseInt(curr.replace('x', ''))
        if (curr.includes('x')) {
            x += Number.isNaN(num) ? 1 : num
        } else {
            k += Number.isNaN(num) ? 1 : num
        }
        return { x, k }
    }, { x: 0, k: 0 })
    
    let answer = ''
    
    if (result.x) {
        if (result.x === 1) {
            answer += 'x'
        } else {
            answer += `${result.x}x`   
        }
        if (result.k) {
            answer += ` + ${result.k}`
        }
    } else if (result.k) {
        answer += `${result.k}`
    }
    
    return answer
}