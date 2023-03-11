function solution (want, number, discount) {
    const wanted = want.flatMap((v, i) => Array(number[i]).fill(v)).sort()
    let answer = 0
    for (let i = 0; i <= discount.length - 10; i++) {
        const salesForTenDays = discount.slice(i, i + 10).sort()
        
        let flag = true
        for (let j = 0; j < 10; j++) {
            if (wanted[j] !== salesForTenDays[j]) {
                flag = false
                break
            }
        }
        if (flag) {
            answer++
        }
    }
    
    return answer
}