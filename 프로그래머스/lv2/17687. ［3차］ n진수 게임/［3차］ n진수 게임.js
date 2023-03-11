function solution (n, t, m, p) {
    const arr = []
    for (let i = 0; i < t * m; i++) {
        const num = i.toString(n).split('')
        arr.push(...num)
    }
    
    return arr.filter((_, i) => i % m === p - 1).slice(0, t).join('').toUpperCase()
}