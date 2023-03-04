function solution(dots) {
    const [a, b, c, d] = dots
    
    const right = Math.max(a[0], b[0], c[0], d[0])
    const left = Math.min(a[0], b[0], c[0], d[0])
    const top = Math.max(a[1], b[1], c[1], d[1])
    const bottom = Math.min(a[1], b[1], c[1], d[1])
    
    return (right - left) * (top - bottom)
}