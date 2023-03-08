function solution(n) {
    let num = 0
    for (let i = 1; i <= n; i++) {
        while (num % 3 === 0 || String(num).includes('3')) {
            num++
        }
        num++
    }
    
    return num - 1
}