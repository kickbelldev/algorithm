function solution (A, B) {
    
    A.sort((a, b) => b - a)
    B.sort((a, b) => a - b)
    
    let answer = 0
    
    for (let i = 0; i < A.length; i++) {
        const max = B[B.length - 1]
        
        if (A[i] < max) {
            answer++
            B.pop()
        }
    }
    
    return answer
}