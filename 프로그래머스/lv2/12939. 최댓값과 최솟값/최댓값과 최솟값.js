function solution(s) {
    const arr = s.split(' ').map((v) => Number(v))
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    
    return `${min} ${max}`
}