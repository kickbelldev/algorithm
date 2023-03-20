function solution(n, k) {
    const arr = new Array(n).fill(1).map((v, i) => v + i)
    
    const factorial = [1, 1]
    
    for (let i = 2; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i
    }
    
    let result = []
    
    k--
    
    while (arr.length) {
        if (k === 0) {
            result.push(...arr)
            break
        }
        const fact = factorial[arr.length - 1]
        const index = parseInt(k / fact)
        k %= fact
        
        result.push(arr[index])
        arr.splice(index, 1)
    }
    
    return result
}