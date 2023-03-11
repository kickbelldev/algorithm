function solution(n, k) {
    const str = n.toString(k)
    const arr = str.split('0')
    
    let answer = 0
    
    for (const s of arr) {
        const num = Number(s)
        if (num > 1) {
            let flag = true
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    flag = false
                    break
                }
            }
            
            if (flag) {
                answer++
            }
        }
    }
    
    return answer
}