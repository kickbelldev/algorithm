function solution(w, h) {
    return w * h - (w + h - gcd(w, h))
}

function gcd (p, q) {
    if (q === 0) {
        return p
    }
    
    return gcd(q, p % q)
}