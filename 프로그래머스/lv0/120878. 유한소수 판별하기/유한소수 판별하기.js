function solution(a, b) {
    const g = gcd(a, b)
    
    let denominator = parseInt(b / g)
    while (!(denominator % 5)) {
        denominator /= 5
    }
    
    while (!(denominator % 2)) {
        denominator /= 2
    }
    
    return denominator !== 1 ? 2 : 1
}

const gcd = (p, q) => {
    if (!q) {
        return p
    }
    return gcd(q, p % q)
}