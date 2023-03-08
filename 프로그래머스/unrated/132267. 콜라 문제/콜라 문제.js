function solution(a, b, n) {
    let sum = 0
    while (n >= a) {
        n -= a
        n += b
        sum += b
    }
    
    return sum
}