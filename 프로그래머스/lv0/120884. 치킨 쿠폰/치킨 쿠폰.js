function solution(chicken) {
    let coupon = chicken
    let answer = 0
    while (coupon >= 10) {
        const service = Math.floor(coupon / 10)
        answer += service
        coupon = coupon % 10 + service
    }
    
    return answer
}