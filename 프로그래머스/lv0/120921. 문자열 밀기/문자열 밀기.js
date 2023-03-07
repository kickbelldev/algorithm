function solution(A, B) {
    let answer = 0
    while (A !== B && answer < A.length) {
        A = A.slice(A.length - 1, A.length) + A.slice(0, A.length - 1)
        answer++
    }
    return answer >= A.length ? -1 : answer
}